import "./Studentdata.css"
import stdlogo from "../images/stdlogo.png"
import stdlogo2 from "../images/stdlogo2.png"
import { Form } from "react-bootstrap"
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import moment from "moment";




const Studentdata = () => {
    const authtoken = localStorage.token
    const [contactname, setContactname] = useState("");

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
                setContactname(response.data);
            })
            .catch((err) => alert(err));
    }, [params]);



    const birthday = moment(contactname.birthday).format("DD-MM-YYYY");

    const age = contactname.birthday;
    const ageDifMs = Date.now() - new Date(age).getTime();
    const ageDate = new Date(ageDifMs);
    const stdage = String(Math.abs(ageDate.getUTCFullYear() - 1970));
    return (

        <div className="student-bg d-flex justify-content-center">
            <div>
                {contactname.sex === "ชาย" ? (<img src={stdlogo} style={{width:"200px"}}/>) : <img src={stdlogo2} style={{width:"200px"}}/>}
            </div>

            <div className="student-bg2 ">
                <div style={{ padding: "15px 0px" }}>
                    <h5 style={{ textAlign: "center" }}>ข้อมูลนักเรียน</h5>

                    <Form.Label style={{ marginLeft: "20px" }}><b>รหัสบัตรประชาชน : </b><a style={{ textDecoration: "underline", textDecorationStyle: "dotted", }}>
                        {contactname.stdidcard}
                    </a>
                    </Form.Label>
                    <Form.Label style={{ marginLeft: "20px" }}><b>ชื่อนักเรียน : </b><a style={{ textDecoration: "underline", textDecorationStyle: "dotted", }}>
                        {contactname.sex == "ชาย" ? "เด็กชาย" : "เด็กหญิง"} &nbsp;&nbsp;{contactname.f_name} &nbsp;&nbsp; {contactname.l_name}
                    </a>
                    </Form.Label>  &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;

                    <br />
                    <Form.Label style={{ marginLeft: "20px" }}><b>รหัสนักเรียน : </b><a style={{ textDecoration: "underline", textDecorationStyle: "dotted", }}>
                        {contactname.stdid}
                    </a>
                    </Form.Label>
                    <Form.Label style={{ marginLeft: "20px" }}><b>ระดับชั้น : </b><a style={{ textDecoration: "underline", textDecorationStyle: "dotted", }}>
                        {contactname.grade} /  {contactname.room}
                    </a>
                    </Form.Label>
                    <Form.Label style={{ marginLeft: "20px" }}><b>เลขที่ : </b><a style={{ textDecoration: "underline", textDecorationStyle: "dotted", }}>
                        {contactname.no}
                    </a>
                    </Form.Label>

                    <Form.Label style={{ marginLeft: "20px" }}><b>วันเกิด : </b><a style={{ textDecoration: "underline", textDecorationStyle: "dotted", }}>
                        {birthday}
                    </a>
                    </Form.Label>

                    <Form.Label style={{ marginLeft: "20px" }}><b>อายุ : </b><a style={{ textDecoration: "underline", textDecorationStyle: "dotted", }}>
                        {stdage} ปี
                    </a>
                    </Form.Label>
                    <br />
                    <Form.Label style={{ marginLeft: "20px" }}><b>โรงเรียน : </b><a style={{ textDecoration: "underline", textDecorationStyle: "dotted", }}>
                        {contactname.thainame}
                    </a>
                    </Form.Label>
                </div>
            </div>
        </div>

    )
}

export default Studentdata;