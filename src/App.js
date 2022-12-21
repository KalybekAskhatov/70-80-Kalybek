import React from "react";
import NavBar from "./components/NavBar/NavBar";
import AuthContextProvider from "./contexts/authContext";
import ProductsContextProvider from "./contexts/productsContext";
import MainRoutes from "./routes/MainRoutes";

const App = () => {
  return (
    <AuthContextProvider>
      <ProductsContextProvider>
        <NavBar />
        <MainRoutes />
      </ProductsContextProvider>
    </AuthContextProvider>
  );
};

export default App;
