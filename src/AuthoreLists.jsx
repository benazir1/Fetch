import axios from "axios";
import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";


const AuthoreLists = () => {
    const [allauthor, setAllauthor] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:3000/authors").then((response) => {
      setAllauthor(response.data);
    });
  }, []);
 
  const handleDelete=(id)=>{
    axios.delete(`http://localhost:3000/authors/${id}`)
    .then(res=>{
         location.reload('/');
    })     
    .catch(err=>console.log(err));

  }
  return (
    <Row xs={1} md={3} className="g-2">
        {allauthor.map((item) => (
          <Col key={item.id}>
            <Card>
              
              <Card.Body>
                <Card.Title>Name:{item.name}</Card.Title>
                <Card.Text>birthDate:{item.birthDate}</Card.Text>
                <Card.Text>biography:{item.biography}</Card.Text>
               </Card.Body>
              <span>
              <Button className="btn" variant="primary" onClick={(e) => navigate(`/updateauthor/${item.id}`)}>
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
  )
}

export default AuthoreLists