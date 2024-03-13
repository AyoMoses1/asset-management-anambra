import { Box, Flex, Text } from "@chakra-ui/react";
import InfoCard from "./InfoCard";

const Info = () => {
  const profile = {
    status: "Archived",
    mda: "ANAMBRA MDA",
    assetName: "Office mouse",
    serial: "9874nv93745b3",
    category: "Office Equipment",
    model: "Input Devices",
    modelNo: "8927439220-44",
    byod: "Yes",
    purchaseDate: "2024-02-01 - 0 years, 0 months and 19 days",
    purchaseCost: "5,000.00",
    orderNumber: "#974395393847",
    supplier: "Logitech",
    warranty: "6 months",
    warrantyExpires: "2024-08-01 -- 6 months 2 weeks from now",
    eolRate: "0 months",
    eolDate: "2024-08-01 -- 6 months 2 weeks from now ",
  };

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
