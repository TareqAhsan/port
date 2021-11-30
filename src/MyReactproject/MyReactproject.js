import React, { useEffect, useState } from "react";
import { Badge, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Zoom from 'react-reveal/Zoom';
// const react = [
//   {
//     name: "MED CARE",

//     img: "https://i.ibb.co/9Gpn1ss/3.png",
//     id: 1,
//     details:
//       "Med Care is a React Project it is basically a frontend project.in this Project user can book appointment through Login/registation and after login he can see his appointment and can cancel his appointment",
//     technology:
//       "ReactJs, Bootstrap, ReactBootstrap, CustomCss, ContextAPI, Firebase Authentication, React Custom hooks, react-router",
//       ss1:'https://i.ibb.co/zXGVJGq/medreg-2.png',
//       ss2:'https://i.ibb.co/db7xmWr/me-2.png',
//     live: "https://med-care-e4207.web.app/",
//     client: "https://github.com/TareqAhsan/med-care",
//   },
//   {
//     name: "Piano School",
//     img: "https://i.ibb.co/bXbPtZ4/Screenshot-12.png",
//     id: 2,
//     details:
//       "Piano School is a React Project Piano . User can see many packages and Prices and others",
//     technology:
//       "ReactJs, Bootstrap, ReactBootstrap, CustomCss, react-router",
//     live: "https://piano-school-e56769iano.netlify.app/",
//     client: "https://github.com/TareqAhsan/learning-react-platform",
//   },
//   {
//     name: "The-SuperHeros-Car",
//     img: "https://i.ibb.co/2dsZnsn/Screenshot-14.png",
//     id: 3,
//     details:
//       "user can add any car into cart and can see the total prices of the cars and can see numbers of cars",
//     technology:
//       "ReactJs, tailwindCSS , CustomCss",
//     live: "https://elated-brown-e69d79.netlify.app/",
//     client: "https://github.com/TareqAhsan/The-SuperHeros-Car",
//   },
// ]
const MyReactproject = () => {
  const [react,setReact] = useState()
  useEffect(()=>{
    fetch('/reactproject.json')
    .then(res=>res.json())
    .then(data=>setReact(data))
  },[])
  
  return (
    <div>
      <Container className="py-4">
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {react?.map((mern) => (
           <Zoom>
              <div className="col" key={mern.id}>
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
                      Code link <i class="fab fa-github"></i>
                    </Button>
                  </a>
                 <Link to={`/reactdetails/${mern?.id}`}><Button variant="outline-primary"
                      style={{ borderRadius: "8px" }}>see details</Button></Link>
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

export default MyReactproject;
