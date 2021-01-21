import React from "react";
import styled from "styled-components";
import { theme } from "../pages/_app";

const Loader = () => {
  return (
    <LoaderWrapper>
      <h1>Loading...</h1>
    </LoaderWrapper>
  );
};

const LoaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: ${theme.colors.secondary};
`;

export default Loader;
