import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const About = () => {
  return (
    <>
      <Container style={{ marginTop: "50px" }}>
        <h1>WHO WE ARE</h1>
        <p>
          We are enthusiasts who are on the mission of not letting any learner in IITI to face hunger between midnight. We all know most of the students study till late night and the companion of late night studies is sleep and hunger. Well we cannot solve the sleep issue, but here we are to solve the hunger issue. We are the night canteen from AJAY CATERERS which will give you mind refreshing food from 11 A.M. to 2 P.M.
        </p>
        <h1>Our Speciality</h1>
        <Row>
          <Col md={6}>
            <p>
             Our speciality lies in quick meals like Aloo Parantha etc. However you can also get full diet here like Paneer Butter Masala and all.Refer to the full menu on the website and you can select your favourite dishes there.
            </p>
          </Col>
          <Col md={6}>
            <p>
            Food is what people and animals eat to live. Every organism needs energy to carry on with the process of living which comes from food. Food usually comes from animals and plants. It is eaten by living things to provide energy and nutrition. Food contains the nutrition that people and animals need to be healthy. The consumption of food is normally enjoyable to humans.
            </p>
          </Col>
        </Row>
        <Row>
          <h1>Our Cheif</h1>
          <Col md={3}>
            Our chiefs came all the way from Punjab to here to provide nice punjabi spicy meals which will keep you at the edge of your seat. 
          </Col>
          <Col md={3}>
          Our chiefs came all the way from Punjab to here to provide nice punjabi spicy meals which will keep you at the edge of your seat. 
          </Col>
          <Col md={3}>
          Our chiefs came all the way from Punjab to here to provide nice punjabi spicy meals which will keep you at the edge of your seat. 
          </Col>
          <Col md={3}>
          Our chiefs came all the way from Punjab to here to provide nice punjabi spicy meals which will keep you at the edge of your seat. 
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default About;
