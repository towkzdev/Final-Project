import React from "react";
import "./KussiscoreComponent.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import moment from "moment";
import Swal from "sweetalert2";

const KussiscoreComponent = () => {
  const [contact, setContact] = useState("");
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
      },
      )
      .catch((err) => alert(err));
  }, [params]);

  const [adhddata, setAdhddata] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API}/kussi-AAHD/${params.idcard}/${params.schoolyear}/${params.term}`,
      {
        headers: {
          authtoken,
        }
      })
      .then((response) => {
        setAdhddata(response.data);
      })
      .catch((err) => alert(err));
  }, [params]);

console.log(adhddata)

  const [infomation, setInfomation] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API}/kussi/${params.idcard}`,
      {
        headers: {
          authtoken,
        }
      })
      .then((response) => {
        setInfomation(response.data);
      })
      .catch((err) => alert(err));
  }, [params]);

  const adhdscore1 = adhddata.score;
  console.log(adhdscore1);

  const json = JSON.stringify(adhddata, null, 4);
  console.log(json);

  const [state, setState] = useState({
    comment: "",
  })
  const { comment } = state

  //กำหนดค่าให้กับstate การประกาศฟังก์ชันซ้อนฟังก์ชัน 2รูปแบบ
  //name check ค่า ชื่อในstate //eventค่าเหตุการณ์ที่เกิดขึ้น

  const inputValue = name => event => {
    //เข้าไปทำงานส่วนของstate แล้วเช็ค แอตทรีบิ้ว หรือฟิลที่เปลี่ยนไปที่อยู่ใน opject state แล้วมาเก็บค่าใน setstate
    setState({ ...state, [name]: event.target.value })
  }
  console.log(state)


  const authtoken = localStorage.token
  const history = useNavigate();
  const stdidcard = contact.stdidcard;
  const submitComment = (e) => {
    e.preventDefault();
    const schoolyear = adhddata.schoolyear
    const term = adhddata.term
    axios.put(`${process.env.REACT_APP_API}/kussi-AAHD/${params.idcard}/${params.schoolyear}/${params.term}`, {
      comment
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
        history(`/kussi-Score/${stdidcard}/${schoolyear}/${term}`);
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          text: err.response.data.error,
          confirmButtonColor: "#EF1717",
        });
      });
  }

  const birthday = moment(contact.birthday).format("DD-MM-YYYY");
  const datesubmit = moment(infomation.section3?.date_now2).format("DD-MM-YYYY");
  return (
    <Container>
      <Row style={{ backgroundColor: "whitesmoke", padding: "0px 35px 40px 35px", borderRadius: "20px" }}>
        <Col md={5} sm={12}>
          <div className="info-bg shadow">
            <div style={{ padding: "20px" }}>
              <h5 style={{ textAlign: "center" }}>ข้อมูลนักเรียน</h5>
              <Form.Label ><b>รหัสบัตรประชาชน : </b><span style={{ textDecoration: "underline", textDecorationStyle: "dotted", }}>
                {contact.stdidcard}
              </span>
              </Form.Label>
              <br />
              <Form.Label ><b>ชื่อนักเรียน : </b><span style={{ textDecoration: "underline", textDecorationStyle: "dotted", }}>
                {contact.sex === "ชาย" ? "เด็กชาย" : "เด็กหญิง"} &nbsp;&nbsp;{contact.f_name} &nbsp;&nbsp; {contact.l_name}
              </span>
              </Form.Label>
              <br />
              <Form.Label ><b>ระดับชั้น : </b><span style={{ textDecoration: "underline", textDecorationStyle: "dotted", }}>
                {contact.grade}
              </span>
              </Form.Label>
              <br />
              <Form.Label ><b>วันเกิด : </b><span style={{ textDecoration: "underline", textDecorationStyle: "dotted", }}>
                {birthday}
              </span>
              </Form.Label>
              <br />
              <Form.Label ><b>อายุ : </b><span style={{ textDecoration: "underline", textDecorationStyle: "dotted", }}>
                {infomation.section3?.stdage} ปี
              </span>
              </Form.Label>
              <br />
              <Form.Label ><b>ชื่อผู้ตอบแบบคัดกรอง : </b><span style={{ textDecoration: "underline", textDecorationStyle: "dotted", }}>
                {infomation.section1?.tname}
              </span>
              </Form.Label>
              <br />
              <Form.Label ><b>วิชาที่สอน : </b><span style={{ textDecoration: "underline", textDecorationStyle: "dotted", }}>
                {infomation.section1?.subject}
              </span>
              </Form.Label>
              <br />
              <Form.Label ><b>วันที่ : </b><span style={{ textDecoration: "underline", textDecorationStyle: "dotted", }}>
                {datesubmit}
              </span>
              </Form.Label>

            </div>
            <br />
          </div>

        </Col>
        <Col md={7} sm={12}>
          <div className="info-bg shadow" style={{ paddingBottom: "45px" }}>
            <h5 style={{ textAlign: "center", paddingTop: "20px" }}>เกณฑ์การแปรผลคะแนน</h5>
            <Row style={{ padding: "20px" }}>
              <Col sm={12}>
                <span ><b>คะแนนที</b></span><span style={{ marginLeft: "195px" }}><b>กลุ่ม</b></span><span style={{ marginLeft: "50px" }}><b>ความหมาย</b></span>
              </Col>
              <Col sm={12} style={{ marginBottom: "10px" }}><span >ADHD/LD</span><span style={{ marginLeft: "20px" }}>Autism/PDDs</span></Col>
              <Col sm={12} style={{ marginBottom: "10px" }}><span >≤ 50</span><span style={{ marginLeft: "90px" }}>≤ 60</span><span style={{ marginLeft: "88px", backgroundColor: "#7EC19C", padding: "3px 12px", borderRadius: "5px" }}>1.</span><span style={{ marginLeft: "10px" }}>กลุ่มที่อยู่ในเกณฑ์เฉลี่ย</span></Col>
              <Col sm={12} style={{ marginBottom: "10px" }}><span >51-60</span><span style={{ marginLeft: "75px" }}>61-70</span><span style={{ marginLeft: "85px", backgroundColor: "#7EC19C", padding: "3px 12px", borderRadius: "5px" }}>2.</span><span style={{ marginLeft: "10px" }}>กลุ่มเฝ้าระวัง ติดตาม ทำซ้ำ</span></Col>
              <Col sm={12} style={{ marginBottom: "10px" }}><span >61-70</span><span style={{ marginLeft: "75px" }}>71-80</span><span style={{ marginLeft: "85px", backgroundColor: "#7EC19C", padding: "3px 12px", borderRadius: "5px" }}>3.</span><span style={{ marginLeft: "10px" }}>กลุ่มที่ที่ควรได้รับการช่วยเหลือทางการศึกษา</span></Col>
              <Col sm={12} style={{ marginBottom: "10px" }}><span >≥ 71</span><span style={{ marginLeft: "90px" }}>≥81</span><span style={{ marginLeft: "100px", backgroundColor: "#7EC19C", padding: "3px 12px", borderRadius: "5px" }}>4.</span><span style={{ marginLeft: "10px" }}>กลุ่มที่ควรส่งแพทย์เพื่อรับการตรวจประเมินอย่างเร่งด่วน</span></Col>

            </Row>
            <br />
          </div>
        </Col>
        <Col md={6} sm={12}>
          <Row>
            <Col md={3}>
              <div className="info-bg">
                <div style={{ padding: "35px" }}>ผลสรุป</div>
              </div>
            </Col>
            <Col md={9}>
              <Row>
                <Col md={12}>
                  <div className="info-bg"> <div style={{ margin: "5px", padding: "10px", textAlign: "center", borderRadius: "10px", }}>   ADHD </div>
                  </div>
                </Col>
                <Col md={4}>
                  <div> <div style={{ padding: "10px", backgroundColor: "#BBDAC9", borderRadius: "10px", textAlign: "center", }}>   ซน/วู่วาม </div>
                  </div>
                </Col>
                <Col md={4}>
                  <div> <div style={{ padding: "10px", backgroundColor: "#BBDAC9", borderRadius: "10px", textAlign: "center", }} >   ขาดสมาธิ </div>
                  </div>
                </Col>
                <Col md={4}>
                  <div> <div style={{ padding: "10px", backgroundColor: "#BBDAC9", borderRadius: "10px", textAlign: "center", }} >   รวม </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col md={6} sm={12}>
          <Row>
            <Col md={9}>
              <Row>
                <Col md={12}>
                  <div className="info-bg"> <div style={{ margin: "5px", padding: "10px", textAlign: "center", borderRadius: "10px", }} >   LD </div>
                  </div>
                </Col>
                <Col md={4}>
                  <div> <div style={{ padding: "10px", backgroundColor: "#BBDAC9", borderRadius: "10px", textAlign: "center", }} >   การอ่าน </div>
                  </div>
                </Col>
                <Col md={4}>
                  <div> <div style={{ padding: "10px", backgroundColor: "#BBDAC9", borderRadius: "10px", textAlign: "center", }} >   การเขียน </div>
                  </div>
                </Col>
                <Col md={4}>
                  <div> <div style={{ padding: "10px", backgroundColor: "#BBDAC9", borderRadius: "10px", textAlign: "center", }} >   การคิดคำนวณ </div>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col md={3}>
              <Row>
                <Col md={12}>
                  <div className="info-bg">
                    <div style={{ padding: "10px" }}>Autism/PPDs</div>
                  </div>
                </Col>
                <Col md={12}>
                  <div style={{ marginTop: "2px", padding: "10px", backgroundColor: "#BBDAC9", borderRadius: "10px", textAlign: "center", }} >   รวม </div>
                </Col>
              </Row>

            </Col>
          </Row>
        </Col>

        <Col md={6} style={{ marginTop: "3px" }}>
          <Row>
            <Col md={3}>
              <div>
                <div style={{ padding: "10px", backgroundColor: "#BBDAC9", borderRadius: "10px", textAlign: "center", }}>
                  คะแนนดิบ
                </div>
              </div>
            </Col>
            <Col md={3}>
              <div>
                <div style={{ padding: "10px", backgroundColor: "#BBDAC9", borderRadius: "10px", textAlign: "center", }}>
                  {adhddata.adhd1_dscore}
                </div>
              </div>
            </Col>
            <Col md={3}>
              <div>
                <div style={{ padding: "10px", backgroundColor: "#BBDAC9", borderRadius: "10px", textAlign: "center", }}>
                  {adhddata.adhd2_dscore}
                </div>
              </div>
            </Col>
            <Col md={3}>
              <div>
                <div style={{ padding: "10px", backgroundColor: "#BBDAC9", borderRadius: "10px", textAlign: "center", }} >
                  {adhddata.sumadhd_dscore}
                </div>
              </div>
            </Col>
          </Row>
        </Col>
        <Col md={6} style={{ marginTop: "3px" }}>
          <Row>
            <Col md={3}>
              <div>
                <div style={{ padding: "10px", backgroundColor: "#BBDAC9", borderRadius: "10px", textAlign: "center", }}>
                  {adhddata.ldr_dscore}
                </div>
              </div>
            </Col>
            <Col md={3}>
              <div>
                <div style={{ padding: "10px", backgroundColor: "#BBDAC9", borderRadius: "10px", textAlign: "center", }}>
                  {adhddata.ldw_dscore}
                </div>
              </div>
            </Col>
            <Col md={3}>
              <div>
                <div style={{ padding: "10px", backgroundColor: "#BBDAC9", borderRadius: "10px", textAlign: "center", }}>
                  {adhddata.ldm_dscore}
                </div>
              </div>
            </Col>
            <Col md={3}>
              <div>
                <div style={{ padding: "10px", backgroundColor: "#BBDAC9", borderRadius: "10px", textAlign: "center", }}>
                  {adhddata.autism_dscore}
                </div>
              </div>
            </Col>
          </Row>
        </Col>

        <Col md={6} style={{ marginTop: "3px" }}>
          <Row>
            <Col md={3}>
              <div>
                <div style={{ padding: "10px", backgroundColor: "#BBDAC9", borderRadius: "10px", textAlign: "center", }}>
                  คะแนนที
                </div>
              </div>
            </Col>
            <Col md={3}>
              <div>
                <div style={{ padding: "10px", backgroundColor: "#BBDAC9", borderRadius: "10px", textAlign: "center", }}>
                  {adhddata.adhd1_tscore}
                </div>
              </div>
            </Col>
            <Col md={3}>
              <div>
                <div style={{ padding: "10px", backgroundColor: "#BBDAC9", borderRadius: "10px", textAlign: "center", }}>
                  {adhddata.adhd2_tscore}
                </div>
              </div>
            </Col>
            <Col md={3}>
              <div>
                <div style={{ padding: "10px", backgroundColor: "#BBDAC9", borderRadius: "10px", textAlign: "center", }} >
                  {adhddata.sumadhd_tscore}
                </div>
              </div>
            </Col>
          </Row>
        </Col>

        <Col md={6} style={{ marginTop: "3px" }}>
          <Row>
            <Col md={3}>
              <div>
                <div style={{ padding: "10px", backgroundColor: "#BBDAC9", borderRadius: "10px", textAlign: "center", }} >
                  {adhddata.ldr_tscore}
                </div>
              </div>
            </Col>
            <Col md={3}>
              <div>
                <div style={{ padding: "10px", backgroundColor: "#BBDAC9", borderRadius: "10px", textAlign: "center", }}>
                  {adhddata.ldw_tscore}
                </div>
              </div>
            </Col>
            <Col md={3}>
              <div>
                <div style={{ padding: "10px", backgroundColor: "#BBDAC9", borderRadius: "10px", textAlign: "center", }}>
                  {adhddata.ldm_tscore}
                </div>
              </div>
            </Col>
            <Col md={3}>
              <div>
                <div style={{ padding: "10px", backgroundColor: "#BBDAC9", borderRadius: "10px", textAlign: "center", }}>
                  {adhddata.autism_tscore}
                </div>
              </div>
            </Col>
          </Row>
        </Col>


        <Col md={6} style={{ marginTop: "3px" }}>
          <Row>
            <Col md={3}>
              <div>
                <div style={{ padding: "10px", backgroundColor: "#BBDAC9", borderRadius: "10px", textAlign: "center", }}>
                  กลุ่ม
                </div>
              </div>
            </Col>
            <Col md={3}>
              <div>
                <div style={{ padding: "10px", backgroundColor: "#BBDAC9", borderRadius: "10px", textAlign: "center", }}>
                  {adhddata.adhd1_group}
                </div>
              </div>
            </Col>
            <Col md={3}>
              <div>
                <div style={{ padding: "10px", backgroundColor: "#BBDAC9", borderRadius: "10px", textAlign: "center", }} >
                  {adhddata.adhd2_group}
                </div>
              </div>
            </Col>
            <Col md={3}>
              <div>
                <div style={{ padding: "10px", backgroundColor: "#BBDAC9", borderRadius: "10px", textAlign: "center", }}>
                  {adhddata.sumadhd_group}
                </div>
              </div>
            </Col>
          </Row>
        </Col>

        <Col md={6} style={{ marginTop: "3px" }}>
          <Row>
            <Col md={3}>
              <div>
                <div style={{ padding: "10px", backgroundColor: "#BBDAC9", borderRadius: "10px", textAlign: "center", }}>
                  {adhddata.ldr_group}
                </div>
              </div>
            </Col>
            <Col md={3}>
              <div>
                <div style={{ padding: "10px", backgroundColor: "#BBDAC9", borderRadius: "10px", textAlign: "center", }}>
                  {adhddata.ldw_group}
                </div>
              </div>
            </Col>
            <Col md={3}>
              <div>
                <div style={{ padding: "10px", backgroundColor: "#BBDAC9", borderRadius: "10px", textAlign: "center", }}>
                  {adhddata.ldm_group}
                </div>
              </div>
            </Col>
            <Col md={3}>
              <div>
                <div style={{ padding: "10px", backgroundColor: "#BBDAC9", borderRadius: "10px", textAlign: "center", }}>
                  {adhddata.autism_group}
                </div>
              </div>
            </Col>
          </Row>
        </Col>
        <Form onSubmit={submitComment}>
          <Form.Group className="mb-2 mt-4" controlId="exampleForm.ControlTextarea1" >
            <Form.Label><h5>ข้อเสนอแนะ เพื่อการช่วยเหลือ :</h5></Form.Label>
            <Form.Control as="textarea" rows={4} style={{ backgroundColor: "#BBDAC9", outline: "none" }} value={comment} onChange={inputValue("comment")} />
            <div className="d-flex justify-content-center mt-3">
              <Button variant="success" type="submit" >
                {"บันทึก"}
              </Button>
            </div>
          </Form.Group>
        </Form>
      </Row>
      <br />

    </Container>

  );
};

export default KussiscoreComponent;
