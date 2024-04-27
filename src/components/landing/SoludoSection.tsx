import {
  Box,
  Heading,
  Text,
  Button,
  SimpleGrid,
  Image,
} from "@chakra-ui/react";
import gov from "assets/Charles-Soludo.png";
import img from "assets/Frame 2258.svg";
import bgImg from "assets/download.svg";
import { useNavigate } from "react-router-dom";

const SoludoSection = () => {
  const navigate = useNavigate();
  return (
    <Box bg={"main.yellow"} px={"150px"} py={"170px"}>
      <SimpleGrid
        columns={2}
        bg={"#1B1B1B"}
        borderRadius={16}
        pl={"68px"}
        position={"relative"}
        zIndex={2}
        bgRepeat={"no-repeat"}
      >
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          bgImage={bgImg}
          bgRepeat={"no-repeat"}
          filter={"brightness(15%)"} // Adjust the brightness to make it faint grey
          zIndex={-1}
          borderRadius={16}
        />
        <Box
          display={"flex"}
          justifyContent={"center"}
          flexDirection={"column"}
        >
          <Heading variant={"articleHeading"} mb={"8px"} color={"#ffffff"}>
            Were assets assigned to you?
          </Heading>
          <Text variant={"xl"} mb={"45px"} color={"#ffffff"}>
            Sign up to monitor and track them
          </Text>
          <Button
            variant={"primary"}
            width={"167px"}
            color={"#121619"}
            fontWeight={600}
            onClick={() => navigate("/login")}
          >
            Sign up
          </Button>
        </Box>
        <Box display={"flex"} justifyContent={"end"} position={"relative"}>
          <Image src={gov} position={"absolute"} left={-120} bottom={0} />
          <Image src={img} />
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default SoludoSection;
