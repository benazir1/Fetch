import { useFormik } from 'formik';
import axios from "axios";
import {  useNavigate,Link } from "react-router-dom";
import React from "react";
import  './Book.css'


const AddBook = () => {
  let navigate = useNavigate();
  const validate= values=>{
    const errors ={};
    if(!values.Title){
      errors.Title="*Required Title"
    }
    
    if(!values.Authore){
      errors.Authore="*Required Authore"
    }
    if(!values.ISBN){
      errors.ISBN="*Required ISBN"
    }
    if(!values.Publication){
      errors.Publication="*Required Publication"
    }
    if(!values.imageUrl){
      errors.imageUrl="*Required imageUrl"
    }
    
    return errors;
  }
  const formik = useFormik({
    initialValues: {
      Title: '',
      Authore: '',
      ISBN: '',
      Publication: '',
      imageUrl: '',
      
    },
    validate,
      onSubmit:values =>{
     axios.post("http://localhost:3000/books",formik.values);
     navigate("/");
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
                  placeholder="Enter Your Title Name"
                  value={formik.values.Title}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  name="Title"

                />
                {formik.touched.Title && formik.errors.Title ? <span>{formik.errors.Title}</span>:null}
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter Your Authore Name"
                  value={formik.values.Authore}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  name="Authore"
                />
                 {formik.touched.Authore && formik.errors.Authore ? <span>{formik.errors.Authore}</span>:null}
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter ISBN Number"
                  value={formik.values.ISBN}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  name="ISBN"
                />
                 {formik.touched.ISBN && formik.errors.ISBN ? <span>{formik.errors.ISBN}</span>:null}
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter Publication-Date"
                  value={formik.values.Publication}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  name="Publication"
                />
                 {formik.touched.Publication && formik.errors.Publication ? <span>{formik.errors.Publication}</span>:null}
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter url"
                  value={formik.values.imageUrl}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  name="imageUrl"
                />
                 {formik.touched.imageUrl && formik.errors.imageUrl ? <span>{formik.errors.imageUrl}</span>:null}
              </div>
              <button className='btn btn-success m-2'>ADD BOOKS</button>
          <Link to="/" className='btn btn-primary ms-3'>Back</Link>
             
            </form>
           
          </div>
         
        </div>
    
       {/* <Link to="/" className='btn btn-primary ms-3'>Back</Link>
    */}

    </div>
  )
}
  
export default AddBook