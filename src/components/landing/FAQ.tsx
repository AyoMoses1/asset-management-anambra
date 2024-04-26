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
    <VStack px={"150px"} py={"91px"} position={"relative"}>
      <Heading variant={"articleHeading"} mb={"13px"}>
        FAQs
      </Heading>
      <Text variant={"xl"} mb={"59px"}>
        Find answers to common questions about our ASSET management platform and
        its features.
      </Text>
      <Accordion w={"100%"} allowMultiple={true}>
        {faq.map((item, idx) => (
          <AccordionItem
            key={idx}
            w={"100%"}
            bg={"#F4F4F4"}
            mb={"11px"}
            borderRadius={4}
          >
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
      <Text position={"absolute"} color={"#F7C141"} bottom={0}>
        Governor Chukwuma Soludo is working
      </Text>
    </VStack>
  );
};

export default Faq;
