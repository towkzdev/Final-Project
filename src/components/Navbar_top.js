import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav, Dropdown } from 'react-bootstrap';
import { HiOutlineClipboardList, HiUserCircle } from "react-icons/hi";
import { FaChartPie } from "react-icons/fa";
import brain from "../images/brain5.png"
import { Link } from "react-router-dom";
import "./Navbar_top.css"
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux"


function Navbartop() {
    const history = useNavigate()
    const dispatch = useDispatch()
    const logout = () => {
        dispatch({
            type: "LOGOUT",
            payload: null

        })
        history("/")
    }

    const fname = localStorage.fname
    //console.log("fname" , fname)
    const lname = localStorage.lname
    //console.log("lname" , lname)
    const username = localStorage.username
    const schoolid = localStorage.schoolid
   // console.log(username)
    const teacherdata = (username) => {

        history(`/teacherdata/${username}`)
    }


    return (

        <>
            <Navbar bg="success" expand="md" variant="dark" className="d-flex justify-content-between shadow" fixed="top">
                <Container >
                    <div>

                        <Navbar.Brand >
                            <Link to={"/contact"} >
                                <span style={{ fontSize: '20px', fontFamily: "inter" }}><img src={brain} alt="brain" style={{ width: "270px" }} /> </span>
                            </Link>
                        </Navbar.Brand>

                    </div>

                    <div className="justify-content-end ">
                        <Nav className="me-auto" style={{ color: 'white' }}>
                            <Nav.Link style={{ marginRight: '60px' }} ><Link to={"/studentcontacts"}><HiOutlineClipboardList size={23} style={{ marginRight: '5px' }} />รายชื่อนักเรียน</Link></Nav.Link>
                            <Nav.Link style={{ marginRight: '60px' }}><Link to={`/schoolreport/${schoolid}`}><FaChartPie size={20} style={{ marginRight: '7px' }} />Dashboard</Link></Nav.Link>

                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    <HiUserCircle size={27} style={{ marginRight: '5px' }} /><span style={{ marginRight: '10px' }}>{fname} {lname} </span>
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item onClick={() => teacherdata(username)}>ข้อมูลส่วนตัว</Dropdown.Item>
                                    <Dropdown.Item onClick={logout}>ออกจากระบบ</Dropdown.Item>

                                </Dropdown.Menu>
                            </Dropdown>
                        </Nav>



                    </div>
                </Container>
            </Navbar>

        </>
    )
}
export default Navbartop;