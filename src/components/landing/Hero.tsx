import {
  SimpleGrid,
  Box,
  Image,
  Heading,
  Text,
  Button,
  HStack,
} from "@chakra-ui/react";
import logo from "assets/logo.svg";
import h1 from "assets/h1.png";
import h2 from "assets/h2.png";
import h3 from "assets/h3.png";
import h4 from "assets/h4.png";
import h5 from "assets/h5.png";
import h6 from "assets/h6.png";
import h7 from "assets/h7.png";

const Hero = () => {
  return (
    <Box bgColor={"#1E2124"} position={"relative"}>
      <Image src={logo} position={"absolute"} left={"34px"} top={"21px"} />
      <SimpleGrid
        columns={[2]}
        spacing={[10, 10, 20, 0]}
        py={[`10`, `10`, 20, `0`]}
      >
        <HStack px={["24px", "24px", "100px"]}>
          <Box>
            <Heading variant={"h1"} mb={[3, 3, 4]} className="gradient-text">
              Empowering the state through effective asset management{" "}
            </Heading>
            <Text color={"others.white"} className="text-grad-hero" position={"relative"}>
              The Anambra State Asset Management platform provides real-time
              tracking and management solutions to help optimally manage the
              government's resources, promote accountability and streamline
              operations.
            </Text>
            <HStack
              flexDirection={["column", "row"]}
              mt={9}
              mb={["24px", "40px"]}
            >
              <Button w={["full", "full", "initial"]}>Get started</Button>
              <Button
                w={["full", "full", "initial"]}
                variant={"tertiary"}
                bg={"#46443B"}
              >
                Learn more
              </Button>
            </HStack>
          </Box>
        </HStack>
        <Box display={"flex"} justifyContent={"end"}>
          <SimpleGrid columns={1} spacing={"16px"} mr={"18px"}>
            <Image src={h1} />
            <Image src={h3} />
            <Image src={h5} />
            <Image src={h7} />
          </SimpleGrid>
          <SimpleGrid>
            <Image src={h2} />
            <Image src={h4} />
            <Image src={h6} />
          </SimpleGrid>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default Hero;
