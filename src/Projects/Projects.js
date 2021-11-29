import React from "react";
import { Badge, Container, Button } from "react-bootstrap";
const merns = [
  {
    name: "sunglassShopBD",
    img: "https://i.ibb.co/pJSVKt2/1.png",
    live:"https://niche-products-2f8e9.firebaseapp.com/",
    client:"https://github.com/TareqAhsan/niche-product-client",
    server:"https://github.com/TareqAhsan/niche-product-server",
  },
  {
    name: "Adventure Travel",
    img: "https://i.ibb.co/RcG3yTx/2.png",
    live:"https://assignment---11.firebaseapp.com/",
    client:"https://github.com/TareqAhsan/Adventure-Travel-11",
    server:"https://github.com/TareqAhsan/Adventure-Travel-11-server",
  },
];

const Projects = () => {
  return (
    <div>
      <Container className="py-4">
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {merns.map((mern) => (
            <div className="col">
              <div
                class="card border-0 shadow h-100 text-center"
                style={{ borderRadius: "15px" }}
              >
                <img
                  src={mern.img}
                  class="card-img-top"
                  alt="..."
                  style={{ borderRadius: "15px",height:'250px' }}
                />
                <div class="card-body">
                  <h5 class="card-title">{mern.name}</h5>
                  <p class="card-text">
                    <div>
                      <Badge pill bg="primary">
                        Nodejs
                      </Badge>{" "}
                      <Badge pill bg="secondary">
                        Mongodb
                      </Badge>{" "}
                      <Badge pill bg="success">
                        ReactJS
                      </Badge>{" "}
                      <Badge pill bg="danger">
                        React Bootstrap
                      </Badge>{" "}
                      <Badge pill bg="warning" text="dark">
                        Firebase
                      </Badge>{" "}
                      <Badge pill bg="info">
                        Expressjs
                      </Badge>{" "}
                    </div>
                  </p>
                </div>
                <div className="py-3 text-center">
                  <a href={mern.live}>
                    <Button
                      variant="outline-primary"
                      style={{ borderRadius: "8px" }}
                    >
                      live link <i class="fas fa-link"></i>
                    </Button>
                  </a>
                  <a href={mern.client}>
                    <Button variant="outline-primary" className="m-1" style={{ borderRadius: "8px" }}>
                      Client Code <i class="fab fa-github"></i>
                    </Button>
                  </a>
                  <a href={mern.server}>
                    <Button variant="outline-primary" style={{ borderRadius: "8px" }}>
                      Server Code <i class="fab fa-github"></i>
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Projects;
