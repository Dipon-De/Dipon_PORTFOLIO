import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import bitcoin from "../../Assets/Projects/Bitcoin.png";
import sentiment from "../../Assets/Projects/sentiment.png";
import MLB from "../../Assets/Projects/MLB.png";
import MDP from "../../Assets/Projects/MDP.png";
import unit from "../../Assets/Projects/UNIT.png";
import BHP from "../../Assets/Projects/BHP.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MDP}
              isBlog={false}
              title="Multiple Disease Prediction System"
              description="Diabetes and Heart Disease Predictor is a web application built using machine learning and Streamlit. Users enter health data such as
                age, weight, blood pressure, cholesterol levels, and lifestyle habits. The system analyzes this information to predict the risk of developing 
                diabetes and heart disease. These insights help individuals and healthcare professionals take preventive actions, improve decision-making, and
                  promote healthier lifestyles through early awareness, accurate predictions, and an easy-to-use interface for all users."
              // ghLink="https://github.com/Dipon-De/Disease-Predictor"
              // demoLink="https://diseasepredictorpy-8sfntwcuttnacm67nh6tjk.streamlit.app/?utm_medium=social"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={BHP}
              isBlog={false}
              title="Real-Time Anomaly Detection and Alert System"
              description="A real-time anomaly detection system using deep learning that sends instant image alerts via Telegram.
                Engineered a real-time violence detection solution for CCTV leveraging MobileNetV2, automating incident alerts with
                Telegram for rapid security response.
                  It is a lightweight, easily implementable solution requiring minimal hardware constraints.
                  Technology Used: TensorFlow, Keras, OpenCV, Flask, MobileNetV2, Telegram API."
              // ghLink="https://github.com/Dipon-De/Bengaluru_House_price_prediction"
              // demoLink="https://bengaluru-house-price.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MLB}
              isBlog={false}
              title="Hand Gesture Recognition System"
              description="A hand gesture recognition system using computer vision and machine learning 
                to detect and classify gestures from live video or images in real time. It extracts hand features, 
                trains a model to recognize common gestures, and provides a responsive API for integration. Applications include touchless interfaces, 
                assistive tools for accessibility, and intuitive controls for AR/VR and robotics. With high accuracy and low latency."
              // ghLink="https://github.com/Dipon-De/First-website"
              // demoLink="https://dipon-de.github.io/First-website/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitcoin}
              isBlog={false}
              title="Bitcoin Price Forecasting & Trading Strategy Backtesting"
              description="Developed a time series forecasting model using a stacked LSTM network to predict 30-minute Bitcoin closing prices.
                Engineered an LSTM model to forecast Bitcoin prices, resulting in a backtested trading strategy with a 139.92% simulated ROI.
                -Technology Used : LSTM, Keras, TensorFlow, Scikit-learn, Pandas, NumPy, Matplotlib."
              // ghLink="paste github link here "
              // demoLink="Paste demo web site here "
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sentiment}
              isBlog={false}
              title="Real-Time Twitter Sentiment Analysis Web App"
              description="A web application providing real-time sentiment analysis of Twitter data for any keyword. 
                Developed scalable backend workflows for real-time tweet sentiment analysis using Python and machine learning, with 
                integrated data visualization using dynamic charts.
                -Technology Used: Flask, scikit-learn, TextBlob, NLTK, Matplotlib, Requests (scraper API)"
              // ghLink=" Github link paste here"
              // demoLink="Web site link PASTE HERE "
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={unit}
              isBlog={false}
              title="Large Language Models for Medical Purpose"
              description="Developed biomedical QA system by fine-tuning BioGPT with LoRA, optimizing performance and efficiency. 
                Accelerated model performance by 40% and reduced VRAM usage by 75% through strategic fine-tuning of BioGPT 
                with LoRA, enabling deployment on consumer-grade GPUs for wider accessibility. 
                  Modified model configurations to enable CPU compatibility by setting float32 precision in config.json for efficient 
                  deployment and broader hardware support."
              // ghLink=" Github link paste here"
              // demoLink="Web site link PASTE HERE "
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
