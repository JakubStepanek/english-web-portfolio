import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Body = () => {
    const [text, setText] = useState('');
    return (
        <section className="main" id="aboutMe">
            <Container>
                <Col xl={12} >
                    <TrackVisibility>
                        {({ isVisible }) =>
                            <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                <h1><bold>What can I offer you?</bold></h1>
                                <ul >
                                    <li>Production worker with over three years of industry experience and expirience with maintaining inventory.</li>
                                    <li>I have proven myself to be a valuable asset in the production process.</li>
                                    <li>Gained valuable experience in software development and supported all aspects of production in Preciosa Lustry a.s..</li>
                                    <li>Strong computer skills, including proficiency in Microsoft Office.</li>
                                    <li>Being quick in learning new skills.</li>
                                    <li>Education in IT at the Secondary Technical School in Česká Lípa.</li>
                                    <li>A team player with excellent communication skills.</li>
                                    <li>Colaboration with others to achieve common goals. </li>
                                </ul>
                            </div>}
                    </TrackVisibility>
                </Col>
            </Container>
        </section>
    )
}