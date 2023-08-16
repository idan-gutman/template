import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles";
import theme from "./styles/theme";
import Layout from "./components/Layout/Layout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const client = new QueryClient();
  return (
    <QueryClientProvider client={client}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layout />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
