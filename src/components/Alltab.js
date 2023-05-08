import "./Alltab.css"
import { Row, Col } from 'react-bootstrap';
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Chart from "chart.js/auto";
import { Bar, Line, Pie } from "react-chartjs-2";

const authtoken = localStorage.token
const Alltab = () => {
    const params = useParams();
    const [adhddata, setAdhddata] = useState([]);
    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API}/kussi-AAHD/${params.idcard}`,
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


    const [sigledata, setSingledata] = useState([]);
    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API}/kussi-score/${params.idcard}`,
                {
                    headers: {
                        authtoken,
                    }
                })
            .then((response) => {
                setSingledata(response.data);
            })
            .catch((err) => alert(err));
    }, [params]);
    console.log(sigledata)



    /*  ฟังก์ชั่นในการบวกค่าในobject
    const sum = alldata.reduce((accumulator, object) => {
        return accumulator + object.adhd1_dscore;
    }, 0);
    console.log(sum)
    */

    //const labels = ["ซน/วู่วาม", "ขาดสมาธิ", "รวม", "การอ่าน", "การเขียน", "การคำนวณ", "ออทิซึม"];
    const data = {
        labels: sigledata.map((data) => data.schoolyear + "/" + data.term),
        datasets: [
            {
                label: "คะแนนดิบรายเทอม ซน/วู่วาม (1,2)",
                backgroundColor: [
                    'rgb(187, 218, 201)',
                ],
                borderColor: "rgb(255, 99, 132)",
                data: sigledata.map((data) => data.adhd1_dscore)

            },
            {
                label: "คะแนนดิบรายเทอม ขาดสมาธิ (1,2)",
                backgroundColor: [
                    'rgb(255, 205, 86)',
                ],
                borderColor: "rgb(255, 205, 86)",
                data: sigledata.map((data) => data.adhd2_dscore)

            },
            {
                label: "คะแนนดิบรายเทอม รวม (1,2)",
                backgroundColor: [
                    'rgb(246, 159, 153)',
                ],
                borderColor: "rgb(246, 159, 153)",
                data: sigledata.map((data) => data.sumadhd_dscore)

            },
            {
                label: "คะแนนดิบรายเทอม การอ่าน (1,2)",
                backgroundColor: [
                    'rgb(157, 143, 184)',
                ],
                borderColor: "rgb(157, 143, 184)",
                data: sigledata.map((data) => data.ldr_dscore)

            },
            {
                label: "คะแนนดิบรายเทอม การเขียน (1,2)",
                backgroundColor: [
                    'rgb(169, 214, 204)',
                ],
                borderColor: "rgb(169, 214, 204)",
                data: sigledata.map((data) => data.ldw_dscore)

            },
            {
                label: "คะแนนดิบรายเทอม การคำนวน (1,2)",
                backgroundColor: [
                    'rgb(227, 237, 209)',
                ],
                borderColor: "rgb(227, 237, 209)",
                data: sigledata.map((data) => data.ldm_dscore)

            },
            {
                label: "คะแนนดิบรายเทอม ออทิซึม (1,2)",
                backgroundColor: [
                    'rgb(214, 214, 214)',
                ],
                borderColor: "rgb(214, 214, 214)",
                data: sigledata.map((data) => data.autism_dscore)

            },
        ],

    };

    //const labels2 = ["ซน/วู่วาม", "ขาดสมาธิ", "รวม", "การอ่าน", "การเขียน", "การคำนวณ", "ออทิซึม"];
    const data2 = {
        labels: sigledata.map((data) => data.schoolyear + "/" + data.term),
        datasets: [
            {
                label: "คะแนนทีรายเทอม ซน/วู่วาม (1,2)",
                backgroundColor: [
                    'rgb(187, 218, 201)',
                ],
                borderColor: "rgb(255, 99, 132)",
                data: sigledata.map((data) => data.adhd1_tscore)

            },
            {
                label: "คะแนนทีรายเทอม ขาดสมาธิ (1,2)",
                backgroundColor: [
                    'rgb(255, 205, 86)',
                ],
                borderColor: "rgb(255, 205, 86)",
                data: sigledata.map((data) => data.adhd2_tscore)

            },
            {
                label: "คะแนนทีรายเทอม รวม (1,2)",
                backgroundColor: [
                    'rgb(246, 159, 153)',
                ],
                borderColor: "rgb(246, 159, 153)",
                data: sigledata.map((data) => data.sumadhd_tscore)

            },
            {
                label: "คะแนนทีรายเทอม การอ่าน (1,2)",
                backgroundColor: [
                    'rgb(157, 143, 184)',
                ],
                borderColor: "rgb(157, 143, 184)",
                data: sigledata.map((data) => data.ldr_tscore)

            },
            {
                label: "คะแนนทีรายเทอม การเขียน (1,2)",
                backgroundColor: [
                    'rgb(169, 214, 204)',
                ],
                borderColor: "rgb(169, 214, 204)",
                data: sigledata.map((data) => data.ldw_tscore)

            },
            {
                label: "คะแนนทีรายเทอม การคำนวน (1,2)",
                backgroundColor: [
                    'rgb(227, 237, 209)',
                ],
                borderColor: "rgb(227, 237, 209)",
                data: sigledata.map((data) => data.ldm_tscore)

            },
            {
                label: "คะแนนทีรายเทอม ออทิซึม (1,2)",
                backgroundColor: [
                    'rgb(214, 214, 214)',
                ],
                borderColor: "rgb(214, 214, 214)",
                data: sigledata.map((data) => data.autism_tscore)

            },
        ],

    };

    //const labels3 = ["ซน/วู่วาม", "ขาดสมาธิ", "รวม", "การอ่าน", "การเขียน", "การคำนวณ", "ออทิซึม"];
    const data3 = {
        labels: sigledata.map((data) => data.schoolyear + "/" + data.term),
        datasets: [
            {
                label: "กลุ่มรายเทอม ซน/วู่วาม (1,2)",
                backgroundColor: [
                    'rgb(187, 218, 201)',
                ],
                borderColor: "rgb(255, 99, 132)",
                data: sigledata.map((data) => data.adhd1_group)

            },
            {
                label: "กลุ่มรายเทอม ขาดสมาธิ (1,2)",
                backgroundColor: [
                    'rgb(255, 205, 86)',
                ],
                borderColor: "rgb(255, 205, 86)",
                data: sigledata.map((data) => data.adhd2_group)

            },
            {
                label: "กลุ่มรายเทอม รวม (1,2)",
                backgroundColor: [
                    'rgb(246, 159, 153)',
                ],
                borderColor: "rgb(246, 159, 153)",
                data: sigledata.map((data) => data.sumadhd_group)

            },
            {
                label: "กลุ่มรายเทอม การอ่าน (1,2)",
                backgroundColor: [
                    'rgb(157, 143, 184)',
                ],
                borderColor: "rgb(157, 143, 184)",
                data: sigledata.map((data) => data.ldr_group)

            },
            {
                label: "กลุ่มรายเทอม การเขียน (1,2)",
                backgroundColor: [
                    'rgb(169, 214, 204)',
                ],
                borderColor: "rgb(169, 214, 204)",
                data: sigledata.map((data) => data.ldw_group)

            },
            {
                label: "กลุ่มรายเทอม การคำนวน (1,2)",
                backgroundColor: [
                    'rgb(227, 237, 209)',
                ],
                borderColor: "rgb(227, 237, 209)",
                data: sigledata.map((data) => data.ldm_group)

            },
            {
                label: "กลุ่มรายเทอม ออทิซึม (1,2)",
                backgroundColor: [
                    'rgb(214, 214, 214)',
                ],
                borderColor: "rgb(214, 214, 214)",
                data: sigledata.map((data) => data.autism_group)

            },
        ],

    };
    return (
        <div className="alltab-bg">
            {adhddata === null ? <div style={{ textAlign: "center" }}>ไม่พบข้อมูลการประเมินนักเรียน</div> : (
                <div>
                    <Row style={{ backgroundColor: "whitesmoke", padding: "0px 35px 40px 35px", borderRadius: "20px", boxShadow: "1px 2px 2px 0px rgb(158, 158, 158)" }}>
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

                    </Row>
                    <br />
                    <div style={{ display: "flex" }}>
                        <Row style={{ backgroundColor: "whitesmoke", padding: "20px 35px 40px 35px", borderRadius: "20px", boxShadow: "1px 2px 2px 0px rgb(158, 158, 158)", width: "50%", marginRight: "30px" }}>

                            <h5 style={{ textAlign: "center", paddingTop: "20px" }}>เกณฑ์การแปรผลคะแนน</h5>
                            <Row style={{ padding: "20px" }}>
                                <Col sm={12}>
                                    <span ><b>คะแนนที</b></span><span style={{ marginLeft: "195px" }}><b>กลุ่ม</b></span><span style={{ marginLeft: "50px" }}><b>ความหมาย</b></span>
                                </Col>
                                <Col sm={12} style={{ marginBottom: "10px" }}><span >ADHD/LD</span><span style={{ marginLeft: "20px" }}>Autism/PDDs</span></Col>
                                <Col sm={12} style={{ marginBottom: "10px" }}><span >≤ 50</span><span style={{ marginLeft: "90px" }}>≤ 60</span><span style={{ marginLeft: "88px", backgroundColor: "#7EC19C", padding: "3px 13px", borderRadius: "5px" }}>1.</span><span style={{ marginLeft: "10px" }}>กลุ่มที่อยู่ในเกณฑ์เฉลี่ย</span></Col>
                                <Col sm={12} style={{ marginBottom: "10px" }}><span >51-60</span><span style={{ marginLeft: "75px" }}>61-70</span><span style={{ marginLeft: "85px", backgroundColor: "#7EC19C", padding: "3px 12px", borderRadius: "5px" }}>2.</span><span style={{ marginLeft: "10px" }}>กลุ่มเฝ้าระวัง ติดตาม ทำซ้ำ</span></Col>
                                <Col sm={12} style={{ marginBottom: "10px" }}><span >61-70</span><span style={{ marginLeft: "75px" }}>71-80</span><span style={{ marginLeft: "85px", backgroundColor: "#7EC19C", padding: "3px 12px", borderRadius: "5px" }}>3.</span><span style={{ marginLeft: "10px" }}>กลุ่มที่ที่ควรได้รับการช่วยเหลือทางการศึกษา</span></Col>
                                <Col sm={12} style={{ marginBottom: "10px" }}><span >≥ 71</span><span style={{ marginLeft: "90px" }}>≥81</span><span style={{ marginLeft: "100px", backgroundColor: "#7EC19C", padding: "3px 12px", borderRadius: "5px" }}>4.</span><span style={{ marginLeft: "10px" }}>กลุ่มที่ควรส่งแพทย์เพื่อรับการตรวจประเมินอย่างเร่งด่วน</span></Col>

                            </Row>
                        </Row>
                        <Row style={{ backgroundColor: "whitesmoke", padding: "40px 35px 40px 35px", borderRadius: "20px", boxShadow: "1px 2px 2px 0px rgb(158, 158, 158)", width: "50%" }}>
                            <h5 style={{ textAlign: "center" }}>คะแนนดิบ</h5>
                            <Bar data={data} style={{ width: "100%", height: "100%" }} />
                        </Row>
                    </div>
                    <br />
                    <div style={{ display: "flex" }}>

                        <Row style={{ backgroundColor: "whitesmoke", padding: "20px 35px 40px 35px", borderRadius: "20px", boxShadow: "1px 2px 2px 0px rgb(158, 158, 158)", width: "50%", marginRight: "30px" }}>
                            <h5 style={{ textAlign: "center" }}>คะแนนที</h5>
                            <Bar data={data2} style={{ width: "100%", height: "100%" }} />
                        </Row>
                        <Row style={{ backgroundColor: "whitesmoke", padding: "20px 35px 40px 35px", borderRadius: "20px", boxShadow: "1px 2px 2px 0px rgb(158, 158, 158)", width: "50%" }}>
                            <h5 style={{ textAlign: "center" }}>กลุ่ม</h5>
                            <Bar data={data3} style={{ width: "70%", height: "70%" }} />
                        </Row>
                    </div>

                </div>

            )}
        </div>
    )
}

export default Alltab; 