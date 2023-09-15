import React from "react";
import background from "../assets/kabanner.png";
import feed2 from "../assets/feed2.png";
import feed1 from "../assets/feed1.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Button from "react-bootstrap/Button";
import Chatbot from "../components/Chatbot";
import { BsRobot } from "react-icons/bs";
import {useNavigate} from "react-router-dom";

const Home1 = ({ isbotActive, toggleBotStatus }) => {
  const navigate = useNavigate();

  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${background})`,
          height: "65vh",
          width: "100%",

          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
        }}
      >
        <h1>hi</h1>
      </div>
      <Container className="align-items-center text-center pt-5 pb-5">
        <h1 className="text-left mb-5"> Buy Natural Products</h1>
        <Row>
          <Col style={{ border: "1px solid black", padding: "3% 2% 3% 2%" }}>
            <Image src={background} fluid className="mt-5 mb-5" />
            <hr />
            <h4>Chayavanprash (Leyham)</h4>
            <h5>Boosts Immunity, Strength and Longetivity</h5>
            <h5> ₹140.00</h5>
            <br />
            <Button variant="success">Success</Button>
          </Col>
          <Col
            style={{
              marginLeft: "2%",
              marginRight: "2%",
              border: "1px solid black",
              padding: "3% 2% 3% 2%",
            }}
          >
            <Image src={background} fluid className="mt-5 mb-5" />
            <hr />
            <h4>Chayavanprash (Leyham)</h4>
            <h5>Boosts Immunity, Strength and Longetivity</h5>
            <h5> ₹140.00</h5>
            <br />
            <Button variant="success">Success</Button>
          </Col>
          <Col
            style={{
              marginLeft: "2%",
              marginRight: "2%",
              border: "1px solid black",
              padding: "3% 2% 3% 2%",
            }}
          >
            <Image src={background} fluid className="mt-5 mb-5" />
            <hr />
            <h4>Chayavanprash (Leyham)</h4>
            <h5>Boosts Immunity, Strength and Longetivity</h5>
            <h5> ₹140.00</h5>
            <br />
            <Button variant="success">Success</Button>
          </Col>
          <Col style={{ border: "1px solid black", padding: "3% 2% 3% 2%" }}>
            {" "}
            <Image src={background} fluid className="mt-5 mb-5" />
            <hr />
            <h4>Chayavanprash (Leyham)</h4>
            <h5>Boosts Immunity, Strength and Longetivity</h5>
            <h5> ₹140.00</h5>
            <br />
            <Button variant="success">Success</Button>
          </Col>
        </Row>
        <br />
        <br />
        <Button variant="success" style={{ padding: "1% 2% 1% 2%" }}>
          Buy More
        </Button>
      </Container>
      <hr style={{ margin: "0" }} />
      <div
        style={{
          backgroundColor: "rgb(230,230,230 )",
          padding: "0",
          margin: "0",
        }}
      >
        <Container style={{ padding: "5% 0% 5% 0%" }}>
          <Row>
            <Col
              style={{
                //   border: "1px solid black",
                //   marginRight: "3%",
                backgroundImage: `url(${feed2})`,
                backgroundSize: "contain",
                background: "cover",
                backgroundRepeat: "no-repeat",
                height: "40vh",

                marginRight: "1%",
              }}
            >
              <div
                style={{
                  textAlign: "center",
                  marginTop: "14%",
                  color: "white",
                }}
              >
                <h1>Ask our vaidyas</h1>
                <h4>"Sarve Santu Nirmaya"</h4>
                <button
              onClick={() => navigate("/videos")}
                  style={{
                    padding: "1% 2% 1% 2%",
                    backgroundColor: "white",
                    color: "black",
                  }}
                >
                  Meet our Experts
                </button>
              </div>
            </Col>
            <Col
              style={{
                //   border: "1px solid black",
                //   marginLeft: "3%",
                backgroundImage: `url(${feed1})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                height: "auto",
                width: "100%",
                marginLeft: "1%",
              }}
            >
              <div
                style={{
                  textAlign: "center",
                  marginTop: "14%",
                  color: "white",
                }}
              >
                <h1>Academy</h1>
                <h4>"Thamaso Ma Jyothirgamaya"</h4>
                <button
                 onClick={() => navigate("/videos")}
                  style={{
                    padding: "1% 2% 1% 2%",
                    backgroundColor: "white",
                    color: "black",
                  }}
                >
                  Learn Ayurveda
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <hr style={{ margin: "0" }} />
      {isbotActive && <Chatbot toggleBotStatus={toggleBotStatus} />}
      {!isbotActive && (
        <div
          className="fixed bottom-4 right-4 rounded-full w-16 h-16 bg-sky-500 flex justify-center items-center"
          onClick={() => {
            toggleBotStatus();
          }}
        >
          <BsRobot size={24} color="white" />
        </div>
      )}
    </div>
  );
};

export default Home1;
