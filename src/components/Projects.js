import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/System_engineer_icon.png";
import projImg2 from "../assets/img/Vsehost_logo.jpg";
import projImg4 from "../assets/img/maturita_work.png";
import projImg5 from "../assets/img/sps-cl_logo.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const employmentHistoryItems = [
    {
      title: "junior System Engineer",
      description: "Served as a direct assistant to System Engineer, supporting all aspects of production and software development in company.",
      imgUrl: projImg1,
    },
    {
      title: "Web Designer",
      description: "Design & Development",
      imgUrl: projImg2,
    },
  ];
  const educationItems = [
    {
      title: "AUGUST 2017 - MAY 2021", 
      description: "", 
      imgUrl: projImg5
    }
  ];
  const educationProjectsItems = [
    {
      title: "Kniha jizd",
      description: "The meaning of this work is to create online log book which allows factories to monitor movement of their vehicles. Application will use technologies like Node.js for the server side, MariaDB as a database server and Redis like an agent for caching. Whole application is going to be as per MVC architecture.",
      imgUrl: projImg4
    }
  ];




  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>About me</h2>
                  <p><br></br></p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Employment history</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Education</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Projects</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            employmentHistoryItems.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {
                            educationItems.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {
                            educationProjectsItems.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt = "background image"></img>
    </section>
  )
}
