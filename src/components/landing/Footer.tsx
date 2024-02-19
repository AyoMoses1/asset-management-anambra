import {
  Box,
  Image,
  Heading,
  Link,
  HStack,
  Text,
  Flex,
  IconButton,
} from "@chakra-ui/react";
import footerLogo from "assets/Frame 60082.png";
import { socialLinks } from "utils/data";

const Footer = () => {
  return (
    <Box bg={"#1A1917"} px={"152px"} pt={"79px"} pb={"52px"}>
      <Flex justifyContent={"space-between"} alignItems={"center"} pb={"58px"}>
        <Image src={footerLogo} />
        <Heading variant={"h5"} lineHeight={"20.8px"} color={"#fff"}>
          Contact Us
        </Heading>
        <Heading variant={"h5"} color={"#fff"}>
          Register
        </Heading>
        <HStack>
          {socialLinks.map(
            (link: { icon: string; link: string }, index: number) => (
              <IconButton
                variant={"tertiary"}
                key={`social-icon-${index}`}
                aria-label="social-icon"
                rounded={"full"}
                icon={<Image src={link.icon} />}
              />
            )
          )}
        </HStack>
      </Flex>
      <Box height={"1px"} bgColor={"#FFFFFF1A"}></Box>
      <HStack justifyContent={"space-between"} mt={"52px"} px={"200px"}>
        <Text color={"#fff"} lineHeight={"20.8px"}>
          @ 2023 ASSETS. All rights reserved.{" "}
        </Text>
        <HStack spacing={"32px"}>
          <Link>Privacy Policy</Link>
          <Link>Terms of Service</Link>
          <Link>Cookies Settings</Link>
        </HStack>
      </HStack>
    </Box>
  );
};

export default Footer;
