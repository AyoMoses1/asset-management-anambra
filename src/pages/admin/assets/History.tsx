import {
  Heading,
  Stack,
  Text,
  HStack,
  FormControl,
  Checkbox,
  FormLabel,
  Button,
} from "@chakra-ui/react";
import { CheckIcon } from "icons";
import DashboardLayout from "layouts/DashboardLayout";
import { historyChecks } from "utils/data";
import DropZone from "./DropZone";
import { TEXT_SECONDARY } from "utils/color";

const History = () => {
  return (
    <DashboardLayout>
      <Heading variant={"h3Small"} mb={6}>
        Import History
      </Heading>
      <Stack bg={"#fff"} p={6} maxWidth={"70%"}>
        <Stack gap={"24px"}>
          <Text variant={"small"} color={TEXT_SECONDARY}>
            {`Upload a CSV that contains asset history. The assets and users MUST
            already exist in the system, or they will be skipped. Matching
            assets for history import happens against the asset tag. We will try
            to find a matching user based on the user's name you provide, and
            the criteria you select below. If you do not select any criteria
            below, it will simply try to match on the username format you
            configured in the Admin > General Settings.`}{" "}
          </Text>
          <Text variant={"small"}>
            Fields included in the CSV must match the headers:{" "}
            <strong>Asset Tag, Name, Checkout Date, Checkin Date.</strong> Any
            additional fields will be ignored.
          </Text>
          <Text variant={"small"}>
            Checkin Date: blank or future checkin dates will checkout items to
            associated user. Excluding the Checkin Date column will create a
            checkin date with todays date.
          </Text>
        </Stack>
        <DropZone />
        <Stack spacing={"24px"} my={"24px"}>
          {historyChecks.map((check, idx) => (
            <HStack
              key={idx}
              alignItems={"center"}
              spacing={4}
              justifyContent={"space-between"}
            >
              <FormControl alignItems={"center"} as={HStack}>
                <Checkbox size={"md"} colorScheme="brand" />
                <FormLabel
                  cursor={"pointer"}
                  m={0}
                  fontWeight={400}
                  fontSize={"14px"}
                >
                  {check}
                </FormLabel>
              </FormControl>
            </HStack>
          ))}
        </Stack>
        <Button leftIcon={<CheckIcon />} w={"fit-content"} alignSelf={"end"}>
          Submit
        </Button>
      </Stack>
    </DashboardLayout>
  );
};

export default History;
