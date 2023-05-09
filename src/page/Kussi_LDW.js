import React from "react";
import "./Kussi_ADHD.css";
import { Table, Button, Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router";
import Navbartop from "../components/Navbar_top";
import Stdname from "../components/Stdname";

const RadioInput = ({ label, value, checked, setter }) => {
  return (
    <label>
      <input
        type="radio"
        checked={checked === value}
        onChange={() => setter(value)}
      />
      <span className="scorelable">{label}</span>
    </label>
  );
};

const Kussi_LDW = (props) => {
  const [contact, setContact] = useState("");
  const params = useParams();
  const authtoken = localStorage.token
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API}/studentdata/${params.idcard}`,
      {
        headers: {
          authtoken,
        }
      })
      .then((response) => {
        setContact(response.data);
      })
      .catch((err) => alert(err));
  }, [params]);

  const [scoredata, setScoredata] = useState();
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API}/kussi-AAHD/${params.idcard}/${params.schoolyear}/${params.term}`,
      {
        headers: {
          authtoken,
        }
      })
      .then((response) => {
        setScoredata(response.data);
      })
      .catch((err) => alert(err));
  }, [params]);

  //คำนวนคะแนนดิบ
  const [score, setScore] = useState(0);
  const [score1, setScore1] = useState(0);
  const [score2, setScore2] = useState(0);
  const [score3, setScore3] = useState(0);
  const [score4, setScore4] = useState(0);
  const [score5, setScore5] = useState(0);
  const [score6, setScore6] = useState(0);
  const [score7, setScore7] = useState(0);
  const [score8, setScore8] = useState(0);
  const [score9, setScore9] = useState(0);
  const [score10, setScore10] = useState(0);
  const [score11, setScore11] = useState(0);
  const [score12, setScore12] = useState(0);
  const [score13, setScore13] = useState(0);
  const [score14, setScore14] = useState(0);
  const [score15, setScore15] = useState(0);
  const [score16, setScore16] = useState(0);
  const [score17, setScore17] = useState(0);
  const [score18, setScore18] = useState(0);
  const [score19, setScore19] = useState(0);

  const ld2_dscore = score + score1 + score2 + score3 + score4 + score5 + score6 + score7 + score8 + score9 + score10 + score11 + score12 + score13 + score14 + score15 + score16 + score17 + score18 + score19;

  //submitForm
  const history = useNavigate();
  const submitForm = (e) => {
    e.preventDefault();
    const stdidcard = contact.stdidcard;
    const sex = contact.sex;
    const g = contact.grade
    const schoolyear = scoredata.schoolyear
    const term = scoredata.term
    var ld2_tscore;
    var ld2_group;

    if (g === "ชั้นประถมศึกษาปีที่1" && ld2_dscore === 60 && sex === "ชาย") {
      ld2_tscore = 77;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.1 ld3_group = " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่1" && ld2_dscore === 59 && sex === "ชาย") {
      ld2_tscore = 76;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.1 ld3_group = " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่1" && ld2_dscore === 58 && sex === "ชาย") || (g === "ชั้นประถมศึกษาปีที่1" && ld2_dscore === 57 && sex === "ชาย")) {
      ld2_tscore = 75;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.1 ld3_group = " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่1" && ld2_dscore === 56 && sex === "ชาย") {
      ld2_tscore = 74;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.1 ld3_group = " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่1" && ld2_dscore === 55 && sex === "ชาย") || (g === "ชั้นประถมศึกษาปีที่1" && ld2_dscore === 54 && sex === "ชาย")) {
      ld2_tscore = 73;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.1 ld3_group = " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่1" && ld2_dscore === 53 && sex === "ชาย") || (g === "ชั้นประถมศึกษาปีที่1" && ld2_dscore === 52 && sex === "ชาย")) {
      ld2_tscore = 72;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.1 ld3_group = " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่1" && ld2_dscore === 51 && sex === "ชาย") {
      ld2_tscore = 71;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.1 ld3_group = " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่1" && ld2_dscore === 50 && sex === "ชาย") || (g === "ชั้นประถมศึกษาปีที่1" && ld2_dscore === 49 && sex === "ชาย")) {
      ld2_tscore = 70;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 3;
      //console.log("ป.1 ld3_group = " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่1" && ld2_dscore === 48 && sex === "ชาย") {
      ld2_tscore = 69;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 3;
      //console.log("ป.1 ld3_group = " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่1" && ld2_dscore === 47 && sex === "ชาย") || (g === "ชั้นประถมศึกษาปีที่1" && ld2_dscore === 46 && sex === "ชาย")) {
      ld2_tscore = 68;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 3;
      //console.log("ป.1 ld3_group = " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่1" && ld2_dscore === 45 && sex === "ชาย") {
      ld2_tscore = 67;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 3;
      //console.log("ป.1 ld3_group = " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่1" && ld2_dscore === 44 && sex === "ชาย") || (g === "ชั้นประถมศึกษาปีที่1" && ld2_dscore === 43 && sex === "ชาย")) {
      ld2_tscore = 66;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 3;
      //console.log("ป.1 ld3_group = " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่1" && ld2_dscore === 42 && sex === "ชาย") {
      ld2_tscore = 65;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 3;
      //console.log("ป.1 ld3_group = " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่1" && ld2_dscore === 41 && sex === "ชาย") || (g === "ชั้นประถมศึกษาปีที่1" && ld2_dscore === 40 && sex === "ชาย")) {
      ld2_tscore = 64;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 3;
      //console.log("ป.1 ld3_group = " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่1" && ld2_dscore === 39 && sex === "ชาย") {
      ld2_tscore = 63;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 3;
      //console.log("ป.1 ld3_group = " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่1" && ld2_dscore === 38 && sex === "ชาย") || (g === "ชั้นประถมศึกษาปีที่1" && ld2_dscore === 37 && sex === "ชาย")) {
      ld2_tscore = 62;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 3;
      //console.log("ป.1 ld3_group = " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่1" && ld2_dscore === 36 && sex === "ชาย") || (g === "ชั้นประถมศึกษาปีที่1" && ld2_dscore === 35 && sex === "ชาย")) {
      ld2_tscore = 61;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 3;
      //console.log("ป.1 ld3_group = " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่1" && ld2_dscore === 34 && sex === "ชาย") {
      ld2_tscore = 60;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 2;
      //console.log("ป.1 ld3_group = " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่1" && ld2_dscore === 33 && sex === "ชาย") || (g === "ชั้นประถมศึกษาปีที่1" && ld2_dscore === 32 && sex === "ชาย")) {
      ld2_tscore = 59;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 2;
      //console.log("ป.1 ld3_group = " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่1" && ld2_dscore === 31 && sex === "ชาย") {
      ld2_tscore = 58;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 2;
      //console.log("ป.1 ld3_group = " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่1" && ld2_dscore === 30 && sex === "ชาย") || (g === "ชั้นประถมศึกษาปีที่1" && ld2_dscore === 29 && sex === "ชาย")) {
      ld2_tscore = 57;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 2;
      //console.log("ป.1 ld3_group = " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่1" && ld2_dscore === 28 && sex === "ชาย") {
      ld2_tscore = 56;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 2;
      //console.log("ป.1 ld3_group = " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่1" && ld2_dscore === 27 && sex === "ชาย") || (g === "ชั้นประถมศึกษาปีที่1" && ld2_dscore === 26 && sex === "ชาย")) {
      ld2_tscore = 55;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 2;
      //console.log("ป.1 ld3_group = " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่1" && ld2_dscore === 25 && sex === "ชาย") {
      ld2_tscore = 54;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 2;
      //console.log("ป.1 ld3_group = " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่1" && ld2_dscore === 24 && sex === "ชาย") || (g === "ชั้นประถมศึกษาปีที่1" && ld2_dscore === 23 && sex === "ชาย")) {
      ld2_tscore = 53;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 2;
      //console.log("ป.1 ld3_group = " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่1" && ld2_dscore === 22 && sex === "ชาย") {
      ld2_tscore = 52;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 2;
      //console.log("ป.1 ld3_group = " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่1" && ld2_dscore === 21 && sex === "ชาย") || (g === "ชั้นประถมศึกษาปีที่1" && ld2_dscore === 20 && sex === "ชาย")) {
      ld2_tscore = 51;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 2;
      //console.log("ป.1 ld3_group = " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่1" && ld2_dscore === 19 && sex === "ชาย") {
      ld2_tscore = 50;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 1;
      //console.log("ป.1 ld3_group = " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่1" && ld2_dscore === 18 && sex === "ชาย") || (g === "ชั้นประถมศึกษาปีที่1" && ld2_dscore === 17 && sex === "ชาย")) {
      ld2_tscore = 49;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 1;
      //console.log("ป.1 ld3_group = " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่1" && ld2_dscore === 16 && sex === "ชาย") || (g === "ชั้นประถมศึกษาปีที่1" && ld2_dscore === 15 && sex === "ชาย")) {
      ld2_tscore = 48;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 1;
      //console.log("ป.1 ld3_group = " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่1" && ld2_dscore === 14 && sex === "ชาย") {
      ld2_tscore = 47;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 1;
      //console.log("ป.1 ld3_group = " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่1" && ld2_dscore === 13 && sex === "ชาย") || (g === "ชั้นประถมศึกษาปีที่1" && ld2_dscore === 12 && sex === "ชาย")) {
      ld2_tscore = 46;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 1;
      //console.log("ป.1 ld3_group = " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่1" && ld2_dscore === 11 && sex === "ชาย") {
      ld2_tscore = 45;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 1;
      //console.log("ป.1 ld3_group = " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่1" && ld2_dscore === 10 && sex === "ชาย") || (g === "ชั้นประถมศึกษาปีที่1" && ld2_dscore === 9 && sex === "ชาย")) {
      ld2_tscore = 44;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 1;
      //console.log("ป.1 ld3_group = " + ld2_group);
    } else if (((g === "ชั้นประถมศึกษาปีที่1" && ld2_dscore === 8 && sex === "ชาย") || (g === "ชั้นประถมศึกษาปีที่1" && ld2_dscore === 7 && sex === "ชาย") || (g === "ชั้นประถมศึกษาปีที่1" && ld2_dscore === 6 && sex === "ชาย"))) {
      ld2_tscore = 43;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 1;
      //console.log("ป.1 ld3_group = " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่1" && ld2_dscore === 5 && sex === "ชาย") {
      ld2_tscore = 42;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 1;
      //console.log("ป.1 ld3_group = " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่1" && ld2_dscore === 4 && sex === "ชาย") || (g === "ชั้นประถมศึกษาปีที่1" && ld2_dscore === 3 && sex === "ชาย")) {
      ld2_tscore = 41;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 1;
      //console.log("ป.1 ld3_group = " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่1" && ld2_dscore === 2 && sex === "ชาย") {
      ld2_tscore = 40;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 1;
      //console.log("ป.1 ld3_group = " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่1" && ld2_dscore === 1 && sex === "ชาย") || (g === "ชั้นประถมศึกษาปีที่1" && ld2_dscore === 0 && sex === "ชาย")) {
      ld2_tscore = 39;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 1;
      //console.log("ป.1 ld3_group = " + ld2_group);
    }

    else if (g === "ชั้นประถมศึกษาปีที่2" && ld2_dscore === 60 && sex === "ชาย") {
      ld2_tscore = 77;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.2 ld3_group = " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่2" && ld2_dscore === 59 && sex === "ชาย") {
      ld2_tscore = 76;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.2 ld3_group = " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่2" && ld2_dscore === 58 && sex === "ชาย") || (g === "ชั้นประถมศึกษาปีที่2" && ld2_dscore === 57 && sex === "ชาย")) {
      ld2_tscore = 75;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.2 ld3_group = " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่2" && ld2_dscore === 56 && sex === "ชาย") {
      ld2_tscore = 74;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.2 ld3_group = " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่2" && ld2_dscore === 55 && sex === "ชาย") || (g === "ชั้นประถมศึกษาปีที่2" && ld2_dscore === 54 && sex === "ชาย")) {
      ld2_tscore = 73;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.2 ld3_group = " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่2" && ld2_dscore === 53 && sex === "ชาย") {
      ld2_tscore = 72;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.2 ld3_group = " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่2" && ld2_dscore === 52 && sex === "ชาย") || (g === "ชั้นประถมศึกษาปีที่2" && ld2_dscore === 51 && sex === "ชาย")) {
      ld2_tscore = 71;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.2 ld3_group = " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่2" && ld2_dscore === 50 && sex === "ชาย") {
      ld2_tscore = 70;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 3;
      //console.log("ป.2 ld3_group = " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่2" && ld2_dscore === 49 && sex === "ชาย") || (g === "ชั้นประถมศึกษาปีที่2" && ld2_dscore === 48 && sex === "ชาย")) {
      ld2_tscore = 69;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 3;
      //console.log("ป.2 ld3_group = " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่2" && ld2_dscore === 47 && sex === "ชาย") || (g === "ชั้นประถมศึกษาปีที่2" && ld2_dscore === 46 && sex === "ชาย")) {
      ld2_tscore = 68;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 3;
      //console.log("ป.2 ld3_group = " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่2" && ld2_dscore === 45 && sex === "ชาย") {
      ld2_tscore = 67;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 3;
      //console.log("ป.2 ld3_group = " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่2" && ld2_dscore === 44 && sex === "ชาย") || (g === "ชั้นประถมศึกษาปีที่2" && ld2_dscore === 43 && sex === "ชาย")) {
      ld2_tscore = 66;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 3;
      //console.log("ป.2 ld3_group = " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่2" && ld2_dscore === 42 && sex === "ชาย") {
      ld2_tscore = 65;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 3;
      //console.log("ป.2 ld3_group = " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่2" && ld2_dscore === 41 && sex === "ชาย") || (g === "ชั้นประถมศึกษาปีที่2" && ld2_dscore === 40 && sex === "ชาย")) {
      ld2_tscore = 64;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 3;
      //console.log("ป.2 ld3_group = " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่2" && ld2_dscore === 39 && sex === "ชาย") {
      ld2_tscore = 63;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 3;
      //console.log("ป.2 ld3_group = " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่2" && ld2_dscore === 38 && sex === "ชาย") || (g === "ชั้นประถมศึกษาปีที่2" && ld2_dscore === 37 && sex === "ชาย")) {
      ld2_tscore = 62;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 3;
      //console.log("ป.2 ld3_group = " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่2" && ld2_dscore === 36 && sex === "ชาย") {
      ld2_tscore = 61;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 3;
      //console.log("ป.2 ld3_group = " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่2" && ld2_dscore === 35 && sex === "ชาย") || (g === "ชั้นประถมศึกษาปีที่2" && ld2_dscore === 34 && sex === "ชาย")) {
      ld2_tscore = 60;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 2;
      //console.log("ป.2 ld3_group = " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่2" && ld2_dscore === 33 && sex === "ชาย") || (g === "ชั้นประถมศึกษาปีที่2" && ld2_dscore === 32 && sex === "ชาย")) {
      ld2_tscore = 59;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 2;
      //console.log("ป.2 ld3_group = " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่2" && ld2_dscore === 31 && sex === "ชาย") {
      ld2_tscore = 58;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 2;
      //console.log("ป.2 ld3_group = " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่2" && ld2_dscore === 30 && sex === "ชาย") || (g === "ชั้นประถมศึกษาปีที่2" && ld2_dscore === 29 && sex === "ชาย")) {
      ld2_tscore = 57;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 2;
      //console.log("ป.2 ld3_group = " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่2" && ld2_dscore === 28 && sex === "ชาย") {
      ld2_tscore = 56;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 2;
      //console.log("ป.2 ld3_group = " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่2" && ld2_dscore === 27 && sex === "ชาย") || (g === "ชั้นประถมศึกษาปีที่2" && ld2_dscore === 26 && sex === "ชาย")) {
      ld2_tscore = 55;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 2;
      //console.log("ป.2 ld3_group = " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่2" && ld2_dscore === 25 && sex === "ชาย") {
      ld2_tscore = 54;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 2;
      //console.log("ป.2 ld3_group = " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่2" && ld2_dscore === 24 && sex === "ชาย") || (g === "ชั้นประถมศึกษาปีที่2" && ld2_dscore === 23 && sex === "ชาย")) {
      ld2_tscore = 53;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 2;
      //console.log("ป.2 ld3_group = " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่2" && ld2_dscore === 22 && sex === "ชาย") || (g === "ชั้นประถมศึกษาปีที่2" && ld2_dscore === 21 && sex === "ชาย")) {
      ld2_tscore = 52;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 2;
      //console.log("ป.2 ld3_group = " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่2" && ld2_dscore === 20 && sex === "ชาย") {
      ld2_tscore = 51;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 2;
      //console.log("ป.2 ld3_group = " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่2" && ld2_dscore === 19 && sex === "ชาย") || (g === "ชั้นประถมศึกษาปีที่2" && ld2_dscore === 18 && sex === "ชาย")) {
      ld2_tscore = 50;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 1;
      //console.log("ป.2 ld3_group = " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่2" && ld2_dscore === 17 && sex === "ชาย") {
      ld2_tscore = 49;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 1;
      //console.log("ป.2 ld3_group = " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่2" && ld2_dscore === 16 && sex === "ชาย") || (g === "ชั้นประถมศึกษาปีที่2" && ld2_dscore === 15 && sex === "ชาย")) {
      ld2_tscore = 48;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 1;
      //console.log("ป.2 ld3_group = " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่2" && ld2_dscore === 14 && sex === "ชาย") {
      ld2_tscore = 47;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 1;
      //console.log("ป.2 ld3_group = " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่2" && ld2_dscore === 13 && sex === "ชาย") || (g === "ชั้นประถมศึกษาปีที่2" && ld2_dscore === 12 && sex === "ชาย")) {
      ld2_tscore = 46;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 1;
      //console.log("ป.2 ld3_group = " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่2" && ld2_dscore === 11 && sex === "ชาย") {
      ld2_tscore = 45;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 1;
      //console.log("ป.2 ld3_group = " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่2" && ld2_dscore === 10 && sex === "ชาย") || (g === "ชั้นประถมศึกษาปีที่2" && ld2_dscore === 9 && sex === "ชาย")) {
      ld2_tscore = 44;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 1;
      //console.log("ป.2 ld3_group = " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่2" && ld2_dscore === 8 && sex === "ชาย") || (g === "ชั้นประถมศึกษาปีที่2" && ld2_dscore === 7 && sex === "ชาย")) {
      ld2_tscore = 43;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 1;
      //console.log("ป.2 ld3_group = " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่2" && ld2_dscore === 6 && sex === "ชาย") {
      ld2_tscore = 42;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 1;
      //console.log("ป.2 ld3_group = " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่2" && ld2_dscore === 5 && sex === "ชาย") || (g === "ชั้นประถมศึกษาปีที่2" && ld2_dscore === 4 && sex === "ชาย")) {
      ld2_tscore = 41;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 1;
      //console.log("ป.2 ld3_group = " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่2" && ld2_dscore === 3 && sex === "ชาย") {
      ld2_tscore = 40;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 1;
      //console.log("ป.2 ld3_group = " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่2" && ld2_dscore === 1 && sex === "ชาย") || (g === "ชั้นประถมศึกษาปีที่2" && ld2_dscore === 2 && sex === "ชาย")) {
      ld2_tscore = 39;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 1;
      //console.log("ป.2 ld3_group = " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่2" && ld2_dscore === 0 && sex === "ชาย") {
      ld2_tscore = 38;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 1;
      //console.log("ป.2 ld3_group = " + ld2_group);
    }

    else if (g === "ชั้นประถมศึกษาปีที่3" && ld2_dscore === 60 && sex === "ชาย") {
      ld2_tscore = 76;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.3 ld3_group = " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่3" && ld2_dscore === 59 && sex === "ชาย") || (g === "ชั้นประถมศึกษาปีที่3" && ld2_dscore === 58 && sex === "ชาย")) {
      ld2_tscore = 75;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.3 ld3_group = " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่3" && ld2_dscore === 57 && sex === "ชาย") || (g === "ชั้นประถมศึกษาปีที่3" && ld2_dscore === 56 && sex === "ชาย")) {
      ld2_tscore = 74;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.3 ld3_group = " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่3" && ld2_dscore === 55 && sex === "ชาย") {
      ld2_tscore = 73;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.3 ld3_group = " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่3" && ld2_dscore === 54 && sex === "ชาย") || (g === "ชั้นประถมศึกษาปีที่3" && ld2_dscore === 53 && sex === "ชาย")) {
      ld2_tscore = 72;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.3 ld3_group = " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่3" && ld2_dscore === 52 && sex === "ชาย") {
      ld2_tscore = 71;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.3 ld3_group = " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่3" && ld2_dscore === 51 && sex === "ชาย") || (g === "ชั้นประถมศึกษาปีที่3" && ld2_dscore === 50 && sex === "ชาย")) {
      ld2_tscore = 70;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 3;
      //console.log("ป.3 ld3_group = " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่3" && ld2_dscore === 49 && sex === "ชาย") || (g === "ชั้นประถมศึกษาปีที่3" && ld2_dscore === 48 && sex === "ชาย")) {
      ld2_tscore = 69;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 3;
      //console.log("ป.3 ld3_group = " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่3" && ld2_dscore === 47 && sex === "ชาย") {
      ld2_tscore = 68;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 3;
      //console.log("ป.3 ld3_group = " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่3" && ld2_dscore === 46 && sex === "ชาย") || (g === "ชั้นประถมศึกษาปีที่3" && ld2_dscore === 45 && sex === "ชาย")) {
      ld2_tscore = 67;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 3;
      //console.log("ป.3 ld3_group = " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่3" && ld2_dscore === 44 && sex === "ชาย") {
      ld2_tscore = 66;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 3;
      //console.log("ป.3 ld3_group = " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่3" && ld2_dscore === 43 && sex === "ชาย") || (g === "ชั้นประถมศึกษาปีที่3" && ld2_dscore === 42 && sex === "ชาย")) {
      ld2_tscore = 65;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 3;
      //console.log("ป.3 ld3_group = " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่3" && ld2_dscore === 41 && sex === "ชาย") || (g === "ชั้นประถมศึกษาปีที่3" && ld2_dscore === 40 && sex === "ชาย")) {
      ld2_tscore = 64;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 3;
      //console.log("ป.3 ld3_group = " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่3" && ld2_dscore === 39 && sex === "ชาย") {
      ld2_tscore = 63;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 3;
      //console.log("ป.3 ld3_group = " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่3" && ld2_dscore === 38 && sex === "ชาย") || (g === "ชั้นประถมศึกษาปีที่3" && ld2_dscore === 37 && sex === "ชาย")) {
      ld2_tscore = 62;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 3;
      //console.log("ป.3 ld3_group = " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่3" && ld2_dscore === 36 && sex === "ชาย") {
      ld2_tscore = 61;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 3;
      //console.log("ป.3 ld3_group = " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่3" && ld2_dscore === 35 && sex === "ชาย") || (g === "ชั้นประถมศึกษาปีที่3" && ld2_dscore === 34 && sex === "ชาย")) {
      ld2_tscore = 60;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 2;
      //console.log("ป.3 ld3_group = " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่3" && ld2_dscore === 33 && sex === "ชาย") || (g === "ชั้นประถมศึกษาปีที่3" && ld2_dscore === 32 && sex === "ชาย")) {
      ld2_tscore = 59;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 2;
      //console.log("ป.3 ld3_group = " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่3" && ld2_dscore === 31 && sex === "ชาย") {
      ld2_tscore = 58;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 2;
      //console.log("ป.3 ld3_group = " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่3" && ld2_dscore === 30 && sex === "ชาย") || (g === "ชั้นประถมศึกษาปีที่3" && ld2_dscore === 29 && sex === "ชาย")) {
      ld2_tscore = 57;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 2;
      //console.log("ป.3 ld3_group = " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่3" && ld2_dscore === 28 && sex === "ชาย") {
      ld2_tscore = 56;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 2;
      //console.log("ป.3 ld3_group = " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่3" && ld2_dscore === 27 && sex === "ชาย") || (g === "ชั้นประถมศึกษาปีที่3" && ld2_dscore === 26 && sex === "ชาย")) {
      ld2_tscore = 55;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 2;
      //console.log("ป.3 ld3_group = " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่3" && ld2_dscore === 25 && sex === "ชาย") {
      ld2_tscore = 54;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 2;
      //console.log("ป.3 ld3_group = " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่3" && ld2_dscore === 24 && sex === "ชาย") || (g === "ชั้นประถมศึกษาปีที่3" && ld2_dscore === 23 && sex === "ชาย")) {
      ld2_tscore = 53;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 2;
      //console.log("ป.3 ld3_group = " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่3" && ld2_dscore === 22 && sex === "ชาย") || (g === "ชั้นประถมศึกษาปีที่3" && ld2_dscore === 21 && sex === "ชาย")) {
      ld2_tscore = 52;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 2;
      //console.log("ป.3 ld3_group = " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่3" && ld2_dscore === 20 && sex === "ชาย") {
      ld2_tscore = 51;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 2;
      //console.log("ป.3 ld3_group = " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่3" && ld2_dscore === 19 && sex === "ชาย") || (g === "ชั้นประถมศึกษาปีที่3" && ld2_dscore === 18 && sex === "ชาย")) {
      ld2_tscore = 50;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 1;
      //console.log("ป.3 ld3_group = " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่3" && ld2_dscore === 17 && sex === "ชาย") {
      ld2_tscore = 49;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 1;
      //console.log("ป.3 ld3_group = " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่3" && ld2_dscore === 16 && sex === "ชาย") || (g === "ชั้นประถมศึกษาปีที่3" && ld2_dscore === 15 && sex === "ชาย")) {
      ld2_tscore = 48;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 1;
      //console.log("ป.3 ld3_group = " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่3" && ld2_dscore === 14 && sex === "ชาย") || (g === "ชั้นประถมศึกษาปีที่3" && ld2_dscore === 13 && sex === "ชาย")) {
      ld2_tscore = 47;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 1;
      //console.log("ป.3 ld3_group = " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่3" && ld2_dscore === 12 && sex === "ชาย") {
      ld2_tscore = 46;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 1;
      //console.log("ป.3 ld3_group = " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่3" && ld2_dscore === 11 && sex === "ชาย") || (g === "ชั้นประถมศึกษาปีที่3" && ld2_dscore === 10 && sex === "ชาย")) {
      ld2_tscore = 45;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 1;
      //console.log("ป.3 ld3_group = " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่3" && ld2_dscore === 9 && sex === "ชาย") {
      ld2_tscore = 44;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 1;
      //console.log("ป.3 ld3_group = " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่3" && ld2_dscore === 8 && sex === "ชาย") || (g === "ชั้นประถมศึกษาปีที่3" && ld2_dscore === 7 && sex === "ชาย")) {
      ld2_tscore = 43;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 1;
      //console.log("ป.3 ld3_group = " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่3" && ld2_dscore === 6 && sex === "ชาย") || (g === "ชั้นประถมศึกษาปีที่3" && ld2_dscore === 5 && sex === "ชาย")) {
      ld2_tscore = 42;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 1;
      //console.log("ป.3 ld3_group = " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่3" && ld2_dscore === 4 && sex === "ชาย") {
      ld2_tscore = 41;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 1;
      //console.log("ป.3 ld3_group = " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่3" && ld2_dscore === 3 && sex === "ชาย") || (g === "ชั้นประถมศึกษาปีที่3" && ld2_dscore === 2 && sex === "ชาย")) {
      ld2_tscore = 40;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 1;
      //console.log("ป.3 ld3_group = " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่3" && ld2_dscore === 1 && sex === "ชาย") {
      ld2_tscore = 39;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 1;
      //console.log("ป.3 ld3_group = " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่3" && ld2_dscore === 0 && sex === "ชาย") {
      ld2_tscore = 38;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 1;
      //console.log("ป.3 ld3_group = " + ld2_group);
    }

    else if (g === "ชั้นประถมศึกษาปีที่4" && ld2_dscore === 60 && sex === "ชาย") {
      ld2_tscore = 76;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.4 ld3_group = " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่4" && ld2_dscore === 59 && sex === "ชาย") {
      ld2_tscore = 75;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.4 ld3_group = " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่4" && ld2_dscore === 58 && sex === "ชาย") || (g === "ชั้นประถมศึกษาปีที่4" && ld2_dscore === 57 && sex === "ชาย")) {
      ld2_tscore = 74;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.4 ld3_group = " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่4" && ld2_dscore === 56 && sex === "ชาย") {
      ld2_tscore = 73;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.4 ld3_group = " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่4" && ld2_dscore === 55 && sex === "ชาย") || (g === "ชั้นประถมศึกษาปีที่4" && ld2_dscore === 54 && sex === "ชาย")) {
      ld2_tscore = 72;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.4 ld3_group = " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่4" && ld2_dscore === 53 && sex === "ชาย") || (g === "ชั้นประถมศึกษาปีที่4" && ld2_dscore === 52 && sex === "ชาย")) {
      ld2_tscore = 71;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.4 ld3_group = " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่4" && ld2_dscore === 51 && sex === "ชาย") {
      ld2_tscore = 70;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 3;
      //console.log("ป.4 ld3_group = " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่4" && ld2_dscore === 50 && sex === "ชาย") || (g === "ชั้นประถมศึกษาปีที่4" && ld2_dscore === 49 && sex === "ชาย")) {
      ld2_tscore = 69;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 3;
      //console.log("ป.4 ld3_group = " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่4" && ld2_dscore === 48 && sex === "ชาย") || (g === "ชั้นประถมศึกษาปีที่4" && ld2_dscore === 47 && sex === "ชาย")) {
      ld2_tscore = 68;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 3;
      //console.log("ป.4 ld3_group = " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่4" && ld2_dscore === 46 && sex === "ชาย") {
      ld2_tscore = 67;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 3;
      //console.log("ป.4 ld3_group = " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่4" && ld2_dscore === 45 && sex === "ชาย") || (g === "ชั้นประถมศึกษาปีที่4" && ld2_dscore === 44 && sex === "ชาย")) {
      ld2_tscore = 66;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 3;
      //console.log("ป.4 ld3_group = " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่4" && ld2_dscore === 43 && sex === "ชาย") {
      ld2_tscore = 65;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 3;
      //console.log("ป.4 ld3_group = " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่4" && ld2_dscore === 42 && sex === "ชาย") || (g === "ชั้นประถมศึกษาปีที่4" && ld2_dscore === 41 && sex === "ชาย")) {
      ld2_tscore = 64;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 3;
      //console.log("ป.4 ld3_group = " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่4" && ld2_dscore === 40 && sex === "ชาย") || (g === "ชั้นประถมศึกษาปีที่4" && ld2_dscore === 39 && sex === "ชาย")) {
      ld2_tscore = 63;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 3;
      //console.log("ป.4 ld3_group = " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่4" && ld2_dscore === 38 && sex === "ชาย") {
      ld2_tscore = 62;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 3;
      //console.log("ป.4 ld3_group = " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่4" && ld2_dscore === 37 && sex === "ชาย") || (g === "ชั้นประถมศึกษาปีที่4" && ld2_dscore === 36 && sex === "ชาย")) {
      ld2_tscore = 61;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 3;
      //console.log("ป.4 ld3_group = " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่4" && ld2_dscore === 35 && sex === "ชาย") {
      ld2_tscore = 60;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 2;
      //console.log("ป.4 ld3_group = " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่4" && ld2_dscore === 34 && sex === "ชาย") || (g === "ชั้นประถมศึกษาปีที่4" && ld2_dscore === 33 && sex === "ชาย")) {
      ld2_tscore = 59;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 2;
      //console.log("ป.4 ld3_group = " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่4" && ld2_dscore === 31 && sex === "ชาย") {
      ld2_tscore = 58;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 2;
      //console.log("ป.4 ld3_group = " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่4" && ld2_dscore === 35 && sex === "ชาย") {
      ld2_tscore = 57;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 2;
      //console.log("ป.4 ld3_group = " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่4" && ld2_dscore === 34 && sex === "ชาย") || (g === "ชั้นประถมศึกษาปีที่4" && ld2_dscore === 33 && sex === "ชาย")) {
      ld2_tscore = 56;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 2;
      //console.log("ป.4 ld3_group = " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่4" && ld2_dscore === 32 && sex === "ชาย") || (g === "ชั้นประถมศึกษาปีที่4" && ld2_dscore === 31 && sex === "ชาย")) {
      ld2_tscore = 55;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 2;
      //console.log("ป.4 ld3_group = " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่4" && ld2_dscore === 30 && sex === "ชาย") || (g === "ชั้นประถมศึกษาปีที่4" && ld2_dscore === 29 && sex === "ชาย")) {
      ld2_tscore = 54;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 2;
      //console.log("ป.4 ld3_group = " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่4" && ld2_dscore === 28 && sex === "ชาย") || (g === "ชั้นประถมศึกษาปีที่4" && ld2_dscore === 27 && sex === "ชาย")) {
      ld2_tscore = 53;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 2;
      //console.log("ป.4 ld3_group = " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่4" && ld2_dscore === 26 && sex === "ชาย") || (g === "ชั้นประถมศึกษาปีที่4" && ld2_dscore === 25 && sex === "ชาย")) {
      ld2_tscore = 52;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 2;
      //console.log("ป.4 ld3_group = " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่4" && ld2_dscore === 24 && sex === "ชาย") || (g === "ชั้นประถมศึกษาปีที่4" && ld2_dscore === 23 && sex === "ชาย")) {
      ld2_tscore = 51;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 2;
      //console.log("ป.4 ld3_group = " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่4" && ld2_dscore === 22 && sex === "ชาย") {
      ld2_tscore = 50;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 1;
      //console.log("ป.4 ld3_group = " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่4" && ld2_dscore === 21 && sex === "ชาย") || (g === "ชั้นประถมศึกษาปีที่4" && ld2_dscore === 20 && sex === "ชาย")) {
      ld2_tscore = 49;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 1;
      //console.log("ป.4 ld3_group = " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่4" && ld2_dscore === 19 && sex === "ชาย") || (g === "ชั้นประถมศึกษาปีที่4" && ld2_dscore === 18 && sex === "ชาย")) {
      ld2_tscore = 48;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 1;
      //console.log("ป.4 ld3_group = " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่4" && ld2_dscore === 17 && sex === "ชาย") || (g === "ชั้นประถมศึกษาปีที่4" && ld2_dscore === 16 && sex === "ชาย")) {
      ld2_tscore = 47;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 1;
      //console.log("ป.4 ld3_group = " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่4" && ld2_dscore === 15 && sex === "ชาย") || (g === "ชั้นประถมศึกษาปีที่4" && ld2_dscore === 14 && sex === "ชาย")) {
      ld2_tscore = 46;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 1;
      //console.log("ป.4 ld3_group = " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่4" && ld2_dscore === 13 && sex === "ชาย") || (g === "ชั้นประถมศึกษาปีที่4" && ld2_dscore === 12 && sex === "ชาย")) {
      ld2_tscore = 45;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 1;
      //console.log("ป.4 ld3_group = " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่4" && ld2_dscore === 11 && sex === "ชาย") || (g === "ชั้นประถมศึกษาปีที่4" && ld2_dscore === 10 && sex === "ชาย")) {
      ld2_tscore = 44;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 1;
      //console.log("ป.4 ld3_group = " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่4" && ld2_dscore === 9 && sex === "ชาย") {
      ld2_tscore = 43;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 1;
      //console.log("ป.4 ld3_group = " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่4" && ld2_dscore === 8 && sex === "ชาย") || (g === "ชั้นประถมศึกษาปีที่4" && ld2_dscore === 7 && sex === "ชาย")) {
      ld2_tscore = 42;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 1;
      //console.log("ป.4 ld3_group = " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่4" && ld2_dscore === 6 && sex === "ชาย") || (g === "ชั้นประถมศึกษาปีที่4" && ld2_dscore === 5 && sex === "ชาย")) {
      ld2_tscore = 41;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 1;
      //console.log("ป.4 ld3_group = " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่4" && ld2_dscore === 4 && sex === "ชาย") || (g === "ชั้นประถมศึกษาปีที่4" && ld2_dscore === 3 && sex === "ชาย")) {
      ld2_tscore = 40;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 1;
      //console.log("ป.4 ld3_group = " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่4" && ld2_dscore === 2 && sex === "ชาย") || (g === "ชั้นประถมศึกษาปีที่4" && ld2_dscore === 1 && sex === "ชาย")) {
      ld2_tscore = 39;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 1;
      //console.log("ป.4 ld3_group = " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่4" && ld2_dscore === 0 && sex === "ชาย") {
      ld2_tscore = 38;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 1;
      //console.log("ป.4 ld3_group = " + ld2_group);
    }

    else if ((g === "ชั้นประถมศึกษาปีที่5" && ld2_dscore === 60 && sex === "ชาย") || (g === "ชั้นประถมศึกษาปีที่5" && ld2_dscore === 59 && sex === "ชาย")) {
      ld2_tscore = 80;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.5 ld3_group = " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่5" && ld2_dscore === 58 && sex === "ชาย") {
      ld2_tscore = 79;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.5 ld3_group = " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่5" && ld2_dscore === 57 && sex === "ชาย") || (g === "ชั้นประถมศึกษาปีที่5" && ld2_dscore === 56 && sex === "ชาย")) {
      ld2_tscore = 78;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.5 ld3_group = " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่5" && ld2_dscore === 55 && sex === "ชาย") {
      ld2_tscore = 77;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.5 ld3_group = " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่5" && ld2_dscore === 54 && sex === "ชาย") || (g === "ชั้นประถมศึกษาปีที่5" && ld2_dscore === 53 && sex === "ชาย")) {
      ld2_tscore = 76;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.5 ld3_group = " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่5" && ld2_dscore === 52 && sex === "ชาย") {
      ld2_tscore = 75;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.5 ld3_group = " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่5" && ld2_dscore === 51 && sex === "ชาย") {
      ld2_tscore = 74;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.5 ld3_group = " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่5" && ld2_dscore === 50 && sex === "ชาย") || (g === "ชั้นประถมศึกษาปีที่5" && ld2_dscore === 49 && sex === "ชาย")) {
      ld2_tscore = 73;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.5 ld3_group = " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่5" && ld2_dscore === 48 && sex === "ชาย") {
      ld2_tscore = 72;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.5 ld3_group = " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่5" && ld2_dscore === 47 && sex === "ชาย") || (g === "ชั้นประถมศึกษาปีที่5" && ld2_dscore === 46 && sex === "ชาย")) {
      ld2_tscore = 71;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.5 ld3_group = " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่5" && ld2_dscore === 45 && sex === "ชาย") {
      ld2_tscore = 70;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 3;
      //console.log("ป.5 ld3_group = " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่5" && ld2_dscore === 44 && sex === "ชาย") || (g === "ชั้นประถมศึกษาปีที่5" && ld2_dscore === 43 && sex === "ชาย")) {
      ld2_tscore = 69;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 3;
      //console.log("ป.5 ld3_group = " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่5" && ld2_dscore === 42 && sex === "ชาย") {
      ld2_tscore = 68;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 3;
      //console.log("ป.5 ld3_group = " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่5" && ld2_dscore === 41 && sex === "ชาย") || (g === "ชั้นประถมศึกษาปีที่5" && ld2_dscore === 40 && sex === "ชาย")) {
      ld2_tscore = 67;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 3;
      //console.log("ป.5 ld3_group = " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่5" && ld2_dscore === 39 && sex === "ชาย") {
      ld2_tscore = 66;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 3;
      //console.log("ป.5 ld3_group = " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่5" && ld2_dscore === 38 && sex === "ชาย") || (g === "ชั้นประถมศึกษาปีที่5" && ld2_dscore === 37 && sex === "ชาย")) {
      ld2_tscore = 65;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 3;
      //console.log("ป.5 ld3_group = " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่5" && ld2_dscore === 36 && sex === "ชาย") {
      ld2_tscore = 64;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 3;
      //console.log("ป.5 ld3_group = " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่5" && ld2_dscore === 35 && sex === "ชาย") || (g === "ชั้นประถมศึกษาปีที่5" && ld2_dscore === 34 && sex === "ชาย")) {
      ld2_tscore = 63;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 3;
      //console.log("ป.5 ld3_group = " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่5" && ld2_dscore === 33 && sex === "ชาย") {
      ld2_tscore = 62;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 3;
      //console.log("ป.5 ld3_group = " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่5" && ld2_dscore === 32 && sex === "ชาย") {
      ld2_tscore = 61;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 3;
      //console.log("ป.5 ld3_group = " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่5" && ld2_dscore === 31 && sex === "ชาย") || (g === "ชั้นประถมศึกษาปีที่5" && ld2_dscore === 30 && sex === "ชาย")) {
      ld2_tscore = 60;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 2;
      //console.log("ป.5 ld3_group = " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่5" && ld2_dscore === 29 && sex === "ชาย") {
      ld2_tscore = 59;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 2;
      //console.log("ป.5 ld3_group = " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่5" && ld2_dscore === 28 && sex === "ชาย") || (g === "ชั้นประถมศึกษาปีที่5" && ld2_dscore === 27 && sex === "ชาย")) {
      ld2_tscore = 58;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 2;
      //console.log("ป.5 ld3_group = " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่5" && ld2_dscore === 26 && sex === "ชาย") {
      ld2_tscore = 57;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 2;
      //console.log("ป.5 ld3_group = " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่5" && ld2_dscore === 25 && sex === "ชาย") || (g === "ชั้นประถมศึกษาปีที่5" && ld2_dscore === 24 && sex === "ชาย")) {
      ld2_tscore = 56;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 2;
      //console.log("ป.5 ld3_group = " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่5" && ld2_dscore === 23 && sex === "ชาย") {
      ld2_tscore = 55;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 2;
      //console.log("ป.5 ld3_group = " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่5" && ld2_dscore === 22 && sex === "ชาย") || (g === "ชั้นประถมศึกษาปีที่5" && ld2_dscore === 21 && sex === "ชาย")) {
      ld2_tscore = 54;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 2;
      //console.log("ป.5 ld3_group = " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่5" && ld2_dscore === 20 && sex === "ชาย") {
      ld2_tscore = 53;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 2;
      //console.log("ป.5 ld3_group = " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่5" && ld2_dscore === 19 && sex === "ชาย") || (g === "ชั้นประถมศึกษาปีที่5" && ld2_dscore === 18 && sex === "ชาย")) {
      ld2_tscore = 52;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 2;
      //console.log("ป.5 ld3_group = " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่5" && ld2_dscore === 17 && sex === "ชาย") {
      ld2_tscore = 51;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 2;
      //console.log("ป.5 ld3_group = " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่5" && ld2_dscore === 16 && sex === "ชาย") || (g === "ชั้นประถมศึกษาปีที่5" && ld2_dscore === 15 && sex === "ชาย")) {
      ld2_tscore = 50;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 1;
      //console.log("ป.5 ld3_group = " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่5" && ld2_dscore === 14 && sex === "ชาย") {
      ld2_tscore = 49;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 1;
      //console.log("ป.5 ld3_group = " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่5" && ld2_dscore === 13 && sex === "ชาย") || (g === "ชั้นประถมศึกษาปีที่5" && ld2_dscore === 12 && sex === "ชาย")) {
      ld2_tscore = 48;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 1;
      //console.log("ป.5 ld3_group = " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่5" && ld2_dscore === 11 && sex === "ชาย") {
      ld2_tscore = 47;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 1;
      //console.log("ป.5 ld3_group = " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่5" && ld2_dscore === 10 && sex === "ชาย") {
      ld2_tscore = 46;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 1;
      //console.log("ป.5 ld3_group = " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่5" && ld2_dscore === 9 && sex === "ชาย") || (g === "ชั้นประถมศึกษาปีที่5" && ld2_dscore === 8 && sex === "ชาย")) {
      ld2_tscore = 45;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 1;
      //console.log("ป.5 ld3_group = " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่5" && ld2_dscore === 7 && sex === "ชาย") {
      ld2_tscore = 44;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 1;
      //console.log("ป.5 ld3_group = " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่5" && ld2_dscore === 6 && sex === "ชาย") || (g === "ชั้นประถมศึกษาปีที่5" && ld2_dscore === 5 && sex === "ชาย")) {
      ld2_tscore = 43;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 1;
      //console.log("ป.5 ld3_group = " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่5" && ld2_dscore === 4 && sex === "ชาย") {
      ld2_tscore = 42;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 1;
      //console.log("ป.5 ld3_group = " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่5" && ld2_dscore === 3 && sex === "ชาย") || (g === "ชั้นประถมศึกษาปีที่5" && ld2_dscore === 2 && sex === "ชาย")) {
      ld2_tscore = 41;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 1;
      //console.log("ป.5 ld3_group = " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่5" && ld2_dscore === 1 && sex === "ชาย") {
      ld2_tscore = 40;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 1;
      //console.log("ป.5 ld3_group = " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่5" && ld2_dscore === 0 && sex === "ชาย") {
      ld2_tscore = 39;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 1;
      //console.log("ป.5 ld3_group = " + ld2_group);
    }

    else if ((g === "ชั้นประถมศึกษาปีที่6" && ld2_dscore === 60 && sex === "ชาย") || (g === "ชั้นประถมศึกษาปีที่6" && ld2_dscore === 59 && sex === "ชาย")) {
      ld2_tscore = 82;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.6 ld3_group = " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่6" && ld2_dscore === 58 && sex === "ชาย") {
      ld2_tscore = 81;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.6 ld3_group = " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่6" && ld2_dscore === 57 && sex === "ชาย") {
      ld2_tscore = 80;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.6 ld3_group = " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่6" && ld2_dscore === 56 && sex === "ชาย") || (g === "ชั้นประถมศึกษาปีที่6" && ld2_dscore === 55 && sex === "ชาย")) {
      ld2_tscore = 79;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.6 ld3_group = " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่6" && ld2_dscore === 54 && sex === "ชาย") {
      ld2_tscore = 78;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.6 ld3_group = " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่6" && ld2_dscore === 53 && sex === "ชาย") || (g === "ชั้นประถมศึกษาปีที่6" && ld2_dscore === 52 && sex === "ชาย")) {
      ld2_tscore = 77;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.6 ld3_group = " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่6" && ld2_dscore === 51 && sex === "ชาย") {
      ld2_tscore = 76;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.6 ld3_group = " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่6" && ld2_dscore === 50 && sex === "ชาย") {
      ld2_tscore = 75;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.6 ld3_group = " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่6" && ld2_dscore === 49 && sex === "ชาย") || (g === "ชั้นประถมศึกษาปีที่6" && ld2_dscore === 48 && sex === "ชาย")) {
      ld2_tscore = 74;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.6 ld3_group = " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่6" && ld2_dscore === 47 && sex === "ชาย") {
      ld2_tscore = 73;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.6 ld3_group = " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่6" && ld2_dscore === 46 && sex === "ชาย") || (g === "ชั้นประถมศึกษาปีที่6" && ld2_dscore === 45 && sex === "ชาย")) {
      ld2_tscore = 72;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.6 ld3_group = " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่6" && ld2_dscore === 44 && sex === "ชาย") {
      ld2_tscore = 71;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.6 ld3_group = " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่6" && ld2_dscore === 43 && sex === "ชาย") {
      ld2_tscore = 70;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 3;
      //console.log("ป.6 ld3_group = " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่6" && ld2_dscore === 42 && sex === "ชาย") || (g === "ชั้นประถมศึกษาปีที่6" && ld2_dscore === 41 && sex === "ชาย")) {
      ld2_tscore = 69;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 3;
      //console.log("ป.6 ld3_group = " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่6" && ld2_dscore === 40 && sex === "ชาย") {
      ld2_tscore = 68;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 3;
      //console.log("ป.6 ld3_group = " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่6" && ld2_dscore === 39 && sex === "ชาย") {
      ld2_tscore = 67;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 3;
      //console.log("ป.6 ld3_group = " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่6" && ld2_dscore === 38 && sex === "ชาย") || (g === "ชั้นประถมศึกษาปีที่6" && ld2_dscore === 37 && sex === "ชาย")) {
      ld2_tscore = 66;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 3;
      //console.log("ป.6 ld3_group = " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่6" && ld2_dscore === 36 && sex === "ชาย") {
      ld2_tscore = 65;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 3;
      //console.log("ป.6 ld3_group = " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่6" && ld2_dscore === 35 && sex === "ชาย") || (g === "ชั้นประถมศึกษาปีที่6" && ld2_dscore === 34 && sex === "ชาย")) {
      ld2_tscore = 64;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 3;
      //console.log("ป.6 ld3_group = " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่6" && ld2_dscore === 33 && sex === "ชาย") {
      ld2_tscore = 63;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 3;
      //console.log("ป.6 ld3_group = " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่6" && ld2_dscore === 32 && sex === "ชาย") {
      ld2_tscore = 62;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 3;
      //console.log("ป.6 ld3_group = " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่6" && ld2_dscore === 31 && sex === "ชาย") || (g === "ชั้นประถมศึกษาปีที่6" && ld2_dscore === 30 && sex === "ชาย")) {
      ld2_tscore = 61;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 3;
      //console.log("ป.6 ld3_group = " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่6" && ld2_dscore === 29 && sex === "ชาย") {
      ld2_tscore = 60;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 2;
      //console.log("ป.6 ld3_group = " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่6" && ld2_dscore === 28 && sex === "ชาย") || (g === "ชั้นประถมศึกษาปีที่6" && ld2_dscore === 27 && sex === "ชาย")) {
      ld2_tscore = 59;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 2;
      //console.log("ป.6 ld3_group = " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่6" && ld2_dscore === 26 && sex === "ชาย") {
      ld2_tscore = 58;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 2;
      //console.log("ป.6 ld3_group = " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่6" && ld2_dscore === 25 && sex === "ชาย") {
      ld2_tscore = 57;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 2;
      //console.log("ป.6 ld3_group = " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่6" && ld2_dscore === 24 && sex === "ชาย") || (g === "ชั้นประถมศึกษาปีที่6" && ld2_dscore === 23 && sex === "ชาย")) {
      ld2_tscore = 56;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 2;
      //console.log("ป.6 ld3_group = " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่6" && ld2_dscore === 22 && sex === "ชาย") {
      ld2_tscore = 55;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 2;
      //console.log("ป.6 ld3_group = " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่6" && ld2_dscore === 21 && sex === "ชาย") {
      ld2_tscore = 54;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 2;
      //console.log("ป.6 ld3_group = " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่6" && ld2_dscore === 20 && sex === "ชาย") || (g === "ชั้นประถมศึกษาปีที่6" && ld2_dscore === 19 && sex === "ชาย")) {
      ld2_tscore = 53;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 2;
      //console.log("ป.6 ld3_group = " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่6" && ld2_dscore === 18 && sex === "ชาย") {
      ld2_tscore = 52;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 2;
      //console.log("ป.6 ld3_group = " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่6" && ld2_dscore === 17 && sex === "ชาย") || (g === "ชั้นประถมศึกษาปีที่6" && ld2_dscore === 16 && sex === "ชาย")) {
      ld2_tscore = 51;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 2;
      //console.log("ป.6 ld3_group = " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่6" && ld2_dscore === 15 && sex === "ชาย") {
      ld2_tscore = 50;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 1;
      //console.log("ป.6 ld3_group = " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่6" && ld2_dscore === 14 && sex === "ชาย") {
      ld2_tscore = 49;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 1;
      //console.log("ป.6 ld3_group = " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่6" && ld2_dscore === 13 && sex === "ชาย") || (g === "ชั้นประถมศึกษาปีที่6" && ld2_dscore === 12 && sex === "ชาย")) {
      ld2_tscore = 48;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 1;
      //console.log("ป.6 ld3_group = " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่6" && ld2_dscore === 11 && sex === "ชาย") {
      ld2_tscore = 47;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 1;
      //console.log("ป.6 ld3_group = " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่6" && ld2_dscore === 10 && sex === "ชาย") || (g === "ชั้นประถมศึกษาปีที่6" && ld2_dscore === 9 && sex === "ชาย")) {
      ld2_tscore = 46;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 1;
      //console.log("ป.6 ld3_group = " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่6" && ld2_dscore === 8 && sex === "ชาย") {
      ld2_tscore = 45;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 1;
      //console.log("ป.6 ld3_group = " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่6" && ld2_dscore === 7 && sex === "ชาย") {
      ld2_tscore = 44;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 1;
      //console.log("ป.6 ld3_group = " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่6" && ld2_dscore === 6 && sex === "ชาย") || (g === "ชั้นประถมศึกษาปีที่6" && ld2_dscore === 5 && sex === "ชาย")) {
      ld2_tscore = 43;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 1;
      //console.log("ป.6 ld3_group = " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่6" && ld2_dscore === 4 && sex === "ชาย") {
      ld2_tscore = 42;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 1;
      //console.log("ป.6 ld3_group = " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่6" && ld2_dscore === 3 && sex === "ชาย") {
      ld2_tscore = 41;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 1;
      //console.log("ป.6 ld3_group = " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่6" && ld2_dscore === 1 && sex === "ชาย") || (g === "ชั้นประถมศึกษาปีที่6" && ld2_dscore === 2 && sex === "ชาย")) {
      ld2_tscore = 40;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 1;
      //console.log("ป.6 ld3_group = " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่6" && ld2_dscore === 0 && sex === "ชาย") {
      ld2_tscore = 39;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 1;
      //console.log("ป.6 ld3_group = " + ld2_group);
    }

    else if (g === "ชั้นประถมศึกษาปีที่1" && ld2_dscore === 60 && sex === "หญิง") {
      ld2_tscore = 84;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.1 ญ ld3_group = " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่1" && ld2_dscore === 59 && sex === "หญิง") {
      ld2_tscore = 83;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.1 ญ ld3_group = " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่1" && ld2_dscore === 58 && sex === "หญิง") || (g === "ชั้นประถมศึกษาปีที่1" && ld2_dscore === 57 && sex === "หญิง")) {
      ld2_tscore = 82;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.1 ญ ld3_group = " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่1" && ld2_dscore === 56 && sex === "หญิง") {
      ld2_tscore = 81;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.1 ญ ld3_group = " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่1" && ld2_dscore === 55 && sex === "หญิง") {
      ld2_tscore = 80;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.1 ญ ld3_group = " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่1" && ld2_dscore === 54 && sex === "หญิง") || (g === "ชั้นประถมศึกษาปีที่1" && ld2_dscore === 53 && sex === "หญิง")) {
      ld2_tscore = 79;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.1 ญ ld3_group = " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่1" && ld2_dscore === 52 && sex === "หญิง") {
      ld2_tscore = 78;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.1 ญ ld3_group = " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่1" && ld2_dscore === 51 && sex === "หญิง") {
      ld2_tscore = 77;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.1 ญ ld3_group = " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่1" && ld2_dscore === 50 && sex === "หญิง") || (g === "ชั้นประถมศึกษาปีที่1" && ld2_dscore === 49 && sex === "หญิง")) {
      ld2_tscore = 76;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.1 ญ ld3_group = " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่1" && ld2_dscore === 48 && sex === "หญิง") {
      ld2_tscore = 75;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.1 ญ ld3_group = " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่1" && ld2_dscore === 47 && sex === "หญิง") {
      ld2_tscore = 74;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.1 ญ ld3_group = " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่1" && ld2_dscore === 46 && sex === "หญิง") || (g === "ชั้นประถมศึกษาปีที่1" && ld2_dscore === 45 && sex === "หญิง")) {
      ld2_tscore = 73;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.1 ญ ld3_group = " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่1" && ld2_dscore === 44 && sex === "หญิง") {
      ld2_tscore = 72;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.1 ญ ld3_group = " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่1" && ld2_dscore === 43 && sex === "หญิง") {
      ld2_tscore = 71;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.1 ญ ld3_group = " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่1" && ld2_dscore === 42 && sex === "หญิง") || (g === "ชั้นประถมศึกษาปีที่1" && ld2_dscore === 41 && sex === "หญิง")) {
      ld2_tscore = 70;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 3;
      //console.log("ป.1 ญ ld3_group = " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่1" && ld2_dscore === 40 && sex === "หญิง") {
      ld2_tscore = 69;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 3;
      //console.log("ป.1 ญ ld3_group = " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่1" && ld2_dscore === 39 && sex === "หญิง") {
      ld2_tscore = 68;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 3;
      //console.log("ป.1 ญ ld3_group = " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่1" && ld2_dscore === 38 && sex === "หญิง") || (g === "ชั้นประถมศึกษาปีที่1" && ld2_dscore === 37 && sex === "หญิง")) {
      ld2_tscore = 67;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 3;
      //console.log("ป.1 ญ ld3_group = " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่1" && ld2_dscore === 36 && sex === "หญิง") {
      ld2_tscore = 66;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 3;
      //console.log("ป.1 ญ ld3_group = " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่1" && ld2_dscore === 35 && sex === "หญิง") {
      ld2_tscore = 65;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 3;
      //console.log("ป.1 ญ ld3_group = " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่1" && ld2_dscore === 34 && sex === "หญิง") || (g === "ชั้นประถมศึกษาปีที่1" && ld2_dscore === 33 && sex === "หญิง")) {
      ld2_tscore = 64;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 3;
      //console.log("ป.1 ญ ld3_group = " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่1" && ld2_dscore === 32 && sex === "หญิง") {
      ld2_tscore = 63;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 3;
      //console.log("ป.1 ญ ld3_group = " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่1" && ld2_dscore === 31 && sex === "หญิง") || (g === "ชั้นประถมศึกษาปีที่1" && ld2_dscore === 30 && sex === "หญิง")) {
      ld2_tscore = 62;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 3;
      //console.log("ป.1 ญ ld3_group = " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่1" && ld2_dscore === 29 && sex === "หญิง") {
      ld2_tscore = 61;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 3;
      //console.log("ป.1 ญ ld3_group = " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่1" && ld2_dscore === 28 && sex === "หญิง") {
      ld2_tscore = 60;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 2;
      //console.log("ป.1 ญ ld3_group = " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่1" && ld2_dscore === 27 && sex === "หญิง") || (g === "ชั้นประถมศึกษาปีที่1" && ld2_dscore === 26 && sex === "หญิง")) {
      ld2_tscore = 59;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 2;
      //console.log("ป.1 ญ ld3_group = " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่1" && ld2_dscore === 25 && sex === "หญิง") {
      ld2_tscore = 58;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 2;
      //console.log("ป.1 ญ ld3_group = " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่1" && ld2_dscore === 24 && sex === "หญิง") {
      ld2_tscore = 57;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 2;
      //console.log("ป.1 ญ ld3_group = " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่1" && ld2_dscore === 23 && sex === "หญิง") || (g === "ชั้นประถมศึกษาปีที่1" && ld2_dscore === 22 && sex === "หญิง")) {
      ld2_tscore = 56;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 2;
      //console.log("ป.1 ญ ld3_group = " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่1" && ld2_dscore === 21 && sex === "หญิง") {
      ld2_tscore = 55;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 2;
      //console.log("ป.1 ญ ld3_group = " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่1" && ld2_dscore === 20 && sex === "หญิง") {
      ld2_tscore = 54;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 2;
      //console.log("ป.1 ญ ld3_group = " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่1" && ld2_dscore === 19 && sex === "หญิง") || (g === "ชั้นประถมศึกษาปีที่1" && ld2_dscore === 18 && sex === "หญิง")) {
      ld2_tscore = 53;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 2;
      //console.log("ป.1 ญ ld3_group = " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่1" && ld2_dscore === 17 && sex === "หญิง") {
      ld2_tscore = 52;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 2;
      //console.log("ป.1 ญ ld3_group = " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่1" && ld2_dscore === 16 && sex === "หญิง") {
      ld2_tscore = 51;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 2;
      //console.log("ป.1 ญ ld3_group = " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่1" && ld2_dscore === 15 && sex === "หญิง") || (g === "ชั้นประถมศึกษาปีที่1" && ld2_dscore === 14 && sex === "หญิง")) {
      ld2_tscore = 50;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 1;
      //console.log("ป.1 ญ ld3_group = " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่1" && ld2_dscore === 13 && sex === "หญิง") {
      ld2_tscore = 49;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 1;
      //console.log("ป.1 ญ ld3_group = " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่1" && ld2_dscore === 12 && sex === "หญิง") {
      ld2_tscore = 48;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 1;
      //console.log("ป.1 ญ ld3_group = " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่1" && ld2_dscore === 10 && sex === "หญิง") || (g === "ชั้นประถมศึกษาปีที่1" && ld2_dscore === 11 && sex === "หญิง")) {
      ld2_tscore = 47;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 1;
      //console.log("ป.1 ญ ld3_group = " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่1" && ld2_dscore === 9 && sex === "หญิง") {
      ld2_tscore = 46;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 1;
      //console.log("ป.1 ญ ld3_group = " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่1" && ld2_dscore === 8 && sex === "หญิง") {
      ld2_tscore = 45;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 1;
      //console.log("ป.1 ญ ld3_group = " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่1" && ld2_dscore === 7 && sex === "หญิง") || (g === "ชั้นประถมศึกษาปีที่1" && ld2_dscore === 6 && sex === "หญิง")) {
      ld2_tscore = 44;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 1;
      //console.log("ป.1 ญ ld3_group = " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่1" && ld2_dscore === 5 && sex === "หญิง") {
      ld2_tscore = 43;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 1;
      //console.log("ป.1 ญ ld3_group = " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่1" && ld2_dscore === 4 && sex === "หญิง") || (g === "ชั้นประถมศึกษาปีที่1" && ld2_dscore === 3 && sex === "หญิง")) {
      ld2_tscore = 42;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 1;
      //console.log("ป.1 ญ ld3_group = " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่1" && ld2_dscore === 2 && sex === "หญิง") {
      ld2_tscore = 41;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 1;
      //console.log("ป.1 ญ ld3_group = " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่1" && ld2_dscore === 1 && sex === "หญิง") {
      ld2_tscore = 40;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 1;
      //console.log("ป.1 ญ ld3_group = " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่1" && ld2_dscore === 0 && sex === "หญิง") {
      ld2_tscore = 39;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 1;
      //console.log("ป.1 ญ ld3_group = " + ld2_group);
    }

    else if (g === "ชั้นประถมศึกษาปีที่2" && ld2_dscore === 60 && sex === "หญิง") {
      ld2_tscore = 87;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.2 ญ ld3_group " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่2" && ld2_dscore === 59 && sex === "หญิง") || (g === "ชั้นประถมศึกษาปีที่2" && ld2_dscore === 58 && sex === "หญิง")) {
      ld2_tscore = 86;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.2 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่2" && ld2_dscore === 57 && sex === "หญิง") {
      ld2_tscore = 85;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.2 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่2" && ld2_dscore === 56 && sex === "หญิง") {
      ld2_tscore = 84;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.2 ญ ld3_group " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่2" && ld2_dscore === 55 && sex === "หญิง") || (g === "ชั้นประถมศึกษาปีที่2" && ld2_dscore === 54 && sex === "หญิง")) {
      ld2_tscore = 83;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.2 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่2" && ld2_dscore === 53 && sex === "หญิง") {
      ld2_tscore = 82;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.2 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่2" && ld2_dscore === 52 && sex === "หญิง") {
      ld2_tscore = 81;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.2 ญ ld3_group " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่2" && ld2_dscore === 51 && sex === "หญิง") || (g === "ชั้นประถมศึกษาปีที่2" && ld2_dscore === 50 && sex === "หญิง")) {
      ld2_tscore = 80;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.2 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่2" && ld2_dscore === 49 && sex === "หญิง") {
      ld2_tscore = 79;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.2 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่2" && ld2_dscore === 48 && sex === "หญิง") {
      ld2_tscore = 78;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.2 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่2" && ld2_dscore === 47 && sex === "หญิง") {
      ld2_tscore = 77;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.2 ญ ld3_group " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่2" && ld2_dscore === 46 && sex === "หญิง") || (g === "ชั้นประถมศึกษาปีที่2" && ld2_dscore === 45 && sex === "หญิง")) {
      ld2_tscore = 76;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.2 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่2" && ld2_dscore === 44 && sex === "หญิง") {
      ld2_tscore = 75;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.2 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่2" && ld2_dscore === 43 && sex === "หญิง") {
      ld2_tscore = 74;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.2 ญ ld3_group " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่2" && ld2_dscore === 42 && sex === "หญิง") || (g === "ชั้นประถมศึกษาปีที่2" && ld2_dscore === 41 && sex === "หญิง")) {
      ld2_tscore = 73;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.2 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่2" && ld2_dscore === 40 && sex === "หญิง") {
      ld2_tscore = 72;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.2 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่2" && ld2_dscore === 39 && sex === "หญิง") {
      ld2_tscore = 71;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.2 ญ ld3_group " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่2" && ld2_dscore === 38 && sex === "หญิง") || (g === "ชั้นประถมศึกษาปีที่2" && ld2_dscore === 37 && sex === "หญิง")) {
      ld2_tscore = 70;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 3;
      //console.log("ป.2 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่2" && ld2_dscore === 36 && sex === "หญิง") {
      ld2_tscore = 69;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 3;
      //console.log("ป.2 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่2" && ld2_dscore === 35 && sex === "หญิง") {
      ld2_tscore = 68;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 3;
      //console.log("ป.2 ญ ld3_group " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่2" && ld2_dscore === 34 && sex === "หญิง") || (g === "ชั้นประถมศึกษาปีที่2" && ld2_dscore === 33 && sex === "หญิง")) {
      ld2_tscore = 67;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 3;
      //console.log("ป.2 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่2" && ld2_dscore === 32 && sex === "หญิง") {
      ld2_tscore = 66;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 3;
      //console.log("ป.2 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่2" && ld2_dscore === 31 && sex === "หญิง") {
      ld2_tscore = 65;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 3;
      //console.log("ป.2 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่2" && ld2_dscore === 30 && sex === "หญิง") {
      ld2_tscore = 64;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 3;
      //console.log("ป.2 ญ ld3_group " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่2" && ld2_dscore === 29 && sex === "หญิง") || (g === "ชั้นประถมศึกษาปีที่2" && ld2_dscore === 28 && sex === "หญิง")) {
      ld2_tscore = 63;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 3;
      //console.log("ป.2 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่2" && ld2_dscore === 27 && sex === "หญิง") {
      ld2_tscore = 62;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 3;
      //console.log("ป.2 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่2" && ld2_dscore === 26 && sex === "หญิง") {
      ld2_tscore = 61;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 3;
      //console.log("ป.2 ญ ld3_group " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่2" && ld2_dscore === 25 && sex === "หญิง") || (g === "ชั้นประถมศึกษาปีที่2" && ld2_dscore === 24 && sex === "หญิง")) {
      ld2_tscore = 60;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 2;
      //console.log("ป.2 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่2" && ld2_dscore === 23 && sex === "หญิง") {
      ld2_tscore = 59;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 2;
      //console.log("ป.2 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่2" && ld2_dscore === 22 && sex === "หญิง") {
      ld2_tscore = 58;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 2;
      //console.log("ป.2 ญ ld3_group " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่2" && ld2_dscore === 21 && sex === "หญิง") || (g === "ชั้นประถมศึกษาปีที่2" && ld2_dscore === 20 && sex === "หญิง")) {
      ld2_tscore = 57;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 2;
      //console.log("ป.2 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่2" && ld2_dscore === 19 && sex === "หญิง") {
      ld2_tscore = 56;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 2;
      //console.log("ป.2 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่2" && ld2_dscore === 18 && sex === "หญิง") {
      ld2_tscore = 55;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 2;
      //console.log("ป.2 ญ ld3_group " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่2" && ld2_dscore === 17 && sex === "หญิง") || (g === "ชั้นประถมศึกษาปีที่2" && ld2_dscore === 16 && sex === "หญิง")) {
      ld2_tscore = 54;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 2;
      //console.log("ป.2 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่2" && ld2_dscore === 15 && sex === "หญิง") {
      ld2_tscore = 53;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 2;
      //console.log("ป.2 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่2" && ld2_dscore === 14 && sex === "หญิง") {
      ld2_tscore = 52;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 2;
      //console.log("ป.2 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่2" && ld2_dscore === 13 && sex === "หญิง") {
      ld2_tscore = 51;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 2;
      //console.log("ป.2 ญ ld3_group " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่2" && ld2_dscore === 12 && sex === "หญิง") || (g === "ชั้นประถมศึกษาปีที่2" && ld2_dscore === 11 && sex === "หญิง")) {
      ld2_tscore = 50;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 1;
      //console.log("ป.2 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่2" && ld2_dscore === 10 && sex === "หญิง") {
      ld2_tscore = 49;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 1;
      //console.log("ป.2 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่2" && ld2_dscore === 9 && sex === "หญิง") {
      ld2_tscore = 48;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 1;
      //console.log("ป.2 ญ ld3_group " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่2" && ld2_dscore === 8 && sex === "หญิง") || (g === "ชั้นประถมศึกษาปีที่2" && ld2_dscore === 7 && sex === "หญิง")) {
      ld2_tscore = 47;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 1;
      //console.log("ป.2 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่2" && ld2_dscore === 6 && sex === "หญิง") {
      ld2_tscore = 46;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 1;
      //console.log("ป.2 ญ ld3_group " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่2" && ld2_dscore === 5 && sex === "หญิง") || (g === "ชั้นประถมศึกษาปีที่2" && ld2_dscore === 4 && sex === "หญิง")) {
      ld2_tscore = 45;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 1;
      //console.log("ป.2 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่2" && ld2_dscore === 3 && sex === "หญิง") {
      ld2_tscore = 44;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 1;
      //console.log("ป.2 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่2" && ld2_dscore === 2 && sex === "หญิง") {
      ld2_tscore = 43;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 1;
      //console.log("ป.2 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่2" && ld2_dscore === 1 && sex === "หญิง") {
      ld2_tscore = 42;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 1;
      //console.log("ป.2 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่2" && ld2_dscore === 0 && sex === "หญิง") {
      ld2_tscore = 41;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 1;
      //console.log("ป.2 ญ ld3_group " + ld2_group);
    }

    else if (g === "ชั้นประถมศึกษาปีที่3" && ld2_dscore === 60 && sex === "หญิง") {
      ld2_tscore = 85;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.3 ญ ld3_group " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่3" && ld2_dscore === 59 && sex === "หญิง") || (g === "ชั้นประถมศึกษาปีที่3" && ld2_dscore === 58 && sex === "หญิง")) {
      ld2_tscore = 84;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.3 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่3" && ld2_dscore === 57 && sex === "หญิง") {
      ld2_tscore = 83;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.3 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่3" && ld2_dscore === 56 && sex === "หญิง") {
      ld2_tscore = 82;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.3 ญ ld3_group " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่3" && ld2_dscore === 55 && sex === "หญิง") || (g === "ชั้นประถมศึกษาปีที่3" && ld2_dscore === 54 && sex === "หญิง")) {
      ld2_tscore = 81;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.3 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่3" && ld2_dscore === 53 && sex === "หญิง") {
      ld2_tscore = 80;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.3 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่3" && ld2_dscore === 52 && sex === "หญิง") {
      ld2_tscore = 79;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.3 ญ ld3_group " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่3" && ld2_dscore === 51 && sex === "หญิง") || (g === "ชั้นประถมศึกษาปีที่3" && ld2_dscore === 50 && sex === "หญิง")) {
      ld2_tscore = 78;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.3 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่3" && ld2_dscore === 49 && sex === "หญิง") {
      ld2_tscore = 77;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.3 ญ ld3_group " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่3" && ld2_dscore === 48 && sex === "หญิง") || (g === "ชั้นประถมศึกษาปีที่3" && ld2_dscore === 47 && sex === "หญิง")) {
      ld2_tscore = 76;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.3 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่3" && ld2_dscore === 46 && sex === "หญิง") {
      ld2_tscore = 75;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.3 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่3" && ld2_dscore === 45 && sex === "หญิง") {
      ld2_tscore = 74;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.3 ญ ld3_group " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่3" && ld2_dscore === 44 && sex === "หญิง") || (g === "ชั้นประถมศึกษาปีที่3" && ld2_dscore === 43 && sex === "หญิง")) {
      ld2_tscore = 73;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.3 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่3" && ld2_dscore === 42 && sex === "หญิง") {
      ld2_tscore = 72;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.3 ญ ld3_group " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่3" && ld2_dscore === 41 && sex === "หญิง") || (g === "ชั้นประถมศึกษาปีที่3" && ld2_dscore === 40 && sex === "หญิง")) {
      ld2_tscore = 71;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.3 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่3" && ld2_dscore === 39 && sex === "หญิง") {
      ld2_tscore = 70;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 3;
      //console.log("ป.3 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่3" && ld2_dscore === 38 && sex === "หญิง") {
      ld2_tscore = 69;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 3;
      //console.log("ป.3 ญ ld3_group " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่3" && ld2_dscore === 37 && sex === "หญิง") || (g === "ชั้นประถมศึกษาปีที่3" && ld2_dscore === 36 && sex === "หญิง")) {
      ld2_tscore = 68;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 3;
      //console.log("ป.3 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่3" && ld2_dscore === 35 && sex === "หญิง") {
      ld2_tscore = 67;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 3;
      //console.log("ป.3 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่3" && ld2_dscore === 34 && sex === "หญิง") {
      ld2_tscore = 66;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 3;
      //console.log("ป.3 ญ ld3_group " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่3" && ld2_dscore === 33 && sex === "หญิง") || (g === "ชั้นประถมศึกษาปีที่3" && ld2_dscore === 32 && sex === "หญิง")) {
      ld2_tscore = 65;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 3;
      //console.log("ป.3 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่3" && ld2_dscore === 31 && sex === "หญิง") {
      ld2_tscore = 64;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 3;
      //console.log("ป.3 ญ ld3_group " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่3" && ld2_dscore === 30 && sex === "หญิง") || (g === "ชั้นประถมศึกษาปีที่3" && ld2_dscore === 29 && sex === "หญิง")) {
      ld2_tscore = 63;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 3;
      //console.log("ป.3 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่3" && ld2_dscore === 28 && sex === "หญิง") {
      ld2_tscore = 62;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 3;
      //console.log("ป.3 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่3" && ld2_dscore === 27 && sex === "หญิง") {
      ld2_tscore = 61;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 3;
      //console.log("ป.3 ญ ld3_group " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่3" && ld2_dscore === 26 && sex === "หญิง") || (g === "ชั้นประถมศึกษาปีที่3" && ld2_dscore === 25 && sex === "หญิง")) {
      ld2_tscore = 60;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 2;
      //console.log("ป.3 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่3" && ld2_dscore === 24 && sex === "หญิง") {
      ld2_tscore = 59;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 2;
      //console.log("ป.3 ญ ld3_group " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่3" && ld2_dscore === 23 && sex === "หญิง") || (g === "ชั้นประถมศึกษาปีที่3" && ld2_dscore === 22 && sex === "หญิง")) {
      ld2_tscore = 58;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 2;
      //console.log("ป.3 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่3" && ld2_dscore === 21 && sex === "หญิง") {
      ld2_tscore = 57;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 2;
      //console.log("ป.3 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่3" && ld2_dscore === 20 && sex === "หญิง") {
      ld2_tscore = 56;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 2;
      //console.log("ป.3 ญ ld3_group " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่3" && ld2_dscore === 19 && sex === "หญิง") || (g === "ชั้นประถมศึกษาปีที่3" && ld2_dscore === 18 && sex === "หญิง")) {
      ld2_tscore = 55;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 2;
      //console.log("ป.3 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่3" && ld2_dscore === 17 && sex === "หญิง") {
      ld2_tscore = 54;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 2;
      //console.log("ป.3 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่3" && ld2_dscore === 16 && sex === "หญิง") {
      ld2_tscore = 53;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 2;
      //console.log("ป.3 ญ ld3_group " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่3" && ld2_dscore === 15 && sex === "หญิง") || (g === "ชั้นประถมศึกษาปีที่3" && ld2_dscore === 14 && sex === "หญิง")) {
      ld2_tscore = 52;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 2;
      //console.log("ป.3 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่3" && ld2_dscore === 13 && sex === "หญิง") {
      ld2_tscore = 51;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 2;
      //console.log("ป.3 ญ ld3_group " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่3" && ld2_dscore === 12 && sex === "หญิง") || (g === "ชั้นประถมศึกษาปีที่3" && ld2_dscore === 11 && sex === "หญิง")) {
      ld2_tscore = 50;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 1;
      //console.log("ป.3 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่3" && ld2_dscore === 10 && sex === "หญิง") {
      ld2_tscore = 49;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 1;
      //console.log("ป.3 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่3" && ld2_dscore === 9 && sex === "หญิง") {
      ld2_tscore = 48;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 1;
      //console.log("ป.3 ญ ld3_group " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่3" && ld2_dscore === 8 && sex === "หญิง") || (g === "ชั้นประถมศึกษาปีที่3" && ld2_dscore === 7 && sex === "หญิง")) {
      ld2_tscore = 47;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 1;
      //console.log("ป.3 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่3" && ld2_dscore === 6 && sex === "หญิง") {
      ld2_tscore = 46;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 1;
      //console.log("ป.3 ญ ld3_group " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่3" && ld2_dscore === 5 && sex === "หญิง") || (g === "ชั้นประถมศึกษาปีที่3" && ld2_dscore === 4 && sex === "หญิง")) {
      ld2_tscore = 45;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 1;
      //console.log("ป.3 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่3" && ld2_dscore === 3 && sex === "หญิง") {
      ld2_tscore = 44;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 1;
      //console.log("ป.3 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่3" && ld2_dscore === 2 && sex === "หญิง") {
      ld2_tscore = 43;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 1;
      //console.log("ป.3 ญ ld3_group " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่3" && ld2_dscore === 1 && sex === "หญิง") || (g === "ชั้นประถมศึกษาปีที่3" && ld2_dscore === 0 && sex === "หญิง")) {
      ld2_tscore = 42;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 1;
      //console.log("ป.3 ญ ld3_group " + ld2_group);
    }

    else if ((g === "ชั้นประถมศึกษาปีที่4" && ld2_dscore === 60 && sex === "หญิง") || (g === "ชั้นประถมศึกษาปีที่4" && ld2_dscore === 59 && sex === "หญิง")) {
      ld2_tscore = 90;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.4 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่4" && ld2_dscore === 58 && sex === "หญิง") {
      ld2_tscore = 89;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.4 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่4" && ld2_dscore === 57 && sex === "หญิง") {
      ld2_tscore = 88;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.4 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่4" && ld2_dscore === 56 && sex === "หญิง") {
      ld2_tscore = 87;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.4 ญ ld3_group " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่4" && ld2_dscore === 55 && sex === "หญิง") || (g === "ชั้นประถมศึกษาปีที่4" && ld2_dscore === 54 && sex === "หญิง")) {
      ld2_tscore = 86;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.4 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่4" && ld2_dscore === 53 && sex === "หญิง") {
      ld2_tscore = 85;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.4 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่4" && ld2_dscore === 52 && sex === "หญิง") {
      ld2_tscore = 84;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.4 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่4" && ld2_dscore === 51 && sex === "หญิง") {
      ld2_tscore = 83;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.4 ญ ld3_group " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่4" && ld2_dscore === 50 && sex === "หญิง") || (g === "ชั้นประถมศึกษาปีที่4" && ld2_dscore === 49 && sex === "หญิง")) {
      ld2_tscore = 82;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.4 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่4" && ld2_dscore === 48 && sex === "หญิง") {
      ld2_tscore = 81;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.4 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่4" && ld2_dscore === 47 && sex === "หญิง") {
      ld2_tscore = 80;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.4 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่4" && ld2_dscore === 46 && sex === "หญิง") {
      ld2_tscore = 79;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.4 ญ ld3_group " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่4" && ld2_dscore === 45 && sex === "หญิง") || (g === "ชั้นประถมศึกษาปีที่4" && ld2_dscore === 44 && sex === "หญิง")) {
      ld2_tscore = 78;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.4 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่4" && ld2_dscore === 43 && sex === "หญิง") {
      ld2_tscore = 77;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.4 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่4" && ld2_dscore === 42 && sex === "หญิง") {
      ld2_tscore = 76;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.4 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่4" && ld2_dscore === 41 && sex === "หญิง") {
      ld2_tscore = 75;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.4 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่4" && ld2_dscore === 40 && sex === "หญิง") {
      ld2_tscore = 74;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.4 ญ ld3_group " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่4" && ld2_dscore === 39 && sex === "หญิง") || (g === "ชั้นประถมศึกษาปีที่4" && ld2_dscore === 38 && sex === "หญิง")) {
      ld2_tscore = 73;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.4 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่4" && ld2_dscore === 37 && sex === "หญิง") {
      ld2_tscore = 72;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.4 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่4" && ld2_dscore === 36 && sex === "หญิง") {
      ld2_tscore = 71;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.4 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่4" && ld2_dscore === 35 && sex === "หญิง") {
      ld2_tscore = 70;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 3;
      //console.log("ป.4 ญ ld3_group " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่4" && ld2_dscore === 34 && sex === "หญิง") || (g === "ชั้นประถมศึกษาปีที่4" && ld2_dscore === 33 && sex === "หญิง")) {
      ld2_tscore = 69;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 3;
      //console.log("ป.4 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่4" && ld2_dscore === 32 && sex === "หญิง") {
      ld2_tscore = 68;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 3;
      //console.log("ป.4 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่4" && ld2_dscore === 31 && sex === "หญิง") {
      ld2_tscore = 67;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 3;
      //console.log("ป.4 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่4" && ld2_dscore === 30 && sex === "หญิง") {
      ld2_tscore = 66;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 3;
      //console.log("ป.4 ญ ld3_group " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่4" && ld2_dscore === 29 && sex === "หญิง") || (g === "ชั้นประถมศึกษาปีที่4" && ld2_dscore === 28 && sex === "หญิง")) {
      ld2_tscore = 65;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 3;
      //console.log("ป.4 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่4" && ld2_dscore === 27 && sex === "หญิง") {
      ld2_tscore = 64;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 3;
      //console.log("ป.4 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่4" && ld2_dscore === 26 && sex === "หญิง") {
      ld2_tscore = 63;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 3;
      //console.log("ป.4 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่4" && ld2_dscore === 25 && sex === "หญิง") {
      ld2_tscore = 62;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 3;
      //console.log("ป.4 ญ ld3_group " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่4" && ld2_dscore === 24 && sex === "หญิง") || (g === "ชั้นประถมศึกษาปีที่4" && ld2_dscore === 23 && sex === "หญิง")) {
      ld2_tscore = 61;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 3;
      //console.log("ป.4 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่4" && ld2_dscore === 22 && sex === "หญิง") {
      ld2_tscore = 60;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 2;
      //console.log("ป.4 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่4" && ld2_dscore === 21 && sex === "หญิง") {
      ld2_tscore = 59;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 2;
      //console.log("ป.4 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่4" && ld2_dscore === 20 && sex === "หญิง") {
      ld2_tscore = 58;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 2;
      //console.log("ป.4 ญ ld3_group " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่4" && ld2_dscore === 19 && sex === "หญิง") || (g === "ชั้นประถมศึกษาปีที่4" && ld2_dscore === 18 && sex === "หญิง")) {
      ld2_tscore = 57;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 2;
      //console.log("ป.4 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่4" && ld2_dscore === 17 && sex === "หญิง") {
      ld2_tscore = 56;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 2;
      //console.log("ป.4 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่4" && ld2_dscore === 16 && sex === "หญิง") {
      ld2_tscore = 55;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 2;
      //console.log("ป.4 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่4" && ld2_dscore === 15 && sex === "หญิง") {
      ld2_tscore = 54;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 2;
      //console.log("ป.4 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่4" && ld2_dscore === 14 && sex === "หญิง") {
      ld2_tscore = 53;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 2;
      //console.log("ป.4 ญ ld3_group " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่4" && ld2_dscore === 13 && sex === "หญิง") || (g === "ชั้นประถมศึกษาปีที่4" && ld2_dscore === 12 && sex === "หญิง")) {
      ld2_tscore = 52;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 2;
      //console.log("ป.4 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่4" && ld2_dscore === 11 && sex === "หญิง") {
      ld2_tscore = 51;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 2;
      //console.log("ป.4 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่4" && ld2_dscore === 10 && sex === "หญิง") {
      ld2_tscore = 50;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 1;
      //console.log("ป.4 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่4" && ld2_dscore === 9 && sex === "หญิง") {
      ld2_tscore = 49;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 1;
      //console.log("ป.4 ญ ld3_group " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่4" && ld2_dscore === 8 && sex === "หญิง") || (g === "ชั้นประถมศึกษาปีที่4" && ld2_dscore === 7 && sex === "หญิง")) {
      ld2_tscore = 48;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 1;
      //console.log("ป.4 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่4" && ld2_dscore === 6 && sex === "หญิง") {
      ld2_tscore = 47;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 1;
      //console.log("ป.4 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่4" && ld2_dscore === 5 && sex === "หญิง") {
      ld2_tscore = 46;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 1;
      //console.log("ป.4 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่4" && ld2_dscore === 4 && sex === "หญิง") {
      ld2_tscore = 45;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 1;
      //console.log("ป.4 ญ ld3_group " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่4" && ld2_dscore === 3 && sex === "หญิง") || (g === "ชั้นประถมศึกษาปีที่4" && ld2_dscore === 2 && sex === "หญิง")) {
      ld2_tscore = 44;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 1;
      //console.log("ป.4 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่4" && ld2_dscore === 1 && sex === "หญิง") {
      ld2_tscore = 43;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 1;
      //console.log("ป.4 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่4" && ld2_dscore === 0 && sex === "หญิง") {
      ld2_tscore = 42;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 1;
      //console.log("ป.4 ญ ld3_group " + ld2_group);
    }

    else if (g === "ชั้นประถมศึกษาปีที่5" && ld2_dscore === 60 && sex === "หญิง") {
      ld2_tscore = 94;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.5 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่5" && ld2_dscore === 59 && sex === "หญิง") {
      ld2_tscore = 93;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.5 ญ ld3_group " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่5" && ld2_dscore === 58 && sex === "หญิง") || (g === "ชั้นประถมศึกษาปีที่5" && ld2_dscore === 57 && sex === "หญิง")) {
      ld2_tscore = 92;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.5 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่5" && ld2_dscore === 56 && sex === "หญิง") {
      ld2_tscore = 91;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.5 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่5" && ld2_dscore === 55 && sex === "หญิง") {
      ld2_tscore = 90;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.5 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่5" && ld2_dscore === 54 && sex === "หญิง") {
      ld2_tscore = 89;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.5 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่5" && ld2_dscore === 53 && sex === "หญิง") {
      ld2_tscore = 88;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.5 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่5" && ld2_dscore === 52 && sex === "หญิง") {
      ld2_tscore = 87;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.5 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่5" && ld2_dscore === 51 && sex === "หญิง") {
      ld2_tscore = 86;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.5 ญ ld3_group " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่5" && ld2_dscore === 50 && sex === "หญิง") || (g === "ชั้นประถมศึกษาปีที่5" && ld2_dscore === 49 && sex === "หญิง")) {
      ld2_tscore = 85;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.5 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่5" && ld2_dscore === 48 && sex === "หญิง") {
      ld2_tscore = 84;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.5 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่5" && ld2_dscore === 47 && sex === "หญิง") {
      ld2_tscore = 83;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.5 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่5" && ld2_dscore === 46 && sex === "หญิง") {
      ld2_tscore = 82;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.5 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่5" && ld2_dscore === 45 && sex === "หญิง") {
      ld2_tscore = 81;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.5 ญ ld3_group " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่5" && ld2_dscore === 44 && sex === "หญิง")) {
      ld2_tscore = 80;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.5 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่5" && ld2_dscore === 43 && sex === "หญิง") {
      ld2_tscore = 79;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.5 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่5" && ld2_dscore === 42 && sex === "หญิง") {
      ld2_tscore = 78;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.5 ญ ld3_group " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่5" && ld2_dscore === 41 && sex === "หญิง") || (g === "ชั้นประถมศึกษาปีที่5" && ld2_dscore === 40 && sex === "หญิง")) {
      ld2_tscore = 77;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.5 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่5" && ld2_dscore === 39 && sex === "หญิง") {
      ld2_tscore = 76;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.5 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่5" && ld2_dscore === 38 && sex === "หญิง") {
      ld2_tscore = 75;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.5 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่5" && ld2_dscore === 37 && sex === "หญิง") {
      ld2_tscore = 74;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.5 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่5" && ld2_dscore === 36 && sex === "หญิง") {
      ld2_tscore = 73;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.5 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่5" && ld2_dscore === 35 && sex === "หญิง") {
      ld2_tscore = 72;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.5 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่5" && ld2_dscore === 34 && sex === "หญิง") {
      ld2_tscore = 71;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.5 ญ ld3_group " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่5" && ld2_dscore === 33 && sex === "หญิง") || (g === "ชั้นประถมศึกษาปีที่5" && ld2_dscore === 32 && sex === "หญิง")) {
      ld2_tscore = 70;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 3;
      //console.log("ป.5 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่5" && ld2_dscore === 31 && sex === "หญิง") {
      ld2_tscore = 69;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 3;
      //console.log("ป.5 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่5" && ld2_dscore === 30 && sex === "หญิง") {
      ld2_tscore = 68;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 3;
      //console.log("ป.5 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่5" && ld2_dscore === 29 && sex === "หญิง") {
      ld2_tscore = 67;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 3;
      //console.log("ป.5 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่5" && ld2_dscore === 28 && sex === "หญิง") {
      ld2_tscore = 66;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 3;
      //console.log("ป.5 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่5" && ld2_dscore === 27 && sex === "หญิง") {
      ld2_tscore = 65;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 3;
      //console.log("ป.5 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่5" && ld2_dscore === 26 && sex === "หญิง") {
      ld2_tscore = 64;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 3;
      //console.log("ป.5 ญ ld3_group " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่5" && ld2_dscore === 25 && sex === "หญิง") || (g === "ชั้นประถมศึกษาปีที่5" && ld2_dscore === 24 && sex === "หญิง")) {
      ld2_tscore = 63;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 3;
      //console.log("ป.5 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่5" && ld2_dscore === 23 && sex === "หญิง") {
      ld2_tscore = 62;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 3;
      //console.log("ป.5 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่5" && ld2_dscore === 22 && sex === "หญิง") {
      ld2_tscore = 61;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 3;
      //console.log("ป.5 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่5" && ld2_dscore === 21 && sex === "หญิง") {
      ld2_tscore = 60;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 2;
      //console.log("ป.5 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่5" && ld2_dscore === 20 && sex === "หญิง") {
      ld2_tscore = 59;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 2;
      //console.log("ป.5 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่5" && ld2_dscore === 19 && sex === "หญิง") {
      ld2_tscore = 58;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 2;
      //console.log("ป.5 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่5" && ld2_dscore === 18 && sex === "หญิง") {
      ld2_tscore = 57;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 2;
      //console.log("ป.5 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่5" && ld2_dscore === 17 && sex === "หญิง") {
      ld2_tscore = 56;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 2;
      //console.log("ป.5 ญ ld3_group " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่5" && ld2_dscore === 16 && sex === "หญิง") || (g === "ชั้นประถมศึกษาปีที่5" && ld2_dscore === 15 && sex === "หญิง")) {
      ld2_tscore = 55;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 2;
      //console.log("ป.5 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่5" && ld2_dscore === 14 && sex === "หญิง") {
      ld2_tscore = 54;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 2;
      //console.log("ป.5 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่5" && ld2_dscore === 13 && sex === "หญิง") {
      ld2_tscore = 53;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 2;
      //console.log("ป.5 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่5" && ld2_dscore === 12 && sex === "หญิง") {
      ld2_tscore = 52;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 2;
      //console.log("ป.5 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่5" && ld2_dscore === 11 && sex === "หญิง") {
      ld2_tscore = 51;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 2;
      //console.log("ป.5 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่5" && ld2_dscore === 10 && sex === "หญิง") {
      ld2_tscore = 50;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 1;
      //console.log("ป.5 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่5" && ld2_dscore === 9 && sex === "หญิง") {
      ld2_tscore = 49;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 1;
      //console.log("ป.5 ญ ld3_group " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่5" && ld2_dscore === 8 && sex === "หญิง") || (g === "ชั้นประถมศึกษาปีที่5" && ld2_dscore === 7 && sex === "หญิง")) {
      ld2_tscore = 48;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 1;
      //console.log("ป.5 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่5" && ld2_dscore === 6 && sex === "หญิง") {
      ld2_tscore = 47;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 1;
      //console.log("ป.5 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่5" && ld2_dscore === 5 && sex === "หญิง") {
      ld2_tscore = 46;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 1;
      //console.log("ป.5 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่5" && ld2_dscore === 4 && sex === "หญิง") {
      ld2_tscore = 45;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 1;
      //console.log("ป.5 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่5" && ld2_dscore === 3 && sex === "หญิง") {
      ld2_tscore = 44;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 1;
      //console.log("ป.5 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่5" && ld2_dscore === 2 && sex === "หญิง") {
      ld2_tscore = 43;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 1;
      //console.log("ป.5 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่5" && ld2_dscore === 1 && sex === "หญิง") {
      ld2_tscore = 42;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 1;
      //console.log("ป.5 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่5" && ld2_dscore === 0 && sex === "หญิง") {
      ld2_tscore = 41;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 1;
      //console.log("ป.5 ญ ld3_group " + ld2_group);
    }

    else if (g === "ชั้นประถมศึกษาปีที่6" && ld2_dscore === 60 && sex === "หญิง") {
      ld2_tscore = 96;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.6 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่6" && ld2_dscore === 59 && sex === "หญิง") {
      ld2_tscore = 95;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.6 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่6" && ld2_dscore === 58 && sex === "หญิง") {
      ld2_tscore = 94;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.6 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่6" && ld2_dscore === 54 && sex === "หญิง") {
      ld2_tscore = 93;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.6 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่6" && ld2_dscore === 56 && sex === "หญิง") {
      ld2_tscore = 92;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.6 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่6" && ld2_dscore === 55 && sex === "หญิง") {
      ld2_tscore = 91;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.6 ญ ld3_group " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่6" && ld2_dscore === 54 && sex === "หญิง") || (g === "ชั้นประถมศึกษาปีที่6" && ld2_dscore === 53 && sex === "หญิง")) {
      ld2_tscore = 90;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.6 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่6" && ld2_dscore === 52 && sex === "หญิง") {
      ld2_tscore = 89;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.6 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่6" && ld2_dscore === 51 && sex === "หญิง") {
      ld2_tscore = 88;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.6 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่6" && ld2_dscore === 50 && sex === "หญิง") {
      ld2_tscore = 87;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.6 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่6" && ld2_dscore === 49 && sex === "หญิง") {
      ld2_tscore = 86;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.6 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่6" && ld2_dscore === 48 && sex === "หญิง") {
      ld2_tscore = 85;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.6 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่6" && ld2_dscore === 47 && sex === "หญิง") {
      ld2_tscore = 84;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.6 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่6" && ld2_dscore === 46 && sex === "หญิง") {
      ld2_tscore = 83;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.6 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่6" && ld2_dscore === 45 && sex === "หญิง") {
      ld2_tscore = 82;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.6 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่6" && ld2_dscore === 44 && sex === "หญิง") {
      ld2_tscore = 81;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.6 ญ ld3_group " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่6" && ld2_dscore === 43 && sex === "หญิง") || (g === "ชั้นประถมศึกษาปีที่6" && ld2_dscore === 42 && sex === "หญิง")) {
      ld2_tscore = 80;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.6 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่6" && ld2_dscore === 41 && sex === "หญิง") {
      ld2_tscore = 79;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.6 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่6" && ld2_dscore === 40 && sex === "หญิง") {
      ld2_tscore = 78;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.6 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่6" && ld2_dscore === 39 && sex === "หญิง") {
      ld2_tscore = 77;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.6 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่6" && ld2_dscore === 38 && sex === "หญิง") {
      ld2_tscore = 76;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.6 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่6" && ld2_dscore === 37 && sex === "หญิง") {
      ld2_tscore = 75;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.6 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่6" && ld2_dscore === 36 && sex === "หญิง") {
      ld2_tscore = 74;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.6 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่6" && ld2_dscore === 35 && sex === "หญิง") {
      ld2_tscore = 73;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.6 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่6" && ld2_dscore === 34 && sex === "หญิง") {
      ld2_tscore = 72;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.6 ญ ld3_group " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่6" && ld2_dscore === 33 && sex === "หญิง") || (g === "ชั้นประถมศึกษาปีที่6" && ld2_dscore === 32 && sex === "หญิง")) {
      ld2_tscore = 71;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 4;
      //console.log("ป.6 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่6" && ld2_dscore === 31 && sex === "หญิง") {
      ld2_tscore = 70;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 3;
      //console.log("ป.6 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่6" && ld2_dscore === 30 && sex === "หญิง") {
      ld2_tscore = 69;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 3;
      //console.log("ป.6 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่6" && ld2_dscore === 29 && sex === "หญิง") {
      ld2_tscore = 68;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 3;
      //console.log("ป.6 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่6" && ld2_dscore === 28 && sex === "หญิง") {
      ld2_tscore = 67;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 3;
      //console.log("ป.6 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่6" && ld2_dscore === 27 && sex === "หญิง") {
      ld2_tscore = 66;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 3;
      //console.log("ป.6 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่6" && ld2_dscore === 26 && sex === "หญิง") {
      ld2_tscore = 65;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 3;
      //console.log("ป.6 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่6" && ld2_dscore === 25 && sex === "หญิง") {
      ld2_tscore = 64;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 3;
      //console.log("ป.6 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่6" && ld2_dscore === 24 && sex === "หญิง") {
      ld2_tscore = 63;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 3;
      //console.log("ป.6 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่6" && ld2_dscore === 23 && sex === "หญิง") {
      ld2_tscore = 62;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 3;
      //console.log("ป.6 ญ ld3_group " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่6" && ld2_dscore === 22 && sex === "หญิง") || (g === "ชั้นประถมศึกษาปีที่6" && ld2_dscore === 21 && sex === "หญิง")) {
      ld2_tscore = 61;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 3;
      //console.log("ป.6 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่6" && ld2_dscore === 20 && sex === "หญิง") {
      ld2_tscore = 60;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 2;
      //console.log("ป.6 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่6" && ld2_dscore === 19 && sex === "หญิง") {
      ld2_tscore = 59;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 2;
      //console.log("ป.6 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่6" && ld2_dscore === 18 && sex === "หญิง") {
      ld2_tscore = 58;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 2;
      //console.log("ป.6 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่6" && ld2_dscore === 17 && sex === "หญิง") {
      ld2_tscore = 57;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 2;
      //console.log("ป.6 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่6" && ld2_dscore === 16 && sex === "หญิง") {
      ld2_tscore = 56;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 2;
      //console.log("ป.6 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่6" && ld2_dscore === 15 && sex === "หญิง") {
      ld2_tscore = 55;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 2;
      //console.log("ป.6 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่6" && ld2_dscore === 14 && sex === "หญิง") {
      ld2_tscore = 54;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 2;
      //console.log("ป.6 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่6" && ld2_dscore === 13 && sex === "หญิง") {
      ld2_tscore = 53;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 2;
      //console.log("ป.6 ญ ld3_group " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่6" && ld2_dscore === 12 && sex === "หญิง") || (g === "ชั้นประถมศึกษาปีที่6" && ld2_dscore === 11 && sex === "หญิง")) {
      ld2_tscore = 52;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 2;
      //console.log("ป.6 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่6" && ld2_dscore === 10 && sex === "หญิง") {
      ld2_tscore = 51;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 2;
      //console.log("ป.6 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่6" && ld2_dscore === 9 && sex === "หญิง") {
      ld2_tscore = 50;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 1;
      //console.log("ป.6 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่6" && ld2_dscore === 8 && sex === "หญิง") {
      ld2_tscore = 49;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 1;
      //console.log("ป.6 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่6" && ld2_dscore === 7 && sex === "หญิง") {
      ld2_tscore = 48;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 1;
      //console.log("ป.6 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่6" && ld2_dscore === 6 && sex === "หญิง") {
      ld2_tscore = 47;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 1;
      //console.log("ป.6 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่6" && ld2_dscore === 5 && sex === "หญิง") {
      ld2_tscore = 46;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 1;
      //console.log("ป.6 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่6" && ld2_dscore === 4 && sex === "หญิง") {
      ld2_tscore = 45;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 1;
      //console.log("ป.6 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่6" && ld2_dscore === 3 && sex === "หญิง") {
      ld2_tscore = 44;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 1;
      //console.log("ป.6 ญ ld3_group " + ld2_group);
    } else if (g === "ชั้นประถมศึกษาปีที่6" && ld2_dscore === 2 && sex === "หญิง") {
      ld2_tscore = 43;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 1;
      //console.log("ป.6 ญ ld3_group " + ld2_group);
    } else if ((g === "ชั้นประถมศึกษาปีที่6" && ld2_dscore === 1 && sex === "หญิง") || (g === "ชั้นประถมศึกษาปีที่6" && ld2_dscore === 0 && sex === "หญิง")) {
      ld2_tscore = 42;
      //console.log("ld2_tscore = " + ld2_tscore);
      ld2_group = 1;
      //console.log("ป.6 ญ ld3_group " + ld2_group);
    }

    //console.log("ชั้น" + g)
    //console.log("sex" + sex)
    //console.log("d score :" + ld2_dscore)
    //console.log("t score :" + ld2_tscore)
    //console.log("group :" + ld2_group)

    const ldw_dscore = ld2_dscore
    const ldw_tscore = ld2_tscore
    const ldw_group = ld2_group


    axios.put(`${process.env.REACT_APP_API}/kussi-AAHD/${params.idcard}/${params.schoolyear}/${params.term}`, {
      ldw_dscore, ldw_tscore, ldw_group
    },
    {
      headers: {
        authtoken,
      }
    })
      .then((response) => {
        // alert("บันทึกสำเร็จ");
        history(`/kussi-LDM/${stdidcard}/${schoolyear}/${term}`);
      })
      .catch((err) => {
        alert(err.response.data.error);
      });


  };


  //คำถามLDW
  const infomation = [
    {
      no: 1,
      info: "เขียนตัวหนังสือหลับด้าน",
      chekcbox1: (
        <fieldset>
          <RadioInput
            input
            type="radio"
            label="ไม่เคย"
            name="score"
            value={0}
            checked={score}
            setter={setScore}
          />
          <RadioInput
            input
            type="radio"
            label="เล็กน้อย"
            name="score"
            value={1}
            checked={score}
            setter={setScore}
          />
          <RadioInput
            input
            type="radio"
            label="ค่อนข้างมาก"
            name="score"
            value={2}
            checked={score}
            setter={setScore}
          />
          <RadioInput
            input
            type="radio"
            label="บ่อยมาก"
            name="score"
            value={3}
            checked={score}
            setter={setScore}
          />
        </fieldset>
      ),
    },
    {
      no: 2,
      info: "วนหัวพยัญชนะหลายรอบ",
      chekcbox1: (
        <fieldset>
          <RadioInput
            input
            type="radio"
            label="ไม่เคย"
            name="score1"
            value={0}
            checked={score1}
            setter={setScore1}
          />
          <RadioInput
            input
            type="radio"
            label="เล็กน้อย"
            name="score1"
            value={1}
            checked={score1}
            setter={setScore1}
          />
          <RadioInput
            input
            type="radio"
            label="ค่อนข้างมาก"
            name="score1"
            value={2}
            checked={score1}
            setter={setScore1}
          />
          <RadioInput
            input
            type="radio"
            label="บ่อยมาก"
            name="score1"
            value={3}
            checked={score1}
            setter={setScore1}
          />
        </fieldset>
      ),
    },
    {
      no: 3,
      info: "เขียนช้า",
      chekcbox1: (
        <fieldset>
          <RadioInput
            input
            type="radio"
            label="ไม่เคย"
            name="score2"
            value={0}
            checked={score2}
            setter={setScore2}
          />
          <RadioInput
            input
            type="radio"
            label="เล็กน้อย"
            name="score2"
            value={1}
            checked={score2}
            setter={setScore2}
          />
          <RadioInput
            input
            type="radio"
            label="ค่อนข้างมาก"
            name="score2"
            value={2}
            checked={score2}
            setter={setScore2}
          />
          <RadioInput
            input
            type="radio"
            label="บ่อยมาก"
            name="score2"
            value={3}
            checked={score2}
            setter={setScore2}
          />
        </fieldset>
      ),
    },
    {
      no: 4,
      info: "ดูกระสับกระส่าย หงุดหงิด หรือเครียดขณะที่เขียน",
      chekcbox1: (
        <fieldset>
          <RadioInput
            input
            type="radio"
            label="ไม่เคย"
            name="score3"
            value={0}
            checked={score3}
            setter={setScore3}
          />
          <RadioInput
            input
            type="radio"
            label="เล็กน้อย"
            name="score3"
            value={1}
            checked={score3}
            setter={setScore3}
          />
          <RadioInput
            input
            type="radio"
            label="ค่อนข้างมาก"
            name="score3"
            value={2}
            checked={score3}
            setter={setScore3}
          />
          <RadioInput
            input
            type="radio"
            label="บ่อยมาก"
            name="score3"
            value={3}
            checked={score3}
            setter={setScore3}
          />
        </fieldset>
      ),
    },
    {
      no: 5,
      info: "สะกดคำผิดบ่อยๆแม้แต่คำง่ายๆ",
      chekcbox1: (
        <fieldset>
          <RadioInput
            input
            type="radio"
            label="ไม่เคย"
            name="score4"
            value={0}
            checked={score4}
            setter={setScore4}
          />
          <RadioInput
            input
            type="radio"
            label="เล็กน้อย"
            name="score4"
            value={1}
            checked={score4}
            setter={setScore4}
          />
          <RadioInput
            input
            type="radio"
            label="ค่อนข้างมาก"
            name="score4"
            value={2}
            checked={score4}
            setter={setScore4}
          />
          <RadioInput
            input
            type="radio"
            label="บ่อยมาก"
            name="score4"
            value={3}
            checked={score4}
            setter={setScore4}
          />
        </fieldset>
      ),
    },
    {
      no: 6,
      info: "เขียนแล้วอ่านไม่รู้เรื่อง ",
      chekcbox1: (
        <fieldset>
          <RadioInput
            input
            type="radio"
            label="ไม่เคย"
            name="score5"
            value={0}
            checked={score5}
            setter={setScore5}
          />
          <RadioInput
            input
            type="radio"
            label="เล็กน้อย"
            name="score5"
            value={1}
            checked={score5}
            setter={setScore5}
          />
          <RadioInput
            input
            type="radio"
            label="ค่อนข้างมาก"
            name="score5"
            value={2}
            checked={score5}
            setter={setScore5}
          />
          <RadioInput
            input
            type="radio"
            label="บ่อยมาก"
            name="score5"
            value={3}
            checked={score5}
            setter={setScore5}
          />
        </fieldset>
      ),
    },
    {
      no: 7,
      info: "เขียนตกๆ หล่นๆ ",
      chekcbox1: (
        <fieldset>
          <RadioInput
            input
            type="radio"
            label="ไม่เคย"
            name="score6"
            value={0}
            checked={score6}
            setter={setScore6}
          />
          <RadioInput
            input
            type="radio"
            label="เล็กน้อย"
            name="score6"
            value={1}
            checked={score6}
            setter={setScore6}
          />
          <RadioInput
            input
            type="radio"
            label="ค่อนข้างมาก"
            name="score6"
            value={2}
            checked={score6}
            setter={setScore6}
          />
          <RadioInput
            input
            type="radio"
            label="บ่อยมาก"
            name="score6"
            value={3}
            checked={score6}
            setter={setScore6}
          />
        </fieldset>
      ),
    },
    {
      no: 8,
      info: "เขียนวรรณยุกต์สับสน เช่น ไม้เอกเป็นไม้โท ",
      chekcbox1: (
        <fieldset>
          <RadioInput
            input
            type="radio"
            label="ไม่เคย"
            name="score7"
            value={0}
            checked={score7}
            setter={setScore7}
          />
          <RadioInput
            input
            type="radio"
            label="เล็กน้อย"
            name="score7"
            value={1}
            checked={score7}
            setter={setScore7}
          />
          <RadioInput
            input
            type="radio"
            label="ค่อนข้างมาก"
            name="score7"
            value={2}
            checked={score7}
            setter={setScore7}
          />
          <RadioInput
            input
            type="radio"
            label="บ่อยมาก"
            name="score7"
            value={3}
            checked={score7}
            setter={setScore7}
          />
        </fieldset>
      ),
    },
    {
      no: 9,
      info: "เขียนคำตามเสียงอ่าน เช่น เกษตร เป็น กะเสด ",
      chekcbox1: (
        <fieldset>
          <RadioInput
            input
            type="radio"
            label="ไม่เคย"
            name="score8"
            value={0}
            checked={score8}
            setter={setScore8}
          />
          <RadioInput
            input
            type="radio"
            label="เล็กน้อย"
            name="score8"
            value={1}
            checked={score8}
            setter={setScore8}
          />
          <RadioInput
            input
            type="radio"
            label="ค่อนข้างมาก"
            name="score8"
            value={2}
            checked={score8}
            setter={setScore8}
          />
          <RadioInput
            input
            type="radio"
            label="บ่อยมาก"
            name="score8"
            value={3}
            checked={score8}
            setter={setScore8}
          />
        </fieldset>
      ),
    },
    {
      no: 10,
      info: "เขียนแล้วลบบ่อยๆ ",
      chekcbox1: (
        <fieldset>
          <RadioInput
            input
            type="radio"
            label="ไม่เคย"
            name="score9"
            value={0}
            checked={score9}
            setter={setScore9}
          />
          <RadioInput
            input
            type="radio"
            label="เล็กน้อย"
            name="score9"
            value={1}
            checked={score9}
            setter={setScore9}
          />
          <RadioInput
            input
            type="radio"
            label="ค่อนข้างมาก"
            name="score9"
            value={2}
            checked={score9}
            setter={setScore9}
          />
          <RadioInput
            input
            type="radio"
            label="บ่อยมาก"
            name="score9"
            value={3}
            checked={score9}
            setter={setScore9}
          />
        </fieldset>
      ),
    },
    {
      no: 11,
      info: "เขียนหนังสือไม่เป็นตัว",
      chekcbox1: (
        <fieldset>
          <RadioInput
            input
            type="radio"
            label="ไม่เคย"
            name="score10"
            value={0}
            checked={score10}
            setter={setScore10}
          />
          <RadioInput
            input
            type="radio"
            label="เล็กน้อย"
            name="score10"
            value={1}
            checked={score10}
            setter={setScore10}
          />
          <RadioInput
            input
            type="radio"
            label="ค่อนข้างมาก"
            name="score10"
            value={2}
            checked={score10}
            setter={setScore10}
          />
          <RadioInput
            input
            type="radio"
            label="บ่อยมาก"
            name="score10"
            value={3}
            checked={score10}
            setter={setScore10}
          />
        </fieldset>
      ),
    },
    {
      no: 12,
      info: "สับสนพยัญชนะที่คล้ายกัน เช่น ภ-ถ พ-ผ ด-ค ",
      chekcbox1: (
        <fieldset>
          <RadioInput
            input
            type="radio"
            label="ไม่เคย"
            name="score11"
            value={0}
            checked={score11}
            setter={setScore11}
          />
          <RadioInput
            input
            type="radio"
            label="เล็กน้อย"
            name="score11"
            value={1}
            checked={score11}
            setter={setScore11}
          />
          <RadioInput
            input
            type="radio"
            label="ค่อนข้างมาก"
            name="score11"
            value={2}
            checked={score11}
            setter={setScore11}
          />
          <RadioInput
            input
            type="radio"
            label="บ่อยมาก"
            name="score11"
            value={3}
            checked={score11}
            setter={setScore11}
          />
        </fieldset>
      ),
    },
    {
      no: 13,
      info: "ต้องสะกดคำไปด้วยระหว่างเขียน",
      chekcbox1: (
        <fieldset>
          <RadioInput
            input
            type="radio"
            label="ไม่เคย"
            name="score12"
            value={0}
            checked={score12}
            setter={setScore12}
          />
          <RadioInput
            input
            type="radio"
            label="เล็กน้อย"
            name="score12"
            value={1}
            checked={score12}
            setter={setScore12}
          />
          <RadioInput
            input
            type="radio"
            label="ค่อนข้างมาก"
            name="score12"
            value={2}
            checked={score12}
            setter={setScore12}
          />
          <RadioInput
            input
            type="radio"
            label="บ่อยมาก"
            name="score12"
            value={3}
            checked={score12}
            setter={setScore12}
          />
        </fieldset>
      ),
    },
    {
      no: 14,
      info: "เขียนไม่เว้นวรรค",
      chekcbox1: (
        <fieldset>
          <RadioInput
            input
            type="radio"
            label="ไม่เคย"
            name="score13"
            value={0}
            checked={score13}
            setter={setScore13}
          />
          <RadioInput
            input
            type="radio"
            label="เล็กน้อย"
            name="score13"
            value={1}
            checked={score13}
            setter={setScore13}
          />
          <RadioInput
            input
            type="radio"
            label="ค่อนข้างมาก"
            name="score13"
            value={2}
            checked={score13}
            setter={setScore13}
          />
          <RadioInput
            input
            type="radio"
            label="บ่อยมาก"
            name="score13"
            value={3}
            checked={score13}
            setter={setScore13}
          />
        </fieldset>
      ),
    },
    {
      no: 15,
      info: "เขียนตัวหนังสือโย้ไปเย้มา หรือไม่อยู่ในบรรทัด ",
      chekcbox1: (
        <fieldset>
          <RadioInput
            input
            type="radio"
            label="ไม่เคย"
            name="score14"
            value={0}
            checked={score14}
            setter={setScore14}
          />
          <RadioInput
            input
            type="radio"
            label="เล็กน้อย"
            name="score14"
            value={1}
            checked={score14}
            setter={setScore14}
          />
          <RadioInput
            input
            type="radio"
            label="ค่อนข้างมาก"
            name="score14"
            value={2}
            checked={score14}
            setter={setScore14}
          />
          <RadioInput
            input
            type="radio"
            label="บ่อยมาก"
            name="score14"
            value={3}
            checked={score14}
            setter={setScore14}
          />
        </fieldset>
      ),
    },
    {
      no: 16,
      info: "เขียนตัวหนังสือสลับกัน เช่น เพลง เขียนเป็น เพงล",
      chekcbox1: (
        <fieldset>
          <RadioInput
            input
            type="radio"
            label="ไม่เคย"
            name="score15"
            value={0}
            checked={score15}
            setter={setScore15}
          />
          <RadioInput
            input
            type="radio"
            label="เล็กน้อย"
            name="score15"
            value={1}
            checked={score15}
            setter={setScore15}
          />
          <RadioInput
            input
            type="radio"
            label="ค่อนข้างมาก"
            name="score15"
            value={2}
            checked={score15}
            setter={setScore15}
          />
          <RadioInput
            input
            type="radio"
            label="บ่อยมาก"
            name="score15"
            value={3}
            checked={score15}
            setter={setScore15}
          />
        </fieldset>
      ),
    },
    {
      no: 17,
      info: "เขียนคำควบกล้ำไม่ได้ ",
      chekcbox1: (
        <fieldset>
          <RadioInput
            input
            type="radio"
            label="ไม่เคย"
            name="score16"
            value={0}
            checked={score16}
            setter={setScore16}
          />
          <RadioInput
            input
            type="radio"
            label="เล็กน้อย"
            name="score16"
            value={1}
            checked={score16}
            setter={setScore16}
          />
          <RadioInput
            input
            type="radio"
            label="ค่อนข้างมาก"
            name="score16"
            value={2}
            checked={score16}
            setter={setScore16}
          />
          <RadioInput
            input
            type="radio"
            label="บ่อยมาก"
            name="score16"
            value={3}
            checked={score16}
            setter={setScore16}
          />
        </fieldset>
      ),
    },
    {
      no: 18,
      info: "เขียนประโยคสั้นๆ โดยใช้คำซ้ำง่ายๆ ไม่ค่อยให้รายละเอียด ",
      chekcbox1: (
        <fieldset>
          <RadioInput
            input
            type="radio"
            label="ไม่เคย"
            name="score17"
            value={0}
            checked={score17}
            setter={setScore17}
          />
          <RadioInput
            input
            type="radio"
            label="เล็กน้อย"
            name="score17"
            value={1}
            checked={score17}
            setter={setScore17}
          />
          <RadioInput
            input
            type="radio"
            label="ค่อนข้างมาก"
            name="score17"
            value={2}
            checked={score17}
            setter={setScore17}
          />
          <RadioInput
            input
            type="radio"
            label="บ่อยมาก"
            name="score17"
            value={3}
            checked={score17}
            setter={setScore17}
          />
        </fieldset>
      ),
    },
    {
      no: 19,
      info: "วางสระและวรรณยุกต์ไม่ถูกที่ ",
      chekcbox1: (
        <fieldset>
          <RadioInput
            input
            type="radio"
            label="ไม่เคย"
            name="score18"
            value={0}
            checked={score18}
            setter={setScore18}
          />
          <RadioInput
            input
            type="radio"
            label="เล็กน้อย"
            name="score18"
            value={1}
            checked={score18}
            setter={setScore18}
          />
          <RadioInput
            input
            type="radio"
            label="ค่อนข้างมาก"
            name="score18"
            value={2}
            checked={score18}
            setter={setScore18}
          />
          <RadioInput
            input
            type="radio"
            label="บ่อยมาก"
            name="score18"
            value={3}
            checked={score18}
            setter={setScore18}
          />
        </fieldset>
      ),
    },
    {
      no: 20,
      info: "ความสามารถในการเขียนต่ำกว่าเกณฑ์ชั้นเรียนมาก ",
      chekcbox1: (
        <fieldset>
          <RadioInput
            input
            type="radio"
            label="ไม่เคย"
            name="score19"
            value={0}
            checked={score19}
            setter={setScore19}
          />
          <RadioInput
            input
            type="radio"
            label="เล็กน้อย"
            name="score19"
            value={1}
            checked={score19}
            setter={setScore19}
          />
          <RadioInput
            input
            type="radio"
            label="ค่อนข้างมาก"
            name="score19"
            value={2}
            checked={score19}
            setter={setScore19}
          />
          <RadioInput
            input
            type="radio"
            label="บ่อยมาก"
            name="score19"
            value={3}
            checked={score19}
            setter={setScore19}
          />
        </fieldset>
      ),
    },

  ];

  return (
    <div>
      <Navbartop />
      <br />
      <br />
      <br />
      <br />
      <Container>
        <div className="bgfrom shadow">
          <Stdname />
          <h4 style={{ textAlign: "center", marginTop: "50px" }}>
            <b>
              พฤติกรรมภาวะบกพร่องทางการเรียนรูเทางด้านการเขียน <br /> KUS-SI
              Rating Scales 3 : LD-Written Expression
            </b>
          </h4>
          <br />
          <div className="topfrom">
            <p className="p1">
              <b style={{ marginLeft: "210px", fontSize: "19px" }}>
                คำชี้แจงการตอบแบบคัดกรอง{" "}
              </b>
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;กรุณาให้คะแนนทุกข้อความ
              โดยทำเครื่องหมาย ล้อมตัวเลขที่สามารถ อธิบายพฤติกรรมหรือปัญหา
              ได้เหมาะสมที่สุดตามที่ท่านสังเกตพบ ให้คะแนนแต่ละ
              ข้อความตามระดับความถี่
              หรือความรุนแรงของพฤติกรรมหรือปัญหาที่เกิดขึ้น โดยจัดลำดับ ดังนี้{" "}
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <b>ไม่เคย</b> หมายถึง นักเรียนไม่เคยแสดงพฤติกรรมนี้เลย ครูไม่เคยพบ
              พฤติกรรมนี้เลย (0%) <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <b>เล็กน้อย</b> หมายถึง นักเรียนทำ หรือแสดงพฤติกรรมนี้เล็กน้อย
              ครูพบ พฤติกรรมนี้เล็กน้อย <br />(1-30%)
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <b>ค่อนข้างมาก</b> หมายถึง นักเรียนทำ
              หรือแสดงพฤติกรรมนี้ค่อนข้างมากครูพบ พฤติกรรมนี้ค่อนข้างมาก&nbsp;&nbsp;(31-70%)
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <b>บ่อยมาก</b> หมายถึง นักเรียนทำ หรือแสดงพฤติกรรมนี้บ่อยมาก ครูพบ
              พฤติกรรมนี้บ่อยมาก <br />(71-100%)
            </p>
            <p
              style={{ textAlign: "left", width: "450px", marginLeft: "75px" }}
            >
              <b>ไม่เคยแสดงพฤติกรรมนี้เลย</b> &nbsp; = 0 คะแนน
              <br />
              <b>แสดงพฤติกรรมนี้เล็กน้อย</b> &nbsp; = 1 คะแนน
              <br />
              <b>แสดงพฤติกรรมนี้ค่อนข้างมาก</b> &nbsp; = 2 คะแนน
              <br />
              <b>แสดงพฤติกรรมนี้บ่อยมาก</b> &nbsp; = 3 คะแนน
            </p>
          </div>

          <form onSubmit={submitForm}>
            <Table>
              <thead>
                <tr>
                  <th colSpan={6}>
                    <br />

                  </th>
                </tr>
                <tr style={{ backgroundColor: "pink" }}>
                  <th>ลำดับ</th>
                  <th>รายการ</th>
                  <th>คะแนน</th>
                </tr>
              </thead>
              {infomation.map((element) => {
                return (
                  <tbody key={element.no}>
                    <tr>
                      <td>{element.no}</td>
                      <td align="left">{element.info}</td>
                      <td key={element.no}>{element.chekcbox1}</td>
                    </tr>
                  </tbody>
                );
              })}
            </Table>
            <h5 align="right">
              &nbsp; รวมคะแนนดิบ พฤติกรรมภาวะบกพร่องทางการเรียนรู้เทางด้านการเขียน
              <input type="number" value={ld2_dscore} readOnly /> <br />
            </h5>
            <br />
            <div className="d-flex justify-content-center">
              <div>
                <Button variant="success" type="submit" align="right">
                  {"ถัดไป"}
                </Button>
              </div>
            </div>
          </form>
        </div>
      </Container>
      <br />
      <br />
    </div>
  );
};

export default Kussi_LDW;
