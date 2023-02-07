import { Box, Container, CssBaseline } from "@mui/material";
import Form from "./Form";

const App = () => {
  return (
    <>
      <CssBaseline />
      <Box minHeight="100vh" display="flex" alignItems="center">
        <Container maxWidth="xs">
          <main>
            <Form />
          </main>
        </Container>
      </Box>
    </>
  );
};

export default App;
