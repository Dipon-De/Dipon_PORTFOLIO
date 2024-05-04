import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Dipon De </span>
            from <span className="purple"> Khargapur, India.</span>
            <br />
            I am currently a student of B.P. Poddar Institute of Management and Technology
            {/* <br />
            Write anything About yourself
            <br /> */}
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Cricket & volleyball
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Human is made by his belief. As he believes, so he is"{" "}
          </p>
          <footer className="blockquote-footer">Bhagavad Gita</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
