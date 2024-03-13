import {
  Box,
  Button,
  Flex,
  Heading,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import AuthInput from "components/common/AuthInput";
import DashboardLayout from "layouts/DashboardLayout";
import { BORDER_LIGHT, TINT_YELLOW } from "utils/color";
import {
  assetModelInputs,
  checkoutAssetInputs,
  checkoutAssetInputsThree,
  checkoutAssetInputsTwo,
} from "utils/data";
import ModalComponent from "components/modals/FormModal";
import { AssetsIcon, CheckIcon, UsersIcon } from "icons";
import { useForm } from "react-hook-form";
import { BsMarkerTip } from "react-icons/bs";

const Checkout = () => {
  const { control } = useForm();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const tabs = [
    { name: "user", icon: UsersIcon },
    { name: "asset", icon: AssetsIcon },
    { name: "location", icon: BsMarkerTip },
  ];

  console.log({ onOpen });

  return (
    <DashboardLayout>
      <Stack>
        <Heading variant={"h3Small"}>Checkout Assets</Heading>
        <Box
          bg={"white"}
          p={"24px"}
          maxW={"842px"}
          border={"1px solid"}
          borderColor={BORDER_LIGHT}
          borderRadius={"8px"}
        >
          <Heading variant={"h5Small"} textTransform={"uppercase"} mb={"24px"}>
            Asset Tag
          </Heading>
          <Tabs variant="soft-rounded" mb={4}>
            <Flex gap={6} alignItems={"center"} ml={5}>
              <Text
                variant={"small"}
                fontSize={16}
                fontWeight={600}
                textAlign={"end"}
              >
                Checkout destination
              </Text>
              <TabList
                border={`1px solid ${BORDER_LIGHT}`}
                borderRadius={"50px"}
                p={"4px"}
              >
                {tabs.map((tab) => (
                  <Tab
                    textTransform={"capitalize"}
                    gap={"6px"}
                    px={"22.5px"}
                    py={"6px"}
                    _selected={{ bg: TINT_YELLOW }}
                  >
                    <tab.icon />
                    {tab.name}
                  </Tab>
                ))}
              </TabList>
            </Flex>
            <TabPanels>
              <TabPanel>
                {checkoutAssetInputs().map((input, idx) => (
                  <Flex gap={"6px"} w={"100%"}>
                    <AuthInput
                      key={idx}
                      isFlexed
                      control={control}
                      name={input.name}
                      addNew={input.addNew}
                      mb={4}
                      autoComplete={"none"}
                      placeholder={input.placeholder}
                      isIconComponent
                      label={input.label}
                      type={input.type}
                      data={input.data}
                      bg={"transparent"}
                      isSelect={input.type === "select"}
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
              </TabPanel>
              <TabPanel>
                {checkoutAssetInputsTwo().map((input, idx) => (
                  <Flex gap={"6px"} w={"100%"}>
                    <AuthInput
                      key={idx}
                      isFlexed
                      control={control}
                      name={input.name}
                      addNew={input.addNew}
                      mb={4}
                      autoComplete={"none"}
                      placeholder={input.placeholder}
                      isIconComponent
                      label={input.label}
                      type={input.type}
                      data={input.data}
                      bg={"transparent"}
                      isSelect={input.type === "select"}
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
              </TabPanel>
              <TabPanel>
                {checkoutAssetInputsThree().map((input, idx) => (
                  <Flex gap={"6px"} w={"100%"}>
                    <AuthInput
                      key={idx}
                      isFlexed
                      control={control}
                      name={input.name}
                      addNew={input.addNew}
                      mb={4}
                      autoComplete={"none"}
                      placeholder={input.placeholder}
                      isIconComponent
                      label={input.label}
                      type={input.type}
                      data={input.data}
                      bg={"transparent"}
                      isSelect={input.type === "select"}
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
              </TabPanel>
            </TabPanels>
          </Tabs>

          <Flex gap={"8px"} justifyContent={"space-between"} mt={"24px"}>
            <Button variant={"outline"} onClick={onClose}>
              Cancel
            </Button>
            <Button leftIcon={<CheckIcon />}>Checkout</Button>
          </Flex>
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
      </Stack>
    </DashboardLayout>
  );
};

export default Checkout;
