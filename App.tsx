import { GluestackUIProvider, Text, Center, Box } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config"; // Optional if you want to use default theme

export default function App() {
  return (
    <GluestackUIProvider config={config}>
      {/* <Center>
        <Text>Open up App.js to start working on your app!</Text>
      </Center> */}
      {/* <Box width="100%" justifyContent="center" alignItems="center">
        <Text>Open up App.js to start working on your app!</Text>
      </Box> */}

      <Box>
        <Center bg="$primary500" h={200} w={300}>
          <Text color="white" fontWeight="$bold">
            This is the center.
          </Text>
        </Center>
      </Box>
    </GluestackUIProvider>
  );
}
