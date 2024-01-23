import React from "react";
import { ErrorInfo } from "react";
import error from "../image/error.jpeg";
export const Error = (props) => {
  const err = ErrorInfo;
  console.log(ErrorInfo);
  return (
    <div style={styles.container}>
      <div style={styles.errorContainer}>
        <h1 style={styles.errorText}>Location Not Supported</h1>
        <p style={styles.errorMessage}>
          Oops! It seems like{" "}
          {props.errorLocation.length > 0
            ? "our services are not available in the requested location :" +
              props.errorLocation
            : "You have entered wrong location"}
          .
        </p>
        <p style={styles.errorMessage}>
          You can try a different location or{" "}
          <Link to="/">return to the homepage</Link>.
        </p>
      </div>
    </div>
  );
};
const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#f8e5d4", // A warm color to match food theme
  },
  errorContainer: {
    maxWidth: "400px",
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  },
  errorText: {
    color: "#e44d26", // A vibrant color for attention
    fontSize: "36px",
    marginBottom: "10px",
  },
  errorMessage: {
    fontSize: "18px",
    marginTop: "0",
    marginBottom: "20px",
    color: "#666",
  },
  image: {
    width: "100%",
    marginTop: "20px",
  },
};
import React from "react";
import { Link } from "react-router-dom";

export const NotFoundPage = () => {
  return (
    <div style={stylesRouter.container}>
      <div style={stylesRouter.errorContainer}>
        <h1 style={stylesRouter.errorText}>404 - Not Found</h1>
        <p style={stylesRouter.errorMessage}>
          Oops! The page you are looking for does not exist.
        </p>
        <p style={stylesRouter.errorMessage}>
          You can <Link to="/">return to the homepage</Link>.
        </p>
        <img
          src={error} // Add an image related to a 404 error
          alt="404 Image"
          style={stylesRouter.image}
        />
      </div>
    </div>
  );
};

const stylesRouter = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#f8d7da", // A color that indicates an error
  },
  errorContainer: {
    maxWidth: "400px",
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  },
  errorText: {
    color: "#721c24", // A color that stands out
    fontSize: "36px",
    marginBottom: "10px",
  },
  errorMessage: {
    fontSize: "18px",
    marginTop: "0",
    marginBottom: "20px",
    color: "#721c24",
  },
  image: {
    width: "100%",
    marginTop: "20px",
  },
};
