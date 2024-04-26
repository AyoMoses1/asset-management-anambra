/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  ButtonGroup,
  Flex,
  HStack,
  Heading,
  Icon,
  IconButton,
  Spacer,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import AuthInput from "components/common/AuthInput";
import { BORDER_LIGHT, DARK, TEXT_SECONDARY, TINT_GREY } from "utils/color";
import {
  assetModelInputs,
  createAssetInputs,
  createAssetInputsTwo,
  createUserInputs,
  createUserInputsTwo,
} from "utils/data";
import { useForm } from "react-hook-form";
import {
  ChevronRightIcon,
  TriangleDownIcon,
  TriangleUpIcon,
} from "@chakra-ui/icons";
import ModalComponent from "components/modals/FormModal";
import { CheckIcon } from "icons";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { useEffect } from "react";

const EditForm = () => {
  const { control } = useForm();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [search] = useSearchParams();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const activeTab = search.get("tab");

  useEffect(() => {
    if (activeTab) return;
    navigate(`${pathname}?tab=information`);
    //eslint-disable-next-line
  }, []);

  const handleTabChange = (event: any) => {
    const text = event.target.innerHTML?.split(" ")[0].toLowerCase();
    navigate(`${pathname}?tab=${text}`);
  };

  return (
    <Box
      bg={"white"}
      p={"24px"}
      maxW={"842px"}
      border={"1px solid"}
      borderColor={BORDER_LIGHT}
      borderRadius={"8px"}
    >
      <HStack justifyContent="space-between" mb={"56px"}>
        <ButtonGroup
          w={"full"}
          maxW={"400px"}
          mx={"auto"}
          p={1}
          bg={TINT_GREY}
          rounded={"sm"}
        >
          <Button
            onClick={handleTabChange}
            bg={activeTab === "information" ? "white" : "transparent"}
            color={activeTab === "invoices" ? "white" : DARK}
            textTransform={"capitalize"}
            flex={1}
          >
            Information
          </Button>
          <Button
            onClick={handleTabChange}
            bg={activeTab === "permissions" ? "white" : "transparent"}
            color={activeTab === "penalties" ? "white" : DARK}
            textTransform={"capitalize"}
            flex={1}
          >
            Permissions
          </Button>
        </ButtonGroup>
      </HStack>
      {createUserInputs().map((input, idx) => (
        <Flex gap={"6px"}>
          <AuthInput
            key={idx}
            isFlexed
            control={control}
            name={input.name}
            mb={4}
            autoComplete={"none"}
            placeholder={input.placeholder}
            isSelect={input.type === "select" ? true : false}
            isIconComponent
            label={input.label}
            type={input.type}
            addNew={input.addNew}
            openAddNewModal={onOpen}
            bg={"transparent"}
            isPassword={input.type === "password"}
            isRequired={input.isRequired}
            rules={{
              required: input.rule,
              minLength: {
                value: input.minLength,
                message: input.message,
              },
            }}
          />
        </Flex>
      ))}
      <Text variant={"xs"} ml={"200px"} color={TEXT_SECONDARY}>
        Accepted filetypes are jupg, webp, png, gif and svg. Max upload size
        allowed is 6144MB
      </Text>
      <Accordion allowMultiple mt={6}>
        <AccordionItem mb={4}>
          {({ isExpanded }) => (
            <>
              <AccordionButton bg={TINT_GREY} _hover={{ bg: TINT_GREY }}>
                {isExpanded ? (
                  <TriangleUpIcon fontSize="12px" />
                ) : (
                  <TriangleDownIcon fontSize="12px" />
                )}
                <Box as="span" flex="1" textAlign="left" ml={4}>
                  OPTIONAL INFORMATION{" "}
                </Box>
              </AccordionButton>
              <AccordionPanel pb={4}>
                {createUserInputsTwo().map((input, idx) => (
                  <Flex gap={"6px"}>
                    <AuthInput
                      key={idx}
                      isFlexed
                      control={control}
                      name={input.name}
                      rightElement={input.rightElement}
                      checkboxData={input.checkboxData}
                      mb={4}
                      autoComplete={"none"}
                      placeholder={input.placeholder}
                      isIconComponent
                      label={input.label}
                      type={input.type}
                      bg={"transparent"}
                      isPassword={input.type === "password"}
                      isRequired={input.isRequired}
                      rules={{
                        required: input.rule,
                        minLength: {
                          value: input.minLength,
                          message: input.message,
                        },
                      }}
                    />
                  </Flex>
                ))}
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
      </Accordion>
      <HStack justifyContent={"space-between"}>
        <Button variant={"outline"}>Cancel</Button>
        <Button leftIcon={<CheckIcon />}>Save</Button>
      </HStack>
      <ModalComponent
        onClose={onClose}
        isOpen={isOpen}
        size="3xl"
        title="Create Asset Model"
      >
        {assetModelInputs().map((input, idx) => (
          <AuthInput
            key={idx}
            isFlexed
            control={control}
            name={input.name}
            autoComplete={"none"}
            placeholder={input.placeholder}
            isIconComponent
            label={input.label}
            type={input.type}
            bg={"transparent"}
            isPassword={input.type === "password"}
            isRequired={input.isRequired}
            rules={{
              required: input.rule,
              minLength: {
                value: input.minLength,
                message: input.message,
              },
            }}
          />
        ))}
        <Flex gap={"8px"} justifyContent={"flex-end"}>
          <Button variant={"outline"} onClick={onClose}>
            Cancel
          </Button>
          <Button leftIcon={<CheckIcon />}>Save</Button>
        </Flex>
      </ModalComponent>
    </Box>
  );
};

export default EditForm;
