import {
  Alert,
  AlertIcon,
  AlertTitle,
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

export const ForgotPassword = () => {
  const emailRef = useRef();
  const { resetPassword } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setMessage("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage("Check your inbox for more instructions");
      navigate("/");
    } catch {
      setError("Failed to reset password");
    }
    setLoading(false);
  };
  return (
    <VStack justifyContent="center">
      <VStack border="1px solid #ddd" p="20px" borderRadius="4px" spacing={3}>
        <Stack>
          <Heading>Password Reset</Heading>
        </Stack>
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
              <Button colorScheme="facebook" disabled={loading} type="submit">
                Reset Password
              </Button>
              <HStack justifyContent="center">
                <Link to="/login">Login</Link>
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
