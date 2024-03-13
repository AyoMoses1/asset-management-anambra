import { Box, Flex, Text } from "@chakra-ui/react";
import InfoCard from "./InfoCard";

const Info = () => {
  const profile = {
    name: "Ayo Moses",
    username: "Testser",
    email: "ayomoses111@gmail.com",
    lastLogin: "8927439220-44",
    createdAt: "2024-02-01 (0 years, 0 months and 19 days)",
  };

  return (
    <Flex
      style={{ padding: "0px !important" }}
      textAlign={"start"}
      justifyContent={"space-between"}
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
              {value}
            </Text>
          </Flex>
        ))}
      </Box>
      <InfoCard />
    </Flex>
  );
};

export default Info;
