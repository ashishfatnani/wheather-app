import React from "react";

const ContactUs = () => {
  return (
    <div>
        <br></br>
      <h1>
        <b>
          Contact <span className="text-primary"> Us !</span>
        </b>
      </h1>
      <br></br>
      <form>
        <div className="form-group">
          <label for="exampleInputPassword1">
            <b>Name</b>
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            required
          />
        </div>

        <div className="form-group">
          <label for="exampleInputEmail1">
            <b>Email address</b>
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            required
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label for="exampleFormControlSelect2">
            <b>Type of Query</b>
          </label>
          <select class="form-control" id="exampleFormControlSelect2" required>
            <option>Select</option>
            <option>Regarding services</option>
            <option>Customer care</option>
            <option>Your Account details</option>
            <option>Regarding Website</option>
          </select>
        </div>
        <div class="form-group">
          <label for="exampleFormControlTextarea1">
            <b>Description</b>
          </label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            required
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
