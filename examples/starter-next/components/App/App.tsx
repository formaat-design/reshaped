"use client";

import React from "react";
import { Reshaped } from "reshaped";
import "reshaped/themes/reshaped/theme.css";
import "./App.css";

const App = (props: { children: React.ReactNode }) => {
  return <Reshaped theme="reshaped">{props.children}</Reshaped>;
};

export default App;
