import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { Container, Button , Form } from "react-bootstrap";
import Navbartop from "../components/Navbar_top";
import { Link } from "react-router-dom";
import "./ScreenningForm.css";
import Swal from "sweetalert2";

const ScreenningForm = () => {
  const [contact, setContact] = useState("");
  const authtoken = localStorage.token
  const params = useParams();
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API}/studentdata/${params.idcard}`,
      {
        headers: {
          authtoken,
        }
      })
      .then((response) => {
        setContact(response.data);
      })
      .catch((err) => alert(err));
  }, [params]);

  //submitform
  const CheckboxInput = ({ label, value, checked, setter }) => {
    return (
      <Form.Label>
        <input
          type="checkbox"
          id="bg-cb"
          checked={checked === value}
          onChange={() => setter(value)}
        />
        <span>{label}</span>
      </Form.Label>
    );
  };
  const idcard = contact.stdidcard;
  const [risk, setRisk] = useState("");
  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(contact.idcard);
    const data = { risk, idcard };
    const json = JSON.stringify(data, null, 4);
    console.log(json);

    axios
      .post(`${process.env.REACT_APP_API}/screenning/${params.idcard}`, {
        idcard,
        risk,
      },
      {
        headers: {
          authtoken,
        }
      })
      .then((response) => {
        Swal.fire({
          icon: "success",
          text: "บันทึกสำเร็จ",
          confirmButtonColor: "#2D7F55",
        });
        if(risk === "ไม่พบปัญหาข้างต้น") {
          history("/contact");
        } else {
          history(`/kussi/${idcard}`);
     
        }
        
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          text: err.response.data.error,
          confirmButtonColor: "#EF1717",
        });
      });
  };

  return (
    <div>
      <Navbartop />
      <Container>
        <div style={{ marginTop: "120px" }}>
          <div className="ct-screen Screen shadow">
           
           

            <div className="hd-screen">
              <h1>แบบทดสอบสังเกตอาการเบื้องต้น (Red Flag)</h1>
            </div>
            <div className="ct1-screen">
              <p>
                แบบคัดกรองของ สพฐ. (บกพร่องทางสติปัญญา, บกพร่องการเรียนรู้,
                มีปัญหาทางพฤติกรรมและ อารมณ์ หรือบุคคลออทิสติก)
                หากมีความเสี่ยงในข้อใดข้อหนึ่ง หรือทั้ง 2 ข้อ
                สามารถคลิกถูกหน้าข้อ คำถามได้ แต่ หากไม่พบปัญญาให้คลิกถูกหน้า
                คำถามไม่พบปัญหาข้างต้น หลังจากนั้นคลิกเลือก บันทึก
              </p>
              <br />
              <Form onSubmit={handleSubmit}>
                <div>
                  <div>
                    <CheckboxInput
                      value="มีความเสี่ยงต่อปัญหาพฤติกรรม"
                      checked={risk}
                      setter={setRisk}
                    />
                    มีความเสี่ยง ต่อปัญหาพฤติกรรม อารมณ์ สังคม และการ
                    เรียนรู้จากการสังเกต หรือจากเครื่องมือประเมินอื่นๆ
                    <br />
                    <br />
                    <CheckboxInput
                      value="มีปัญหาพฤติกรรมเสี่ยงในวัยรุ่น"
                      checked={risk}
                      setter={setRisk}
                    />
                    มีปัญหาพฤติกรรมเสี่ยงในวัยรุ่น (เสี่ยงทางเพศ สารเสพติด
                    ติดเกม ฯลฯ หรือปัญหาเร่งด่วน อื่นๆ) <br />
                    <br />
                    <CheckboxInput
                      value="ไม่พบปัญหาข้างต้น"
                      checked={risk}
                      setter={setRisk}
                    />
                    ไม่พบปัญหาข้างต้น
                  </div>
                </div>
                <br />
                <div className="d-flex justify-content-center">
                  <div></div>
                  <div>
                    <Link to={"/contact"}>
                      <Button variant="secondary" className="btn1">
                        ยกเลิก
                      </Button>
                    </Link>
                  </div>
                  <div>
                    <Button variant="success" className="btn2" type="submit">
                      ยืนยัน
                    </Button>
                  </div>
                </div>
              </Form>
            </div>
            <br />
            <div className="bt-screen">
              <p>
                สำคัญ : การทำแบบทดสอบสามารถทำได้เพียง 1 ครั้งเท่านั้น
                ดังนั้นควรตรวจสอบให้แน่ใจ ก่อนคลิก เลือกบันทึก
                เนื่องจากจะไม่สามารถย้อนกลับมาแก้ไขผลการทดสอบได้อีก
              </p>
            </div>
            <div></div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ScreenningForm;
