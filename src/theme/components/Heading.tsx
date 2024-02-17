import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const h1 = () =>
  defineStyle({
    fontSize: "42px",
    fontWeight: 700,
    lineHeight: "54.6px",
  });

const h2 = () =>
  defineStyle({
    fontSize: "32px",
    fontWeight: 700,
    lineHeight: "41.6px",
  });

const h3 = () =>
  defineStyle({
    fontSize: "24px",
    fontWeight: 700,
    lineHeight: "31.2px",
  });

const h3Small = () =>
  defineStyle({
    fontSize: "24px",
    fontWeight: 600,
    lineHeight: "31.2px",
  });

export const headingTheme = defineStyleConfig({
  variants: { h1, h2, h3, h3Small },
  defaultProps: {
    variant: "h2",
  },
});
