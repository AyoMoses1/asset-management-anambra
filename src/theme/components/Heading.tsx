import {
  defineStyle,
  defineStyleConfig,
  StyleFunctionProps,
} from "@chakra-ui/react";

const outline = defineStyle({
  border: "2px dashed", // change the appearance of the border
  borderRadius: 0, // remove the border radius
  fontWeight: "semibold", // change the font weight
});

const brandPrimary = (props: StyleFunctionProps) =>
  defineStyle({
    color: props.theme.colors[props.colorMode].black,
  });

const md = defineStyle({
  fontSize: "32px",
  fontWeight: 700,
  lineHeight: "110%",
  // h: "16",
  borderRadius: "md",
});

export const headingTheme = defineStyleConfig({
  variants: { outline, brandPrimary },
  sizes: { md },
  defaultProps: {
    size: "md",
    variant: "brandPrimary",
  },
});
