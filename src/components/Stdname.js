import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./Stdname.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import moment from "moment";

const Stdname = () => {
  const [contactname, setContactname] = useState("");
  const authtoken = localStorage.token
  const params = useParams();
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API}/studentcontact/${params.idcard}`,
      {
        headers: {
          authtoken,
        }
      })
      .then((response) => {
        setContactname(response.data);
      })
      .catch((err) => alert(err));
  }, [params]);
  const [infomation, setInfomation] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API}/kussi/${params.idcard}`,
      {
        headers: {
          authtoken,
        }
      })
      .then((response) => {
        setInfomation(response.data);
      })
      .catch((err) => alert(err));
  }, [params]);
  
  const birthday = moment(contactname.birthday).format("DD-MM-YYYY");
  
  return (
    <div>
        <div className="bg-name ">
          
          <div style={{ padding: "15px 0px" }}>
            <h5 style={{ textAlign: "center" }}>ข้อมูลนักเรียน</h5>
            <Form.Label ><b>รหัสบัตรประชาชน : </b><a style={{ textDecoration: "underline", textDecorationStyle: "dotted", }}>
              {contactname.stdidcard}
            </a>
            </Form.Label>
            <Form.Label style={{marginLeft:"20px"}}><b>ชื่อนักเรียน : </b><a style={{ textDecoration: "underline", textDecorationStyle: "dotted", }}>
            {contactname.sex == "ชาย" ? "เด็กชาย" : "เด็กหญิง"} &nbsp;&nbsp;{contactname.f_name} &nbsp;&nbsp; {contactname.l_name}
            </a>
            </Form.Label>
            
            <Form.Label  style={{marginLeft:"20px"}}><b>ระดับชั้น : </b><a style={{ textDecoration: "underline", textDecorationStyle: "dotted", }}>
              {contactname.grade}
            </a>
            </Form.Label>
            
            <Form.Label style={{marginLeft:"20px"}}><b>วันเกิด : </b><a style={{ textDecoration: "underline", textDecorationStyle: "dotted", }}>
              {birthday}
            </a>
            </Form.Label>
           
            <Form.Label style={{marginLeft:"20px"}}><b>อายุ : </b><a style={{ textDecoration: "underline", textDecorationStyle: "dotted", }}>
              {infomation.section3?.stdage} ปี
            </a>
            </Form.Label>
          </div>
        </div>

     
    </div>
  );
};

export default Stdname;
