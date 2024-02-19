import {
  defineStyle,
  defineStyleConfig,
  StyleFunctionProps,
} from "@chakra-ui/react";

const primary = (props: StyleFunctionProps) =>
  defineStyle({
    color: props.theme.colors.others.white,
    textDecoration: "underline",
    _hover: {
      textDecoration: "none",
    },
  });

const neutral = (props: StyleFunctionProps) =>
  defineStyle({
    color: props.theme.colors.others.white,
  });

const sm = defineStyle({
  fontSize: "14px",
  lineHeight: "150%",
});

const md = defineStyle({
  fontSize: "16px",
  fontWeight: 400,
  lineHeight: "19.2px",
});

export const linkTheme = defineStyleConfig({
  variants: { primary, neutral },
  sizes: { sm, md },
  defaultProps: {
    size: "md",
    variant: "primary",
  },
});
