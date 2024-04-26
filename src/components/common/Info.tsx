/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Text,
} from "@chakra-ui/react";
import InfoCard from "./InfoCard";
import { TINT_GREY } from "utils/color";

interface InfoProps {
  profile: any;
  buttons: string[];
  extraInformation?: boolean;
  extraData: any;
}
const Info: React.FC<InfoProps> = ({
  profile,
  buttons,
  extraInformation,
  extraData,
}) => {
  console.log({ extraData });
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
        {extraInformation && (
          <>
            <Accordion allowMultiple>
              <AccordionItem>
                <AccordionButton pl={0} width={"100%"} border={"none"}>
                  <Flex width={"52%"}>
                    <Text
                      fontWeight={600}
                      textTransform={"capitalize"}
                      variant={"small"}
                      color={"#171414"}
                      mr={"auto"}
                    >
                      {extraData.name}
                    </Text>
                    <Text variant={"small"} color={"#000"}>
                      {extraData.value}
                    </Text>
                  </Flex>
                  <AccordionIcon ml={"auto"} />
                </AccordionButton>
                <AccordionPanel>
                  <Box bg={TINT_GREY} width={"100%"}>
                    {extraData.optionalInformation.map((item:any, idx:number) => (
                      <Flex key={idx} py={11} width={"30%"} mx={"auto"}>
                        <Text
                          fontWeight={600}
                          textTransform={"capitalize"}
                          variant={"small"}
                          color={"#171414"}
                          mr={4}
                        >
                          {item.title}
                        </Text>
                        <Text variant={"small"} color={"#000"}>
                          {item.value}
                        </Text>
                      </Flex>
                    ))}
                  </Box>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </>
        )}
      </Box>
      <InfoCard buttons={buttons} />
    </Flex>
  );
};

export default Info;
