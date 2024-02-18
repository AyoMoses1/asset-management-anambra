import { Box, Flex, Image } from "@chakra-ui/react";
import dsh from "assets/dsh.svg";

const Dashboard = () => {
  return (
    <Box py={"150px"} bg={"#FEFBEE"}>
      <Flex>
        <Image src={dsh} w={"100%"} />
      </Flex>
    </Box>
  );
};

export default Dashboard;
