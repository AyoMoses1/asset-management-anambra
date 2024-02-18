//eslint-disable-no-explicit-any
import { Heading, Text, Image, VStack } from "@chakra-ui/react";
import React from "react";

interface Props {
  item: NicheProps;
}

const NicheBox: React.FC<Props> = ({ item }) => {
  return (
    <VStack
      bg={"others.white"}
      px={6}
      py={"61px"}
      borderRadius={"8px"}
      textAlign={"center"}
      boxShadow={"0px 112px 40px 0px #423C1B0D"}
    >
      <Image src={item.image} w={"64px"} h={"64px"} />
      <Heading variant={"h3"}>{item.title}</Heading>
      <Text>{item.data}</Text>
    </VStack>
  );
};

export default NicheBox;
