import { Container } from "react-bootstrap"
import Navbartop from "../components/Navbar_top"
import TeacherDataComponent from "../components/TeacherDataComponent"

const TeacherData = () => {
    return (
        <div>
            <Navbartop />
            <Container>
                <TeacherDataComponent />
            </Container>

        </div>
    )
}
export default TeacherData 