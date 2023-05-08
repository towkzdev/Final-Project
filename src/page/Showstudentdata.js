
import { Container } from "react-bootstrap";
import Navbartop from "../components/Navbar_top";
import ShowstudentdataComponent from "../components/ShowstudentdataComponent";


const Showstudentdata = () => {

    return (
        <div>
             <Navbartop/>
            <Container>
                <ShowstudentdataComponent />
            </Container>


        </div>
    )
}
export default Showstudentdata