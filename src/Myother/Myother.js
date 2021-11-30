import React, { useState, useEffect } from "react";
import { Container, Badge, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Zoom from "react-reveal/Zoom";
// const others = [
//   {
//     name: "Book Archive",
//     id:1,
//     details:'book Archive is a vanilla js project. you can search any types of book here and on your search it gives the result .',
//     technology:'vanillaJs, bootstrap, html, css',
//     img: "https://i.ibb.co/DpS8SZv/Screenshot-16.png",
//     live:"https://book-archive-85c765.netlify.app/",
//     client:"https://github.com/TareqAhsan/book-archive-6",

//   },
//   {
//     name: "interactive mac",
//     id:2,
//     details:'Interactive mac book is a vinalla js project that helps you to buy any parts of a macbook when you buy the parts there are some additional charge like shipping charge etc and also give you offer when you apply the Promo Code.',
//     technology:'vanillaJs, bootstrap, html, css',
//     img: "https://i.ibb.co/LQw4Spv/mac.png",
//     live:"https://hopeful-bassi-dff891.netlify.app/",
//     client:"https://github.com/TareqAhsan/interactive-mac-book",
//   },
//   {
//     name: "Weather",
//     id:3,
//     details:'Weather app is also a vanilla project that helps you to now any places weather anytime on your search result it shows yu the result of weather.',
//     technology:'vanillaJs, bootstrap, html, css',
//     img: "https://i.ibb.co/k23mJg2/Screenshot-20.png",
//     live:"https://tareqahsan.github.io/weather.js/",
//     client:"https://github.com/TareqAhsan/weather.js",
//   },
// ];
const Myother = () => {
  const [others, setOthers] = useState();

  useEffect(() => {
    fetch("/jsproject.json")
      .then((res) => res.json())
      .then((data) => setOthers(data));
  }, []);

  return (
    <div>
      <Container className="py-4">
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {others?.map((other) => (
            <Zoom>
              <div className="col" key={other.id}>
                <div
                  class="card border-0 shadow h-100 text-center"
                  style={{ borderRadius: "15px" }}
                >
                  <img
                    src={other.img}
                    class="card-img-top"
                    alt="..."
                    style={{ borderRadius: "15px", height: "250px" }}
                  />
                  <div class="card-body">
                    <h5 class="card-title">{other.name}</h5>
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
                    <a href={other.live} target="_blank" rel="noreferrer">
                      <Button
                        variant="outline-primary"
                        style={{ borderRadius: "8px" }}
                      >
                        live link <i class="fas fa-link"></i>
                      </Button>
                    </a>
                    <a href={other.client} target="_blank" rel="noreferrer">
                      <Button
                        variant="outline-primary"
                        className="m-1"
                        style={{ borderRadius: "8px" }}
                      >
                        Code Link <i class="fab fa-github"></i>
                      </Button>
                    </a>
                    <Link to={`/myotherdetails/${other.id}`}>
                      <Button
                        variant="outline-primary"
                        style={{ borderRadius: "8px" }}
                      >
                        see details
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </Zoom>
          ))}
          {/* <div className="col">
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
          </div> */}
          {/* <div className="col">
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
          </div> */}
        </div>
      </Container>
    </div>
  );
};

export default Myother;
