import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Form, Button } from "react-bootstrap";

const Signup = () => {
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
      width: "220px",
      height: "220px",
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
    signUpButton: {
      backgroundColor: "#9F8F83",
      border: "none",
      borderRadius: "5px",
      padding: "10px",
      width: "100%",
      marginTop: "20px",
    },
    startText: {
      fontSize: "40px",
      fontWeight: "bold",
      color: "#5D4037",
      marginBottom: "10px",
      textAlign: "center",
    },
  };

  return (
    <div style={styles.pageContainer}>
      <Container style={styles.formContainer}>
        <div style={styles.logoContainer} className="mb-5">
          <span style={styles.startText} className="ps-5 ms-3">
            START
          </span>
          {/* <img src="logo.png" alt="Logo" style={styles.logo} /> */}
        </div>

        <Form className="my -5">
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="*Full Name"
              style={styles.input}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control
              type="email"
              placeholder="*Email"
              style={styles.input}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control
              type="tel"
              placeholder="*Phone"
              style={styles.input}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="*School Name"
              style={styles.input}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="*Village/Town"
              style={styles.input}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="District (optional)"
              style={styles.input}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control
              type="password"
              placeholder="*Password"
              style={styles.input}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control
              type="password"
              placeholder="*Confirm Password"
              style={styles.input}
              required
            />
          </Form.Group>

          <Button style={styles.signUpButton}>Sign Up</Button>
        </Form>
      </Container>
    </div>
  );
};

export default Signup;
