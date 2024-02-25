/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Container, Flex, Stack, useDisclosure } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import DashboardHeader from "components/layout-components/DashboardHeader";
import SideNavigation from "components/layout-components/SideNavigation";
// import { useTheme } from "@emotion/react";
import { LIGHT_BG } from "utils/color";

interface DashboardLayoutProps {
  children: ReactNode;
}
const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  // const data = useTheme();
  const { onOpen } = useDisclosure();

  // const dispatch = useAppDispatch()

  // GET DASHBOARD CARD
  // const handleGetDashboardCard = async () => {
  //   if(!token) return
  //   try {
  //     const result = await executeGetDashboardCards(token.token)
  //     if(result.status === "error") throw new Error(result.message)
  //     dispatch(populateDashboardCards(result.data))
  //   }
  //   catch(err: any){
  //     console.log("Error:", err.message)
  //   }
  // }

  // useEffect(() => {
  //   handleGetDashboardCard()
  // }, [token])

  // const user = useAppSelector(state => state.accountStore.user)
  // if(!user) return <Navigate replace to={ROUTES.LOGIN_ROUTE} />

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
          <Container maxW={"container.xl"} py={10} w={"full"}>
            {children}
          </Container>
        </Box>
      </Stack>
    </Flex>
  );
};

export default DashboardLayout;
