import { Box, Flex, HStack } from "@chakra-ui/react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Flex spacing={0}>
      <Box
        w={"17%"}
        bg={"#040440"}
        display={["none", "none", "none", "none", "block", "block"]}
      >
        <Sidebar />
      </Box>
      <Dashboard />
    </Flex>
  );
}

export default App;
