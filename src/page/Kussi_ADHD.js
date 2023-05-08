import React from "react";
import "./Kussi_ADHD.css";
import { Table, Button, Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router";
import Navbartop from "../components/Navbar_top";
import moment from "moment";
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

const Kussi_ADHD = (props) => {
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
  console.log(params)

  const [stdinfomation, setStdinfomation] = useState();
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API}/kussi/${params.idcard}/${params.schoolyear}/${params.term}`,
      {
        headers: {
          authtoken,
        }
      })
      .then((response) => {
        setStdinfomation(response.data);
      })
      .catch((err) => alert(err));
  }, [params]);
  console.log(stdinfomation)
  //console.log(params.schoolyear)
  //console.log(params.term)




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

  var adhd1_dscore = score + score1 + score2 + score3 + score4 + score5 + score6 + score7 + score8 + score9 + score10 + score11 + score12 + score13 + score14;

  const history = useNavigate();
  const submitForm = (e) => {
    e.preventDefault();
    const stdidcard = contact.stdidcard;
    const age = contact.birthday;
    const ageDifMs = Date.now() - new Date(age).getTime();
    const ageDate = new Date(ageDifMs);
    const stdage = String(Math.abs(ageDate.getUTCFullYear() - 1970));
    const birthday2 = moment(age).format("MM");
    const a = stdage + birthday2;
    console.log(a);
    const sex = contact.sex;
    const schoolyear = stdinfomation.section1?.schoolyear
    const term = stdinfomation.section1?.term
    const grade = contact.grade
    const room = contact.room
    const schoolid = stdinfomation.section1?.schoolid

    console.log("grade", grade)
    console.log("room", room)

    var tscore;
    var group;
    if (a >= 600 && a <= 711 && adhd1_dscore === 45 && sex === "ชาย") {
      tscore = 81;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 600 && a <= 711 && adhd1_dscore === 44 && sex === "ชาย") {
      tscore = 80;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 600 && a <= 711 && adhd1_dscore === 43 && sex === "ชาย") {
      tscore = 79;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 600 && a <= 711 && adhd1_dscore === 42 && sex === "ชาย") {
      tscore = 78;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 600 && a <= 711 && adhd1_dscore === 41 && sex === "ชาย") {
      tscore = 77;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 600 && a <= 711 && adhd1_dscore === 40 && sex === "ชาย") {
      tscore = 76;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 600 && a <= 711 && adhd1_dscore === 39 && sex === "ชาย") {
      tscore = 75;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 600 && a <= 711 && adhd1_dscore === 38 && sex === "ชาย") {
      tscore = 74;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (
      (a >= 600 && a <= 711 && adhd1_dscore === 37 && sex === "ชาย") ||
      (a >= 600 && a <= 711 && adhd1_dscore === 36 && sex === "ชาย")
    ) {
      tscore = 73;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 600 && a <= 711 && adhd1_dscore === 35 && sex === "ชาย") {
      tscore = 72;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 600 && a <= 711 && adhd1_dscore === 34 && sex === "ชาย") {
      tscore = 71;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 600 && a <= 711 && adhd1_dscore === 33 && sex === "ชาย") {
      tscore = 70;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if (a >= 600 && a <= 711 && adhd1_dscore === 32 && sex === "ชาย") {
      tscore = 69;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if (a >= 600 && a <= 711 && adhd1_dscore === 31 && sex === "ชาย") {
      tscore = 68;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if (a >= 600 && a <= 711 && adhd1_dscore === 30 && sex === "ชาย") {
      tscore = 67;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if (a >= 600 && a <= 711 && adhd1_dscore === 29 && sex === "ชาย") {
      tscore = 66;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if (a >= 600 && a <= 711 && adhd1_dscore === 28 && sex === "ชาย") {
      tscore = 65;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if (a >= 600 && a <= 711 && adhd1_dscore === 27 && sex === "ชาย") {
      tscore = 64;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if (a >= 600 && a <= 711 && adhd1_dscore === 26 && sex === "ชาย") {
      tscore = 63;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if (a >= 600 && a <= 711 && adhd1_dscore === 25 && sex === "ชาย") {
      tscore = 62;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if (a >= 600 && a <= 711 && adhd1_dscore === 24 && sex === "ชาย") {
      tscore = 61;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if (a >= 600 && a <= 711 && adhd1_dscore === 23 && sex === "ชาย") {
      tscore = 60;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if (a >= 600 && a <= 711 && adhd1_dscore === 22 && sex === "ชาย") {
      tscore = 59;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if (a >= 600 && a <= 711 && adhd1_dscore === 21 && sex === "ชาย") {
      tscore = 58;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if (a >= 600 && a <= 711 && adhd1_dscore === 20 && sex === "ชาย") {
      tscore = 57;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if (a >= 600 && a <= 711 && adhd1_dscore === 19 && sex === "ชาย") {
      tscore = 56;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if (a >= 600 && a <= 711 && adhd1_dscore === 18 && sex === "ชาย") {
      tscore = 55;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if (a >= 600 && a <= 711 && adhd1_dscore === 17 && sex === "ชาย") {
      tscore = 54;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if (a >= 600 && a <= 711 && adhd1_dscore === 16 && sex === "ชาย") {
      tscore = 53;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if (a >= 600 && a <= 711 && adhd1_dscore === 15 && sex === "ชาย") {
      tscore = 52;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if (a >= 600 && a <= 711 && adhd1_dscore === 14 && sex === "ชาย") {
      tscore = 51;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if (a >= 600 && a <= 711 && adhd1_dscore === 13 && sex === "ชาย") {
      tscore = 50;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 600 && a <= 711 && adhd1_dscore === 12 && sex === "ชาย") {
      tscore = 49;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 600 && a <= 711 && adhd1_dscore === 11 && sex === "ชาย") {
      tscore = 48;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (
      (a >= 600 && a <= 711 && adhd1_dscore === 9 && sex === "ชาย") ||
      (a >= 600 && a <= 711 && adhd1_dscore === 10 && sex === "ชาย")
    ) {
      tscore = 47;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 600 && a <= 711 && adhd1_dscore === 8 && sex === "ชาย") {
      tscore = 46;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 600 && a <= 711 && adhd1_dscore === 7 && sex === "ชาย") {
      tscore = 45;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 600 && a <= 711 && adhd1_dscore === 6 && sex === "ชาย") {
      tscore = 44;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 600 && a <= 711 && adhd1_dscore === 5 && sex === "ชาย") {
      tscore = 43;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 600 && a <= 711 && adhd1_dscore === 4 && sex === "ชาย") {
      tscore = 42;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 600 && a <= 711 && adhd1_dscore === 3 && sex === "ชาย") {
      tscore = 41;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 600 && a <= 711 && adhd1_dscore === 2 && sex === "ชาย") {
      tscore = 40;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 600 && a <= 711 && adhd1_dscore === 1 && sex === "ชาย") {
      tscore = 39;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 600 && a <= 711 && adhd1_dscore === 0 && sex === "ชาย") {
      tscore = 38;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    }
    //8/9.11 ก.1 ซน/วู่วาม
    else if (a >= 800 && a <= 911 && adhd1_dscore === 45 && sex === "ชาย") {
      tscore = 78;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (
      (a >= 800 && a <= 911 && adhd1_dscore === 43 && sex === "ชาย") ||
      (a >= 800 && a <= 911 && adhd1_dscore === 44 && sex === "ชาย")
    ) {
      tscore = 77;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 800 && a <= 911 && adhd1_dscore === 42 && sex === "ชาย") {
      tscore = 76;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 800 && a <= 911 && adhd1_dscore === 41 && sex === "ชาย") {
      tscore = 75;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 800 && a <= 911 && adhd1_dscore === 40 && sex === "ชาย") {
      tscore = 74;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 800 && a <= 911 && adhd1_dscore === 39 && sex === "ชาย") {
      tscore = 73;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 800 && a <= 911 && adhd1_dscore === 38 && sex === "ชาย") {
      tscore = 72;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 800 && a <= 911 && adhd1_dscore === 37 && sex === "ชาย") {
      tscore = 71;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 800 && a <= 911 && adhd1_dscore === 36 && sex === "ชาย") {
      tscore = 70;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if (
      (a >= 800 && a <= 911 && adhd1_dscore === 34 && sex === "ชาย") ||
      (a >= 800 && a <= 911 && adhd1_dscore === 35 && sex === "ชาย")
    ) {
      tscore = 69;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if (a >= 800 && a <= 911 && adhd1_dscore === 33 && sex === "ชาย") {
      tscore = 68;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if (a >= 800 && a <= 911 && adhd1_dscore === 32 && sex === "ชาย") {
      tscore = 67;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if (a >= 800 && a <= 911 && adhd1_dscore === 31 && sex === "ชาย") {
      tscore = 66;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if (a >= 800 && a <= 911 && adhd1_dscore === 30 && sex === "ชาย") {
      tscore = 65;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if (a >= 800 && a <= 911 && adhd1_dscore === 29 && sex === "ชาย") {
      tscore = 64;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if (a >= 800 && a <= 911 && adhd1_dscore === 28 && sex === "ชาย") {
      tscore = 63;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if (a >= 800 && a <= 911 && adhd1_dscore === 27 && sex === "ชาย") {
      tscore = 62;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if (a >= 800 && a <= 911 && adhd1_dscore === 26 && sex === "ชาย") {
      tscore = 61;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if (
      (a >= 800 && a <= 911 && adhd1_dscore === 24 && sex === "ชาย") ||
      (a >= 800 && a <= 911 && adhd1_dscore === 25 && sex === "ชาย")
    ) {
      tscore = 60;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if (a >= 800 && a <= 911 && adhd1_dscore === 23 && sex === "ชาย") {
      tscore = 59;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if (a >= 800 && a <= 911 && adhd1_dscore === 22 && sex === "ชาย") {
      tscore = 58;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if (a >= 800 && a <= 911 && adhd1_dscore === 21 && sex === "ชาย") {
      tscore = 57;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if (a >= 800 && a <= 911 && adhd1_dscore === 20 && sex === "ชาย") {
      tscore = 56;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if (a >= 800 && a <= 911 && adhd1_dscore === 19 && sex === "ชาย") {
      tscore = 55;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if (a >= 800 && a <= 911 && adhd1_dscore === 18 && sex === "ชาย") {
      tscore = 54;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if (a >= 800 && a <= 911 && adhd1_dscore === 17 && sex === "ชาย") {
      tscore = 53;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if (
      (a >= 800 && a <= 911 && adhd1_dscore === 15 && sex === "ชาย") ||
      (a >= 800 && a <= 911 && adhd1_dscore === 16 && sex === "ชาย")
    ) {
      tscore = 52;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if (a >= 800 && a <= 911 && adhd1_dscore === 14 && sex === "ชาย") {
      tscore = 51;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if (a >= 800 && a <= 911 && adhd1_dscore === 13 && sex === "ชาย") {
      tscore = 50;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 800 && a <= 911 && adhd1_dscore === 12 && sex === "ชาย") {
      tscore = 49;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 800 && a <= 911 && adhd1_dscore === 11 && sex === "ชาย") {
      tscore = 48;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 800 && a <= 911 && adhd1_dscore === 10 && sex === "ชาย") {
      tscore = 47;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 800 && a <= 911 && adhd1_dscore === 9 && sex === "ชาย") {
      tscore = 46;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 800 && a <= 911 && adhd1_dscore === 8 && sex === "ชาย") {
      tscore = 45;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (
      (a >= 800 && a <= 911 && adhd1_dscore === 6 && sex === "ชาย") ||
      (a >= 800 && a <= 911 && adhd1_dscore === 7 && sex === "ชาย")
    ) {
      tscore = 44;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 800 && a <= 911 && adhd1_dscore === 5 && sex === "ชาย") {
      tscore = 43;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 800 && a <= 911 && adhd1_dscore === 4 && sex === "ชาย") {
      tscore = 42;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 800 && a <= 911 && adhd1_dscore === 3 && sex === "ชาย") {
      tscore = 41;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 800 && a <= 911 && adhd1_dscore === 2 && sex === "ชาย") {
      tscore = 40;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 800 && a <= 911 && adhd1_dscore === 1 && sex === "ชาย") {
      tscore = 39;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 800 && a <= 911 && adhd1_dscore === 0 && sex === "ชาย") {
      tscore = 38;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    }

    //10/11.11 Y
    else if (a >= 1000 && a <= 1111 && adhd1_dscore === 45 && sex === "ชาย") {
      tscore = 79;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 1000 && a <= 1111 && adhd1_dscore === 44 && sex === "ชาย") {
      tscore = 78;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 1000 && a <= 1111 && adhd1_dscore === 43 && sex === "ชาย") {
      tscore = 77;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 1000 && a <= 1111 && adhd1_dscore === 42 && sex === "ชาย") {
      tscore = 76;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (
      (a >= 1000 && a <= 1111 && adhd1_dscore === 41 && sex === "ชาย") ||
      (a >= 1000 && a <= 1111 && adhd1_dscore === 40 && sex === "ชาย")
    ) {
      tscore = 75;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 1000 && a <= 1111 && adhd1_dscore === 39 && sex === "ชาย") {
      tscore = 74;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 1000 && a <= 1111 && adhd1_dscore === 38 && sex === "ชาย") {
      tscore = 73;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 1000 && a <= 1111 && adhd1_dscore === 37 && sex === "ชาย") {
      tscore = 72;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 1000 && a <= 1111 && adhd1_dscore === 36 && sex === "ชาย") {
      tscore = 71;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 1000 && a <= 1111 && adhd1_dscore === 35 && sex === "ชาย") {
      tscore = 70;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if (a >= 1000 && a <= 1111 && adhd1_dscore === 34 && sex === "ชาย") {
      tscore = 69;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if (a >= 1000 && a <= 1111 && adhd1_dscore === 33 && sex === "ชาย") {
      tscore = 68;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if (a >= 1000 && a <= 1111 && adhd1_dscore === 32 && sex === "ชาย") {
      tscore = 67;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if (a >= 1000 && a <= 1111 && adhd1_dscore === 31 && sex === "ชาย") {
      tscore = 66;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if (a >= 1000 && a <= 1111 && adhd1_dscore === 30 && sex === "ชาย") {
      tscore = 65;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if (a >= 1000 && a <= 1111 && adhd1_dscore === 29 && sex === "ชาย") {
      tscore = 64;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if (
      (a >= 1000 && a <= 1111 && adhd1_dscore === 28 && sex === "ชาย") ||
      (a >= 1000 && a <= 1111 && adhd1_dscore === 27 && sex === "ชาย")
    ) {
      tscore = 63;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if (a >= 1000 && a <= 1111 && adhd1_dscore === 26 && sex === "ชาย") {
      tscore = 62;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if (a >= 1000 && a <= 1111 && adhd1_dscore === 25 && sex === "ชาย") {
      tscore = 61;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if (a >= 1000 && a <= 1111 && adhd1_dscore === 24 && sex === "ชาย") {
      tscore = 60;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if (a >= 1000 && a <= 1111 && adhd1_dscore === 23 && sex === "ชาย") {
      tscore = 59;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if (a >= 1000 && a <= 1111 && adhd1_dscore === 22 && sex === "ชาย") {
      tscore = 58;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if (a >= 1000 && a <= 1111 && adhd1_dscore === 21 && sex === "ชาย") {
      tscore = 57;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if (a >= 1000 && a <= 1111 && adhd1_dscore === 20 && sex === "ชาย") {
      tscore = 56;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if (a >= 1000 && a <= 1111 && adhd1_dscore === 19 && sex === "ชาย") {
      tscore = 55;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if (a >= 1000 && a <= 1111 && adhd1_dscore === 18 && sex === "ชาย") {
      tscore = 54;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if (a >= 1000 && a <= 1111 && adhd1_dscore === 17 && sex === "ชาย") {
      tscore = 53;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if (a >= 1000 && a <= 1111 && adhd1_dscore === 16 && sex === "ชาย") {
      tscore = 52;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if (
      (a >= 1000 && a <= 1111 && adhd1_dscore === 14 && sex === "ชาย") ||
      (a >= 1000 && a <= 1111 && adhd1_dscore === 15 && sex === "ชาย")
    ) {
      tscore = 51;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if (a >= 1000 && a <= 1111 && adhd1_dscore === 13 && sex === "ชาย") {
      tscore = 50;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 1000 && a <= 1111 && adhd1_dscore === 12 && sex === "ชาย") {
      tscore = 49;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 1000 && a <= 1111 && adhd1_dscore === 11 && sex === "ชาย") {
      tscore = 48;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 1000 && a <= 1111 && adhd1_dscore === 10 && sex === "ชาย") {
      tscore = 47;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 1000 && a <= 1111 && adhd1_dscore === 9 && sex === "ชาย") {
      tscore = 46;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 1000 && a <= 1111 && adhd1_dscore === 8 && sex === "ชาย") {
      tscore = 45;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 1000 && a <= 1111 && adhd1_dscore === 7 && sex === "ชาย") {
      tscore = 44;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 1000 && a <= 1111 && adhd1_dscore === 6 && sex === "ชาย") {
      tscore = 43;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 1000 && a <= 1111 && adhd1_dscore === 5 && sex === "ชาย") {
      tscore = 42;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 1000 && a <= 1111 && adhd1_dscore === 4 && sex === "ชาย") {
      tscore = 41;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (
      (a >= 1000 && a <= 1111 && adhd1_dscore === 2 && sex === "ชาย") ||
      (a >= 1000 && a <= 1111 && adhd1_dscore === 3 && sex === "ชาย")
    ) {
      tscore = 40;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 1000 && a <= 1111 && adhd1_dscore === 1 && sex === "ชาย") {
      tscore = 39;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 1000 && a <= 1111 && adhd1_dscore === 0 && sex === "ชาย") {
      tscore = 38;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    }

    //12/13.11Y
    else if (a >= 1200 && a <= 1311 && adhd1_dscore === 45 && sex === "ชาย") {
      tscore = 79;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd1_dscore === 44 && sex === "ชาย") {
      tscore = 78;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd1_dscore === 43 && sex === "ชาย") {
      tscore = 77;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd1_dscore === 42 && sex === "ชาย") {
      tscore = 76;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd1_dscore === 41 && sex === "ชาย") {
      tscore = 75;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (
      (a >= 1200 && a <= 1311 && adhd1_dscore === 39 && sex === "ชาย") ||
      (a >= 1200 && a <= 1311 && adhd1_dscore === 40 && sex === "ชาย")
    ) {
      tscore = 74;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd1_dscore === 38 && sex === "ชาย") {
      tscore = 73;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd1_dscore === 37 && sex === "ชาย") {
      tscore = 72;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd1_dscore === 36 && sex === "ชาย") {
      tscore = 71;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd1_dscore === 35 && sex === "ชาย") {
      tscore = 70;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd1_dscore === 34 && sex === "ชาย") {
      tscore = 69;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd1_dscore === 33 && sex === "ชาย") {
      tscore = 68;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd1_dscore === 32 && sex === "ชาย") {
      tscore = 67;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd1_dscore === 31 && sex === "ชาย") {
      tscore = 66;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if (
      (a >= 1200 && a <= 1311 && adhd1_dscore === 30 && sex === "ชาย") ||
      (a >= 1200 && a <= 1311 && adhd1_dscore === 29 && sex === "ชาย")
    ) {
      tscore = 65;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd1_dscore === 28 && sex === "ชาย") {
      tscore = 64;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd1_dscore === 27 && sex === "ชาย") {
      tscore = 63;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd1_dscore === 26 && sex === "ชาย") {
      tscore = 62;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd1_dscore === 25 && sex === "ชาย") {
      tscore = 61;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd1_dscore === 24 && sex === "ชาย") {
      tscore = 60;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd1_dscore === 23 && sex === "ชาย") {
      tscore = 59;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd1_dscore === 22 && sex === "ชาย") {
      tscore = 58;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd1_dscore === 21 && sex === "ชาย") {
      tscore = 57;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd1_dscore === 20 && sex === "ชาย") {
      tscore = 56;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if (
      (a >= 1200 && a <= 1311 && adhd1_dscore === 19 && sex === "ชาย") ||
      (a >= 1200 && a <= 1311 && adhd1_dscore === 18 && sex === "ชาย")
    ) {
      tscore = 55;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd1_dscore === 17 && sex === "ชาย") {
      tscore = 54;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd1_dscore === 16 && sex === "ชาย") {
      tscore = 53;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd1_dscore === 15 && sex === "ชาย") {
      tscore = 52;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd1_dscore === 14 && sex === "ชาย") {
      tscore = 51;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd1_dscore === 13 && sex === "ชาย") {
      tscore = 50;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd1_dscore === 12 && sex === "ชาย") {
      tscore = 49;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd1_dscore === 11 && sex === "ชาย") {
      tscore = 48;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (
      (a >= 1200 && a <= 1311 && adhd1_dscore === 10 && sex === "ชาย") ||
      (a >= 1200 && a <= 1311 && adhd1_dscore === 9 && sex === "ชาย")
    ) {
      tscore = 47;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd1_dscore === 8 && sex === "ชาย") {
      tscore = 46;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd1_dscore === 7 && sex === "ชาย") {
      tscore = 45;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd1_dscore === 6 && sex === "ชาย") {
      tscore = 44;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd1_dscore === 5 && sex === "ชาย") {
      tscore = 43;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd1_dscore === 4 && sex === "ชาย") {
      tscore = 42;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd1_dscore === 3 && sex === "ชาย") {
      tscore = 41;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd1_dscore === 2 && sex === "ชาย") {
      tscore = 40;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd1_dscore === 1 && sex === "ชาย") {
      tscore = 39;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd1_dscore === 0 && sex === "ชาย") {
      tscore = 38;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    }

    //6/7.11 ก.2 ซน/วู่วาม
    else if (a >= 600 && a <= 711 && adhd1_dscore === 45 && sex === "หญิง") {
      tscore = 93;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 600 && a <= 711 && adhd1_dscore === 44 && sex === "หญิง") {
      tscore = 92;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 600 && a <= 711 && adhd1_dscore === 44 && sex === "หญิง") {
      tscore = 91;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 600 && a <= 711 && adhd1_dscore === 43 && sex === "หญิง") {
      tscore = 90;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 600 && a <= 711 && adhd1_dscore === 42 && sex === "หญิง") {
      tscore = 89;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 600 && a <= 711 && adhd1_dscore === 41 && sex === "หญิง") {
      tscore = 88;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 600 && a <= 711 && adhd1_dscore === 40 && sex === "หญิง") {
      tscore = 87;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 600 && a <= 711 && adhd1_dscore === 39 && sex === "หญิง") {
      tscore = 86;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 600 && a <= 711 && adhd1_dscore === 38 && sex === "หญิง") {
      tscore = 85;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 600 && a <= 711 && adhd1_dscore === 37 && sex === "หญิง") {
      tscore = 84;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 600 && a <= 711 && adhd1_dscore === 36 && sex === "หญิง") {
      tscore = 83;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 600 && a <= 711 && adhd1_dscore === 36 && sex === "หญิง") {
      tscore = 82;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 600 && a <= 711 && adhd1_dscore === 35 && sex === "หญิง") {
      tscore = 81;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 600 && a <= 711 && adhd1_dscore === 34 && sex === "หญิง") {
      tscore = 80;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 600 && a <= 711 && adhd1_dscore === 33 && sex === "หญิง") {
      tscore = 79;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 600 && a <= 711 && adhd1_dscore === 32 && sex === "หญิง") {
      tscore = 78;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 600 && a <= 711 && adhd1_dscore === 31 && sex === "หญิง") {
      tscore = 77;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 600 && a <= 711 && adhd1_dscore === 30 && sex === "หญิง") {
      tscore = 76;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 600 && a <= 711 && adhd1_dscore === 29 && sex === "หญิง") {
      tscore = 75;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 600 && a <= 711 && adhd1_dscore === 29 && sex === "หญิง") {
      tscore = 74;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 600 && a <= 711 && adhd1_dscore === 28 && sex === "หญิง") {
      tscore = 73;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 600 && a <= 711 && adhd1_dscore === 27 && sex === "หญิง") {
      tscore = 72;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 600 && a <= 711 && adhd1_dscore === 26 && sex === "หญิง") {
      tscore = 71;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 600 && a <= 711 && adhd1_dscore === 25 && sex === "หญิง") {
      tscore = 70;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if (a >= 600 && a <= 711 && adhd1_dscore === 24 && sex === "หญิง") {
      tscore = 69;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if (a >= 600 && a <= 711 && adhd1_dscore === 23 && sex === "หญิง") {
      tscore = 68;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if (a >= 600 && a <= 711 && adhd1_dscore === 22 && sex === "หญิง") {
      tscore = 67;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if (a >= 600 && a <= 711 && adhd1_dscore === 22 && sex === "หญิง") {
      tscore = 66;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if (a >= 600 && a <= 711 && adhd1_dscore === 21 && sex === "หญิง") {
      tscore = 65;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if (a >= 600 && a <= 711 && adhd1_dscore === 20 && sex === "หญิง") {
      tscore = 64;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if (a >= 600 && a <= 711 && adhd1_dscore === 19 && sex === "หญิง") {
      tscore = 63;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if (a >= 600 && a <= 711 && adhd1_dscore === 18 && sex === "หญิง") {
      tscore = 62;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if (a >= 600 && a <= 711 && adhd1_dscore === 17 && sex === "หญิง") {
      tscore = 61;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if (a >= 600 && a <= 711 && adhd1_dscore === 16 && sex === "หญิง") {
      tscore = 60;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if (a >= 600 && a <= 711 && adhd1_dscore === 15 && sex === "หญิง") {
      tscore = 59;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if (a >= 600 && a <= 711 && adhd1_dscore === 14 && sex === "หญิง") {
      tscore = 58;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if (a >= 600 && a <= 711 && adhd1_dscore === 14 && sex === "หญิง") {
      tscore = 57;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if (a >= 600 && a <= 711 && adhd1_dscore === 13 && sex === "หญิง") {
      tscore = 56;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if (a >= 600 && a <= 711 && adhd1_dscore === 12 && sex === "หญิง") {
      tscore = 55;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if (a >= 600 && a <= 711 && adhd1_dscore === 11 && sex === "หญิง") {
      tscore = 54;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if (a >= 600 && a <= 711 && adhd1_dscore === 10 && sex === "หญิง") {
      tscore = 53;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if (a >= 600 && a <= 711 && adhd1_dscore === 9 && sex === "หญิง") {
      tscore = 52;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if (a >= 600 && a <= 711 && adhd1_dscore === 8 && sex === "หญิง") {
      tscore = 51;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if (a >= 600 && a <= 711 && adhd1_dscore === 7 && sex === "หญิง") {
      tscore = 50;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 600 && a <= 711 && adhd1_dscore === 7 && sex === "หญิง") {
      tscore = 49;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 600 && a <= 711 && adhd1_dscore === 6 && sex === "หญิง") {
      tscore = 48;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 600 && a <= 711 && adhd1_dscore === 5 && sex === "หญิง") {
      tscore = 47;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 600 && a <= 711 && adhd1_dscore === 4 && sex === "หญิง") {
      tscore = 46;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 600 && a <= 711 && adhd1_dscore === 3 && sex === "หญิง") {
      tscore = 45;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 600 && a <= 711 && adhd1_dscore === 2 && sex === "หญิง") {
      tscore = 44;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 600 && a <= 711 && adhd1_dscore === 1 && sex === "หญิง") {
      tscore = 43;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 600 && a <= 711 && adhd1_dscore === 0 && sex === "หญิง") {
      tscore = 42;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    }

    //8/9.11  ก.2 ซน/วู่วาม
    else if (a >= 800 && a <= 911 && adhd1_dscore === 45 && sex === "หญิง") {
      tscore = 98;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 800 && a <= 911 && adhd1_dscore === 44 && sex === "หญิง") {
      tscore = 97;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 800 && a <= 911 && adhd1_dscore === 43 && sex === "หญิง") {
      tscore = 96;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 800 && a <= 911 && adhd1_dscore === 43 && sex === "หญิง") {
      tscore = 95;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 800 && a <= 911 && adhd1_dscore === 42 && sex === "หญิง") {
      tscore = 94;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 800 && a <= 911 && adhd1_dscore === 41 && sex === "หญิง") {
      tscore = 93;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 800 && a <= 911 && adhd1_dscore === 40 && sex === "หญิง") {
      tscore = 92;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 800 && a <= 911 && adhd1_dscore === 39 && sex === "หญิง") {
      tscore = 91;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 800 && a <= 911 && adhd1_dscore === 39 && sex === "หญิง") {
      tscore = 90;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 800 && a <= 911 && adhd1_dscore === 38 && sex === "หญิง") {
      tscore = 89;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 800 && a <= 911 && adhd1_dscore === 37 && sex === "หญิง") {
      tscore = 88;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 800 && a <= 911 && adhd1_dscore === 36 && sex === "หญิง") {
      tscore = 87;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 800 && a <= 911 && adhd1_dscore === 35 && sex === "หญิง") {
      tscore = 86;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 800 && a <= 911 && adhd1_dscore === 35 && sex === "หญิง") {
      tscore = 85;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 800 && a <= 911 && adhd1_dscore === 34 && sex === "หญิง") {
      tscore = 84;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 800 && a <= 911 && adhd1_dscore === 33 && sex === "หญิง") {
      tscore = 83;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 800 && a <= 911 && adhd1_dscore === 32 && sex === "หญิง") {
      tscore = 82;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 800 && a <= 911 && adhd1_dscore === 32 && sex === "หญิง") {
      tscore = 81;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 800 && a <= 911 && adhd1_dscore === 31 && sex === "หญิง") {
      tscore = 80;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 800 && a <= 911 && adhd1_dscore === 30 && sex === "หญิง") {
      tscore = 79;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 800 && a <= 911 && adhd1_dscore === 29 && sex === "หญิง") {
      tscore = 78;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 800 && a <= 911 && adhd1_dscore === 28 && sex === "หญิง") {
      tscore = 77;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 800 && a <= 911 && adhd1_dscore === 28 && sex === "หญิง") {
      tscore = 76;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 800 && a <= 911 && adhd1_dscore === 27 && sex === "หญิง") {
      tscore = 75;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 800 && a <= 911 && adhd1_dscore === 26 && sex === "หญิง") {
      tscore = 74;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 800 && a <= 911 && adhd1_dscore === 25 && sex === "หญิง") {
      tscore = 73;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 800 && a <= 911 && adhd1_dscore === 24 && sex === "หญิง") {
      tscore = 72;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 800 && a <= 911 && adhd1_dscore === 24 && sex === "หญิง") {
      tscore = 71;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 800 && a <= 911 && adhd1_dscore === 23 && sex === "หญิง") {
      tscore = 70;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if (a >= 800 && a <= 911 && adhd1_dscore === 22 && sex === "หญิง") {
      tscore = 69;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if (a >= 800 && a <= 911 && adhd1_dscore === 21 && sex === "หญิง") {
      tscore = 68;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if (a >= 800 && a <= 911 && adhd1_dscore === 20 && sex === "หญิง") {
      tscore = 67;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if (a >= 800 && a <= 911 && adhd1_dscore === 20 && sex === "หญิง") {
      tscore = 66;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if (a >= 800 && a <= 911 && adhd1_dscore === 19 && sex === "หญิง") {
      tscore = 65;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if (a >= 800 && a <= 911 && adhd1_dscore === 18 && sex === "หญิง") {
      tscore = 64;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if (a >= 800 && a <= 911 && adhd1_dscore === 17 && sex === "หญิง") {
      tscore = 63;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if (a >= 800 && a <= 911 && adhd1_dscore === 17 && sex === "หญิง") {
      tscore = 62;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if (a >= 800 && a <= 911 && adhd1_dscore === 16 && sex === "หญิง") {
      tscore = 61;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if (a >= 800 && a <= 911 && adhd1_dscore === 15 && sex === "หญิง") {
      tscore = 60;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if (a >= 800 && a <= 911 && adhd1_dscore === 14 && sex === "หญิง") {
      tscore = 59;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if (a >= 800 && a <= 911 && adhd1_dscore === 13 && sex === "หญิง") {
      tscore = 58;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if (a >= 800 && a <= 911 && adhd1_dscore === 13 && sex === "หญิง") {
      tscore = 57;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if (a >= 800 && a <= 911 && adhd1_dscore === 12 && sex === "หญิง") {
      tscore = 56;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if (a >= 800 && a <= 911 && adhd1_dscore === 11 && sex === "หญิง") {
      tscore = 55;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if (a >= 800 && a <= 911 && adhd1_dscore === 10 && sex === "หญิง") {
      tscore = 54;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if (a >= 800 && a <= 911 && adhd1_dscore === 9 && sex === "หญิง") {
      tscore = 53;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if (a >= 800 && a <= 911 && adhd1_dscore === 9 && sex === "หญิง") {
      tscore = 52;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if (a >= 800 && a <= 911 && adhd1_dscore === 8 && sex === "หญิง") {
      tscore = 51;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if (a >= 800 && a <= 911 && adhd1_dscore === 7 && sex === "หญิง") {
      tscore = 50;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 800 && a <= 911 && adhd1_dscore === 6 && sex === "หญิง") {
      tscore = 49;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 800 && a <= 911 && adhd1_dscore === 6 && sex === "หญิง") {
      tscore = 48;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 800 && a <= 911 && adhd1_dscore === 5 && sex === "หญิง") {
      tscore = 47;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 800 && a <= 911 && adhd1_dscore === 4 && sex === "หญิง") {
      tscore = 46;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 800 && a <= 911 && adhd1_dscore === 3 && sex === "หญิง") {
      tscore = 45;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 800 && a <= 911 && adhd1_dscore === 2 && sex === "หญิง") {
      tscore = 44;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 800 && a <= 911 && adhd1_dscore === 2 && sex === "หญิง") {
      tscore = 43;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 800 && a <= 911 && adhd1_dscore === 1 && sex === "หญิง") {
      tscore = 42;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 800 && a <= 911 && adhd1_dscore === 0 && sex === "หญิง") {
      tscore = 41;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    }
    //10/11.11 ก.2 ซน/วู่วาม
    else if (a >= 1000 && a <= 1111 && adhd1_dscore === 45 && sex === "หญิง") {
      tscore = 99;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 1000 && a <= 1111 && adhd1_dscore === 44 && sex === "หญิง") {
      tscore = 98;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 1000 && a <= 1111 && adhd1_dscore === 44 && sex === "หญิง") {
      tscore = 97;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 1000 && a <= 1111 && adhd1_dscore === 43 && sex === "หญิง") {
      tscore = 96;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 1000 && a <= 1111 && adhd1_dscore === 42 && sex === "หญิง") {
      tscore = 95;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 1000 && a <= 1111 && adhd1_dscore === 41 && sex === "หญิง") {
      tscore = 94;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 1000 && a <= 1111 && adhd1_dscore === 40 && sex === "หญิง") {
      tscore = 93;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 1000 && a <= 1111 && adhd1_dscore === 40 && sex === "หญิง") {
      tscore = 92;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 1000 && a <= 1111 && adhd1_dscore === 39 && sex === "หญิง") {
      tscore = 91;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 1000 && a <= 1111 && adhd1_dscore === 38 && sex === "หญิง") {
      tscore = 90;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 1000 && a <= 1111 && adhd1_dscore === 37 && sex === "หญิง") {
      tscore = 89;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 1000 && a <= 1111 && adhd1_dscore === 37 && sex === "หญิง") {
      tscore = 88;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 1000 && a <= 1111 && adhd1_dscore === 36 && sex === "หญิง") {
      tscore = 87;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 1000 && a <= 1111 && adhd1_dscore === 35 && sex === "หญิง") {
      tscore = 86;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 1000 && a <= 1111 && adhd1_dscore === 34 && sex === "หญิง") {
      tscore = 85;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 1000 && a <= 1111 && adhd1_dscore === 33 && sex === "หญิง") {
      tscore = 84;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 1000 && a <= 1111 && adhd1_dscore === 33 && sex === "หญิง") {
      tscore = 83;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 1000 && a <= 1111 && adhd1_dscore === 32 && sex === "หญิง") {
      tscore = 82;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 1000 && a <= 1111 && adhd1_dscore === 31 && sex === "หญิง") {
      tscore = 81;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 1000 && a <= 1111 && adhd1_dscore === 30 && sex === "หญิง") {
      tscore = 80;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 1000 && a <= 1111 && adhd1_dscore === 30 && sex === "หญิง") {
      tscore = 79;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 1000 && a <= 1111 && adhd1_dscore === 29 && sex === "หญิง") {
      tscore = 78;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 1000 && a <= 1111 && adhd1_dscore === 28 && sex === "หญิง") {
      tscore = 77;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 1000 && a <= 1111 && adhd1_dscore === 27 && sex === "หญิง") {
      tscore = 76;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 1000 && a <= 1111 && adhd1_dscore === 26 && sex === "หญิง") {
      tscore = 75;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 1000 && a <= 1111 && adhd1_dscore === 26 && sex === "หญิง") {
      tscore = 74;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 1000 && a <= 1111 && adhd1_dscore === 25 && sex === "หญิง") {
      tscore = 73;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 1000 && a <= 1111 && adhd1_dscore === 24 && sex === "หญิง") {
      tscore = 72;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 1000 && a <= 1111 && adhd1_dscore === 23 && sex === "หญิง") {
      tscore = 71;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 1000 && a <= 1111 && adhd1_dscore === 22 && sex === "หญิง") {
      tscore = 70;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if (a >= 1000 && a <= 1111 && adhd1_dscore === 22 && sex === "หญิง") {
      tscore = 69;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if (a >= 1000 && a <= 1111 && adhd1_dscore === 21 && sex === "หญิง") {
      tscore = 68;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if (a >= 1000 && a <= 1111 && adhd1_dscore === 20 && sex === "หญิง") {
      tscore = 67;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if (a >= 1000 && a <= 1111 && adhd1_dscore === 19 && sex === "หญิง") {
      tscore = 66;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if (a >= 1000 && a <= 1111 && adhd1_dscore === 19 && sex === "หญิง") {
      tscore = 65;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if (a >= 1000 && a <= 1111 && adhd1_dscore === 18 && sex === "หญิง") {
      tscore = 64;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if (a >= 1000 && a <= 1111 && adhd1_dscore === 17 && sex === "หญิง") {
      tscore = 63;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if (a >= 1000 && a <= 1111 && adhd1_dscore === 16 && sex === "หญิง") {
      tscore = 62;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if (a >= 1000 && a <= 1111 && adhd1_dscore === 15 && sex === "หญิง") {
      tscore = 61;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if (a >= 1000 && a <= 1111 && adhd1_dscore === 15 && sex === "หญิง") {
      tscore = 60;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if (a >= 1000 && a <= 1111 && adhd1_dscore === 14 && sex === "หญิง") {
      tscore = 59;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if (a >= 1000 && a <= 1111 && adhd1_dscore === 13 && sex === "หญิง") {
      tscore = 58;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if (a >= 1000 && a <= 1111 && adhd1_dscore === 12 && sex === "หญิง") {
      tscore = 57;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if (a >= 1000 && a <= 1111 && adhd1_dscore === 11 && sex === "หญิง") {
      tscore = 56;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if (a >= 1000 && a <= 1111 && adhd1_dscore === 11 && sex === "หญิง") {
      tscore = 55;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if (a >= 1000 && a <= 1111 && adhd1_dscore === 10 && sex === "หญิง") {
      tscore = 54;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if (a >= 1000 && a <= 1111 && adhd1_dscore === 9 && sex === "หญิง") {
      tscore = 53;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if (a >= 1000 && a <= 1111 && adhd1_dscore === 8 && sex === "หญิง") {
      tscore = 52;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if (a >= 1000 && a <= 1111 && adhd1_dscore === 8 && sex === "หญิง") {
      tscore = 51;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if (a >= 1000 && a <= 1111 && adhd1_dscore === 7 && sex === "หญิง") {
      tscore = 50;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 1000 && a <= 1111 && adhd1_dscore === 6 && sex === "หญิง") {
      tscore = 49;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 1000 && a <= 1111 && adhd1_dscore === 5 && sex === "หญิง") {
      tscore = 48;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 1000 && a <= 1111 && adhd1_dscore === 4 && sex === "หญิง") {
      tscore = 47;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 1000 && a <= 1111 && adhd1_dscore === 4 && sex === "หญิง") {
      tscore = 46;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 1000 && a <= 1111 && adhd1_dscore === 3 && sex === "หญิง") {
      tscore = 45;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 1000 && a <= 1111 && adhd1_dscore === 2 && sex === "หญิง") {
      tscore = 44;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 1000 && a <= 1111 && adhd1_dscore === 1 && sex === "หญิง") {
      tscore = 43;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 1000 && a <= 1111 && adhd1_dscore === 1 && sex === "หญิง") {
      tscore = 42;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 1000 && a <= 1111 && adhd1_dscore === 0 && sex === "หญิง") {
      tscore = 41;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    }

    //12/13.11 ก.2 ซน/วู่วาม
    if (a >= 1200 && a <= 1311 && adhd1_dscore === 45 && sex === "หญิง") {
      tscore = 99;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd1_dscore === 44 && sex === "หญิง") {
      tscore = 98;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd1_dscore === 43 && sex === "หญิง") {
      tscore = 97;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd1_dscore === 42 && sex === "หญิง") {
      tscore = 96;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd1_dscore === 42 && sex === "หญิง") {
      tscore = 95;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd1_dscore === 41 && sex === "หญิง") {
      tscore = 94;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd1_dscore === 40 && sex === "หญิง") {
      tscore = 93;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd1_dscore === 39 && sex === "หญิง") {
      tscore = 92;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd1_dscore === 38 && sex === "หญิง") {
      tscore = 91;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd1_dscore === 38 && sex === "หญิง") {
      tscore = 90;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd1_dscore === 37 && sex === "หญิง") {
      tscore = 89;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd1_dscore === 36 && sex === "หญิง") {
      tscore = 88;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd1_dscore === 35 && sex === "หญิง") {
      tscore = 87;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd1_dscore === 35 && sex === "หญิง") {
      tscore = 86;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd1_dscore === 34 && sex === "หญิง") {
      tscore = 85;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd1_dscore === 33 && sex === "หญิง") {
      tscore = 84;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd1_dscore === 32 && sex === "หญิง") {
      tscore = 83;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd1_dscore === 31 && sex === "หญิง") {
      tscore = 82;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd1_dscore === 31 && sex === "หญิง") {
      tscore = 81;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd1_dscore === 30 && sex === "หญิง") {
      tscore = 80;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd1_dscore === 29 && sex === "หญิง") {
      tscore = 79;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd1_dscore === 28 && sex === "หญิง") {
      tscore = 78;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd1_dscore === 28 && sex === "หญิง") {
      tscore = 77;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd1_dscore === 27 && sex === "หญิง") {
      tscore = 76;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd1_dscore === 26 && sex === "หญิง") {
      tscore = 75;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd1_dscore === 25 && sex === "หญิง") {
      tscore = 74;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd1_dscore === 24 && sex === "หญิง") {
      tscore = 73;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd1_dscore === 23 && sex === "หญิง") {
      tscore = 72;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd1_dscore === 23 && sex === "หญิง") {
      tscore = 71;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd1_dscore === 22 && sex === "หญิง") {
      tscore = 70;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd1_dscore === 21 && sex === "หญิง") {
      tscore = 69;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd1_dscore === 21 && sex === "หญิง") {
      tscore = 68;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd1_dscore === 20 && sex === "หญิง") {
      tscore = 67;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd1_dscore === 19 && sex === "หญิง") {
      tscore = 66;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd1_dscore === 18 && sex === "หญิง") {
      tscore = 65;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd1_dscore === 18 && sex === "หญิง") {
      tscore = 64;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd1_dscore === 17 && sex === "หญิง") {
      tscore = 63;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd1_dscore === 16 && sex === "หญิง") {
      tscore = 62;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd1_dscore === 15 && sex === "หญิง") {
      tscore = 61;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd1_dscore === 14 && sex === "หญิง") {
      tscore = 60;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd1_dscore === 14 && sex === "หญิง") {
      tscore = 59;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd1_dscore === 13 && sex === "หญิง") {
      tscore = 58;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd1_dscore === 12 && sex === "หญิง") {
      tscore = 57;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd1_dscore === 11 && sex === "หญิง") {
      tscore = 56;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd1_dscore === 11 && sex === "หญิง") {
      tscore = 55;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd1_dscore === 10 && sex === "หญิง") {
      tscore = 54;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd1_dscore === 9 && sex === "หญิง") {
      tscore = 53;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd1_dscore === 8 && sex === "หญิง") {
      tscore = 52;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd1_dscore === 8 && sex === "หญิง") {
      tscore = 51;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd1_dscore === 7 && sex === "หญิง") {
      tscore = 50;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd1_dscore === 6 && sex === "หญิง") {
      tscore = 49;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd1_dscore === 5 && sex === "หญิง") {
      tscore = 48;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd1_dscore === 4 && sex === "หญิง") {
      tscore = 47;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd1_dscore === 4 && sex === "หญิง") {
      tscore = 46;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd1_dscore === 3 && sex === "หญิง") {
      tscore = 45;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd1_dscore === 2 && sex === "หญิง") {
      tscore = 44;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd1_dscore === 1 && sex === "หญิง") {
      tscore = 43;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd1_dscore === 0 && sex === "หญิง") {
      tscore = 42;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    }
    //12/13.11 ก.2 ซน/วู่วาม
    else if (a >= 1200 && a <= 1311 && adhd1_dscore === 45 && sex === "หญิง") {
      tscore = 99;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd1_dscore === 44 && sex === "หญิง") {
      tscore = 98;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd1_dscore === 43 && sex === "หญิง") {
      tscore = 97;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd1_dscore === 42 && sex === "หญิง") {
      tscore = 96;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd1_dscore === 42 && sex === "หญิง") {
      tscore = 95;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd1_dscore === 41 && sex === "หญิง") {
      tscore = 94;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd1_dscore === 40 && sex === "หญิง") {
      tscore = 93;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd1_dscore === 39 && sex === "หญิง") {
      tscore = 92;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd1_dscore === 38 && sex === "หญิง") {
      tscore = 91;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd1_dscore === 38 && sex === "หญิง") {
      tscore = 90;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd1_dscore === 37 && sex === "หญิง") {
      tscore = 89;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd1_dscore === 36 && sex === "หญิง") {
      tscore = 88;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd1_dscore === 35 && sex === "หญิง") {
      tscore = 87;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd1_dscore === 35 && sex === "หญิง") {
      tscore = 86;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd1_dscore === 34 && sex === "หญิง") {
      tscore = 85;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd1_dscore === 33 && sex === "หญิง") {
      tscore = 84;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd1_dscore === 32 && sex === "หญิง") {
      tscore = 83;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd1_dscore === 31 && sex === "หญิง") {
      tscore = 82;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd1_dscore === 31 && sex === "หญิง") {
      tscore = 81;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd1_dscore === 30 && sex === "หญิง") {
      tscore = 80;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd1_dscore === 29 && sex === "หญิง") {
      tscore = 79;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd1_dscore === 28 && sex === "หญิง") {
      tscore = 78;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd1_dscore === 28 && sex === "หญิง") {
      tscore = 77;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd1_dscore === 27 && sex === "หญิง") {
      tscore = 76;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd1_dscore === 26 && sex === "หญิง") {
      tscore = 75;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd1_dscore === 25 && sex === "หญิง") {
      tscore = 74;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd1_dscore === 24 && sex === "หญิง") {
      tscore = 73;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd1_dscore === 23 && sex === "หญิง") {
      tscore = 72;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd1_dscore === 23 && sex === "หญิง") {
      tscore = 71;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd1_dscore === 22 && sex === "หญิง") {
      tscore = 70;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd1_dscore === 21 && sex === "หญิง") {
      tscore = 69;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd1_dscore === 21 && sex === "หญิง") {
      tscore = 68;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd1_dscore === 20 && sex === "หญิง") {
      tscore = 67;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd1_dscore === 19 && sex === "หญิง") {
      tscore = 66;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd1_dscore === 18 && sex === "หญิง") {
      tscore = 65;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd1_dscore === 18 && sex === "หญิง") {
      tscore = 64;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd1_dscore === 17 && sex === "หญิง") {
      tscore = 63;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd1_dscore === 16 && sex === "หญิง") {
      tscore = 62;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd1_dscore === 15 && sex === "หญิง") {
      tscore = 61;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd1_dscore === 14 && sex === "หญิง") {
      tscore = 60;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd1_dscore === 14 && sex === "หญิง") {
      tscore = 59;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd1_dscore === 13 && sex === "หญิง") {
      tscore = 58;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd1_dscore === 12 && sex === "หญิง") {
      tscore = 57;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd1_dscore === 11 && sex === "หญิง") {
      tscore = 56;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd1_dscore === 11 && sex === "หญิง") {
      tscore = 55;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd1_dscore === 10 && sex === "หญิง") {
      tscore = 54;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd1_dscore === 9 && sex === "หญิง") {
      tscore = 53;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd1_dscore === 8 && sex === "หญิง") {
      tscore = 52;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd1_dscore === 8 && sex === "หญิง") {
      tscore = 51;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd1_dscore === 7 && sex === "หญิง") {
      tscore = 50;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd1_dscore === 6 && sex === "หญิง") {
      tscore = 49;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd1_dscore === 5 && sex === "หญิง") {
      tscore = 48;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd1_dscore === 4 && sex === "หญิง") {
      tscore = 47;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd1_dscore === 4 && sex === "หญิง") {
      tscore = 46;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd1_dscore === 3 && sex === "หญิง") {
      tscore = 45;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd1_dscore === 2 && sex === "หญิง") {
      tscore = 44;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd1_dscore === 1 && sex === "หญิง") {
      tscore = 43;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd1_dscore === 0 && sex === "หญิง") {
      tscore = 42;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    }

    const adhd1_tscore = tscore
    const adhd1_group = group
    const adhd2_dscore = null
    const adhd2_tscore = null
    const adhd2_group = null
    const sumadhd_dscore = null
    const sumadhd_tscore = null
    const sumadhd_group = null
    const ldr_dscore = null
    const ldr_tscore = null
    const ldr_group = null
    const ldw_dscore = null
    const ldw_tscore = null
    const ldw_group = null
    const ldm_dscore = null
    const ldm_tscore = null
    const ldm_group = null
    const autism_dscore = null
    const autism_tscore = null
    const autism_group = null
    const comment = null



    axios.post(`${process.env.REACT_APP_API}/kussi-AAHD/${params.idcard}`, {
      stdidcard, grade, schoolid, room, schoolyear, term, adhd1_dscore, adhd1_tscore, adhd1_group, adhd2_dscore, adhd2_tscore, adhd2_group, sumadhd_dscore, sumadhd_tscore, sumadhd_group, ldr_dscore, ldr_tscore, ldr_group, ldw_dscore, ldw_tscore, ldw_group, ldm_dscore, ldm_tscore, ldm_group, autism_dscore, autism_tscore, autism_group, comment
    },
    {
      headers: {
        authtoken,
      }
    })
      .then((response) => {
        //alert("บันทึกสำเร็จ");
        history(`/kussi-ADHD2/${stdidcard}/${schoolyear}/${term}`);
      })
      .catch((err) => {
        alert(err.response.data.error);
      });

  };

  //คำถามADHD
  const infomation = [
    {
      no: 1,
      info: "เดินไปเดินมาในเวลาเรียนโดยไม่ไดรับอนุญาต",
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
      info: "พูดโพล่ง ขดัจงัหวะเวลาครูสอน",
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
      info: "แหย่ ล้อเลียน แกล้งเพื่อน",
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
      info: "หยุกหยิก หรือขยุกขยิก อยู่ไม่สุข",
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
      info: "ใจร้อน วู่วาม",
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
      info: "มักมีเรื่องทะเลาะกับเพื่อน ",
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
      info: "เล่นแรง ",
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
      info: "พูดมาก ",
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
      info: "อารมณ์เปลี่ยงแปลงง่าย ",
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
      info: "ทำอะไรโดยไม่คิดก่อนทำ ",
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
      info: "ซุกซน ชอบทำอะไรแผลงๆ ",
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
      info: "ไม่ยกมือขออนุญาตก่อนถามหรือตอบคำถาม ",
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
      info: "รบกวนห้องเรียน ",
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
      info: "ไม่รู้จักรอคอย ",
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
      info: "ส่งเสียงดังในห้องเรียน ",
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
              พฤติกรรมสภาวะสมาธิสั้น KUS-SI Rating Scales 1 : ADHD
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
              พฤติกรรมนี้เลย <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <b>เล็กน้อย</b> หมายถึง นักเรียนทำ หรือแสดงพฤติกรรมนี้เล็กน้อย
              ครูพบ พฤติกรรมนี้เล็กน้อย หรือแสดงพฤติกรรม 1-2 คร้ังในช่วงเวลา6
              ชั่วโมง
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <b>ค่อนข้างมาก</b> หมายถึง นักเรียนทำ
              หรือแสดงพฤติกรรมนี้ค่อนข้างมากครูพบ พฤติกรรมนี้ค่อนข้างมาก
              หรือแสดงพฤติกรรม 3-4 คร้ังในช่วงเวลา 6 ชั่วโมง
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <b>บ่อยมาก</b> หมายถึง นักเรียนทำ หรือแสดงพฤติกรรมนี้บ่อยมาก ครูพบ
              พฤติกรรมน้ีบ่อยมาก หรือแสดงพฤติกรรม 5-6 ครั้งในช่วงเวลา 6 ชั่วโมง
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
              &nbsp; รวมคะแนนดิบ ซน / วู่วาม
              <input type="number" value={adhd1_dscore} readOnly /> <br />
            </h5>
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

export default Kussi_ADHD;
