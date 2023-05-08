import React from "react";
import Navbartop from "../components/Navbar_top";
import { Container } from "react-bootstrap";
import KussiComponent from "../components/KussiComponent";

const Kussi = () => {

  return (
    <div>
      <Navbartop /> <br />
      <br />
      <br />
      <br />

      <Container>
        <h3 style={{textAlign:"center" , marginTop:"35px" ,marginBottom:"20px"}}>
          แบบคัดกรองนักเรียนที่มีภาวะสมาธิสั้น บกพร่อง ทางการเรียนรู้และออทิซึม
          <br />
          [KUS-SI Rating Scales: ADHD/LD/Autism(PDDs)]
        </h3>
        <KussiComponent/>
      </Container>
    </div>
  );
};

export default Kussi;
