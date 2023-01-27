// 1. Import `extendTheme`
import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import App from "next/app"

// 2. Call `extendTheme` and pass your custom values
export const theme = extendTheme({
  colors: {
    brand: {
      100: "#ff3c00"
    },
  },
  fonts: {
    body: "Open Sans, sans-serif"
  },
  components: {
    // Button: ""
  },
  styles: {
    global: () => ({
      body: {
        bg: "gray.200",
      },
    }),
  },
});

// 3. Pass the new theme to `ChakraProvider`

// 4. Now you can use these colors in your components
