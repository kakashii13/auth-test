import { Stack } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import { DashBoard } from "./components/DashBoard";
import { Login } from "./components/Login";
import { SignUp } from "./components/SignUp";
import { AuthProvider } from "./context/AuthContext";
import { PrivateRoute } from "./components/PrivateRoute";

function App() {
  return (
    <AuthProvider>
      <Stack h="100%" alignItems="center" justifyContent="center">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/"
            element={
              <PrivateRoute>
                <DashBoard />
              </PrivateRoute>
            }
          />
        </Routes>
      </Stack>
    </AuthProvider>
  );
}

export default App;
