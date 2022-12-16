import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/js_logo-removebg-preview.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://cz.linkedin.com/in/jakub-štěpánek-0b7813254/en?trk=people-guest_people_search-card" target="_blank"><img src={navIcon1} alt="linkedInIcon" /></a>
              <a href="https://www.facebook.com/jakub.stepanek.144" target="_blank"><img src={navIcon2} alt="facebookIcon" /></a>
              <a href="https://www.instagram.com/stepijakub/" target="_blank"><img src={navIcon3} alt="instagramIcon" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
