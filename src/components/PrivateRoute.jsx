import React from "react";
import { Route, Navigate } from "react-router";
import { useAuth } from "../context/AuthContext";

export const PrivateRoute = ({ children }) => {
  const { currentUser } = useAuth();
  return currentUser ? children : <Navigate to="login" />;
};
