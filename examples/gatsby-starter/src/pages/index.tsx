import React from "react";
import { Reshaped } from "reshaped/bundle";
import "reshaped/bundle.css";
import "reshaped/themes/reshaped/theme.css";
import Demo from "../components/Demo";

const Home = () => {
  return (
    <Reshaped theme="reshaped">
      <Demo />
    </Reshaped>
  );
};

export default Home;
