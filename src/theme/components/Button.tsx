import {
  defineStyle,
  defineStyleConfig,
  StyleFunctionProps,
} from "@chakra-ui/react";
import { BORDER_LIGHT } from "utils/color";

const primary = (props: StyleFunctionProps) =>
  defineStyle({
    background: props.theme.colors.main.yellow,
    color: props.theme.colors.main.black,
    borderRadius: 5,
    _hover: {
      background: props.theme.colors.main.blue,
      color: props.theme.colors.tint.blue,
    },
  });

const outline = (props: StyleFunctionProps) =>
  defineStyle({
    color: props.theme.colors.main.black,
    border: "1px solid",
    borderColor: BORDER_LIGHT,
    borderRadius: 4,
    _hover: {
      background: props.theme.colors.main.yellow,
      color: props.theme.colors.main.black,
    },
  });

const secondary = (props: StyleFunctionProps) =>
  defineStyle({
    background: props.theme.colors.main.red,
    color: props.theme.colors.others.white,
    borderRadius: 5,
    _hover: {
      background: props.theme.colors.main.blue,
      color: props.theme.colors.tint.blue,
    },
  });

const tertiary = (props: StyleFunctionProps) =>
  defineStyle({
    background: props.theme.colors.main.black,
    color: props.theme.colors.others.white,
    borderRadius: 4,
    _hover: {
      background: props.theme.colors.main.blue,
      color: props.theme.colors.tint.blue,
    },
  });

const grey = (props: StyleFunctionProps) =>
  defineStyle({
    background: props.theme.colors.tint.grey,
    color: props.theme.colors.others.white,
    borderRadius: 4,
    _hover: {
      background: props.theme.colors.main.blue,
      color: props.theme.colors.tint.blue,
    },
  });

const md = defineStyle({
  padding: "8px 16px 8px 16px",
  fontSize: 14,
  fontWeight: 500,
  lineHeight: "21px",
});

export const buttonTheme = defineStyleConfig({
  variants: { primary, secondary, tertiary, grey, outline },
  sizes: { md },
  defaultProps: {
    size: "md",
    variant: "primary",
  },
});
