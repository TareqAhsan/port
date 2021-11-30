import React, { useRef } from "react";
import emailjs from "emailjs-com";
import Zoom from "react-reveal/Zoom";
import { Container } from "react-bootstrap";
import Fade from 'react-reveal/Fade';
const Contact = () => {
  const form = useRef();
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_pxja7yf",
        "template_8coc6ji",
        form.current,
        "user_fSGkwcuHhVtpqUjazy1dr"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  return (
    <div>
      <Container className="py-5">
        <Fade left>
          {" "}
          <h1 className="display-6 text-center py-3">Contact with me</h1>{" "}
        </Fade>
        <Zoom>
          <form
            onSubmit={sendEmail}
            ref={form}
            className="shadow p-4 my-3"
            style={{ borderRadius: "16px" }}
          >
            <div class="mb-3">
              <label for="formGroupExampleInput" class="form-label">
                Name
              </label>
              <input
                type="text"
                class="form-control"
                placeholder="name"
                name="name"
              />
            </div>
            <div class="mb-3">
              <label for="formGroupExampleInput2" class="form-label">
                Email
              </label>
              <input
                type="email"
                class="form-control"
                placeholder="your email"
                name="email"
              />
            </div>
            <div class="mb-3">
              <label for="formGroupExampleInput2" class="form-label">
                subject
              </label>
              <input
                type="text"
                class="form-control"
                placeholder="subject"
                name="subject"
              />
            </div>
            <div class="mb-3">
              <label for="formGroupExampleInput2" class="form-label">
                Your message
              </label>
              <textarea
                cols="30"
                rows="8"
                class="form-control"
                placeholder="your message"
                name="message"
              />
            </div>
            <div class="mb-3">
              <input
                type="submit"
                value="send-message"
                className="btn btn-info"
              />
            </div>
          </form>
        </Zoom>
      </Container>
    </div>
  );
};

export default Contact;
