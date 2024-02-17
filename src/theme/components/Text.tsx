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

export const textTheme = defineStyleConfig({
  variants: { small, normal, large },
  defaultProps: {
    variant: "normal",
  },
});
