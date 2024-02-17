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
      color: props.theme.colors[props.colorMode].textThree.neutralGray,
      border: '1px solid',
      borderColor: props.theme.colors[props.colorMode].border.neutralGray,
      background: props.theme.colors[props.colorMode].white,
      height: "45px",
      _focus: {
        borderColor: props.theme.colors[props.colorMode].border.neutralGray,
      },
      _placeholder: {
        color: props.theme.colors[props.colorMode].textThree.neutralGray,
        fontSize: 16
      }
    },
  });

export const inputTheme = defineMultiStyleConfig({
  variants: { baseStyle },
  defaultProps: {
    variant: "baseStyle",
  },
});
