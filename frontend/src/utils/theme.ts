import { extendTheme } from "@chakra-ui/react";

export default extendTheme({
  components: {
    Input: {
      defaultProps: {
        focusBorderColor: "purple.600",
      },
    },
  },

  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
});
