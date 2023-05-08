import React from "react";
import "./Contact.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Table, Form, Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, json, useParams } from "react-router-dom";
import { RiSearchLine } from "react-icons/ri";
import Swal from "sweetalert2";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import { useDispatch, useSelector } from "react-redux";



const Contact = () => {

  const schoolid = localStorage.schoolid
  console.log(schoolid)

  const { user } = useSelector((state) => ({ ...state }));
  //console.log('USER', user.username)


  //
  const [stdgrade, setStdgrade] = useState({
    grade: "",
    room: "-"
  })
  const { grade, room } = stdgrade
  const valueGrade = data => event => {
    setStdgrade({ ...stdgrade, [data]: event.target.value })
  }
  console.log(stdgrade)

  
  //searchdata
  const [studentgrade, setStudentgrade] = useState([])
  const searchData = (e) => {
    e.preventDefault();
    console.log("ค้นหา", grade, room)

    const authtoken = localStorage.token

    if (grade != null && room === "-") {
      axios.get(`${process.env.REACT_APP_API}/search/${grade}/${schoolid}`,
        {
          headers: {
            authtoken,
          }
        })
        .then((response) => {
          setStudentgrade(response.data)

        })
        .catch((err) =>
          Swal.fire({
            icon: "warning",
            text: "กรุณาเลือกห้องเรียน",
            confirmButtonColor: "#2D7F55",
          }));
    } else if (grade != null && room != null) {
      axios.get(`${process.env.REACT_APP_API}/search/${grade}/${room}/${schoolid}` ,
      {
        headers: {
          authtoken,
        }
      })
        .then((response) => {
          setStudentgrade(response.data)

        })
        .catch((err) =>
          Swal.fire({
            icon: "warning",
            text: "กรุณาเลือกห้องเรียน",
            confirmButtonColor: "#2D7F55",
          }));
    } else { alert("เกิดข้อผิดพลาด") }


  }
  console.log(studentgrade)



  const sizePerPageOptionRenderer = ({
    text,
    page,
    onSizePerPageChange
  }) => (
    <li
      key={text}
      role="presentation"
      className="dropdown-item"
    >
      <a
        href="#"
        tabIndex="-1"
        role="menuitem"
        data-page={page}
        onMouseDown={(e) => {
          e.preventDefault();
          onSizePerPageChange(page);
        }}
        style={{ color: 'black', textDecoration: "none" }}
      >
        {text}
      </a>
    </li>
  );

  const options = {
    sizePerPageOptionRenderer
  };

  const columns = [
    { dataField: "stdid", text: "รหัสนักเรียน", headerStyle: { backgroundColor: "#25383C", color: "white", textAlign: "center", fontWeight: "300" }, align: "center" },
    { dataField: "no", text: "เลขที่", headerStyle: { backgroundColor: "#25383C", color: "white", textAlign: "center", fontWeight: "300" }, align: "center" },
    { dataField: "f_name", text: "ชื่อ", headerStyle: { backgroundColor: "#25383C", color: "white", textAlign: "center", fontWeight: "300" }, align: "center" },
    { dataField: "l_name", text: "นามสกุล", headerStyle: { backgroundColor: "#25383C", color: "white", textAlign: "center", fontWeight: "300" }, align: "center" },
    { dataField: "grade", text: "ระดับชั้น", headerStyle: { backgroundColor: "#25383C", color: "white", textAlign: "center", fontWeight: "300" }, align: "center" },
    { dataField: "room", text: "ห้อง", headerStyle: { backgroundColor: "#25383C", color: "white", textAlign: "center", fontWeight: "300" }, align: "center" },


    {
      isDummyField: true,
      text: "ผลการประเมิน",
      headerStyle: { backgroundColor: "#25383C", color: "white", textAlign: "center", fontWeight: "300" }, align: "center",
      formatter: (cell, row, rowIndex) => {
        return (
          <a class="btn btn-success" href={`/studentreport/${row.stdidcard}/${row.grade}/${row.room}`} >แสดง</a>
          //<Link to={`/studentreport/${row.stdidcard}/${row.grade}/${row.room}`}><Button variant="success">แสดง</Button></Link>
        )

      }
    },

    {
      isDummyField: true,
      text: "บันทึกข้อมูล",
      headerStyle: { backgroundColor: "#25383C", color: "white", textAlign: "center", fontWeight: "300" }, align: "center",
      formatter: (cell, row, rowIndex) => {
        return (
          <a class="btn btn-danger" href={`/screenning/${row.stdidcard}`} >บันทึกข้อมูล</a>
          //<Link to={`/screenning/${row.stdidcard}`}><Button variant="danger">บันทึกข้อมูล</Button></Link>
        )

      }
    },


  ]

  const seen4 = new Set();
  const studentgradevalue = studentgrade.filter(item => {
    const duplicate4 = seen4.has(item.grade);
    seen4.add(item.grade);
    return !duplicate4;
  });
  const seen5 = new Set();
  const studentroomvalue = studentgrade.filter(item => {
    const duplicate5 = seen5.has(item.room);
    seen5.add(item.room);
    return !duplicate5;
  });

  const seen6 = new Set();
  const schoolnamevalue = studentgrade.filter(item => {
    const duplicate6 = seen6.has(item.thainame);
    seen6.add(item.thainame);
    return !duplicate6;
  });

  const emptyDataMessage = () => { return '-ไม่พบรายชื่อนักเรียน-';}
  return (

    <div>
      <div className="search bg-2 ">
        <h5>ค้นหานักเรียน <RiSearchLine style={{ marginLeft: "3px", marginTop: "-3px" }} /></h5> <br />
        <Form onSubmit={searchData}>
          <select name="grade" style={{ borderRadius: "10px", marginRight: "20px", width: "400px", padding: "4px 15px", backgroundColor: "white", boxShadow: "inset 0 1px 0 0 gray" }} value={grade} onChange={valueGrade("grade")} >
            <option value="">-เลือกระดับชั้น-</option>
            <option value="ชั้นประถมศึกษาปีที่1">ชั้นประถมศึกษาปีที่1</option>
            <option value="ชั้นประถมศึกษาปีที่2">ชั้นประถมศึกษาปีที่2</option>
            <option value="ชั้นประถมศึกษาปีที่3">ชั้นประถมศึกษาปีที่3</option>
            <option value="ชั้นประถมศึกษาปีที่4">ชั้นประถมศึกษาปีที่4</option>
            <option value="ชั้นประถมศึกษาปีที่5">ชั้นประถมศึกษาปีที่5</option>
            <option value="ชั้นประถมศึกษาปีที่6">ชั้นประถมศึกษาปีที่6</option>
          </select>
          <select name="room" value={room} onChange={valueGrade('room')} style={{ borderRadius: "10px", marginRight: "20px", width: "185px", padding: "4px 15px", backgroundColor: "white", boxShadow: "inset 0 1px 0 0 gray" }} >
            <option value="-">เลือกห้องเรียน</option>
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

      <div className="col-md-12 bg-excel bg-3 shadow">
        <h4 style={{ textAlign: "center" }}>{studentgrade.length > 0 ? <div> <h4>โรงเรียน {schoolnamevalue.map(item => item.thainame)}</h4> <br /> <h5>{studentgradevalue.map(item => item.grade)} / {studentroomvalue.map(item => item.room)} </h5></div> : "รายชื่อนักเรียน"}</h4><br />
        <div></div>
       
          <BootstrapTable striped hover size="sm" noDataIndication={emptyDataMessage}

            keyField="idcard"
            data={studentgrade}
            columns={columns}

            pagination={paginationFactory(options)}
          />
      </div>

    </div>
  );
};

export default Contact;
