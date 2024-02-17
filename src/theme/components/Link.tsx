import {
  defineStyle,
  defineStyleConfig,
  StyleFunctionProps,
} from "@chakra-ui/react";

const primary = (props: StyleFunctionProps) =>
  defineStyle({
    color: props.theme.colors[props.colorMode].base.blue,
    _hover: {
      textDecoration: "none"
    }
  });

const neutral = (props: StyleFunctionProps) =>
  defineStyle({
    color: props.theme.colors.light.textThree.neutralGray,
    
  });

const sm = defineStyle({
  fontSize: "14px",
  lineHeight: "150%"
});

const md = defineStyle({
  fontSize: "16px",
});

export const linkTheme = defineStyleConfig({
  variants: { primary, neutral },
  sizes: { sm, md },
  defaultProps: {
    size: "md",
    variant: "primary",
  },
});
