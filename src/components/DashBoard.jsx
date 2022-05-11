import { Button, Stack, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../context/AuthContext";

export const DashBoard = () => {
  const { currentUser, logout } = useAuth();
  const [error, setError] = useState();
  const navigate = useNavigate();

  const handleLogout = async () => {
    setError("");
    try {
      await logout();
      navigate("/login");
    } catch {
      setError("Failed to log out");
    }
  };

  return (
    <Stack>
      <Text>Dashboard</Text>

      <Button colorScheme="facebook" onClick={handleLogout}>
        Log out
      </Button>
    </Stack>
  );
};
