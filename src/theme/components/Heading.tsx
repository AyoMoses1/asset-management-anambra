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

const h4 = () =>
  defineStyle({
    fontSize: "20px",
    fontWeight: 700,
    lineHeight: "26px",
  });

const h4Small = () =>
  defineStyle({
    fontSize: "20px",
    fontWeight: 600,
    lineHeight: "26px",
  });

const h5 = () =>
  defineStyle({
    fontSize: "16px",
    fontWeight: 700,
    lineHeight: "19.2px",
  });

const articleHeading = () =>
  defineStyle({
    fontSize: "36px",
    fontWeight: 700,
    lineHeight: "46.8px",
  });

export const headingTheme = defineStyleConfig({
  variants: { h1, h2, h3, h4, h3Small, h4Small, h5, articleHeading },
  defaultProps: {
    variant: "h2",
  },
});
