import { Container } from "react-bootstrap";
import EditstudentdataComponent from "../components/EditstudentdataComponent";
import Navbartop from "../components/Navbar_top";

const Editstudentdata = () => {

    return (
        <div>
            <Navbartop />
            <Container>
                <EditstudentdataComponent />
            </Container>

        </div>

    )
}
export default Editstudentdata;