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
              description="Introducing our groundbreaking web application, designed to revolutionize health monitoring and disease prevention: the Diabetes and Heart Disease Predictor. Leveraging the power of Machine Learning, our app provides users with personalized insights into their risk factors for both diabetes and heart disease. Hosted on Streamlit, an intuitive platform for building and deploying data-driven applications, our tool offers a seamless and user-friendly experience.

              By simply inputting relevant health data, such as age, weight, blood pressure, cholesterol levels, and lifestyle habits, users gain access to a comprehensive analysis of their current health status. Our advanced algorithms analyze this data to generate accurate predictions regarding the likelihood of developing diabetes and heart disease in the future. Armed with this knowledge, individuals can take proactive steps to mitigate their risk factors and lead healthier lives.
              
              Whether you're a healthcare professional seeking to empower your patients with actionable insights or an individual looking to take control of your own health journey, our Diabetes and Heart Disease Predictor is your trusted companion. Join us in harnessing the power of Machine Learning to transform healthcare and promote wellness for all."
              ghLink="https://github.com/Dipon-De/Disease-Predictor"
              demoLink="https://diseasepredictorpy-8sfntwcuttnacm67nh6tjk.streamlit.app/?utm_medium=social"
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
              title="Maa Laxmi Bhandar"
              description="Introducing our streamlined shop website, crafted with efficiency and hosted on GitHub Pages for seamless accessibility. Built in under three hours, this platform offers a hassle-free shopping experience without compromising on functionality. With a minimalist design approach, browsing through our products is intuitive and effortless. Whether you're looking for fashion essentials, tech gadgets, or home decor, our website showcases a curated selection to meet diverse needs. Leveraging GitHub Pages ensures swift loading times and reliable performance, making shopping convenient from any device. Experience the convenience of online shopping with our quick-to-launch, user-friendly shop website, designed to cater to your needs in record time."
              ghLink="https://github.com/Dipon-De/First-website"
              demoLink="https://dipon-de.github.io/First-website/"              
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
