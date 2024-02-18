import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const small = () =>
  defineStyle({
    fontSize: "14",
    lineHeight: "21px",
  });

const normal = () =>
  defineStyle({
    fontSize: "16",
    lineHeight: "24px",
  });

const large = () =>
  defineStyle({
    fontSize: "18",
    lineHeight: "23.4px",
  });

const xl = () =>
  defineStyle({
    fontSize: "20",
    lineHeight: "30px",
  });

export const textTheme = defineStyleConfig({
  variants: { small, normal, large, xl },
  defaultProps: {
    variant: "normal",
  },
});
