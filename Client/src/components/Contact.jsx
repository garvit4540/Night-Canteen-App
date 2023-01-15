import React from "react";
import { Container, Row, Col, Table, Image } from "react-bootstrap";
import { FiPhoneCall } from "react-icons/fi";
import { ImMobile } from "react-icons/im";
import { AiOutlineMail } from "react-icons/ai";

const Contact = () => {
  return (
    <>
      <Container style={{ marginTop: "50px" }}>
        <Row>
          <Col md={6}>
            <h1>Night Canteen from AJAY CATERERS</h1>
            <p>
            We are enthusiasts who are on the mission of not letting any learner in IITI to face hunger between midnight. We all know most of the students study till late night and the companion of late night studies is sleep and hunger. Well we cannot solve the sleep issue, but here we are to solve the hunger issue. We are the night canteen from AJAY CATERERS which will give you mind refreshing food from 11 A.M. to 2 P.M.
            </p>
            <p>
            Our speciality lies in quick meals like Aloo Parantha etc. However you can also get full diet here like Paneer Butter Masala and all.Refer to the full menu on the website and you can select your favourite dishes there.
            </p>

            <Table striped bordered hover className="text-center">
              <thead>
                <tr>
                  <th className="bg-warning text-center" colSpan={3}>
                    --- Contact Details ---
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <FiPhoneCall />
                  </td>
                  <td>Phone</td>
                  <td>0123-456789</td>
                </tr>
                <tr>
                  <td>
                    <ImMobile />
                  </td>
                  <td>Call</td>
                  <td>1234567890</td>
                </tr>
                <tr>
                  <td>
                    <AiOutlineMail />
                  </td>
                  <td>Email</td>
                  <td>nightcanteenajay@gmail.com</td>
                </tr>
              </tbody>
            </Table>
          </Col>
          <Col md={6}>
            <Image
              src="images/nc.jpeg"
              style={{ width: "100%", height: "100%" }}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contact;
