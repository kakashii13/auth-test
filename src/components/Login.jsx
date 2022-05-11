import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login, currentUser } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    console.log("hello");
    e.preventDefault();
    try {
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      navigate("/");
    } catch {
      setError("Failed to create an user");
    }
    setLoading(false);
  };
  return (
    <VStack justifyContent="center">
      <VStack border="1px solid #ddd" p="20px" borderRadius="4px" spacing={3}>
        <Stack>
          <Heading>Log In</Heading>
        </Stack>
        <form onSubmit={(e) => handleSubmit(e)}>
          <FormControl isRequired>
            <Stack spacing={3} w="sm">
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input type="email" id="email" required ref={emailRef} />
              <FormLabel htmlFor="password">Password</FormLabel>
              <Input type="password" id="password" required ref={passwordRef} />
              <Button colorScheme="facebook" disabled={loading} type="submit">
                Log In
              </Button>
              <HStack justifyContent="center">
                <Link to="/forgot-password">Forgot Password?</Link>
              </HStack>
            </Stack>
          </FormControl>
        </form>
      </VStack>
      <HStack>
        <Text>Need an account?</Text>
        <Link to="/signup">
          <span>Sign Up</span>
        </Link>
      </HStack>
    </VStack>
  );
};
