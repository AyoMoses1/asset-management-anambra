import { Container, Stack } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import authBg from "assets/authBg.png";

interface AuthLayoutProps {
  children?: ReactNode;
  smaller?: boolean;
}
const AuthLayout: React.FC<AuthLayoutProps> = ({ children, smaller }) => {
  return (
    <Stack bgImage={authBg} height={"100vh"}>
      <Container mx={"auto"} my={"auto"} maxW={smaller ? "sm" : "lg"}>
        {children}
      </Container>
    </Stack>
  );
};

export default AuthLayout;
