import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./StdnameComponent.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";

const StdnameComponent = () => {
  const [contact, setContact] = useState("");

  const params = useParams();
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API}/studentcontact/${params.idcard}`)
      .then((response) => {
        setContact(response.data);
      })
      .catch((err) => alert(err));
  }, [params]);

 
  return (
    <div>
      <Container>
     {JSON.stringify(contact)}
      </Container>
    </div>
  );
};

export default StdnameComponent;
