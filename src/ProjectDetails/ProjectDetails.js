import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
const ProjectDetails = () => {
  const [details, setDetails] = useState();
  const { id } = useParams();
  useEffect(() => {
    fetch("/mern.json")
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);
  const matchid = details?.find((detail) => detail.id === Number(id));
  return (
    <div>
      <Container className="py-5">
        <h1 className="display-6 text-center py-4">{matchid?.name}'s some screen shot More details on live site</h1>
        <div
          class="row row-cols-1 row-cols-md-2  g-4 shadow p-4"
          style={{ borderRadius: "15px" }}
        >
          <div className="col">
            <div
              class="row row-cols-1  g-2  p-2"
              style={{ borderRadius: "15px" }}
            >
              <div className="col">
                <div className="shadow p-4">
                  <img src={matchid?.admin} alt="" className="img-fluid" />
                </div>
              </div>
              <div className="col">
                <div className="shadow p-4">
                  <img src={matchid?.rev} alt="" className="img-fluid" />
                </div>
              </div>
              <div className="col">
                <div className="shadow p-4">
                  <img src={matchid?.myorder} alt="" className="img-fluid" />
                </div>
              </div>
              <div className="col">
                <div className="shadow p-4">
                  <img src={matchid?.myrev} alt="" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
          <div className="col">
              <div>
                  <p className="fs-5">{matchid?.description}</p>
                  <p className="fs-5 text-primary fw-bold">technology :{matchid?.technology}</p>
              </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProjectDetails;
