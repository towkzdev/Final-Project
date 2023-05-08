import { Container } from "react-bootstrap";
import Navbartop from "../components/Navbar_top";
import ShowreportComponent from "../components/ShowreportComponent";



const Showreport = () => {
    return (
        <div>
            <Navbartop />
            <Container>
                <div style={{ marginTop: "120px" }}>
                    <ShowreportComponent />
                </div>
            </Container>
        </div>
    )
}

export default Showreport;