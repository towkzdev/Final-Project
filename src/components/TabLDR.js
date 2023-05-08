import { Row, Col, Form, Button } from 'react-bootstrap';
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Chart from "chart.js/auto";
import { Bar, Line, Pie } from "react-chartjs-2";
import Swal from "sweetalert2";


const TabLDR = () => {
    const params = useParams();
    const authtoken = localStorage.token
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


    const history = useNavigate();
    if (adhddata === null) {
        Swal.fire({
            icon: "error",
            text: "ไม่พบข้อมูลการบันทึก",
            confirmButtonColor: "#EF1717",
        });
        history("/contact");
    }


    const grade = adhddata.grade
    const room = adhddata.room
    const idcard = adhddata.stdidcard

    
    const [datascore, setDatascore] = useState({
        schoolyear: "",
        term: ""
    })

    const { schoolyear, term } = datascore
    const valueGrade = data => event => {
        setDatascore({ ...datascore, [data]: event.target.value })
    }
    const valueSchoolyear = data => event => {
        setDatascore({ ...datascore, [data]: event.target.value })
    }
    console.log(datascore)



    const [scorestd, setScorestd] = useState({})

    const [scoreyear, setScoreyear] = useState([])

    const schoolid = adhddata.schoolid
    const searchData = (e) => {
        e.preventDefault();
        console.log("ค้นหา", grade, room, schoolyear, term, idcard)


        if (schoolyear != null && term != null) {
            axios.get(`${process.env.REACT_APP_API}/kussi-score/${grade}/${room}/${schoolyear}/${term}/${schoolid}`,
            {
              headers: {
                authtoken,
              }
            })
                .then((response) => {
                    setScoreyear(response.data)

                })
                .catch((err) =>
                    Swal.fire({
                        icon: "warning",
                        text: "กรุณาเลือกห้องเรียน",
                        confirmButtonColor: "#2D7F55",
                    }));

            axios.get(`${process.env.REACT_APP_API}/kussi-score/${idcard}/${schoolyear}/${term}`,
            {
              headers: {
                authtoken,
              }
            })
                .then((response) => {
                    setScorestd(response.data)

                })
                .catch((err) =>
                    Swal.fire({
                        icon: "warning",
                        text: "กรุณาเลือกห้องเรียน",
                        confirmButtonColor: "#2D7F55",
                    }));
        } else { alert("เกิดข้อผิดพลาด") }
    }

    console.log(scoreyear)
    console.log("คะแนนนักเรียน", scorestd)
    //const adhd1_dscore = scorestd.adhd1_dscore
    //console.log(adhd1_dscore , "คะแนน")
    const schoolyear2 = scorestd.schoolyear
    const term2 = scorestd.term

//adhd 1 
    const sum = scoreyear.reduce((accumulator, object) => {
        return accumulator + object.ldr_dscore;
    }, 0);

    console.log(sum)
    const avg = sum / scoreyear.length
    console.log(avg)

    const minVal = Math.min(...scoreyear.map(item => item.ldr_dscore))
    console.log("ค่าต่ำสุด", minVal)

    const maxVal = Math.max(...scoreyear.map(item => item.ldr_dscore));
    console.log("ค่าสูงสุด", maxVal)


    const adhd1_dscore = scorestd.adhd1_dscore

    const sum5 = scoreyear.reduce((accumulator, object) => {
        return accumulator + object.ldr_tscore;
    }, 0);
    const avg5 = sum5 / scoreyear.length
    const minVal5 = Math.min(...scoreyear.map(item => item.ldr_tscore))
    console.log("ค่าต่ำสุด", minVal)
    const maxVal5 = Math.max(...scoreyear.map(item => item.ldr_tscore));
    console.log("ค่าสูงสุด", maxVal)

    const data = {
        labels: ["ด้านการอ่าน", "ค่าเฉลี่ย", "ค่าสูงสุด", "ค่าต่ำสุด"],
        datasets: [
            {
                label: ["คะแนนดิบ ด้านการอ่าน"],
                backgroundColor: [
                    'rgb(187, 218, 201)',
                ],
                borderColor: "rgb(187, 218, 201)",
                data: [scorestd.ldr_dscore, avg, maxVal, minVal]
            },

            {
                label: ["คะแนนที ด้านการอ่าน"],
                backgroundColor: [
                    'rgb(255, 205, 86)',
                ],
                borderColor: "rgb(255, 205, 86)",
                data: [scorestd.ldr_tscore, avg5, maxVal5, minVal5]
            },

         
        ],
    };

    //group
    const sum4 = scoreyear.reduce((accumulator, object) => {
        return accumulator + object.ldr_group;
    }, 0);

    const avg4 = sum4 / scoreyear.length

    const minVal4 = Math.min(...scoreyear.map(item => item.ldr_group))

    const maxVal4 = Math.max(...scoreyear.map(item => item.ldr_group));



    const data3 = {
        labels: ["ด้าน การอ่าน", "ค่าเฉลี่ย", "ค่าสูงสุด", "ค่าต่ำสุด"],
        datasets: [
          
            {
                label: ["กลุ่ม ด้านการอ่าน"],
                backgroundColor: [
                    'rgb(246, 159, 153)',
                    'rgb(255, 205, 86)',
                    'rgb(187, 218, 201)',
                    'rgb(157, 143, 184)',
                ],
              
                data: [scorestd.ldr_group, avg4, maxVal4, minVal4]
            },
        ],
    };

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

  //ลบค่าปี เทอม ซ้ำ
  const seen = new Set();
  const uniqueschoolyear = sigledata.filter(item => {
      const duplicate = seen.has(item.schoolyear);
      seen.add(item.schoolyear);
      return !duplicate;
  });

  const seen2 = new Set();
  const uniqueschoolterm = sigledata.filter(item => {
      const duplicate2 = seen2.has(item.term);
      seen2.add(item.term);
      return !duplicate2;
  });

    return (
        <div className="alltab-bg">
            {adhddata === null ? <div style={{ textAlign: "center" }}>ไม่พบข้อมูลการประเมินนักเรียน</div> : (
                <div>
                    <Form onSubmit={searchData}>
                        <select name="schoolyear" style={{ borderRadius: "10px", marginRight: "20px", width: "140px", padding: "4px 15px", backgroundColor: "white", boxShadow: "inset 0 1px 0 0 gray" }} value={schoolyear} onChange={valueSchoolyear("schoolyear")} >
                            <option value="">-ปีการศึกษา-</option>
                            {uniqueschoolyear.map((item, index) =>
                                <option key={index} value={item.schoolyear}>{item.schoolyear}</option>
                            )}
                        </select>
                        <select name="term" value={term} onChange={valueGrade('term')} style={{ borderRadius: "10px", marginRight: "20px", width: "100px", padding: "4px 15px", backgroundColor: "white", boxShadow: "inset 0 1px 0 0 gray" }} >
                            <option value="-">เทอม</option>
                            {uniqueschoolterm.map((item, index) =>
                                <option key={index} value={item.term}>{item.term}</option>
                            )}

                        </select>

                        <Button variant="success" style={{ borderRadius: "10px", width: "150px", padding: "5px 15px" }} type="submit" >ค้นหา</Button>
                    </Form>

                    <br />

                    <h5 style={{ textAlign: "center" }}>พฤติกรรมภาวะบกพร่องทางการเรียนรู้ด้านการอ่าน (KUS-SI Rating Scale 2: LD-	Reading)  </h5> <br />


                    {scoreyear.length > 0 ? (
                        <div>
                            <div style={{ display: "flex" }}>
                                <Row style={{ backgroundColor: "whitesmoke", padding: "20px 35px 40px 35px", borderRadius: "20px", boxShadow: "1px 2px 2px 0px rgb(158, 158, 158)", width: "50%", marginRight: "30px" }}>
                                    <h5 style={{ textAlign: "center" }}>ปีการศึกษา {schoolyear2} / {term2}</h5> <br />
                                    <h6 style={{ textAlign: "center" }}>ด้านการอ่าน</h6> <br />
                                    <Line data={data} />

                                </Row>
                                <Row style={{ backgroundColor: "whitesmoke", padding: "40px 35px 40px 35px", borderRadius: "20px", boxShadow: "1px 2px 2px 0px rgb(158, 158, 158)", width: "50%" }}>
                                    <h5 style={{ textAlign: "center" }}>ปีการศึกษา {schoolyear2} / {term2}</h5> <br />
                                    <h6 style={{ textAlign: "center" }}>กลุ่ม ด้านการอ่าน</h6> <br />
                                    <Bar data={data3} />
                                </Row>
                            </div>
                           
                        </div>
                    ) : <div style={{ textAlign: "center" }}>-ไม่พบข้อมูลการประเมิน-</div>}





                </div>
            )}
        </div>
    )
}

export default TabLDR;