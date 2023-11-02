
import './App.css'
import Books from './Books'
import Layout from './Layout'
import AddBook from "./AddBook";
import Admin from "./Admin";
import UpdateBook from "./UpdateBook";
import { Routes, Route,useNavigate } from "react-router-dom";


function App() {
  

  return (
    < div >
    <Layout>
    
    <Admin/>
    <Routes>
        <Route path="/" element={<Books />}></Route>
      
       <Route path="/updatebook/:id" element={<UpdateBook />}></Route>
        </Routes>
    </Layout>
      
    </div>
  )
}

export default App
