/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Flex, Text } from "@chakra-ui/react";
import InfoCard from "./InfoCard";

interface InfoProps {
  profile: any;
  buttons: string[];
}
const Info: React.FC<InfoProps> = ({ profile, buttons }) => {
  return (
    <Flex
      style={{ padding: "0px !important" }}
      textAlign={"start"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Box width={"60%"}>
        {Object.entries(profile).map(([key, value]) => (
          <Flex key={key} py={11}>
            <Text
              fontWeight={600}
              textTransform={"capitalize"}
              width={"40%"}
              variant={"small"}
              color={"#171414"}
            >
              {key === "lastLogin"
                ? "last login"
                : key === "createdAt"
                ? "Created at"
                : key}
            </Text>
            <Text variant={"small"} color={"#000"}>
              {value as number}
            </Text>
          </Flex>
        ))}
      </Box>
      <InfoCard buttons={buttons} />
    </Flex>
  );
};

export default Info;
