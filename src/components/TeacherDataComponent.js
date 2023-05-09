import { FormLabel, Table, Form, Button, Modal } from "react-bootstrap"
import "./TeacherDataComponent.css"
import teacher1 from "../images/teacher_women.png"
import teacher2 from "../images/04.png"
import { useEffect, useState } from "react"
import axios from "axios"
import { useParams } from "react-router"
import Swal from "sweetalert2"
import { changepassworduser } from "../axiosroute"
const TeacherDataComponent = () => {
    //modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true)
    const authtoken = localStorage.token
    const token = localStorage.token
    const params = useParams();

    const [teacherdata, setTeacherdata] = useState({});
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API}/teacheruser/${params.username}`,
        {
          headers: {
            authtoken,
          }
        })
            .then((response) => {
                setTeacherdata(response.data);
            })
            .catch((err) => alert(err));
    }, [params]);

    //console.logteacherdata)


    const [changepassword, setChangepassword] = useState({
     
        password: '',
        confirmpassword: ''
    })

    //console.logchangepassword)

    const { password, confirmpassword} = changepassword
    const valuePassword = data => event => {
        setChangepassword({ ...changepassword, [data]: event.target.value })
    }

    const onSubmitpassword = (e) => {
        e.preventDefault();

        const tidcard = teacherdata.tidcard
        //console.logtidcard)
       
        const values = {
            tidcard: tidcard,
            password: password
        }
        //console.logvalues)

        if (password !== confirmpassword) {
            Swal.fire({
                icon: 'error',
                title: 'ผิดพลาด',
                text: 'รหัสผ่านไม่ตรงกัน!',
            })
        } else {
            changepassworduser(token, values.tidcard, { values })
                .then(res => {
                    Swal.fire({
                        icon: "success",
                        title: 'สำเร็จ',
                        text: "เปลี่ยนรหัสผ่านสำเร็จ",
                        confirmButtonColor: "#2D7F55",
                    });
                    handleClose()
                    //console.logres)
                })
                .catch(err => {
                    Swal.fire({
                        icon: 'error',
                        text: 'เกิดข้อผิดพลาด!',
                    })
                    //console.logerr.res.data)
                })
        }
    }


    //modal

    return (
        <div className="bg-teacher shadow mb-5">
            <div className="t-data mt-4">
                <h4>ข้อมูลส่วนตัว</h4>
                <div className="data mt-5 mb-5">
                    <div style={{ marginRight: "200px" }} >{teacherdata.nametitle === 'นาย' ? (
                        <div className="bd-img">
                            <div className="bg-img shadow"></div>
                            <img src={teacher2} className="img" style={{ width: "285px", borderRadius: "25px" }} />

                        </div>
                    ) : <div className="bd-img2">
                        <div className="bg-img2 shadow"></div>
                        <img src={teacher1} className="img2" style={{ width: "285px", marginLeft: "30px", borderRadius: "25px" }} />
                    </div>

                    }
                    </div>
                    <div>
                        <table className="table ">
                            <tbody>
                                <tr>
                                    <td align="right">รหัสบัตรประชาชน :</td>
                                    <td ><input type="text" value={teacherdata.tidcard} style={{ backgroundColor: "white", borderRadius: "7px", padding: "3px 20px", width: "300px", backgroundColor: "#edede9" }} readOnly /></td>
                                </tr>
                                <tr>
                                    <td align="right"><Form.Label style={{ paddingLeft: "20px" }} >ชื่อผู้ใช้ : </Form.Label></td>
                                    <td ><input type="text" value={teacherdata.username} style={{ backgroundColor: "white", borderRadius: "7px", padding: "3px 20px", width: "300px", backgroundColor: "#edede9" }} readOnly /></td>
                                </tr>
                                <tr>
                                    <td align="right"><Form.Label style={{ paddingLeft: "20px" }} >คำนำหน้า : </Form.Label></td>
                                    <td ><input type="text" value={teacherdata.nametitle} style={{ backgroundColor: "white", borderRadius: "7px", padding: "3px 20px", width: "300px", backgroundColor: "#edede9" }} readOnly /></td>
                                </tr>
                                <tr>
                                    <td align="right"><Form.Label style={{ paddingLeft: "20px" }} >ชื่อ : </Form.Label></td>
                                    <td ><input type="text" value={teacherdata.t_fname} style={{ backgroundColor: "white", borderRadius: "7px", padding: "3px 20px", width: "300px", backgroundColor: "#edede9" }} readOnly /></td>
                                </tr>
                                <tr>
                                    <td align="right"><Form.Label style={{ paddingLeft: "20px" }} >นามสกุล : </Form.Label></td>
                                    <td ><input type="text" value={teacherdata.t_lname} style={{ backgroundColor: "white", borderRadius: "7px", padding: "3px 20px", width: "300px", backgroundColor: "#edede9" }} readOnly /></td>
                                </tr>
                                <tr>
                                    <td align="right"><Form.Label style={{ paddingLeft: "20px" }} >โรงเรียน : </Form.Label></td>
                                    <td ><input type="text" value={teacherdata.schoolname} style={{ backgroundColor: "white", borderRadius: "7px", padding: "3px 20px", width: "300px", backgroundColor: "#edede9" }} readOnly /></td>
                                </tr>
                                <tr>
                                    <td align="right"><Form.Label style={{ paddingLeft: "20px" }} >รหัสโรงเรียน : </Form.Label></td>
                                    <td ><input type="text" value={teacherdata.schoolid} style={{ backgroundColor: "white", borderRadius: "7px", padding: "3px 20px", width: "300px", backgroundColor: "#edede9" }} readOnly /></td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-center">
                <Button variant="success">กลับหน้าหลัก</Button> &nbsp;
                <Button variant="danger" onClick={handleShow}>แก้ไขรหัสผ่าน</Button>
            </div>

            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>แก้ไขรหัสผ่าน</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={onSubmitpassword}>
                        
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>รหัสผ่านใหม่</Form.Label>
                            <Form.Control style={{ marginLeft: "0px" }} onChange={valuePassword('password')} value={password}
                                name="password" type="password" required

                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>ยืนยันรหัสผ่านอีกครั้ง</Form.Label>
                            <Form.Control style={{ marginLeft: "0px" }} onChange={valuePassword('confirmpassword')} value={confirmpassword}
                                name="confirmpassword" type="password" required

                            />
                        </Form.Group>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="success" type="submit">
                                บันทึก
                            </Button>
                        </Modal.Footer>
                    </Form>

                </Modal.Body>
            </Modal>
        </div>
    )
}
export default TeacherDataComponent