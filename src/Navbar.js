import React , { useState } from "react";
import { Navbar, Nav, Button, Container, Row, Col } from "react-bootstrap";
import "./Header.css"; // Optional: for custom styling

//const Header = () => {
  function Header() {
    const [activeTab, setActiveTab] = useState('Start Renewal');
  
    const handleTabClick = (tabName) => {
      setActiveTab(tabName);
    };
  return (
    <div className="header-container">
      <Container fluid>
        {/* First Row: Title */}
        <Row>
          <Col className="d-flex justify-content-between align-items-center py-2">
            <Navbar.Brand href="#home" className="brand-title">
              <span className="circle-icon">⏳</span> 
              Renewal Processing System
            </Navbar.Brand>
            <div className="d-flex align-items-center">
              <Navbar.Text className="welcome-text">
                Welcome, User1
              </Navbar.Text>
              <Button variant="primary" className="logout-btn">Logout</Button>
            </div>
          </Col>
        </Row>
        
        {/* Second Row: Tabs */}
        <Row className="mt-2">
          <Col className="d-flex">
            <Nav className="justify-content-start">
              <Nav.Link href="#start-renewal" className={activeTab === 'Start Renewal' ? 'active text-primary' : ''}
                  onClick={() => handleTabClick('Start Renewal')}>Start Renewal</Nav.Link>
              <Nav.Link href="#show-differences" className={activeTab === 'Show Differences' ? 'active text-primary' : ''}
                  onClick={() => handleTabClick('Show Differences')}>Show Differences</Nav.Link>
            </Nav>
          </Col>
        </Row>
      </Container>
    </div>
  );
  }
//};

//export default NavBar;
export default Header;
