import { CheckIcon } from "@chakra-ui/icons";
import { Heading, Stack, Box, HStack, Button } from "@chakra-ui/react";
import AlertComponent from "components/common/Alert";
import AuthInput from "components/common/AuthInput";
import DashboardLayout from "layouts/DashboardLayout";
import { useForm } from "react-hook-form";
import { BORDER_LIGHT } from "utils/color";
import { profileInputs } from "utils/data";
import { labelValueMap } from "utils/helpers";

const Profile = () => {
  const { control } = useForm({
    mode: "onSubmit",
  });

  return (
    <DashboardLayout bg={"#FFFCF6"}>
      <Stack spacing={"30px"}>
        <Heading variant={"h3Small"}>Edit Profile</Heading>
        <AlertComponent title={"pending items"} />
        <Box
          bg={"white"}
          p={"24px"}
          maxW={"842px"}
          border={"1px solid"}
          borderColor={BORDER_LIGHT}
          borderRadius={"8px"}
        >
          {profileInputs().map((input, idx) => (
            <AuthInput
              key={idx}
              isFlexed
              isSelect={input.type === "select" ? true : false}
              control={control}
              name={input.name}
              data={input.data ? labelValueMap(input.data) : undefined}
              mb={4}
              autoComplete={"none"}
              placeholder={input.placeholder}
              isIconComponent
              label={input.label}
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
          <HStack justifyContent={"space-between"} mt={"24px"}>
            <Button variant={"outline"}>Cancel</Button>
            <Button leftIcon={<CheckIcon />}>Save</Button>
          </HStack>
        </Box>
      </Stack>
    </DashboardLayout>
  );
};

export default Profile;
