import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  VStack,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export const SignUp = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { signup, currentUser } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    console.log("hello");
    e.preventDefault();
    try {
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
    } catch {
      setError("Failed to create an user");
    }
    setLoading(false);
  };

  return (
    <VStack border="1px solid #ddd" p="20px" borderRadius="4px" spacing={3}>
      <Stack>
        <Heading>Sign Up</Heading>
      </Stack>
      {currentUser && currentUser.email}
      {error && (
        <Alert status="error">
          <AlertIcon />
          <AlertTitle>{error}</AlertTitle>
        </Alert>
      )}
      <form onSubmit={(e) => handleSubmit(e)}>
        <FormControl isRequired>
          <Stack spacing={3} w="sm">
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input type="email" id="email" required ref={emailRef} />
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input type="password" id="password" required ref={passwordRef} />
            <Button colorScheme="facebook" disabled={loading} type="submit">
              Sign Up
            </Button>
          </Stack>
        </FormControl>
      </form>
    </VStack>
  );
};