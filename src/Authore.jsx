import { useFormik } from 'formik';
import axios from "axios";
import {  useNavigate ,Link} from "react-router-dom";
import React from "react";
import  './Book.css'

const Authore = () => {
    let navigate = useNavigate();
    const validate= values=>{
      const errors ={};
      if(!values.name){
        errors.name="*Required name"
      }
      
      if(!values.birthDate){
        errors.birthDate="*Required birthDate"
      }
      if(!values.biography){
        errors.biography="*Required biography"
      }
     
      
      return errors;
    }
    const formik = useFormik({
      initialValues: {
        name: '',
        birthDate: '',
        biography: '',
      
        
      },
      validate,
        onSubmit:values =>{
       axios.post("http://localhost:3000/authors",formik.values);
       navigate("/authoreLists");
        }
     
      });
    console.log(formik.values);
  return (
    <div>
    
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-5">Add A BookDetails</h2>
        <form onSubmit={formik.handleSubmit}>

        <div className="form-group">
       
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your  Name"
              value={formik.values.name}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              name="name"

            />
            {formik.touched.name && formik.errors.name? <span>{formik.errors.name}</span>:null}
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your birthDate"
              value={formik.values.birthDate}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="birthDate"
            />
             {formik.touched.birthDate && formik.errors.birthDate ? <span>{formik.errors.birthDate}</span>:null}
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter biography"
              value={formik.values.biography}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="biography"
            />
             {formik.touched.biography && formik.errors.biography ? <span>{formik.errors.biography}</span>:null}
          </div>
          
          <button  className='btn btn-success m-2'>Add</button>
          <Link to="/" className='btn btn-primary ms-3'>Back</Link>
         
        </form>
       
      </div>
     
    </div>

    


</div>
  )
}

export default Authore