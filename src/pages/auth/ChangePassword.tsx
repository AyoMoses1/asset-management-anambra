import { CheckIcon } from "@chakra-ui/icons";
import { Box, Button, HStack, Heading, Stack } from "@chakra-ui/react";
import AuthInput from "components/common/AuthInput";
import DashboardLayout from "layouts/DashboardLayout";
import { useForm } from "react-hook-form";
import { BORDER_LIGHT } from "utils/color";
import { changePaswordInputs } from "utils/data";

const ChangePassword = () => {
  const { control } = useForm({
    mode: "onSubmit",
  });

  return (
    <DashboardLayout bg="#FFFCF6">
      <Stack spacing={"30px"}>
        <Heading variant={"h3Small"}>Change Password</Heading>
        <Box
          bg={"white"}
          p={"24px"}
          maxW={"842px"}
          border={"1px solid"}
          borderColor={BORDER_LIGHT}
          borderRadius={"8px"}
        >
          {changePaswordInputs().map((input, idx) => (
            <AuthInput
              key={idx}
              isFlexed
              control={control}
              name={input.name}
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

export default ChangePassword;
