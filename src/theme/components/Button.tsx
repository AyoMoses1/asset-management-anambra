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

const noBorder = defineStyle({
  border: "none",
  borderRadius: 0, // remove the border radius
  fontWeight: "semibold", // change the font weight
});

const brandPrimary = (props: StyleFunctionProps) =>
  defineStyle({
    background: props.theme.colors[props.colorMode].base.blue,
    color: props.theme.colors.white,
    borderRadius: 4,
    _hover: {
      background: props.theme.colors.light.hover.blue,
    },
  });

const xl = defineStyle({
  fontSize: 16,
  width: 3270
});

const lg = defineStyle({
  fontSize: 16,
  width: 327
});

const md = defineStyle({
  fontSize: 16,
  width: "100%",
});

export const buttonTheme = defineStyleConfig({
  variants: { outline, brandPrimary, noBorder },
  sizes: { xl, lg, md },
  defaultProps: {
    size: "md",
    variant: "brandPrimary",
  },
});
