import React, { useEffect, useState } from "react";
import { Badge, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Zoom from 'react-reveal/Zoom';
// const merns = [
//   {
//     name: "sunglassShopBD",

//     img: "https://i.ibb.co/pJSVKt2/1.png",
//     live: "https://niche-products-2f8e9.firebaseapp.com/",
//     id: 1,
//     description:
//       "Developed a fully functioning Niche Product web app . user can Purchase any Product through login & registration (authentication) system And confirm order through payment with card , cancel order and can see his order list , order status, And user can give Review Admin Can make any user(not customer) admin , only admin can manage any order , manage any product ,can add any new Product.",
//     admin: "https://i.ibb.co/VgCBfWf/Screenshot-30.png",
//     rev: "https://i.ibb.co/3cyQhkf/Screenshot-26.png",
//     myorder: "https://i.ibb.co/pQvp5Tb/Screenshot-28.png",
//     myrev: "https://i.ibb.co/cXL44LY/Screenshot-27.png",
//     technology:
//       "Reactjs , Custom hook, Context APi,React Router ,Custom css, Bootstrap,Firebase , Expressjs, mongodb, jwt token, Stripe Payment gateway",
//     client: "https://github.com/TareqAhsan/niche-product-client",
//     server: "https://github.com/TareqAhsan/niche-product-server",
//   },
//   {
//     name: "Adventure Travel",
//     img: "https://i.ibb.co/RcG3yTx/2.png",
//     id: 2,
//     description:
//       "user can place and confirm his booking by login with google as well as he can cancel his booking",
//     admin: "",
//     rev: "https://i.ibb.co/3S5pMgt/Screenshot-36.png",
//     myorder: "https://i.ibb.co/Ytwmx3x/Screenshot-38.png",
//     myrev: "https://i.ibb.co/RgMT7SD/Screenshot-37.png",
//     technology:
//       ": Reactjs, hook form, Context APi, Bootstrap, Firebase,Expressjs,Mongodb",
//     live: "https://assignment---11.firebaseapp.com/",
//     client: "https://github.com/TareqAhsan/Adventure-Travel-11",
//     server: "https://github.com/TareqAhsan/Adventure-Travel-11-server",
//   },
// ];

const Projects = () => {
  const [merns, setMerns] = useState();
  useEffect(() => {
    fetch("/mern.json")
      .then((res) => res.json())
      .then((data) => setMerns(data));
  }, []);
  return (
    <div>
      <Container className="py-4">
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {merns?.map((mern) => (
            <Zoom>
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
                  <a href={mern.live} target="_blank" rel="noreferrer">
                    <Button
                      variant="outline-primary"
                      style={{ borderRadius: "8px" }}
                    >
                      live link <i class="fas fa-link"></i>
                    </Button>
                  </a>
                  <a href={mern.client} target="_blank" rel="noreferrer">
                    <Button
                      variant="outline-primary"
                      className="m-1"
                      style={{ borderRadius: "8px" }}
                    >
                      Client Code <i class="fab fa-github"></i>
                    </Button>
                  </a>
                  <a href={mern.server} target="_blank" rel="noreferrer">
                    <Button
                      variant="outline-primary"
                      style={{ borderRadius: "8px" }}
                    >
                      Server Code <i class="fab fa-github"></i>
                    </Button>
                  </a>
                  <Link to={`/projectdetails/${mern.id}`}>
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
        </div>
      </Container>
    </div>
  );
};

export default Projects;
