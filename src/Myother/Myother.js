import React from "react";
import { Container, Badge, Button } from "react-bootstrap";
const Myother = () => {
  return (
    <div>
      <Container className="py-4">
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          <div className="col">
            <div
              class="card border-0 shadow h-100 text-center"
              style={{ borderRadius: "15px" }}
            >
              <img
                src="https://i.ibb.co/DpS8SZv/Screenshot-16.png"
                class="card-img-top"
                alt="..."
                style={{ borderRadius: "15px", height: "250px" }}
              />
              <div class="card-body">
                <h5 class="card-title">Book Archive</h5>
                <p class="card-text">
                  <div>
                    <Badge pill bg="primary">
                      Javascript
                    </Badge>{" "}
                    <Badge pill bg="secondary">
                      Bootstrap
                    </Badge>{" "}
                    <Badge pill bg="success">
                      html
                    </Badge>{" "}
                    <Badge pill bg="danger">
                      css
                    </Badge>{" "}
                  </div>
                </p>
              </div>
              <div className="py-3 text-center">
                <a href="https://book-archive-85c765.netlify.app/">
                  <Button
                    variant="outline-primary"
                    style={{ borderRadius: "8px" }}
                  >
                    live link <i class="fas fa-link"></i>
                  </Button>
                </a>
                <a href="https://github.com/TareqAhsan/book-archive-6">
                  <Button
                    variant="outline-primary"
                    className="m-1"
                    style={{ borderRadius: "8px" }}
                  >
                    Code Link <i class="fab fa-github"></i>
                  </Button>
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div
              class="card border-0 shadow h-100 text-center"
              style={{ borderRadius: "15px" }}
            >
              <img
                src="https://i.ibb.co/LQw4Spv/mac.png"
                class="card-img-top"
                alt="..."
                style={{ borderRadius: "15px", height: "250px" }}
              />
              <div class="card-body">
                <h5 class="card-title">interactive mac</h5>
                <p class="card-text">
                  <div>
                    <Badge pill bg="primary">
                      Javascript
                    </Badge>{" "}
                    <Badge pill bg="secondary">
                      Bootstrap
                    </Badge>{" "}
                    <Badge pill bg="success">
                      html
                    </Badge>{" "}
                    <Badge pill bg="danger">
                      css
                    </Badge>{" "}
                  </div>
                </p>
              </div>
              <div className="py-3 text-center">
                <a href="https://hopeful-bassi-dff891.netlify.app/">
                  <Button
                    variant="outline-primary"
                    style={{ borderRadius: "8px" }}
                  >
                    live link <i class="fas fa-link"></i>
                  </Button>
                </a>
                <a href="https://github.com/TareqAhsan/interactive-mac-book">
                  <Button
                    variant="outline-primary"
                    className="m-1"
                    style={{ borderRadius: "8px" }}
                  >
                    Code Link <i class="fab fa-github"></i>
                  </Button>
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div
              class="card border-0 shadow h-100 text-center"
              style={{ borderRadius: "15px" }}
            >
              <img
                src="https://i.ibb.co/k23mJg2/Screenshot-20.png"
                class="card-img-top"
                alt="..."
                style={{ borderRadius: "15px", height: "250px" }}
              />
              <div class="card-body">
                <h5 class="card-title">Weather</h5>
                <p class="card-text">
                  <div>
                    <Badge pill bg="primary">
                      Javascript
                    </Badge>{" "}
                    <Badge pill bg="secondary">
                      Bootstrap
                    </Badge>{" "}
                    <Badge pill bg="success">
                      html
                    </Badge>{" "}
                    <Badge pill bg="danger">
                      css
                    </Badge>{" "}
                  </div>
                </p>
              </div>
              <div className="py-3 text-center">
                <a href="https://tareqahsan.github.io/weather.js/">
                  <Button
                    variant="outline-primary"
                    style={{ borderRadius: "8px" }}
                  >
                    live link <i class="fas fa-link"></i>
                  </Button>
                </a>
                <a href="https://github.com/TareqAhsan/weather.js">
                  <Button
                    variant="outline-primary"
                    className="m-1"
                    style={{ borderRadius: "8px" }}
                  >
                    Code Link <i class="fab fa-github"></i>
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Myother;
