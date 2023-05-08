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

const Kussi_ADHD2 = (props) => {
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

  const [adhd1data, setAdhd1data] = useState([]);

  const fetchData = () => {
    axios
      .get(`${process.env.REACT_APP_API}/kussi-AAHD/${params.idcard}/${params.schoolyear}/${params.term}`,
      {
        headers: {
          authtoken,
        }
      })
      .then((response) => {
        setAdhd1data(response.data);
      })
      .catch((err) => alert(err));
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log(adhd1data)


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

  var adhd2_dscore = score + score1 + score2 + score3 + score4 + score5 + score6 + score7 + score8 + score9 + score10 + score11 + score12 + score13 + score14;

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
    const schoolyear = adhd1data.schoolyear
    const term = adhd1data.term

    var tscore;
    var group;
    var sumadhd_tscore;
    var sumadhd_group;
    if (a >= 600 && a <= 711 && adhd2_dscore === 45 && sex === "ชาย") {
      tscore = 69;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if ((a >= 600 && a <= 711 && adhd2_dscore === 44 && sex === "ชาย") || (a >= 600 && a <= 711 && adhd2_dscore === 43 && sex === "ชาย")) {
      tscore = 68;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    }
    else if (a >= 600 && a <= 711 && adhd2_dscore === 42 && sex === "ชาย") {
      tscore = 67;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    }
    else if (a >= 600 && a <= 711 && adhd2_dscore === 41 && sex === "ชาย") {
      tscore = 66;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    }
    else if ((a >= 600 && a <= 711 && adhd2_dscore === 40 && sex === "ชาย") || (a >= 600 && a <= 711 && adhd2_dscore === 39 && sex === "ชาย")) {
      tscore = 65;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    }
    else if (a >= 600 && a <= 711 && adhd2_dscore === 38 && sex === "ชาย") {
      tscore = 64;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    }
    else if (a >= 600 && a <= 711 && adhd2_dscore === 37 && sex === "ชาย") {
      tscore = 63;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    }
    else if ((a >= 600 && a <= 711 && adhd2_dscore === 36 && sex === "ชาย") || (a >= 600 && a <= 711 && adhd2_dscore === 35 && sex === "ชาย")) {
      tscore = 62;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    }
    else if (a >= 600 && a <= 711 && adhd2_dscore === 34 && sex === "ชาย") {
      tscore = 61;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    }
    else if (a >= 600 && a <= 711 && adhd2_dscore === 33 && sex === "ชาย") {
      tscore = 60;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    }
    else if ((a >= 600 && a <= 711 && adhd2_dscore === 32 && sex === "ชาย") || (a >= 600 && a <= 711 && adhd2_dscore === 31 && sex === "ชาย")) {
      tscore = 59;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    }
    else if (a >= 600 && a <= 711 && adhd2_dscore === 30 && sex === "ชาย") {
      tscore = 58;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    }
    else if (a >= 600 && a <= 711 && adhd2_dscore === 29 && sex === "ชาย") {
      tscore = 57;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    }
    else if ((a >= 600 && a <= 711 && adhd2_dscore === 28 && sex === "ชาย") || (a >= 600 && a <= 711 && adhd2_dscore === 27 && sex === "ชาย")) {
      tscore = 56;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    }
    else if (a >= 600 && a <= 711 && adhd2_dscore === 26 && sex === "ชาย") {
      tscore = 55;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    }
    else if (a >= 600 && a <= 711 && adhd2_dscore === 25 && sex === "ชาย") {
      tscore = 54;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    }
    else if ((a >= 600 && a <= 711 && adhd2_dscore === 24 && sex === "ชาย") || (a >= 600 && a <= 711 && adhd2_dscore === 23 && sex === "ชาย")) {
      tscore = 53;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    }
    else if (a >= 600 && a <= 711 && adhd2_dscore === 22 && sex === "ชาย") {
      tscore = 52;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    }
    else if ((a >= 600 && a <= 711 && adhd2_dscore === 21 && sex === "ชาย") || (a >= 600 && a <= 711 && adhd2_dscore === 20 && sex === "ชาย")) {
      tscore = 51;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    }
    else if (a >= 600 && a <= 711 && adhd2_dscore === 19 && sex === "ชาย") {
      tscore = 50;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    }
    else if (a >= 600 && a <= 711 && adhd2_dscore === 18 && sex === "ชาย") {
      tscore = 49;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    }
    else if ((a >= 600 && a <= 711 && adhd2_dscore === 17 && sex === "ชาย") || (a >= 600 && a <= 711 && adhd2_dscore === 16 && sex === "ชาย")) {
      tscore = 48;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    }
    else if (a >= 600 && a <= 711 && adhd2_dscore === 15 && sex === "ชาย") {
      tscore = 47;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    }
    else if (a >= 600 && a <= 711 && adhd2_dscore === 14 && sex === "ชาย") {
      tscore = 46;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    }
    else if ((a >= 600 && a <= 711 && adhd2_dscore === 13 && sex === "ชาย") || (a >= 600 && a <= 711 && adhd2_dscore === 12 && sex === "ชาย")) {
      tscore = 45;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    }
    else if (a >= 600 && a <= 711 && adhd2_dscore === 11 && sex === "ชาย") {
      tscore = 44;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    }
    else if (a >= 600 && a <= 711 && adhd2_dscore === 10 && sex === "ชาย") {
      tscore = 43;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    }
    else if ((a >= 600 && a <= 711 && adhd2_dscore === 9 && sex === "ชาย") || (a >= 600 && a <= 711 && adhd2_dscore === 8 && sex === "ชาย")) {
      tscore = 42;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    }
    else if (a >= 600 && a <= 711 && adhd2_dscore === 7 && sex === "ชาย") {
      tscore = 41;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    }
    else if (a >= 600 && a <= 711 && adhd2_dscore === 6 && sex === "ชาย") {
      tscore = 40;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    }
    else if ((a >= 600 && a <= 711 && adhd2_dscore === 5 && sex === "ชาย") || (a >= 600 && a <= 711 && adhd2_dscore === 4 && sex === "ชาย")) {
      tscore = 39;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    }
    else if (a >= 600 && a <= 711 && adhd2_dscore === 3 && sex === "ชาย") {
      tscore = 38;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    }
    else if (a >= 600 && a <= 711 && adhd2_dscore === 2 && sex === "ชาย") {
      tscore = 37;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    }
    else if ((a >= 600 && a <= 711 && adhd2_dscore === 1 && sex === "ชาย") || (a >= 600 && a <= 711 && adhd2_dscore === 0 && sex === "ชาย")) {
      tscore = 36;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    }

    //8/9.11 ก.1 ขาดสมาธิ 
    else if (a >= 800 && a <= 911 && adhd2_dscore === 45 && sex === "ชาย") {
      tscore = 69;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if ((a >= 800 && a <= 911 && adhd2_dscore === 44 && sex === "ชาย") || (a >= 800 && a <= 911 && adhd2_dscore === 43 && sex === "ชาย")) {
      tscore = 68;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if (a >= 800 && a <= 911 && adhd2_dscore === 42 && sex === "ชาย") {
      tscore = 67;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if (a >= 800 && a <= 911 && adhd2_dscore === 41 && sex === "ชาย") {
      tscore = 66;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if ((a >= 800 && a <= 911 && adhd2_dscore === 40 && sex === "ชาย") || (a >= 800 && a <= 911 && adhd2_dscore === 39 && sex === "ชาย")) {
      tscore = 65;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if (a >= 800 && a <= 911 && adhd2_dscore === 38 && sex === "ชาย") {
      tscore = 64;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if (a >= 800 && a <= 911 && adhd2_dscore === 37 && sex === "ชาย") {
      tscore = 63;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if (a >= 800 && a <= 911 && adhd2_dscore === 36 && sex === "ชาย") {
      tscore = 62;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if ((a >= 800 && a <= 911 && adhd2_dscore === 35 && sex === "ชาย") || (a >= 800 && a <= 911 && adhd2_dscore === 34 && sex === "ชาย")) {
      tscore = 61;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if (a >= 800 && a <= 911 && adhd2_dscore === 33 && sex === "ชาย") {
      tscore = 60;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if (a >= 800 && a <= 911 && adhd2_dscore === 32 && sex === "ชาย") {
      tscore = 59;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if ((a >= 800 && a <= 911 && adhd2_dscore === 31 && sex === "ชาย") || (a >= 800 && a <= 911 && adhd2_dscore === 30 && sex === "ชาย")) {
      tscore = 58;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if (a >= 800 && a <= 911 && adhd2_dscore === 29 && sex === "ชาย") {
      tscore = 57;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if (a >= 800 && a <= 911 && adhd2_dscore === 28 && sex === "ชาย") {
      tscore = 56;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if ((a >= 800 && a <= 911 && adhd2_dscore === 27 && sex === "ชาย") || (a >= 800 && a <= 911 && adhd2_dscore === 26 && sex === "ชาย")) {
      tscore = 55;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if (a >= 800 && a <= 911 && adhd2_dscore === 25 && sex === "ชาย") {
      tscore = 54;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if (a >= 800 && a <= 911 && adhd2_dscore === 24 && sex === "ชาย") {
      tscore = 53;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if ((a >= 800 && a <= 911 && adhd2_dscore === 23 && sex === "ชาย") || (a >= 800 && a <= 911 && adhd2_dscore === 22 && sex === "ชาย")) {
      tscore = 52;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if (a >= 800 && a <= 911 && adhd2_dscore === 21 && sex === "ชาย") {
      tscore = 51;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if (a >= 800 && a <= 911 && adhd2_dscore === 20 && sex === "ชาย") {
      tscore = 50;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if ((a >= 800 && a <= 911 && adhd2_dscore === 19 && sex === "ชาย") || (a >= 800 && a <= 911 && adhd2_dscore === 18 && sex === "ชาย")) {
      tscore = 49;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 800 && a <= 911 && adhd2_dscore === 17 && sex === "ชาย") {
      tscore = 48;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 800 && a <= 911 && adhd2_dscore === 16 && sex === "ชาย") {
      tscore = 47;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if ((a >= 800 && a <= 911 && adhd2_dscore === 15 && sex === "ชาย") || (a >= 800 && a <= 911 && adhd2_dscore === 14 && sex === "ชาย")) {
      tscore = 46;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 800 && a <= 911 && adhd2_dscore === 13 && sex === "ชาย") {
      tscore = 45;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 800 && a <= 911 && adhd2_dscore === 12 && sex === "ชาย") {
      tscore = 44;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if ((a >= 800 && a <= 911 && adhd2_dscore === 11 && sex === "ชาย") || (a >= 800 && a <= 911 && adhd2_dscore === 12 && sex === "ชาย")) {
      tscore = 43;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 800 && a <= 911 && adhd2_dscore === 9 && sex === "ชาย") {
      tscore = 42;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 800 && a <= 911 && adhd2_dscore === 8 && sex === "ชาย") {
      tscore = 41;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if ((a >= 800 && a <= 911 && adhd2_dscore === 7 && sex === "ชาย") || (a >= 800 && a <= 911 && adhd2_dscore === 6 && sex === "ชาย")) {
      tscore = 40;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 800 && a <= 911 && adhd2_dscore === 5 && sex === "ชาย") {
      tscore = 39;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 800 && a <= 911 && adhd2_dscore === 4 && sex === "ชาย") {
      tscore = 38;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 800 && a <= 911 && adhd2_dscore === 3 && sex === "ชาย") {
      tscore = 37;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if ((a >= 800 && a <= 911 && adhd2_dscore === 2 && sex === "ชาย") || (a >= 800 && a <= 911 && adhd2_dscore === 1 && sex === "ชาย")) {
      tscore = 36;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 800 && a <= 911 && adhd2_dscore === 0 && sex === "ชาย") {
      tscore = 35;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    }

    //10/11.11 ก.1 ขาดสมาธิ
    else if (a >= 1000 && a <= 1111 && adhd2_dscore === 45 && sex === "ชาย") {
      tscore = 70;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if (a >= 1000 && a <= 1111 && adhd2_dscore === 44 && sex === "ชาย") {
      tscore = 69;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if (a >= 1000 && a <= 1111 && adhd2_dscore === 43 && sex === "ชาย") {
      tscore = 68;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if (a >= 1000 && a <= 1111 && adhd2_dscore === 42 && sex === "ชาย") {
      tscore = 67;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if ((a >= 1000 && a <= 1111 && adhd2_dscore === 41 && sex === "ชาย") || (a >= 1000 && a <= 1111 && adhd2_dscore === 40 && sex === "ชาย")) {
      tscore = 66;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if (a >= 1000 && a <= 1111 && adhd2_dscore === 39 && sex === "ชาย") {
      tscore = 65;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if (a >= 1000 && a <= 1111 && adhd2_dscore === 38 && sex === "ชาย") {
      tscore = 64;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if ((a >= 1000 && a <= 1111 && adhd2_dscore === 37 && sex === "ชาย") || (a >= 1000 && a <= 1111 && adhd2_dscore === 36 && sex === "ชาย")) {
      tscore = 63;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if (a >= 1000 && a <= 1111 && adhd2_dscore === 35 && sex === "ชาย") {
      tscore = 62;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if (a >= 1000 && a <= 1111 && adhd2_dscore === 34 && sex === "ชาย") {
      tscore = 61;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if ((a >= 1000 && a <= 1111 && adhd2_dscore === 33 && sex === "ชาย") || (a >= 1000 && a <= 1111 && adhd2_dscore === 32 && sex === "ชาย")) {
      tscore = 60;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if (a >= 1000 && a <= 1111 && adhd2_dscore === 31 && sex === "ชาย") {
      tscore = 59;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if (a >= 1000 && a <= 1111 && adhd2_dscore === 30 && sex === "ชาย") {
      tscore = 58;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if ((a >= 1000 && a <= 1111 && adhd2_dscore === 29 && sex === "ชาย") || (a >= 1000 && a <= 1111 && adhd2_dscore === 28 && sex === "ชาย")) {
      tscore = 57;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if (a >= 1000 && a <= 1111 && adhd2_dscore === 27 && sex === "ชาย") {
      tscore = 56;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if (a >= 1000 && a <= 1111 && adhd2_dscore === 26 && sex === "ชาย") {
      tscore = 55;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if ((a >= 1000 && a <= 1111 && adhd2_dscore === 25 && sex === "ชาย") || (a >= 1000 && a <= 1111 && adhd2_dscore === 24 && sex === "ชาย")) {
      tscore = 54;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if (a >= 1000 && a <= 1111 && adhd2_dscore === 23 && sex === "ชาย") {
      tscore = 53;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if (a >= 1000 && a <= 1111 && adhd2_dscore === 22 && sex === "ชาย") {
      tscore = 52;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if ((a >= 1000 && a <= 1111 && adhd2_dscore === 21 && sex === "ชาย") || (a >= 1000 && a <= 1111 && adhd2_dscore === 20 && sex === "ชาย")) {
      tscore = 51;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if (a >= 1000 && a <= 1111 && adhd2_dscore === 19 && sex === "ชาย") {
      tscore = 50;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 1000 && a <= 1111 && adhd2_dscore === 18 && sex === "ชาย") {
      tscore = 49;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 1000 && a <= 1111 && adhd2_dscore === 17 && sex === "ชาย") {
      tscore = 48;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if ((a >= 1000 && a <= 1111 && adhd2_dscore === 15 && sex === "ชาย") || (a >= 1000 && a <= 1111 && adhd2_dscore === 16 && sex === "ชาย")) {
      tscore = 47;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 1000 && a <= 1111 && adhd2_dscore === 14 && sex === "ชาย") {
      tscore = 46;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 1000 && a <= 1111 && adhd2_dscore === 13 && sex === "ชาย") {
      tscore = 45;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if ((a >= 1000 && a <= 1111 && adhd2_dscore === 12 && sex === "ชาย") || (a >= 1000 && a <= 1111 && adhd2_dscore === 11 && sex === "ชาย")) {
      tscore = 44;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 1000 && a <= 1111 && adhd2_dscore === 10 && sex === "ชาย") {
      tscore = 43;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 1000 && a <= 1111 && adhd2_dscore === 9 && sex === "ชาย") {
      tscore = 42;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if ((a >= 1000 && a <= 1111 && adhd2_dscore === 8 && sex === "ชาย") || (a >= 1000 && a <= 1111 && adhd2_dscore === 7 && sex === "ชาย")) {
      tscore = 41;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 1000 && a <= 1111 && adhd2_dscore === 6 && sex === "ชาย") {
      tscore = 40;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 1000 && a <= 1111 && adhd2_dscore === 5 && sex === "ชาย") {
      tscore = 39;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if ((a >= 1000 && a <= 1111 && adhd2_dscore === 4 && sex === "ชาย") || (a >= 1000 && a <= 1111 && adhd2_dscore === 3 && sex === "ชาย")) {
      tscore = 38;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 1000 && a <= 1111 && adhd2_dscore === 2 && sex === "ชาย") {
      tscore = 37;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 1000 && a <= 1111 && adhd2_dscore === 1 && sex === "ชาย") {
      tscore = 36;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 1000 && a <= 1111 && adhd2_dscore === 0 && sex === "ชาย") {
      tscore = 35;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    }

    //12/13.11 ก.1 ขาดสมาธิ
    else if (a >= 1200 && a <= 1311 && adhd2_dscore === 45 && sex === "ชาย") {
      tscore = 69;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if ((a >= 1200 && a <= 1311 && adhd2_dscore === 43 && sex === "ชาย") || (a >= 1200 && a <= 1311 && adhd2_dscore === 44 && sex === "ชาย")) {
      tscore = 68;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd2_dscore === 42 && sex === "ชาย") {
      tscore = 67;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if ((a >= 1200 && a <= 1311 && adhd2_dscore === 40 && sex === "ชาย") || (a >= 1200 && a <= 1311 && adhd2_dscore === 41 && sex === "ชาย")) {
      tscore = 66;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd2_dscore === 39 && sex === "ชาย") {
      tscore = 65;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd2_dscore === 38 && sex === "ชาย") {
      tscore = 64;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if ((a >= 1200 && a <= 1311 && adhd2_dscore === 36 && sex === "ชาย") || (a >= 1200 && a <= 1311 && adhd2_dscore === 37 && sex === "ชาย")) {
      tscore = 63;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd2_dscore === 35 && sex === "ชาย") {
      tscore = 62;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd2_dscore === 34 && sex === "ชาย") {
      tscore = 61;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if ((a >= 1200 && a <= 1311 && adhd2_dscore === 32 && sex === "ชาย") || (a >= 1200 && a <= 1311 && adhd2_dscore === 33 && sex === "ชาย")) {
      tscore = 60;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd2_dscore === 31 && sex === "ชาย") {
      tscore = 59;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd2_dscore === 30 && sex === "ชาย") {
      tscore = 58;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if ((a >= 1200 && a <= 1311 && adhd2_dscore === 28 && sex === "ชาย") || (a >= 1200 && a <= 1311 && adhd2_dscore === 29 && sex === "ชาย")) {
      tscore = 57;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd2_dscore === 27 && sex === "ชาย") {
      tscore = 56;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd2_dscore === 26 && sex === "ชาย") {
      tscore = 55;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if ((a >= 1200 && a <= 1311 && adhd2_dscore === 24 && sex === "ชาย") || (a >= 1200 && a <= 1311 && adhd2_dscore === 25 && sex === "ชาย")) {
      tscore = 54;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd2_dscore === 23 && sex === "ชาย") {
      tscore = 53;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd2_dscore === 22 && sex === "ชาย") {
      tscore = 52;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if ((a >= 1200 && a <= 1311 && adhd2_dscore === 20 && sex === "ชาย") || (a >= 1200 && a <= 1311 && adhd2_dscore === 21 && sex === "ชาย")) {
      tscore = 51;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd2_dscore === 19 && sex === "ชาย") {
      tscore = 50;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd2_dscore === 18 && sex === "ชาย") {
      tscore = 49;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if ((a >= 1200 && a <= 1111 && adhd2_dscore === 16 && sex === "ชาย") || (a >= 1200 && a <= 1311 && adhd2_dscore === 17 && sex === "ชาย")) {
      tscore = 48;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd2_dscore === 15 && sex === "ชาย") {
      tscore = 47;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd2_dscore === 14 && sex === "ชาย") {
      tscore = 46;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if ((a >= 1200 && a <= 1311 && adhd2_dscore === 12 && sex === "ชาย") || (a >= 1200 && a <= 1311 && adhd2_dscore === 13 && sex === "ชาย")) {
      tscore = 45;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd2_dscore === 11 && sex === "ชาย") {
      tscore = 44;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd2_dscore === 10 && sex === "ชาย") {
      tscore = 43;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if ((a >= 1200 && a <= 1311 && adhd2_dscore === 8 && sex === "ชาย") || (a >= 1200 && a <= 1311 && adhd2_dscore === 9 && sex === "ชาย")) {
      tscore = 42;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd2_dscore === 7 && sex === "ชาย") {
      tscore = 41;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd2_dscore === 6 && sex === "ชาย") {
      tscore = 40;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if ((a >= 1200 && a <= 1311 && adhd2_dscore === 4 && sex === "ชาย") || (a >= 1200 && a <= 1311 && adhd2_dscore === 5 && sex === "ชาย")) {
      tscore = 39;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd2_dscore === 3 && sex === "ชาย") {
      tscore = 38;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd2_dscore === 2 && sex === "ชาย") {
      tscore = 37;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd2_dscore === 1 && sex === "ชาย") {
      tscore = 36;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd2_dscore === 0 && sex === "ชาย") {
      tscore = 35;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    }

    //6/7.11 ก.2 ขาดสมาธิ 
    else if ((a >= 600 && a <= 711 && adhd2_dscore === 44 && sex === "หญิง") || (a >= 600 && a <= 711 && adhd2_dscore === 45 && sex === "หญิง")) {
      tscore = 77;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 600 && a <= 711 && adhd2_dscore === 43 && sex === "หญิง") {
      tscore = 76;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 600 && a <= 711 && adhd2_dscore === 42 && sex === "หญิง") {
      tscore = 75;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 600 && a <= 711 && adhd2_dscore === 41 && sex === "หญิง") {
      tscore = 74;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 600 && a <= 711 && adhd2_dscore === 40 && sex === "หญิง") {
      tscore = 73;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 600 && a <= 711 && adhd2_dscore === 39 && sex === "หญิง") {
      tscore = 72;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if ((a >= 600 && a <= 711 && adhd2_dscore === 37 && sex === "หญิง") || (a >= 600 && a <= 711 && adhd2_dscore === 38 && sex === "หญิง")) {
      tscore = 71;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 600 && a <= 711 && adhd2_dscore === 36 && sex === "หญิง") {
      tscore = 70;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if (a >= 600 && a <= 711 && adhd2_dscore === 35 && sex === "หญิง") {
      tscore = 69;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if (a >= 600 && a <= 711 && adhd2_dscore === 34 && sex === "หญิง") {
      tscore = 68;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if (a >= 600 && a <= 711 && adhd2_dscore === 33 && sex === "หญิง") {
      tscore = 67;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if ((a >= 600 && a <= 711 && adhd2_dscore === 31 && sex === "หญิง") || (a >= 600 && a <= 711 && adhd2_dscore === 32 && sex === "หญิง")) {
      tscore = 66;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if (a >= 600 && a <= 711 && adhd2_dscore === 30 && sex === "หญิง") {
      tscore = 65;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if (a >= 600 && a <= 711 && adhd2_dscore === 29 && sex === "หญิง") {
      tscore = 64;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 711 && adhd2_dscore === 28 && sex === "หญิง") {
      tscore = 63;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if (a >= 600 && a <= 711 && adhd2_dscore === 27 && sex === "หญิง") {
      tscore = 62;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if (a >= 600 && a <= 711 && adhd2_dscore === 26 && sex === "หญิง") {
      tscore = 61;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if ((a >= 600 && a <= 711 && adhd2_dscore === 24 && sex === "หญิง") || (a >= 600 && a <= 711 && adhd2_dscore === 25 && sex === "หญิง")) {
      tscore = 60;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if (a >= 600 && a <= 711 && adhd2_dscore === 23 && sex === "หญิง") {
      tscore = 59;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if (a >= 600 && a <= 711 && adhd2_dscore === 22 && sex === "หญิง") {
      tscore = 58;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if (a >= 600 && a <= 711 && adhd2_dscore === 21 && sex === "หญิง") {
      tscore = 57;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if (a >= 600 && a <= 711 && adhd2_dscore === 20 && sex === "หญิง") {
      tscore = 56;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if ((a >= 600 && a <= 711 && adhd2_dscore === 18 && sex === "หญิง") || (a >= 600 && a <= 711 && adhd2_dscore === 19 && sex === "หญิง")) {
      tscore = 55;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if (a >= 600 && a <= 711 && adhd2_dscore === 17 && sex === "หญิง") {
      tscore = 54;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if (a >= 600 && a <= 711 && adhd2_dscore === 16 && sex === "หญิง") {
      tscore = 53;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if (a >= 600 && a <= 711 && adhd2_dscore === 15 && sex === "หญิง") {
      tscore = 52;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if (a >= 600 && a <= 711 && adhd2_dscore === 14 && sex === "หญิง") {
      tscore = 51;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if ((a >= 600 && a <= 711 && adhd2_dscore === 12 && sex === "หญิง") || (a >= 600 && a <= 711 && adhd2_dscore === 13 && sex === "หญิง")) {
      tscore = 50;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 600 && a <= 711 && adhd2_dscore === 11 && sex === "หญิง") {
      tscore = 49;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 600 && a <= 711 && adhd2_dscore === 10 && sex === "หญิง") {
      tscore = 48;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 600 && a <= 711 && adhd2_dscore === 9 && sex === "หญิง") {
      tscore = 47;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 600 && a <= 711 && adhd2_dscore === 8 && sex === "หญิง") {
      tscore = 46;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 600 && a <= 711 && adhd2_dscore === 7 && sex === "หญิง") {
      tscore = 45;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 600 && a <= 711 && adhd2_dscore === 6 && sex === "หญิง") {
      tscore = 44;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 600 && a <= 711 && adhd2_dscore === 5 && sex === "หญิง") {
      tscore = 44;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 600 && a <= 711 && adhd2_dscore === 4 && sex === "หญิง") {
      tscore = 43;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 600 && a <= 711 && adhd2_dscore === 3 && sex === "หญิง") {
      tscore = 42;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 600 && a <= 711 && adhd2_dscore === 2 && sex === "หญิง") {
      tscore = 41;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 600 && a <= 711 && adhd2_dscore === 1 && sex === "หญิง") {
      tscore = 40;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 600 && a <= 711 && adhd2_dscore === 0 && sex === "หญิง") {
      tscore = 39;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    }

    //8/9.11  ก.2 ขาดสมาธิ 
    else if ((a >= 800 && a <= 911 && adhd2_dscore === 44 && sex === "หญิง") || (a >= 800 && a <= 911 && adhd2_dscore === 45 && sex === "หญิง")) {
      tscore = 78;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 800 && a <= 911 && adhd2_dscore === 43 && sex === "หญิง") {
      tscore = 77;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 800 && a <= 911 && adhd2_dscore === 42 && sex === "หญิง") {
      tscore = 76;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 800 && a <= 911 && adhd2_dscore === 41 && sex === "หญิง") {
      tscore = 75;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 800 && a <= 911 && adhd2_dscore === 40 && sex === "หญิง") {
      tscore = 74;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 800 && a <= 911 && adhd2_dscore === 39 && sex === "หญิง") {
      tscore = 73;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if ((a >= 800 && a <= 911 && adhd2_dscore === 37 && sex === "หญิง") || (a >= 800 && a <= 911 && adhd2_dscore === 38 && sex === "หญิง")) {
      tscore = 72;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 800 && a <= 911 && adhd2_dscore === 36 && sex === "หญิง") {
      tscore = 71;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 800 && a <= 911 && adhd2_dscore === 35 && sex === "หญิง") {
      tscore = 70;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if (a >= 800 && a <= 911 && adhd2_dscore === 34 && sex === "หญิง") {
      tscore = 69;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if (a >= 800 && a <= 911 && adhd2_dscore === 33 && sex === "หญิง") {
      tscore = 68;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if (a >= 800 && a <= 911 && adhd2_dscore === 32 && sex === "หญิง") {
      tscore = 67;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if ((a >= 800 && a <= 911 && adhd2_dscore === 30 && sex === "หญิง") || (a >= 800 && a <= 911 && adhd2_dscore === 31 && sex === "หญิง")) {
      tscore = 66;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if (a >= 800 && a <= 911 && adhd2_dscore === 29 && sex === "หญิง") {
      tscore = 65;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if (a >= 800 && a <= 911 && adhd2_dscore === 28 && sex === "หญิง") {
      tscore = 64;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if (a >= 800 && a <= 911 && adhd2_dscore === 27 && sex === "หญิง") {
      tscore = 63;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if (a >= 800 && a <= 911 && adhd2_dscore === 26 && sex === "หญิง") {
      tscore = 62;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if (a >= 800 && a <= 911 && adhd2_dscore === 25 && sex === "หญิง") {
      tscore = 61;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if ((a >= 800 && a <= 911 && adhd2_dscore === 23 && sex === "หญิง") || (a >= 800 && a <= 911 && adhd2_dscore === 24 && sex === "หญิง")) {
      tscore = 60;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if (a >= 800 && a <= 911 && adhd2_dscore === 22 && sex === "หญิง") {
      tscore = 59;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if (a >= 800 && a <= 911 && adhd2_dscore === 21 && sex === "หญิง") {
      tscore = 58;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if (a >= 800 && a <= 911 && adhd2_dscore === 20 && sex === "หญิง") {
      tscore = 57;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if (a >= 800 && a <= 911 && adhd2_dscore === 19 && sex === "หญิง") {
      tscore = 56;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if (a >= 800 && a <= 911 && adhd2_dscore === 18 && sex === "หญิง") {
      tscore = 55;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if ((a >= 800 && a <= 911 && adhd2_dscore === 16 && sex === "หญิง") || (a >= 800 && a <= 911 && adhd2_dscore === 17 && sex === "หญิง")) {
      tscore = 54;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if (a >= 800 && a <= 911 && adhd2_dscore === 15 && sex === "หญิง") {
      tscore = 53;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if (a >= 800 && a <= 911 && adhd2_dscore === 14 && sex === "หญิง") {
      tscore = 52;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if (a >= 800 && a <= 911 && adhd2_dscore === 13 && sex === "หญิง") {
      tscore = 51;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if (a >= 800 && a <= 911 && adhd2_dscore === 12 && sex === "หญิง") {
      tscore = 50;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 800 && a <= 911 && adhd2_dscore === 11 && sex === "หญิง") {
      tscore = 49;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if ((a >= 800 && a <= 911 && adhd2_dscore === 10 && sex === "หญิง") || (a >= 800 && a <= 911 && adhd2_dscore === 9 && sex === "หญิง")) {
      tscore = 48;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 800 && a <= 911 && adhd2_dscore === 8 && sex === "หญิง") {
      tscore = 47;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 800 && a <= 911 && adhd2_dscore === 7 && sex === "หญิง") {
      tscore = 46;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 800 && a <= 911 && adhd2_dscore === 6 && sex === "หญิง") {
      tscore = 45;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 800 && a <= 911 && adhd2_dscore === 5 && sex === "หญิง") {
      tscore = 44;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 800 && a <= 911 && adhd2_dscore === 4 && sex === "หญิง") {
      tscore = 43;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if ((a >= 800 && a <= 911 && adhd2_dscore === 3 && sex === "หญิง") || (a >= 800 && a <= 911 && adhd2_dscore === 2 && sex === "หญิง")) {
      tscore = 42;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 800 && a <= 911 && adhd2_dscore === 1 && sex === "หญิง") {
      tscore = 41;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 800 && a <= 911 && adhd2_dscore === 0 && sex === "หญิง") {
      tscore = 40;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    }

    //10/11.11 ก.2 ขาดสมาธิ
    else if (a >= 1000 && a <= 1111 && adhd2_dscore === 45 && sex === "หญิง") {
      tscore = 80;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 1000 && a <= 1111 && adhd2_dscore === 44 && sex === "หญิง") {
      tscore = 79;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 1000 && a <= 1111 && adhd2_dscore === 43 && sex === "หญิง") {
      tscore = 78;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 1000 && a <= 1111 && adhd2_dscore === 42 && sex === "หญิง") {
      tscore = 77;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 1000 && a <= 1111 && adhd2_dscore === 41 && sex === "หญิง") {
      tscore = 76;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 1000 && a <= 1111 && adhd2_dscore === 40 && sex === "หญิง") {
      tscore = 75;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if ((a >= 1000 && a <= 1111 && adhd2_dscore === 38 && sex === "หญิง") || (a >= 1000 && a <= 1111 && adhd2_dscore === 39 && sex === "หญิง")) {
      tscore = 74;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 1000 && a <= 1111 && adhd2_dscore === 37 && sex === "หญิง") {
      tscore = 73;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 1000 && a <= 1111 && adhd2_dscore === 36 && sex === "หญิง") {
      tscore = 72;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 1000 && a <= 1111 && adhd2_dscore === 35 && sex === "หญิง") {
      tscore = 71;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 1000 && a <= 1111 && adhd2_dscore === 34 && sex === "หญิง") {
      tscore = 70;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if (a >= 1000 && a <= 1111 && adhd2_dscore === 33 && sex === "หญิง") {
      tscore = 69;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if (a >= 800 && a <= 1111 && adhd2_dscore === 32 && sex === "หญิง") {
      tscore = 68;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if (a >= 1000 && a <= 1111 && adhd2_dscore === 31 && sex === "หญิง") {
      tscore = 67;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if ((a >= 1000 && a <= 1111 && adhd2_dscore === 29 && sex === "หญิง") || (a >= 1000 && a <= 1111 && adhd2_dscore === 30 && sex === "หญิง")) {
      tscore = 66;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if (a >= 1000 && a <= 1111 && adhd2_dscore === 28 && sex === "หญิง") {
      tscore = 65;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if (a >= 1000 && a <= 1111 && adhd2_dscore === 27 && sex === "หญิง") {
      tscore = 64;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if (a >= 1000 && a <= 1111 && adhd2_dscore === 26 && sex === "หญิง") {
      tscore = 63;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if (a >= 1000 && a <= 1111 && adhd2_dscore === 25 && sex === "หญิง") {
      tscore = 62;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if (a >= 800 && a <= 1111 && adhd2_dscore === 24 && sex === "หญิง") {
      tscore = 61;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if (a >= 1000 && a <= 1111 && adhd2_dscore === 23 && sex === "หญิง") {
      tscore = 60;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if (a >= 1000 && a <= 1111 && adhd2_dscore === 22 && sex === "หญิง") {
      tscore = 59;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if ((a >= 1000 && a <= 1111 && adhd2_dscore === 20 && sex === "หญิง") || (a >= 1000 && a <= 1111 && adhd2_dscore === 21 && sex === "หญิง")) {
      tscore = 58;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if (a >= 1000 && a <= 1111 && adhd2_dscore === 19 && sex === "หญิง") {
      tscore = 57;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if (a >= 1000 && a <= 1111 && adhd2_dscore === 18 && sex === "หญิง") {
      tscore = 56;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if (a >= 1000 && a <= 1111 && adhd2_dscore === 17 && sex === "หญิง") {
      tscore = 55;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if (a >= 1000 && a <= 1111 && adhd2_dscore === 16 && sex === "หญิง") {
      tscore = 54;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if (a >= 1000 && a <= 1111 && adhd2_dscore === 15 && sex === "หญิง") {
      tscore = 53;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if (a >= 1000 && a <= 1111 && adhd2_dscore === 14 && sex === "หญิง") {
      tscore = 52;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if (a >= 1000 && a <= 1111 && adhd2_dscore === 13 && sex === "หญิง") {
      tscore = 51;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if (a >= 1000 && a <= 1111 && adhd2_dscore === 12 && sex === "หญิง") {
      tscore = 50;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if ((a >= 1000 && a <= 1111 && adhd2_dscore === 11 && sex === "หญิง") || (a >= 1000 && a <= 1111 && adhd2_dscore === 10 && sex === "หญิง")) {
      tscore = 49;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 1000 && a <= 1111 && adhd2_dscore === 9 && sex === "หญิง") {
      tscore = 48;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 1000 && a <= 1111 && adhd2_dscore === 8 && sex === "หญิง") {
      tscore = 47;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 1000 && a <= 1111 && adhd2_dscore === 7 && sex === "หญิง") {
      tscore = 46;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 1000 && a <= 1111 && adhd2_dscore === 6 && sex === "หญิง") {
      tscore = 45;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 1000 && a <= 1111 && adhd2_dscore === 5 && sex === "หญิง") {
      tscore = 44;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 1000 && a <= 1111 && adhd2_dscore === 4 && sex === "หญิง") {
      tscore = 43;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 1000 && a <= 1111 && adhd2_dscore === 3 && sex === "หญิง") {
      tscore = 42;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if ((a >= 1000 && a <= 1111 && adhd2_dscore === 2 && sex === "หญิง") || (a >= 1000 && a <= 1111 && adhd2_dscore === 1 && sex === "หญิง")) {
      tscore = 41;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 1000 && a <= 1111 && adhd2_dscore === 0 && sex === "หญิง") {
      tscore = 40;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    }

    //12/13.11 ก.2 ขาดสมาธิ
    if (a >= 1200 && a <= 1311 && adhd2_dscore === 45 && sex === "หญิง") {
      tscore = 83;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd2_dscore === 44 && sex === "หญิง") {
      tscore = 82;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd2_dscore === 43 && sex === "หญิง") {
      tscore = 81;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd2_dscore === 42 && sex === "หญิง") {
      tscore = 80;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd2_dscore === 41 && sex === "หญิง") {
      tscore = 79;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd2_dscore === 40 && sex === "หญิง") {
      tscore = 78;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd2_dscore === 39 && sex === "หญิง") {
      tscore = 77;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd2_dscore === 38 && sex === "หญิง") {
      tscore = 76;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd2_dscore === 37 && sex === "หญิง") {
      tscore = 75;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd2_dscore === 36 && sex === "หญิง") {
      tscore = 74;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd2_dscore === 35 && sex === "หญิง") {
      tscore = 73;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd2_dscore === 34 && sex === "หญิง") {
      tscore = 72;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd2_dscore === 33 && sex === "หญิง") {
      tscore = 71;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd2_dscore === 32 && sex === "หญิง") {
      tscore = 70;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd2_dscore === 31 && sex === "หญิง") {
      tscore = 69;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd2_dscore === 30 && sex === "หญิง") {
      tscore = 68;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd2_dscore === 29 && sex === "หญิง") {
      tscore = 67;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd2_dscore === 28 && sex === "หญิง") {
      tscore = 66;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd2_dscore === 27 && sex === "หญิง") {
      tscore = 65;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd2_dscore === 26 && sex === "หญิง") {
      tscore = 64;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd2_dscore === 25 && sex === "หญิง") {
      tscore = 63;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if ((a >= 1200 && a <= 1311 && adhd2_dscore === 23 && sex === "หญิง") || (a >= 1200 && a <= 1311 && adhd2_dscore === 24 && sex === "หญิง")) {
      tscore = 62;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd2_dscore === 22 && sex === "หญิง") {
      tscore = 61;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd2_dscore === 21 && sex === "หญิง") {
      tscore = 60;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd2_dscore === 20 && sex === "หญิง") {
      tscore = 59;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd2_dscore === 19 && sex === "หญิง") {
      tscore = 58;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd2_dscore === 18 && sex === "หญิง") {
      tscore = 57;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd2_dscore === 17 && sex === "หญิง") {
      tscore = 56;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd2_dscore === 16 && sex === "หญิง") {
      tscore = 55;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd2_dscore === 15 && sex === "หญิง") {
      tscore = 54;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd2_dscore === 14 && sex === "หญิง") {
      tscore = 53;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd2_dscore === 13 && sex === "หญิง") {
      tscore = 52;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd2_dscore === 12 && sex === "หญิง") {
      tscore = 51;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd2_dscore === 11 && sex === "หญิง") {
      tscore = 50;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd2_dscore === 10 && sex === "หญิง") {
      tscore = 49;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd2_dscore === 9 && sex === "หญิง") {
      tscore = 48;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd2_dscore === 8 && sex === "หญิง") {
      tscore = 47;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd2_dscore === 7 && sex === "หญิง") {
      tscore = 46;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd2_dscore === 6 && sex === "หญิง") {
      tscore = 45;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd2_dscore === 5 && sex === "หญิง") {
      tscore = 44;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd2_dscore === 4 && sex === "หญิง") {
      tscore = 43;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd2_dscore === 3 && sex === "หญิง") {
      tscore = 42;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd2_dscore === 2 && sex === "หญิง") {
      tscore = 41;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd2_dscore === 1 && sex === "หญิง") {
      tscore = 40;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd2_dscore === 0 && sex === "หญิง") {
      tscore = 39;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    }

    //12/13.11 ก.2 ขาดสมาธิ
    else if (a >= 1200 && a <= 1311 && adhd2_dscore === 45 && sex === "หญิง") {
      tscore = 83;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd2_dscore === 44 && sex === "หญิง") {
      tscore = 82;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd2_dscore === 43 && sex === "หญิง") {
      tscore = 81;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd2_dscore === 42 && sex === "หญิง") {
      tscore = 80;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd2_dscore === 41 && sex === "หญิง") {
      tscore = 79;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd2_dscore === 40 && sex === "หญิง") {
      tscore = 78;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd2_dscore === 39 && sex === "หญิง") {
      tscore = 77;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd2_dscore === 38 && sex === "หญิง") {
      tscore = 76;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd2_dscore === 37 && sex === "หญิง") {
      tscore = 75;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd2_dscore === 36 && sex === "หญิง") {
      tscore = 74;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd2_dscore === 35 && sex === "หญิง") {
      tscore = 73;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd2_dscore === 34 && sex === "หญิง") {
      tscore = 72;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd2_dscore === 33 && sex === "หญิง") {
      tscore = 71;
      //console.log("tscore = " + tscore);
      group = 4;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd2_dscore === 32 && sex === "หญิง") {
      tscore = 70;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd2_dscore === 31 && sex === "หญิง") {
      tscore = 69;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd2_dscore === 30 && sex === "หญิง") {
      tscore = 68;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd2_dscore === 29 && sex === "หญิง") {
      tscore = 67;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd2_dscore === 28 && sex === "หญิง") {
      tscore = 66;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd2_dscore === 27 && sex === "หญิง") {
      tscore = 65;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd2_dscore === 26 && sex === "หญิง") {
      tscore = 64;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd2_dscore === 25 && sex === "หญิง") {
      tscore = 63;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if ((a >= 1200 && a <= 1311 && adhd2_dscore === 23 && sex === "หญิง") || (a >= 1200 && a <= 1311 && adhd2_dscore === 24 && sex === "หญิง")) {
      tscore = 62;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd2_dscore === 22 && sex === "หญิง") {
      tscore = 61;
      //console.log("tscore = " + tscore);
      group = 3;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd2_dscore === 21 && sex === "หญิง") {
      tscore = 60;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd2_dscore === 20 && sex === "หญิง") {
      tscore = 59;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd2_dscore === 19 && sex === "หญิง") {
      tscore = 58;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd2_dscore === 18 && sex === "หญิง") {
      tscore = 57;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd2_dscore === 17 && sex === "หญิง") {
      tscore = 56;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd2_dscore === 16 && sex === "หญิง") {
      tscore = 55;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd2_dscore === 15 && sex === "หญิง") {
      tscore = 54;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd2_dscore === 14 && sex === "หญิง") {
      tscore = 53;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd2_dscore === 13 && sex === "หญิง") {
      tscore = 52;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd2_dscore === 12 && sex === "หญิง") {
      tscore = 51;
      //console.log("tscore = " + tscore);
      group = 2;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd2_dscore === 11 && sex === "หญิง") {
      tscore = 50;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd2_dscore === 10 && sex === "หญิง") {
      tscore = 49;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd2_dscore === 9 && sex === "หญิง") {
      tscore = 48;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd2_dscore === 8 && sex === "หญิง") {
      tscore = 47;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd2_dscore === 7 && sex === "หญิง") {
      tscore = 46;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd2_dscore === 6 && sex === "หญิง") {
      tscore = 45;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd2_dscore === 5 && sex === "หญิง") {
      tscore = 44;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd2_dscore === 4 && sex === "หญิง") {
      tscore = 43;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd2_dscore === 3 && sex === "หญิง") {
      tscore = 42;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd2_dscore === 2 && sex === "หญิง") {
      tscore = 41;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd2_dscore === 1 && sex === "หญิง") {
      tscore = 40;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    } else if (a >= 1200 && a <= 1311 && adhd2_dscore === 0 && sex === "หญิง") {
      tscore = 39;
      //console.log("tscore = " + tscore);
      group = 1;
      //console.log("group = " + group);
    }

    const adhd1_dscore = adhd1data.adhd1_dscore
    const adhd1_tscore = adhd1data.adhd1_tscore
    const adhd1_group = adhd1data.adhd1_group
    const adhd2_tscore = tscore
    const adhd2_group = group

    const sumadhd_dscore = adhd1data.adhd1_dscore + adhd2_dscore
    //6/7.11 ก.1 รวม ชาย
    if (a >= 600 && a <= 711 && sumadhd_dscore === 90 && sex === "ชาย") {
      sumadhd_tscore = 77;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);   
      sumadhd_group = 4;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 600 && a <= 711 && sumadhd_dscore === 88 && sex === "ชาย") || (a >= 600 && a <= 711 && sumadhd_dscore === 89 && sex === "ชาย")) {
      sumadhd_tscore = 76;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 4;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 600 && a <= 711 && sumadhd_dscore === 86 && sex === "ชาย") || (a >= 600 && a <= 711 && sumadhd_dscore === 87 && sex === "ชาย")) {
      sumadhd_tscore = 75;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 4;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if (((a >= 600 && a <= 711 && sumadhd_dscore === 83 && sex === "ชาย") || (a >= 600 && a <= 711 && sumadhd_dscore === 84 && sex === "ชาย")) || (a >= 600 && a <= 711 && sumadhd_dscore === 85 && sex === "ชาย")) {
      sumadhd_tscore = 74;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 4;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 600 && a <= 711 && sumadhd_dscore === 81 && sex === "ชาย") || (a >= 600 && a <= 711 && sumadhd_dscore === 82 && sex === "ชาย")) {
      sumadhd_tscore = 73;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 4;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 600 && a <= 711 && sumadhd_dscore === 79 && sex === "ชาย") || (a >= 600 && a <= 711 && sumadhd_dscore === 80 && sex === "ชาย")) {
      sumadhd_tscore = 72;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 4;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 600 && a <= 711 && sumadhd_dscore === 77 && sex === "ชาย") || (a >= 600 && a <= 711 && sumadhd_dscore === 78 && sex === "ชาย")) {
      sumadhd_tscore = 71;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 4;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 600 && a <= 711 && sumadhd_dscore === 75 && sex === "ชาย") || (a >= 600 && a <= 711 && sumadhd_dscore === 76 && sex === "ชาย")) {
      sumadhd_tscore = 70;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 3;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 600 && a <= 711 && sumadhd_dscore === 73 && sex === "ชาย") || (a >= 600 && a <= 711 && sumadhd_dscore === 74 && sex === "ชาย")) {
      sumadhd_tscore = 69;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 3;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if (((a >= 600 && a <= 711 && sumadhd_dscore === 70 && sex === "ชาย") || (a >= 600 && a <= 711 && sumadhd_dscore === 71 && sex === "ชาย")) || (a >= 600 && a <= 711 && sumadhd_dscore === 72 && sex === "ชาย")) {
      sumadhd_tscore = 68;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 3;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 600 && a <= 711 && sumadhd_dscore === 68 && sex === "ชาย") || (a >= 600 && a <= 711 && sumadhd_dscore === 69 && sex === "ชาย")) {
      sumadhd_tscore = 67;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 3;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 600 && a <= 711 && sumadhd_dscore === 66 && sex === "ชาย") || (a >= 600 && a <= 711 && sumadhd_dscore === 67 && sex === "ชาย")) {
      sumadhd_tscore = 66;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 3;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 600 && a <= 711 && sumadhd_dscore === 64 && sex === "ชาย") || (a >= 1200 && a <= 711 && sumadhd_dscore === 65 && sex === "ชาย")) {
      sumadhd_tscore = 65;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 3;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 600 && a <= 711 && sumadhd_dscore === 62 && sex === "ชาย") || (a >= 600 && a <= 711 && sumadhd_dscore === 63 && sex === "ชาย")) {
      sumadhd_tscore = 64;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 3;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 600 && a <= 711 && sumadhd_dscore === 60 && sex === "ชาย") || (a >= 600 && a <= 711 && sumadhd_dscore === 61 && sex === "ชาย")) {
      sumadhd_tscore = 63;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 3;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if (((a >= 600 && a <= 711 && sumadhd_dscore === 57 && sex === "ชาย") || (a >= 600 && a <= 711 && sumadhd_dscore === 58 && sex === "ชาย")) || (a >= 600 && a <= 711 && sumadhd_dscore === 59 && sex === "ชาย")) {
      sumadhd_tscore = 62;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 3;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 600 && a <= 711 && sumadhd_dscore === 55 && sex === "ชาย") || (a >= 600 && a <= 711 && sumadhd_dscore === 56 && sex === "ชาย")) {
      sumadhd_tscore = 61;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 3;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 600 && a <= 711 && sumadhd_dscore === 53 && sex === "ชาย") || (a >= 600 && a <= 711 && sumadhd_dscore === 54 && sex === "ชาย")) {
      sumadhd_tscore = 60;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 2;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 600 && a <= 711 && sumadhd_dscore === 51 && sex === "ชาย") || (a >= 600 && a <= 711 && sumadhd_dscore === 52 && sex === "ชาย")) {
      sumadhd_tscore = 59;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 2;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 600 && a <= 711 && sumadhd_dscore === 49 && sex === "ชาย") || (a >= 600 && a <= 711 && sumadhd_dscore === 50 && sex === "ชาย")) {
      sumadhd_tscore = 58;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 2;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 600 && a <= 711 && sumadhd_dscore === 47 && sex === "ชาย") || (a >= 600 && a <= 711 && sumadhd_dscore === 48 && sex === "ชาย")) {
      sumadhd_tscore = 57;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 2;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if (((a >= 600 && a <= 711 && sumadhd_dscore === 44 && sex === "ชาย") || (a >= 600 && a <= 711 && sumadhd_dscore === 45 && sex === "ชาย")) || (a >= 600 && a <= 711 && sumadhd_dscore === 47 && sex === "ชาย")) {
      sumadhd_tscore = 56;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 2;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 600 && a <= 711 && sumadhd_dscore === 42 && sex === "ชาย") || (a >= 600 && a <= 711 && sumadhd_dscore === 43 && sex === "ชาย")) {
      sumadhd_tscore = 55;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 2;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 600 && a <= 711 && sumadhd_dscore === 40 && sex === "ชาย") || (a >= 600 && a <= 711 && sumadhd_dscore === 41 && sex === "ชาย")) {
      sumadhd_tscore = 54;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 2;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 600 && a <= 711 && sumadhd_dscore === 38 && sex === "ชาย") || (a >= 600 && a <= 711 && sumadhd_dscore === 39 && sex === "ชาย")) {
      sumadhd_tscore = 53;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 2;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 600 && a <= 711 && sumadhd_dscore === 36 && sex === "ชาย") || (a >= 600 && a <= 711 && sumadhd_dscore === 37 && sex === "ชาย")) {
      sumadhd_tscore = 52;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 2;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 600 && a <= 711 && sumadhd_dscore === 34 && sex === "ชาย") || (a >= 600 && a <= 711 && sumadhd_dscore === 35 && sex === "ชาย")) {
      sumadhd_tscore = 51;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 2;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if (((a >= 600 && a <= 711 && sumadhd_dscore === 31 && sex === "ชาย") || (a >= 600 && a <= 711 && sumadhd_dscore === 32 && sex === "ชาย")) || (a >= 600 && a <= 711 && sumadhd_dscore === 33 && sex === "ชาย")) {
      sumadhd_tscore = 50;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 1;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 600 && a <= 711 && sumadhd_dscore === 29 && sex === "ชาย") || (a >= 600 && a <= 711 && sumadhd_dscore === 30 && sex === "ชาย")) {
      sumadhd_tscore = 49;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 1;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 600 && a <= 711 && sumadhd_dscore === 27 && sex === "ชาย") || (a >= 600 && a <= 711 && sumadhd_dscore === 28 && sex === "ชาย")) {
      sumadhd_tscore = 48;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 1;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 600 && a <= 711 && sumadhd_dscore === 25 && sex === "ชาย") || (a >= 600 && a <= 711 && sumadhd_dscore === 26 && sex === "ชาย")) {
      sumadhd_tscore = 47;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 1;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 600 && a <= 711 && sumadhd_dscore === 23 && sex === "ชาย") || (a >= 600 && a <= 711 && sumadhd_dscore === 24 && sex === "ชาย")) {
      sumadhd_tscore = 46;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 1;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if (((a >= 600 && a <= 711 && sumadhd_dscore === 20 && sex === "ชาย") || (a >= 600 && a <= 711 && sumadhd_dscore === 21 && sex === "ชาย")) || (a >= 600 && a <= 711 && sumadhd_dscore === 22 && sex === "ชาย")) {
      sumadhd_tscore = 45;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 1;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 600 && a <= 711 && sumadhd_dscore === 18 && sex === "ชาย") || (a >= 600 && a <= 711 && sumadhd_dscore === 19 && sex === "ชาย")) {
      sumadhd_tscore = 44;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 1;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 600 && a <= 711 && sumadhd_dscore === 16 && sex === "ชาย") || (a >= 600 && a <= 711 && sumadhd_dscore === 17 && sex === "ชาย")) {
      sumadhd_tscore = 43;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 1;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 600 && a <= 711 && sumadhd_dscore === 14 && sex === "ชาย") || (a >= 600 && a <= 711 && sumadhd_dscore === 15 && sex === "ชาย")) {
      sumadhd_tscore = 42;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 1;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 600 && a <= 711 && sumadhd_dscore === 12 && sex === "ชาย") || (a >= 600 && a <= 711 && sumadhd_dscore === 13 && sex === "ชาย")) {
      sumadhd_tscore = 41;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 1;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 600 && a <= 711 && sumadhd_dscore === 10 && sex === "ชาย") || (a >= 600 && a <= 711 && sumadhd_dscore === 11 && sex === "ชาย")) {
      sumadhd_tscore = 40;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 1;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if (((a >= 600 && a <= 711 && sumadhd_dscore === 7 && sex === "ชาย") || (a >= 600 && a <= 711 && sumadhd_dscore === 8 && sex === "ชาย")) || (a >= 600 && a <= 711 && sumadhd_dscore === 9 && sex === "ชาย")) {
      sumadhd_tscore = 39;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 1;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 600 && a <= 711 && sumadhd_dscore === 5 && sex === "ชาย") || (a >= 600 && a <= 711 && sumadhd_dscore === 6 && sex === "ชาย")) {
      sumadhd_tscore = 38;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 1;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 600 && a <= 711 && sumadhd_dscore === 3 && sex === "ชาย") || (a >= 600 && a <= 711 && sumadhd_dscore === 4 && sex === "ชาย")) {
      sumadhd_tscore = 37;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 1;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 600 && a <= 711 && sumadhd_dscore === 1 && sex === "ชาย") || (a >= 600 && a <= 711 && sumadhd_dscore === 2 && sex === "ชาย")) {
      sumadhd_tscore = 36;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 1;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if (a >= 600 && a <= 711 && sumadhd_dscore === 0 && sex === "ชาย") {
      sumadhd_tscore = 35;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 1;
      //console.log("sumadhd_group = " + sumadhd_group);
    }
    //8/9.11 ก.1 รวม ชาย
    else if (((a >= 800 && a <= 911 && sumadhd_dscore === 88 && sex === "ชาย") || (a >= 800 && a <= 911 && sumadhd_dscore === 89 && sex === "ชาย")) || (a >= 800 && a <= 911 && sumadhd_dscore === 90 && sex === "ชาย")) {
      sumadhd_tscore = 75;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 4;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 800 && a <= 911 && sumadhd_dscore === 86 && sex === "ชาย") || (a >= 800 && a <= 911 && sumadhd_dscore === 87 && sex === "ชาย")) {
      sumadhd_tscore = 74;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 4;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 800 && a <= 911 && sumadhd_dscore === 84 && sex === "ชาย") || (a >= 800 && a <= 911 && sumadhd_dscore === 85 && sex === "ชาย")) {
      sumadhd_tscore = 73;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 4;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 800 && a <= 911 && sumadhd_dscore === 82 && sex === "ชาย") || (a >= 800 && a <= 911 && sumadhd_dscore === 83 && sex === "ชาย")) {
      sumadhd_tscore = 72;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 4;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if (((a >= 800 && a <= 911 && sumadhd_dscore === 79 && sex === "ชาย") || (a >= 800 && a <= 911 && sumadhd_dscore === 80 && sex === "ชาย")) || (a >= 800 && a <= 911 && sumadhd_dscore === 81 && sex === "ชาย")) {
      sumadhd_tscore = 71;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 4;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 800 && a <= 911 && sumadhd_dscore === 77 && sex === "ชาย") || (a >= 800 && a <= 911 && sumadhd_dscore === 78 && sex === "ชาย")) {
      sumadhd_tscore = 70;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 3;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 800 && a <= 911 && sumadhd_dscore === 75 && sex === "ชาย") || (a >= 800 && a <= 911 && sumadhd_dscore === 76 && sex === "ชาย")) {
      sumadhd_tscore = 69;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 3;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 800 && a <= 911 && sumadhd_dscore === 73 && sex === "ชาย") || (a >= 800 && a <= 911 && sumadhd_dscore === 74 && sex === "ชาย")) {
      sumadhd_tscore = 68;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 3;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if (((a >= 800 && a <= 911 && sumadhd_dscore === 70 && sex === "ชาย") || (a >= 800 && a <= 911 && sumadhd_dscore === 71 && sex === "ชาย")) || (a >= 800 && a <= 911 && sumadhd_dscore === 72 && sex === "ชาย")) {
      sumadhd_tscore = 67;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 3;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 800 && a <= 911 && sumadhd_dscore === 68 && sex === "ชาย") || (a >= 800 && a <= 911 && sumadhd_dscore === 69 && sex === "ชาย")) {
      sumadhd_tscore = 66;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 3;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 800 && a <= 911 && sumadhd_dscore === 66 && sex === "ชาย") || (a >= 800 && a <= 911 && sumadhd_dscore === 67 && sex === "ชาย")) {
      sumadhd_tscore = 65;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 3;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 800 && a <= 911 && sumadhd_dscore === 64 && sex === "ชาย") || (a >= 800 && a <= 911 && sumadhd_dscore === 65 && sex === "ชาย")) {
      sumadhd_tscore = 64;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 3;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if (((a >= 800 && a <= 911 && sumadhd_dscore === 61 && sex === "ชาย") || (a >= 800 && a <= 911 && sumadhd_dscore === 62 && sex === "ชาย")) || (a >= 800 && a <= 911 && sumadhd_dscore === 63 && sex === "ชาย")) {
      sumadhd_tscore = 63;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 3;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 800 && a <= 911 && sumadhd_dscore === 59 && sex === "ชาย") || (a >= 800 && a <= 911 && sumadhd_dscore === 60 && sex === "ชาย")) {
      sumadhd_tscore = 62;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 3;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if (((a >= 800 && a <= 911 && sumadhd_dscore === 56 && sex === "ชาย") || (a >= 800 && a <= 911 && sumadhd_dscore === 57 && sex === "ชาย")) || (a >= 800 && a <= 911 && sumadhd_dscore === 58 && sex === "ชาย")) {
      sumadhd_tscore = 61;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 3;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 800 && a <= 911 && sumadhd_dscore === 54 && sex === "ชาย") || (a >= 800 && a <= 911 && sumadhd_dscore === 55 && sex === "ชาย")) {
      sumadhd_tscore = 60;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 2;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 800 && a <= 911 && sumadhd_dscore === 52 && sex === "ชาย") || (a >= 800 && a <= 911 && sumadhd_dscore === 53 && sex === "ชาย")) {
      sumadhd_tscore = 59;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 2;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 800 && a <= 911 && sumadhd_dscore === 50 && sex === "ชาย") || (a >= 800 && a <= 911 && sumadhd_dscore === 51 && sex === "ชาย")) {
      sumadhd_tscore = 58;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 2;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 800 && a <= 911 && sumadhd_dscore === 48 && sex === "ชาย") || (a >= 800 && a <= 911 && sumadhd_dscore === 49 && sex === "ชาย")) {
      sumadhd_tscore = 57;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 2;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if (((a >= 800 && a <= 911 && sumadhd_dscore === 45 && sex === "ชาย") || (a >= 800 && a <= 911 && sumadhd_dscore === 46 && sex === "ชาย")) || (a >= 800 && a <= 911 && sumadhd_dscore === 47 && sex === "ชาย")) {
      sumadhd_tscore = 56;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 2;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 800 && a <= 911 && sumadhd_dscore === 43 && sex === "ชาย") || (a >= 800 && a <= 911 && sumadhd_dscore === 44 && sex === "ชาย")) {
      sumadhd_tscore = 55;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 2;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((((a >= 800 && a <= 911 && sumadhd_dscore === 41 && sex === "ชาย") || (a >= 800 && a <= 911 && sumadhd_dscore === 42 && sex === "ชาย")) || (a >= 800 && a <= 911 && sumadhd_dscore === 38 && sex === "ชาย")) || (a >= 800 && a <= 911 && sumadhd_dscore === 39 && sex === "ชาย")) {
      sumadhd_tscore = 54;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 2;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 800 && a <= 911 && sumadhd_dscore === 39 && sex === "ชาย") || (a >= 800 && a <= 911 && sumadhd_dscore === 40 && sex === "ชาย")) {
      sumadhd_tscore = 53;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 2;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 800 && a <= 911 && sumadhd_dscore === 37 && sex === "ชาย") || (a >= 800 && a <= 911 && sumadhd_dscore === 38 && sex === "ชาย")) {
      sumadhd_tscore = 52;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 2;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if (((a >= 800 && a <= 911 && sumadhd_dscore === 34 && sex === "ชาย") || (a >= 800 && a <= 911 && sumadhd_dscore === 35 && sex === "ชาย")) || (a >= 800 && a <= 911 && sumadhd_dscore === 36 && sex === "ชาย")) {
      sumadhd_tscore = 51;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 2;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 800 && a <= 911 && sumadhd_dscore === 32 && sex === "ชาย") || (a >= 800 && a <= 911 && sumadhd_dscore === 33 && sex === "ชาย")) {
      sumadhd_tscore = 50;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 1;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 800 && a <= 911 && sumadhd_dscore === 30 && sex === "ชาย") || (a >= 800 && a <= 911 && sumadhd_dscore === 31 && sex === "ชาย")) {
      sumadhd_tscore = 49;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 1;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 800 && a <= 911 && sumadhd_dscore === 28 && sex === "ชาย") || (a >= 800 && a <= 911 && sumadhd_dscore === 29 && sex === "ชาย")) {
      sumadhd_tscore = 48;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 1;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 800 && a <= 911 && sumadhd_dscore === 26 && sex === "ชาย") || (a >= 800 && a <= 911 && sumadhd_dscore === 27 && sex === "ชาย")) {
      sumadhd_tscore = 47;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 1;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if (((a >= 800 && a <= 911 && sumadhd_dscore === 23 && sex === "ชาย") || (a >= 800 && a <= 911 && sumadhd_dscore === 24 && sex === "ชาย")) || (a >= 800 && a <= 911 && sumadhd_dscore === 25 && sex === "ชาย")) {
      sumadhd_tscore = 46;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 1;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 800 && a <= 911 && sumadhd_dscore === 21 && sex === "ชาย") || (a >= 800 && a <= 911 && sumadhd_dscore === 22 && sex === "ชาย")) {
      sumadhd_tscore = 45;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 1;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 800 && a <= 911 && sumadhd_dscore === 19 && sex === "ชาย") || (a >= 800 && a <= 911 && sumadhd_dscore === 20 && sex === "ชาย")) {
      sumadhd_tscore = 44;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 1;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 800 && a <= 911 && sumadhd_dscore === 17 && sex === "ชาย") || (a >= 800 && a <= 911 && sumadhd_dscore === 18 && sex === "ชาย")) {
      sumadhd_tscore = 43;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 1;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 800 && a <= 911 && sumadhd_dscore === 15 && sex === "ชาย") || (a >= 800 && a <= 911 && sumadhd_dscore === 16 && sex === "ชาย")) {
      sumadhd_tscore = 42;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 1;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if (((a >= 800 && a <= 911 && sumadhd_dscore === 12 && sex === "ชาย") || (a >= 800 && a <= 911 && sumadhd_dscore === 13 && sex === "ชาย")) || (a >= 800 && a <= 911 && sumadhd_dscore === 14 && sex === "ชาย")) {
      sumadhd_tscore = 41;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 1;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 800 && a <= 911 && sumadhd_dscore === 10 && sex === "ชาย") || (a >= 800 && a <= 911 && sumadhd_dscore === 11 && sex === "ชาย")) {
      sumadhd_tscore = 40;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 1;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 800 && a <= 911 && sumadhd_dscore === 8 && sex === "ชาย") || (a >= 800 && a <= 911 && sumadhd_dscore === 9 && sex === "ชาย")) {
      sumadhd_tscore = 39;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 1;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 800 && a <= 911 && sumadhd_dscore === 6 && sex === "ชาย") || (a >= 800 && a <= 911 && sumadhd_dscore === 7 && sex === "ชาย")) {
      sumadhd_tscore = 38;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 1;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if (((a >= 800 && a <= 911 && sumadhd_dscore === 3 && sex === "ชาย") || (a >= 800 && a <= 911 && sumadhd_dscore === 4 && sex === "ชาย")) || (a >= 800 && a <= 911 && sumadhd_dscore === 5 && sex === "ชาย")) {
      sumadhd_tscore = 37;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 1;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 800 && a <= 911 && sumadhd_dscore === 1 && sex === "ชาย") || (a >= 800 && a <= 911 && sumadhd_dscore === 2 && sex === "ชาย")) {
      sumadhd_tscore = 36;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 1;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if (a >= 800 && a <= 911 && sumadhd_dscore === 0 && sex === "ชาย") {
      sumadhd_tscore = 35;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 1;
      //console.log("sumadhd_group = " + sumadhd_group);
    }
    //10/11.11 ก.1 รวม ชาย
    if ((a >= 1000 && a <= 1111 && sumadhd_dscore === 89 && sex === "ชาย") || (a >= 1000 && a <= 1111 && sumadhd_dscore === 90 && sex === "ชาย")) {
      sumadhd_tscore = 76;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 4;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 1000 && a <= 1111 && sumadhd_dscore === 87 && sex === "ชาย") || (a >= 1000 && a <= 1111 && sumadhd_dscore === 88 && sex === "ชาย")) {
      sumadhd_tscore = 75;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 4;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 1000 && a <= 1111 && sumadhd_dscore === 85 && sex === "ชาย") || (a >= 1000 && a <= 1111 && sumadhd_dscore === 86 && sex === "ชาย")) {
      sumadhd_tscore = 74;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 4;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 1000 && a <= 1111 && sumadhd_dscore === 83 && sex === "ชาย") || (a >= 1000 && a <= 1111 && sumadhd_dscore === 84 && sex === "ชาย")) {
      sumadhd_tscore = 73;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 4;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 1000 && a <= 1111 && sumadhd_dscore === 81 && sex === "ชาย") || (a >= 1000 && a <= 1111 && sumadhd_dscore === 82 && sex === "ชาย")) {
      sumadhd_tscore = 72;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 4;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if (((a >= 1000 && a <= 1111 && sumadhd_dscore === 78 && sex === "ชาย") || (a >= 1000 && a <= 1111 && sumadhd_dscore === 79 && sex === "ชาย")) || (a >= 1000 && a <= 1111 && sumadhd_dscore === 80 && sex === "ชาย")) {
      sumadhd_tscore = 71;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 4;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 1000 && a <= 1111 && sumadhd_dscore === 77 && sex === "ชาย") || (a >= 1000 && a <= 1111 && sumadhd_dscore === 78 && sex === "ชาย")) {
      sumadhd_tscore = 70;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 3;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 1000 && a <= 1111 && sumadhd_dscore === 75 && sex === "ชาย") || (a >= 1000 && a <= 1111 && sumadhd_dscore === 76 && sex === "ชาย")) {
      sumadhd_tscore = 69;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 3;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 1000 && a <= 1111 && sumadhd_dscore === 72 && sex === "ชาย") || (a >= 1000 && a <= 1111 && sumadhd_dscore === 73 && sex === "ชาย")) {
      sumadhd_tscore = 68;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 3;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 1000 && a <= 1111 && sumadhd_dscore === 70 && sex === "ชาย") || (a >= 1000 && a <= 1111 && sumadhd_dscore === 71 && sex === "ชาย")) {
      sumadhd_tscore = 67;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 3;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 1000 && a <= 1111 && sumadhd_dscore === 68 && sex === "ชาย") || (a >= 1000 && a <= 1111 && sumadhd_dscore === 69 && sex === "ชาย")) {
      sumadhd_tscore = 66;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 3;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 1000 && a <= 1111 && sumadhd_dscore === 66 && sex === "ชาย") || (a >= 1000 && a <= 1111 && sumadhd_dscore === 67 && sex === "ชาย")) {
      sumadhd_tscore = 65;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 3;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 1000 && a <= 1111 && sumadhd_dscore === 64 && sex === "ชาย") || (a >= 1000 && a <= 1111 && sumadhd_dscore === 65 && sex === "ชาย")) {
      sumadhd_tscore = 64;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 3;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if (((a >= 1000 && a <= 1111 && sumadhd_dscore === 61 && sex === "ชาย") || (a >= 1000 && a <= 1111 && sumadhd_dscore === 62 && sex === "ชาย")) || (a >= 1000 && a <= 1111 && sumadhd_dscore === 63 && sex === "ชาย")) {
      sumadhd_tscore = 63;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 3;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 1000 && a <= 1111 && sumadhd_dscore === 59 && sex === "ชาย") || (a >= 1000 && a <= 1111 && sumadhd_dscore === 60 && sex === "ชาย")) {
      sumadhd_tscore = 62;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 3;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if (((a >= 1000 && a <= 1111 && sumadhd_dscore === 56 && sex === "ชาย") || (a >= 1000 && a <= 1111 && sumadhd_dscore === 57 && sex === "ชาย")) || (a >= 1000 && a <= 1111 && sumadhd_dscore === 58 && sex === "ชาย")) {
      sumadhd_tscore = 61;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 3;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 1000 && a <= 1111 && sumadhd_dscore === 54 && sex === "ชาย") || (a >= 1000 && a <= 1111 && sumadhd_dscore === 55 && sex === "ชาย")) {
      sumadhd_tscore = 60;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 2;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 1000 && a <= 1111 && sumadhd_dscore === 52 && sex === "ชาย") || (a >= 1000 && a <= 1111 && sumadhd_dscore === 53 && sex === "ชาย")) {
      sumadhd_tscore = 59;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 2;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 1000 && a <= 1111 && sumadhd_dscore === 50 && sex === "ชาย") || (a >= 1000 && a <= 1111 && sumadhd_dscore === 51 && sex === "ชาย")) {
      sumadhd_tscore = 58;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 2;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 1000 && a <= 1111 && sumadhd_dscore === 48 && sex === "ชาย") || (a >= 1000 && a <= 1111 && sumadhd_dscore === 49 && sex === "ชาย")) {
      sumadhd_tscore = 57;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 2;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if (((a >= 1000 && a <= 1111 && sumadhd_dscore === 45 && sex === "ชาย") || (a >= 1000 && a <= 1111 && sumadhd_dscore === 46 && sex === "ชาย")) || (a >= 1000 && a <= 1111 && sumadhd_dscore === 47 && sex === "ชาย")) {
      sumadhd_tscore = 56;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 2;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 1000 && a <= 1111 && sumadhd_dscore === 43 && sex === "ชาย") || (a >= 1000 && a <= 1111 && sumadhd_dscore === 44 && sex === "ชาย")) {
      sumadhd_tscore = 55;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 2;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((((a >= 1000 && a <= 1111 && sumadhd_dscore === 41 && sex === "ชาย") || (a >= 1000 && a <= 1111 && sumadhd_dscore === 42 && sex === "ชาย")) || (a >= 1000 && a <= 1111 && sumadhd_dscore === 38 && sex === "ชาย")) || (a >= 600 && a <= 711 && sumadhd_dscore === 39 && sex === "ชาย")) {
      sumadhd_tscore = 54;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 2;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 1000 && a <= 1111 && sumadhd_dscore === 39 && sex === "ชาย") || (a >= 1000 && a <= 1111 && sumadhd_dscore === 40 && sex === "ชาย")) {
      sumadhd_tscore = 53;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 2;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 1000 && a <= 1111 && sumadhd_dscore === 37 && sex === "ชาย") || (a >= 1000 && a <= 1111 && sumadhd_dscore === 38 && sex === "ชาย")) {
      sumadhd_tscore = 52;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 2;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if (((a >= 1000 && a <= 1111 && sumadhd_dscore === 34 && sex === "ชาย") || (a >= 1000 && a <= 1111 && sumadhd_dscore === 35 && sex === "ชาย")) || (a >= 1000 && a <= 1111 && sumadhd_dscore === 36 && sex === "ชาย")) {
      sumadhd_tscore = 51;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 2;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 1000 && a <= 1111 && sumadhd_dscore === 32 && sex === "ชาย") || (a >= 1000 && a <= 1111 && sumadhd_dscore === 33 && sex === "ชาย")) {
      sumadhd_tscore = 50;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 1;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 1000 && a <= 1111 && sumadhd_dscore === 30 && sex === "ชาย") || (a >= 1000 && a <= 1111 && sumadhd_dscore === 31 && sex === "ชาย")) {
      sumadhd_tscore = 49;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 1;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 1000 && a <= 1111 && sumadhd_dscore === 28 && sex === "ชาย") || (a >= 1000 && a <= 1111 && sumadhd_dscore === 29 && sex === "ชาย")) {
      sumadhd_tscore = 48;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 1;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 1000 && a <= 1111 && sumadhd_dscore === 26 && sex === "ชาย") || (a >= 1000 && a <= 1111 && sumadhd_dscore === 27 && sex === "ชาย")) {
      sumadhd_tscore = 47;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 1;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if (((a >= 1000 && a <= 1111 && sumadhd_dscore === 23 && sex === "ชาย") || (a >= 1000 && a <= 1111 && sumadhd_dscore === 24 && sex === "ชาย")) || (a >= 1000 && a <= 1111 && sumadhd_dscore === 25 && sex === "ชาย")) {
      sumadhd_tscore = 46;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 1;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 1000 && a <= 1111 && sumadhd_dscore === 21 && sex === "ชาย") || (a >= 1000 && a <= 1111 && sumadhd_dscore === 22 && sex === "ชาย")) {
      sumadhd_tscore = 45;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 1;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 1000 && a <= 1111 && sumadhd_dscore === 19 && sex === "ชาย") || (a >= 1000 && a <= 1111 && sumadhd_dscore === 20 && sex === "ชาย")) {
      sumadhd_tscore = 44;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 1;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 1000 && a <= 1111 && sumadhd_dscore === 17 && sex === "ชาย") || (a >= 1000 && a <= 1111 && sumadhd_dscore === 18 && sex === "ชาย")) {
      sumadhd_tscore = 43;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 1;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 1000 && a <= 1111 && sumadhd_dscore === 15 && sex === "ชาย") || (a >= 1000 && a <= 1111 && sumadhd_dscore === 16 && sex === "ชาย")) {
      sumadhd_tscore = 42;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 1;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if (((a >= 1000 && a <= 1111 && sumadhd_dscore === 12 && sex === "ชาย") || (a >= 1000 && a <= 1111 && sumadhd_dscore === 13 && sex === "ชาย")) || (a >= 1000 && a <= 1111 && sumadhd_dscore === 14 && sex === "ชาย")) {
      sumadhd_tscore = 41;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 1;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 1000 && a <= 1111 && sumadhd_dscore === 10 && sex === "ชาย") || (a >= 1000 && a <= 1111 && sumadhd_dscore === 11 && sex === "ชาย")) {
      sumadhd_tscore = 40;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 1;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 1000 && a <= 1111 && sumadhd_dscore === 8 && sex === "ชาย") || (a >= 1000 && a <= 1111 && sumadhd_dscore === 9 && sex === "ชาย")) {
      sumadhd_tscore = 39;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 1;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 1000 && a <= 1111 && sumadhd_dscore === 6 && sex === "ชาย") || (a >= 1000 && a <= 1111 && sumadhd_dscore === 7 && sex === "ชาย")) {
      sumadhd_tscore = 38;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 1;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if (((a >= 1000 && a <= 1111 && sumadhd_dscore === 3 && sex === "ชาย") || (a >= 1000 && a <= 1111 && sumadhd_dscore === 4 && sex === "ชาย")) || (a >= 1000 && a <= 1111 && sumadhd_dscore === 5 && sex === "ชาย")) {
      sumadhd_tscore = 37;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 1;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 1000 && a <= 1111 && sumadhd_dscore === 1 && sex === "ชาย") || (a >= 1000 && a <= 1111 && sumadhd_dscore === 2 && sex === "ชาย")) {
      sumadhd_tscore = 36;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 1;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if (a >= 1000 && a <= 1111 && sumadhd_dscore === 0 && sex === "ชาย") {
      sumadhd_tscore = 35;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 1;
      //console.log("sumadhd_group = " + sumadhd_group);
    }
    //10/11.11 ก.1 รวม ชาย
    else if ((a >= 1000 && a <= 1111 && sumadhd_dscore === 89 && sex === "ชาย") || (a >= 1000 && a <= 1111 && sumadhd_dscore === 90 && sex === "ชาย")) {
      sumadhd_tscore = 76;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 4;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 1000 && a <= 1111 && sumadhd_dscore === 87 && sex === "ชาย") || (a >= 1000 && a <= 1111 && sumadhd_dscore === 88 && sex === "ชาย")) {
      sumadhd_tscore = 75;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 4;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 1000 && a <= 1111 && sumadhd_dscore === 85 && sex === "ชาย") || (a >= 1000 && a <= 1111 && sumadhd_dscore === 86 && sex === "ชาย")) {
      sumadhd_tscore = 74;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 4;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 1000 && a <= 1111 && sumadhd_dscore === 83 && sex === "ชาย") || (a >= 1000 && a <= 1111 && sumadhd_dscore === 84 && sex === "ชาย")) {
      sumadhd_tscore = 73;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 4;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 1000 && a <= 1111 && sumadhd_dscore === 81 && sex === "ชาย") || (a >= 1000 && a <= 1111 && sumadhd_dscore === 82 && sex === "ชาย")) {
      sumadhd_tscore = 72;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 4;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if (((a >= 1000 && a <= 1111 && sumadhd_dscore === 78 && sex === "ชาย") || (a >= 1000 && a <= 1111 && sumadhd_dscore === 79 && sex === "ชาย")) || (a >= 1000 && a <= 1111 && sumadhd_dscore === 80 && sex === "ชาย")) {
      sumadhd_tscore = 71;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 4;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 1000 && a <= 1111 && sumadhd_dscore === 77 && sex === "ชาย") || (a >= 1000 && a <= 1111 && sumadhd_dscore === 78 && sex === "ชาย")) {
      sumadhd_tscore = 70;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 3;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 1000 && a <= 1111 && sumadhd_dscore === 75 && sex === "ชาย") || (a >= 1000 && a <= 1111 && sumadhd_dscore === 76 && sex === "ชาย")) {
      sumadhd_tscore = 69;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 3;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 1000 && a <= 1111 && sumadhd_dscore === 72 && sex === "ชาย") || (a >= 1000 && a <= 1111 && sumadhd_dscore === 73 && sex === "ชาย")) {
      sumadhd_tscore = 68;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 3;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 1000 && a <= 1111 && sumadhd_dscore === 70 && sex === "ชาย") || (a >= 1000 && a <= 1111 && sumadhd_dscore === 71 && sex === "ชาย")) {
      sumadhd_tscore = 67;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 3;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 1000 && a <= 1111 && sumadhd_dscore === 68 && sex === "ชาย") || (a >= 1000 && a <= 1111 && sumadhd_dscore === 69 && sex === "ชาย")) {
      sumadhd_tscore = 66;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 3;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 1000 && a <= 1111 && sumadhd_dscore === 66 && sex === "ชาย") || (a >= 1000 && a <= 1111 && sumadhd_dscore === 67 && sex === "ชาย")) {
      sumadhd_tscore = 65;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 3;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 1000 && a <= 1111 && sumadhd_dscore === 64 && sex === "ชาย") || (a >= 1000 && a <= 1111 && sumadhd_dscore === 65 && sex === "ชาย")) {
      sumadhd_tscore = 64;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 3;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if (((a >= 1000 && a <= 1111 && sumadhd_dscore === 61 && sex === "ชาย") || (a >= 1000 && a <= 1111 && sumadhd_dscore === 62 && sex === "ชาย")) || (a >= 1000 && a <= 1111 && sumadhd_dscore === 63 && sex === "ชาย")) {
      sumadhd_tscore = 63;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 3;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 1000 && a <= 1111 && sumadhd_dscore === 59 && sex === "ชาย") || (a >= 1000 && a <= 1111 && sumadhd_dscore === 60 && sex === "ชาย")) {
      sumadhd_tscore = 62;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 3;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if (((a >= 1000 && a <= 1111 && sumadhd_dscore === 56 && sex === "ชาย") || (a >= 1000 && a <= 1111 && sumadhd_dscore === 57 && sex === "ชาย")) || (a >= 1000 && a <= 1111 && sumadhd_dscore === 58 && sex === "ชาย")) {
      sumadhd_tscore = 61;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 3;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 1000 && a <= 1111 && sumadhd_dscore === 54 && sex === "ชาย") || (a >= 1000 && a <= 1111 && sumadhd_dscore === 55 && sex === "ชาย")) {
      sumadhd_tscore = 60;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 2;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 1000 && a <= 1111 && sumadhd_dscore === 52 && sex === "ชาย") || (a >= 1000 && a <= 1111 && sumadhd_dscore === 53 && sex === "ชาย")) {
      sumadhd_tscore = 59;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 2;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 1000 && a <= 1111 && sumadhd_dscore === 50 && sex === "ชาย") || (a >= 1000 && a <= 1111 && sumadhd_dscore === 51 && sex === "ชาย")) {
      sumadhd_tscore = 58;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 2;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 1000 && a <= 1111 && sumadhd_dscore === 48 && sex === "ชาย") || (a >= 1000 && a <= 1111 && sumadhd_dscore === 49 && sex === "ชาย")) {
      sumadhd_tscore = 57;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 2;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if (((a >= 1000 && a <= 1111 && sumadhd_dscore === 45 && sex === "ชาย") || (a >= 1000 && a <= 1111 && sumadhd_dscore === 46 && sex === "ชาย")) || (a >= 1000 && a <= 1111 && sumadhd_dscore === 47 && sex === "ชาย")) {
      sumadhd_tscore = 56;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 2;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 1000 && a <= 1111 && sumadhd_dscore === 43 && sex === "ชาย") || (a >= 1000 && a <= 1111 && sumadhd_dscore === 44 && sex === "ชาย")) {
      sumadhd_tscore = 55;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 2;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((((a >= 1000 && a <= 1111 && sumadhd_dscore === 41 && sex === "ชาย") || (a >= 1000 && a <= 1111 && sumadhd_dscore === 42 && sex === "ชาย")) || (a >= 1000 && a <= 1111 && sumadhd_dscore === 38 && sex === "ชาย")) || (a >= 600 && a <= 711 && sumadhd_dscore === 39 && sex === "ชาย")) {
      sumadhd_tscore = 54;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 2;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 1000 && a <= 1111 && sumadhd_dscore === 39 && sex === "ชาย") || (a >= 1000 && a <= 1111 && sumadhd_dscore === 40 && sex === "ชาย")) {
      sumadhd_tscore = 53;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 2;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 1000 && a <= 1111 && sumadhd_dscore === 37 && sex === "ชาย") || (a >= 1000 && a <= 1111 && sumadhd_dscore === 38 && sex === "ชาย")) {
      sumadhd_tscore = 52;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 2;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if (((a >= 1000 && a <= 1111 && sumadhd_dscore === 34 && sex === "ชาย") || (a >= 1000 && a <= 1111 && sumadhd_dscore === 35 && sex === "ชาย")) || (a >= 1000 && a <= 1111 && sumadhd_dscore === 36 && sex === "ชาย")) {
      sumadhd_tscore = 51;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 2;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 1000 && a <= 1111 && sumadhd_dscore === 32 && sex === "ชาย") || (a >= 1000 && a <= 1111 && sumadhd_dscore === 33 && sex === "ชาย")) {
      sumadhd_tscore = 50;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 1;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 1000 && a <= 1111 && sumadhd_dscore === 30 && sex === "ชาย") || (a >= 1000 && a <= 1111 && sumadhd_dscore === 31 && sex === "ชาย")) {
      sumadhd_tscore = 49;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 1;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 1000 && a <= 1111 && sumadhd_dscore === 28 && sex === "ชาย") || (a >= 1000 && a <= 1111 && sumadhd_dscore === 29 && sex === "ชาย")) {
      sumadhd_tscore = 48;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 1;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 1000 && a <= 1111 && sumadhd_dscore === 26 && sex === "ชาย") || (a >= 1000 && a <= 1111 && sumadhd_dscore === 27 && sex === "ชาย")) {
      sumadhd_tscore = 47;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 1;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if (((a >= 1000 && a <= 1111 && sumadhd_dscore === 23 && sex === "ชาย") || (a >= 1000 && a <= 1111 && sumadhd_dscore === 24 && sex === "ชาย")) || (a >= 1000 && a <= 1111 && sumadhd_dscore === 25 && sex === "ชาย")) {
      sumadhd_tscore = 46;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 1;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 1000 && a <= 1111 && sumadhd_dscore === 21 && sex === "ชาย") || (a >= 1000 && a <= 1111 && sumadhd_dscore === 22 && sex === "ชาย")) {
      sumadhd_tscore = 45;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 1;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 1000 && a <= 1111 && sumadhd_dscore === 19 && sex === "ชาย") || (a >= 1000 && a <= 1111 && sumadhd_dscore === 20 && sex === "ชาย")) {
      sumadhd_tscore = 44;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 1;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 1000 && a <= 1111 && sumadhd_dscore === 17 && sex === "ชาย") || (a >= 1000 && a <= 1111 && sumadhd_dscore === 18 && sex === "ชาย")) {
      sumadhd_tscore = 43;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 1;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 1000 && a <= 1111 && sumadhd_dscore === 15 && sex === "ชาย") || (a >= 1000 && a <= 1111 && sumadhd_dscore === 16 && sex === "ชาย")) {
      sumadhd_tscore = 42;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 1;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if (((a >= 1000 && a <= 1111 && sumadhd_dscore === 12 && sex === "ชาย") || (a >= 1000 && a <= 1111 && sumadhd_dscore === 13 && sex === "ชาย")) || (a >= 1000 && a <= 1111 && sumadhd_dscore === 14 && sex === "ชาย")) {
      sumadhd_tscore = 41;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 1;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 1000 && a <= 1111 && sumadhd_dscore === 10 && sex === "ชาย") || (a >= 1000 && a <= 1111 && sumadhd_dscore === 11 && sex === "ชาย")) {
      sumadhd_tscore = 40;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 1;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 1000 && a <= 1111 && sumadhd_dscore === 8 && sex === "ชาย") || (a >= 1000 && a <= 1111 && sumadhd_dscore === 9 && sex === "ชาย")) {
      sumadhd_tscore = 39;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 1;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 1000 && a <= 1111 && sumadhd_dscore === 6 && sex === "ชาย") || (a >= 1000 && a <= 1111 && sumadhd_dscore === 7 && sex === "ชาย")) {
      sumadhd_tscore = 38;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 1;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if (((a >= 1000 && a <= 1111 && sumadhd_dscore === 3 && sex === "ชาย") || (a >= 1000 && a <= 1111 && sumadhd_dscore === 4 && sex === "ชาย")) || (a >= 1000 && a <= 1111 && sumadhd_dscore === 5 && sex === "ชาย")) {
      sumadhd_tscore = 37;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 1;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 1000 && a <= 1111 && sumadhd_dscore === 1 && sex === "ชาย") || (a >= 1000 && a <= 1111 && sumadhd_dscore === 2 && sex === "ชาย")) {
      sumadhd_tscore = 36;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 1;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if (a >= 1000 && a <= 1111 && sumadhd_dscore === 0 && sex === "ชาย") {
      sumadhd_tscore = 35;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 1;
      //console.log("sumadhd_group = " + sumadhd_group);
    }

    //12/13.11 ก.1 รวม
    else if ((a >= 1200 && a <= 1311 && sumadhd_dscore === 89 && sex === "ชาย") || (a >= 1200 && a <= 1311 && sumadhd_dscore === 90 && sex === "ชาย")) {
      sumadhd_tscore = 75;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 4;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if (((a >= 1200 && a <= 1311 && sumadhd_dscore === 86 && sex === "ชาย") || (a >= 1200 && a <= 1311 && sumadhd_dscore === 87 && sex === "ชาย")) || (a >= 1200 && a <= 1311 && sumadhd_dscore === 88 && sex === "ชาย")) {
      sumadhd_tscore = 74;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 4;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 1200 && a <= 1311 && sumadhd_dscore === 84 && sex === "ชาย") || (a >= 1200 && a <= 1311 && sumadhd_dscore === 85 && sex === "ชาย")) {
      sumadhd_tscore = 73;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 4;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 1200 && a <= 1311 && sumadhd_dscore === 82 && sex === "ชาย") || (a >= 1200 && a <= 1311 && sumadhd_dscore === 83 && sex === "ชาย")) {
      sumadhd_tscore = 72;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 4;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 1200 && a <= 1311 && sumadhd_dscore === 80 && sex === "ชาย") || (a >= 1200 && a <= 1311 && sumadhd_dscore === 81 && sex === "ชาย")) {
      sumadhd_tscore = 71;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 4;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if (((a >= 1200 && a <= 1311 && sumadhd_dscore === 77 && sex === "ชาย") || (a >= 1200 && a <= 1311 && sumadhd_dscore === 78 && sex === "ชาย")) || (a >= 1200 && a <= 1311 && sumadhd_dscore === 79 && sex === "ชาย")) {
      sumadhd_tscore = 70;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 3;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 1200 && a <= 1311 && sumadhd_dscore === 75 && sex === "ชาย") || (a >= 1200 && a <= 1311 && sumadhd_dscore === 76 && sex === "ชาย")) {
      sumadhd_tscore = 69;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 3;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 1200 && a <= 1311 && sumadhd_dscore === 73 && sex === "ชาย") || (a >= 1200 && a <= 1311 && sumadhd_dscore === 74 && sex === "ชาย")) {
      sumadhd_tscore = 68;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 3;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if (((a >= 1200 && a <= 1311 && sumadhd_dscore === 70 && sex === "ชาย") || (a >= 1200 && a <= 1311 && sumadhd_dscore === 71 && sex === "ชาย")) || (a >= 1200 && a <= 1311 && sumadhd_dscore === 72 && sex === "ชาย")) {
      sumadhd_tscore = 67;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 3;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 1200 && a <= 1311 && sumadhd_dscore === 68 && sex === "ชาย") || (a >= 1200 && a <= 1311 && sumadhd_dscore === 69 && sex === "ชาย")) {
      sumadhd_tscore = 66;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 3;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 1200 && a <= 1311 && sumadhd_dscore === 66 && sex === "ชาย") || (a >= 1200 && a <= 1311 && sumadhd_dscore === 67 && sex === "ชาย")) {
      sumadhd_tscore = 65;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 3;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 1200 && a <= 1311 && sumadhd_dscore === 64 && sex === "ชาย") || (a >= 1200 && a <= 1311 && sumadhd_dscore === 65 && sex === "ชาย")) {
      sumadhd_tscore = 64;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 3;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if (((a >= 1200 && a <= 1311 && sumadhd_dscore === 61 && sex === "ชาย") || (a >= 1200 && a <= 1311 && sumadhd_dscore === 62 && sex === "ชาย")) || (a >= 1200 && a <= 1311 && sumadhd_dscore === 63 && sex === "ชาย")) {
      sumadhd_tscore = 63;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 3;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 1200 && a <= 1311 && sumadhd_dscore === 59 && sex === "ชาย") || (a >= 1200 && a <= 1311 && sumadhd_dscore === 60 && sex === "ชาย")) {
      sumadhd_tscore = 62;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 3;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 1200 && a <= 1311 && sumadhd_dscore === 57 && sex === "ชาย") || (a >= 1200 && a <= 1311 && sumadhd_dscore === 58 && sex === "ชาย")) {
      sumadhd_tscore = 61;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 3;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if (((a >= 1200 && a <= 1311 && sumadhd_dscore === 54 && sex === "ชาย") || (a >= 1200 && a <= 1311 && sumadhd_dscore === 55 && sex === "ชาย")) || (a >= 1200 && a <= 1311 && sumadhd_dscore === 56 && sex === "ชาย")) {
      sumadhd_tscore = 60;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 2;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 1200 && a <= 1311 && sumadhd_dscore === 52 && sex === "ชาย") || (a >= 1200 && a <= 1311 && sumadhd_dscore === 53 && sex === "ชาย")) {
      sumadhd_tscore = 59;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 2;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 1200 && a <= 1311 && sumadhd_dscore === 50 && sex === "ชาย") || (a >= 1200 && a <= 1311 && sumadhd_dscore === 51 && sex === "ชาย")) {
      sumadhd_tscore = 58;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 2;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 1200 && a <= 1311 && sumadhd_dscore === 48 && sex === "ชาย") || (a >= 1200 && a <= 1311 && sumadhd_dscore === 49 && sex === "ชาย")) {
      sumadhd_tscore = 57;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 2;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 1200 && a <= 1311 && sumadhd_dscore === 46 && sex === "ชาย") || (a >= 1200 && a <= 1311 && sumadhd_dscore === 47 && sex === "ชาย")) {
      sumadhd_tscore = 56;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 2;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if (((a >= 1200 && a <= 1311 && sumadhd_dscore === 43 && sex === "ชาย") || (a >= 1200 && a <= 1311 && sumadhd_dscore === 44 && sex === "ชาย")) || (a >= 1200 && a <= 1311 && sumadhd_dscore === 45 && sex === "ชาย")) {
      sumadhd_tscore = 55;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 2;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 1200 && a <= 1311 && sumadhd_dscore === 41 && sex === "ชาย") || (a >= 1200 && a <= 1311 && sumadhd_dscore === 42 && sex === "ชาย")) {
      sumadhd_tscore = 54;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 2;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if (((a >= 1200 && a <= 1311 && sumadhd_dscore === 38 && sex === "ชาย") || (a >= 1200 && a <= 1311 && sumadhd_dscore === 39 && sex === "ชาย")) || (a >= 1200 && a <= 1311 && sumadhd_dscore === 40 && sex === "ชาย")) {
      sumadhd_tscore = 53;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 2;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 1200 && a <= 1311 && sumadhd_dscore === 36 && sex === "ชาย") || (a >= 1200 && a <= 1311 && sumadhd_dscore === 37 && sex === "ชาย")) {
      sumadhd_tscore = 52;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 2;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 1200 && a <= 1311 && sumadhd_dscore === 34 && sex === "ชาย") || (a >= 1200 && a <= 1311 && sumadhd_dscore === 35 && sex === "ชาย")) {
      sumadhd_tscore = 51;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 2;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 1200 && a <= 1311 && sumadhd_dscore === 32 && sex === "ชาย") || (a >= 1200 && a <= 1311 && sumadhd_dscore === 33 && sex === "ชาย")) {
      sumadhd_tscore = 50;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 1;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if (((a >= 1200 && a <= 1311 && sumadhd_dscore === 29 && sex === "ชาย") || (a >= 1200 && a <= 1311 && sumadhd_dscore === 30 && sex === "ชาย")) || (a >= 1200 && a <= 1311 && sumadhd_dscore === 31 && sex === "ชาย")) {
      sumadhd_tscore = 49;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 1;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 1200 && a <= 1311 && sumadhd_dscore === 27 && sex === "ชาย") || (a >= 1200 && a <= 1311 && sumadhd_dscore === 28 && sex === "ชาย")) {
      sumadhd_tscore = 48;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 1;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 1200 && a <= 1311 && sumadhd_dscore === 25 && sex === "ชาย") || (a >= 1200 && a <= 1311 && sumadhd_dscore === 26 && sex === "ชาย")) {
      sumadhd_tscore = 47;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 1;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if (((a >= 1200 && a <= 1311 && sumadhd_dscore === 22 && sex === "ชาย") || (a >= 1200 && a <= 1311 && sumadhd_dscore === 23 && sex === "ชาย")) || (a >= 1200 && a <= 1311 && sumadhd_dscore === 24 && sex === "ชาย")) {
      sumadhd_tscore = 46;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 1;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 1200 && a <= 1311 && sumadhd_dscore === 20 && sex === "ชาย") || (a >= 1200 && a <= 1311 && sumadhd_dscore === 21 && sex === "ชาย")) {
      sumadhd_tscore = 45;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 1;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 1200 && a <= 1311 && sumadhd_dscore === 18 && sex === "ชาย") || (a >= 1200 && a <= 1311 && sumadhd_dscore === 19 && sex === "ชาย")) {
      sumadhd_tscore = 44;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 1;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 1200 && a <= 1311 && sumadhd_dscore === 17 && sex === "ชาย") || (a >= 1200 && a <= 1311 && sumadhd_dscore === 16 && sex === "ชาย")) {
      sumadhd_tscore = 43;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 1;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if (((a >= 1200 && a <= 1311 && sumadhd_dscore === 13 && sex === "ชาย") || (a >= 1200 && a <= 1311 && sumadhd_dscore === 14 && sex === "ชาย")) || (a >= 1200 && a <= 1311 && sumadhd_dscore === 15 && sex === "ชาย")) {
      sumadhd_tscore = 42;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 1;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 1200 && a <= 1311 && sumadhd_dscore === 11 && sex === "ชาย") || (a >= 1200 && a <= 1311 && sumadhd_dscore === 12 && sex === "ชาย")) {
      sumadhd_tscore = 41;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 1;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 1200 && a <= 1311 && sumadhd_dscore === 9 && sex === "ชาย") || (a >= 1200 && a <= 1311 && sumadhd_dscore === 10 && sex === "ชาย")) {
      sumadhd_tscore = 40;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 1;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if (((a >= 1200 && a <= 1311 && sumadhd_dscore === 6 && sex === "ชาย") || (a >= 1200 && a <= 1311 && sumadhd_dscore === 7 && sex === "ชาย")) || (a >= 1200 && a <= 1311 && sumadhd_dscore === 8 && sex === "ชาย")) {
      sumadhd_tscore = 39;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 1;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 1200 && a <= 1311 && sumadhd_dscore === 4 && sex === "ชาย") || (a >= 1200 && a <= 1311 && sumadhd_dscore === 5 && sex === "ชาย")) {
      sumadhd_tscore = 38;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 1;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 1200 && a <= 1311 && sumadhd_dscore === 2 && sex === "ชาย") || (a >= 1200 && a <= 1311 && sumadhd_dscore === 3 && sex === "ชาย")) {
      sumadhd_tscore = 37;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 1;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 1200 && a <= 1311 && sumadhd_dscore === 0 && sex === "ชาย") || (a >= 1200 && a <= 1311 && sumadhd_dscore === 1 && sex === "ชาย")) {
      sumadhd_tscore = 36;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 1;
      //console.log("sumadhd_group = " + sumadhd_group);
    }
    //6/7.11 ก.2 รวม หญิง
    else if (a >= 600 && a <= 711 && sumadhd_dscore === 90 && sex === "หญิง") {
      sumadhd_tscore = 87;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 4;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 600 && a <= 711 && sumadhd_dscore === 88 && sex === "หญิง") || (a >= 600 && a <= 711 && sumadhd_dscore === 89 && sex === "หญิง")) {
      sumadhd_tscore = 86;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 4;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 600 && a <= 711 && sumadhd_dscore === 86 && sex === "หญิง") || (a >= 600 && a <= 711 && sumadhd_dscore === 87 && sex === "หญิง")) {
      sumadhd_tscore = 85;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 4;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 600 && a <= 711 && sumadhd_dscore === 84 && sex === "หญิง") || (a >= 600 && a <= 711 && sumadhd_dscore === 85 && sex === "หญิง")) {
      sumadhd_tscore = 84;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 4;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 600 && a <= 711 && sumadhd_dscore === 82 && sex === "หญิง") || (a >= 600 && a <= 711 && sumadhd_dscore === 83 && sex === "หญิง")) {
      sumadhd_tscore = 83;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 4;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 600 && a <= 711 && sumadhd_dscore === 80 && sex === "หญิง") || (a >= 600 && a <= 711 && sumadhd_dscore === 81 && sex === "หญิง")) {
      sumadhd_tscore = 82;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 4;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 600 && a <= 711 && sumadhd_dscore === 18 && sex === "หญิง") || (a >= 600 && a <= 711 && sumadhd_dscore === 79 && sex === "หญิง")) {
      sumadhd_tscore = 81;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 4;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 600 && a <= 711 && sumadhd_dscore === 76 && sex === "หญิง") || (a >= 600 && a <= 711 && sumadhd_dscore === 77 && sex === "หญิง")) {
      sumadhd_tscore = 80;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 4;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 600 && a <= 711 && sumadhd_dscore === 74 && sex === "หญิง") || (a >= 600 && a <= 711 && sumadhd_dscore === 75 && sex === "หญิง")) {
      sumadhd_tscore = 79;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 4;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 600 && a <= 711 && sumadhd_dscore === 72 && sex === "หญิง") || (a >= 600 && a <= 711 && sumadhd_dscore === 73 && sex === "หญิง")) {
      sumadhd_tscore = 78;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 4;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if (a >= 600 && a <= 711 && sumadhd_dscore === 71 && sex === "หญิง") {
      sumadhd_tscore = 77;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 4;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 600 && a <= 711 && sumadhd_dscore === 69 && sex === "หญิง") || (a >= 600 && a <= 711 && sumadhd_dscore === 70 && sex === "หญิง")) {
      sumadhd_tscore = 76;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 4;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 600 && a <= 711 && sumadhd_dscore === 67 && sex === "หญิง") || (a >= 600 && a <= 711 && sumadhd_dscore === 68 && sex === "หญิง")) {
      sumadhd_tscore = 75;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 4;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 600 && a <= 711 && sumadhd_dscore === 65 && sex === "หญิง") || (a >= 600 && a <= 711 && sumadhd_dscore === 66 && sex === "หญิง")) {
      sumadhd_tscore = 74;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 4;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 600 && a <= 711 && sumadhd_dscore === 63 && sex === "หญิง") || (a >= 600 && a <= 711 && sumadhd_dscore === 64 && sex === "หญิง")) {
      sumadhd_tscore = 73;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 4;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 600 && a <= 711 && sumadhd_dscore === 61 && sex === "หญิง") || (a >= 600 && a <= 711 && sumadhd_dscore === 62 && sex === "หญิง")) {
      sumadhd_tscore = 72;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 4;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 600 && a <= 711 && sumadhd_dscore === 57 && sex === "หญิง") || (a >= 600 && a <= 711 && sumadhd_dscore === 58 && sex === "หญิง")) {
      sumadhd_tscore = 71;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 4;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 600 && a <= 711 && sumadhd_dscore === 55 && sex === "หญิง") || (a >= 600 && a <= 711 && sumadhd_dscore === 56 && sex === "หญิง")) {
      sumadhd_tscore = 70;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 3;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if (a >= 600 && a <= 711 && sumadhd_dscore === 5 && sex === "หญิง") {
      sumadhd_tscore = 69;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 3;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if (a >= 600 && a <= 711 && sumadhd_dscore === 54 && sex === "หญิง") {
      sumadhd_tscore = 68;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 3;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 600 && a <= 711 && sumadhd_dscore === 52 && sex === "หญิง") || (a >= 600 && a <= 711 && sumadhd_dscore === 53 && sex === "หญิง")) {
      sumadhd_tscore = 67;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 3;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 600 && a <= 711 && sumadhd_dscore === 50 && sex === "หญิง") || (a >= 600 && a <= 711 && sumadhd_dscore === 51 && sex === "หญิง")) {
      sumadhd_tscore = 66;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 3;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 600 && a <= 711 && sumadhd_dscore === 48 && sex === "หญิง") || (a >= 600 && a <= 711 && sumadhd_dscore === 49 && sex === "หญิง")) {
      sumadhd_tscore = 65;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 3;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 600 && a <= 711 && sumadhd_dscore === 46 && sex === "หญิง") || (a >= 600 && a <= 711 && sumadhd_dscore === 47 && sex === "หญิง")) {
      sumadhd_tscore = 64;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 3;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 1200 && a <= 711 && sumadhd_dscore === 44 && sex === "หญิง") || (a >= 600 && a <= 711 && sumadhd_dscore === 45 && sex === "หญิง")) {
      sumadhd_tscore = 63;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 3;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 600 && a <= 711 && sumadhd_dscore === 42 && sex === "หญิง") || (a >= 600 && a <= 711 && sumadhd_dscore === 43 && sex === "หญิง")) {
      sumadhd_tscore = 62;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 3;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 600 && a <= 711 && sumadhd_dscore === 40 && sex === "หญิง") || (a >= 600 && a <= 711 && sumadhd_dscore === 41 && sex === "หญิง")) {
      sumadhd_tscore = 61;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 3;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 600 && a <= 711 && sumadhd_dscore === 38 && sex === "หญิง") || (a >= 600 && a <= 711 && sumadhd_dscore === 39 && sex === "หญิง")) {
      sumadhd_tscore = 60;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 2;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if (a >= 600 && a <= 711 && sumadhd_dscore === 37 && sex === "หญิง") {
      sumadhd_tscore = 59;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 2;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 600 && a <= 711 && sumadhd_dscore === 35 && sex === "หญิง") || (a >= 600 && a <= 711 && sumadhd_dscore === 36 && sex === "หญิง")) {
      sumadhd_tscore = 58;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 2;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 600 && a <= 711 && sumadhd_dscore === 33 && sex === "หญิง") || (a >= 600 && a <= 711 && sumadhd_dscore === 34 && sex === "หญิง")) {
      sumadhd_tscore = 57;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 2;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 600 && a <= 711 && sumadhd_dscore === 31 && sex === "หญิง") || (a >= 600 && a <= 711 && sumadhd_dscore === 32 && sex === "หญิง")) {
      sumadhd_tscore = 56;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 2;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 600 && a <= 711 && sumadhd_dscore === 29 && sex === "หญิง") || (a >= 600 && a <= 711 && sumadhd_dscore === 30 && sex === "หญิง")) {
      sumadhd_tscore = 55;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 2;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 600 && a <= 711 && sumadhd_dscore === 27 && sex === "หญิง") || (a >= 600 && a <= 711 && sumadhd_dscore === 28 && sex === "หญิง")) {
      sumadhd_tscore = 54;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 2;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 600 && a <= 711 && sumadhd_dscore === 25 && sex === "หญิง") || (a >= 600 && a <= 711 && sumadhd_dscore === 26 && sex === "หญิง")) {
      sumadhd_tscore = 53;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 2;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 600 && a <= 711 && sumadhd_dscore === 23 && sex === "หญิง") || (a >= 600 && a <= 711 && sumadhd_dscore === 24 && sex === "หญิง")) {
      sumadhd_tscore = 52;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 2;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 600 && a <= 711 && sumadhd_dscore === 21 && sex === "หญิง") || (a >= 600 && a <= 711 && sumadhd_dscore === 22 && sex === "หญิง")) {
      sumadhd_tscore = 51;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 2;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if (a >= 600 && a <= 711 && sumadhd_dscore === 20 && sex === "หญิง") {
      sumadhd_tscore = 50;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 1;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 600 && a <= 711 && sumadhd_dscore === 19 && sex === "หญิง") || (a >= 600 && a <= 711 && sumadhd_dscore === 18 && sex === "หญิง")) {
      sumadhd_tscore = 49;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 1;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 600 && a <= 711 && sumadhd_dscore === 17 && sex === "หญิง") || (a >= 600 && a <= 711 && sumadhd_dscore === 16 && sex === "หญิง")) {
      sumadhd_tscore = 48;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 1;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 600 && a <= 711 && sumadhd_dscore === 15 && sex === "หญิง") || (a >= 600 && a <= 711 && sumadhd_dscore === 14 && sex === "หญิง")) {
      sumadhd_tscore = 47;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 1;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 600 && a <= 711 && sumadhd_dscore === 13 && sex === "หญิง") || (a >= 600 && a <= 711 && sumadhd_dscore === 12 && sex === "หญิง")) {
      sumadhd_tscore = 46;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 1;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 600 && a <= 711 && sumadhd_dscore === 11 && sex === "หญิง") || (a >= 600 && a <= 711 && sumadhd_dscore === 10 && sex === "หญิง")) {
      sumadhd_tscore = 45;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 1;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 600 && a <= 711 && sumadhd_dscore === 9 && sex === "หญิง") || (a >= 600 && a <= 711 && sumadhd_dscore === 8 && sex === "หญิง")) {
      sumadhd_tscore = 44;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 1;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 600 && a <= 711 && sumadhd_dscore === 7 && sex === "หญิง") || (a >= 600 && a <= 711 && sumadhd_dscore === 6 && sex === "หญิง")) {
      sumadhd_tscore = 43;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 1;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 600 && a <= 711 && sumadhd_dscore === 5 && sex === "หญิง") || (a >= 600 && a <= 711 && sumadhd_dscore === 4 && sex === "หญิง")) {
      sumadhd_tscore = 42;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 1;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 600 && a <= 711 && sumadhd_dscore === 3 && sex === "หญิง") || (a >= 600 && a <= 711 && sumadhd_dscore === 2 && sex === "หญิง")) {
      sumadhd_tscore = 41;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 1;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if (a >= 600 && a <= 711 && sumadhd_dscore === 1 && sex === "หญิง") {
      sumadhd_tscore = 40;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 1;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if (a >= 600 && a <= 711 && sumadhd_dscore === 0 && sex === "หญิง") {
      sumadhd_tscore = 39;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 1;
      //console.log("sumadhd_group = " + sumadhd_group);
    }
    //8/9.11  ก.2 รวม 
    else if ((a >= 800 && a <= 911 && sumadhd_dscore === 89 && sex === "หญิง") || (a >= 800 && a <= 911 && sumadhd_dscore === 90 && sex === "หญิง")) {
      sumadhd_tscore = 90;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 4;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 800 && a <= 911 && sumadhd_dscore === 87 && sex === "หญิง") || (a >= 800 && a <= 911 && sumadhd_dscore === 88 && sex === "หญิง")) {
      sumadhd_tscore = 89;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 4;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if (a >= 800 && a <= 911 && sumadhd_dscore === 86 && sex === "หญิง") {
      sumadhd_tscore = 88;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 4;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 800 && a <= 911 && sumadhd_dscore === 84 && sex === "หญิง") || (a >= 800 && a <= 911 && sumadhd_dscore === 85 && sex === "หญิง")) {
      sumadhd_tscore = 87;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 4;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 800 && a <= 911 && sumadhd_dscore === 82 && sex === "หญิง") || (a >= 800 && a <= 911 && sumadhd_dscore === 83 && sex === "หญิง")) {
      sumadhd_tscore = 86;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 4;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 800 && a <= 911 && sumadhd_dscore === 80 && sex === "หญิง") || (a >= 800 && a <= 911 && sumadhd_dscore === 81 && sex === "หญิง")) {
      sumadhd_tscore = 85;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 4;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 800 && a <= 911 && sumadhd_dscore === 78 && sex === "หญิง") || (a >= 800 && a <= 911 && sumadhd_dscore === 79 && sex === "หญิง")) {
      sumadhd_tscore = 84;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 4;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if (a >= 800 && a <= 911 && sumadhd_dscore === 77 && sex === "หญิง") {
      sumadhd_tscore = 83;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 4;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 800 && a <= 911 && sumadhd_dscore === 75 && sex === "หญิง") || (a >= 800 && a <= 911 && sumadhd_dscore === 76 && sex === "หญิง")) {
      sumadhd_tscore = 82;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 4;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 800 && a <= 911 && sumadhd_dscore === 73 && sex === "หญิง") || (a >= 800 && a <= 911 && sumadhd_dscore === 74 && sex === "หญิง")) {
      sumadhd_tscore = 81;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 4;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 800 && a <= 911 && sumadhd_dscore === 71 && sex === "หญิง") || (a >= 800 && a <= 911 && sumadhd_dscore === 72 && sex === "หญิง")) {
      sumadhd_tscore = 80;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 4;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if (a >= 800 && a <= 911 && sumadhd_dscore === 70 && sex === "หญิง") {
      sumadhd_tscore = 79;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 4;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 800 && a <= 911 && sumadhd_dscore === 68 && sex === "หญิง") || (a >= 800 && a <= 911 && sumadhd_dscore === 69 && sex === "หญิง")) {
      sumadhd_tscore = 78;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 4;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 800 && a <= 911 && sumadhd_dscore === 66 && sex === "หญิง") || (a >= 800 && a <= 911 && sumadhd_dscore === 67 && sex === "หญิง")) {
      sumadhd_tscore = 77;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 4;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 800 && a <= 911 && sumadhd_dscore === 64 && sex === "หญิง") || (a >= 800 && a <= 911 && sumadhd_dscore === 65 && sex === "หญิง")) {
      sumadhd_tscore = 76;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 4;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if (a >= 800 && a <= 911 && sumadhd_dscore === 63 && sex === "หญิง") {
      sumadhd_tscore = 75;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 4;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 800 && a <= 911 && sumadhd_dscore === 61 && sex === "หญิง") || (a >= 800 && a <= 911 && sumadhd_dscore === 62 && sex === "หญิง")) {
      sumadhd_tscore = 74;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 4;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 800 && a <= 911 && sumadhd_dscore === 59 && sex === "หญิง") || (a >= 800 && a <= 911 && sumadhd_dscore === 60 && sex === "หญิง")) {
      sumadhd_tscore = 73;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 4;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 800 && a <= 911 && sumadhd_dscore === 57 && sex === "หญิง") || (a >= 800 && a <= 911 && sumadhd_dscore === 58 && sex === "หญิง")) {
      sumadhd_tscore = 72;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 4;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if (a >= 800 && a <= 911 && sumadhd_dscore === 56 && sex === "หญิง") {
      sumadhd_tscore = 71;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 4;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 800 && a <= 911 && sumadhd_dscore === 54 && sex === "หญิง") || (a >= 800 && a <= 911 && sumadhd_dscore === 55 && sex === "หญิง")) {
      sumadhd_tscore = 70;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 3;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 800 && a <= 911 && sumadhd_dscore === 52 && sex === "หญิง") || (a >= 800 && a <= 911 && sumadhd_dscore === 53 && sex === "หญิง")) {
      sumadhd_tscore = 69;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 3;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 800 && a <= 911 && sumadhd_dscore === 50 && sex === "หญิง") || (a >= 800 && a <= 911 && sumadhd_dscore === 51 && sex === "หญิง")) {
      sumadhd_tscore = 68;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 3;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 800 && a <= 911 && sumadhd_dscore === 48 && sex === "หญิง") || (a >= 800 && a <= 911 && sumadhd_dscore === 49 && sex === "หญิง")) {
      sumadhd_tscore = 67;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 3;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if (a >= 800 && a <= 911 && sumadhd_dscore === 47 && sex === "หญิง") {
      sumadhd_tscore = 66;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 3;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 800 && a <= 911 && sumadhd_dscore === 45 && sex === "หญิง") || (a >= 800 && a <= 911 && sumadhd_dscore === 46 && sex === "หญิง")) {
      sumadhd_tscore = 65;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 3;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 800 && a <= 911 && sumadhd_dscore === 43 && sex === "หญิง") || (a >= 800 && a <= 911 && sumadhd_dscore === 44 && sex === "หญิง")) {
      sumadhd_tscore = 64;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 3;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 800 && a <= 911 && sumadhd_dscore === 41 && sex === "หญิง") || (a >= 800 && a <= 911 && sumadhd_dscore === 42 && sex === "หญิง")) {
      sumadhd_tscore = 63;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 3;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if (a >= 800 && a <= 911 && sumadhd_dscore === 40 && sex === "หญิง") {
      sumadhd_tscore = 62;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 3;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 800 && a <= 911 && sumadhd_dscore === 38 && sex === "หญิง") || (a >= 800 && a <= 911 && sumadhd_dscore === 39 && sex === "หญิง")) {
      sumadhd_tscore = 61;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 3;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 800 && a <= 911 && sumadhd_dscore === 36 && sex === "หญิง") || (a >= 800 && a <= 911 && sumadhd_dscore === 37 && sex === "หญิง")) {
      sumadhd_tscore = 60;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 2;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 800 && a <= 911 && sumadhd_dscore === 34 && sex === "หญิง") || (a >= 800 && a <= 911 && sumadhd_dscore === 35 && sex === "หญิง")) {
      sumadhd_tscore = 59;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 2;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if (a >= 800 && a <= 911 && sumadhd_dscore === 33 && sex === "หญิง") {
      sumadhd_tscore = 58;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 2;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 800 && a <= 911 && sumadhd_dscore === 31 && sex === "หญิง") || (a >= 800 && a <= 911 && sumadhd_dscore === 32 && sex === "หญิง")) {
      sumadhd_tscore = 57;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 2;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 800 && a <= 911 && sumadhd_dscore === 29 && sex === "หญิง") || (a >= 800 && a <= 911 && sumadhd_dscore === 30 && sex === "หญิง")) {
      sumadhd_tscore = 56;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 2;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 800 && a <= 911 && sumadhd_dscore === 27 && sex === "หญิง") || (a >= 800 && a <= 911 && sumadhd_dscore === 28 && sex === "หญิง")) {
      sumadhd_tscore = 55;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 2;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if (a >= 800 && a <= 911 && sumadhd_dscore === 26 && sex === "หญิง") {
      sumadhd_tscore = 54;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 2;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 800 && a <= 911 && sumadhd_dscore === 24 && sex === "หญิง") || (a >= 800 && a <= 911 && sumadhd_dscore === 25 && sex === "หญิง")) {
      sumadhd_tscore = 53;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 2;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 800 && a <= 911 && sumadhd_dscore === 22 && sex === "หญิง") || (a >= 800 && a <= 911 && sumadhd_dscore === 23 && sex === "หญิง")) {
      sumadhd_tscore = 52;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 2;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 800 && a <= 911 && sumadhd_dscore === 20 && sex === "หญิง") || (a >= 800 && a <= 911 && sumadhd_dscore === 21 && sex === "หญิง")) {
      sumadhd_tscore = 51;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 2;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 800 && a <= 911 && sumadhd_dscore === 18 && sex === "หญิง") || (a >= 800 && a <= 911 && sumadhd_dscore === 19 && sex === "หญิง")) {
      sumadhd_tscore = 50;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 1;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 800 && a <= 911 && sumadhd_dscore === 17 && sex === "หญิง") || (a >= 800 && a <= 911 && sumadhd_dscore === 16 && sex === "หญิง")) {
      sumadhd_tscore = 49;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 1;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if (a >= 800 && a <= 911 && sumadhd_dscore === 15 && sex === "หญิง") {
      sumadhd_tscore = 48;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 1;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 800 && a <= 911 && sumadhd_dscore === 14 && sex === "หญิง") || (a >= 800 && a <= 911 && sumadhd_dscore === 13 && sex === "หญิง")) {
      sumadhd_tscore = 47;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 1;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 800 && a <= 911 && sumadhd_dscore === 12 && sex === "หญิง") || (a >= 800 && a <= 911 && sumadhd_dscore === 11 && sex === "หญิง")) {
      sumadhd_tscore = 46;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 1;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 800 && a <= 911 && sumadhd_dscore === 10 && sex === "หญิง") || (a >= 800 && a <= 911 && sumadhd_dscore === 9 && sex === "หญิง")) {
      sumadhd_tscore = 45;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 1;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if (a >= 800 && a <= 911 && sumadhd_dscore === 8 && sex === "หญิง") {
      sumadhd_tscore = 44;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 1;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 800 && a <= 911 && sumadhd_dscore === 7 && sex === "หญิง") || (a >= 800 && a <= 911 && sumadhd_dscore === 6 && sex === "หญิง")) {
      sumadhd_tscore = 43;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 1;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 800 && a <= 911 && sumadhd_dscore === 5 && sex === "หญิง") || (a >= 800 && a <= 911 && sumadhd_dscore === 4 && sex === "หญิง")) {
      sumadhd_tscore = 42;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 1;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if (a >= 800 && a <= 911 && sumadhd_dscore === 3 && sex === "หญิง") {
      sumadhd_tscore = 41;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 1;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 800 && a <= 911 && sumadhd_dscore === 2 && sex === "หญิง") || (a >= 800 && a <= 911 && sumadhd_dscore === 1 && sex === "หญิง")) {
      sumadhd_tscore = 40;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 1;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if (a >= 800 && a <= 911 && sumadhd_dscore === 0 && sex === "หญิง") {
      sumadhd_tscore = 39;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 1;
      //console.log("sumadhd_group = " + sumadhd_group);
    }
    //10/11.11 ก.2 รวม
    else if ((a >= 1000 && a <= 1111 && sumadhd_dscore === 89 && sex === "หญิง") || (a >= 1000 && a <= 1111 && sumadhd_dscore === 90 && sex === "หญิง")) {
      sumadhd_tscore = 91;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 4;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if (a >= 1000 && a <= 1111 && sumadhd_dscore === 88 && sex === "หญิง") {
      sumadhd_tscore = 90;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 4;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 1000 && a <= 1111 && sumadhd_dscore === 86 && sex === "หญิง") || (a >= 1000 && a <= 1111 && sumadhd_dscore === 87 && sex === "หญิง")) {
      sumadhd_tscore = 89;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 4;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 1000 && a <= 1111 && sumadhd_dscore === 84 && sex === "หญิง") || (a >= 1000 && a <= 1111 && sumadhd_dscore === 85 && sex === "หญิง")) {
      sumadhd_tscore = 88;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 4;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 1000 && a <= 1111 && sumadhd_dscore === 82 && sex === "หญิง") || (a >= 1000 && a <= 1111 && sumadhd_dscore === 83 && sex === "หญิง")) {
      sumadhd_tscore = 87;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 4;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if (a >= 1000 && a <= 1111 && sumadhd_dscore === 81 && sex === "หญิง") {
      sumadhd_tscore = 86;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 4;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 1000 && a <= 1111 && sumadhd_dscore === 79 && sex === "หญิง") || (a >= 1000 && a <= 1111 && sumadhd_dscore === 80 && sex === "หญิง")) {
      sumadhd_tscore = 85;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 4;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 1000 && a <= 1111 && sumadhd_dscore === 77 && sex === "หญิง") || (a >= 1000 && a <= 1111 && sumadhd_dscore === 78 && sex === "หญิง")) {
      sumadhd_tscore = 84;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 4;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 1000 && a <= 1111 && sumadhd_dscore === 75 && sex === "หญิง") || (a >= 1000 && a <= 1111 && sumadhd_dscore === 76 && sex === "หญิง")) {
      sumadhd_tscore = 83;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 4;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if (a >= 1000 && a <= 1111 && sumadhd_dscore === 74 && sex === "หญิง") {
      sumadhd_tscore = 82;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 4;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 1000 && a <= 1111 && sumadhd_dscore === 72 && sex === "หญิง") || (a >= 1000 && a <= 1111 && sumadhd_dscore === 73 && sex === "หญิง")) {
      sumadhd_tscore = 81;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 4;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 1000 && a <= 1111 && sumadhd_dscore === 70 && sex === "หญิง") || (a >= 1000 && a <= 1111 && sumadhd_dscore === 71 && sex === "หญิง")) {
      sumadhd_tscore = 80;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 4;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 1000 && a <= 1111 && sumadhd_dscore === 68 && sex === "หญิง") || (a >= 1000 && a <= 1111 && sumadhd_dscore === 69 && sex === "หญิง")) {
      sumadhd_tscore = 79;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 4;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if (a >= 1000 && a <= 1111 && sumadhd_dscore === 67 && sex === "หญิง") {
      sumadhd_tscore = 78;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 4;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 1000 && a <= 1111 && sumadhd_dscore === 65 && sex === "หญิง") || (a >= 1000 && a <= 1111 && sumadhd_dscore === 66 && sex === "หญิง")) {
      sumadhd_tscore = 77;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 4;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 1000 && a <= 1111 && sumadhd_dscore === 63 && sex === "หญิง") || (a >= 1000 && a <= 1111 && sumadhd_dscore === 64 && sex === "หญิง")) {
      sumadhd_tscore = 76;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 4;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if (a >= 1000 && a <= 1111 && sumadhd_dscore === 62 && sex === "หญิง") {
      sumadhd_tscore = 75;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 4;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 1000 && a <= 1111 && sumadhd_dscore === 60 && sex === "หญิง") || (a >= 1000 && a <= 1111 && sumadhd_dscore === 61 && sex === "หญิง")) {
      sumadhd_tscore = 74;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 4;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 1000 && a <= 1111 && sumadhd_dscore === 58 && sex === "หญิง") || (a >= 1000 && a <= 1111 && sumadhd_dscore === 59 && sex === "หญิง")) {
      sumadhd_tscore = 73;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 4;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 1000 && a <= 1111 && sumadhd_dscore === 56 && sex === "หญิง") || (a >= 1000 && a <= 1111 && sumadhd_dscore === 57 && sex === "หญิง")) {
      sumadhd_tscore = 72;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 4;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if (a >= 1000 && a <= 1111 && sumadhd_dscore === 55 && sex === "หญิง") {
      sumadhd_tscore = 71;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 4;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 1000 && a <= 1111 && sumadhd_dscore === 53 && sex === "หญิง") || (a >= 1000 && a <= 1111 && sumadhd_dscore === 54 && sex === "หญิง")) {
      sumadhd_tscore = 70;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 3;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 1000 && a <= 1111 && sumadhd_dscore === 51 && sex === "หญิง") || (a >= 1000 && a <= 1111 && sumadhd_dscore === 52 && sex === "หญิง")) {
      sumadhd_tscore = 69;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 3;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 800 && a <= 1111 && sumadhd_dscore === 49 && sex === "หญิง") || (a >= 1000 && a <= 1111 && sumadhd_dscore === 50 && sex === "หญิง")) {
      sumadhd_tscore = 68;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 3;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if (a >= 1000 && a <= 1111 && sumadhd_dscore === 48 && sex === "หญิง") {
      sumadhd_tscore = 67;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 3;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 1000 && a <= 1111 && sumadhd_dscore === 46 && sex === "หญิง") || (a >= 1000 && a <= 1111 && sumadhd_dscore === 47 && sex === "หญิง")) {
      sumadhd_tscore = 66;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 3;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 1000 && a <= 1111 && sumadhd_dscore === 44 && sex === "หญิง") || (a >= 1000 && a <= 1111 && sumadhd_dscore === 45 && sex === "หญิง")) {
      sumadhd_tscore = 65;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 3;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 1000 && a <= 1111 && sumadhd_dscore === 42 && sex === "หญิง") || (a >= 1000 && a <= 1111 && sumadhd_dscore === 43 && sex === "หญิง")) {
      sumadhd_tscore = 64;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 3;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if (a >= 1000 && a <= 1111 && sumadhd_dscore === 41 && sex === "หญิง") {
      sumadhd_tscore = 63;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 3;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 1000 && a <= 1111 && sumadhd_dscore === 39 && sex === "หญิง") || (a >= 1000 && a <= 1111 && sumadhd_dscore === 40 && sex === "หญิง")) {
      sumadhd_tscore = 62;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 3;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 800 && a <= 1111 && sumadhd_dscore === 37 && sex === "หญิง") || (a >= 1000 && a <= 1111 && sumadhd_dscore === 38 && sex === "หญิง")) {
      sumadhd_tscore = 61;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 3;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 1000 && a <= 1111 && sumadhd_dscore === 35 && sex === "หญิง") || (a >= 1000 && a <= 1111 && sumadhd_dscore === 36 && sex === "หญิง")) {
      sumadhd_tscore = 60;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 2;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 1000 && a <= 1111 && sumadhd_dscore === 33 && sex === "หญิง") || (a >= 1000 && a <= 1111 && sumadhd_dscore === 34 && sex === "หญิง")) {
      sumadhd_tscore = 59;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 2;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if (a >= 1000 && a <= 1111 && sumadhd_dscore === 32 && sex === "หญิง") {
      sumadhd_tscore = 58;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 2;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 1000 && a <= 1111 && sumadhd_dscore === 30 && sex === "หญิง") || (a >= 1000 && a <= 1111 && sumadhd_dscore === 31 && sex === "หญิง")) {
      sumadhd_tscore = 57;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 2;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 1000 && a <= 1111 && sumadhd_dscore === 28 && sex === "หญิง") || (a >= 1000 && a <= 1111 && sumadhd_dscore === 29 && sex === "หญิง")) {
      sumadhd_tscore = 56;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 2;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if (a >= 1000 && a <= 1111 && sumadhd_dscore === 27 && sex === "หญิง") {
      sumadhd_tscore = 55;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 2;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 1000 && a <= 1111 && sumadhd_dscore === 25 && sex === "หญิง") || (a >= 1000 && a <= 1111 && sumadhd_dscore === 26 && sex === "หญิง")) {
      sumadhd_tscore = 54;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 2;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 1000 && a <= 1111 && sumadhd_dscore === 23 && sex === "หญิง") || (a >= 1000 && a <= 1111 && sumadhd_dscore === 24 && sex === "หญิง")) {
      sumadhd_tscore = 53;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 2;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if (a >= 1000 && a <= 1111 && sumadhd_dscore === 22 && sex === "หญิง") {
      sumadhd_tscore = 52;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 2;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 1000 && a <= 1111 && sumadhd_dscore === 20 && sex === "หญิง") || (a >= 1000 && a <= 1111 && sumadhd_dscore === 21 && sex === "หญิง")) {
      sumadhd_tscore = 51;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 2;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 1000 && a <= 1111 && sumadhd_dscore === 18 && sex === "หญิง") || (a >= 1000 && a <= 1111 && sumadhd_dscore === 19 && sex === "หญิง")) {
      sumadhd_tscore = 50;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 1;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 1000 && a <= 1111 && sumadhd_dscore === 17 && sex === "หญิง") || (a >= 1000 && a <= 1111 && sumadhd_dscore === 16 && sex === "หญิง")) {
      sumadhd_tscore = 49;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 1;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if (a >= 1000 && a <= 1111 && sumadhd_dscore === 15 && sex === "หญิง") {
      sumadhd_tscore = 48;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 1;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 1000 && a <= 1111 && sumadhd_dscore === 14 && sex === "หญิง") || (a >= 1000 && a <= 1111 && sumadhd_dscore === 13 && sex === "หญิง")) {
      sumadhd_tscore = 47;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 1;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 1000 && a <= 1111 && sumadhd_dscore === 12 && sex === "หญิง") || (a >= 1000 && a <= 1111 && sumadhd_dscore === 11 && sex === "หญิง")) {
      sumadhd_tscore = 46;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 1;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 1000 && a <= 1111 && sumadhd_dscore === 10 && sex === "หญิง") || (a >= 1000 && a <= 1111 && sumadhd_dscore === 9 && sex === "หญิง")) {
      sumadhd_tscore = 45;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 1;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if (a >= 1000 && a <= 1111 && sumadhd_dscore === 8 && sex === "หญิง") {
      sumadhd_tscore = 44;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 1;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 1000 && a <= 1111 && sumadhd_dscore === 7 && sex === "หญิง") || (a >= 1000 && a <= 1111 && sumadhd_dscore === 6 && sex === "หญิง")) {
      sumadhd_tscore = 43;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 1;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 1000 && a <= 1111 && sumadhd_dscore === 5 && sex === "หญิง") || (a >= 1000 && a <= 1111 && sumadhd_dscore === 4 && sex === "หญิง")) {
      sumadhd_tscore = 42;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 1;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 1000 && a <= 1111 && sumadhd_dscore === 3 && sex === "หญิง") || (a >= 1000 && a <= 1111 && sumadhd_dscore === 2 && sex === "หญิง")) {
      sumadhd_tscore = 41;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 1;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if (a >= 1000 && a <= 1111 && sumadhd_dscore === 1 && sex === "หญิง") {
      sumadhd_tscore = 40;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 1;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if (a >= 1000 && a <= 1111 && sumadhd_dscore === 0 && sex === "หญิง") {
      sumadhd_tscore = 39;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 1;
      //console.log("sumadhd_group = " + sumadhd_group);
    }
    //12/13.11 ก.2 รวม
    else if (a >= 1200 && a <= 1311 && sumadhd_dscore === 90 && sex === "หญิง") {
      sumadhd_tscore = 94;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 4;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if (a >= 1200 && a <= 1311 && sumadhd_dscore === 89 && sex === "หญิง") {
      sumadhd_tscore = 93;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 4;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 1200 && a <= 1311 && sumadhd_dscore === 87 && sex === "หญิง") || (a >= 1200 && a <= 1311 && sumadhd_dscore === 88 && sex === "หญิง")) {
      sumadhd_tscore = 92;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 4;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 1200 && a <= 1311 && sumadhd_dscore === 85 && sex === "หญิง") || (a >= 1200 && a <= 1311 && sumadhd_dscore === 86 && sex === "หญิง")) {
      sumadhd_tscore = 91;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 4;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if (a >= 1200 && a <= 1311 && sumadhd_dscore === 84 && sex === "หญิง") {
      sumadhd_tscore = 90;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 4;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 1200 && a <= 1311 && sumadhd_dscore === 82 && sex === "หญิง") || (a >= 1200 && a <= 1311 && sumadhd_dscore === 83 && sex === "หญิง")) {
      sumadhd_tscore = 89;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 4;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 1200 && a <= 1311 && sumadhd_dscore === 80 && sex === "หญิง") || (a >= 1200 && a <= 1311 && sumadhd_dscore === 81 && sex === "หญิง")) {
      sumadhd_tscore = 88;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 4;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if (a >= 1200 && a <= 1311 && sumadhd_dscore === 79 && sex === "หญิง") {
      sumadhd_tscore = 87;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 4;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 1200 && a <= 1311 && sumadhd_dscore === 77 && sex === "หญิง") || (a >= 1200 && a <= 1311 && sumadhd_dscore === 78 && sex === "หญิง")) {
      sumadhd_tscore = 86;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 4;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 1200 && a <= 1311 && sumadhd_dscore === 75 && sex === "หญิง") || (a >= 1200 && a <= 1311 && sumadhd_dscore === 76 && sex === "หญิง")) {
      sumadhd_tscore = 85;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 4;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if (a >= 1200 && a <= 1311 && sumadhd_dscore === 74 && sex === "หญิง") {
      sumadhd_tscore = 84;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 4;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 1200 && a <= 1311 && sumadhd_dscore === 72 && sex === "หญิง") || (a >= 1200 && a <= 1311 && sumadhd_dscore === 73 && sex === "หญิง")) {
      sumadhd_tscore = 83;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 4;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 1200 && a <= 1311 && sumadhd_dscore === 70 && sex === "หญิง") || (a >= 1200 && a <= 1311 && sumadhd_dscore === 71 && sex === "หญิง")) {
      sumadhd_tscore = 82;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 4;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if (a >= 1200 && a <= 1311 && sumadhd_dscore === 69 && sex === "หญิง") {
      sumadhd_tscore = 81;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 4;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 1200 && a <= 1311 && sumadhd_dscore === 67 && sex === "หญิง") || (a >= 1200 && a <= 1311 && sumadhd_dscore === 68 && sex === "หญิง")) {
      sumadhd_tscore = 80;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 4;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 1200 && a <= 1311 && sumadhd_dscore === 65 && sex === "หญิง") || (a >= 1200 && a <= 1311 && sumadhd_dscore === 66 && sex === "หญิง")) {
      sumadhd_tscore = 79;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 4;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if (a >= 1200 && a <= 1311 && sumadhd_dscore === 64 && sex === "หญิง") {
      sumadhd_tscore = 78;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 4;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 1200 && a <= 1311 && sumadhd_dscore === 62 && sex === "หญิง") || (a >= 1200 && a <= 1311 && sumadhd_dscore === 63 && sex === "หญิง")) {
      sumadhd_tscore = 77;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 4;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 1200 && a <= 1311 && sumadhd_dscore === 60 && sex === "หญิง") || (a >= 1200 && a <= 1311 && sumadhd_dscore === 61 && sex === "หญิง")) {
      sumadhd_tscore = 76;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 4;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if (a >= 1200 && a <= 1311 && sumadhd_dscore === 59 && sex === "หญิง") {
      sumadhd_tscore = 75;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 4;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 1200 && a <= 1311 && sumadhd_dscore === 57 && sex === "หญิง") || (a >= 1200 && a <= 1311 && sumadhd_dscore === 58 && sex === "หญิง")) {
      sumadhd_tscore = 74;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 4;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if (a >= 1200 && a <= 1311 && sumadhd_dscore === 56 && sex === "หญิง") {
      sumadhd_tscore = 73;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 4;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 1200 && a <= 1311 && sumadhd_dscore === 54 && sex === "หญิง") || (a >= 1200 && a <= 1311 && sumadhd_dscore === 55 && sex === "หญิง")) {
      sumadhd_tscore = 72;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 4;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 1200 && a <= 1311 && sumadhd_dscore === 52 && sex === "หญิง") || (a >= 1200 && a <= 1311 && sumadhd_dscore === 53 && sex === "หญิง")) {
      sumadhd_tscore = 71;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 4;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if (a >= 1200 && a <= 1311 && sumadhd_dscore === 51 && sex === "หญิง") {
      sumadhd_tscore = 70;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 3;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 1200 && a <= 1311 && sumadhd_dscore === 49 && sex === "หญิง") || (a >= 1200 && a <= 1311 && sumadhd_dscore === 50 && sex === "หญิง")) {
      sumadhd_tscore = 69;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 3;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 1200 && a <= 1311 && sumadhd_dscore === 47 && sex === "หญิง") || (a >= 1200 && a <= 1311 && sumadhd_dscore === 48 && sex === "หญิง")) {
      sumadhd_tscore = 68;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 3;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if (a >= 1200 && a <= 1311 && sumadhd_dscore === 46 && sex === "หญิง") {
      sumadhd_tscore = 67;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 3;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 1200 && a <= 1311 && sumadhd_dscore === 44 && sex === "หญิง") || (a >= 1200 && a <= 1311 && sumadhd_dscore === 45 && sex === "หญิง")) {
      sumadhd_tscore = 66;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 3;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 1200 && a <= 1311 && sumadhd_dscore === 42 && sex === "หญิง") || (a >= 1200 && a <= 1311 && sumadhd_dscore === 43 && sex === "หญิง")) {
      sumadhd_tscore = 65;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 3;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if (a >= 1200 && a <= 1311 && sumadhd_dscore === 41 && sex === "หญิง") {
      sumadhd_tscore = 64;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 3;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 1200 && a <= 1311 && sumadhd_dscore === 39 && sex === "หญิง") || (a >= 1200 && a <= 1311 && sumadhd_dscore === 40 && sex === "หญิง")) {
      sumadhd_tscore = 63;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 3;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 1200 && a <= 1311 && sumadhd_dscore === 37 && sex === "หญิง") || (a >= 1200 && a <= 1311 && sumadhd_dscore === 38 && sex === "หญิง")) {
      sumadhd_tscore = 62;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 3;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if (a >= 1200 && a <= 1311 && sumadhd_dscore === 36 && sex === "หญิง") {
      sumadhd_tscore = 61;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 3;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 1200 && a <= 1311 && sumadhd_dscore === 34 && sex === "หญิง") || (a >= 1200 && a <= 1311 && sumadhd_dscore === 24 && sex === "หญิง")) {
      sumadhd_tscore = 60;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 2;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 1200 && a <= 1311 && sumadhd_dscore === 32 && sex === "หญิง") || (a >= 1200 && a <= 1311 && sumadhd_dscore === 24 && sex === "หญิง")) {
      sumadhd_tscore = 59;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 2;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if (a >= 1200 && a <= 1311 && sumadhd_dscore === 31 && sex === "หญิง") {
      sumadhd_tscore = 58;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 2;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 1200 && a <= 1311 && sumadhd_dscore === 29 && sex === "หญิง") || (a >= 1200 && a <= 1311 && sumadhd_dscore === 30 && sex === "หญิง")) {
      sumadhd_tscore = 57;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 2;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 1200 && a <= 1311 && sumadhd_dscore === 27 && sex === "หญิง") || (a >= 1200 && a <= 1311 && sumadhd_dscore === 28 && sex === "หญิง")) {
      sumadhd_tscore = 56;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 2;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if (a >= 1200 && a <= 1311 && sumadhd_dscore === 26 && sex === "หญิง") {
      sumadhd_tscore = 55;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 2;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 1200 && a <= 1311 && sumadhd_dscore === 24 && sex === "หญิง") || (a >= 1200 && a <= 1311 && sumadhd_dscore === 25 && sex === "หญิง")) {
      sumadhd_tscore = 54;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 2;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 1200 && a <= 1311 && sumadhd_dscore === 22 && sex === "หญิง") || (a >= 1200 && a <= 1311 && sumadhd_dscore === 23 && sex === "หญิง")) {
      sumadhd_tscore = 53;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 2;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if (a >= 1200 && a <= 1311 && sumadhd_dscore === 21 && sex === "หญิง") {
      sumadhd_tscore = 52;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 2;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 1200 && a <= 1311 && sumadhd_dscore === 19 && sex === "หญิง") || (a >= 1200 && a <= 1311 && sumadhd_dscore === 20 && sex === "หญิง")) {
      sumadhd_tscore = 51;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 2;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 1200 && a <= 1311 && sumadhd_dscore === 17 && sex === "หญิง") || (a >= 1200 && a <= 1311 && sumadhd_dscore === 18 && sex === "หญิง")) {
      sumadhd_tscore = 50;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 1;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if (a >= 1200 && a <= 1311 && sumadhd_dscore === 16 && sex === "หญิง") {
      sumadhd_tscore = 49;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 1;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 1200 && a <= 1311 && sumadhd_dscore === 15 && sex === "หญิง") || (a >= 1200 && a <= 1311 && sumadhd_dscore === 14 && sex === "หญิง")) {
      sumadhd_tscore = 48;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 1;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 1200 && a <= 1311 && sumadhd_dscore === 13 && sex === "หญิง") || (a >= 1200 && a <= 1311 && sumadhd_dscore === 12 && sex === "หญิง")) {
      sumadhd_tscore = 47;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 1;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if (a >= 1200 && a <= 1311 && sumadhd_dscore === 11 && sex === "หญิง") {
      sumadhd_tscore = 46;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 1;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 1200 && a <= 1311 && sumadhd_dscore === 10 && sex === "หญิง") || (a >= 1200 && a <= 1311 && sumadhd_dscore === 9 && sex === "หญิง")) {
      sumadhd_tscore = 45;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 1;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 1200 && a <= 1311 && sumadhd_dscore === 8 && sex === "หญิง") || (a >= 1200 && a <= 1311 && sumadhd_dscore === 7 && sex === "หญิง")) {
      sumadhd_tscore = 44;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 1;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if (a >= 1200 && a <= 1311 && sumadhd_dscore === 6 && sex === "หญิง") {
      sumadhd_tscore = 43;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 1;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 1200 && a <= 1311 && sumadhd_dscore === 5 && sex === "หญิง") || (a >= 1200 && a <= 1311 && sumadhd_dscore === 4 && sex === "หญิง")) {
      sumadhd_tscore = 42;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 1;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if ((a >= 1200 && a <= 1311 && sumadhd_dscore === 3 && sex === "หญิง") || (a >= 1200 && a <= 1311 && sumadhd_dscore === 2 && sex === "หญิง")) {
      sumadhd_tscore = 41;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 1;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if (a >= 1200 && a <= 1311 && sumadhd_dscore === 1 && sex === "หญิง") {
      sumadhd_tscore = 40;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 1;
      //console.log("sumadhd_group = " + sumadhd_group);
    } else if (a >= 1200 && a <= 1311 && sumadhd_dscore === 0 && sex === "หญิง") {
      sumadhd_tscore = 39;
      //console.log("sumadhd_tscore = " + sumadhd_tscore);
      sumadhd_group = 1;
      //console.log("sumadhd_group = " + sumadhd_group);
    }

    console.log(adhd1_dscore)
    console.log(adhd1_tscore)
    console.log(adhd1_group)
    console.log(adhd2_dscore)
    console.log(adhd2_tscore)
    console.log(adhd2_group)

    console.log("sum :" + sumadhd_dscore)
    console.log("sum :" + sumadhd_tscore)
    console.log("sum :" + sumadhd_group)
    //console.log(`ส่งค่ามาจากการส่งฟอร์ม :${adhd2_dscore}`);
    //console.log("API URL = ", process.env.REACT_APP_API);

    axios.put(`${process.env.REACT_APP_API}/kussi-AAHD/${params.idcard}/${params.schoolyear}/${params.term}`, {
      adhd2_dscore, adhd2_tscore, adhd2_group, sumadhd_dscore, sumadhd_tscore, sumadhd_group
    },
    {
      headers: {
        authtoken,
      }
    })
      .then((response) => {
        //alert("บันทึกสำเร็จ");
        history(`/kussi-LDR/${stdidcard}/${schoolyear}/${term}`);
      })
      .catch((err) => {
        alert(err.response.data.error);
      });
console.log(`${process.env.REACT_APP_API}/kussi-AAHD/${params.idcard}/${params.schoolyear}/${params.term}`)
  };

  //คำถามADHD
  const infomation = [
    {
      no: 16,
      info: "ลืมส่งการบ้าน",
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
      no: 17,
      info: "ไม่สนใจเวลาครูสอน",
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
      no: 18,
      info: "ทำงานช้า",
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
      no: 19,
      info: "เหม่อ ใจลอย",
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
      no: 20,
      info: "ทำงานสะเพร่า ไม่รอบคอบ",
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
      no: 21,
      info: "ต้องถูกเรียกหรือกระตุ้นบ่อยๆ เพื่อให้ทำงาน",
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
      no: 22,
      info: "เฉื่อยชา",
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
      no: 23,
      info: "วอกแว่กง่าย",
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
      no: 24,
      info: "ทำอะไรไม่เรียบร้อย",
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
      no: 25,
      info: "ทำหนังสือ อุปกรณ์การเรียน หรือของใช้ส่วนตัวหาย",
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
      no: 26,
      info: "ขาดความรับผิดชอบ",
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
      no: 27,
      info: "ไม่จดจ่อกับงานที่กำลังทำ",
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
      no: 28,
      info: "ช่วงความสนใจสั้น",
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
      no: 29,
      info: "ทำงานในห้องเรียนไม่เสร็จ",
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
      no: 30,
      info: "ไม่ทำงานส่ง",
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
                      {/*
                  <td>{element.chekcbox2}</td>
                  <td>{element.chekcbox3}</td>
                  <td>{element.chekcbox4}</td>
                  */}
                    </tr>
                  </tbody>
                );
              })}
            </Table>
            <h5 align="right">
              &nbsp; รวมคะแนนดิบ ขาดสมาธิ
              <input type="number" value={adhd2_dscore} readOnly /> <br />
              {/*}
              <br />
               <Button variant="success" type="button" onClick={() => setSumscore((sumscore) => adhd2_dscore)}>
                แปลผลคะแนน Tscore {tscore}
              </Button>
              &nbsp; คะแนน tscore
              <input type="number" value={tscore}  />
              &nbsp;&nbsp; กลุ่ม
              <input type="number" value={group} readOnly /> <br />
            */}
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

export default Kussi_ADHD2;
