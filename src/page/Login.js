import LoginComponent from "../components/LoginComponent";

const Login = () => {
    return (
        <div>
            <div className="login shadow">
                <div style={{ textAlign: 'center' }}>
                    <h1>เข้าสู่ระบบ</h1>
                    <p>ระบบสารสนเทศ แบบคัดกรองนักเรียนที่มีสมาธิสั้น บกพร่องทางการเรียนรู้และออทิซึม <br />
                        ( KUS-SI Rating Scales)</p> <br />
                </div>
                <LoginComponent/>
            </div>

            <div className="ocean">
                <div className="wave"></div>

            </div>
        </div>
    )
}
export default Login;