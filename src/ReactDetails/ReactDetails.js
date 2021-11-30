import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router";

const ReactDetails = () => {
  const [details, setDetails] = useState();
  const { id } = useParams();
  useEffect(() => {
    fetch("/reactproject.json")
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);
  const matchid = details?.find((detail) => detail.id === Number(id));

  return (
    <div>
      <Container className="py-5">
        <h1 className="display-6 text-center py-4">{matchid?.name} details</h1>
        <div
          class="row row-cols-1 row-cols-md-2  g-4 shadow p-4"
          style={{ borderRadius: "15px" }}
        >
          <div className="col">
            <img
              src={matchid?.img}
              alt=""
              className="img-fluid"
              style={{ borderRadius: "15px" }}
            />
          </div>
          <div className="col">
            <div>
              <div>Project details : {matchid?.details}</div>
              <p className="fw-bold  text-uppercase text-primary">
                technology: {matchid?.technology}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ReactDetails;
