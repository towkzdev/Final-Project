import { Row, Form, Button } from 'react-bootstrap';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Bar, Line} from "react-chartjs-2";
import Swal from "sweetalert2";
import { Chart } from 'react-chartjs-2';

const Grade = () => {
    const schoolid = localStorage.schoolid
    const params = useParams();
    const authtoken = localStorage.token
    const [schooldata, setSchooldata] = useState([]);
    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API}/kussi-Alldata/${params.schoolid}`,
                {
                    headers: {
                        authtoken,
                    }
                })
            .then((response) => {
                setSchooldata(response.data);
            })
            .catch((err) => alert(err));
    }, [params]);
    //console.logschooldata)

    /*
        const grade = sigledata.grade
        const room = sigledata.room
        const idcard = sigledata.stdidcard
    */

    const [datascore, setDatascore] = useState({
        grade: "",
        room: "",
        schoolyear: "",
        term: ""
    })

    const { schoolyear, term, grade, room } = datascore
    const valueTerm = data => event => {
        setDatascore({ ...datascore, [data]: event.target.value })
    }
    const valueSchoolyear = data => event => {
        setDatascore({ ...datascore, [data]: event.target.value })
    }
    const valueGrade = data => event => {
        setDatascore({ ...datascore, [data]: event.target.value })
    }
    //console.logdatascore)



    const [scoreyear, setScoreyear] = useState([])
    //ดึงรายชื่อในห้องเรียน
    const [studentdata, setStudentdata] = useState([]);
    const searchData = (e) => {
        e.preventDefault();
        ////console.log"ค้นหา", grade, room, schoolyear, term, idcard)
        if (grade != null && room != null && schoolyear != null && term != null) {
            axios.get(`${process.env.REACT_APP_API}/kussi-score/${grade}/${room}/${schoolyear}/${term}/${schoolid}`,
                {
                    headers: {
                        authtoken,
                    }
                })
                .then((response) => {
                    setScoreyear(response.data)

                    axios.get(`${process.env.REACT_APP_API}/kussi-students/${grade}/${room}/${schoolid}`,
                        {
                            headers: {
                                authtoken,
                            }
                        })
                        .then((response) => {
                            setStudentdata(response.data);
                        })
                        .catch((err) => alert(err));

                })
                .catch((err) =>
                    Swal.fire({
                        icon: "warning",
                        text: "กรุณาเลือกห้องเรียน",
                        confirmButtonColor: "#2D7F55",
                    }));
        }
    }
    //console.log`${process.env.REACT_APP_API}/kussi-score/${grade}/${room}/${schoolyear}/${term}/${schoolid}`)
    ////console.log`${process.env.REACT_APP_API}/kussi-score/${grade}/${room}/${schoolyear}/${term}`)

    const seen7 = new Set();
    const uniquegrade = schooldata.filter(item => {
        const duplicate7 = seen7.has(item.grade);
        seen7.add(item.grade);
        return !duplicate7;
    });

    const seen8 = new Set();
    const uniqueroom = schooldata.filter(item => {
        const duplicate8 = seen8.has(item.room);
        seen8.add(item.room);
        return !duplicate8;
    });




    const seen = new Set();
    const uniqueschoolyear = schooldata.filter(item => {
        const duplicate = seen.has(item.schoolyear);
        seen.add(item.schoolyear);
        return !duplicate;
    });

    ////console.loguniqueschoolyear.map(item => item.schoolyear))

    const seen2 = new Set();
    const uniqueschoolterm = schooldata.filter(item => {
        const duplicate2 = seen2.has(item.term);
        seen2.add(item.term);
        return !duplicate2;
    });

    //ดึงค่าyear/termเดียวมาแสดง
    const seen3 = new Set();
    const termvalue = scoreyear.filter(item => {
        const duplicate3 = seen3.has(item.term);
        seen3.add(item.term);
        return !duplicate3;
    });
    ////console.logtermvalue)

    const seen4 = new Set();
    const schoolyearvalue = scoreyear.filter(item => {
        const duplicate4 = seen4.has(item.schoolyear);
        seen4.add(item.schoolyear);
        return !duplicate4;
    });

    //โชว์ห้องเรียน
    const seen5 = new Set();
    const schoolgrade = scoreyear.filter(item => {
        const duplicate4 = seen5.has(item.grade);
        seen5.add(item.schoolyear);
        return !duplicate4;
    });
    const seen6 = new Set();
    const schoolroom = scoreyear.filter(item => {
        const duplicate4 = seen6.has(item.room);
        seen6.add(item.room);
        return !duplicate4;
    });








    //ด้าน D ADHD1
    const sum = scoreyear.reduce((accumulator, object) => {
        return accumulator + object.adhd1_dscore;
    }, 0);
    const avg = sum / scoreyear.length

    const maxVal = Math.max(...scoreyear.map(item => item.adhd1_dscore));
    const minVal = Math.min(...scoreyear.map(item => item.adhd1_dscore));

    const sum2 = scoreyear.reduce((accumulator, object) => {
        return accumulator + object.adhd2_dscore;
    }, 0);
    const avg2 = sum2 / scoreyear.length

    const maxVal2 = Math.max(...scoreyear.map(item => item.adhd2_dscore));
    const minVal2 = Math.min(...scoreyear.map(item => item.adhd2_dscore));

    const sum3 = scoreyear.reduce((accumulator, object) => {
        return accumulator + object.sumadhd_dscore;
    }, 0);
    const avg3 = sum3 / scoreyear.length

    const maxVal3 = Math.max(...scoreyear.map(item => item.sumadhd_dscore));
    const minVal3 = Math.min(...scoreyear.map(item => item.sumadhd_dscore));

    const data = {
        labels: ["ค่า Avg (ระดับชั้น)", "ค่าMax (ระดับชั้น)", "ค่าMin (ระดับชั้น)"],
        datasets: [
            {
                label: ["คะแนนดิบ ซน/วู่วาม"],
                backgroundColor: [

                    'rgb(187, 218, 201)',


                ],
                borderColor: "rgb(187, 218, 201)",
                data: [avg, maxVal, minVal]
            },
            {
                label: ["คะแนนดิบ ขาดสมาธิ"],
                backgroundColor: [
                    'rgb(246, 159, 153)',


                ],
                borderColor: 'rgb(246, 159, 153)',
                data: [avg2, maxVal2, minVal2]
            },
            {
                label: ["คะแนนดิบรวม"],
                backgroundColor: [
                    'rgb(157, 143, 184)',


                ],
                borderColor: 'rgb(157, 143, 184)',
                data: [avg3, maxVal3, minVal3]
            },

        ],
    };


    //ด้าน T ADHD1
    const sum4 = scoreyear.reduce((accumulator, object) => {
        return accumulator + object.adhd1_tscore;
    }, 0);
    const avg4 = sum4 / scoreyear.length

    const maxVal4 = Math.max(...scoreyear.map(item => item.adhd1_tscore));
    const minVal4 = Math.min(...scoreyear.map(item => item.adhd1_tscore));

    const sum5 = scoreyear.reduce((accumulator, object) => {
        return accumulator + object.adhd2_tscore;
    }, 0);
    const avg5 = sum5 / scoreyear.length

    const maxVal5 = Math.max(...scoreyear.map(item => item.adhd2_tscore));
    const minVal5 = Math.min(...scoreyear.map(item => item.adhd2_tscore));

    const sum6 = scoreyear.reduce((accumulator, object) => {
        return accumulator + object.sumadhd_tscore;
    }, 0);
    const avg6 = sum6 / scoreyear.length

    const maxVal6 = Math.max(...scoreyear.map(item => item.sumadhd_tscore));
    const minVal6 = Math.min(...scoreyear.map(item => item.sumadhd_tscore));



    const data2 = {
        labels: ["ค่า Avg (ระดับชั้น)", "ค่าMax (ระดับชั้น)", "ค่าMin (ระดับชั้น)"],
        datasets: [
            {
                label: ["คะแนนที ซน/วู่วาม"],
                backgroundColor: [

                    'rgb(187, 218, 201)',


                ],
                borderColor: "rgb(187, 218, 201)",
                data: [avg4, maxVal4, minVal4]
            },
            {
                label: ["คะแนนที ขาดสมาธิ"],
                backgroundColor: [
                    'rgb(246, 159, 153)',


                ],
                borderColor: 'rgb(246, 159, 153)',
                data: [avg5, maxVal5, minVal5]
            },
            {
                label: ["คะแนนทีรวม"],
                backgroundColor: [
                    'rgb(157, 143, 184)',


                ],
                borderColor: 'rgb(157, 143, 184)',
                data: [avg6, maxVal6, minVal6]
            },

        ],
    };

    // group ADHD
    const sum7 = scoreyear.reduce((accumulator, object) => {
        return accumulator + object.adhd1_group;
    }, 0);
    const avg7 = sum7 / scoreyear.length

    const count = scoreyear.reduce((counter, obj) => obj.adhd1_group === 1 ? counter += 1 : counter, 0);
    const count2 = scoreyear.reduce((counter, obj) => obj.adhd1_group === 2 ? counter += 1 : counter, 0);
    const count3 = scoreyear.reduce((counter, obj) => obj.adhd1_group === 3 ? counter += 1 : counter, 0);
    const count4 = scoreyear.reduce((counter, obj) => obj.adhd1_group === 4 ? counter += 1 : counter, 0);


    const sum8 = scoreyear.reduce((accumulator, object) => {
        return accumulator + object.adhd2_group;
    }, 0);
    const avg8 = sum8 / scoreyear.length
    const count5 = scoreyear.reduce((counter, obj) => obj.adhd2_group === 1 ? counter += 1 : counter, 0);
    const count6 = scoreyear.reduce((counter, obj) => obj.adhd2_group === 2 ? counter += 1 : counter, 0);
    const count7 = scoreyear.reduce((counter, obj) => obj.adhd2_group === 3 ? counter += 1 : counter, 0);
    const count8 = scoreyear.reduce((counter, obj) => obj.adhd2_group === 4 ? counter += 1 : counter, 0);

    const sum9 = scoreyear.reduce((accumulator, object) => {
        return accumulator + object.sumadhd_group;
    }, 0);
    const avg9 = sum9 / scoreyear.length
    const count9 = scoreyear.reduce((counter, obj) => obj.sumadhd_group === 1 ? counter += 1 : counter, 0);
    const count10 = scoreyear.reduce((counter, obj) => obj.sumadhd_group === 2 ? counter += 1 : counter, 0);
    const count11 = scoreyear.reduce((counter, obj) => obj.sumadhd_group === 3 ? counter += 1 : counter, 0);
    const count12 = scoreyear.reduce((counter, obj) => obj.sumadhd_group === 4 ? counter += 1 : counter, 0);

    const data3 = {
        labels: ["ค่า Avg (ระดับชั้น)", "กลุ่ม1(คน)", "กลุ่ม2(คน)", "กลุ่ม3(คน)", "กลุ่ม4(คน)"],
        datasets: [
            {
                label: ["กลุ่ม ซน/วู่วาม "],
                backgroundColor: [

                    'rgb(187, 218, 201)',


                ],
                borderColor: "rgb(187, 218, 201)",
                data: [avg7, count, count2, count3, count4]
            },
            {
                label: ["กลุ่ม ขาดสมาธิ"],
                backgroundColor: [



                    'rgb(246, 159, 153)',
                ],
                borderColor: "rgb(187, 218, 201)",
                data: [avg8, count5, count6, count7, count8]
            },
            {
                label: ["กลุ่ม คะแนนรวม"],
                backgroundColor: [


                    'rgb(157, 143, 184)',

                ],
                borderColor: "rgb(187, 218, 201)",
                data: [avg9, count9, count10, count11, count12]
            },

        ],
    };



    //ด้าน Dscore LDR
    const sum10 = scoreyear.reduce((accumulator, object) => {
        return accumulator + object.ldr_dscore;
    }, 0);
    const avg10 = sum10 / scoreyear.length

    const maxVal10 = Math.max(...scoreyear.map(item => item.ldr_dscore));
    const minVal10 = Math.min(...scoreyear.map(item => item.ldr_dscore));

    const sum11 = scoreyear.reduce((accumulator, object) => {
        return accumulator + object.ldr_tscore;
    }, 0);
    const avg11 = sum11 / scoreyear.length

    const maxVal11 = Math.max(...scoreyear.map(item => item.ldr_tscore));
    const minVal11 = Math.min(...scoreyear.map(item => item.ldr_tscore));


    const data4 = {
        labels: ["ค่า Avg (ระดับชั้น)", "ค่าMax (ระดับชั้น)", "ค่าMin (ระดับชั้น)"],
        datasets: [
            {
                label: ["คะแนนดิบ ด้านการอ่าน"],
                backgroundColor: [

                    'rgb(187, 218, 201)',


                ],
                borderColor: "rgb(187, 218, 201)",
                data: [avg10, maxVal10, minVal10]
            },
            {
                label: ["คะแนนที ด้านการอ่าน"],
                backgroundColor: [
                    'rgb(246, 159, 153)',


                ],
                borderColor: 'rgb(246, 159, 153)',
                data: [avg11, maxVal11, minVal11]
            },


        ],
    };


    // group LDR
    const sum12 = scoreyear.reduce((accumulator, object) => {
        return accumulator + object.ldr_group;
    }, 0);
    const avg12 = sum12 / scoreyear.length

    const count13 = scoreyear.reduce((counter, obj) => obj.ldr_group === 1 ? counter += 1 : counter, 0);
    const count14 = scoreyear.reduce((counter, obj) => obj.ldr_group === 2 ? counter += 1 : counter, 0);
    const count15 = scoreyear.reduce((counter, obj) => obj.ldr_group === 3 ? counter += 1 : counter, 0);
    const count16 = scoreyear.reduce((counter, obj) => obj.ldr_group === 4 ? counter += 1 : counter, 0);



    const data5 = {
        labels: ["ค่า Avg (ระดับชั้น)", "กลุ่ม1(คน)", "กลุ่ม2(คน)", "กลุ่ม3(คน)", "กลุ่ม4(คน)"],
        datasets: [
            {
                label: ["กลุ่ม ด้านการอ่าน "],
                backgroundColor: [

                    'rgb(187, 218, 201)',
                    'rgb(246, 159, 153)',
                    'rgb(157, 143, 184)',
                    'rgb(169, 214, 204)',
                    'rgb(227, 237, 209)',
                ],
                borderColor: "rgb(187, 218, 201)",
                data: [avg12, count13, count14, count15, count16]
            },


        ],
    };

    //////////////////////////////////////////////////////////////////////////////////
    //ด้าน Dscore LDW
    const sum13 = scoreyear.reduce((accumulator, object) => {
        return accumulator + object.ldw_dscore;
    }, 0);
    const avg13 = sum13 / scoreyear.length

    const maxVal13 = Math.max(...scoreyear.map(item => item.ldw_dscore));
    const minVal13 = Math.min(...scoreyear.map(item => item.ldw_dscore));

    const sum14 = scoreyear.reduce((accumulator, object) => {
        return accumulator + object.ldw_tscore;
    }, 0);
    const avg14 = sum14 / scoreyear.length

    const maxVal14 = Math.max(...scoreyear.map(item => item.ldw_tscore));
    const minVal14 = Math.min(...scoreyear.map(item => item.ldw_tscore));


    const data6 = {
        labels: ["ค่า Avg (ระดับชั้น)", "ค่าMax (ระดับชั้น)", "ค่าMin (ระดับชั้น)"],
        datasets: [
            {
                label: ["คะแนนดิบ ด้านการเขียน"],
                backgroundColor: [

                    'rgb(187, 218, 201)',


                ],
                borderColor: "rgb(187, 218, 201)",
                data: [avg13, maxVal13, minVal13]
            },
            {
                label: ["คะแนนที ด้านการเขียน"],
                backgroundColor: [
                    'rgb(246, 159, 153)',


                ],
                borderColor: 'rgb(246, 159, 153)',
                data: [avg14, maxVal14, minVal14]
            },


        ],
    };

    // group LDW
    const sum15 = scoreyear.reduce((accumulator, object) => {
        return accumulator + object.ldw_group;
    }, 0);
    const avg15 = sum15 / scoreyear.length

    const count17 = scoreyear.reduce((counter, obj) => obj.ldw_group === 1 ? counter += 1 : counter, 0);
    const count18 = scoreyear.reduce((counter, obj) => obj.ldw_group === 2 ? counter += 1 : counter, 0);
    const count19 = scoreyear.reduce((counter, obj) => obj.ldw_group === 3 ? counter += 1 : counter, 0);
    const count20 = scoreyear.reduce((counter, obj) => obj.ldw_group === 4 ? counter += 1 : counter, 0);



    const data7 = {
        labels: ["ค่า Avg (ระดับชั้น)", "กลุ่ม1(คน)", "กลุ่ม2(คน)", "กลุ่ม3(คน)", "กลุ่ม4(คน)"],
        datasets: [
            {
                label: ["กลุ่ม ด้านการเขียน "],
                backgroundColor: [

                    'rgb(187, 218, 201)',
                    'rgb(246, 159, 153)',
                    'rgb(157, 143, 184)',
                    'rgb(169, 214, 204)',
                    'rgb(227, 237, 209)',
                ],
                borderColor: "rgb(187, 218, 201)",
                data: [avg15, count17, count18, count19, count20]
            },


        ],
    };

    ////////////////////////////////////////////////////////////////////////////////////
    //ด้าน Dscore LDM
    const sum16 = scoreyear.reduce((accumulator, object) => {
        return accumulator + object.ldm_dscore;
    }, 0);
    const avg16 = sum16 / scoreyear.length

    const maxVal16 = Math.max(...scoreyear.map(item => item.ldm_dscore));
    const minVal16 = Math.min(...scoreyear.map(item => item.ldm_dscore));

    const sum17 = scoreyear.reduce((accumulator, object) => {
        return accumulator + object.ldm_tscore;
    }, 0);
    const avg17 = sum17 / scoreyear.length

    const maxVal17 = Math.max(...scoreyear.map(item => item.ldm_tscore));
    const minVal17 = Math.min(...scoreyear.map(item => item.ldm_tscore));


    const data8 = {
        labels: ["ค่า Avg (ระดับชั้น)", "ค่าMax (ระดับชั้น)", "ค่าMin (ระดับชั้น)"],
        datasets: [
            {
                label: ["คะแนนดิบ ด้านการคำนวน"],
                backgroundColor: [

                    'rgb(187, 218, 201)',


                ],
                borderColor: "rgb(187, 218, 201)",
                data: [avg16, maxVal16, minVal16]
            },
            {
                label: ["คะแนนที ด้านการคำนวน"],
                backgroundColor: [
                    'rgb(246, 159, 153)',


                ],
                borderColor: 'rgb(246, 159, 153)',
                data: [avg17, maxVal17, minVal17]
            },


        ],
    };

    // group LDM
    const sum18 = scoreyear.reduce((accumulator, object) => {
        return accumulator + object.ldm_group;
    }, 0);
    ////console.log"เช็คค่า", sum18)
    const avg18 = sum18 / scoreyear.length
    // //console.log"เช็คค่า", avg18)
    const count21 = scoreyear.reduce((counter, obj) => obj.ldm_group === 1 ? counter += 1 : counter, 0);
    const count22 = scoreyear.reduce((counter, obj) => obj.ldm_group === 2 ? counter += 1 : counter, 0);
    const count23 = scoreyear.reduce((counter, obj) => obj.ldm_group === 3 ? counter += 1 : counter, 0);
    const count24 = scoreyear.reduce((counter, obj) => obj.ldm_group === 4 ? counter += 1 : counter, 0);

    //console.logcount22)


    const data9 = {
        labels: ["ค่า Avg (ระดับชั้น)", "กลุ่ม1(คน)", "กลุ่ม2(คน)", "กลุ่ม3(คน)", "กลุ่ม4(คน)"],
        datasets: [
            {
                label: ["กลุ่ม ด้านการคำนวน "],
                backgroundColor: [

                    'rgb(187, 218, 201)',
                    'rgb(246, 159, 153)',
                    'rgb(157, 143, 184)',
                    'rgb(169, 214, 204)',
                    'rgb(227, 237, 209)',
                ],
                borderColor: "rgb(187, 218, 201)",
                data: [avg18, count21, count22, count23, count24]
            },


        ],
    };
    /////////////////////////////////////////////////////////////////////////////////////////
    //ด้าน Dscore ATS
    const sum19 = scoreyear.reduce((accumulator, object) => {
        return accumulator + object.autism_dscore;
    }, 0);
    const avg19 = sum19 / scoreyear.length

    const maxVal19 = Math.max(...scoreyear.map(item => item.autism_dscore));
    const minVal19 = Math.min(...scoreyear.map(item => item.autism_dscore));

    const sum20 = scoreyear.reduce((accumulator, object) => {
        return accumulator + object.autism_tscore;
    }, 0);
    const avg20 = sum20 / scoreyear.length

    const maxVal20 = Math.max(...scoreyear.map(item => item.autism_tscore));
    const minVal20 = Math.min(...scoreyear.map(item => item.autism_tscore));


    const data10 = {
        labels: ["ค่า Avg (ระดับชั้น)", "ค่าMax (ระดับชั้น)", "ค่าMin (ระดับชั้น)"],
        datasets: [
            {
                label: ["คะแนนดิบ ด้านออทิซึม"],
                backgroundColor: [

                    'rgb(187, 218, 201)',


                ],
                borderColor: "rgb(187, 218, 201)",
                data: [avg19, maxVal19, minVal19]
            },
            {
                label: ["คะแนนที ด้านออทิซึม"],
                backgroundColor: [
                    'rgb(246, 159, 153)',


                ],
                borderColor: 'rgb(246, 159, 153)',
                data: [avg20, maxVal20, minVal20]
            },


        ],
    };
    // group ATS
    const sum21 = scoreyear.reduce((accumulator, object) => {
        return accumulator + object.autism_group;
    }, 0);

    const avg21 = sum21 / scoreyear.length
    const count25 = scoreyear.reduce((counter, obj) => obj.autism_group === 1 ? counter += 1 : counter, 0);
    const count26 = scoreyear.reduce((counter, obj) => obj.autism_group === 2 ? counter += 1 : counter, 0);
    const count27 = scoreyear.reduce((counter, obj) => obj.autism_group === 3 ? counter += 1 : counter, 0);
    const count28 = scoreyear.reduce((counter, obj) => obj.autism_group === 4 ? counter += 1 : counter, 0);

    //console.logcount22)


    const data11 = {
        labels: ["ค่า Avg (ระดับชั้น)", "กลุ่ม1(คน)", "กลุ่ม2(คน)", "กลุ่ม3(คน)", "กลุ่ม4(คน)"],
        datasets: [
            {
                label: ["กลุ่ม ด้านออทิซึม "],
                backgroundColor: [

                    'rgb(187, 218, 201)',
                    'rgb(246, 159, 153)',
                    'rgb(157, 143, 184)',
                    'rgb(169, 214, 204)',
                    'rgb(227, 237, 209)',
                ],
                borderColor: "rgb(187, 218, 201)",
                data: [avg21, count25, count26, count27, count28]
            },


        ],
    };
    return (
        <div>
            <br />
            <Form onSubmit={searchData}>
                <select name="grade" style={{ borderRadius: "10px", marginRight: "20px", width: "400px", padding: "4px 15px", backgroundColor: "white", boxShadow: "inset 0 1px 0 0 gray" }} value={grade} onChange={valueGrade("grade")} >
                    <option value="">-เลือกระดับชั้น-</option>
                    {uniquegrade.map((item, index) =>
                        <option key={index} value={item.grade}>{item.grade}</option>
                    )}
                </select>
                <select name="room" value={room} onChange={valueGrade('room')} style={{ borderRadius: "10px", marginRight: "20px", width: "185px", padding: "4px 15px", backgroundColor: "white", boxShadow: "inset 0 1px 0 0 gray" }} >
                    <option value="-">เลือกห้องเรียน</option>
                    {uniqueroom.map((item, index) =>
                        <option key={index} value={item.room}>{item.room}</option>
                    )}
                </select>
                <select name="schoolyear" style={{ borderRadius: "10px", marginRight: "20px", width: "140px", padding: "4px 15px", backgroundColor: "white", boxShadow: "inset 0 1px 0 0 gray" }} value={schoolyear} onChange={valueSchoolyear("schoolyear")} >
                    <option value="">-ปีการศึกษา-</option>
                    {uniqueschoolyear.map((item, index) =>
                        <option key={index} value={item.schoolyear}>{item.schoolyear}</option>
                    )}
                </select>
                <select name="term" value={term} onChange={valueTerm('term')} style={{ borderRadius: "10px", marginRight: "20px", width: "100px", padding: "4px 15px", backgroundColor: "white", boxShadow: "inset 0 1px 0 0 gray" }} >
                    <option value="-">เทอม</option>
                    {uniqueschoolterm.map((item, index) =>
                        <option key={index} value={item.term}>{item.term}</option>
                    )}

                </select>

                <Button variant="success" style={{ borderRadius: "10px", width: "150px", padding: "5px 15px" }} type="submit" >ค้นหา</Button>
            </Form>


            {scoreyear.length === 0 ? <div className="alltab-bg" style={{ textAlign: "center" }}>-ไม่พบข้อมูลนักเรียน-</div> : (
                <div className="alltab-bg">
                    <h5 style={{ textAlign: "center" }}>{schoolgrade.map(item => item.grade)}&nbsp; ห้อง {schoolroom.map(item => item.room)}</h5>
                    <br />
                    <div className='d-flex justify-content-center'>
                        <a style={{ color: "red" }}>จำนวนนักเรียนที่ประเมินทั้งหมด {scoreyear.length}/{studentdata.length} คน</a>
                    </div>

                    <br />
                    <div style={{ display: "flex" }}>
                        <Row style={{ backgroundColor: "whitesmoke", padding: "20px 35px 40px 35px", borderRadius: "20px", boxShadow: "1px 2px 2px 0px rgb(158, 158, 158)", width: "50%", marginRight: "30px" }}>
                            <h5 style={{ textAlign: "center" }}>ปีการศึกษา {schoolyearvalue.map(item => item.schoolyear)} / {termvalue.map(item => item.term)} </h5> <br />
                            <h6 style={{ textAlign: "center" }}>คะแนนดิบด้าน ADHD</h6> <br />
                            <Line data={data} />
                        </Row>
                        <Row style={{ backgroundColor: "whitesmoke", padding: "20px 35px 40px 35px", borderRadius: "20px", boxShadow: "1px 2px 2px 0px rgb(158, 158, 158)", width: "50%" }}>
                            <h5 style={{ textAlign: "center" }}>ปีการศึกษา {schoolyearvalue.map(item => item.schoolyear)} / {termvalue.map(item => item.term)} </h5> <br />
                            <h6 style={{ textAlign: "center" }}>คะแนนทีด้าน ADHD</h6> <br />
                            <Line data={data2} />
                        </Row>
                    </div>
                    <br />
                    <div>
                        <Row style={{ backgroundColor: "whitesmoke", padding: "20px 35px 40px 35px", borderRadius: "20px", boxShadow: "1px 2px 2px 0px rgb(158, 158, 158)" }}>
                            <h5 style={{ textAlign: "center" }}>ปีการศึกษา {schoolyearvalue.map(item => item.schoolyear)} / {termvalue.map(item => item.term)} </h5> <br />
                            <h6 style={{ textAlign: "center" }}>กลุ่มด้าน ADHD</h6> <br />
                            <div className='d-flex justify-content-center' style={{ height: "350px" }}>
                                <Bar data={data3} />
                            </div>

                        </Row>

                    </div>
                    <br />
                    <div style={{ display: "flex" }}>
                        <Row style={{ backgroundColor: "whitesmoke", padding: "20px 35px 40px 35px", borderRadius: "20px", boxShadow: "1px 2px 2px 0px rgb(158, 158, 158)", width: "50%", marginRight: "30px" }}>
                            <h5 style={{ textAlign: "center" }}>ปีการศึกษา {schoolyearvalue.map(item => item.schoolyear)} / {termvalue.map(item => item.term)} </h5> <br />
                            <h6 style={{ textAlign: "center" }}>คะแนนดิบด้าน LD-Reading</h6> <br />
                            <Line data={data4} />
                        </Row>
                        <Row style={{ backgroundColor: "whitesmoke", padding: "20px 35px 40px 35px", borderRadius: "20px", boxShadow: "1px 2px 2px 0px rgb(158, 158, 158)", width: "50%" }}>
                            <h5 style={{ textAlign: "center" }}>ปีการศึกษา {schoolyearvalue.map(item => item.schoolyear)} / {termvalue.map(item => item.term)} </h5> <br />
                            <h6 style={{ textAlign: "center" }}>กลุ่มด้าน LD-Reading</h6> <br />
                            <Bar data={data5} />
                        </Row>
                    </div>
                    <br />
                    <div style={{ display: "flex" }}>
                        <Row style={{ backgroundColor: "whitesmoke", padding: "20px 35px 40px 35px", borderRadius: "20px", boxShadow: "1px 2px 2px 0px rgb(158, 158, 158)", width: "50%", marginRight: "30px" }}>
                            <h5 style={{ textAlign: "center" }}>ปีการศึกษา {schoolyearvalue.map(item => item.schoolyear)} / {termvalue.map(item => item.term)} </h5> <br />
                            <h6 style={{ textAlign: "center" }}>คะแนนดิบด้าน LD-Written Expression</h6> <br />
                            <Line data={data6} />
                        </Row>
                        <Row style={{ backgroundColor: "whitesmoke", padding: "20px 35px 40px 35px", borderRadius: "20px", boxShadow: "1px 2px 2px 0px rgb(158, 158, 158)", width: "50%" }}>
                            <h5 style={{ textAlign: "center" }}>ปีการศึกษา {schoolyearvalue.map(item => item.schoolyear)} / {termvalue.map(item => item.term)} </h5> <br />
                            <h6 style={{ textAlign: "center" }}>กลุ่มด้าน LD-Written Expression</h6> <br />
                            <Bar data={data7} />
                        </Row>
                    </div>
                    <br />
                    <div style={{ display: "flex" }}>
                        <Row style={{ backgroundColor: "whitesmoke", padding: "20px 35px 40px 35px", borderRadius: "20px", boxShadow: "1px 2px 2px 0px rgb(158, 158, 158)", width: "50%", marginRight: "30px" }}>
                            <h5 style={{ textAlign: "center" }}>ปีการศึกษา {schoolyearvalue.map(item => item.schoolyear)} / {termvalue.map(item => item.term)} </h5> <br />
                            <h6 style={{ textAlign: "center" }}>คะแนนดิบด้าน LD-Mathematics</h6> <br />
                            <Line data={data8} />
                        </Row>
                        <Row style={{ backgroundColor: "whitesmoke", padding: "20px 35px 40px 35px", borderRadius: "20px", boxShadow: "1px 2px 2px 0px rgb(158, 158, 158)", width: "50%" }}>
                            <h5 style={{ textAlign: "center" }}>ปีการศึกษา {schoolyearvalue.map(item => item.schoolyear)} / {termvalue.map(item => item.term)} </h5> <br />
                            <h6 style={{ textAlign: "center" }}>กลุ่มด้าน LD-Mathematics</h6> <br />
                            <Bar data={data9} />
                        </Row>
                    </div>
                    <br />
                    <div style={{ display: "flex" }}>
                        <Row style={{ backgroundColor: "whitesmoke", padding: "20px 35px 40px 35px", borderRadius: "20px", boxShadow: "1px 2px 2px 0px rgb(158, 158, 158)", width: "50%", marginRight: "30px" }}>
                            <h5 style={{ textAlign: "center" }}>ปีการศึกษา {schoolyearvalue.map(item => item.schoolyear)} / {termvalue.map(item => item.term)} </h5> <br />
                            <h6 style={{ textAlign: "center" }}>คะแนนดิบด้าน Autism/ PDDs</h6> <br />
                            <Line data={data10} />
                        </Row>
                        <Row style={{ backgroundColor: "whitesmoke", padding: "20px 35px 40px 35px", borderRadius: "20px", boxShadow: "1px 2px 2px 0px rgb(158, 158, 158)", width: "50%" }}>
                            <h5 style={{ textAlign: "center" }}>ปีการศึกษา {schoolyearvalue.map(item => item.schoolyear)} / {termvalue.map(item => item.term)} </h5> <br />
                            <h6 style={{ textAlign: "center" }}>กลุ่มด้าน Autism/ PDDs</h6> <br />
                            <Bar data={data11} />
                        </Row>
                    </div>
                </div>

            )}
        </div>
    )
}
export default Grade