
import './App.css';
import {Offcanvas, Button, ListGroup} from "react-bootstrap";
import {useState} from "react";


function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="App">



      <>
        <Button variant="primary" onClick={handleShow}>
          Show menu
        </Button>

        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <ListGroup as="ul">
              <ListGroup.Item as="li" active>
                Profile
              </ListGroup.Item>
              <ListGroup.Item as="li">News</ListGroup.Item>
              <ListGroup.Item as="li" >Music</ListGroup.Item>
              <ListGroup.Item as="li">Settings</ListGroup.Item>
            </ListGroup>

          </Offcanvas.Body>
        </Offcanvas>
      </>

    </div>
  );
}

export default App;
