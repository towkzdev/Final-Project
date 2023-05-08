import { Col, Button, Row, Container, Form } from 'react-bootstrap';
//import './LoginComponent.css'
import { useState } from 'react';
import axios from 'axios';
import Swal from "sweetalert2";
//import { authenticate } from '../service/authorize';
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux"

const LoginComponent = () => {

    const dispatch = useDispatch()


    const [login, setLogin] = useState({
        username: '',
        password: ''
    })
    const { username, password } = login
    const valueLogin = data => event => {
        setLogin({ ...login, [data]: event.target.value })
    }
    console.log(login)

    const history = useNavigate()
    const roleBaseRedirect = (role) => {
        if (role === 'admin') {
            history("/admin")
        } else {
            history("/contact")
        }

    }

    const Submitlogin = (e) => {
        e.preventDefault();
        console.table(login)
        //console.log(process.env.REACT_APP_API)
        axios.post(`${process.env.REACT_APP_API}/login`, {
            username, password
        })
            .then((res) => {
                Swal.fire({
                    icon: "success",
                    text: "เข้าสู่ระบบสำเร็จ",
                    confirmButtonColor: "#2D7F55",
                });
                // authenticate(res,()=>history("/contact"))
                dispatch({
                    type: 'LOGIN',
                    payload: {
                        token: res.data.token,
                        username: res.data.payload.user.username,
                        role: res.data.payload.user.role,
                        fname: res.data.payload.user.fname,
                        tname: res.data.payload.user.lname,
                        schoolid: res.data.payload.user.schoolid
                    },
                })
                console.log(res.data)
                localStorage.setItem('token', res.data.token)
                localStorage.setItem('username', res.data.payload.user.username)
                localStorage.setItem('fname', res.data.payload.user.fname)
                localStorage.setItem('lname', res.data.payload.user.lname)
                localStorage.setItem('schoolid', res.data.payload.user.schoolid)
                roleBaseRedirect(res.data.payload.user.role)

            })
            .catch((err) => {
                Swal.fire({
                    icon: "error",
                    text: "ชื่อผู้ใช้หรือรหัสผ่านผิด",
                    confirmButtonColor: "#EF1717",
                });
                console.log(err)
                // console.log(`${process.env.REACT_APP_API}/login`)

            });
    }

    return (
        <div >

            <Container>
                <Row className=" d-flex justify-content-center">
                    <Col md={12} lg={7} xs={12}>
                        <div >
                            <div className="mb-3 ">
                                <div className="mb-3 " >
                                    <Form onSubmit={Submitlogin}>
                                        <Form.Group className="mb-3" >
                                            <label htmlFor='text' style={{ textAlign: 'end' }}>ชื่อผู้ใช้</label>
                                            <Form.Control type="text" placeholder="กรอกชื่อผู้ใช้" value={username} onChange={valueLogin("username")} style={{ backgroundColor: '#224957', color: 'white', borderRadius: "5px", marginTop: "10px" }} />
                                        </Form.Group>
                                        <Form.Group className="mb-3" >
                                            <label htmlFor='password' style={{ textAlign: 'end' }}>รหัสผ่าน</label><br />
                                            <Form.Control type="password" placeholder="กรอกรหัสผ่าน" value={password} onChange={valueLogin("password")} style={{ backgroundColor: '#224957', color: 'white', borderRadius: "5px", marginTop: "10px", marginLeft: "9px", paddingLeft: "25px" }} />
                                        </Form.Group>


                                        <div className="d-flex justify-content-center">
                                            <Button variant="success" type="submit" style={{ marginTop: '10px' }}>
                                                เข้าสู่ระบบ
                                            </Button>
                                        </div>
                                    </Form>

                                </div>
                            </div>

                        </div>
                    </Col>
                </Row>
            </Container>


        </div>
    )
}

export default LoginComponent;