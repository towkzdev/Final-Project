import React from "react";
import Navbartop from "../components/Navbar_top";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./KussiComponent.css";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import axios from "axios";
import moment from "moment";
import Swal from "sweetalert2";

const KussiComponent = () => {
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
      } )
      .then((response) => {
        setContact(response.data);
      })
      .catch((err) => alert(err));
  }, [params]);
  //console.log(contact)
  const schoolid = contact.schoolid
  const age = contact.birthday;
  const birthday = moment(age).format("DD-MM-YYYY");
  const ageDifMs = Date.now() - new Date(age).getTime();
  const ageDate = new Date(ageDifMs);
  const stdage = String(Math.abs(ageDate.getUTCFullYear() - 1970));

  const birthday2 = moment(age).format("MM");
  console.log(stdage + birthday2)

  

  const std_name = contact.f_name + "   " + contact.l_name;
  //console.log(std_name);

  const stdidcard = contact.stdidcard;
  const [riskhistory, setRiskhistory] = useState("");
  const [subject, setSubject] = useState("");
  const [subject2, setSubject2] = useState("");
  const RadioInput = ({ label, value, checked, setter }) => {
    return (
      <Form.Label>
        <input
          type="radio"
          id="bg-cb"
          checked={checked === value}
          onChange={() => setter(value)}
        />
        <span>{label}</span>
      </Form.Label>
    );
  };

  //submit
  const history = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();


    const idcard = contact.stdidcard;
    const section1 = {
      tname: tname,
      subject: subject,
      tname2: tname2,
      subject2: subject2,
      school: school,
      schoolid:schoolid,
      district: district,
      province: province,
      date_now: date_now,
      schoolyear: schoolyear,
      term: term
    }
    const section2 = {
      stdidcard: idcard,
      riskhistory: riskhistory
    }
    const section3 = {
      date_now2: date_now2,
      stdage: stdage
    }
    console.table(section1)
    console.log(JSON.stringify(section1));
    axios.post(`${process.env.REACT_APP_API}/kussi/${params.idcard}`, {
      section1, section2, section3
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
        history(`/kussi-ADHD/${idcard}/${schoolyear}/${term}`)
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          text: err.response.data.error,
          confirmButtonColor: "#EF1717",
        });
      });

  };


  const [state, setState] = useState({
    date_now: "",
    date_now2: "",
    schoolyear: "",
    term: "",
    tname:"",
    tname2:"",
    school:"",
    district:"",
    province:"",
  })

  const { date_now, date_now2, schoolyear, term , tname , tname2 , school , district ,province} = state
  //กำหนดค่าให้กับstate การประกาศฟังก์ชันซ้อนฟังก์ชัน 2รูปแบบ
  //name check ค่า ชื่อในstate //eventค่าเหตุการณ์ที่เกิดขึ้น

  const inputValue = name => event => {
    //เข้าไปทำงานส่วนของstate แล้วเช็ค แอตทรีบิ้ว หรือฟิลที่เปลี่ยนไปที่อยู่ใน opject state แล้วมาเก็บค่าใน setstate
    setState({ ...state, [name]: event.target.value })
  }
  console.log(state)
  return (
    <div>
      <Navbartop /> <br />
      <Container>
        <h5 >ส่วน ก. สำหรับผู้ตอบแบบคดักรอง</h5>
        <Form className="mb-5" onSubmit={handleSubmit}>
          <Row>
            <Col md={6} sm={12}>
              <div>
                <div className="section1 shadow">
                  <h5 style={{ textAlign: "center", marginBottom: "20px", backgroundColor: "pink", }}
                  >  ส่วนที่ 1 : ข้อมูลผู้ตอบแบบคัดกรอง
                  </h5>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label> ชื่อผู้ตอบแบบคัดกรอง <input type="text" placeholder="(ชื่อผู้ตอบแบบคัดกรอง)" value={tname} onChange={inputValue("tname")}  style={{ width: "350px" }} /></Form.Label>  <br />
                    <RadioInput value="ภาษาไทย" checked={subject} setter={setSubject} />  ภาษาไทย
                    <RadioInput value="คณิตศาสตร์" checked={subject} setter={setSubject} />  คณิตศาสตร์  <br /><br />

                    <Form.Label> ชื่อผู้ตอบแบบคัดกรอง<input type="text" placeholder="(ชื่อผู้ตอบแบบคัดกรอง)" value={tname2} onChange={inputValue("tname2")} style={{ width: "350px" }} />  </Form.Label> <br />
                    <RadioInput value="ภาษาไทย" checked={subject2} setter={setSubject2} />  ภาษาไทย
                    <RadioInput value="คณิตศาสตร์" checked={subject2} setter={setSubject2} />  คณิตศาสตร์  <br /> <br />

                    <Form.Label>ชื่อโรงเรียน<input type="text" placeholder="(ชื่อโรงเรียน)" value={school} onChange={inputValue("school")} /></Form.Label><br /><br />
                    <Form.Label> อำเภอ <input type="text" placeholder="(ชื่ออำเภอ)" value={district} onChange={inputValue("district")} />
                    </Form.Label> <Form.Label>จังหวัด<input type="text" placeholder="(ชื่อจังหวัด)" value={province} onChange={inputValue("province")} />  </Form.Label> <br />  <br />
                    <Form.Label>วันที่ตอบแบบคัดกรอง<input type="date" value={date_now} onChange={inputValue("date_now")} style={{ width: "180px", padding: "2px 25px" }} /></Form.Label>  <br /><br />
                    <Form.Label>ปีการศึกษา<input type="text" value={schoolyear} onChange={inputValue("schoolyear")} style={{ width: "100px", padding: "2px 25px" }} /></Form.Label> &nbsp;
                    <Form.Label>ภาคเรียนที่<input type="text" value={term} onChange={inputValue("term")} style={{ width: "50px", padding: "2px 15px" }} /></Form.Label>
                  </Form.Group>
                </div>
              </div>
            </Col>

            <Col md={6} sm={12}>
              <div>
                <div className="section1 shadow">
                  <h5 style={{ textAlign: "center", marginBottom: "20px", backgroundColor: "pink", }}>  ส่วนที่ 2 : ข้อมูลนักเรียน
                  </h5>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label> ชื่อนักเรียน<input type="text" placeholder="(ชื่อนักเรียน)" value={std_name} readOnly />  </Form.Label>  <br />
                    <Form.Label>เกิดวันที่ <input type="text" placeholder="(ว/ด/ป)" value={birthday} readOnly />  </Form.Label> &nbsp;
                    <Form.Label> ชั้น <input type="text" placeholder="(ชั้น)" value={contact.grade} readOnly />  </Form.Label>
                    <Form.Label> ชื่อผู้ปกครอง <input type="text" placeholder="(ชื่อผู้ปกครอง)" value={contact.parent} readOnly />  </Form.Label>  <br />
                    <Form.Label>เกี่ยวข้องเป็น</Form.Label>  <input type="text" value={contact.relevant} readOnly />  <br />
                    <Form.Label> นักเรียนเคยได้รับการวินิจฉัยจากแพทย์ว่ามีภาวะผิดปกติ </Form.Label>  <br />
                    <div style={{ marginLeft: "35px" }}>
                      <RadioInput value="สมาธิสั้น" checked={riskhistory} setter={setRiskhistory} />สมาธิสั้น <br />
                      <RadioInput value="บกพร่องทางการเรียนรู้ด้านการอ่าน" checked={riskhistory} setter={setRiskhistory} /> บกพร่องทางการเรียนรู้ด้านการอ่าน    <br />
                      <RadioInput value="บกพร่องทางการเรียนรู้ด้านการเขียน" checked={riskhistory} setter={setRiskhistory} /> บกพร่องทางการเรียนรู้ด้านการเขียน    <br />
                      <RadioInput value="บกพร่องทางการเรียนรู้ด้านการคิดคำนวณ" checked={riskhistory} setter={setRiskhistory} /> บกพร่องทางการเรียนรู้ด้านการคิดคำนวณ  <br />
                    </div>
                    <RadioInput value="ไม่เคย" checked={riskhistory} setter={setRiskhistory} />  ไม่เคย  <br />
                    <RadioInput value="ไม่ทราบ" checked={riskhistory} setter={setRiskhistory} />  ไม่ทราบ  <br />  <input type="hidden" value={stdidcard} readOnly />
                  </Form.Group>
                </div>
              </div>
            </Col>
            <Col md={12}>
              <br />
              <br />
            </Col>
            <Col md={12}>
              <h5>ส่วน ข. สำหรับผู้ประเมิน</h5>
            </Col>
            <Col md={6} sm={12}>
              <div>
                <div className="section1 shadow">
                  <h5 style={{ textAlign: "center", marginBottom: "20px", backgroundColor: "pink", }}
                  >  ส่วนที่ 3 : อายุนักเรียน
                  </h5>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label> วันที่ตอบแบบคัดกรอง <input type="date" value={date_now2} onChange={inputValue("date_now2")} style={{ width: "180px", padding: "2px 25px" }} /> </Form.Label> <br /><br />
                    <Form.Label> วันเกิดของนักเรียน <input type="text" placeholder="(ว/ด/ป)" value={birthday} readOnly />  </Form.Label>  <br />  <br />
                    <Form.Label> อายุ <input type="text" placeholder="อายุ" value={stdage} readOnly />  </Form.Label>  <br />  <br />
                  </Form.Group>
                </div>
              </div>
            </Col>

            <Col md={6} sm={12}>
              <div>
                <div className="section1 shadow">
                  <h5 style={{ textAlign: "center", marginBottom: "20px", backgroundColor: "pink", }}>  ส่วนที่ 4 : เกณฑ์การแปรผลคะแนน </h5>
                  <Row style={{ padding: "20px" }}>
                    <Col sm={12}>
                      <span ><b>คะแนนที</b></span><span style={{ marginLeft: "195px" }}><b>กลุ่ม</b></span><span style={{ marginLeft: "50px" }}><b>ความหมาย</b></span>
                    </Col>
                    <Col sm={12} style={{ marginBottom: "10px" }}><span >ADHD/LD</span><span style={{ marginLeft: "20px" }}>Autism/PDDs</span></Col>
                    <Col sm={12} style={{ marginBottom: "10px" }}><span >≤ 50</span><span style={{ marginLeft: "90px" }}>≤ 60</span><span style={{ marginLeft: "88px", padding: "3px 12px", borderRadius: "5px" }}>1.</span><span style={{ marginLeft: "10px" }}>กลุ่มที่อยู่ในเกณฑ์เฉลี่ย</span></Col>
                    <Col sm={12} style={{ marginBottom: "10px" }}><span >51-60</span><span style={{ marginLeft: "75px" }}>61-70</span><span style={{ marginLeft: "85px", padding: "3px 12px", borderRadius: "5px" }}>2.</span><span style={{ marginLeft: "10px" }}>กลุ่มเฝ้าระวัง ติดตาม ทำซ้ำ</span></Col>
                    <Col sm={12} style={{ marginBottom: "10px" }}><span >61-70</span><span style={{ marginLeft: "75px" }}>71-80</span><span style={{ marginLeft: "85px", padding: "3px 12px", borderRadius: "5px" }}>3.</span><span style={{ marginLeft: "10px" }}>กลุ่มที่ที่ควรได้รับการช่วยเหลือทางการศึกษา</span></Col>
                    <Col sm={12} style={{ marginBottom: "10px" }}><span >≥ 71</span><span style={{ marginLeft: "90px" }}>≥81</span><span style={{ marginLeft: "100px", padding: "3px 12px", borderRadius: "5px" }}>4.</span><span style={{ marginLeft: "10px" }}>กลุ่มที่ควรส่งแพทย์เพื่อรับการตรวจ <span style={{ marginLeft: "285px" }}>ประเมินอย่างเร่งด่วน</span></span></Col>


                  </Row>
                </div>
              </div>
            </Col>
          </Row>
          <br />
          <div className="d-flex justify-content-center">
            <div></div>
            <div>
              <Button variant="success" className="btn2" type="submit">
                ถัดไป
              </Button>
            </div>
            <div></div>
          </div>
        </Form>
      </Container>
      {JSON.stringify(contact.section2?.grade)}
    </div>
  );
};

export default KussiComponent;
