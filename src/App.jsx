import { RouterProvider } from "react-router-dom";
import router from "./router";
import StockContextProvider from "./contexts/StockContexts"; // Certifique-se do nome correto

export default function App() {
  return (
    // O Provider DEVE envolver o RouterProvider
    <StockContextProvider>
      <RouterProvider router={router} />
    </StockContextProvider>
  );
}