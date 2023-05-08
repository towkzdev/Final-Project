import React from "react";
import Navbartop from "../components/Navbar_top";
import { Container } from "react-bootstrap";
import KussiscoreComponent from "../components/KussiscoreComponent";

const Kussi_Score = () => {

  return (
    <div>
      <Navbartop /> <br />
      <Container>
        <div style={{margin:"85px  0px  35px 0px"}}>
          <h3 style={{ textAlign: "center" }}>สรุปการแปลผลคะแนน</h3>
        </div>
        <KussiscoreComponent />

      </Container>
    </div>
  );
};

export default Kussi_Score;
