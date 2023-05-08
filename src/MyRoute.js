import { Routes, Route } from "react-router-dom";
import App from "./App"
import Editstudentdata from "./page/Editstudentdata";
import Fetchexceldata from "./page/Fetchexceldata";
import Kussi from "./page/Kussi";
import Kussi_ADHD from "./page/Kussi_ADHD";
import Kussi_ADHD2 from "./page/Kussi_ADHD2";
import Kussi_ATS from "./page/Kussi_ATS";
import Kussi_LDM from "./page/Kussi_LDM";
import Kussi_LDR from "./page/Kussi_LDR";
import Kussi_LDW from "./page/Kussi_LDW";
import Kussi_Score from "./page/Kussi_Score";
import ScreenningForm from "./page/ScreenningForm";
import Showstudentdata from "./page/Showstudentdata";
import Stdregister from "./page/Stdregister";
import Studentcontacts from "./page/Studentcontacts";
import Showreport from "./page/Showreport";
import Schoolreport from "./page/Schoolreport";
import ContactStudent from "./page/Contact";
import AdminPage from "./page/AdminPage";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { currentUser } from "./axiosroute";
import { useDispatch } from "react-redux"
import React from "react";
//Route
import UserRoute from "./routes/UserRoute";
import AdminRoute from "./routes/AdminRoute";
import TeacherData from "./page/TeacherData";

const MyRoute = () => {
    const dispatch = useDispatch()
    const idtoken = localStorage.token
    const username = localStorage.username

    if (idtoken) {
        currentUser(idtoken)
            .then(res => {
                dispatch({
                    type: 'LOGIN',
                    payload: {
                        token: idtoken,
                        username: res.data.username,
                        role: res.data.role,
                        fname: res.data.fname,
                        tname: res.data.lname,
                        schoolid: res.data.schoolid
                    },
                })
                console.log(res.data)
            })
            .catch(err => {
                console.log(err)
            })
        console.log(idtoken)
    }

    return (
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/contact" element={
                <UserRoute>
                    <ContactStudent />
                </UserRoute>
            } />
            <Route path="/screenning/:idcard" element={<UserRoute><ScreenningForm /></UserRoute>} />
            <Route path="/kussi/:idcard" element={<UserRoute><Kussi /></UserRoute>} />
            <Route path="/kussi-ADHD/:idcard/:schoolyear/:term" element={<UserRoute><Kussi_ADHD /></UserRoute>} />
            <Route path="/kussi-ADHD2/:idcard/:schoolyear/:term" element={<UserRoute><Kussi_ADHD2 /></UserRoute>} />
            <Route path="/kussi-LDR/:idcard/:schoolyear/:term" element={<UserRoute><Kussi_LDR /></UserRoute>} />
            <Route path="/kussi-LDW/:idcard/:schoolyear/:term" element={<UserRoute><Kussi_LDW /></UserRoute>} />
            <Route path="/kussi-LDM/:idcard/:schoolyear/:term" element={<UserRoute><Kussi_LDM /></UserRoute>} />
            <Route path="/kussi-ATS/:idcard/:schoolyear/:term" element={<UserRoute><Kussi_ATS /></UserRoute>} />
            <Route path="/kussi-Stdregister" element={<UserRoute><Stdregister /></UserRoute>} />
            <Route path="/kussi-Score/:idcard/:schoolyear/:term" element={<UserRoute><Kussi_Score /></UserRoute>} />
            <Route path="/excel" element={<UserRoute><Fetchexceldata /></UserRoute>} />
            <Route path="/studentcontacts" element={<UserRoute><Studentcontacts /></UserRoute>} />
            <Route path="/student/:idcard" element={<UserRoute><Showstudentdata /></UserRoute>} />
            <Route path="/editstudent/:idcard" element={<UserRoute><Editstudentdata /></UserRoute>} />
            <Route path="/studentreport/:idcard/:grade/:room" element={<UserRoute><Showreport /></UserRoute>} />
            <Route path="/schoolreport/:schoolid" element={<UserRoute><Schoolreport /></UserRoute>} />
            <Route path="/teacherdata/:username" element={<UserRoute><TeacherData /></UserRoute>} />
            <Route path="/admin" element={<AdminRoute><AdminPage /></AdminRoute>} />
        </Routes>
    )
}

export default MyRoute;