import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';

const UpdateAuthor = () => {
  const [data, setData]=useState([])
  const navigate=useNavigate();
  const { id }=useParams();
  const [values,setValues]=useState({
    name: '',
    birthDate: '',
    biography: '',
    
         
  })
  useEffect(()=>{
    axios.get('http://localhost:3000/authors/'+ id)
    .then(res=>{
           setValues(res.data)
    })
    .catch(err=>console.log(err));
  },[])

const handleUpdate=(event)=>{
  event.preventDefault()
  axios.put('http://localhost:3000/authors/'+id,values)
    .then(res=>{
     console.log(res);
    navigate('/authoreLists');
    })
    .catch(err=>console.log(err));
  }
  return (
    <div>
    <div className='d-flex w-100 vh-80 justify-content-center align-item-center bg-light'>
      <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
        <h1>Update a books</h1>
        <form onSubmit={handleUpdate}>
          <div className='mb-2'>
            <label htmlFor='name'>Title:</label>
            <input type='text' name='name' className='form-control' placeholder='Enter name'
          value={values.name}  onChange={e=>setValues({...values,name:e.target.value})}/>
          </div>

          <div className='mb-2'>
            <label htmlFor='email'>birthDate:</label>
            <input type='text' name='name' className='form-control' placeholder='Enter birthDate'
          value={values.birthDate}   onChange={e=>setValues({...values,birthDate:e.target.value})}/>
          </div>

          <div className='mb-3'>
            <label htmlFor='phone'>biography:</label>
            <input type='text' name='name' className='form-control' placeholder='Enter ISBN '
            value={values.biography} onChange={e=>setValues({...values,biography:e.target.value})}/>
          </div>
          <button className='btn btn-success m-2'>Update</button>
          <Link to="/" className='btn btn-primary ms-3'>Back</Link>
        </form>
      </div>

    </div>
</div>
  )
}

export default UpdateAuthor