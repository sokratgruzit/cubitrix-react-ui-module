import { storiesOf } from "@storybook/react";
import React, { useState, useEffect } from "react";

import "../assets/css/main-theme.css";
import { LoadingScreen } from "../components/LoadingScreen";

const stories = storiesOf("LoadingScreen", module);

stories.add("LoadingScreen", () => {
  return <LoadingScreen />;
});
