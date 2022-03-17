import React from "react";

function Contact() {
  return (
    <section id="contact">
      <div className="container-lg">
        <div className="text-center">
          <h2>Get In touch</h2>
          <p className="lead">
            Questions to ask? Fill out the form to contact me directly...
          </p>
        </div>
        <div className="row justify-content-center my-5">
          <div className="col-lg-6">
            <form>
              <label htmlFor="email" className="form-label">
                Email address:
              </label>

              <div className="mb-4 input-group">
                <span className="input-group-text">
                  <i className="bi bi-envelope-fill"></i>
                </span>
                <input
                  type="email"
                  className="form-control"
                  placeholder="e.g. Kiyoonewton41@gmail.com"
                />
                <span
                  className="input-group-text"
                  data-tip="Enter an email address we can reply to."
                  data-type="warning"
                  data-place="bottom"
                >
                  <i className="bi bi-question-circle text-muted"></i>
                </span>
              </div>

              <label htmlFor="name" className="form-label">
                Name:
              </label>
              <div className="input-group mb-4">
                <span className="input-group-text">
                  <i className="bi bi-person-fill"></i>
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="e.g Kiyoonewton"
                />
                <span
                  className="input-group-text"
                  data-tip="Enter your Firstname to get to know you."
                  data-type="warning"
                  data-place="bottom"
                >
                  <i className="bi bi-question-circle text-muted"></i>
                </span>
              </div>

              <label htmlFor="subject" className="form-label">
                What is your question about?
              </label>
              <div className="input-group mb-4">
                <span className="input-group-text">
                  <i className="bi bi-chat-right-dots-fill"></i>
                </span>

                <select id="subject" className="form-select">
                  <option value="pricing" selected>
                    pricing
                  </option>
                  <option value="content">Content query</option>
                  <option value="other">Other query</option>
                </select>
              </div>
              <div className="form-floating mb-4 mt-3">
                <textarea
                  name=""
                  id="query"
                  style={{ height: "140px" }}
                  className="form-control"
                ></textarea>
                <label htmlFor="query">Your query...</label>
              </div>

              <div className="mb-4 text-center">
                <button className="btn btn-secondary" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
