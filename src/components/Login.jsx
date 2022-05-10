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
import React, { useRef } from "react";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <Stack>
      <VStack border="1px solid #ddd" p="20px" borderRadius="4px" spacing={3}>
        <Stack>
          <Heading>Log In</Heading>
          {`User: ${currentUser}`}
        </Stack>
        <FormControl>
          <Stack spacing={3} w="sm">
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input type="email" id="email" />
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input type="password" id="password" />
            <Button colorScheme="facebook">Log In</Button>
            <Link to="/">
              <Text textAlign="center">Forgot Password?</Text>
            </Link>
          </Stack>
        </FormControl>
      </VStack>
      <Text>
        Need an account?
        <span>
          <Link to="/signup" bg="blue">
            Sign Up
          </Link>
        </span>
      </Text>
    </Stack>
  );
};
