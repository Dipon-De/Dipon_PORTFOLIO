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
              title="House price Prediction"
              description="Welcome to our cutting-edge house price predictor web application! Leveraging the power of Machine Learning, we have developed a sophisticated tool that accurately estimates house prices based on various relevant factors. Whether you're a prospective buyer, seller, or simply curious about property values, our app provides invaluable insights derived from robust data analysis.

              
              But that's not all  we've ensured seamless accessibility by hosting our application on Render.com, ensuring lightning-fast performance and reliability. Whether you're accessing it from your desktop or mobile device, you can rely on a seamless experience.
              
              Empowering users with actionable information, our house price predictor web app revolutionizes the way we engage with real estate. Join us as we redefine the future of property valuation with the fusion of Machine Learning and cutting-edge technology."
              ghLink="https://github.com/Dipon-De/Bengaluru_House_price_prediction"
              demoLink="https://bengaluru-house-price.onrender.com/"
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
              title="Crypto Currency Prediction System"
              description="Welcome to the forefront of financial forecasting with our Crypto Currency Prediction System project! Harnessing the immense potential of Deep Learning, we've developed a state-of-the-art platform that analyzes complex market data to predict cryptocurrency trends with unparalleled accuracy.

              In today's dynamic digital landscape, the value of cryptocurrencies fluctuates rapidly, presenting both opportunities and challenges for investors. Our project seeks to empower users by providing reliable insights into future price movements, enabling informed decision-making in this fast-paced market.
              
              Using advanced Deep Learning algorithms, our system processes vast volumes of historical and real-time data, identifying intricate patterns and trends that traditional methods may overlook. By leveraging cutting-edge technology, we aim to equip users with actionable predictions, enabling them to navigate the crypto market with confidence.
              
              As we continue to push the boundaries of innovation, our Crypto Currency Prediction System stands as a testament to the transformative potential of Deep Learning in the realm of finance. Join us on this journey as we redefine the future of cryptocurrency investment through the fusion of technology and predictive analytics."
              // ghLink="paste github link here "
              // demoLink="Paste demo web site here "
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sentiment}
              isBlog={false}
              title="Sentiment Analysis"
              description="Welcome to our innovative sentiment analysis system, where we harness the power of Machine Learning to analyze live data scraped from Twitter in real-time. In today's interconnected world, social media platforms like Twitter serve as invaluable sources of public opinion and sentiment. Understanding and interpreting this vast ocean of data can provide businesses, researchers, and policymakers with crucial insights into public perception, market trends, and emerging issues.

              Our project goes beyond mere data collection, employing advanced Machine Learning algorithms to dissect and analyze the sentiments expressed within the tweets. By leveraging state-of-the-art Natural Language Processing techniques, we can accurately classify tweets as positive, negative, or neutral, allowing us to gauge the overall sentiment of a particular topic, event, or brand in real-time.
              
              With our system, users can gain actionable insights into public sentiment trends, track the success of marketing campaigns, monitor brand reputation, and even detect emerging crises before they escalate. By scraping live data from Twitter and applying sophisticated Machine Learning models, we offer a dynamic and comprehensive solution to the challenges of sentiment analysis in the digital age.
              
              Join us as we delve into the world of real-time sentiment analysis, where Machine Learning meets social media to unlock invaluable insights and drive informed decision-making."
              // ghLink=" Github link paste here"
              // demoLink="Web site link PASTE HERE "
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={unit}
              isBlog={false}
              title="Unit Converter Android App"
              description="Welcome to our Unit Converter app project, where we seamlessly blend the power of Java and XML to create a versatile and user-friendly tool for converting various units of measurement. In this digital era where efficiency is paramount, our app aims to simplify the often cumbersome task of unit conversion.

              With Java serving as the backbone of our application logic, we've employed its robust features to handle calculations with precision and accuracy. Meanwhile, XML plays a crucial role in defining the layout and structure of our user interface, ensuring a seamless and intuitive experience for our users.
              
              Whether you're converting lengths, weights, volumes, or temperatures, our app provides a comprehensive range of conversion options at your fingertips. From meters to miles, kilograms to pounds, liters to gallons, and Celsius to Fahrenheit, our Unit Converter app covers it all.
              
              Join us on this journey as we explore the synergy between Java and XML to create a powerful yet user-friendly tool that simplifies the complexities of unit conversion, making everyday tasks a breeze."
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
