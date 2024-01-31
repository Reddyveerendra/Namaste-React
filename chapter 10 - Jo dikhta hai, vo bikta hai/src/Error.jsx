import React from "react";
import styled from "styled-components";
import error from "../image/error.png";
import { Link } from "react-router-dom";
const ErrorPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const ErrorTitle = styled.h1`
  font-size: 4rem;
  margin-bottom: 20px;
  color: #e74c3c; /* Red color, adjust as needed */
`;

const ErrorMessage = styled.p`
  font-size: 1.5rem;
  margin-bottom: 40px;
  color: #333;
`;

const ErrorImage = styled.img`
  width: 300px; /* Adjust the image size as needed */
  height: auto;
`;

const Error = () => {
  return (
    <ErrorPageContainer>
      <ErrorTitle>Oops!</ErrorTitle>
      <ErrorMessage>Something went wrong.</ErrorMessage>
      <Link to="/">
        <h3>click here to go back to main page</h3>
      </Link>

      <ErrorImage src={error} alt="Error Illustration" />
    </ErrorPageContainer>
  );
};

export default Error;
