import fonts from "./fonts";
import colors from "./colors";
import { extendTheme } from "@chakra-ui/react";
import { buttonTheme as Button } from "./components/Button";
import { headingTheme as Heading } from "./components/Heading";
import { linkTheme as Link } from "./components/Link";
import { inputTheme as Input } from "./components/Input";
import { textTheme as Text } from "./components/Text";

const customTheme = extendTheme({
  ...fonts,
  ...colors,
  components: { Button, Heading, Link, Input, Text },
});

export default customTheme;
