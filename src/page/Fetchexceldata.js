import React, { useState } from "react";
import { Button, Container, Form} from "react-bootstrap";
import *as xlsx from 'xlsx';
import axios from "axios";
import Swal from "sweetalert2";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import Navbartop from "../components/Navbar_top";
import './Fetchexceldata.css';


function Fetchexceldata() {

   

   const [excelData, setExcelData] = useState([]);

   const readExcel = async (e) => {
      const file = e.target.files[0];
      const data = await file.arrayBuffer(file);
      const excelfile = xlsx.read(data);
      const excelsheet = excelfile.Sheets[excelfile.SheetNames[0]];
      const exceljson = xlsx.utils.sheet_to_json(excelsheet);
      console.log(exceljson);
     
      setExcelData(exceljson);
   }
   const columns = [
      { dataField: "stdidcard", text: "รหัสบัตรประชาชน"  ,  headerStyle:  {backgroundColor: "#25383C", color: "white" ,textAlign:"center" ,fontWeight:"500" ,bordeRadius:"3px"} },
      { dataField: "stdid", text: "รหัสนักเรียน" ,  headerStyle:  {backgroundColor: "#25383C", color: "white" ,textAlign:"center",fontWeight:"500"}  },
      { dataField: "sex", text: "คำนำหน้า" ,  headerStyle:  {backgroundColor: "#25383C", color: "white" ,textAlign:"center",fontWeight:"500"} },
      { dataField: "f_name", text: "ชื่อจริง" ,  headerStyle:  {backgroundColor: "#25383C", color: "white" ,textAlign:"center",fontWeight:"500"} },
      { dataField: "l_name", text: "นามสกุล" ,  headerStyle:  {backgroundColor: "#25383C", color: "white" ,textAlign:"center",fontWeight:"500"} },
      { dataField: "grade", text: "ระดับชั้น" ,  headerStyle:  {backgroundColor: "#25383C", color: "white" ,textAlign:"center",fontWeight:"500"} },
      
   ]
   const authtoken = localStorage.token
   const formSubmit = (e) => {
      e.preventDefault();
      // console.log(excelData)
      console.log(JSON.stringify(excelData))

      console.log(excelData)

      axios.post(`${process.env.REACT_APP_API}/excelsubmit`, excelData,
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
            console.log(response)
         })
         .catch((err) => {
            Swal.fire({
               icon: "error",
               text: err.response.data.error,
               confirmButtonColor: "#EF1717",
            });;
         });
   }

   return (
      <div>
         <Navbartop/>
         <Container className="content" style={{marginTop:"80px"}}>
            <div className="row fthight">
               <div className="col-md-4 ">
                  <h3 className='mt-3'>เพิ่มรายชื่อนักเรียน</h3>
                  <label className="form-label">File </label>
                  <input type="file" className="form-control" onChange={(e) => readExcel(e)} />
               </div>

               <div className="col-md-12 bg-excel">

                  <Form onSubmit={formSubmit}>
                    
                     <BootstrapTable striped hover size="sm" 
                        keyField="idcard"
                        data={excelData}
                        columns={columns}
                        pagination={paginationFactory()}
                     />
                    <div className="d-flex justify-content-center mb-4">
                    <Button type="submit" variant="outline-success">บันทึกข้อมูล</Button>
                    </div>
                     
                  </Form>

               </div>
            </div>
         </Container>
      </div>
   );

}
export default Fetchexceldata;