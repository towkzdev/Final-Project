import Navbartop from "./Navbar_top";
import { Button, Table, Form } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { RiFileExcel2Line, RiSearchLine } from "react-icons/ri";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import { Navigate } from "react-router-dom";

const StudentcontactsComponent = () => {

    const authtoken = localStorage.token
    const [stdgrade, setStdgrade] = useState({
        grade: "",
        room: "-"
    })
    const { grade, room } = stdgrade
    const valueGrade = data => event => {
        setStdgrade({ ...stdgrade, [data]: event.target.value })
    }
    //console.logstdgrade)

    //searchFunction
    const schoolid = localStorage.schoolid
    const [studentgrade, setStudentgrade] = useState([])
    const searchData = (e) => {
        e.preventDefault();
        //console.log"ค้นหา", grade, room)
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
            axios.get(`${process.env.REACT_APP_API}/search/${grade}/${room}/${schoolid}`,
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
        //console.log`${process.env.REACT_APP_API}/search/${grade}`)
    }
    //console.logstudentgrade)


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

    //delete data 

    const Delete = (stdidcard) => {
        //console.logstdidcard)
        Swal.fire({
            title: 'ยืนยันการลบ',
            //text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#2D7F55',
            cancelButtonColor: '#d33',
            confirmButtonText: 'ยืนยัน',
            cancelButtonText: 'ยกเลิก'
        }).then((result) => {
            if (result.isConfirmed) {
                deletestudentData(stdidcard)
            }
        })
    }
    const deletestudentData = (stdidcard) => {
        axios.delete(`${process.env.REACT_APP_API}/deletedata/${stdidcard}`,
            {
                headers: {
                    authtoken,
                }
            })
            .then((response) => {
                Swal.fire({
                    icon: "success",
                    text: "ลบสำเร็จ",
                    confirmButtonColor: "#2D7F55",
                });
                //setStudentgrade()
                setStudentgrade(response.data)
            })
            .catch((err) => {
                Swal.fire({
                    icon: "error",
                    text: err.response.data.error,
                    confirmButtonColor: "#EF1717",
                })
            });
    }

    const columns = [
        { dataField: "stdid", text: "รหัสนักเรียน", headerStyle: { backgroundColor: "#25383C", color: "white", textAlign: "center", fontWeight: "300" }, align: "center" },
        { dataField: "no", text: "เลขที่", headerStyle: { backgroundColor: "#25383C", color: "white", textAlign: "center", fontWeight: "300", width: '80px', }, align: "center" },
        { dataField: "f_name", text: "ชื่อ", headerStyle: { backgroundColor: "#25383C", color: "white", textAlign: "center", fontWeight: "300" }, align: "center" },
        { dataField: "l_name", text: "นามสกุล", headerStyle: { backgroundColor: "#25383C", color: "white", textAlign: "center", fontWeight: "300" }, align: "center" },
        { dataField: "grade", text: "ระดับชั้น", headerStyle: { backgroundColor: "#25383C", color: "white", textAlign: "center", fontWeight: "300" }, align: "center" },
        { dataField: "room", text: "ห้อง", headerStyle: { backgroundColor: "#25383C", color: "white", textAlign: "center", fontWeight: "300", width: '80px', }, align: "center" },


        {
            isDummyField: true,
            text: "ข้อมูลส่วนตัว",
            headerStyle: { backgroundColor: "#25383C", color: "white", textAlign: "center", fontWeight: "300" }, align: "center",
            formatter: (cell, row, rowIndex) => {
                return (
                    <a class="btn btn-success" href={`/student/${row.stdidcard}`}>ข้อมูลส่วนตัว</a>
                    //<Link to={`/studentreport/${row.stdidcard}/${row.grade}/${row.room}`}><Button variant="success">แสดง</Button></Link>
                )

            }
        },
        {
            isDummyField: true,
            text: "แก้ไข",
            headerStyle: { backgroundColor: "#25383C", color: "white", textAlign: "center", fontWeight: "300", width: '80px', }, align: "center",
            formatter: (cell, row, rowIndex) => {
                return (
                    //<a class="btn btn-warning" href={`/editstudent/${row.stdidcard}`}>แก้ไข</a>
                    <Link to={`/editstudent/${row.stdidcard}`}><Button variant="warning">แก้ไข</Button></Link>
                )

            }
        },
        {
            isDummyField: true,
            text: "ลบ",
            headerStyle: { backgroundColor: "#25383C", color: "white", textAlign: "center", fontWeight: "300", width: '80px', }, align: "center",
            formatter: (cell, row, rowIndex) => {
                return (
                    <Button variant="danger" onClick={() => Delete(row.stdidcard)}>ลบ</Button>
                    //<Link to={`/studentreport/${row.stdidcard}/${row.grade}/${row.room}`}><Button variant="success">แสดง</Button></Link>
                )

            }
        },



    ]
    const emptyDataMessage = () => { return '-ไม่พบรายชื่อนักเรียน-'; }
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
                <h4 style={{ textAlign: "center" }}>รายชื่อนักเรียนทั้งหมด</h4> <br />
                <div style={{ textAlign: "right" }}>
                    <Link to={`/kussi-Stdregister`}><Button variant="outline-dark">+ เพิ่มรายชื่อนักเรียน</Button></Link>
                    <Link to={`/excel`}><Button variant="outline-dark" style={{ marginLeft: "10px" }}>นำเข้าExcel   <RiFileExcel2Line size={20} style={{ marginTop: "-3px" }} /> </Button></Link>
                </div><br />
                <div></div>
                <BootstrapTable striped hover size="sm" noDataIndication={emptyDataMessage}
                    keyField="idcard"
                    data={studentgrade}
                    columns={columns}

                    pagination={paginationFactory(options)}
                />
            </div>
        </div>
    )
}

export default StudentcontactsComponent;