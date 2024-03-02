/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Box,
  Container,
  Flex,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import React, { ReactNode } from "react";
import DashboardHeader from "components/layout-components/DashboardHeader";
import SideNavigation from "components/layout-components/SideNavigation";
import { LIGHT_BG } from "utils/color";


interface DashboardLayoutProps {
  children: ReactNode;
}
const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const { onOpen } = useDisclosure();

  return (
    <Flex h={"100vh"} w={"full"} overflowX={"hidden"}>
      <SideNavigation />
      <Stack
        flex={1}
        bg={LIGHT_BG}
        w={"full"}
        height={"full"}
        pos={"relative"}
        sx={{ overflowX: "hidden" }}
      >
        <DashboardHeader onOpen={onOpen} />
        <Box
          flex={1}
          h={`calc(100vh-93px)`}
          w={"full"}
          sx={{ overflowX: "hidden" }}
        >
          <Container maxW={"container.xl"} py={"30px"} w={"full"}>
            {children}
          </Container>
        </Box>
      </Stack>
    </Flex>
  );
};

export default DashboardLayout;
