import { Container } from "react-bootstrap";
import Navbartop from "../components/Navbar_top";
import StudentcontactsComponent from "../components/StudentcontactsComponent";


const Studentcontacts = () => {

    return (
        <div>
            <Navbartop />
            <Container>
                <StudentcontactsComponent />
            </Container>


        </div>
    )
}

export default Studentcontacts;