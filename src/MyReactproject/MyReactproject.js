import React from "react";
import { Badge, Container, Button } from "react-bootstrap";

const MyReactproject = () => {
  const react = [
    {
      name: "MED CARE",
      img: "https://i.ibb.co/9Gpn1ss/3.png",
      live: "https://med-care-e4207.web.app/",
      client: "https://github.com/TareqAhsan/med-care",
    },
    {
      name: "Piano School",
      img: "https://i.ibb.co/bXbPtZ4/Screenshot-12.png",
      live: "https://piano-school-e56769iano.netlify.app/",
      client: "https://github.com/TareqAhsan/learning-react-platform",
    },
    {
      name: "The-SuperHeros-Car",
      img: "https://i.ibb.co/2dsZnsn/Screenshot-14.png",
      live: "https://elated-brown-e69d79.netlify.app/",
      client: "https://github.com/TareqAhsan/The-SuperHeros-Car",
    },
  ];
  return (
    <div>
      <Container className="py-4">
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {react.map((mern) => (
            <div className="col">
              <div
                class="card border-0 shadow h-100 text-center"
                style={{ borderRadius: "15px" }}
              >
                <img
                  src={mern.img}
                  class="card-img-top"
                  alt="..."
                  style={{ borderRadius: "15px", height: "250px" }}
                />
                <div class="card-body">
                  <h5 class="card-title">{mern.name}</h5>
                  <p class="card-text">
                    <div>
                      <Badge pill bg="success">
                        ReactJS
                      </Badge>{" "}
                      <Badge pill bg="danger">
                        React Bootstrap
                      </Badge>{" "}
                      <Badge pill bg="info">
                        CSS
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
                    <Button
                      variant="outline-primary"
                      className="m-1"
                      style={{ borderRadius: "8px" }}
                    >
                       Code link <i class="fab fa-github"></i>
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

export default MyReactproject;
