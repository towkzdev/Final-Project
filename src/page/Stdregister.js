import { Container } from "react-bootstrap";
import Navbartop from "../components/Navbar_top";
import StdregisterComponent from "../components/StdregisterComponent";



const Stdregister = () => {
    return (
        <div>
            <Navbartop />
            <Container>
                <div style={{ marginTop: "120px" }}>
                    <h3 style={{textAlign:"center"}}>ลงทะเบียนข้อมูลนักเรียน</h3>
                </div>
                <StdregisterComponent/>
            </Container>

        </div>
    )
}

export default Stdregister; 