import React, { useEffect, useState } from "react";
import "./Search.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Row, Col, InputGroup, Form } from "react-bootstrap";
import axios from "axios";

const Search = (props) => {
  const [studentgrade, setStudentgrade] = useState([])

  //
  const [stdgrade, setStdgrade] = useState({
    grade: "",
    room: ""
  })
  const { grade, room } = stdgrade
  const valueGrade = data => event => {
    setStdgrade({ ...stdgrade, [data]: event.target.value })
  }
  //console.logstdgrade)

  const authtoken = localStorage.token
  const searchData = (e) => {
    
    e.preventDefault();
    //console.log"ค้นหา", grade, room)
    axios.get(`${process.env.REACT_APP_API}/search/${grade}/${room}`,
    {
      headers: {
        authtoken,
      }
    })
      .then((response) => {
        setStudentgrade(response.data)
      })
      .catch((err) => alert('กรุณาเลือกห้องเรียน'));
   
  }
  //console.logstudentgrade)
  return (

    <div className="bg-2 shadow">
      <div className="search">
        <h5>ค้นหารายนักเรียน</h5> <br />
        <Form onSubmit={searchData}>
          <select name="grade" style={{ borderRadius: "10px", marginRight: "20px", width: "400px", padding: "4px 15px", backgroundColor: "white", boxShadow: "inset 0 1px 0 0 gray" }} value={grade} onChange={valueGrade("grade")} >
            <option value="-">--เลือกระดับชั้น--</option>
            <option value="ชั้นประถมศึกษาปีที่1">ชั้นประถมศึกษาปีที่1</option>
            <option value="ชั้นประถมศึกษาปีที่2">ชั้นประถมศึกษาปีที่2</option>
            <option value="ชั้นประถมศึกษาปีที่3">ชั้นประถมศึกษาปีที่3</option>
            <option value="ชั้นประถมศึกษาปีที่4">ชั้นประถมศึกษาปีที่4</option>
            <option value="ชั้นประถมศึกษาปีที่5">ชั้นประถมศึกษาปีที่5</option>
            <option value="ชั้นประถมศึกษาปีที่6">ชั้นประถมศึกษาปีที่6</option>
          </select>
          <select name="room" value={room} onChange={valueGrade('room')} style={{ borderRadius: "10px", marginRight: "20px", width: "185px", padding: "4px 15px", backgroundColor: "white", boxShadow: "inset 0 1px 0 0 gray" }} >
            <option value="-">--เลือกห้องเรียน--</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select> 

          <Button variant="success" style={{ borderRadius: "10px", width: "150px", padding: "5px 15px" }} type="submit" >ค้นหา</Button>
        </Form>
      </div>
    </div>

  );
};

export default Search;
