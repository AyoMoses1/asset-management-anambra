import { defineStyle, defineStyleConfig } from "@chakra-ui/react";
import { TEXT_PRIMARY } from "utils/color";

const xs = () =>
  defineStyle({
    fontSize: "12",
    lineHeight: "18px",
  });
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

const tableCell = () =>
  defineStyle({
    fontSize: "12px",
    lineHeight: "15.6px",
    color: TEXT_PRIMARY,
    // fontWeight: 500,
  });

export const textTheme = defineStyleConfig({
  variants: { xs, small, normal, large, xl, tableCell },
  defaultProps: {
    variant: "normal",
  },
});
