import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const styles = {
    pageContainer: {
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "20px",
      backgroundColor: "#ffffff",
    },
    formContainer: {
      width: "100%",
      maxWidth: "400px",
      padding: "20px",
    },
    logoContainer: {
      width: "320px",
      height: "320px",
      margin: "0 auto 40px",
      position: "relative",
    },
    logo: {
      width: "100%",
      height: "100%",
      objectFit: "contain",
    },

    input: {
      border: "none",
      borderBottom: "1px solid #999",
      borderRadius: "0",
      paddingLeft: "0",
      marginBottom: "20px",
      outline: "none",
      boxShadow: "none",
    },
    loginButton: {
      backgroundColor: "#9F8F83",
      border: "none",
      borderRadius: "5px",
      padding: "10px",
      width: "100%",
      marginTop: "20px",
      marginBottom: "15px",
    },
    signUpButton: {
      backgroundColor: "transparent",
      border: "1px solid #FF6B3D",
      color: "#FF6B3D",
      borderRadius: "20px",
      padding: "8px 30px",
      display: "block",
      margin: "0 auto",
    },
  };

  return (
    <div style={styles.pageContainer}>
      <Container style={styles.formContainer}>
        <div style={styles.logoContainer}>
          <img src="logo.png" alt="Logo" style={styles.logo} />
        </div>

        <Form>
          <Form.Group className="mb-4">
            <Form.Control
              type="text"
              placeholder="Full Name"
              style={styles.input}
              required
            />
          </Form.Group>

          <Form.Group className="mb-4">
            <div className="row">
              <div className="col-md-6">
                <Form.Control
                  type="email"
                  placeholder="Email"
                  style={styles.input}
                  required
                />
              </div>
              <div className="col-md-6">
                <Form.Control
                  type="tel"
                  placeholder="Phone"
                  style={styles.input}
                  required
                />
              </div>
            </div>
          </Form.Group>

          <Button
            style={styles.loginButton}
            onClick={() => navigate("/contact")}
          >
            Login
          </Button>

          <Button
            style={styles.signUpButton}
            onClick={() => navigate("/signup")}
          >
            Sign Up
          </Button>

          <Button
            style={styles.signUpButton}
            onClick={() => navigate("/about")}
          >
            aboutus
          </Button>
          <Button
            style={styles.signUpButton}
            onClick={() => navigate("/coursedetails")}
          >
            coursedetails
          </Button>
          <Button
            style={styles.signUpButton}
            onClick={() => navigate("/pricing")}
          >
            pricing
          </Button>
          <Button style={styles.signUpButton} onClick={() => navigate("/faq")}>
            FAQ
          </Button>
          <Button
            style={styles.signUpButton}
            onClick={() => navigate("/mentors")}
          >
            Mentors
          </Button>
          <Button
            style={styles.signUpButton}
            onClick={() => navigate("/article")}
          >
            Articles
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default Login;
