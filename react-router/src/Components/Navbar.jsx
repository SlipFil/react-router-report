import React from 'react'
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <Nav variant="pills" defaultActiveKey="/" style={{borderBottom:'2px solid gray', paddingBottom:20, paddingTop:10}}>
        <Nav.Item>
          <Nav.Link href="/"><Link to={"/"} style={{ textDecoration: 'none', color: 'black' }} >Home </Link></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/news"><Link to={"/news"} style={{ textDecoration: 'none', color: 'black' }}>News </Link></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/music"><Link to={"/music"} style={{ textDecoration: 'none', color: 'black' }} >Music </Link></Nav.Link>
        </Nav.Item>
      </Nav>
        </div>
    )
}

export default Navbar
