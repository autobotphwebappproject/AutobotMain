import React from "react";
import { Route } from "react-router-dom";
import ServiceHome from "../components/pages/service-center/landing-page/Index";

const serviceRoutes = [
  <Route key="/" index element={<ServiceHome />} />
];

export default serviceRoutes; 