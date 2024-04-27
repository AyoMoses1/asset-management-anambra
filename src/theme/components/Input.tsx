import { inputAnatomy } from "@chakra-ui/anatomy";
import {
  createMultiStyleConfigHelpers,
  StyleFunctionProps,
} from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(inputAnatomy.keys);

const baseStyle = (props: StyleFunctionProps) =>
  definePartsStyle({
    field: {
      fontFamily: "Poppins", // change the font family
      // color: props.theme.colors[props.colorMode].textThree.neutralGray,
      border: "1px solid",
      borderColor: props.theme.colors.tint.grey,
      // bg: props.theme.colors.tint.grey,
      height: "45px",
      _focusVisible: {
        borderColor: props.theme.colors.tint.grey,
      },
      _placeholder: {
        color: "#C6C6C6",
        fontSize: 16,
      },
      _active: {
        // background: "red",
      },
    },
  });

export const inputTheme = defineMultiStyleConfig({
  variants: { baseStyle },
  defaultProps: {
    variant: "baseStyle",
  },
});
