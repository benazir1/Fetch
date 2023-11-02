import axios from "axios";
import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import './Book.css'

function Books(props) {
  const [allBooks, setAllBooks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:3000/books").then((response) => {
      setAllBooks(response.data);
    });
  }, []);
 
  const handleDelete=(id)=>{
    axios.delete(`http://localhost:3000/books/${id}`)
    .then(res=>{
         location.reload('/');
    })     
    .catch(err=>console.log(err));

  }
  
  return (
    <>
    <Row className="mt-2">
        <Col md={{ span: 4, offset: 4 }}>
          <Button variant="primary" onClick={() => navigate("/add-book")}>
            Add New Book
          </Button>
        </Col>
      </Row>
     <Row xs={1} md={3} className="g-2">
        {allBooks.map((item) => (
          <Col key={item.id}>
            <Card>
              <Card.Img variant="top" src={item.imageUrl} />
              <Card.Body>
                <Card.Title>Title:{item.Title}</Card.Title>
                <Card.Text>ISBN-Number:{item.Authore}</Card.Text>
                <Card.Text>ISBN-Number:{item.ISBN}</Card.Text>
                <Card.Text>Publication:{item.Publication}</Card.Text>
              </Card.Body>
              <span>
              <Button className="btn" variant="primary" onClick={(e) => navigate(`/updatebook/${item.id}`)}>
            Update
          </Button>
          <Button className="btn" variant="primary" onClick={(e) => handleDelete(item.id)}>
            Delete
          </Button>
          </span>
         
            </Card>
           
          </Col>
        ))}
      </Row>
    </>
  )
}

export default Books