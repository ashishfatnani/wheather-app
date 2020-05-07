const express = require("express");
const router = express.Router();
const User = require("../models/Users");
const Properties = require("../models/Properties");
const { check, validationResult } = require("express-validator");
const auth = require("../middleware/auth");

router.get("/", async (req, res) => {
  try {
    const properties = await Properties.find().sort({
      date: -1,
    });
    res.json(properties);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Server error" });
  }
});

router.post(
  "/",
  [
    auth,
    [
      check("name", "Name is required").not().isEmpty(),
      check("property_type", "Type is required").not().isEmpty(),
      check("area", "Area is required").not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { name, property_type, area, contact_info } = req.body;
    try {
      const newProperty = new Properties({
        name,
        property_type,
        area,
        contact_info,
        user: req.user.id,
      });
      const property = await newProperty.save();
      res.json(property);
    } catch (error) {
      console.log(error);
      res.status(500).json({ msg: "Server Error" });
    }
  }
);
router.put("/:id", auth, async (req, res) => {
  const { name, property_type, area, contact_info } = req.body;
  const propertyDetails = {};
  if (name) propertyDetails.name = name;
  if (property_type) propertyDetails.property_type = property_type;
  if (area) propertyDetails.area = area;
  if (contact_info) propertyDetails.contact_info = contact_info;
  try {
    let property = await Properties.findById(req.params.id);
    if (!property) {
      return res.status(400).json({ msg: "Property not found" });
    }

    if (property.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "Not authorized" });
    }

    property = await Properties.findByIdAndUpdate(
      req.params.id,
      { $set: propertyDetails },
      { new: true }
    );
    res.json(property);
  } catch (error) {
    console.error(er.message);
    res.status(500).send("Server Error");
  }
});

router.delete("/:id", auth, async (req, res) => {
  try {
    let property = await Properties.findById(req.params.id);

    if (!property) return res.status(404).json({ msg: "Property not found" });

    // Make sure user owns contact
    if (property.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "Not authorized" });
    }

    await Properties.findByIdAndRemove(req.params.id);

    res.json({ msg: "Property removed" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
