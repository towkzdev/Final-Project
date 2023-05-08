import Contact from '../components/Contact';
import Navbartop from '../components/Navbar_top';
import { Container } from "react-bootstrap";


const ContactStudent = () => {
    return (
        <div>
            <Navbartop />
            <Container>
                <Contact />
            </Container>
        </div>
    )
}

export default ContactStudent;