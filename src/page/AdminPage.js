import { Container } from "react-bootstrap"
import Navbartop2 from "../components/Navbar_top2"
import Adduser from "../components/Adduser"

const AdminPag = () => {
    return (
        <div>
            <Navbartop2 />
            <Container>
                <Adduser />
            </Container>
        </div>
    )
}

export default AdminPag 