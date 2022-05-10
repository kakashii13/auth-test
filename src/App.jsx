import { Stack } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./components/Login";
import { SignUp } from "./components/SignUp";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Stack h="100%" alignItems="center" justifyContent="center">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </Stack>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
