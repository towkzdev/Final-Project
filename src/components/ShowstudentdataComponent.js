import axios from "axios";
import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import moment from "moment";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ShowstudentdataComponent = () => {
    const authtoken = localStorage.token
    const [studentdata, setStudentdata] = useState("");
    const params = useParams()
    console.log(params.idcard)
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API}/studentdata/${params.idcard}`,
            {
                headers: {
                    authtoken,
                }
            })
            .then((response) => {
                setStudentdata(response.data)
            })
            .catch((err) => alert(err));
    }, [params])

    console.log(studentdata)

    const datestd = moment(studentdata.birthday).format("YYYY-MM-DD");
    console.log(datestd)
    //search
    const history = useNavigate();
    const Delete = (stdidcard) => {
        console.log(stdidcard)
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
                history(`/studentcontacts`);
            })
            .catch((err) => {
                Swal.fire({
                    icon: "error",
                    text: err.response.data.error,
                    confirmButtonColor: "#EF1717",
                })
            });
    }
    console.log(studentdata.stdidcard)
    return (
        <div style={{ marginTop: "110px" }}>
            <div className="d-flex justify-content-center">
                <h4>ข้อมูลส่วนตัวนักเรียน</h4>
            </div>

            <Form>
                <div className="input-1">
                    <div className="input-1bg">
                        <Row>
                            <Col sm={4}>
                                <Form.Label>เลขประจำตัวประชาชน</Form.Label>
                            </Col>
                            <Col sm={1}>
                                <Form.Label>คำนำหน้า</Form.Label>
                            </Col>
                            <Col sm={3}>
                                <Form.Label>ชื่อ</Form.Label>
                            </Col>
                            <Col sm={3}>
                                <Form.Label>นามสกุล</Form.Label>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={4}>
                                <input type="text" placeholder="เลขบัตรประชาชน" style={{ width: "400px" }} value={studentdata.stdidcard} readOnly />
                            </Col>
                            <Col sm={1}>
                                <select name="sex" style={{ borderRadius: "10px", width: "85px" }} value={studentdata.sex} readOnly>
                                    <option value="อื่นๆ"></option>
                                    <option value="ชาย">เด็กชาย</option>
                                    <option value="หญิง">เด็กหญิง</option>

                                </select>
                            </Col>
                            <Col sm={3}>
                                <input type="text" placeholder="ชื่อจริง" style={{ width: "270px" }} value={studentdata.f_name} readOnly />
                            </Col>
                            <Col sm={3}>
                                <input type="text" placeholder="นามสกุล" style={{ width: "270px" }} value={studentdata.l_name} readOnly />
                            </Col>
                        </Row>
                        <br />
                        <Row>
                            <Col sm={2}>
                                <Form.Label>วันเกิด</Form.Label>
                            </Col>
                            <Col sm={3}>
                                <Form.Label>สัญชาติ</Form.Label>
                            </Col>
                            <Col sm={3}>
                                <Form.Label>เชื้อชาติ</Form.Label>
                            </Col>
                            <Col sm={3}>
                                <Form.Label>ศาสนา</Form.Label>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={2}>
                                <input type="date" value={datestd} readOnly />
                            </Col>
                            <Col sm={3}>
                                <input type="text" placeholder="สัญชาติ" style={{ width: "270px" }} value={studentdata.ethnicity} readOnly />
                            </Col>
                            <Col sm={3}>
                                <input type="text" placeholder="เชื้อชาติ" style={{ width: "270px" }} value={studentdata.nationality} readOnly />
                            </Col>
                            <Col sm={3}>
                                <input type="text" placeholder="ศาสนา" style={{ width: "270px" }} value={studentdata.religion} readOnly />
                            </Col>
                        </Row>
                        <br />
                        <Row>
                            <Col sm={4}>
                                <Form.Label>ชื่อผู้ปกครอง</Form.Label>
                            </Col>
                            <Col sm={6}>
                                <Form.Label>เกี่ยวข้องเป็น</Form.Label>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={4}>
                                <input type="text" placeholder="ชื่อผู้ปกครอง" style={{ width: "400px" }} value={studentdata.parent} readOnly />
                            </Col>
                            <Col sm={6}>
                                <select name="relevant" style={{ borderRadius: "10px", width: "150px", marginLeft: "10px", paddingLeft: "25px", paddingRight: "25px" }} value={studentdata.relevant} readOnly >
                                    <option value="อื่นๆ"></option>
                                    <option value="บิดา">บิดา</option>
                                    <option value="มารดา">มารดา</option>
                                </select>
                            </Col>
                        </Row>
                    </div>

                    <div className="input-1bg">
                        <Row>
                            <Col sm={5}>
                                <Form.Label>เลขประจำตัวนักเรียน</Form.Label>
                            </Col>
                            <Col sm={7}>
                                <Form.Label>ภาคเรียน</Form.Label>
                            </Col>

                        </Row>
                        <Row>
                            <Col sm={5}>
                                <input type="text" placeholder="เลขประจำตัวนักเรียน" style={{ width: "400px" }} value={studentdata.stdid} readOnly />
                            </Col>
                            <Col sm={2}>
                                <div >
                                    <input type="number" value={studentdata.term} style={{ width: "50px", textAlign: "center" }} readOnly />

                                </div>
                            </Col>

                        </Row>
                        <br />
                        <Row>
                            <Col sm={5}>
                                <Form.Label>ระดับชั้น</Form.Label>
                            </Col>
                            <Col sm={3}>
                                <Form.Label>ห้อง</Form.Label>
                            </Col>
                            <Col sm={4}>
                                <Form.Label>เลขที่</Form.Label>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={5}>
                                <select name="grade" style={{ borderRadius: "10px", width: "400px", marginLeft: "10px", paddingLeft: "25px", paddingRight: "25px" }} value={studentdata.grade} readOnly>
                                    <option value="-"></option>
                                    <option value="ชั้นประถมศึกษาปีที่1">ชั้นประถมศึกษาปีที่1</option>
                                    <option value="ชั้นประถมศึกษาปีที่2">ชั้นประถมศึกษาปีที่2</option>
                                    <option value="ชั้นประถมศึกษาปีที่3">ชั้นประถมศึกษาปีที่3</option>
                                    <option value="ชั้นประถมศึกษาปีที่4">ชั้นประถมศึกษาปีที่4</option>
                                    <option value="ชั้นประถมศึกษาปีที่5">ชั้นประถมศึกษาปีที่5</option>
                                    <option value="ชั้นประถมศึกษาปีที่6">ชั้นประถมศึกษาปีที่6</option>
                                </select>
                            </Col>
                            <Col sm={3}>
                                <input type="text" placeholder="ห้อง" style={{ width: "270px" }} value={studentdata.room} readOnly />
                            </Col>
                            <Col sm={4}>
                                <input type="text" placeholder="เลขที่" style={{ width: "270px" }} value={studentdata.no} readOnly />
                            </Col>

                        </Row>
                    </div>


                    <div className="input-1bg">
                        <h5>รหัสโรงเรียน</h5>
                        <Row>
                            <Col sm={6}>
                                <Form.Label style={{ paddingLeft: "45px" }}>รหัสโรงเรียน : <input type="text" placeholder="รหัสโรงเรียน" style={{ width: "400px" }} value={studentdata.schoolid} readOnly /></Form.Label>
                            </Col>
                        </Row>
                        <br />
                        <h5>ชื่อโรงเรียน</h5>
                        <Row>
                            <table className="table table-borderless">
                                <tbody>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td align="right"><Form.Label style={{ paddingLeft: "20px" }} >ภาษาไทย :</Form.Label></td>
                                        <td><input type="text" placeholder="ภาษาไทย" style={{ width: "400px" }} value={studentdata.thainame} readOnly /></td>
                                        <td align="right">ภาษอังกฤษ :</td>
                                        <td ><input type="text" placeholder="ภาษอังกฤษ" style={{ width: "400px", marginRight: "20px" }} value={studentdata.engname} readOnly /></td>
                                    </tr>
                                </tbody>
                            </table>
                        </Row>
                        <br />
                        <h5>สถานที่ตั้ง</h5>
                        <Row>
                            <table className="table table-borderless">
                                <tbody>
                                    <tr>
                                        <td align="right"><Form.Label style={{ paddingLeft: "20px" }} >ที่อยู่ :</Form.Label></td>
                                        <td><input type="text" placeholder="99/99" style={{ width: "400px" }} value={studentdata.address} readOnly /></td>
                                        <td align="right">จังหวัด :</td>
                                        <td>
                                            <input type="text" style={{ width: "400px" }} value={studentdata.province} readOnly />

                                        </td>
                                    </tr>
                                    <tr>
                                        <td align="right">อำเภอ :</td>
                                        <td>
                                            <input type="text" style={{ width: "400px" }} value={studentdata.amphure} readOnly />

                                        </td>
                                        <td align="right"><Form.Label style={{ paddingLeft: "20px" }} >ตำบล :</Form.Label></td>
                                        <td>
                                            <input type="text" style={{ width: "400px" }} value={studentdata.district} readOnly />
                                        </td>
                                    </tr>

                                    <tr>
                                        <td align="right"><Form.Label style={{ paddingLeft: "20px" }} >รหัสไปรษณีย์ :</Form.Label></td>
                                        <td><input type="number" placeholder="รหัสไปรษณีย์" value={studentdata.zipcode} readOnly /></td>
                                        <td align="right">ภาค :</td>
                                        <td><input type="text" placeholder="ภาค" value={studentdata.geography} style={{ width: "400px" }} readOnly /></td>
                                    </tr>
                                </tbody>
                            </table>
                        </Row>
                        <br />
                    </div>
                </div>
                <div className="d-flex justify-content-center mt-2 mb-4">
                    <Link to={"/studentcontacts"}>
                        <Button variant="success" style={{ width: "90px" }}>
                            {"ย้อนกลับ"}
                        </Button>
                    </Link>
                    &nbsp;
                    <Link to={`/editstudent/${studentdata.stdidcard}`}>
                        <Button variant="warning">แก้ไขข้อมูลนักเรียน</Button>
                    </Link>
                    &nbsp;
                    <Button variant="danger" onClick={() => Delete(studentdata.stdidcard)}>ลบ</Button>

                </div>
            </Form>
        </div>
    )
}

export default ShowstudentdataComponent;