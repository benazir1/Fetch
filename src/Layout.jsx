import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { Routes, Route,useNavigate } from "react-router-dom";
import AuthoreList from './AuthoreList'
import AddBook from "./AddBook";
import Authore from './Authore';
import UpdateBook from './UpdateBook';
import UpdateAuthor from './UpdateAuthor';
import AuthoreLists from './AuthoreLists'

function Layout(props) {
  const navigate=useNavigate();
  return (
    <div>
      <Navbar expand="lg" variant="dark" bg="success">
          <Container>
            <Navbar.Brand >Library Management</Navbar.Brand>
   <Row className="mt-2">
  <Col md={{ span: 4, offset: 4 }}>
  <Button variant="primary" onClick={() => navigate("/authore")}>
    AuthoreList
  </Button>
</Col>
</Row>
          </Container>
        </Navbar>
      <Container>{props.children}</Container>
      <Routes>
     
      <Route path="/updatebook/:id" element={<UpdateBook />}></Route>
       <Route path="/add-book" element={<AddBook/>}></Route>
       <Route path="/authore" element={<Authore />}></Route>
       <Route path="/authoreList" element={<AuthoreList/>}></Route>
       <Route path="/updateauthor/:id" element={<UpdateAuthor/>}></Route>
       <Route path="/authoreLists" element={<AuthoreLists/>}></Route>
       
        </Routes>
    </div>
  )
}

export default Layout