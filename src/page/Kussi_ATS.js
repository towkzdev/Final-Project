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

const Kussi_ATS = (props) => {
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
  const [score20, setScore20] = useState(0);
  const [score21, setScore21] = useState(0);
  const [score22, setScore22] = useState(0);
  const [score23, setScore23] = useState(0);
  const [score24, setScore24] = useState(0);
  const [score25, setScore25] = useState(0);
  const [score26, setScore26] = useState(0);
  const [score27, setScore27] = useState(0);
  const [score28, setScore28] = useState(0);
  const [score29, setScore29] = useState(0);
  const [score30, setScore30] = useState(0);
  const [score31, setScore31] = useState(0);
  const [score32, setScore32] = useState(0);
  const [score33, setScore33] = useState(0);
  const [score34, setScore34] = useState(0);
  const [score35, setScore35] = useState(0);
  const [score36, setScore36] = useState(0);
  const [score37, setScore37] = useState(0);
  const [score38, setScore38] = useState(0);
  const [score39, setScore39] = useState(0);


  const autism_dscore = score + score1 + score2 + score3 + score4 + score5 + score6 + score7 + score8 + score9 + score10 + score11 + score12 + score13 + score14 + score15 + score16 + score17 + score18 + score19 + score20 + score21 + score22 + score23 + score24 + score25 + score26 + score27 + score28 + score29 + score30 + score31 + score32 + score33 + score34 + score35 + score36 + score37 + score38 + score39;

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
    //console.loga);
    const sex = contact.sex;
    const schoolyear = scoredata.schoolyear
    const term = scoredata.term

    var autism_tscore;
    var autism_group;
    if ((a >= 600 && a <= 711 && autism_dscore === 120 && sex === "ชาย") || (a >= 600 && a <= 711 && autism_dscore === 119 && sex === "ชาย")) {
       autism_tscore = 95;
      //console.log"autism_tscore6-711 = " + autism_tscore);
       autism_group = 4;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 600 && a <= 711 && autism_dscore === 118 && sex === "ชาย") || (a >= 600 && a <= 711 && autism_dscore === 117 && sex === "ชาย")) {
       autism_tscore = 94;
      //console.log"autism_tscore6-711 = " + autism_tscore);
       autism_group = 4;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 600 && a <= 711 && autism_dscore === 116 && sex === "ชาย") || (a >= 600 && a <= 711 && autism_dscore === 115 && sex === "ชาย")) {
       autism_tscore = 93;
      //console.log"autism_tscore6-711 = " + autism_tscore);
       autism_group = 4;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 600 && a <= 711 && autism_dscore === 114 && sex === "ชาย") || (a >= 600 && a <= 711 && autism_dscore === 113 && sex === "ชาย")) {
       autism_tscore = 92;
      //console.log"autism_tscore6-711 = " + autism_tscore);
       autism_group = 4;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 600 && a <= 711 && autism_dscore === 112 && sex === "ชาย") || (a >= 600 && a <= 711 && autism_dscore === 111 && sex === "ชาย") || (a >= 600 && a <= 711 && autism_dscore === 110 && sex === "ชาย")) {
       autism_tscore = 91;
      //console.log"autism_tscore6-711 = " + autism_tscore);
       autism_group = 4;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 600 && a <= 711 && autism_dscore === 109 && sex === "ชาย") || (a >= 600 && a <= 711 && autism_dscore === 108 && sex === "ชาย")) {
       autism_tscore = 90;
      //console.log"autism_tscore6-711 = " + autism_tscore);
       autism_group = 4;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 600 && a <= 711 && autism_dscore === 107 && sex === "ชาย") || (a >= 600 && a <= 711 && autism_dscore === 106 && sex === "ชาย")) {
       autism_tscore = 89;
      //console.log"autism_tscore6-711 = " + autism_tscore);
       autism_group = 4;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 600 && a <= 711 && autism_dscore === 105 && sex === "ชาย") || (a >= 600 && a <= 711 && autism_dscore === 104 && sex === "ชาย")) {
       autism_tscore = 88;
      //console.log"autism_tscore6-711 = " + autism_tscore);
       autism_group = 4;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 600 && a <= 711 && autism_dscore === 103 && sex === "ชาย") || (a >= 600 && a <= 711 && autism_dscore === 102 && sex === "ชาย") || (a >= 600 && a <= 711 && autism_dscore === 101 && sex === "ชาย")) {
       autism_tscore = 87;
      //console.log"autism_tscore6-711 = " + autism_tscore);
       autism_group = 4;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 600 && a <= 711 && autism_dscore === 100 && sex === "ชาย") || (a >= 600 && a <= 711 && autism_dscore === 99 && sex === "ชาย")) {
       autism_tscore = 86;
      //console.log"autism_tscore6-711 = " + autism_tscore);
       autism_group = 4;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 600 && a <= 711 && autism_dscore === 98 && sex === "ชาย") || (a >= 600 && a <= 711 && autism_dscore === 97 && sex === "ชาย")) {
       autism_tscore = 85;
      //console.log"autism_tscore6-711 = " + autism_tscore);
       autism_group = 4;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 600 && a <= 711 && autism_dscore === 96 && sex === "ชาย") || (a >= 600 && a <= 711 && autism_dscore === 95 && sex === "ชาย")) {
       autism_tscore = 84;
      //console.log"autism_tscore6-711 = " + autism_tscore);
       autism_group = 4;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 600 && a <= 711 && autism_dscore === 94 && sex === "ชาย") || (a >= 600 && a <= 711 && autism_dscore === 93 && sex === "ชาย")) {
       autism_tscore = 83;
      //console.log"autism_tscore6-711 = " + autism_tscore);
       autism_group = 4;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 600 && a <= 711 && autism_dscore === 92 && sex === "ชาย") || (a >= 600 && a <= 711 && autism_dscore === 91 && sex === "ชาย") || (a >= 600 && a <= 711 && autism_dscore === 90 && sex === "ชาย")) {
       autism_tscore = 82;
      //console.log"autism_tscore6-711 = " + autism_tscore);
       autism_group = 4;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 600 && a <= 711 && autism_dscore === 89 && sex === "ชาย") || (a >= 600 && a <= 711 && autism_dscore === 88 && sex === "ชาย")) {
       autism_tscore = 81;
      //console.log"autism_tscore6-711 = " + autism_tscore);
       autism_group = 4;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 600 && a <= 711 && autism_dscore === 87 && sex === "ชาย") || (a >= 600 && a <= 711 && autism_dscore === 86 && sex === "ชาย")) {
       autism_tscore = 80;
      //console.log"autism_tscore6-711 = " + autism_tscore);
       autism_group = 3;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 600 && a <= 711 && autism_dscore === 85 && sex === "ชาย") || (a >= 600 && a <= 711 && autism_dscore === 84 && sex === "ชาย")) {
       autism_tscore = 79;
      //console.log"autism_tscore6-711 = " + autism_tscore);
       autism_group = 3;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 600 && a <= 711 && autism_dscore === 83 && sex === "ชาย") || (a >= 600 && a <= 711 && autism_dscore === 82 && sex === "ชาย") || (a >= 600 && a <= 711 && autism_dscore === 81 && sex === "ชาย")) {
       autism_tscore = 78;
      //console.log"autism_tscore6-711 = " + autism_tscore);
       autism_group = 3;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 600 && a <= 711 && autism_dscore === 80 && sex === "ชาย") || (a >= 600 && a <= 711 && autism_dscore === 79 && sex === "ชาย")) {
       autism_tscore = 77;
      //console.log"autism_tscore6-711 = " + autism_tscore);
       autism_group = 3;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 600 && a <= 711 && autism_dscore === 78 && sex === "ชาย") || (a >= 600 && a <= 711 && autism_dscore === 77 && sex === "ชาย")) {
       autism_tscore = 76;
      //console.log"autism_tscore6-711 = " + autism_tscore);
       autism_group = 3;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 600 && a <= 711 && autism_dscore === 76 && sex === "ชาย") || (a >= 600 && a <= 711 && autism_dscore === 75 && sex === "ชาย")) {
       autism_tscore = 75;
      //console.log"autism_tscore6-711 = " + autism_tscore);
       autism_group = 3;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 600 && a <= 711 && autism_dscore === 74 && sex === "ชาย") || (a >= 600 && a <= 711 && autism_dscore === 73 && sex === "ชาย") || (a >= 600 && a <= 711 && autism_dscore === 72 && sex === "ชาย")) {
       autism_tscore = 74;
      //console.log"autism_tscore6-711 = " + autism_tscore);
       autism_group = 3;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 600 && a <= 711 && autism_dscore === 71 && sex === "ชาย") || (a >= 600 && a <= 711 && autism_dscore === 70 && sex === "ชาย")) {
       autism_tscore = 73;
      //console.log"autism_tscore6-711 = " + autism_tscore);
       autism_group = 3;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 600 && a <= 711 && autism_dscore === 69 && sex === "ชาย") || (a >= 600 && a <= 711 && autism_dscore === 68 && sex === "ชาย")) {
       autism_tscore = 72;
      //console.log"autism_tscore6-711 = " + autism_tscore);
       autism_group = 3;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 600 && a <= 711 && autism_dscore === 67 && sex === "ชาย") || (a >= 600 && a <= 711 && autism_dscore === 66 && sex === "ชาย")) {
       autism_tscore = 71;
      //console.log"autism_tscore6-711 = " + autism_tscore);
       autism_group = 3;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 600 && a <= 711 && autism_dscore === 65 && sex === "ชาย") || (a >= 600 && a <= 711 && autism_dscore === 64 && sex === "ชาย")) {
       autism_tscore = 70;
      //console.log"autism_tscore6-711 = " + autism_tscore);
       autism_group = 2;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 600 && a <= 711 && autism_dscore === 63 && sex === "ชาย") || (a >= 600 && a <= 711 && autism_dscore === 62 && sex === "ชาย") || (a >= 600 && a <= 711 && autism_dscore === 61 && sex === "ชาย")) {
       autism_tscore = 69;
      //console.log"autism_tscore6-711 = " + autism_tscore);
       autism_group = 2;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 600 && a <= 711 && autism_dscore === 60 && sex === "ชาย") || (a >= 600 && a <= 711 && autism_dscore === 59 && sex === "ชาย")) {
       autism_tscore = 68;
      //console.log"autism_tscore6-711 = " + autism_tscore);
       autism_group = 2;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 600 && a <= 711 && autism_dscore === 58 && sex === "ชาย") || (a >= 600 && a <= 711 && autism_dscore === 57 && sex === "ชาย")) {
       autism_tscore = 67;
      //console.log"autism_tscore6-711 = " + autism_tscore);
       autism_group = 2;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 600 && a <= 711 && autism_dscore === 56 && sex === "ชาย") || (a >= 600 && a <= 711 && autism_dscore === 55 && sex === "ชาย")) {
       autism_tscore = 66;
      //console.log"autism_tscore6-711 = " + autism_tscore);
       autism_group = 2;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 600 && a <= 711 && autism_dscore === 54 && sex === "ชาย") || (a >= 600 && a <= 711 && autism_dscore === 53 && sex === "ชาย") || (a >= 600 && a <= 711 && autism_dscore === 52 && sex === "ชาย")) {
       autism_tscore = 65;
      //console.log"autism_tscore6-711 = " + autism_tscore);
       autism_group = 2;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 600 && a <= 711 && autism_dscore === 51 && sex === "ชาย") || (a >= 600 && a <= 711 && autism_dscore === 50 && sex === "ชาย")) {
       autism_tscore = 64;
      //console.log"autism_tscore6-711 = " + autism_tscore);
       autism_group = 2;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 600 && a <= 711 && autism_dscore === 49 && sex === "ชาย") || (a >= 600 && a <= 711 && autism_dscore === 48 && sex === "ชาย")) {
       autism_tscore = 63;
      //console.log"autism_tscore6-711 = " + autism_tscore);
       autism_group = 2;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 600 && a <= 711 && autism_dscore === 47 && sex === "ชาย") || (a >= 600 && a <= 711 && autism_dscore === 46 && sex === "ชาย")) {
       autism_tscore = 62;
      //console.log"autism_tscore6-711 = " + autism_tscore);
       autism_group = 2;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 600 && a <= 711 && autism_dscore === 45 && sex === "ชาย") || (a >= 600 && a <= 711 && autism_dscore === 44 && sex === "ชาย")) {
       autism_tscore = 61;
      //console.log"autism_tscore6-711 = " + autism_tscore);
       autism_group = 2;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 600 && a <= 711 && autism_dscore === 43 && sex === "ชาย") || (a >= 600 && a <= 711 && autism_dscore === 42 && sex === "ชาย") || (a >= 600 && a <= 711 && autism_dscore === 41 && sex === "ชาย")) {
       autism_tscore = 60;
      //console.log"autism_tscore6-711 = " + autism_tscore);
       autism_group = 1;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 600 && a <= 711 && autism_dscore === 40 && sex === "ชาย") || (a >= 600 && a <= 711 && autism_dscore === 39 && sex === "ชาย")) {
       autism_tscore = 59;
      //console.log"autism_tscore6-711 = " + autism_tscore);
       autism_group = 1;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 600 && a <= 711 && autism_dscore === 38 && sex === "ชาย") || (a >= 600 && a <= 711 && autism_dscore === 37 && sex === "ชาย")) {
       autism_tscore = 58;
      //console.log"autism_tscore6-711 = " + autism_tscore);
       autism_group = 1;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 600 && a <= 711 && autism_dscore === 36 && sex === "ชาย") || (a >= 600 && a <= 711 && autism_dscore === 35 && sex === "ชาย")) {
       autism_tscore = 57;
      //console.log"autism_tscore6-711 = " + autism_tscore);
       autism_group = 1;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 600 && a <= 711 && autism_dscore === 34 && sex === "ชาย") || (a >= 600 && a <= 711 && autism_dscore === 33 && sex === "ชาย") || (a >= 600 && a <= 711 && autism_dscore === 32 && sex === "ชาย")) {
       autism_tscore = 56;
      //console.log"autism_tscore6-711 = " + autism_tscore);
       autism_group = 1;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 600 && a <= 711 && autism_dscore === 31 && sex === "ชาย") || (a >= 600 && a <= 711 && autism_dscore === 30 && sex === "ชาย")) {
       autism_tscore = 55;
      //console.log"autism_tscore6-711 = " + autism_tscore);
       autism_group = 1;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 600 && a <= 711 && autism_dscore === 29 && sex === "ชาย") || (a >= 600 && a <= 711 && autism_dscore === 28 && sex === "ชาย")) {
       autism_tscore = 54;
      //console.log"autism_tscore6-711 = " + autism_tscore);
       autism_group = 1;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 600 && a <= 711 && autism_dscore === 27 && sex === "ชาย") || (a >= 600 && a <= 711 && autism_dscore === 26 && sex === "ชาย")) {
       autism_tscore = 53;
      //console.log"autism_tscore6-711 = " + autism_tscore);
       autism_group = 1;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 600 && a <= 711 && autism_dscore === 25 && sex === "ชาย") || (a >= 600 && a <= 711 && autism_dscore === 24 && sex === "ชาย") || (a >= 600 && a <= 711 && autism_dscore === 23 && sex === "ชาย")) {
       autism_tscore = 52;
      //console.log"autism_tscore6-711 = " + autism_tscore);
       autism_group = 1;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 600 && a <= 711 && autism_dscore === 22 && sex === "ชาย") || (a >= 600 && a <= 711 && autism_dscore === 21 && sex === "ชาย")) {
       autism_tscore = 51;
      //console.log"autism_tscore6-711 = " + autism_tscore);
       autism_group = 1;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 600 && a <= 711 && autism_dscore === 20 && sex === "ชาย") || (a >= 600 && a <= 711 && autism_dscore === 19 && sex === "ชาย")) {
       autism_tscore = 50;
      //console.log"autism_tscore6-711 = " + autism_tscore);
       autism_group = 1;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 600 && a <= 711 && autism_dscore === 18 && sex === "ชาย") || (a >= 600 && a <= 711 && autism_dscore === 17 && sex === "ชาย")) {
       autism_tscore = 49;
      //console.log"autism_tscore6-711 = " + autism_tscore);
       autism_group = 1;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 600 && a <= 711 && autism_dscore === 16 && sex === "ชาย") || (a >= 600 && a <= 711 && autism_dscore === 15 && sex === "ชาย")) {
       autism_tscore = 48;
      //console.log"autism_tscore6-711 = " + autism_tscore);
       autism_group = 1;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 600 && a <= 711 && autism_dscore === 14 && sex === "ชาย") || (a >= 600 && a <= 711 && autism_dscore === 13 && sex === "ชาย") || (a >= 600 && a <= 711 && autism_dscore === 12 && sex === "ชาย")) {
       autism_tscore = 47;
      //console.log"autism_tscore6-711 = " + autism_tscore);
       autism_group = 1;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 600 && a <= 711 && autism_dscore === 11 && sex === "ชาย") || (a >= 600 && a <= 711 && autism_dscore === 10 && sex === "ชาย")) {
       autism_tscore = 46;
      //console.log"autism_tscore6-711 = " + autism_tscore);
       autism_group = 1;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 600 && a <= 711 && autism_dscore === 9 && sex === "ชาย") || (a >= 600 && a <= 711 && autism_dscore === 8 && sex === "ชาย")) {
       autism_tscore = 45;
      //console.log"autism_tscore6-711 = " + autism_tscore);
       autism_group = 1;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 600 && a <= 711 && autism_dscore === 7 && sex === "ชาย") || (a >= 600 && a <= 711 && autism_dscore === 6 && sex === "ชาย")) {
       autism_tscore = 44;
      //console.log"autism_tscore6-711 = " + autism_tscore);
       autism_group = 1;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 600 && a <= 711 && autism_dscore === 5 && sex === "ชาย") || (a >= 600 && a <= 711 && autism_dscore === 4 && sex === "ชาย") || (a >= 600 && a <= 711 && autism_dscore === 3 && sex === "ชาย")) {
       autism_tscore = 43;
      //console.log"autism_tscore6-711 = " + autism_tscore);
       autism_group = 1;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 600 && a <= 711 && autism_dscore === 2 && sex === "ชาย") || (a >= 600 && a <= 711 && autism_dscore === 1 && sex === "ชาย")) {
       autism_tscore = 42;
      //console.log"autism_tscore6-711 = " + autism_tscore);
       autism_group = 1;
      //console.log"autism_group = " + autism_group);
    } else if (a >= 600 && a <= 711 && autism_dscore === 0 && sex === "ชาย") {
       autism_tscore = 41;
      //console.log"autism_tscore6-711 = " + autism_tscore);
       autism_group = 1;
      //console.log"autism_group = " + autism_group);
    }

    else if (a >= 800 && a <= 911 && autism_dscore === 120 && sex === "ชาย") {
       autism_tscore = 95;
      //console.log"autism_tscore8-911 = " + autism_tscore);
       autism_group = 4;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 800 && a <= 911 && autism_dscore === 119 && sex === "ชาย") || (a >= 800 && a <= 911 && autism_dscore === 118 && sex === "ชาย")) {
       autism_tscore = 94;
      //console.log"autism_tscore8-911 = " + autism_tscore);
       autism_group = 4;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 800 && a <= 911 && autism_dscore === 117 && sex === "ชาย") || (a >= 800 && a <= 911 && autism_dscore === 116 && sex === "ชาย") || (a >= 800 && a <= 911 && autism_dscore === 115 && sex === "ชาย")) {
       autism_tscore = 93;
      //console.log"autism_tscore8-911 = " + autism_tscore);
       autism_group = 4;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 800 && a <= 911 && autism_dscore === 114 && sex === "ชาย") || (a >= 800 && a <= 911 && autism_dscore === 113 && sex === "ชาย")) {
       autism_tscore = 92;
      //console.log"autism_tscore8-911 = " + autism_tscore);
       autism_group = 4;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 800 && a <= 911 && autism_dscore === 112 && sex === "ชาย") || (a >= 800 && a <= 911 && autism_dscore === 111 && sex === "ชาย")) {
       autism_tscore = 91;
      //console.log"autism_tscore8-911 = " + autism_tscore);
       autism_group = 4;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 800 && a <= 911 && autism_dscore === 110 && sex === "ชาย") || (a >= 800 && a <= 911 && autism_dscore === 109 && sex === "ชาย")) {
       autism_tscore = 90;
      //console.log"autism_tscore8-911 = " + autism_tscore);
       autism_group = 4;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 800 && a <= 911 && autism_dscore === 108 && sex === "ชาย") || (a >= 800 && a <= 911 && autism_dscore === 107 && sex === "ชาย") || (a >= 800 && a <= 911 && autism_dscore === 106 && sex === "ชาย")) {
       autism_tscore = 89;
      //console.log"autism_tscore8-911 = " + autism_tscore);
       autism_group = 4;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 800 && a <= 911 && autism_dscore === 105 && sex === "ชาย") || (a >= 800 && a <= 911 && autism_dscore === 104 && sex === "ชาย")) {
       autism_tscore = 88;
      //console.log"autism_tscore8-911 = " + autism_tscore);
       autism_group = 4;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 800 && a <= 911 && autism_dscore === 103 && sex === "ชาย") || (a >= 800 && a <= 911 && autism_dscore === 102 && sex === "ชาย")) {
       autism_tscore = 87;
      //console.log"autism_tscore8-911 = " + autism_tscore);
       autism_group = 4;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 800 && a <= 911 && autism_dscore === 101 && sex === "ชาย") || (a >= 800 && a <= 911 && autism_dscore === 100 && sex === "ชาย")) {
       autism_tscore = 86;
      //console.log"autism_tscore8-911 = " + autism_tscore);
       autism_group = 4;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 800 && a <= 911 && autism_dscore === 99 && sex === "ชาย") || (a >= 800 && a <= 911 && autism_dscore === 98 && sex === "ชาย")) {
       autism_tscore = 85;
      //console.log"autism_tscore8-911 = " + autism_tscore);
       autism_group = 4;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 800 && a <= 911 && autism_dscore === 97 && sex === "ชาย") || (a >= 800 && a <= 911 && autism_dscore === 96 && sex === "ชาย") || (a >= 800 && a <= 911 && autism_dscore === 95 && sex === "ชาย")) {
       autism_tscore = 84;
      //console.log"autism_tscore8-911 = " + autism_tscore);
       autism_group = 4;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 800 && a <= 911 && autism_dscore === 94 && sex === "ชาย") || (a >= 800 && a <= 911 && autism_dscore === 93 && sex === "ชาย")) {
       autism_tscore = 83;
      //console.log"autism_tscore8-911 = " + autism_tscore);
       autism_group = 4;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 800 && a <= 911 && autism_dscore === 92 && sex === "ชาย") || (a >= 800 && a <= 911 && autism_dscore === 91 && sex === "ชาย")) {
       autism_tscore = 82;
      //console.log"autism_tscore8-911 = " + autism_tscore);
       autism_group = 4;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 800 && a <= 911 && autism_dscore === 90 && sex === "ชาย") || (a >= 800 && a <= 911 && autism_dscore === 89 && sex === "ชาย")) {
       autism_tscore = 81;
      //console.log"autism_tscore8-911 = " + autism_tscore);
       autism_group = 4;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 800 && a <= 911 && autism_dscore === 88 && sex === "ชาย") || (a >= 800 && a <= 911 && autism_dscore === 87 && sex === "ชาย") || (a >= 800 && a <= 911 && autism_dscore === 86 && sex === "ชาย")) {
       autism_tscore = 80;
      //console.log"autism_tscore8-911 = " + autism_tscore);
       autism_group = 3;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 800 && a <= 911 && autism_dscore === 85 && sex === "ชาย") || (a >= 800 && a <= 911 && autism_dscore === 84 && sex === "ชาย")) {
       autism_tscore = 79;
      //console.log"autism_tscore8-911 = " + autism_tscore);
       autism_group = 3;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 800 && a <= 911 && autism_dscore === 83 && sex === "ชาย") || (a >= 800 && a <= 911 && autism_dscore === 82 && sex === "ชาย")) {
       autism_tscore = 78;
      //console.log"autism_tscore8-911 = " + autism_tscore);
       autism_group = 3;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 800 && a <= 911 && autism_dscore === 81 && sex === "ชาย") || (a >= 800 && a <= 911 && autism_dscore === 80 && sex === "ชาย")) {
       autism_tscore = 77;
      //console.log"autism_tscore8-911 = " + autism_tscore);
       autism_group = 3;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 800 && a <= 911 && autism_dscore === 79 && sex === "ชาย") || (a >= 800 && a <= 911 && autism_dscore === 78 && sex === "ชาย") || (a >= 800 && a <= 911 && autism_dscore === 77 && sex === "ชาย")) {
       autism_tscore = 76;
      //console.log"autism_tscore8-911 = " + autism_tscore);
       autism_group = 3;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 800 && a <= 911 && autism_dscore === 76 && sex === "ชาย") || (a >= 800 && a <= 911 && autism_dscore === 75 && sex === "ชาย")) {
       autism_tscore = 75;
      //console.log"autism_tscore8-911 = " + autism_tscore);
       autism_group = 3;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 800 && a <= 911 && autism_dscore === 74 && sex === "ชาย") || (a >= 800 && a <= 911 && autism_dscore === 73 && sex === "ชาย")) {
       autism_tscore = 74;
      //console.log"autism_tscore8-911 = " + autism_tscore);
       autism_group = 3;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 800 && a <= 911 && autism_dscore === 72 && sex === "ชาย") || (a >= 800 && a <= 911 && autism_dscore === 71 && sex === "ชาย")) {
       autism_tscore = 73;
      //console.log"autism_tscore8-911 = " + autism_tscore);
       autism_group = 3;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 800 && a <= 911 && autism_dscore === 70 && sex === "ชาย") || (a >= 800 && a <= 911 && autism_dscore === 69 && sex === "ชาย")) {
       autism_tscore = 72;
      //console.log"autism_tscore8-911 = " + autism_tscore);
       autism_group = 3;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 800 && a <= 911 && autism_dscore === 68 && sex === "ชาย") || (a >= 800 && a <= 911 && autism_dscore === 67 && sex === "ชาย") || (a >= 800 && a <= 911 && autism_dscore === 66 && sex === "ชาย")) {
       autism_tscore = 71;
      //console.log"autism_tscore8-911 = " + autism_tscore);
       autism_group = 3;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 800 && a <= 911 && autism_dscore === 65 && sex === "ชาย") || (a >= 800 && a <= 911 && autism_dscore === 64 && sex === "ชาย")) {
       autism_tscore = 70;
      //console.log"autism_tscore8-911 = " + autism_tscore);
       autism_group = 2;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 800 && a <= 911 && autism_dscore === 63 && sex === "ชาย") || (a >= 800 && a <= 911 && autism_dscore === 62 && sex === "ชาย")) {
       autism_tscore = 69;
      //console.log"autism_tscore8-911 = " + autism_tscore);
       autism_group = 2;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 800 && a <= 911 && autism_dscore === 61 && sex === "ชาย") || (a >= 800 && a <= 911 && autism_dscore === 60 && sex === "ชาย")) {
       autism_tscore = 68;
      //console.log"autism_tscore8-911 = " + autism_tscore);
       autism_group = 2;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 800 && a <= 911 && autism_dscore === 59 && sex === "ชาย") || (a >= 800 && a <= 911 && autism_dscore === 58 && sex === "ชาย") || (a >= 800 && a <= 911 && autism_dscore === 57 && sex === "ชาย")) {
       autism_tscore = 67;
      //console.log"autism_tscore8-911 = " + autism_tscore);
       autism_group = 2;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 800 && a <= 911 && autism_dscore === 56 && sex === "ชาย") || (a >= 800 && a <= 911 && autism_dscore === 55 && sex === "ชาย")) {
       autism_tscore = 66;
      //console.log"autism_tscore8-911 = " + autism_tscore);
       autism_group = 2;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 800 && a <= 911 && autism_dscore === 54 && sex === "ชาย") || (a >= 800 && a <= 911 && autism_dscore === 53 && sex === "ชาย")) {
       autism_tscore = 65;
      //console.log"autism_tscore8-911 = " + autism_tscore);
       autism_group = 2;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 800 && a <= 911 && autism_dscore === 52 && sex === "ชาย") || (a >= 800 && a <= 911 && autism_dscore === 51 && sex === "ชาย")) {
       autism_tscore = 64;
      //console.log"autism_tscore8-911 = " + autism_tscore);
       autism_group = 2;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 800 && a <= 911 && autism_dscore === 50 && sex === "ชาย") || (a >= 800 && a <= 911 && autism_dscore === 49 && sex === "ชาย") || (a >= 800 && a <= 911 && autism_dscore === 48 && sex === "ชาย")) {
       autism_tscore = 63;
      //console.log"autism_tscore8-911 = " + autism_tscore);
       autism_group = 2;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 800 && a <= 911 && autism_dscore === 47 && sex === "ชาย") || (a >= 800 && a <= 911 && autism_dscore === 46 && sex === "ชาย")) {
       autism_tscore = 62;
      //console.log"autism_tscore8-911 = " + autism_tscore);
       autism_group = 2;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 800 && a <= 911 && autism_dscore === 45 && sex === "ชาย") || (a >= 800 && a <= 911 && autism_dscore === 44 && sex === "ชาย")) {
       autism_tscore = 61;
      //console.log"autism_tscore8-911 = " + autism_tscore);
       autism_group = 2;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 800 && a <= 911 && autism_dscore === 43 && sex === "ชาย") || (a >= 800 && a <= 911 && autism_dscore === 42 && sex === "ชาย")) {
       autism_tscore = 60;
      //console.log"autism_tscore8-911 = " + autism_tscore);
       autism_group = 1;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 800 && a <= 911 && autism_dscore === 41 && sex === "ชาย") || (a >= 800 && a <= 911 && autism_dscore === 40 && sex === "ชาย")) {
       autism_tscore = 59;
      //console.log"autism_tscore8-911 = " + autism_tscore);
       autism_group = 1;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 800 && a <= 911 && autism_dscore === 39 && sex === "ชาย") || (a >= 800 && a <= 911 && autism_dscore === 38 && sex === "ชาย") || (a >= 800 && a <= 911 && autism_dscore === 37 && sex === "ชาย")) {
       autism_tscore = 58;
      //console.log"autism_tscore8-911 = " + autism_tscore);
       autism_group = 1;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 800 && a <= 911 && autism_dscore === 36 && sex === "ชาย") || (a >= 800 && a <= 911 && autism_dscore === 35 && sex === "ชาย")) {
       autism_tscore = 57;
      //console.log"autism_tscore8-911 = " + autism_tscore);
       autism_group = 1;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 800 && a <= 911 && autism_dscore === 34 && sex === "ชาย") || (a >= 800 && a <= 911 && autism_dscore === 33 && sex === "ชาย")) {
       autism_tscore = 56;
      //console.log"autism_tscore8-911 = " + autism_tscore);
       autism_group = 1;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 800 && a <= 911 && autism_dscore === 32 && sex === "ชาย") || (a >= 800 && a <= 911 && autism_dscore === 31 && sex === "ชาย")) {
       autism_tscore = 55;
      //console.log"autism_tscore8-911 = " + autism_tscore);
       autism_group = 1;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 800 && a <= 911 && autism_dscore === 30 && sex === "ชาย") || (a >= 800 && a <= 911 && autism_dscore === 29 && sex === "ชาย") || (a >= 800 && a <= 911 && autism_dscore === 28 && sex === "ชาย")) {
       autism_tscore = 54;
      //console.log"autism_tscore8-911 = " + autism_tscore);
       autism_group = 1;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 800 && a <= 911 && autism_dscore === 27 && sex === "ชาย") || (a >= 800 && a <= 911 && autism_dscore === 26 && sex === "ชาย")) {
       autism_tscore = 53;
      //console.log"autism_tscore8-911 = " + autism_tscore);
       autism_group = 1;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 800 && a <= 911 && autism_dscore === 25 && sex === "ชาย") || (a >= 800 && a <= 911 && autism_dscore === 24 && sex === "ชาย")) {
       autism_tscore = 52;
      //console.log"autism_tscore8-911 = " + autism_tscore);
       autism_group = 1;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 800 && a <= 911 && autism_dscore === 23 && sex === "ชาย") || (a >= 800 && a <= 911 && autism_dscore === 22 && sex === "ชาย")) {
       autism_tscore = 51;
      //console.log"autism_tscore8-911 = " + autism_tscore);
       autism_group = 1;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 800 && a <= 911 && autism_dscore === 21 && sex === "ชาย") || (a >= 800 && a <= 911 && autism_dscore === 20 && sex === "ชาย") || (a >= 800 && a <= 911 && autism_dscore === 19 && sex === "ชาย")) {
       autism_tscore = 50;
      //console.log"autism_tscore8-911 = " + autism_tscore);
       autism_group = 1;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 800 && a <= 911 && autism_dscore === 18 && sex === "ชาย") || (a >= 800 && a <= 911 && autism_dscore === 17 && sex === "ชาย")) {
       autism_tscore = 49;
      //console.log"autism_tscore8-911 = " + autism_tscore);
       autism_group = 1;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 800 && a <= 911 && autism_dscore === 16 && sex === "ชาย") || (a >= 800 && a <= 911 && autism_dscore === 15 && sex === "ชาย")) {
       autism_tscore = 48;
      //console.log"autism_tscore8-911 = " + autism_tscore);
       autism_group = 1;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 800 && a <= 911 && autism_dscore === 14 && sex === "ชาย") || (a >= 800 && a <= 911 && autism_dscore === 13 && sex === "ชาย")) {
       autism_tscore = 47;
      //console.log"autism_tscore8-911 = " + autism_tscore);
       autism_group = 1;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 800 && a <= 911 && autism_dscore === 12 && sex === "ชาย") || (a >= 800 && a <= 911 && autism_dscore === 11 && sex === "ชาย")) {
       autism_tscore = 46;
      //console.log"autism_tscore8-911 = " + autism_tscore);
       autism_group = 1;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 800 && a <= 911 && autism_dscore === 10 && sex === "ชาย") || (a >= 800 && a <= 911 && autism_dscore === 9 && sex === "ชาย") || (a >= 800 && a <= 911 && autism_dscore === 8 && sex === "ชาย")) {
       autism_tscore = 45;
      //console.log"autism_tscore8-911 = " + autism_tscore);
       autism_group = 1;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 800 && a <= 911 && autism_dscore === 7 && sex === "ชาย") || (a >= 800 && a <= 911 && autism_dscore === 6 && sex === "ชาย")) {
       autism_tscore = 44;
      //console.log"autism_tscore8-911 = " + autism_tscore);
       autism_group = 1;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 800 && a <= 911 && autism_dscore === 5 && sex === "ชาย") || (a >= 800 && a <= 911 && autism_dscore === 4 && sex === "ชาย")) {
       autism_tscore = 43;
      //console.log"autism_tscore8-911 = " + autism_tscore);
       autism_group = 1;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 800 && a <= 911 && autism_dscore === 3 && sex === "ชาย") || (a >= 800 && a <= 911 && autism_dscore === 2 && sex === "ชาย")) {
       autism_tscore = 42;
      //console.log"autism_tscore8-911 = " + autism_tscore);
       autism_group = 1;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 800 && a <= 911 && autism_dscore === 0 && sex === "ชาย") || (a >= 800 && a <= 911 && autism_dscore === 1 && sex === "ชาย")) {
       autism_tscore = 41;
      //console.log"autism_tscore8-911 = " + autism_tscore);
       autism_group = 1;
      //console.log"autism_group = " + autism_group);
    }

    else if (a >= 1000 && a <= 1111 && autism_dscore === 120 && sex === "ชาย") {
       autism_tscore = 91;
      //console.log"autism_tscore10-11 = " + autism_tscore);
       autism_group = 4;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1000 && a <= 1111 && autism_dscore === 119 && sex === "ชาย") || (a >= 1000 && a <= 1111 && autism_dscore === 118 && sex === "ชาย") || (a >= 1000 && a <= 1111 && autism_dscore === 117 && sex === "ชาย")) {
       autism_tscore = 90;
      //console.log"autism_tscore10-11 = " + autism_tscore);
       autism_group = 4;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1000 && a <= 1111 && autism_dscore === 116 && sex === "ชาย") || (a >= 1000 && a <= 1111 && autism_dscore === 115 && sex === "ชาย")) {
       autism_tscore = 89;
      //console.log"autism_tscore10-11 = " + autism_tscore);
       autism_group = 4;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1000 && a <= 1111 && autism_dscore === 114 && sex === "ชาย") || (a >= 1000 && a <= 1111 && autism_dscore === 113 && sex === "ชาย")) {
       autism_tscore = 88;
      //console.log"autism_tscore10-11 = " + autism_tscore);
       autism_group = 4;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1000 && a <= 1111 && autism_dscore === 112 && sex === "ชาย") || (a >= 1000 && a <= 1111 && autism_dscore === 111 && sex === "ชาย") || (a >= 1000 && a <= 1111 && autism_dscore === 110 && sex === "ชาย")) {
       autism_tscore = 87;
      //console.log"autism_tscore10-11 = " + autism_tscore);
       autism_group = 4;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1000 && a <= 1111 && autism_dscore === 109 && sex === "ชาย") || (a >= 1000 && a <= 1111 && autism_dscore === 108 && sex === "ชาย")) {
       autism_tscore = 86;
      //console.log"autism_tscore10-11 = " + autism_tscore);
       autism_group = 4;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1000 && a <= 1111 && autism_dscore === 107 && sex === "ชาย") || (a >= 1000 && a <= 1111 && autism_dscore === 106 && sex === "ชาย") || (a >= 1000 && a <= 1111 && autism_dscore === 105 && sex === "ชาย")) {
       autism_tscore = 85;
      //console.log"autism_tscore10-11 = " + autism_tscore);
       autism_group = 4;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1000 && a <= 1111 && autism_dscore === 104 && sex === "ชาย") || (a >= 1000 && a <= 1111 && autism_dscore === 103 && sex === "ชาย")) {
       autism_tscore = 84;
      //console.log"autism_tscore10-11 = " + autism_tscore);
       autism_group = 4;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1000 && a <= 1111 && autism_dscore === 102 && sex === "ชาย") || (a >= 1000 && a <= 1111 && autism_dscore === 101 && sex === "ชาย")) {
       autism_tscore = 83;
      //console.log"autism_tscore10-11 = " + autism_tscore);
       autism_group = 4;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1000 && a <= 1111 && autism_dscore === 100 && sex === "ชาย") || (a >= 1000 && a <= 1111 && autism_dscore === 99 && sex === "ชาย") || (a >= 1000 && a <= 1111 && autism_dscore === 98 && sex === "ชาย")) {
       autism_tscore = 82;
      //console.log"autism_tscore10-11 = " + autism_tscore);
       autism_group = 4;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1000 && a <= 1111 && autism_dscore === 97 && sex === "ชาย") || (a >= 1000 && a <= 1111 && autism_dscore === 96 && sex === "ชาย")) {
       autism_tscore = 81;
      //console.log"autism_tscore10-11 = " + autism_tscore);
       autism_group = 4;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1000 && a <= 1111 && autism_dscore === 95 && sex === "ชาย") || (a >= 1000 && a <= 1111 && autism_dscore === 94 && sex === "ชาย") || (a >= 1000 && a <= 1111 && autism_dscore === 93 && sex === "ชาย")) {
       autism_tscore = 80;
      //console.log"autism_tscore10-11 = " + autism_tscore);
       autism_group = 3;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1000 && a <= 1111 && autism_dscore === 92 && sex === "ชาย") || (a >= 1000 && a <= 1111 && autism_dscore === 91 && sex === "ชาย")) {
       autism_tscore = 79;
      //console.log"autism_tscore10-11 = " + autism_tscore);
       autism_group = 3;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1000 && a <= 1111 && autism_dscore === 90 && sex === "ชาย") || (a >= 1000 && a <= 1111 && autism_dscore === 89 && sex === "ชาย")) {
       autism_tscore = 78;
      //console.log"autism_tscore10-11 = " + autism_tscore);
       autism_group = 3;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1000 && a <= 1111 && autism_dscore === 88 && sex === "ชาย") || (a >= 1000 && a <= 1111 && autism_dscore === 87 && sex === "ชาย") || (a >= 1000 && a <= 1111 && autism_dscore === 86 && sex === "ชาย")) {
       autism_tscore = 77;
      //console.log"autism_tscore10-11 = " + autism_tscore);
       autism_group = 3;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1000 && a <= 1111 && autism_dscore === 85 && sex === "ชาย") || (a >= 1000 && a <= 1111 && autism_dscore === 84 && sex === "ชาย")) {
       autism_tscore = 76;
      //console.log"autism_tscore10-11 = " + autism_tscore);
       autism_group = 3;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1000 && a <= 1111 && autism_dscore === 83 && sex === "ชาย") || (a >= 1000 && a <= 1111 && autism_dscore === 82 && sex === "ชาย") || (a >= 1000 && a <= 1111 && autism_dscore === 81 && sex === "ชาย")) {
       autism_tscore = 75;
      //console.log"autism_tscore10-11 = " + autism_tscore);
       autism_group = 3;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1000 && a <= 1111 && autism_dscore === 80 && sex === "ชาย") || (a >= 1000 && a <= 1111 && autism_dscore === 79 && sex === "ชาย")) {
       autism_tscore = 74;
      //console.log"autism_tscore10-11 = " + autism_tscore);
       autism_group = 3;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1000 && a <= 1111 && autism_dscore === 78 && sex === "ชาย") || (a >= 1000 && a <= 1111 && autism_dscore === 77 && sex === "ชาย")) {
       autism_tscore = 73;
      //console.log"autism_tscore10-11 = " + autism_tscore);
       autism_group = 3;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1000 && a <= 1111 && autism_dscore === 76 && sex === "ชาย") || (a >= 1000 && a <= 1111 && autism_dscore === 75 && sex === "ชาย") || (a >= 1000 && a <= 1111 && autism_dscore === 74 && sex === "ชาย")) {
       autism_tscore = 72;
      //console.log"autism_tscore10-11 = " + autism_tscore);
       autism_group = 3;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1000 && a <= 1111 && autism_dscore === 73 && sex === "ชาย") || (a >= 1000 && a <= 1111 && autism_dscore === 72 && sex === "ชาย")) {
       autism_tscore = 71;
      //console.log"autism_tscore10-11 = " + autism_tscore);
       autism_group = 3;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1000 && a <= 1111 && autism_dscore === 71 && sex === "ชาย") || (a >= 1000 && a <= 1111 && autism_dscore === 70 && sex === "ชาย") || (a >= 1000 && a <= 1111 && autism_dscore === 69 && sex === "ชาย")) {
       autism_tscore = 70;
      //console.log"autism_tscore10-11 = " + autism_tscore);
       autism_group = 2;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1000 && a <= 1111 && autism_dscore === 68 && sex === "ชาย") || (a >= 1000 && a <= 1111 && autism_dscore === 67 && sex === "ชาย")) {
       autism_tscore = 69;
      //console.log"autism_tscore10-11 = " + autism_tscore);
       autism_group = 2;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1000 && a <= 1111 && autism_dscore === 66 && sex === "ชาย") || (a >= 1000 && a <= 1111 && autism_dscore === 65 && sex === "ชาย") || (a >= 1000 && a <= 1111 && autism_dscore === 64 && sex === "ชาย")) {
       autism_tscore = 68;
      //console.log"autism_tscore10-11 = " + autism_tscore);
       autism_group = 2;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1000 && a <= 1111 && autism_dscore === 63 && sex === "ชาย") || (a >= 1000 && a <= 1111 && autism_dscore === 62 && sex === "ชาย")) {
       autism_tscore = 67;
      //console.log"autism_tscore10-11 = " + autism_tscore);
       autism_group = 2;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1000 && a <= 1111 && autism_dscore === 61 && sex === "ชาย") || (a >= 1000 && a <= 1111 && autism_dscore === 60 && sex === "ชาย")) {
       autism_tscore = 66;
      //console.log"autism_tscore10-11 = " + autism_tscore);
       autism_group = 2;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1000 && a <= 1111 && autism_dscore === 59 && sex === "ชาย") || (a >= 1000 && a <= 1111 && autism_dscore === 58 && sex === "ชาย") || (a >= 1000 && a <= 1111 && autism_dscore === 57 && sex === "ชาย")) {
       autism_tscore = 65;
      //console.log"autism_tscore10-11 = " + autism_tscore);
       autism_group = 2;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1000 && a <= 1111 && autism_dscore === 56 && sex === "ชาย") || (a >= 1000 && a <= 1111 && autism_dscore === 55 && sex === "ชาย")) {
       autism_tscore = 64;
      //console.log"autism_tscore10-11 = " + autism_tscore);
       autism_group = 2;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1000 && a <= 1111 && autism_dscore === 54 && sex === "ชาย") || (a >= 1000 && a <= 1111 && autism_dscore === 53 && sex === "ชาย") || (a >= 1000 && a <= 1111 && autism_dscore === 52 && sex === "ชาย")) {
       autism_tscore = 63;
      //console.log"autism_tscore10-11 = " + autism_tscore);
       autism_group = 2;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1000 && a <= 1111 && autism_dscore === 51 && sex === "ชาย") || (a >= 1000 && a <= 1111 && autism_dscore === 50 && sex === "ชาย")) {
       autism_tscore = 62;
      //console.log"autism_tscore10-11 = " + autism_tscore);
       autism_group = 2;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1000 && a <= 1111 && autism_dscore === 49 && sex === "ชาย") || (a >= 1000 && a <= 1111 && autism_dscore === 48 && sex === "ชาย")) {
       autism_tscore = 61;
      //console.log"autism_tscore10-11 = " + autism_tscore);
       autism_group = 2;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1000 && a <= 1111 && autism_dscore === 47 && sex === "ชาย") || (a >= 1000 && a <= 1111 && autism_dscore === 46 && sex === "ชาย") || (a >= 1000 && a <= 1111 && autism_dscore === 45 && sex === "ชาย")) {
       autism_tscore = 60;
      //console.log"autism_tscore10-11 = " + autism_tscore);
       autism_group = 1;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1000 && a <= 1111 && autism_dscore === 44 && sex === "ชาย") || (a >= 1000 && a <= 1111 && autism_dscore === 43 && sex === "ชาย")) {
       autism_tscore = 59;
      //console.log"autism_tscore10-11 = " + autism_tscore);
       autism_group = 1;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1000 && a <= 1111 && autism_dscore === 42 && sex === "ชาย") || (a >= 1000 && a <= 1111 && autism_dscore === 41 && sex === "ชาย") || (a >= 1000 && a <= 1111 && autism_dscore === 40 && sex === "ชาย")) {
       autism_tscore = 58;
      //console.log"autism_tscore10-11 = " + autism_tscore);
       autism_group = 1;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1000 && a <= 1111 && autism_dscore === 39 && sex === "ชาย") || (a >= 1000 && a <= 1111 && autism_dscore === 38 && sex === "ชาย")) {
       autism_tscore = 57;
      //console.log"autism_tscore10-11 = " + autism_tscore);
       autism_group = 1;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1000 && a <= 1111 && autism_dscore === 37 && sex === "ชาย") || (a >= 1000 && a <= 1111 && autism_dscore === 36 && sex === "ชาย")) {
       autism_tscore = 56;
      //console.log"autism_tscore10-11 = " + autism_tscore);
       autism_group = 1;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1000 && a <= 1111 && autism_dscore === 35 && sex === "ชาย") || (a >= 1000 && a <= 1111 && autism_dscore === 34 && sex === "ชาย") || (a >= 1000 && a <= 1111 && autism_dscore === 33 && sex === "ชาย")) {
       autism_tscore = 55;
      //console.log"autism_tscore10-11 = " + autism_tscore);
       autism_group = 1;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1000 && a <= 1111 && autism_dscore === 32 && sex === "ชาย") || (a >= 1000 && a <= 1111 && autism_dscore === 31 && sex === "ชาย")) {
       autism_tscore = 54;
      //console.log"autism_tscore10-11 = " + autism_tscore);
       autism_group = 1;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1000 && a <= 1111 && autism_dscore === 30 && sex === "ชาย") || (a >= 1000 && a <= 1111 && autism_dscore === 29 && sex === "ชาย") || (a >= 1000 && a <= 1111 && autism_dscore === 28 && sex === "ชาย")) {
       autism_tscore = 53;
      //console.log"autism_tscore10-11 = " + autism_tscore);
       autism_group = 1;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1000 && a <= 1111 && autism_dscore === 27 && sex === "ชาย") || (a >= 1000 && a <= 1111 && autism_dscore === 26 && sex === "ชาย")) {
       autism_tscore = 52;
      //console.log"autism_tscore10-11 = " + autism_tscore);
       autism_group = 1;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1000 && a <= 1111 && autism_dscore === 25 && sex === "ชาย") || (a >= 1000 && a <= 1111 && autism_dscore === 24 && sex === "ชาย")) {
       autism_tscore = 51;
      //console.log"autism_tscore10-11 = " + autism_tscore);
       autism_group = 1;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1000 && a <= 1111 && autism_dscore === 23 && sex === "ชาย") || (a >= 1000 && a <= 1111 && autism_dscore === 22 && sex === "ชาย") || (a >= 1000 && a <= 1111 && autism_dscore === 21 && sex === "ชาย")) {
       autism_tscore = 50;
      //console.log"autism_tscore10-11 = " + autism_tscore);
       autism_group = 1;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1000 && a <= 1111 && autism_dscore === 20 && sex === "ชาย") || (a >= 1000 && a <= 1111 && autism_dscore === 19 && sex === "ชาย")) {
       autism_tscore = 49;
      //console.log"autism_tscore10-11 = " + autism_tscore);
       autism_group = 1;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1000 && a <= 1111 && autism_dscore === 18 && sex === "ชาย") || (a >= 1000 && a <= 1111 && autism_dscore === 17 && sex === "ชาย") || (a >= 1000 && a <= 1111 && autism_dscore === 16 && sex === "ชาย")) {
       autism_tscore = 48;
      //console.log"autism_tscore10-11 = " + autism_tscore);
       autism_group = 1;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1000 && a <= 1111 && autism_dscore === 15 && sex === "ชาย") || (a >= 1000 && a <= 1111 && autism_dscore === 14 && sex === "ชาย")) {
       autism_tscore = 47;
      //console.log"autism_tscore10-11 = " + autism_tscore);
       autism_group = 1;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1000 && a <= 1111 && autism_dscore === 13 && sex === "ชาย") || (a >= 1000 && a <= 1111 && autism_dscore === 12 && sex === "ชาย") || (a >= 1000 && a <= 1111 && autism_dscore === 11 && sex === "ชาย")) {
       autism_tscore = 46;
      //console.log"autism_tscore10-11 = " + autism_tscore);
       autism_group = 1;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1000 && a <= 1111 && autism_dscore === 10 && sex === "ชาย")) {
       autism_tscore = 45;
      //console.log"autism_tscore10-11 = " + autism_tscore);
       autism_group = 1;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1000 && a <= 1111 && autism_dscore === 9 && sex === "ชาย") || (a >= 1000 && a <= 1111 && autism_dscore === 8 && sex === "ชาย")) {
       autism_tscore = 44;
      //console.log"autism_tscore10-11 = " + autism_tscore);
       autism_group = 1;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1000 && a <= 1111 && autism_dscore === 7 && sex === "ชาย") || (a >= 1000 && a <= 1111 && autism_dscore === 6 && sex === "ชาย")) {
       autism_tscore = 43;
      //console.log"autism_tscore10-11 = " + autism_tscore);
       autism_group = 1;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1000 && a <= 1111 && autism_dscore === 5 && sex === "ชาย") || (a >= 1000 && a <= 1111 && autism_dscore === 4 && sex === "ชาย")) {
       autism_tscore = 42;
      //console.log"autism_tscore10-11 = " + autism_tscore);
       autism_group = 1;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1000 && a <= 1111 && autism_dscore === 3 && sex === "ชาย") || (a >= 1000 && a <= 1111 && autism_dscore === 2 && sex === "ชาย")) {
       autism_tscore = 41;
      //console.log"autism_tscore10-11 = " + autism_tscore);
       autism_group = 1;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1000 && a <= 1111 && autism_dscore === 1 && sex === "ชาย") || (a >= 1000 && a <= 1111 && autism_dscore === 0 && sex === "ชาย")) {
       autism_tscore = 40;
      //console.log"autism_tscore10-11 = " + autism_tscore);
       autism_group = 1;
      //console.log"autism_group = " + autism_group);
    }

    else if (a >= 1200 && a <= 1311 && autism_dscore === 120 && sex === "ชาย") {
       autism_tscore = 93;
      //console.log"autism_tscore12-13 = " + autism_tscore);
       autism_group = 4;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1200 && a <= 1311 && autism_dscore === 119 && sex === "ชาย") || (a >= 1200 && a <= 1311 && autism_dscore === 118 && sex === "ชาย")) {
       autism_tscore = 92;
      //console.log"autism_tscore12-13 = " + autism_tscore);
       autism_group = 4;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1200 && a <= 1311 && autism_dscore === 117 && sex === "ชาย") || (a >= 1200 && a <= 1311 && autism_dscore === 116 && sex === "ชาย")) {
       autism_tscore = 91;
      //console.log"autism_tscore12-13 = " + autism_tscore);
       autism_group = 4;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1200 && a <= 1311 && autism_dscore === 115 && sex === "ชาย") || (a >= 1200 && a <= 1311 && autism_dscore === 114 && sex === "ชาย") || (a >= 1200 && a <= 1311 && autism_dscore === 113 && sex === "ชาย")) {
       autism_tscore = 90;
      //console.log"autism_tscore12-13 = " + autism_tscore);
       autism_group = 4;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1200 && a <= 1311 && autism_dscore === 112 && sex === "ชาย") || (a >= 1200 && a <= 1311 && autism_dscore === 111 && sex === "ชาย")) {
       autism_tscore = 89;
      //console.log"autism_tscore12-13 = " + autism_tscore);
       autism_group = 4;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1200 && a <= 1311 && autism_dscore === 110 && sex === "ชาย") || (a >= 1200 && a <= 1311 && autism_dscore === 109 && sex === "ชาย")) {
       autism_tscore = 88;
      //console.log"autism_tscore12-13 = " + autism_tscore);
       autism_group = 4;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1200 && a <= 1311 && autism_dscore === 108 && sex === "ชาย") || (a >= 1200 && a <= 1311 && autism_dscore === 107 && sex === "ชาย") || (a >= 1200 && a <= 1311 && autism_dscore === 106 && sex === "ชาย")) {
       autism_tscore = 87;
      //console.log"autism_tscore12-13 = " + autism_tscore);
       autism_group = 4;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1200 && a <= 1311 && autism_dscore === 105 && sex === "ชาย") || (a >= 1200 && a <= 1311 && autism_dscore === 104 && sex === "ชาย")) {
       autism_tscore = 86;
      //console.log"autism_tscore12-13 = " + autism_tscore);
       autism_group = 4;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1200 && a <= 1311 && autism_dscore === 103 && sex === "ชาย") || (a >= 1200 && a <= 1311 && autism_dscore === 102 && sex === "ชาย")) {
       autism_tscore = 85;
      //console.log"autism_tscore12-13 = " + autism_tscore);
       autism_group = 4;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1200 && a <= 1311 && autism_dscore === 101 && sex === "ชาย") || (a >= 1200 && a <= 1311 && autism_dscore === 100 && sex === "ชาย") || (a >= 1200 && a <= 1311 && autism_dscore === 99 && sex === "ชาย")) {
       autism_tscore = 84;
      //console.log"autism_tscore12-13 = " + autism_tscore);
       autism_group = 4;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1200 && a <= 1311 && autism_dscore === 98 && sex === "ชาย") || (a >= 1200 && a <= 1311 && autism_dscore === 97 && sex === "ชาย")) {
       autism_tscore = 83;
      //console.log"autism_tscore12-13 = " + autism_tscore);
       autism_group = 4;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1200 && a <= 1311 && autism_dscore === 96 && sex === "ชาย") || (a >= 1200 && a <= 1311 && autism_dscore === 95 && sex === "ชาย")) {
       autism_tscore = 82;
      //console.log"autism_tscore12-13 = " + autism_tscore);
       autism_group = 4;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1200 && a <= 1311 && autism_dscore === 94 && sex === "ชาย") || (a >= 1200 && a <= 1311 && autism_dscore === 93 && sex === "ชาย")) {
       autism_tscore = 81;
      //console.log"autism_tscore12-13 = " + autism_tscore);
       autism_group = 4;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1200 && a <= 1311 && autism_dscore === 92 && sex === "ชาย") || (a >= 1200 && a <= 1311 && autism_dscore === 91 && sex === "ชาย") || (a >= 1200 && a <= 1311 && autism_dscore === 90 && sex === "ชาย")) {
       autism_tscore = 80;
      //console.log"autism_tscore12-13 = " + autism_tscore);
       autism_group = 3;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1200 && a <= 1311 && autism_dscore === 88 && sex === "ชาย") || (a >= 1200 && a <= 1311 && autism_dscore === 89 && sex === "ชาย")) {
       autism_tscore = 79;
      //console.log"autism_tscore12-13 = " + autism_tscore);
       autism_group = 3;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1200 && a <= 1311 && autism_dscore === 87 && sex === "ชาย") || (a >= 1200 && a <= 1311 && autism_dscore === 86 && sex === "ชาย")) {
       autism_tscore = 78;
      //console.log"autism_tscore12-13 = " + autism_tscore);
       autism_group = 3;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1200 && a <= 1311 && autism_dscore === 85 && sex === "ชาย") || (a >= 1200 && a <= 1311 && autism_dscore === 84 && sex === "ชาย") || (a >= 1200 && a <= 1311 && autism_dscore === 83 && sex === "ชาย")) {
       autism_tscore = 77;
      //console.log"autism_tscore12-13 = " + autism_tscore);
       autism_group = 3;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1200 && a <= 1311 && autism_dscore === 82 && sex === "ชาย") || (a >= 1200 && a <= 1311 && autism_dscore === 81 && sex === "ชาย")) {
       autism_tscore = 76;
      //console.log"autism_tscore12-13 = " + autism_tscore);
       autism_group = 3;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1200 && a <= 1311 && autism_dscore === 80 && sex === "ชาย") || (a >= 1200 && a <= 1311 && autism_dscore === 79 && sex === "ชาย")) {
       autism_tscore = 75;
      //console.log"autism_tscore12-13 = " + autism_tscore);
       autism_group = 3;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1200 && a <= 1311 && autism_dscore === 78 && sex === "ชาย") || (a >= 1200 && a <= 1311 && autism_dscore === 77 && sex === "ชาย") || (a >= 1200 && a <= 1311 && autism_dscore === 76 && sex === "ชาย")) {
       autism_tscore = 74;
      //console.log"autism_tscore12-13 = " + autism_tscore);
       autism_group = 3;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1200 && a <= 1311 && autism_dscore === 75 && sex === "ชาย") || (a >= 1200 && a <= 1311 && autism_dscore === 74 && sex === "ชาย")) {
       autism_tscore = 73;
      //console.log"autism_tscore12-13 = " + autism_tscore);
       autism_group = 3;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1200 && a <= 1311 && autism_dscore === 73 && sex === "ชาย") || (a >= 1200 && a <= 1311 && autism_dscore === 72 && sex === "ชาย")) {
       autism_tscore = 72;
      //console.log"autism_tscore12-13 = " + autism_tscore);
       autism_group = 3;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1200 && a <= 1311 && autism_dscore === 71 && sex === "ชาย") || (a >= 1200 && a <= 1311 && autism_dscore === 70 && sex === "ชาย" ) || (a >= 1200 && a <= 1311 && autism_dscore === 69 && sex === "ชาย")) {
       autism_tscore = 71;
      //console.log"autism_tscore12-13 = " + autism_tscore);
       autism_group = 3;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1200 && a <= 1311 && autism_dscore === 68 && sex === "ชาย") || (a >= 1200 && a <= 1311 && autism_dscore === 67 && sex === "ชาย")) {
       autism_tscore = 70;
      //console.log"autism_tscore12-13 = " + autism_tscore);
       autism_group = 2;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1200 && a <= 1311 && autism_dscore === 66 && sex === "ชาย") || (a >= 1200 && a <= 1311 && autism_dscore === 65 && sex === "ชาย")) {
       autism_tscore = 69;
      //console.log"autism_tscore12-13 = " + autism_tscore);
       autism_group = 2;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1200 && a <= 1311 && autism_dscore === 64 && sex === "ชาย") || (a >= 1200 && a <= 1311 && autism_dscore === 63 && sex === "ชาย") || (a >= 1200 && a <= 1311 && autism_dscore === 62 && sex === "ชาย")) {
       autism_tscore = 68;
      //console.log"autism_tscore12-13 = " + autism_tscore);
       autism_group = 2;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1200 && a <= 1311 && autism_dscore === 61 && sex === "ชาย") || (a >= 1200 && a <= 1311 && autism_dscore === 60 && sex === "ชาย")) {
       autism_tscore = 67;
      //console.log"autism_tscore12-13 = " + autism_tscore);
       autism_group = 2;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1200 && a <= 1311 && autism_dscore === 59 && sex === "ชาย") || (a >= 1200 && a <= 1311 && autism_dscore === 58 && sex === "ชาย")) {
       autism_tscore = 66;
      //console.log"autism_tscore12-13 = " + autism_tscore);
       autism_group = 2;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1200 && a <= 1311 && autism_dscore === 57 && sex === "ชาย") || (a >= 1200 && a <= 1311 && autism_dscore === 56 && sex === "ชาย")) {
       autism_tscore = 65;
      //console.log"autism_tscore12-13 = " + autism_tscore);
       autism_group = 2;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1200 && a <= 1311 && autism_dscore === 55 && sex === "ชาย") || (a >= 1200 && a <= 1311 && autism_dscore === 54 && sex === "ชาย") || (a >= 1200 && a <= 1311 && autism_dscore === 53 && sex === "ชาย")) {
       autism_tscore = 64;
      //console.log"autism_tscore12-13 = " + autism_tscore);
       autism_group = 2;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1200 && a <= 1311 && autism_dscore === 52 && sex === "ชาย") || (a >= 1200 && a <= 1311 && autism_dscore === 51 && sex === "ชาย")) {
       autism_tscore = 63;
      //console.log"autism_tscore12-13 = " + autism_tscore);
       autism_group = 2;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1200 && a <= 1311 && autism_dscore === 50 && sex === "ชาย") || (a >= 1200 && a <= 1311 && autism_dscore === 49 && sex === "ชาย")) {
       autism_tscore = 62;
      //console.log"autism_tscore12-13 = " + autism_tscore);
       autism_group = 2;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1200 && a <= 1311 && autism_dscore === 48 && sex === "ชาย") || (a >= 1200 && a <= 1311 && autism_dscore === 47 && sex === "ชาย") || (a >= 1200 && a <= 1311 && autism_dscore === 46 && sex === "ชาย")) {
       autism_tscore = 61;
      //console.log"autism_tscore12-13 = " + autism_tscore);
       autism_group = 2;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1200 && a <= 1311 && autism_dscore === 45 && sex === "ชาย") || (a >= 1200 && a <= 1311 && autism_dscore === 44 && sex === "ชาย")) {
       autism_tscore = 60;
      //console.log"autism_tscore12-13 = " + autism_tscore);
       autism_group = 1;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1200 && a <= 1311 && autism_dscore === 43 && sex === "ชาย") || (a >= 1200 && a <= 1311 && autism_dscore === 42 && sex === "ชาย")) {
       autism_tscore = 59;
      //console.log"autism_tscore12-13 = " + autism_tscore);
       autism_group = 1;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1200 && a <= 1311 && autism_dscore === 41 && sex === "ชาย") || (a >= 1200 && a <= 1311 && autism_dscore === 40 && sex === "ชาย") || (a >= 1200 && a <= 1311 && autism_dscore === 39 && sex === "ชาย")) {
       autism_tscore = 58;
      //console.log"autism_tscore12-13 = " + autism_tscore);
       autism_group = 1;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1200 && a <= 1311 && autism_dscore === 38 && sex === "ชาย") || (a >= 1200 && a <= 1311 && autism_dscore === 37 && sex === "ชาย")) {
       autism_tscore = 57;
      //console.log"autism_tscore12-13 = " + autism_tscore);
       autism_group = 1;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1200 && a <= 1311 && autism_dscore === 36 && sex === "ชาย") || (a >= 1200 && a <= 1311 && autism_dscore === 35 && sex === "ชาย")) {
       autism_tscore = 56;
      //console.log"autism_tscore12-13 = " + autism_tscore);
       autism_group = 1;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1200 && a <= 1311 && autism_dscore === 34 && sex === "ชาย") || (a >= 1200 && a <= 1311 && autism_dscore === 32 && sex === "ชาย")) {
       autism_tscore = 55;
      //console.log"autism_tscore12-13 = " + autism_tscore);
       autism_group = 1;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1200 && a <= 1311 && autism_dscore === 31 && sex === "ชาย") || (a >= 1200 && a <= 1311 && autism_dscore === 30 && sex === "ชาย")) {
       autism_tscore = 54;
      //console.log"autism_tscore12-13 = " + autism_tscore);
       autism_group = 1;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1200 && a <= 1311 && autism_dscore === 29 && sex === "ชาย") || (a >= 1200 && a <= 1311 && autism_dscore === 28 && sex === "ชาย")) {
       autism_tscore = 53;
      //console.log"autism_tscore12-13 = " + autism_tscore);
       autism_group = 1;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1200 && a <= 1311 && autism_dscore === 27 && sex === "ชาย") || (a >= 1200 && a <= 1311 && autism_dscore === 26 && sex === "ชาย") || (a >= 1200 && a <= 1311 && autism_dscore === 25 && sex === "ชาย")) {
       autism_tscore = 52;
      //console.log"autism_tscore12-13 = " + autism_tscore);
       autism_group = 1;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1200 && a <= 1311 && autism_dscore === 24 && sex === "ชาย") || (a >= 1200 && a <= 1311 && autism_dscore === 23 && sex === "ชาย")) {
       autism_tscore = 51;
      //console.log"autism_tscore12-13 = " + autism_tscore);
       autism_group = 1;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1200 && a <= 1311 && autism_dscore === 22 && sex === "ชาย") || (a >= 1200 && a <= 1311 && autism_dscore === 21 && sex === "ชาย")) {
       autism_tscore = 50;
      //console.log"autism_tscore12-13 = " + autism_tscore);
       autism_group = 1;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1200 && a <= 1311 && autism_dscore === 20 && sex === "ชาย") || (a >= 1200 && a <= 1311 && autism_dscore === 19 && sex === "ชาย")) {
       autism_tscore = 49;
      //console.log"autism_tscore12-13 = " + autism_tscore);
       autism_group = 1;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1200 && a <= 1311 && autism_dscore === 18 && sex === "ชาย") || (a >= 1200 && a <= 1311 && autism_dscore === 17 && sex === "ชาย") || (a >= 1200 && a <= 1311 && autism_dscore === 16 && sex === "ชาย")) {
       autism_tscore = 48;
      //console.log"autism_tscore12-13 = " + autism_tscore);
       autism_group = 1;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1200 && a <= 1311 && autism_dscore === 15 && sex === "ชาย") || (a >= 1200 && a <= 1311 && autism_dscore === 14 && sex === "ชาย")) {
       autism_tscore = 47;
      //console.log"autism_tscore12-13 = " + autism_tscore);
       autism_group = 1;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1200 && a <= 1311 && autism_dscore === 13 && sex === "ชาย") || (a >= 1200 && a <= 1311 && autism_dscore === 12 && sex === "ชาย")) {
       autism_tscore = 46;
      //console.log"autism_tscore12-13 = " + autism_tscore);
       autism_group = 1;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1200 && a <= 1311 && autism_dscore === 11 && sex === "ชาย") || (a >= 1200 && a <= 1311 && autism_dscore === 10 && sex === "ชาย") || (a >= 1200 && a <= 1311 && autism_dscore === 9 && sex === "ชาย")) {
       autism_tscore = 45;
      //console.log"autism_tscore12-13 = " + autism_tscore);
       autism_group = 1;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1200 && a <= 1311 && autism_dscore === 8 && sex === "ชาย") || (a >= 1200 && a <= 1311 && autism_dscore === 7 && sex === "ชาย")) {
       autism_tscore = 44;
      //console.log"autism_tscore12-13 = " + autism_tscore);
       autism_group = 1;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1200 && a <= 1311 && autism_dscore === 6 && sex === "ชาย") || (a >= 1200 && a <= 1311 && autism_dscore === 5 && sex === "ชาย")) {
       autism_tscore = 43;
      //console.log"autism_tscore12-13 = " + autism_tscore);
       autism_group = 1;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1200 && a <= 1311 && autism_dscore === 4 && sex === "ชาย") || (a >= 1200 && a <= 1311 && autism_dscore === 3 && sex === "ชาย") || (a >= 1200 && a <= 1311 && autism_dscore === 2 && sex === "ชาย")) {
       autism_tscore = 42;
      //console.log"autism_tscore12-13 = " + autism_tscore);
       autism_group = 1;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1200 && a <= 1311 && autism_dscore === 1 && sex === "ชาย") || (a >= 1200 && a <= 1311 && autism_dscore === 0 && sex === "ชาย")) {
       autism_tscore = 41;
      //console.log"autism_tscore12-13 = " + autism_tscore);
       autism_group = 1;
      //console.log"autism_group = " + autism_group);
    }

    else if (a >= 600 && a <= 711 && autism_dscore >= 107 && sex === "หญิง") {
       autism_tscore = 100;
      //console.log"autism6-711G_tscore = " + autism_tscore);
       autism_group = 4;
      //console.log"autism6-711G_tscore = " + autism_group);
    } else if ((a >= 600 && a <= 711 && autism_dscore === 106 && sex === "หญิง") || (a >= 600 && a <= 711 && autism_dscore === 105 && sex === "หญิง")) {
       autism_tscore = 99;
      //console.log"autism_tscore = " + autism_tscore);
       autism_group = 4;
      //console.log"autism6-711G_tscore = " + autism_group);
    } else if ((a >= 600 && a <= 711 && autism_dscore === 104 && sex === "หญิง") || (a >= 600 && a <= 711 && autism_dscore === 103 && sex === "หญิง")) {
       autism_tscore = 98;
      //console.log"autism_tscore = " + autism_tscore);
       autism_group = 4;
      //console.log"autism6-711G_tscore = " + autism_group);
    } else if ((a >= 600 && a <= 711 && autism_dscore === 102 && sex === "หญิง") || (a >= 600 && a <= 711 && autism_dscore === 101 && sex === "หญิง")) {
       autism_tscore = 97;
      //console.log"autism_tscore = " + autism_tscore);
       autism_group = 4;
      //console.log"autism6-711G_tscore = " + autism_group);
    } else if ((a >= 600 && a <= 711 && autism_dscore === 100 && sex === "หญิง") || (a >= 600 && a <= 711 && autism_dscore === 99 && sex === "หญิง")) {
       autism_tscore = 96;
      //console.log"autism_tscore = " + autism_tscore);
       autism_group = 4;
      //console.log"autism6-711G_tscore = " + autism_group);
    } else if ((a >= 600 && a <= 711 && autism_dscore === 98 && sex === "หญิง") || (a >= 600 && a <= 711 && autism_dscore === 97 && sex === "หญิง")) {
       autism_tscore = 95;
      //console.log"autism_tscore = " + autism_tscore);
       autism_group = 4;
      //console.log"autism6-711G_tscore = " + autism_group);
    } else if ((a >= 600 && a <= 711 && autism_dscore === 96 && sex === "หญิง")) {
       autism_tscore = 94;
      //console.log"autism_tscore = " + autism_tscore);
       autism_group = 4;
      //console.log"autism6-711G_tscore = " + autism_group);
    } else if ((a >= 600 && a <= 711 && autism_dscore === 95 && sex === "หญิง") || (a >= 600 && a <= 711 && autism_dscore === 94 && sex === "หญิง")) {
       autism_tscore = 93;
      //console.log"autism_tscore = " + autism_tscore);
       autism_group = 4;
      //console.log"autism6-711G_tscore = " + autism_group);
    } else if ((a >= 600 && a <= 711 && autism_dscore === 93 && sex === "หญิง") || (a >= 600 && a <= 711 && autism_dscore === 92 && sex === "หญิง")) {
       autism_tscore = 92;
      //console.log"autism_tscore = " + autism_tscore);
       autism_group = 4;
      //console.log"autism6-711G_tscore = " + autism_group);
    } else if ((a >= 600 && a <= 711 && autism_dscore === 91 && sex === "หญิง") || (a >= 600 && a <= 711 && autism_dscore === 90 && sex === "หญิง")) {
       autism_tscore = 91;
      //console.log"autism_tscore = " + autism_tscore);
       autism_group = 4;
      //console.log"autism6-711G_tscore = " + autism_group);
    } else if ((a >= 600 && a <= 711 && autism_dscore === 89 && sex === "หญิง") || (a >= 600 && a <= 711 && autism_dscore === 88 && sex === "หญิง")) {
       autism_tscore = 90;
      //console.log"autism_tscore = " + autism_tscore);
       autism_group = 4;
      //console.log"autism6-711G_tscore = " + autism_group);
    } else if ((a >= 600 && a <= 711 && autism_dscore === 87 && sex === "หญิง") || (a >= 600 && a <= 711 && autism_dscore === 86 && sex === "หญิง")) {
       autism_tscore = 89;
      //console.log"autism_tscore = " + autism_tscore);
       autism_group = 4;
      //console.log"autism6-711G_tscore = " + autism_group);
    } else if ((a >= 600 && a <= 711 && autism_dscore === 85 && sex === "หญิง") || (a >= 600 && a <= 711 && autism_dscore === 84 && sex === "หญิง")) {
       autism_tscore = 88;
      //console.log"autism_tscore = " + autism_tscore);
       autism_group = 4;
      //console.log"autism6-711G_tscore = " + autism_group);
    } else if ((a >= 600 && a <= 711 && autism_dscore === 83 && sex === "หญิง") || (a >= 600 && a <= 711 && autism_dscore === 82 && sex === "หญิง")) {
       autism_tscore = 87;
      //console.log"autism_tscore = " + autism_tscore);
       autism_group = 4;
      //console.log"autism6-711G_tscore = " + autism_group);
    } else if ((a >= 600 && a <= 711 && autism_dscore === 81 && sex === "หญิง")) {
       autism_tscore = 86;
      //console.log"autism_tscore = " + autism_tscore);
       autism_group = 4;
      //console.log"autism6-711G_tscore = " + autism_group);
    } else if ((a >= 600 && a <= 711 && autism_dscore === 80 && sex === "หญิง") || (a >= 600 && a <= 711 && autism_dscore === 79 && sex === "หญิง")) {
       autism_tscore = 85;
      //console.log"autism_tscore = " + autism_tscore);
       autism_group = 4;
      //console.log"autism6-711G_tscore = " + autism_group);
    } else if ((a >= 600 && a <= 711 && autism_dscore === 78 && sex === "หญิง") || (a >= 600 && a <= 711 && autism_dscore === 77 && sex === "หญิง")) {
       autism_tscore = 84;
      //console.log"autism_tscore = " + autism_tscore);
       autism_group = 4;
      //console.log"autism6-711G_tscore = " + autism_group);
    } else if ((a >= 600 && a <= 711 && autism_dscore === 76 && sex === "หญิง") || (a >= 600 && a <= 711 && autism_dscore === 75 && sex === "หญิง")) {
       autism_tscore = 83;
      //console.log"autism_tscore = " + autism_tscore);
       autism_group = 4;
      //console.log"autism6-711G_tscore = " + autism_group);
    } else if ((a >= 600 && a <= 711 && autism_dscore === 74 && sex === "หญิง") || (a >= 600 && a <= 711 && autism_dscore === 73 && sex === "หญิง")) {
       autism_tscore = 82;
      //console.log"autism_tscore = " + autism_tscore);
       autism_group = 4;
      //console.log"autism6-711G_tscore = " + autism_group);
    } else if ((a >= 600 && a <= 711 && autism_dscore === 72 && sex === "หญิง") || (a >= 600 && a <= 711 && autism_dscore === 71 && sex === "หญิง")) {
       autism_tscore = 81;
      //console.log"autism_tscore = " + autism_tscore);
       autism_group = 4;
      //console.log"autism6-711G_tscore = " + autism_group);
    } else if ((a >= 600 && a <= 711 && autism_dscore === 70 && sex === "หญิง") || (a >= 600 && a <= 711 && autism_dscore === 69 && sex === "หญิง")) {
       autism_tscore = 80;
      //console.log"autism_tscore = " + autism_tscore);
       autism_group = 3;
      //console.log"autism6-711G_tscore = " + autism_group);
    } else if ((a >= 600 && a <= 711 && autism_dscore === 68 && sex === "หญิง") || (a >= 600 && a <= 711 && autism_dscore === 67 && sex === "หญิง")) {
       autism_tscore = 79;
      //console.log"autism_tscore = " + autism_tscore);
       autism_group = 3;
      //console.log"autism6-711G_tscore = " + autism_group);
    } else if ((a >= 600 && a <= 711 && autism_dscore === 66 && sex === "หญิง")) {
       autism_tscore = 78;
      //console.log"autism_tscore = " + autism_tscore);
       autism_group = 3;
      //console.log"autism6-711G_tscore = " + autism_group);
    } else if ((a >= 600 && a <= 711 && autism_dscore === 65 && sex === "หญิง") || (a >= 600 && a <= 711 && autism_dscore === 64 && sex === "หญิง")) {
       autism_tscore = 77;
      //console.log"autism_tscore = " + autism_tscore);
       autism_group = 3;
      //console.log"autism6-711G_tscore = " + autism_group);
    } else if ((a >= 600 && a <= 711 && autism_dscore === 63 && sex === "หญิง") || (a >= 600 && a <= 711 && autism_dscore === 62 && sex === "หญิง")) {
       autism_tscore = 76;
      //console.log"autism_tscore = " + autism_tscore);
       autism_group = 3;
      //console.log"autism6-711G_tscore = " + autism_group);
    } else if ((a >= 600 && a <= 711 && autism_dscore === 61 && sex === "หญิง") || (a >= 600 && a <= 711 && autism_dscore === 60 && sex === "หญิง")) {
       autism_tscore = 75;
      //console.log"autism_tscore = " + autism_tscore);
       autism_group = 3;
      //console.log"autism6-711G_tscore = " + autism_group);
    } else if ((a >= 600 && a <= 711 && autism_dscore === 59 && sex === "หญิง") || (a >= 600 && a <= 711 && autism_dscore === 58 && sex === "หญิง")) {
       autism_tscore = 74;
      //console.log"autism_tscore = " + autism_tscore);
       autism_group = 3;
      //console.log"autism6-711G_tscore = " + autism_group);
    } else if ((a >= 600 && a <= 711 && autism_dscore === 57 && sex === "หญิง") || (a >= 600 && a <= 711 && autism_dscore === 56 && sex === "หญิง")) {
       autism_tscore = 73;
      //console.log"autism_tscore = " + autism_tscore);
       autism_group = 3;
      //console.log"autism6-711G_tscore = " + autism_group);
    } else if ((a >= 600 && a <= 711 && autism_dscore === 55 && sex === "หญิง") || (a >= 600 && a <= 711 && autism_dscore === 54 && sex === "หญิง")) {
       autism_tscore = 72;
      //console.log"autism_tscore = " + autism_tscore);
       autism_group = 3;
      //console.log"autism6-711G_tscore = " + autism_group);
    } else if ((a >= 600 && a <= 711 && autism_dscore === 53 && sex === "หญิง") || (a >= 600 && a <= 711 && autism_dscore === 52 && sex === "หญิง")) {
       autism_tscore = 71;
      //console.log"autism_tscore = " + autism_tscore);
       autism_group = 3;
      //console.log"autism6-711G_tscore = " + autism_group);
    } else if ((a >= 600 && a <= 711 && autism_dscore === 51 && sex === "หญิง")) {
       autism_tscore = 70;
      //console.log"autism_tscore = " + autism_tscore);
       autism_group = 2;
      //console.log"autism6-711G_tscore = " + autism_group);
    } else if ((a >= 600 && a <= 711 && autism_dscore === 50 && sex === "หญิง") || (a >= 600 && a <= 711 && autism_dscore === 49 && sex === "หญิง")) {
       autism_tscore = 69;
      //console.log"autism_tscore = " + autism_tscore);
       autism_group = 2;
      //console.log"autism6-711G_tscore = " + autism_group);
    } else if ((a >= 600 && a <= 711 && autism_dscore === 48 && sex === "หญิง") || (a >= 600 && a <= 711 && autism_dscore === 47 && sex === "หญิง")) {
       autism_tscore = 68;
      //console.log"autism_tscore = " + autism_tscore);
       autism_group = 2;
      //console.log"autism6-711G_tscore = " + autism_group);
    } else if ((a >= 600 && a <= 711 && autism_dscore === 46 && sex === "หญิง") || (a >= 600 && a <= 711 && autism_dscore === 45 && sex === "หญิง")) {
       autism_tscore = 67;
      //console.log"autism_tscore = " + autism_tscore);
       autism_group = 2;
      //console.log"autism6-711G_tscore = " + autism_group);
    } else if ((a >= 600 && a <= 711 && autism_dscore === 44 && sex === "หญิง") || (a >= 600 && a <= 711 && autism_dscore === 43 && sex === "หญิง")) {
       autism_tscore = 66;
      //console.log"autism_tscore = " + autism_tscore);
       autism_group = 2;
      //console.log"autism6-711G_tscore = " + autism_group);
    } else if ((a >= 600 && a <= 711 && autism_dscore === 42 && sex === "หญิง") || (a >= 600 && a <= 711 && autism_dscore === 41 && sex === "หญิง")) {
       autism_tscore = 65;
      //console.log"autism_tscore = " + autism_tscore);
       autism_group = 2;
      //console.log"autism6-711G_tscore = " + autism_group);
    } else if ((a >= 600 && a <= 711 && autism_dscore === 40 && sex === "หญิง") || (a >= 600 && a <= 711 && autism_dscore === 39 && sex === "หญิง")) {
       autism_tscore = 64;
      //console.log"autism_tscore = " + autism_tscore);
       autism_group = 2;
      //console.log"autism6-711G_tscore = " + autism_group);
    } else if ((a >= 600 && a <= 711 && autism_dscore === 38 && sex === "หญิง") || (a >= 600 && a <= 711 && autism_dscore === 37 && sex === "หญิง")) {
       autism_tscore = 63;
      //console.log"autism_tscore = " + autism_tscore);
       autism_group = 2;
      //console.log"autism6-711G_tscore = " + autism_group);
    } else if ((a >= 600 && a <= 711 && autism_dscore === 36 && sex === "หญิง")) {
       autism_tscore = 62;
      //console.log"autism_tscore = " + autism_tscore);
       autism_group = 2;
      //console.log"autism6-711G_tscore = " + autism_group);
    } else if ((a >= 600 && a <= 711 && autism_dscore === 35 && sex === "หญิง") || (a >= 600 && a <= 711 && autism_dscore === 34 && sex === "หญิง")) {
       autism_tscore = 61;
      //console.log"autism_tscore = " + autism_tscore);
       autism_group = 2;
      //console.log"autism6-711G_tscore = " + autism_group);
    } else if ((a >= 600 && a <= 711 && autism_dscore === 33 && sex === "หญิง") || (a >= 600 && a <= 711 && autism_dscore === 32 && sex === "หญิง")) {
       autism_tscore = 60;
      //console.log"autism_tscore = " + autism_tscore);
       autism_group = 1;
      //console.log"autism6-711G_tscore = " + autism_group);
    } else if ((a >= 600 && a <= 711 && autism_dscore === 31 && sex === "หญิง") || (a >= 600 && a <= 711 && autism_dscore === 30 && sex === "หญิง")) {
       autism_tscore = 59;
      //console.log"autism_tscore = " + autism_tscore);
       autism_group = 1;
      //console.log"autism6-711G_tscore = " + autism_group);
    } else if ((a >= 600 && a <= 711 && autism_dscore === 29 && sex === "หญิง") || (a >= 600 && a <= 711 && autism_dscore === 28 && sex === "หญิง")) {
       autism_tscore = 58;
      //console.log"autism_tscore = " + autism_tscore);
       autism_group = 1;
      //console.log"autism6-711G_tscore = " + autism_group);
    } else if ((a >= 600 && a <= 711 && autism_dscore === 27 && sex === "หญิง") || (a >= 600 && a <= 711 && autism_dscore === 26 && sex === "หญิง")) {
       autism_tscore = 57;
      //console.log"autism_tscore = " + autism_tscore);
       autism_group = 1;
      //console.log"autism6-711G_tscore = " + autism_group);
    } else if ((a >= 600 && a <= 711 && autism_dscore === 25 && sex === "หญิง") || (a >= 600 && a <= 711 && autism_dscore === 24 && sex === "หญิง")) {
       autism_tscore = 56;
      //console.log"autism_tscore = " + autism_tscore);
       autism_group = 1;
      //console.log"autism6-711G_tscore = " + autism_group);
    } else if ((a >= 600 && a <= 711 && autism_dscore === 23 && sex === "หญิง") || (a >= 600 && a <= 711 && autism_dscore === 22 && sex === "หญิง")) {
       autism_tscore = 55;
      //console.log"autism_tscore = " + autism_tscore);
       autism_group = 1;
      //console.log"autism6-711G_tscore = " + autism_group);
    } else if ((a >= 600 && a <= 711 && autism_dscore === 21 && sex === "หญิง")) {
       autism_tscore = 54;
      //console.log"autism_tscore = " + autism_tscore);
       autism_group = 1;
      //console.log"autism6-711G_tscore = " + autism_group);
    } else if ((a >= 600 && a <= 711 && autism_dscore === 20 && sex === "หญิง") || (a >= 600 && a <= 711 && autism_dscore === 19 && sex === "หญิง")) {
       autism_tscore = 53;
      //console.log"autism_tscore = " + autism_tscore);
       autism_group = 1;
      //console.log"autism6-711G_tscore = " + autism_group);
    } else if ((a >= 600 && a <= 711 && autism_dscore === 18 && sex === "หญิง") || (a >= 600 && a <= 711 && autism_dscore === 17 && sex === "หญิง")) {
       autism_tscore = 52;
      //console.log"autism_tscore = " + autism_tscore);
       autism_group = 1;
      //console.log"autism6-711G_tscore = " + autism_group);
    } else if ((a >= 600 && a <= 711 && autism_dscore === 16 && sex === "หญิง") || (a >= 600 && a <= 711 && autism_dscore === 15 && sex === "หญิง")) {
       autism_tscore = 51;
      //console.log"autism_tscore = " + autism_tscore);
       autism_group = 1;
      //console.log"autism6-711G_tscore = " + autism_group);
    } else if ((a >= 600 && a <= 711 && autism_dscore === 14 && sex === "หญิง") || (a >= 600 && a <= 711 && autism_dscore === 13 && sex === "หญิง")) {
       autism_tscore = 50;
      //console.log"autism_tscore = " + autism_tscore);
       autism_group = 1;
      //console.log"autism6-711G_tscore = " + autism_group);
    } else if ((a >= 600 && a <= 711 && autism_dscore === 12 && sex === "หญิง") || (a >= 600 && a <= 711 && autism_dscore === 11 && sex === "หญิง")) {
       autism_tscore = 49;
      //console.log"autism_tscore = " + autism_tscore);
       autism_group = 1;
      //console.log"autism6-711G_tscore = " + autism_group);
    } else if ((a >= 600 && a <= 711 && autism_dscore === 10 && sex === "หญิง") || (a >= 600 && a <= 711 && autism_dscore === 9 && sex === "หญิง")) {
       autism_tscore = 48;
      //console.log"autism_tscore = " + autism_tscore);
       autism_group = 1;
      //console.log"autism6-711G_tscore = " + autism_group);
    } else if ((a >= 600 && a <= 711 && autism_dscore === 8 && sex === "หญิง") || (a >= 600 && a <= 711 && autism_dscore === 7 && sex === "หญิง")) {
       autism_tscore = 47;
      //console.log"autism_tscore = " + autism_tscore);
       autism_group = 1;
      //console.log"autism6-711G_tscore = " + autism_group);
    } else if ((a >= 600 && a <= 711 && autism_dscore === 6 && sex === "หญิง")) {
       autism_tscore = 46;
      //console.log"autism_tscore = " + autism_tscore);
       autism_group = 1;
      //console.log"autism6-711G_tscore = " + autism_group);
    } else if ((a >= 600 && a <= 711 && autism_dscore === 5 && sex === "หญิง") || (a >= 600 && a <= 711 && autism_dscore === 4 && sex === "หญิง")) {
       autism_tscore = 45;
      //console.log"autism_tscore = " + autism_tscore);
       autism_group = 1;
      //console.log"autism6-711G_tscore = " + autism_group);
    } else if ((a >= 600 && a <= 711 && autism_dscore === 3 && sex === "หญิง") || (a >= 600 && a <= 711 && autism_dscore === 2 && sex === "หญิง")) {
       autism_tscore = 44;
      //console.log"autism_tscore = " + autism_tscore);
       autism_group = 1;
      //console.log"autism6-711G_tscore = " + autism_group);
    } else if ((a >= 600 && a <= 711 && autism_dscore === 1 && sex === "หญิง") || (a >= 600 && a <= 711 && autism_dscore === 0 && sex === "หญิง")) {
       autism_tscore = 43;
      //console.log"autism_tscore = " + autism_tscore);
       autism_group = 1;
      //console.log"autism6-711G_tscore = " + autism_group);
    }

    else if (a >= 800 && a <= 911 && autism_dscore >= 112 && sex === "หญิง") {
       autism_tscore = 100;
      //console.log"autism_tscore = " + autism_tscore);
       autism_group = 4;
      //console.log"autism8-911G_tscore = " + autism_group);
    } else if ((a >= 800 && a <= 911 && autism_dscore === 111 && sex === "หญิง") || (a >= 800 && a <= 911 && autism_dscore === 110 && sex === "หญิง")) {
       autism_tscore = 99;
      //console.log"autism_tscore = " + autism_tscore);
       autism_group = 4;
      //console.log"autism8-911G_tscore = " + autism_group);
    } else if ((a >= 800 && a <= 911 && autism_dscore === 109 && sex === "หญิง") || (a >= 800 && a <= 911 && autism_dscore === 108 && sex === "หญิง")) {
       autism_tscore = 98;
      //console.log"autism_tscore = " + autism_tscore);
       autism_group = 4;
      //console.log"autism8-911G_tscore = " + autism_group);
    } else if ((a >= 800 && a <= 911 && autism_dscore === 107 && sex === "หญิง") || (a >= 800 && a <= 911 && autism_dscore === 106 && sex === "หญิง")) {
       autism_tscore = 97;
      //console.log"autism_tscore = " + autism_tscore);
       autism_group = 4;
      //console.log"autism8-911G_tscore = " + autism_group);
    } else if ((a >= 800 && a <= 911 && autism_dscore === 105 && sex === "หญิง") || (a >= 800 && a <= 911 && autism_dscore === 104 && sex === "หญิง")) {
       autism_tscore = 96;
      //console.log"autism_tscore = " + autism_tscore);
       autism_group = 4;
      //console.log"autism8-911G_tscore = " + autism_group);
    } else if ((a >= 800 && a <= 911 && autism_dscore === 103 && sex === "หญิง") || (a >= 800 && a <= 911 && autism_dscore === 102 && sex === "หญิง")) {
       autism_tscore = 95;
      //console.log"autism_tscore = " + autism_tscore);
       autism_group = 4;
      //console.log"autism8-911G_tscore = " + autism_group);
    } else if ((a >= 800 && a <= 911 && autism_dscore === 101 && sex === "หญิง") || (a >= 800 && a <= 911 && autism_dscore === 100 && sex === "หญิง")) {
       autism_tscore = 94;
      //console.log"autism_tscore = " + autism_tscore);
       autism_group = 4;
      //console.log"autism8-911G_tscore = " + autism_group);
    } else if ((a >= 800 && a <= 911 && autism_dscore === 99 && sex === "หญิง") || (a >= 800 && a <= 911 && autism_dscore === 98 && sex === "หญิง")) {
       autism_tscore = 93;
      //console.log"autism_tscore = " + autism_tscore);
       autism_group = 4;
      //console.log"autism8-911G_tscore = " + autism_group);
    } else if ((a >= 800 && a <= 911 && autism_dscore === 97 && sex === "หญิง") || (a >= 800 && a <= 911 && autism_dscore === 96 && sex === "หญิง")) {
       autism_tscore = 92;
      //console.log"autism_tscore = " + autism_tscore);
       autism_group = 4;
      //console.log"autism8-911G_tscore = " + autism_group);
    } else if ((a >= 800 && a <= 911 && autism_dscore === 95 && sex === "หญิง") || (a >= 800 && a <= 911 && autism_dscore === 94 && sex === "หญิง")) {
       autism_tscore = 91;
      //console.log"autism_tscore = " + autism_tscore);
       autism_group = 4;
      //console.log"autism8-911G_tscore = " + autism_group);
    } else if ((a >= 800 && a <= 911 && autism_dscore === 93 && sex === "หญิง") || (a >= 800 && a <= 911 && autism_dscore === 92 && sex === "หญิง")) {
       autism_tscore = 90;
      //console.log"autism_tscore = " + autism_tscore);
       autism_group = 4;
      //console.log"autism8-911G_tscore = " + autism_group);
    } else if ((a >= 800 && a <= 911 && autism_dscore === 91 && sex === "หญิง") || (a >= 800 && a <= 911 && autism_dscore === 90 && sex === "หญิง")) {
       autism_tscore = 89;
      //console.log"autism_tscore = " + autism_tscore);
       autism_group = 4;
      //console.log"autism8-911G_tscore = " + autism_group);
    } else if ((a >= 800 && a <= 911 && autism_dscore === 89 && sex === "หญิง") || (a >= 800 && a <= 911 && autism_dscore === 88 && sex === "หญิง")) {
       autism_tscore = 88;
      //console.log"autism_tscore = " + autism_tscore);
       autism_group = 4;
      //console.log"autism8-911G_tscore = " + autism_group);
    } else if ((a >= 800 && a <= 911 && autism_dscore === 87 && sex === "หญิง") || (a >= 800 && a <= 911 && autism_dscore === 86 && sex === "หญิง")) {
       autism_tscore = 87;
      //console.log"autism_tscore = " + autism_tscore);
       autism_group = 4;
      //console.log"autism8-911G_tscore = " + autism_group);
    } else if ((a >= 800 && a <= 911 && autism_dscore === 85 && sex === "หญิง") || (a >= 800 && a <= 911 && autism_dscore === 84 && sex === "หญิง")) {
       autism_tscore = 86;
      //console.log"autism_tscore = " + autism_tscore);
       autism_group = 4;
      //console.log"autism8-911G_tscore = " + autism_group);
    } else if ((a >= 800 && a <= 911 && autism_dscore === 83 && sex === "หญิง") || (a >= 800 && a <= 911 && autism_dscore === 82 && sex === "หญิง")) {
       autism_tscore = 85;
      //console.log"autism_tscore = " + autism_tscore);
       autism_group = 4;
      //console.log"autism8-911G_tscore = " + autism_group);
    } else if ((a >= 800 && a <= 911 && autism_dscore === 81 && sex === "หญิง") || (a >= 800 && a <= 911 && autism_dscore === 80 && sex === "หญิง")) {
       autism_tscore = 84;
      //console.log"autism_tscore = " + autism_tscore);
       autism_group = 4;
      //console.log"autism8-911G_tscore = " + autism_group);
    } else if ((a >= 800 && a <= 911 && autism_dscore === 79 && sex === "หญิง") || (a >= 800 && a <= 911 && autism_dscore === 78 && sex === "หญิง")) {
       autism_tscore = 83;
      //console.log"autism_tscore = " + autism_tscore);
       autism_group = 4;
      //console.log"autism8-911G_tscore = " + autism_group);
    } else if ((a >= 800 && a <= 911 && autism_dscore === 77 && sex === "หญิง") || (a >= 800 && a <= 911 && autism_dscore === 76 && sex === "หญิง")) {
       autism_tscore = 82;
      //console.log"autism_tscore = " + autism_tscore);
       autism_group = 4;
      //console.log"autism8-911G_tscore = " + autism_group);
    } else if ((a >= 800 && a <= 911 && autism_dscore === 75 && sex === "หญิง") || (a >= 800 && a <= 911 && autism_dscore === 74 && sex === "หญิง")) {
       autism_tscore = 81;
      //console.log"autism_tscore = " + autism_tscore);
       autism_group = 4;
      //console.log"autism8-911G_tscore = " + autism_group);
    } else if ((a >= 800 && a <= 911 && autism_dscore === 73 && sex === "หญิง") || (a >= 800 && a <= 911 && autism_dscore === 72 && sex === "หญิง")) {
       autism_tscore = 80;
      //console.log"autism_tscore = " + autism_tscore);
       autism_group = 3;
      //console.log"autism8-911G_tscore = " + autism_group);
    } else if ((a >= 800 && a <= 911 && autism_dscore === 71 && sex === "หญิง") || (a >= 800 && a <= 911 && autism_dscore === 70 && sex === "หญิง")) {
       autism_tscore = 79;
      //console.log"autism_tscore = " + autism_tscore);
       autism_group = 3;
      //console.log"autism8-911G_tscore = " + autism_group);
    } else if ((a >= 800 && a <= 911 && autism_dscore === 69 && sex === "หญิง") || (a >= 800 && a <= 911 && autism_dscore === 68 && sex === "หญิง")) {
       autism_tscore = 78;
      //console.log"autism_tscore = " + autism_tscore);
       autism_group = 3;
      //console.log"autism8-911G_tscore = " + autism_group);
    } else if ((a >= 800 && a <= 911 && autism_dscore === 67 && sex === "หญิง")) {
       autism_tscore = 77;
      //console.log"autism_tscore = " + autism_tscore);
       autism_group = 3;
      //console.log"autism8-911G_tscore = " + autism_group);
    } else if ((a >= 800 && a <= 911 && autism_dscore === 66 && sex === "หญิง") || (a >= 800 && a <= 911 && autism_dscore === 65 && sex === "หญิง")) {
       autism_tscore = 76;
      //console.log"autism_tscore = " + autism_tscore);
       autism_group = 3;
      //console.log"autism8-911G_tscore = " + autism_group);
    } else if ((a >= 800 && a <= 911 && autism_dscore === 64 && sex === "หญิง") || (a >= 800 && a <= 911 && autism_dscore === 63 && sex === "หญิง")) {
       autism_tscore = 75;
      //console.log"autism_tscore = " + autism_tscore);
       autism_group = 3;
      //console.log"autism8-911G_tscore = " + autism_group);
    } else if ((a >= 800 && a <= 911 && autism_dscore === 62 && sex === "หญิง") || (a >= 800 && a <= 911 && autism_dscore === 61 && sex === "หญิง")) {
       autism_tscore = 74;
      //console.log"autism_tscore = " + autism_tscore);
       autism_group = 3;
      //console.log"autism8-911G_tscore = " + autism_group);
    } else if ((a >= 800 && a <= 911 && autism_dscore === 60 && sex === "หญิง") || (a >= 800 && a <= 911 && autism_dscore === 59 && sex === "หญิง")) {
       autism_tscore = 73;
      //console.log"autism_tscore = " + autism_tscore);
       autism_group = 3;
      //console.log"autism8-911G_tscore = " + autism_group);
    } else if ((a >= 800 && a <= 911 && autism_dscore === 58 && sex === "หญิง") || (a >= 800 && a <= 911 && autism_dscore === 57 && sex === "หญิง")) {
       autism_tscore = 72;
      //console.log"autism_tscore = " + autism_tscore);
       autism_group = 3;
      //console.log"autism8-911G_tscore = " + autism_group);
    } else if ((a >= 800 && a <= 911 && autism_dscore === 56 && sex === "หญิง") || (a >= 800 && a <= 911 && autism_dscore === 55 && sex === "หญิง")) {
       autism_tscore = 71;
      //console.log"autism_tscore = " + autism_tscore);
       autism_group = 3;
      //console.log"autism8-911G_tscore = " + autism_group);
    } else if ((a >= 800 && a <= 911 && autism_dscore === 54 && sex === "หญิง") || (a >= 800 && a <= 911 && autism_dscore === 53 && sex === "หญิง")) {
       autism_tscore = 70;
      //console.log"autism_tscore = " + autism_tscore);
       autism_group = 2;
      //console.log"autism8-911G_tscore = " + autism_group);
    } else if ((a >= 800 && a <= 911 && autism_dscore === 52 && sex === "หญิง") || (a >= 800 && a <= 911 && autism_dscore === 51 && sex === "หญิง")) {
       autism_tscore = 69;
      //console.log"autism_tscore = " + autism_tscore);
       autism_group = 2;
      //console.log"autism8-911G_tscore = " + autism_group);
    } else if ((a >= 800 && a <= 911 && autism_dscore === 50 && sex === "หญิง") || (a >= 800 && a <= 911 && autism_dscore === 49 && sex === "หญิง")) {
       autism_tscore = 68;
      //console.log"autism_tscore = " + autism_tscore);
       autism_group = 2;
      //console.log"autism8-911G_tscore = " + autism_group);
    } else if ((a >= 800 && a <= 911 && autism_dscore === 48 && sex === "หญิง") || (a >= 800 && a <= 911 && autism_dscore === 47 && sex === "หญิง")) {
       autism_tscore = 67;
      //console.log"autism_tscore = " + autism_tscore);
       autism_group = 2;
      //console.log"autism8-911G_tscore = " + autism_group);
    } else if ((a >= 800 && a <= 911 && autism_dscore === 46 && sex === "หญิง") || (a >= 800 && a <= 911 && autism_dscore === 45 && sex === "หญิง")) {
       autism_tscore = 66;
      //console.log"autism_tscore = " + autism_tscore);
       autism_group = 2;
      //console.log"autism8-911G_tscore = " + autism_group);
    } else if ((a >= 800 && a <= 911 && autism_dscore === 44 && sex === "หญิง") || (a >= 800 && a <= 911 && autism_dscore === 43 && sex === "หญิง")) {
       autism_tscore = 65;
      //console.log"autism_tscore = " + autism_tscore);
       autism_group = 2;
      //console.log"autism8-911G_tscore = " + autism_group);
    } else if ((a >= 800 && a <= 911 && autism_dscore === 42 && sex === "หญิง") || (a >= 800 && a <= 911 && autism_dscore === 41 && sex === "หญิง")) {
       autism_tscore = 64;
      //console.log"autism_tscore = " + autism_tscore);
       autism_group = 2;
      //console.log"autism8-911G_tscore = " + autism_group);
    } else if ((a >= 800 && a <= 911 && autism_dscore === 40 && sex === "หญิง") || (a >= 800 && a <= 911 && autism_dscore === 39 && sex === "หญิง")) {
       autism_tscore = 63;
      //console.log"autism_tscore = " + autism_tscore);
       autism_group = 2;
      //console.log"autism8-911G_tscore = " + autism_group);
    } else if ((a >= 800 && a <= 911 && autism_dscore === 38 && sex === "หญิง") || (a >= 800 && a <= 911 && autism_dscore === 37 && sex === "หญิง")) {
       autism_tscore = 62;
      //console.log"autism_tscore = " + autism_tscore);
       autism_group = 2;
      //console.log"autism8-911G_tscore = " + autism_group);
    } else if ((a >= 800 && a <= 911 && autism_dscore === 36 && sex === "หญิง") || (a >= 800 && a <= 911 && autism_dscore === 35 && sex === "หญิง")) {
       autism_tscore = 61;
      //console.log"autism_tscore = " + autism_tscore);
       autism_group = 2;
      //console.log"autism8-911G_tscore = " + autism_group);
    } else if ((a >= 800 && a <= 911 && autism_dscore === 34 && sex === "หญิง") || (a >= 800 && a <= 911 && autism_dscore === 33 && sex === "หญิง")) {
       autism_tscore = 60;
      //console.log"autism_tscore = " + autism_tscore);
       autism_group = 1;
      //console.log"autism8-911G_tscore = " + autism_group);
    } else if ((a >= 800 && a <= 911 && autism_dscore === 32 && sex === "หญิง") || (a >= 800 && a <= 911 && autism_dscore === 31 && sex === "หญิง")) {
       autism_tscore = 59;
      //console.log"autism_tscore = " + autism_tscore);
       autism_group = 1;
      //console.log"autism8-911G_tscore = " + autism_group);
    } else if ((a >= 800 && a <= 911 && autism_dscore === 30 && sex === "หญิง") || (a >= 800 && a <= 911 && autism_dscore === 29 && sex === "หญิง")) {
       autism_tscore = 58;
      //console.log"autism_tscore = " + autism_tscore);
       autism_group = 1;
      //console.log"autism8-911G_tscore = " + autism_group);
    } else if ((a >= 800 && a <= 911 && autism_dscore === 28 && sex === "หญิง") || (a >= 800 && a <= 911 && autism_dscore === 27 && sex === "หญิง")) {
       autism_tscore = 57;
      //console.log"autism_tscore = " + autism_tscore);
       autism_group = 1;
      //console.log"autism8-911G_tscore = " + autism_group);
    } else if ((a >= 800 && a <= 911 && autism_dscore === 26 && sex === "หญิง") || (a >= 800 && a <= 911 && autism_dscore === 25 && sex === "หญิง")) {
       autism_tscore = 56;
      //console.log"autism_tscore = " + autism_tscore);
       autism_group = 1;
      //console.log"autism8-911G_tscore = " + autism_group);
    } else if ((a >= 800 && a <= 911 && autism_dscore === 24 && sex === "หญิง") || (a >= 800 && a <= 911 && autism_dscore === 23 && sex === "หญิง")) {
       autism_tscore = 55;
      //console.log"autism_tscore = " + autism_tscore);
       autism_group = 1;
      //console.log"autism8-911G_tscore = " + autism_group);
    } else if ((a >= 800 && a <= 911 && autism_dscore === 22 && sex === "หญิง") || (a >= 800 && a <= 911 && autism_dscore === 21 && sex === "หญิง")) {
       autism_tscore = 54;
      //console.log"autism_tscore = " + autism_tscore);
       autism_group = 1;
      //console.log"autism8-911G_tscore = " + autism_group);
    } else if ((a >= 800 && a <= 911 && autism_dscore === 20 && sex === "หญิง") || (a >= 800 && a <= 911 && autism_dscore === 19 && sex === "หญิง")) {
       autism_tscore = 53;
      //console.log"autism_tscore = " + autism_tscore);
       autism_group = 1;
      //console.log"autism8-911G_tscore = " + autism_group);
    } else if ((a >= 800 && a <= 911 && autism_dscore === 18 && sex === "หญิง") || (a >= 800 && a <= 911 && autism_dscore === 17 && sex === "หญิง")) {
       autism_tscore = 52;
      //console.log"autism_tscore = " + autism_tscore);
       autism_group = 1;
      //console.log"autism8-911G_tscore = " + autism_group);
    } else if ((a >= 800 && a <= 911 && autism_dscore === 16 && sex === "หญิง")) {
       autism_tscore = 51;
      //console.log"autism_tscore = " + autism_tscore);
       autism_group = 1;
      //console.log"autism8-911G_tscore = " + autism_group);
    } else if ((a >= 800 && a <= 911 && autism_dscore === 15 && sex === "หญิง") || (a >= 800 && a <= 911 && autism_dscore === 14 && sex === "หญิง")) {
       autism_tscore = 50;
      //console.log"autism_tscore = " + autism_tscore);
       autism_group = 1;
      //console.log"autism8-911G_tscore = " + autism_group);
    } else if ((a >= 800 && a <= 911 && autism_dscore === 13 && sex === "หญิง") || (a >= 800 && a <= 911 && autism_dscore === 12 && sex === "หญิง")) {
       autism_tscore = 49;
      //console.log"autism_tscore = " + autism_tscore);
       autism_group = 1;
      //console.log"autism8-911G_tscore = " + autism_group);
    } else if ((a >= 800 && a <= 911 && autism_dscore === 11 && sex === "หญิง") || (a >= 800 && a <= 911 && autism_dscore === 10 && sex === "หญิง")) {
       autism_tscore = 48;
      //console.log"autism_tscore = " + autism_tscore);
       autism_group = 1;
      //console.log"autism8-911G_tscore = " + autism_group);
    } else if ((a >= 800 && a <= 911 && autism_dscore === 9 && sex === "หญิง") || (a >= 800 && a <= 911 && autism_dscore === 8 && sex === "หญิง")) {
       autism_tscore = 47;
      //console.log"autism_tscore = " + autism_tscore);
       autism_group = 1;
      //console.log"autism8-911G_tscore = " + autism_group);
    } else if ((a >= 800 && a <= 911 && autism_dscore === 7 && sex === "หญิง") || (a >= 800 && a <= 911 && autism_dscore === 6 && sex === "หญิง")) {
       autism_tscore = 46;
      //console.log"autism_tscore = " + autism_tscore);
       autism_group = 1;
      //console.log"autism8-911G_tscore = " + autism_group);
    } else if ((a >= 800 && a <= 911 && autism_dscore === 5 && sex === "หญิง") || (a >= 800 && a <= 911 && autism_dscore === 4 && sex === "หญิง")) {
       autism_tscore = 45;
      //console.log"autism_tscore = " + autism_tscore);
       autism_group = 1;
      //console.log"autism8-911G_tscore = " + autism_group);
    } else if ((a >= 800 && a <= 911 && autism_dscore === 3 && sex === "หญิง") || (a >= 800 && a <= 911 && autism_dscore === 2 && sex === "หญิง")) {
       autism_tscore = 44;
      //console.log"autism_tscore = " + autism_tscore);
       autism_group = 1;
      //console.log"autism8-911G_tscore = " + autism_group);
    } else if ((a >= 800 && a <= 911 && autism_dscore === 1 && sex === "หญิง") || (a >= 800 && a <= 911 && autism_dscore === 0 && sex === "หญิง")) {
       autism_tscore = 43;
      //console.log"autism_tscore = " + autism_tscore);
       autism_group = 1;
      //console.log"autism8-911G_tscore = " + autism_group);
    }

    else if (a >= 1000 && a <= 1111 && autism_dscore >= 105 && sex === "หญิง") {
       autism_tscore = 100;
      //console.log"autism10-11G_tscore = " + autism_tscore);
       autism_group = 4;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1000 && a <= 1111 && autism_dscore === 104 && sex === "หญิง") || (a >= 1000 && a <= 1111 && autism_dscore === 103 && sex === "หญิง")) {
       autism_tscore = 99;
      //console.log"autism10-11G_tscore = " + autism_tscore);
       autism_group = 4;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1000 && a <= 1111 && autism_dscore === 102 && sex === "หญิง") || (a >= 1000 && a <= 1111 && autism_dscore === 101 && sex === "หญิง")) {
       autism_tscore = 98;
      //console.log"autism10-11G_tscore = " + autism_tscore);
       autism_group = 4;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1000 && a <= 1111 && autism_dscore === 100 && sex === "หญิง") || (a >= 1000 && a <= 1111 && autism_dscore === 99 && sex === "หญิง")) {
       autism_tscore = 97;
      //console.log"autism10-11G_tscore = " + autism_tscore);
       autism_group = 4;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1000 && a <= 1111 && autism_dscore === 98 && sex === "หญิง") || (a >= 1000 && a <= 1111 && autism_dscore === 97 && sex === "หญิง")) {
       autism_tscore = 96;
      //console.log"autism10-11G_tscore = " + autism_tscore);
       autism_group = 4;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1000 && a <= 1111 && autism_dscore === 96 && sex === "หญิง")) {
       autism_tscore = 95;
      //console.log"autism10-11G_tscore = " + autism_tscore);
       autism_group = 4;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1000 && a <= 1111 && autism_dscore === 95 && sex === "หญิง") || (a >= 1000 && a <= 1111 && autism_dscore === 94 && sex === "หญิง")) {
       autism_tscore = 94;
      //console.log"autism10-11G_tscore = " + autism_tscore);
       autism_group = 4;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1000 && a <= 1111 && autism_dscore === 93 && sex === "หญิง") || (a >= 1000 && a <= 1111 && autism_dscore === 92 && sex === "หญิง")) {
       autism_tscore = 93;
      //console.log"autism10-11G_tscore = " + autism_tscore);
       autism_group = 4;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1000 && a <= 1111 && autism_dscore === 91 && sex === "หญิง") || (a >= 1000 && a <= 1111 && autism_dscore === 90 && sex === "หญิง")) {
       autism_tscore = 92;
      //console.log"autism10-11G_tscore = " + autism_tscore);
       autism_group = 4;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1000 && a <= 1111 && autism_dscore === 89 && sex === "หญิง") || (a >= 1000 && a <= 1111 && autism_dscore === 88 && sex === "หญิง")) {
       autism_tscore = 91;
      //console.log"autism10-11G_tscore = " + autism_tscore);
       autism_group = 4;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1000 && a <= 1111 && autism_dscore === 87 && sex === "หญิง") || (a >= 1000 && a <= 1111 && autism_dscore === 86 && sex === "หญิง")) {
       autism_tscore = 90;
      //console.log"autism10-11G_tscore = " + autism_tscore);
       autism_group = 4;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1000 && a <= 1111 && autism_dscore === 85 && sex === "หญิง")) {
       autism_tscore = 89;
      //console.log"autism10-11G_tscore = " + autism_tscore);
       autism_group = 4;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1000 && a <= 1111 && autism_dscore === 84 && sex === "หญิง") || (a >= 1000 && a <= 1111 && autism_dscore === 83 && sex === "หญิง")) {
       autism_tscore = 88;
      //console.log"autism10-11G_tscore = " + autism_tscore);
       autism_group = 4;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1000 && a <= 1111 && autism_dscore === 82 && sex === "หญิง") || (a >= 1000 && a <= 1111 && autism_dscore === 81 && sex === "หญิง")) {
       autism_tscore = 87;
      //console.log"autism10-11G_tscore = " + autism_tscore);
       autism_group = 4;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1000 && a <= 1111 && autism_dscore === 80 && sex === "หญิง") || (a >= 1000 && a <= 1111 && autism_dscore === 79 && sex === "หญิง")) {
       autism_tscore = 86;
      //console.log"autism10-11G_tscore = " + autism_tscore);
       autism_group = 4;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1000 && a <= 1111 && autism_dscore === 78 && sex === "หญิง") || (a >= 1000 && a <= 1111 && autism_dscore === 77 && sex === "หญิง")) {
       autism_tscore = 85;
      //console.log"autism10-11G_tscore = " + autism_tscore);
       autism_group = 4;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1000 && a <= 1111 && autism_dscore === 76 && sex === "หญิง") || (a >= 1000 && a <= 1111 && autism_dscore === 75 && sex === "หญิง")) {
       autism_tscore = 84;
      //console.log"autism10-11G_tscore = " + autism_tscore);
       autism_group = 4;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1000 && a <= 1111 && autism_dscore === 74 && sex === "หญิง")) {
       autism_tscore = 83;
      //console.log"autism10-11G_tscore = " + autism_tscore);
       autism_group = 4;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1000 && a <= 1111 && autism_dscore === 73 && sex === "หญิง") || (a >= 1000 && a <= 1111 && autism_dscore === 72 && sex === "หญิง")) {
       autism_tscore = 82;
      //console.log"autism10-11G_tscore = " + autism_tscore);
       autism_group = 4;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1000 && a <= 1111 && autism_dscore === 71 && sex === "หญิง") || (a >= 1000 && a <= 1111 && autism_dscore === 70 && sex === "หญิง")) {
       autism_tscore = 81;
      //console.log"autism10-11G_tscore = " + autism_tscore);
       autism_group = 4;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1000 && a <= 1111 && autism_dscore === 69 && sex === "หญิง") || (a >= 1000 && a <= 1111 && autism_dscore === 68 && sex === "หญิง")) {
       autism_tscore = 80;
      //console.log"autism10-11G_tscore = " + autism_tscore);
       autism_group = 3;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1000 && a <= 1111 && autism_dscore === 67 && sex === "หญิง") || (a >= 1000 && a <= 1111 && autism_dscore === 66 && sex === "หญิง")) {
       autism_tscore = 79;
      //console.log"autism10-11G_tscore = " + autism_tscore);
       autism_group = 3;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1000 && a <= 1111 && autism_dscore === 65 && sex === "หญิง") || (a >= 1000 && a <= 1111 && autism_dscore === 64 && sex === "หญิง")) {
       autism_tscore = 78;
      //console.log"autism10-11G_tscore = " + autism_tscore);
       autism_group = 3;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1000 && a <= 1111 && autism_dscore === 63 && sex === "หญิง")) {
       autism_tscore = 77;
      //console.log"autism10-11G_tscore = " + autism_tscore);
       autism_group = 3;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1000 && a <= 1111 && autism_dscore === 62 && sex === "หญิง") || (a >= 1000 && a <= 1111 && autism_dscore === 61 && sex === "หญิง")) {
       autism_tscore = 76;
      //console.log"autism10-11G_tscore = " + autism_tscore);
       autism_group = 3;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1000 && a <= 1111 && autism_dscore === 60 && sex === "หญิง") || (a >= 1000 && a <= 1111 && autism_dscore === 59 && sex === "หญิง")) {
       autism_tscore = 75;
      //console.log"autism10-11G_tscore = " + autism_tscore);
       autism_group = 3;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1000 && a <= 1111 && autism_dscore === 58 && sex === "หญิง") || (a >= 1000 && a <= 1111 && autism_dscore === 57 && sex === "หญิง")) {
       autism_tscore = 74;
      //console.log"autism10-11G_tscore = " + autism_tscore);
       autism_group = 3;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1000 && a <= 1111 && autism_dscore === 56 && sex === "หญิง") || (a >= 1000 && a <= 1111 && autism_dscore === 55 && sex === "หญิง")) {
       autism_tscore = 73;
      //console.log"autism10-11G_tscore = " + autism_tscore);
       autism_group = 3;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1000 && a <= 1111 && autism_dscore === 54 && sex === "หญิง") || (a >= 1000 && a <= 1111 && autism_dscore === 53 && sex === "หญิง")) {
       autism_tscore = 72;
      //console.log"autism10-11G_tscore = " + autism_tscore);
       autism_group = 3;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1000 && a <= 1111 && autism_dscore === 52 && sex === "หญิง")) {
       autism_tscore = 71;
      //console.log"autism10-11G_tscore = " + autism_tscore);
       autism_group = 3;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1000 && a <= 1111 && autism_dscore === 51 && sex === "หญิง") || (a >= 1000 && a <= 1111 && autism_dscore === 50 && sex === "หญิง")) {
       autism_tscore = 70;
      //console.log"autism10-11G_tscore = " + autism_tscore);
       autism_group = 2;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1000 && a <= 1111 && autism_dscore === 49 && sex === "หญิง") || (a >= 1000 && a <= 1111 && autism_dscore === 48 && sex === "หญิง")) {
       autism_tscore = 69;
      //console.log"autism10-11G_tscore = " + autism_tscore);
       autism_group = 2;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1000 && a <= 1111 && autism_dscore === 47 && sex === "หญิง") || (a >= 1000 && a <= 1111 && autism_dscore === 46 && sex === "หญิง")) {
       autism_tscore = 68;
      //console.log"autism10-11G_tscore = " + autism_tscore);
       autism_group = 2;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1000 && a <= 1111 && autism_dscore === 45 && sex === "หญิง") || (a >= 1000 && a <= 1111 && autism_dscore === 44 && sex === "หญิง")) {
       autism_tscore = 67;
      //console.log"autism10-11G_tscore = " + autism_tscore);
       autism_group = 2;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1000 && a <= 1111 && autism_dscore === 43 && sex === "หญิง") || (a >= 1000 && a <= 1111 && autism_dscore === 42 && sex === "หญิง")) {
       autism_tscore = 66;
      //console.log"autism10-11G_tscore = " + autism_tscore);
       autism_group = 2;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1000 && a <= 1111 && autism_dscore === 41 && sex === "หญิง")) {
       autism_tscore = 65;
      //console.log"autism10-11G_tscore = " + autism_tscore);
       autism_group = 2;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1000 && a <= 1111 && autism_dscore === 40 && sex === "หญิง") || (a >= 1000 && a <= 1111 && autism_dscore === 39 && sex === "หญิง")) {
       autism_tscore = 64;
      //console.log"autism10-11G_tscore = " + autism_tscore);
       autism_group = 2;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1000 && a <= 1111 && autism_dscore === 38 && sex === "หญิง") || (a >= 1000 && a <= 1111 && autism_dscore === 37 && sex === "หญิง")) {
       autism_tscore = 63;
      //console.log"autism10-11G_tscore = " + autism_tscore);
       autism_group = 2;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1000 && a <= 1111 && autism_dscore === 36 && sex === "หญิง") || (a >= 1000 && a <= 1111 && autism_dscore === 35 && sex === "หญิง")) {
       autism_tscore = 62;
      //console.log"autism10-11G_tscore = " + autism_tscore);
       autism_group = 2;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1000 && a <= 1111 && autism_dscore === 34 && sex === "หญิง") || (a >= 1000 && a <= 1111 && autism_dscore === 33 && sex === "หญิง")) {
       autism_tscore = 61;
      //console.log"autism10-11G_tscore = " + autism_tscore);
       autism_group = 2;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1000 && a <= 1111 && autism_dscore === 32 && sex === "หญิง") || (a >= 1000 && a <= 1111 && autism_dscore === 31 && sex === "หญิง")) {
       autism_tscore = 60;
      //console.log"autism10-11G_tscore = " + autism_tscore);
       autism_group = 1;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1000 && a <= 1111 && autism_dscore === 30 && sex === "หญิง")) {
       autism_tscore = 59;
      //console.log"autism10-11G_tscore = " + autism_tscore);
       autism_group = 1;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1000 && a <= 1111 && autism_dscore === 29 && sex === "หญิง") || (a >= 1000 && a <= 1111 && autism_dscore === 28 && sex === "หญิง")) {
       autism_tscore = 58;
      //console.log"autism10-11G_tscore = " + autism_tscore);
       autism_group = 1;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1000 && a <= 1111 && autism_dscore === 27 && sex === "หญิง") || (a >= 1000 && a <= 1111 && autism_dscore === 26 && sex === "หญิง")) {
       autism_tscore = 57;
      //console.log"autism10-11G_tscore = " + autism_tscore);
       autism_group = 1;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1000 && a <= 1111 && autism_dscore === 25 && sex === "หญิง") || (a >= 1000 && a <= 1111 && autism_dscore === 24 && sex === "หญิง")) {
       autism_tscore = 56;
      //console.log"autism10-11G_tscore = " + autism_tscore);
       autism_group = 1;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1000 && a <= 1111 && autism_dscore === 23 && sex === "หญิง") || (a >= 1000 && a <= 1111 && autism_dscore === 22 && sex === "หญิง")) {
       autism_tscore = 55;
      //console.log"autism10-11G_tscore = " + autism_tscore);
       autism_group = 1;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1000 && a <= 1111 && autism_dscore === 21 && sex === "หญิง") || (a >= 1000 && a <= 1111 && autism_dscore === 20 && sex === "หญิง")) {
       autism_tscore = 54;
      //console.log"autism10-11G_tscore = " + autism_tscore);
       autism_group = 1;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1000 && a <= 1111 && autism_dscore === 19 && sex === "หญิง")) {
       autism_tscore = 53;
      //console.log"autism10-11G_tscore = " + autism_tscore);
       autism_group = 1;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1000 && a <= 1111 && autism_dscore === 18 && sex === "หญิง") || (a >= 1000 && a <= 1111 && autism_dscore === 17 && sex === "หญิง")) {
       autism_tscore = 52;
      //console.log"autism10-11G_tscore = " + autism_tscore);
       autism_group = 1;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1000 && a <= 1111 && autism_dscore === 16 && sex === "หญิง") || (a >= 1000 && a <= 1111 && autism_dscore === 15 && sex === "หญิง")) {
       autism_tscore = 51;
      //console.log"autism10-11G_tscore = " + autism_tscore);
       autism_group = 1;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1000 && a <= 1111 && autism_dscore === 14 && sex === "หญิง") || (a >= 1000 && a <= 1111 && autism_dscore === 13 && sex === "หญิง")) {
       autism_tscore = 50;
      //console.log"autism10-11G_tscore = " + autism_tscore);
       autism_group = 1;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1000 && a <= 1111 && autism_dscore === 12 && sex === "หญิง") || (a >= 1000 && a <= 1111 && autism_dscore === 11 && sex === "หญิง")) {
       autism_tscore = 49;
      //console.log"autism10-11G_tscore = " + autism_tscore);
       autism_group = 1;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1000 && a <= 1111 && autism_dscore === 10 && sex === "หญิง") || (a >= 1000 && a <= 1111 && autism_dscore === 9 && sex === "หญิง")) {
       autism_tscore = 48;
      //console.log"autism10-11G_tscore = " + autism_tscore);
       autism_group = 1;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1000 && a <= 1111 && autism_dscore === 8 && sex === "หญิง")) {
       autism_tscore = 47;
      //console.log"autism10-11G_tscore = " + autism_tscore);
       autism_group = 1;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1000 && a <= 1111 && autism_dscore === 7 && sex === "หญิง") || (a >= 1000 && a <= 1111 && autism_dscore === 6 && sex === "หญิง")) {
       autism_tscore = 46;
      //console.log"autism10-11G_tscore = " + autism_tscore);
       autism_group = 1;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1000 && a <= 1111 && autism_dscore === 5 && sex === "หญิง") || (a >= 1000 && a <= 1111 && autism_dscore === 4 && sex === "หญิง")) {
       autism_tscore = 45;
      //console.log"autism10-11G_tscore = " + autism_tscore);
       autism_group = 1;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1000 && a <= 1111 && autism_dscore === 3 && sex === "หญิง") || (a >= 1000 && a <= 1111 && autism_dscore === 2 && sex === "หญิง")) {
       autism_tscore = 44;
      //console.log"autism10-11G_tscore = " + autism_tscore);
       autism_group = 1;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1000 && a <= 1111 && autism_dscore === 1 && sex === "หญิง") || (a >= 1000 && a <= 1111 && autism_dscore === 0 && sex === "หญิง")) {
       autism_tscore = 43;
      //console.log"autism10-11G_tscore = " + autism_tscore);
       autism_group = 1;
      //console.log"autism_group = " + autism_group);
    }

    else if (a >= 1200 && a <= 1311 && autism_dscore >= 105 && sex === "หญิง") {
       autism_tscore = 100;
      //console.log"autism12-13G_tscore = " + autism_tscore);
       autism_group = 4;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1200 && a <= 1311 && autism_dscore === 104 && sex === "หญิง") || (a >= 1200 && a <= 1311 && autism_dscore === 103 && sex === "หญิง")) {
       autism_tscore = 99;
      //console.log"autism12-13G_tscore = " + autism_tscore);
       autism_group = 4;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1200 && a <= 1311 && autism_dscore === 102 && sex === "หญิง")) {
       autism_tscore = 98;
      //console.log"autism12-13G_tscore = " + autism_tscore);
       autism_group = 4;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1200 && a <= 1311 && autism_dscore === 101 && sex === "หญิง") || (a >= 1200 && a <= 1311 && autism_dscore === 100 && sex === "หญิง")) {
       autism_tscore = 97;
      //console.log"autism12-13G_tscore = " + autism_tscore);
       autism_group = 4;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1200 && a <= 1311 && autism_dscore === 99 && sex === "หญิง") || (a >= 1200 && a <= 1311 && autism_dscore === 98 && sex === "หญิง")) {
       autism_tscore = 96;
      //console.log"autism12-13G_tscore = " + autism_tscore);
       autism_group = 4;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1200 && a <= 1311 && autism_dscore === 97 && sex === "หญิง") || (a >= 1200 && a <= 1311 && autism_dscore === 96 && sex === "หญิง")) {
       autism_tscore = 95;
      //console.log"autism12-13G_tscore = " + autism_tscore);
       autism_group = 4;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1200 && a <= 1311 && autism_dscore === 95 && sex === "หญิง") || (a >= 1200 && a <= 1311 && autism_dscore === 94 && sex === "หญิง")) {
       autism_tscore = 94;
      //console.log"autism12-13G_tscore = " + autism_tscore);
       autism_group = 4;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1200 && a <= 1311 && autism_dscore === 93 && sex === "หญิง")) {
       autism_tscore = 93;
      //console.log"autism12-13G_tscore = " + autism_tscore);
       autism_group = 4;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1200 && a <= 1311 && autism_dscore === 92 && sex === "หญิง") || (a >= 1200 && a <= 1311 && autism_dscore === 91 && sex === "หญิง")) {
       autism_tscore = 92;
      //console.log"autism12-13G_tscore = " + autism_tscore);
       autism_group = 4;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1200 && a <= 1311 && autism_dscore === 90 && sex === "หญิง") || (a >= 1200 && a <= 1311 && autism_dscore === 89 && sex === "หญิง")) {
       autism_tscore = 91;
      //console.log"autism12-13G_tscore = " + autism_tscore);
       autism_group = 4;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1200 && a <= 1311 && autism_dscore === 88 && sex === "หญิง") || (a >= 1200 && a <= 1311 && autism_dscore === 87 && sex === "หญิง")) {
       autism_tscore = 90;
      //console.log"autism12-13G_tscore = " + autism_tscore);
       autism_group = 4;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1200 && a <= 1311 && autism_dscore === 86 && sex === "หญิง") || (a >= 1200 && a <= 1311 && autism_dscore === 85 && sex === "หญิง")) {
       autism_tscore = 89;
      //console.log"autism12-13G_tscore = " + autism_tscore);
       autism_group = 4;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1200 && a <= 1311 && autism_dscore === 84 && sex === "หญิง") || (a >= 1200 && a <= 1311 && autism_dscore === 83 && sex === "หญิง")) {
       autism_tscore = 88;
      //console.log"autism12-13G_tscore = " + autism_tscore);
       autism_group = 4;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1200 && a <= 1311 && autism_dscore === 82 && sex === "หญิง")) {
       autism_tscore = 87;
      //console.log"autism12-13G_tscore = " + autism_tscore);
       autism_group = 4;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1200 && a <= 1311 && autism_dscore === 81 && sex === "หญิง") || (a >= 1200 && a <= 1311 && autism_dscore === 80 && sex === "หญิง")) {
       autism_tscore = 86;
      //console.log"autism12-13G_tscore = " + autism_tscore);
       autism_group = 4;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1200 && a <= 1311 && autism_dscore === 79 && sex === "หญิง") || (a >= 1200 && a <= 1311 && autism_dscore === 78 && sex === "หญิง")) {
       autism_tscore = 85;
      //console.log"autism12-13G_tscore = " + autism_tscore);
       autism_group = 4;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1200 && a <= 1311 && autism_dscore === 77 && sex === "หญิง") || (a >= 1200 && a <= 1311 && autism_dscore === 76 && sex === "หญิง")) {
       autism_tscore = 84;
      //console.log"autism12-13G_tscore = " + autism_tscore);
       autism_group = 4;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1200 && a <= 1311 && autism_dscore === 75 && sex === "หญิง") || (a >= 1200 && a <= 1311 && autism_dscore === 74 && sex === "หญิง")) {
       autism_tscore = 83;
      //console.log"autism12-13G_tscore = " + autism_tscore);
       autism_group = 4;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1200 && a <= 1311 && autism_dscore === 73 && sex === "หญิง") || (a >= 1200 && a <= 1311 && autism_dscore === 72 && sex === "หญิง")) {
       autism_tscore = 82;
      //console.log"autism12-13G_tscore = " + autism_tscore);
       autism_group = 4;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1200 && a <= 1311 && autism_dscore === 71 && sex === "หญิง")) {
       autism_tscore = 81;
      //console.log"autism12-13G_tscore = " + autism_tscore);
       autism_group = 4;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1200 && a <= 1311 && autism_dscore === 70 && sex === "หญิง") || (a >= 1200 && a <= 1311 && autism_dscore === 69 && sex === "หญิง")) {
       autism_tscore = 80;
      //console.log"autism12-13G_tscore = " + autism_tscore);
       autism_group = 3;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1200 && a <= 1311 && autism_dscore === 68 && sex === "หญิง") || (a >= 1200 && a <= 1311 && autism_dscore === 67 && sex === "หญิง")) {
       autism_tscore = 79;
      //console.log"autism12-13G_tscore = " + autism_tscore);
       autism_group = 3;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1200 && a <= 1311 && autism_dscore === 66 && sex === "หญิง") || (a >= 1200 && a <= 1311 && autism_dscore === 65 && sex === "หญิง")) {
       autism_tscore = 78;
      //console.log"autism12-13G_tscore = " + autism_tscore);
       autism_group = 3;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1200 && a <= 1311 && autism_dscore === 64 && sex === "หญิง") || (a >= 1200 && a <= 1311 && autism_dscore === 63 && sex === "หญิง")) {
       autism_tscore = 77;
      //console.log"autism12-13G_tscore = " + autism_tscore);
       autism_group = 3;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1200 && a <= 1311 && autism_dscore === 62 && sex === "หญิง")) {
       autism_tscore = 76;
      //console.log"autism12-13G_tscore = " + autism_tscore);
       autism_group = 3;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1200 && a <= 1311 && autism_dscore === 61 && sex === "หญิง") || (a >= 1200 && a <= 1311 && autism_dscore === 60 && sex === "หญิง")) {
       autism_tscore = 75;
      //console.log"autism12-13G_tscore = " + autism_tscore);
       autism_group = 3;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1200 && a <= 1311 && autism_dscore === 59 && sex === "หญิง") || (a >= 1200 && a <= 1311 && autism_dscore === 58 && sex === "หญิง")) {
       autism_tscore = 74;
      //console.log"autism12-13G_tscore = " + autism_tscore);
       autism_group = 3;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1200 && a <= 1311 && autism_dscore === 57 && sex === "หญิง") || (a >= 1200 && a <= 1311 && autism_dscore === 56 && sex === "หญิง")) {
       autism_tscore = 73;
      //console.log"autism12-13G_tscore = " + autism_tscore);
       autism_group = 3;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1200 && a <= 1311 && autism_dscore === 55 && sex === "หญิง") || (a >= 1200 && a <= 1311 && autism_dscore === 54 && sex === "หญิง")) {
       autism_tscore = 72;
      //console.log"autism12-13G_tscore = " + autism_tscore);
       autism_group = 3;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1200 && a <= 1311 && autism_dscore === 53 && sex === "หญิง") || (a >= 1200 && a <= 1311 && autism_dscore === 52 && sex === "หญิง")) {
       autism_tscore = 71;
      //console.log"autism12-13G_tscore = " + autism_tscore);
       autism_group = 3;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1200 && a <= 1311 && autism_dscore === 51 && sex === "หญิง")) {
       autism_tscore = 70;
      //console.log"autism12-13G_tscore = " + autism_tscore);
       autism_group = 2;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1200 && a <= 1311 && autism_dscore === 50 && sex === "หญิง") || (a >= 1200 && a <= 1311 && autism_dscore === 49 && sex === "หญิง")) {
       autism_tscore = 69;
      //console.log"autism12-13G_tscore = " + autism_tscore);
       autism_group = 2;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1200 && a <= 1311 && autism_dscore === 48 && sex === "หญิง") || (a >= 1200 && a <= 1311 && autism_dscore === 47 && sex === "หญิง")) {
       autism_tscore = 68;
      //console.log"autism12-13G_tscore = " + autism_tscore);
       autism_group = 2;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1200 && a <= 1311 && autism_dscore === 46 && sex === "หญิง") || (a >= 1200 && a <= 1311 && autism_dscore === 45 && sex === "หญิง")) {
       autism_tscore = 67;
      //console.log"autism12-13G_tscore = " + autism_tscore);
       autism_group = 2;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1200 && a <= 1311 && autism_dscore === 44 && sex === "หญิง") || (a >= 1200 && a <= 1311 && autism_dscore === 43 && sex === "หญิง")) {
       autism_tscore = 66;
      //console.log"autism12-13G_tscore = " + autism_tscore);
       autism_group = 2;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1200 && a <= 1311 && autism_dscore === 42 && sex === "หญิง")) {
       autism_tscore = 65;
      //console.log"autism12-13G_tscore = " + autism_tscore);
       autism_group = 2;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1200 && a <= 1311 && autism_dscore === 41 && sex === "หญิง") || (a >= 1200 && a <= 1311 && autism_dscore === 40 && sex === "หญิง")) {
       autism_tscore = 64;
      //console.log"autism12-13G_tscore = " + autism_tscore);
       autism_group = 2;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1200 && a <= 1311 && autism_dscore === 39 && sex === "หญิง") || (a >= 1200 && a <= 1311 && autism_dscore === 38 && sex === "หญิง")) {
       autism_tscore = 63;
      //console.log"autism12-13G_tscore = " + autism_tscore);
       autism_group = 2;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1200 && a <= 1311 && autism_dscore === 37 && sex === "หญิง") || (a >= 1200 && a <= 1311 && autism_dscore === 36 && sex === "หญิง")) {
       autism_tscore = 62;
      //console.log"autism12-13G_tscore = " + autism_tscore);
       autism_group = 2;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1200 && a <= 1311 && autism_dscore === 35 && sex === "หญิง") || (a >= 1200 && a <= 1311 && autism_dscore === 34 && sex === "หญิง")) {
       autism_tscore = 61;
      //console.log"autism12-13G_tscore = " + autism_tscore);
       autism_group = 2;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1200 && a <= 1311 && autism_dscore === 33 && sex === "หญิง") || (a >= 1200 && a <= 1311 && autism_dscore === 32 && sex === "หญิง")) {
       autism_tscore = 60;
      //console.log"autism12-13G_tscore = " + autism_tscore);
       autism_group = 1;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1200 && a <= 1311 && autism_dscore === 31 && sex === "หญิง")) {
       autism_tscore = 59;
      //console.log"autism12-13G_tscore = " + autism_tscore);
       autism_group = 1;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1200 && a <= 1311 && autism_dscore === 30 && sex === "หญิง") || (a >= 1200 && a <= 1311 && autism_dscore === 29 && sex === "หญิง")) {
       autism_tscore = 58;
      //console.log"autism12-13G_tscore = " + autism_tscore);
       autism_group = 1;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1200 && a <= 1311 && autism_dscore === 28 && sex === "หญิง") || (a >= 1200 && a <= 1311 && autism_dscore === 27 && sex === "หญิง")) {
       autism_tscore = 57;
      //console.log"autism12-13G_tscore = " + autism_tscore);
       autism_group = 1;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1200 && a <= 1311 && autism_dscore === 26 && sex === "หญิง") || (a >= 1200 && a <= 1311 && autism_dscore === 25 && sex === "หญิง")) {
       autism_tscore = 56;
      //console.log"autism12-13G_tscore = " + autism_tscore);
       autism_group = 1;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1200 && a <= 1311 && autism_dscore === 24 && sex === "หญิง") || (a >= 1200 && a <= 1311 && autism_dscore === 23 && sex === "หญิง")) {
       autism_tscore = 55;
      //console.log"autism12-13G_tscore = " + autism_tscore);
       autism_group = 1;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1200 && a <= 1311 && autism_dscore === 22 && sex === "หญิง") || (a >= 1200 && a <= 1311 && autism_dscore === 21 && sex === "หญิง")) {
       autism_tscore = 54;
      //console.log"autism12-13G_tscore = " + autism_tscore);
       autism_group = 1;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1200 && a <= 1311 && autism_dscore === 20 && sex === "หญิง")) {
       autism_tscore = 53;
      //console.log"autism12-13G_tscore = " + autism_tscore);
       autism_group = 1;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1200 && a <= 1311 && autism_dscore === 19 && sex === "หญิง") || (a >= 1200 && a <= 1311 && autism_dscore === 18 && sex === "หญิง")) {
       autism_tscore = 52;
      //console.log"autism12-13G_tscore = " + autism_tscore);
       autism_group = 1;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1200 && a <= 1311 && autism_dscore === 17 && sex === "หญิง") || (a >= 1200 && a <= 1311 && autism_dscore === 16 && sex === "หญิง")) {
       autism_tscore = 51;
      //console.log"autism12-13G_tscore = " + autism_tscore);
       autism_group = 1;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1200 && a <= 1311 && autism_dscore === 15 && sex === "หญิง") || (a >= 1200 && a <= 1311 && autism_dscore === 14 && sex === "หญิง")) {
       autism_tscore = 50;
      //console.log"autism12-13G_tscore = " + autism_tscore);
       autism_group = 1;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1200 && a <= 1311 && autism_dscore === 13 && sex === "หญิง") || (a >= 1200 && a <= 1311 && autism_dscore === 12 && sex === "หญิง")) {
       autism_tscore = 49;
      //console.log"autism12-13G_tscore = " + autism_tscore);
       autism_group = 1;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1200 && a <= 1311 && autism_dscore === 11 && sex === "หญิง")) {
       autism_tscore = 48;
      //console.log"autism12-13G_tscore = " + autism_tscore);
       autism_group = 1;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1200 && a <= 1311 && autism_dscore === 10 && sex === "หญิง") || (a >= 1200 && a <= 1311 && autism_dscore === 9 && sex === "หญิง")) {
       autism_tscore = 47;
      //console.log"autism12-13G_tscore = " + autism_tscore);
       autism_group = 1;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1200 && a <= 1311 && autism_dscore === 8 && sex === "หญิง") || (a >= 1200 && a <= 1311 && autism_dscore === 7 && sex === "หญิง")) {
       autism_tscore = 46;
      //console.log"autism12-13G_tscore = " + autism_tscore);
       autism_group = 1;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1200 && a <= 1311 && autism_dscore === 6 && sex === "หญิง") || (a >= 1200 && a <= 1311 && autism_dscore === 5 && sex === "หญิง")) {
       autism_tscore = 45;
      //console.log"autism12-13G_tscore = " + autism_tscore);
       autism_group = 1;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1200 && a <= 1311 && autism_dscore === 4 && sex === "หญิง") || (a >= 1200 && a <= 1311 && autism_dscore === 3 && sex === "หญิง")) {
       autism_tscore = 44;
      //console.log"autism12-13G_tscore = " + autism_tscore);
       autism_group = 1;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1200 && a <= 1311 && autism_dscore === 2 && sex === "หญิง") || (a >= 1200 && a <= 1311 && autism_dscore === 1 && sex === "หญิง")) {
       autism_tscore = 43;
      //console.log"autism12-13G_tscore = " + autism_tscore);
       autism_group = 1;
      //console.log"autism_group = " + autism_group);
    } else if ((a >= 1200 && a <= 1311 && autism_dscore === 0 && sex === "หญิง")) {
       autism_tscore = 42;
      //console.log"autism12-13G_tscore = " + autism_tscore);
       autism_group = 1;
      //console.log"autism_group = " + autism_group);
    }

       
    axios.put(`${process.env.REACT_APP_API}/kussi-AAHD/${params.idcard}/${params.schoolyear}/${params.term}`, {
      autism_dscore, autism_tscore, autism_group
    },
    {
      headers: {
        authtoken,
      }
    })
      .then((response) => {
       // alert("บันทึกสำเร็จ");
        history(`/kussi-Score/${stdidcard}/${schoolyear}/${term}`);
      })
      .catch((err) => {
        alert(err.response.data.error);
      });
    
    
  };


  //คำถามAutisum
  const infomation = [
    {
      no: 1,
      info: "เล่นคนเดียว ไม่เล่นกับเพื่อน",
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
      info: "หมกหม่น สนใจในบางเรื่องเป็นพิเศษ",
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
      info: "ไม่รู้จักปลอบใจเด็กคนอื่น",
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
      info: "ไม่ยอม หรือปรับตัวยากเวลามีการเปลี่ยนแปลงในสิ่งที่คุ้นเคย",
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
      info: "ไม่รู้จักยืดหยุ่น",
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
      info: "ถูกเด็กคนอื่นมองว่าเป็น 'ตัวตลกหรือตัวประหลาด' ",
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
      info: "ีปัญหาในการพูด หรือการสื่อสารให้ผู้อื่นเข้าใจ",
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
      info: "เล่นกับเด็กอื่นเฉพาะสิ่งที่ตัวเองอยากเล่น",
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
      info: "เดินผ่ากลาง ขณะที่คนสองคนคุยกันอยู่",
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
      info: "ถามคำถามเดิมซ้ำๆ ",
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
      info: "พูดเฉพาะเรื่องที่ตัวเองสนใจ โดยไม่สังเกตว่าเพื่อนเริ่มเบื่อหรือไม่อยากฟัง",
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
      info: " งุ่มงาม งอะงะ ชุ่มซาม มากกว่าเด็กคนอื่น",
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
      info: "จำสิ่งไร้สาระ หรือสิ่งที่ไม่มีประโยชน์",
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
      info: "ใช้ภาษาที่ไม่เหมาะสมกับกาลเทศะหรือผู้ฟัง",
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
      info: "ไม่ฟังเพื่อน ถ้เพื่อนไม่ได้พูดในสิ่งที่เข้าสนใจ",
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
      info: "ไม่มีเพื่อนสนิท",
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
      info: "อ่านสีหน้า และอารมณ์ของคนรอบข้างไม่ออก",
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
      info: "ไม่สามารถบอกความรู้สึกของตัวเองให้คนอื่นรับรู้ได้",
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
      info: "ไม่มองหน้า หรือสบตาผู้ฟังเวลาคุย",
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
      info: "มีโลกส่วนตัวหรืออยู่คนเดียวตามลำพัง",
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
    {
      no: 21,
      info: "ไม่รู้จักสงสารเห็นอกเห็นใจผู้อื่น",
      chekcbox1: (
        <fieldset>
          <RadioInput
            input
            type="radio"
            label="ไม่เคย"
            name="score20"
            value={0}
            checked={score20}
            setter={setScore20}
          />
          <RadioInput
            input
            type="radio"
            label="เล็กน้อย"
            name="score20"
            value={1}
            checked={score20}
            setter={setScore20}
          />
          <RadioInput
            input
            type="radio"
            label="ค่อนข้างมาก"
            name="score20"
            value={2}
            checked={score20}
            setter={setScore20}
          />
          <RadioInput
            input
            type="radio"
            label="บ่อยมาก"
            name="score20"
            value={3}
            checked={score20}
            setter={setScore20}
          />
        </fieldset>
      ),
    },
    {
      no: 22,
      info: "ใช้ภาษาหรือคำพูดที่ฟังแล้วแปลกๆ",
      chekcbox1: (
        <fieldset>
          <RadioInput
            input
            type="radio"
            label="ไม่เคย"
            name="score21"
            value={0}
            checked={score21}
            setter={setScore21}
          />
          <RadioInput
            input
            type="radio"
            label="เล็กน้อย"
            name="score21"
            value={1}
            checked={score21}
            setter={setScore21}
          />
          <RadioInput
            input
            type="radio"
            label="ค่อนข้างมาก"
            name="score21"
            value={2}
            checked={score21}
            setter={setScore21}
          />
          <RadioInput
            input
            type="radio"
            label="บ่อยมาก"
            name="score21"
            value={3}
            checked={score21}
            setter={setScore21}
          />
        </fieldset>
      ),
    },
    {
      no: 23,
      info: "ต้องการเล่นกับเด็กคนอื่น แต่ไม่รู้จะเริ่มอย่างไร",
      chekcbox1: (
        <fieldset>
          <RadioInput
            input
            type="radio"
            label="ไม่เคย"
            name="score22"
            value={0}
            checked={score22}
            setter={setScore22}
          />
          <RadioInput
            input
            type="radio"
            label="เล็กน้อย"
            name="score22"
            value={1}
            checked={score22}
            setter={setScore22}
          />
          <RadioInput
            input
            type="radio"
            label="ค่อนข้างมาก"
            name="score22"
            value={2}
            checked={score22}
            setter={setScore22}
          />
          <RadioInput
            input
            type="radio"
            label="บ่อยมาก"
            name="score22"
            value={3}
            checked={score22}
            setter={setScore22}
          />
        </fieldset>
      ),
    },
    {
      no: 24,
      info: "ไม่รู้ว่าอะไรควรทำ อะไรไม่ควรทำ",
      chekcbox1: (
        <fieldset>
          <RadioInput
            input
            type="radio"
            label="ไม่เคย"
            name="score23"
            value={0}
            checked={score23}
            setter={setScore23}
          />
          <RadioInput
            input
            type="radio"
            label="เล็กน้อย"
            name="score23"
            value={1}
            checked={score23}
            setter={setScore23}
          />
          <RadioInput
            input
            type="radio"
            label="ค่อนข้างมาก"
            name="score23"
            value={2}
            checked={score23}
            setter={setScore23}
          />
          <RadioInput
            input
            type="radio"
            label="บ่อยมาก"
            name="score23"
            value={3}
            checked={score23}
            setter={setScore23}
          />
        </fieldset>
      ),
    },
    {
      no: 25,
      info: "มีกิจวัตรประจำวันที่ต้องทำเหมือนเดิม",
      chekcbox1: (
        <fieldset>
          <RadioInput
            input
            type="radio"
            label="ไม่เคย"
            name="score24"
            value={0}
            checked={score24}
            setter={setScore24}
          />
          <RadioInput
            input
            type="radio"
            label="เล็กน้อย"
            name="score24"
            value={1}
            checked={score24}
            setter={setScore24}
          />
          <RadioInput
            input
            type="radio"
            label="ค่อนข้างมาก"
            name="score24"
            value={2}
            checked={score24}
            setter={setScore24}
          />
          <RadioInput
            input
            type="radio"
            label="บ่อยมาก"
            name="score24"
            value={3}
            checked={score24}
            setter={setScore24}
          />
        </fieldset>
      ),
    },
    {
      no: 26,
      info: "ไม่รับรู้ว่าคนอื่นกำลังคิด หรือรู้สึกอย่างไร",
      chekcbox1: (
        <fieldset>
          <RadioInput
            input
            type="radio"
            label="ไม่เคย"
            name="score25"
            value={0}
            checked={score25}
            setter={setScore25}
          />
          <RadioInput
            input
            type="radio"
            label="เล็กน้อย"
            name="score25"
            value={1}
            checked={score25}
            setter={setScore25}
          />
          <RadioInput
            input
            type="radio"
            label="ค่อนข้างมาก"
            name="score25"
            value={2}
            checked={score25}
            setter={setScore25}
          />
          <RadioInput
            input
            type="radio"
            label="บ่อยมาก"
            name="score25"
            value={3}
            checked={score25}
            setter={setScore25}
          />
        </fieldset>
      ),
    },
    {
      no: 27,
      info: "มีพฤติกรรมหรือท่าทางแปลกๆซ้ำๆ เช่น สะบัดมือ ดม เคาะเล่นนิ้ว หมุนสิ่งของ",
      chekcbox1: (
        <fieldset>
          <RadioInput
            input
            type="radio"
            label="ไม่เคย"
            name="score26"
            value={0}
            checked={score26}
            setter={setScore26}
          />
          <RadioInput
            input
            type="radio"
            label="เล็กน้อย"
            name="score26"
            value={1}
            checked={score26}
            setter={setScore26}
          />
          <RadioInput
            input
            type="radio"
            label="ค่อนข้างมาก"
            name="score26"
            value={2}
            checked={score26}
            setter={setScore26}
          />
          <RadioInput
            input
            type="radio"
            label="บ่อยมาก"
            name="score26"
            value={3}
            checked={score26}
            setter={setScore26}
          />
        </fieldset>
      ),
    },
    {
      no: 28,
      info: "พูดในเรื่องเดิมซ้ำๆ",
      chekcbox1: (
        <fieldset>
          <RadioInput
            input
            type="radio"
            label="ไม่เคย"
            name="score27"
            value={0}
            checked={score27}
            setter={setScore27}
          />
          <RadioInput
            input
            type="radio"
            label="เล็กน้อย"
            name="score27"
            value={1}
            checked={score27}
            setter={setScore27}
          />
          <RadioInput
            input
            type="radio"
            label="ค่อนข้างมาก"
            name="score27"
            value={2}
            checked={score27}
            setter={setScore27}
          />
          <RadioInput
            input
            type="radio"
            label="บ่อยมาก"
            name="score27"
            value={3}
            checked={score27}
            setter={setScore27}
          />
        </fieldset>
      ),
    },
    {
      no: 29,
      info: " ตอบไม่ตรงคำถาม หรือพูดคนละเรื่องกับคู่สนทนา",
      chekcbox1: (
        <fieldset>
          <RadioInput
            input
            type="radio"
            label="ไม่เคย"
            name="score28"
            value={0}
            checked={score28}
            setter={setScore28}
          />
          <RadioInput
            input
            type="radio"
            label="เล็กน้อย"
            name="score28"
            value={1}
            checked={score28}
            setter={setScore28}
          />
          <RadioInput
            input
            type="radio"
            label="ค่อนข้างมาก"
            name="score28"
            value={2}
            checked={score28}
            setter={setScore28}
          />
          <RadioInput
            input
            type="radio"
            label="บ่อยมาก"
            name="score28"
            value={3}
            checked={score28}
            setter={setScore28}
          />
        </fieldset>
      ),
    },
    {
      no: 30,
      info: "เวลาพูดใช้สรรพนาม หรือเรียงคำในประ โยคผิด",
      chekcbox1: (
        <fieldset>
          <RadioInput
            input
            type="radio"
            label="ไม่เคย"
            name="score29"
            value={0}
            checked={score29}
            setter={setScore29}
          />
          <RadioInput
            input
            type="radio"
            label="เล็กน้อย"
            name="score29"
            value={1}
            checked={score29}
            setter={setScore29}
          />
          <RadioInput
            input
            type="radio"
            label="ค่อนข้างมาก"
            name="score29"
            value={2}
            checked={score29}
            setter={setScore29}
          />
          <RadioInput
            input
            type="radio"
            label="บ่อยมาก"
            name="score29"
            value={3}
            checked={score29}
            setter={setScore29}
          />
        </fieldset>
      ),
    },
    {
      no: 31,
      info: "ทำเสียงแปลกๆที่เป็นเอกลักษณ์เฉพาะ",
      chekcbox1: (
        <fieldset>
          <RadioInput
            input
            type="radio"
            label="ไม่เคย"
            name="score30"
            value={0}
            checked={score30}
            setter={setScore30}
          />
          <RadioInput
            input
            type="radio"
            label="เล็กน้อย"
            name="score30"
            value={1}
            checked={score30}
            setter={setScore30}
          />
          <RadioInput
            input
            type="radio"
            label="ค่อนข้างมาก"
            name="score30"
            value={2}
            checked={score30}
            setter={setScore30}
          />
          <RadioInput
            input
            type="radio"
            label="บ่อยมาก"
            name="score30"
            value={3}
            checked={score30}
            setter={setScore30}
          />
        </fieldset>
      ),
    },
    {
      no: 32,
      info: "แสดงอารมณ์ที่ไม่เหมาะสมกับสถานการณ์",
      chekcbox1: (
        <fieldset>
          <RadioInput
            input
            type="radio"
            label="ไม่เคย"
            name="score31"
            value={0}
            checked={score31}
            setter={setScore31}
          />
          <RadioInput
            input
            type="radio"
            label="เล็กน้อย"
            name="score31"
            value={1}
            checked={score31}
            setter={setScore31}
          />
          <RadioInput
            input
            type="radio"
            label="ค่อนข้างมาก"
            name="score31"
            value={2}
            checked={score31}
            setter={setScore31}
          />
          <RadioInput
            input
            type="radio"
            label="บ่อยมาก"
            name="score31"
            value={3}
            checked={score31}
            setter={setScore31}
          />
        </fieldset>
      ),
    },
    {
      no: 33,
      info: "กลัวในสิ่งที่ไม่ควรกลัว",
      chekcbox1: (
        <fieldset>
          <RadioInput
            input
            type="radio"
            label="ไม่เคย"
            name="score32"
            value={0}
            checked={score32}
            setter={setScore32}
          />
          <RadioInput
            input
            type="radio"
            label="เล็กน้อย"
            name="score32"
            value={1}
            checked={score32}
            setter={setScore32}
          />
          <RadioInput
            input
            type="radio"
            label="ค่อนข้างมาก"
            name="score32"
            value={2}
            checked={score32}
            setter={setScore32}
          />
          <RadioInput
            input
            type="radio"
            label="บ่อยมาก"
            name="score32"
            value={3}
            checked={score32}
            setter={setScore32}
          />
        </fieldset>
      ),
    },
    {
      no: 34,
      info: "ทนต่อเสียงหรือการสัมผัสบางอย่างไม่ได้ ในขณะที่เด็กทั่วไปทนได้",
      chekcbox1: (
        <fieldset>
          <RadioInput
            input
            type="radio"
            label="ไม่เคย"
            name="score33"
            value={0}
            checked={score33}
            setter={setScore33}
          />
          <RadioInput
            input
            type="radio"
            label="เล็กน้อย"
            name="score33"
            value={1}
            checked={score33}
            setter={setScore33}
          />
          <RadioInput
            input
            type="radio"
            label="ค่อนข้างมาก"
            name="score33"
            value={2}
            checked={score33}
            setter={setScore33}
          />
          <RadioInput
            input
            type="radio"
            label="บ่อยมาก"
            name="score33"
            value={3}
            checked={score33}
            setter={setScore33}
          />
        </fieldset>
      ),
    },
    {
      no: 35,
      info: "พูดทวนคำของคู่สนทนา",
      chekcbox1: (
        <fieldset>
          <RadioInput
            input
            type="radio"
            label="ไม่เคย"
            name="score34"
            value={0}
            checked={score34}
            setter={setScore34}
          />
          <RadioInput
            input
            type="radio"
            label="เล็กน้อย"
            name="score34"
            value={1}
            checked={score34}
            setter={setScore34}
          />
          <RadioInput
            input
            type="radio"
            label="ค่อนข้างมาก"
            name="score34"
            value={2}
            checked={score34}
            setter={setScore34}
          />
          <RadioInput
            input
            type="radio"
            label="บ่อยมาก"
            name="score34"
            value={3}
            checked={score34}
            setter={setScore34}
          />
        </fieldset>
      ),
    },
    {
      no: 36,
      info: "พูดด้วยก็ไม่พูดด้วย",
      chekcbox1: (
        <fieldset>
          <RadioInput
            input
            type="radio"
            label="ไม่เคย"
            name="score35"
            value={0}
            checked={score35}
            setter={setScore35}
          />
          <RadioInput
            input
            type="radio"
            label="เล็กน้อย"
            name="score35"
            value={1}
            checked={score35}
            setter={setScore35}
          />
          <RadioInput
            input
            type="radio"
            label="ค่อนข้างมาก"
            name="score35"
            value={2}
            checked={score35}
            setter={setScore35}
          />
          <RadioInput
            input
            type="radio"
            label="บ่อยมาก"
            name="score35"
            value={3}
            checked={score35}
            setter={setScore35}
          />
        </fieldset>
      ),
    },
    {
      no: 37,
      info: " ทำงานกลุ่มไม่เป็น",
      chekcbox1: (
        <fieldset>
          <RadioInput
            input
            type="radio"
            label="ไม่เคย"
            name="score36"
            value={0}
            checked={score36}
            setter={setScore36}
          />
          <RadioInput
            input
            type="radio"
            label="เล็กน้อย"
            name="score36"
            value={1}
            checked={score36}
            setter={setScore36}
          />
          <RadioInput
            input
            type="radio"
            label="ค่อนข้างมาก"
            name="score36"
            value={2}
            checked={score36}
            setter={setScore36}
          />
          <RadioInput
            input
            type="radio"
            label="บ่อยมาก"
            name="score36"
            value={3}
            checked={score36}
            setter={setScore36}
          />
        </fieldset>
      ),
    },
    {
      no: 38,
      info: "ไม่ยอมรับกติกา หรือข้อตกลงในโรงเรียน",
      chekcbox1: (
        <fieldset>
          <RadioInput
            input
            type="radio"
            label="ไม่เคย"
            name="score37"
            value={0}
            checked={score37}
            setter={setScore37}
          />
          <RadioInput
            input
            type="radio"
            label="เล็กน้อย"
            name="score37"
            value={1}
            checked={score37}
            setter={setScore37}
          />
          <RadioInput
            input
            type="radio"
            label="ค่อนข้างมาก"
            name="score37"
            value={2}
            checked={score37}
            setter={setScore37}
          />
          <RadioInput
            input
            type="radio"
            label="บ่อยมาก"
            name="score37"
            value={3}
            checked={score37}
            setter={setScore37}
          />
        </fieldset>
      ),
    },
    {
      no: 39,
      info: "ไม่รู้จักเก็บอารมณ์หรือคำพูด รู้สึกอย่างไรก็แสดงออกอย่างนั้น",
      chekcbox1: (
        <fieldset>
          <RadioInput
            input
            type="radio"
            label="ไม่เคย"
            name="score38"
            value={0}
            checked={score38}
            setter={setScore38}
          />
          <RadioInput
            input
            type="radio"
            label="เล็กน้อย"
            name="score38"
            value={1}
            checked={score38}
            setter={setScore38}
          />
          <RadioInput
            input
            type="radio"
            label="ค่อนข้างมาก"
            name="score38"
            value={2}
            checked={score38}
            setter={setScore38}
          />
          <RadioInput
            input
            type="radio"
            label="บ่อยมาก"
            name="score38"
            value={3}
            checked={score38}
            setter={setScore38}
          />
        </fieldset>
      ),
    },
    {
      no: 40,
      info: "ไม่รู้จักการแบ่งปันสิ่งของหรือหวงของ",
      chekcbox1: (
        <fieldset>
          <RadioInput
            input
            type="radio"
            label="ไม่เคย"
            name="score39"
            value={0}
            checked={score39}
            setter={setScore39}
          />
          <RadioInput
            input
            type="radio"
            label="เล็กน้อย"
            name="score39"
            value={1}
            checked={score39}
            setter={setScore39}
          />
          <RadioInput
            input
            type="radio"
            label="ค่อนข้างมาก"
            name="score39"
            value={2}
            checked={score39}
            setter={setScore39}
          />
          <RadioInput
            input
            type="radio"
            label="บ่อยมาก"
            name="score39"
            value={3}
            checked={score39}
            setter={setScore39}
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
        <Stdname/>
          <h4 style={{ textAlign: "center" ,marginTop:"50px" }}>
            <b>
              พฤติกรรมภาวะออทิซึม KUS-SI Rating Scales 5 : Autism/PDDs
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
              หรือความรุนแรงของพฤติกรรมหรือปัญหาที่เกิดขึ้น โดยจัดลำดับ ดังนี้
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
              &nbsp; รวมคะแนนดิบ พฤติกรรมภาวะออทิซึม
              <input type="number" value={autism_dscore} style={{ width: "53px" }} readOnly /> <br />
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

export default Kussi_ATS;
