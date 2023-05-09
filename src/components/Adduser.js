import axios from "axios";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
const Adduser = () => {

    const [userdata, setUderdata] = useState({
        tidcard: '',
        username: '',
        password: '',
        nametitle: '',
        t_fname: '',
        t_lname: '',
        schoolname: '',
        schoolid: '',
        role: ''
    })

    const { tidcard, username, password, nametitle, t_fname, t_lname, schoolname, schoolid, role } = userdata

    const valueInform = data => event => {
        setUderdata({ ...userdata, [data]: event.target.value })
    }

    //console.loguserdata)

    const authtoken = localStorage.token
    const history = useNavigate();
    const sumitForm = (e) => {
        e.preventDefault();

        axios.post(`${process.env.REACT_APP_API}/register`, {
            tidcard, username, password, nametitle, t_fname, t_lname, schoolname, schoolid, role
        },
            {
                headers: {
                    authtoken,
                }
            })
            .then((response) => {
                Swal.fire({
                    icon: "success",
                    text: "บันทึกสำเร็จ",
                    confirmButtonColor: "#2D7F55",
                });
                history(`/admin`);
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
        <div className="bg-teacher shadow mb-5">
            <div className="t-data mt-4">
                <h4>เพิ่มผู้ใช้งาน</h4>
                <Form onSubmit={sumitForm}>
                    <div className="mt-5 mb-2 d-flex justify-content-center">
                        <div>
                            <table className="table ">
                                <tbody>
                                    <tr>
                                        <td align="right">รหัสบัตรประชาชน :</td>
                                        <td ><input type="text" onChange={valueInform('tidcard')} value={tidcard} style={{ backgroundColor: "white", borderRadius: "7px", padding: "3px 20px", width: "300px", backgroundColor: "#edede9" }} required /></td>
                                    </tr>
                                    <tr>
                                        <td align="right"><Form.Label style={{ paddingLeft: "20px" }} >ชื่อผู้ใช้ : </Form.Label></td>
                                        <td ><input type="text" onChange={valueInform('username')} value={username} style={{ backgroundColor: "white", borderRadius: "7px", padding: "3px 20px", width: "300px", backgroundColor: "#edede9" }} required /></td>
                                    </tr>
                                    <tr>
                                        <td align="right"><Form.Label style={{ paddingLeft: "20px" }} >รหัสผ่าน : </Form.Label></td>
                                        <td ><input type="password" onChange={valueInform('password')} value={password} style={{ backgroundColor: "white", borderRadius: "7px", padding: "3px 20px", width: "300px", backgroundColor: "#edede9", border: "1px solid gray", marginLeft: "8px" }} required /></td>
                                    </tr>
                                    <tr>
                                        <td align="right"><Form.Label style={{ paddingLeft: "20px" }} >คำนำหน้า : </Form.Label></td>
                                        <td>
                                            <select name="nametitle" onChange={valueInform('nametitle')} value={nametitle} style={{ backgroundColor: "white", borderRadius: "7px", padding: "3px 20px", width: "125px", backgroundColor: "#edede9", marginRight: "165px" }} required>

                                                <option value="นาย">นาย</option>
                                                <option value="นาง">นาง</option>
                                                <option value="นางสาว">นางสาว</option>

                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td align="right"><Form.Label style={{ paddingLeft: "20px" }} >ชื่อ : </Form.Label></td>
                                        <td ><input type="text" onChange={valueInform('t_fname')} value={t_fname} style={{ backgroundColor: "white", borderRadius: "7px", padding: "3px 20px", width: "300px", backgroundColor: "#edede9" }} required /></td>
                                    </tr>
                                    <tr>
                                        <td align="right"><Form.Label style={{ paddingLeft: "20px" }} >นามสกุล : </Form.Label></td>
                                        <td ><input type="text" onChange={valueInform('t_lname')} value={t_lname} style={{ backgroundColor: "white", borderRadius: "7px", padding: "3px 20px", width: "300px", backgroundColor: "#edede9" }} required /></td>
                                    </tr>
                                    <tr>
                                        <td align="right"><Form.Label style={{ paddingLeft: "20px" }} >โรงเรียน : </Form.Label></td>
                                        <td ><input type="text" onChange={valueInform('schoolname')} value={schoolname} style={{ backgroundColor: "white", borderRadius: "7px", padding: "3px 20px", width: "300px", backgroundColor: "#edede9" }} required /></td>
                                    </tr>
                                    <tr>
                                        <td align="right"><Form.Label style={{ paddingLeft: "20px" }} >รหัสโรงเรียน : </Form.Label></td>
                                        <td ><input type="text" onChange={valueInform('schoolid')} value={schoolid} style={{ backgroundColor: "white", borderRadius: "7px", padding: "3px 20px", width: "300px", backgroundColor: "#edede9" }} required /></td>
                                    </tr>
                                    <tr>
                                        <td align="right"><Form.Label style={{ paddingLeft: "20px" }} >บทบาท : </Form.Label></td>
                                        <td>
                                            <select name="role" onChange={valueInform('role')} value={role} style={{ backgroundColor: "white", borderRadius: "7px", padding: "3px 20px", width: "125px", backgroundColor: "#edede9", marginRight: "165px" }} required >

                                                <option value="admin">Admin</option>
                                                <option value="teacher">ครู</option>
                                            </select>
                                        </td>
                                    </tr>

                                </tbody>
                            </table>

                        </div>
                    </div>
                    <Button variant="success" type="submit">
                        บันทึก
                    </Button>
                </Form>
            </div>
        </div >
    )
}

export default Adduser;