import { Box, Heading, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { nicheData } from "utils/data";
import NicheBox from "./NicheBox";

const Niche = () => {
  return (
    <Box bg={"main.yellow"} px={"150px"} pt={"131px"} pb={"125px"}>
      <VStack maxW={"683px"} mx={"auto"} textAlign={"center"} px={5}>
        <Heading variant={"articleHeading"} color={"#262725"}>
          Powerful Asset Management Platform by the{" "}
          <span style={{ color: "#fff" }}>Anambra State Govt.</span>
        </Heading>
        <Text variant={"xl"}>
          The Asset platform offers a comprehensive suite of features including
          asset allocation, performance tracking and risk management tools.
        </Text>
      </VStack>
      <SimpleGrid columns={3} spacing={"25px"} mt={"72px"}>
        {nicheData.map((item, idx) => (
          <NicheBox key={idx} item={item} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Niche;
