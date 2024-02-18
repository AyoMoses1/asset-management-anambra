//eslint-disable-no-explicit-any
import { Heading, Text, Image, VStack } from "@chakra-ui/react";
import React from "react";

interface Props {
  item: NicheProps;
}

const TrackCard: React.FC<Props> = ({ item }) => {
  return (
    <VStack
      bg={"#1A1B18"}
      p={4}
      borderRadius={"6px"}
      alignItems={"start"}
      maxW={"222.5px"}
    >
      <Image src={item.image} />
      <Heading variant={"h5"} color={"white"}>
        {item.title}
      </Heading>
      <Text color={"white"} variant="xs">
        {item.data}
      </Text>
    </VStack>
  );
};

export default TrackCard;
