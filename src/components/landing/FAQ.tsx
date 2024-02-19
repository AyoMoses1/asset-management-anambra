import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import { faq } from "utils/data";

const Faq = () => {
  return (
    <VStack px={"150px"} py={"91px"}>
      <Heading variant={"articleHeading"}>FAQs</Heading>
      <Text variant={"xl"}>
        Find answers to common questions about our ASSET management platform and
        its features.
      </Text>
      <Accordion w={"100%"}>
        {faq.map((item) => (
          <AccordionItem w={"100%"} bg={"#F4F4F4"} mb={"11px"} borderRadius={4}>
            <AccordionButton>
              <Heading variant={"h4Small"}>{item.question}</Heading>
              <AccordionIcon ml={"auto"} />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text>{item.answer}</Text>
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </VStack>
  );
};

export default Faq;
