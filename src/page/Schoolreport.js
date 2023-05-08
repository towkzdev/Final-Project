import { Container } from "react-bootstrap";
import Navbartop from "../components/Navbar_top";
import SchoolreportComponent from "../components/SchoolreportComponent";

const Schoolreport = () => {
    return (
        <div>
            <Navbartop />
            <Container>
                <div style={{ marginTop: "120px" }}>
                    <SchoolreportComponent />
                </div>
            </Container>
        </div>
    )
}
export default Schoolreport;