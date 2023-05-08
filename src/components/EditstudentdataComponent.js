import axios from "axios";
import { useEffect, useState } from "react"
import { useParams } from "react-router";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import moment from "moment";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const EditstudentdataComponent = () => {

    //ดึงข้อมูลมาแสดง
    const authtoken = localStorage.token
    const params = useParams()
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API}/studentdata/${params.idcard}`,
        {
            headers: {
                authtoken,
            }
        })
            .then((response) => {
                console.log(response.data)
                const { stdidcard, sex, f_name, l_name, birthday, ethnicity, nationality, religion, parent, relevant, stdid, grade, room, no, term, schoolid, thainame, engname, address, district, amphure, province, zipcode, geography } = response.data
                setFormdata({ ...formdata, stdidcard, sex, f_name, l_name, birthday, ethnicity, nationality, religion, parent, relevant, stdid, grade, room, no, term })
                setSchooldata({ ...schooldata, schoolid, thainame, engname, address, district, amphure, province, zipcode, geography })

            })
            .catch((err) => alert(err));
    }, [params])



    const [provi, setProvi] = useState([]);
    const [amphure2, setAmphure2] = useState([]);
    const [tambon, setTambon] = useState([]);

    const fetchData = () => {
        axios.get(`http://localhost:5500/province`)
            .then((response) => {
                setProvi(response.data);
            })
            .catch((err) => alert(err));
    };
    useEffect(() => {
        fetchData();
    }, []);



    //console.table(provi)
    const [formdata, setFormdata] = useState({
        stdidcard: "",
        sex: "",
        f_name: "",
        l_name: "",
        birthday: "",
        ethnicity: "",
        nationality: "",
        religion: "",
        parent: "",
        relevant: "",
        term: "",
        stdid: "",
        grade: "",
        room: "",
        no: "",

    })
    const { stdidcard, sex, f_name, l_name, birthday, ethnicity, nationality, religion, parent, relevant, stdid, grade, room, no, term } = formdata

    const valueInform = data => event => {
        setFormdata({ ...formdata, [data]: event.target.value })
    }
    //console.log(formdata)

    const [schooldata, setSchooldata] = useState({
        schoolid: "",
        thainame: "",
        engname: "",
        address: "",
        province: "",
        amphure: "",
        district: "",
        zipcode: "",
        geography: ""
    })
    //console.log(schooldata)
    const { schoolid, thainame, engname, address, district, amphure, province, zipcode, geography } = schooldata
    const valueSchool = data => event => {
        setSchooldata({ ...schooldata, [data]: event.target.value })
    }

    const onChangeProvince = (e) => {

        let index = e.nativeEvent.target.selectedIndex;
        let lable = e.nativeEvent.target[index].text;
        setSchooldata({ ...schooldata, [e.target.name]: lable })

        const id2 = (Number(e.target.value))
        axios.get(`http://localhost:5500/province/${id2}/amphure`)
            .then((response) => {
                setAmphure2(response.data)
            })
            .catch((err) => {
                alert(err.response.data.error);
            });
    }

    const onChangeAmphure = (e) => {
        let index = e.nativeEvent.target.selectedIndex;
        let lable = e.nativeEvent.target[index].text;
        setSchooldata({ ...schooldata, [e.target.name]: lable })

        const id3 = (Number(e.target.value))
        axios.get(`http://localhost:5500/province/amphure/${id3}`)
            .then((response) => {
                setTambon(response.data)
            })
            .catch((err) => {
                alert(err.response.data.error);
            });
    }
    // console.log(tambon)

    const onChangeDistrict = (e) => {

        console.log(e.target.value)

        const zipDistrict = tambon.filter(item => {
            return e.target.value == item.id
        });
        //console.log(zipDistrict)

        setSchooldata({
            ...schooldata, [e.target.name]: zipDistrict[0].name_th,
            zipcode: zipDistrict[0].zip_code
        })
    }



    const history = useNavigate();
    const submitStudentdata = (e) => {
        e.preventDefault();
        //console.log(studentdata)
        //console.log(school_data)
        axios.put(`${process.env.REACT_APP_API}/updatestudent/${params.idcard}`, {
            stdidcard, sex, f_name, l_name, birthday, ethnicity, nationality, religion, parent, relevant, stdid, term, grade, room, no, schoolid, thainame, engname, address, province, amphure, district, zipcode, geography
        },
            {
                headers: {
                    authtoken,
                }
            })
            .then((response) => {
                Swal.fire({
                    title: 'ยืนยันการแก้ไข',
                    //text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#2D7F55',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'ยืนยัน',
                    cancelButtonText: 'ยกเลิก'
                }).then((result) => {
                    if (result.isConfirmed) {
                        Swal.fire({
                            icon: "success",
                            text: "บันทึกสำเร็จ",
                            confirmButtonColor: "#2D7F55",
                        })
                    }
                })
                //history(`/`);
            })
            .catch((err) => {
                Swal.fire({
                    icon: "error",
                    text: err.response.data.error,
                    confirmButtonColor: "#EF1717",
                });;
            });
    }


    return (
        <div style={{ marginTop: "110px" }}>
            <div className="d-flex justify-content-center">
                <h4>แก้ไขข้อมูลส่วนตัวนักเรียน</h4>
            </div>
            <Form onSubmit={submitStudentdata}>
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
                                <input type="text" placeholder="เลขบัตรประชาชน" style={{ width: "400px" }} value={stdidcard} onChange={valueInform("stdidcard")} />
                            </Col>
                            <Col sm={1}>
                                <select name="sex" style={{ borderRadius: "10px", width: "85px" }} value={sex} onChange={valueInform("sex")}>
                                    <option value="อื่นๆ"></option>
                                    <option value="ชาย">เด็กชาย</option>
                                    <option value="หญิง">เด็กหญิง</option>

                                </select>
                            </Col>
                            <Col sm={3}>
                                <input type="text" placeholder="ชื่อจริง" style={{ width: "270px" }} value={f_name} onChange={valueInform("f_name")} />
                            </Col>
                            <Col sm={3}>
                                <input type="text" placeholder="นามสกุล" style={{ width: "270px" }} value={l_name} onChange={valueInform("l_name")} />
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
                                <input type="date" value={moment(birthday).format("YYYY-MM-DD")} onChange={valueInform("birthday")} />
                            </Col>
                            <Col sm={3}>
                                <input type="text" placeholder="สัญชาติ" style={{ width: "270px" }} value={ethnicity} onChange={valueInform("ethnicity")} />
                            </Col>
                            <Col sm={3}>
                                <input type="text" placeholder="เชื้อชาติ" style={{ width: "270px" }} value={nationality} onChange={valueInform("nationality")} />
                            </Col>
                            <Col sm={3}>
                                <input type="text" placeholder="ศาสนา" style={{ width: "270px" }} value={religion} onChange={valueInform("religion")} />
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
                                <input type="text" placeholder="ชื่อผู้ปกครอง" style={{ width: "400px" }} value={parent} onChange={valueInform("parent")} />
                            </Col>
                            <Col sm={6}>
                                <select name="relevant" style={{ borderRadius: "10px", width: "150px", marginLeft: "10px", paddingLeft: "25px", paddingRight: "25px" }} value={relevant} onChange={valueInform("relevant")} >
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
                                <input type="text" placeholder="เลขประจำตัวนักเรียน" style={{ width: "400px" }} value={stdid} onChange={valueInform("stdid")} />
                            </Col>
                            <Col sm={2}>
                                <div >
                                    <input type="number" value={term} style={{ width: "50px", textAlign: "center" }} onChange={valueInform("term")} />
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
                                <select name="grade" style={{ borderRadius: "10px", width: "400px", marginLeft: "10px", paddingLeft: "25px", paddingRight: "25px" }} value={grade} onChange={valueInform("grade")}>
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
                                <input type="text" placeholder="ห้อง" style={{ width: "270px" }} value={room} onChange={valueInform("room")} />
                            </Col>
                            <Col sm={4}>
                                <input type="text" placeholder="เลขที่" style={{ width: "270px" }} value={no} onChange={valueInform("no")} />
                            </Col>

                        </Row>
                    </div>


                    <div className="input-1bg">
                        <h5>รหัสโรงเรียน</h5>
                        <Row>
                            <Col sm={6}>
                                <Form.Label style={{ paddingLeft: "45px" }}>รหัสโรงเรียน : <input type="text" placeholder="รหัสโรงเรียน" style={{ width: "400px" }} value={schoolid} onChange={valueSchool("schoolid")} /></Form.Label>
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
                                        <td><input type="text" placeholder="ภาษาไทย" style={{ width: "400px" }} value={thainame} onChange={valueSchool("thainame")} /></td>
                                        <td align="right">ภาษอังกฤษ :</td>
                                        <td ><input type="text" placeholder="ภาษอังกฤษ" style={{ width: "400px", marginRight: "20px" }} value={engname} onChange={valueSchool("engname")} /></td>
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
                                        <td><input type="text" placeholder="99/99" style={{ width: "400px" }} value={address} onChange={valueSchool("address")} /></td>
                                        <td align="right">จังหวัด :</td>
                                        <td>
                                            <select name="province" onChange={(e) => onChangeProvince(e)} style={{ borderRadius: "10px", width: "400px", marginLeft: "10px", paddingLeft: "15px", paddingRight: "25px" }} >
                                                <option value={province} ><span>{province}</span></option>
                                                {provi.map((item, index) =>
                                                    <option key={index} value={item.id}>{item.name_th}</option>
                                                )}
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td align="right">อำเภอ :</td>
                                        <td> <select name="amphure" onChange={(e) => onChangeAmphure(e)} style={{ borderRadius: "10px", width: "400px", marginLeft: "10px", paddingLeft: "15px", paddingRight: "25px" }}>
                                            <option value={amphure} ><span>{amphure}</span></option>
                                            {amphure2.map((item, index) =>
                                                <option key={index} value={item.id}>{item.name_th}</option>
                                            )}
                                        </select>
                                        </td>
                                        <td align="right"><Form.Label style={{ paddingLeft: "20px" }} >ตำบล :</Form.Label></td>
                                        <td>
                                            <select name="district" onChange={(e) => onChangeDistrict(e)} style={{ borderRadius: "10px", width: "400px", marginLeft: "10px", paddingLeft: "15px", paddingRight: "25px" }}>
                                                <option value={district} ><span>{district}</span></option>
                                                {tambon.map((item, index) =>
                                                    <option key={index} value={item.id}>{item.name_th}</option>
                                                )}
                                            </select>
                                            <td>

                                            </td></td>
                                    </tr>

                                    <tr>
                                        <td align="right"><Form.Label style={{ paddingLeft: "20px" }} >รหัสไปรษณีย์ :</Form.Label></td>
                                        <td><input type="number" placeholder="รหัสไปรษณีย์" value={zipcode} onChange={valueSchool("zipcode")} /></td>
                                        <td align="right">ภาค :</td>
                                        <td><input type="text" placeholder="ภาค" value={geography} onChange={valueSchool("geography")} style={{ width: "400px" }} /></td>
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
                    <Button variant="warning" type="submit" style={{ width: "90px" }}>
                        {"บันทึก"}
                    </Button>
                </div>
            </Form>

        </div>


    )
}
export default EditstudentdataComponent;