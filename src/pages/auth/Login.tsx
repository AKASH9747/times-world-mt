import { Col, Container, Image, Row } from "react-bootstrap";
import LoginForm from "../../components/forms/LoginForm";
import "../../styles/loginStyles.css";
import loginIllustration from "../../assets/login-screen-image.png";

const Login = () => {
  return (
    <Container fluid className="login-container ">
      <Row className="w-100">
        <Col xs={12} md={8} className="left-column ">
          <div style={{ width: "364px" }}>
            <div className="login-form">
              <h2>Sign In</h2>
              <p>
                New user? <a href="/signup">Create an account</a>
              </p>
            </div>
            <LoginForm />
            <div className=" mt-3 d-flex align-items-center justify-content-center">
              <hr className="hr-line" />
              <p className="mb-0 w-100 mx-3">Or Sign In With</p>
              <hr className="hr-line" />
            </div>
            <div>
              
            </div>
          </div>
        </Col>
        <Col xs={12} md={4} className="right-column">
          <div className="image-container">
            <Image
              src={loginIllustration} // Replace with your custom illustration
              alt="Login Illustration"
              fluid
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
