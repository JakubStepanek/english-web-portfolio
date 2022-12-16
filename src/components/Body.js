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
                <Col xl={12}>
                    <TrackVisibility>
                        {({ isVisible }) =>
                            <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                <h1><bold>What can I offer you?</bold></h1>
                                <ul>
                                    <li>As a dedicated and hardworking production worker with over three years of industry experience, I have a strong understanding of how to operate machinery, finalize and package finished products, and maintain inventory.</li>
                                    <li>I have proven myself to be a valuable asset in the production process, consistently meeting deadlines and exceeding expectations.</li>
                                    <li>In my role as a junior system engineer at Preciosa Lustry, I gained valuable experience in software development and supported all aspects of production. This has prepared me for a wide range of technical and production-related roles.</li>
                                    <li>I have strong computer skills, including proficiency in Microsoft Office, and am a quick learner who is able to adapt to new environments and technologies easily.</li>
                                    <li>My education in IT at the Secondary Technical School in Česká Lípa has provided me with a solid foundation in technical concepts and skills, and I am eager to continue learning and growing in my career.</li>
                                    <li>I am a team player with excellent communication skills, and I thrive in environments where I can work collaboratively with others to achieve common goals.</li>
                                </ul>
                            </div>}
                    </TrackVisibility>
                </Col>
            </Container>
        </section>
    )
}