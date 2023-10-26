import { NavigationContainer } from "@react-navigation/native";
import ExternalAccess from "./ExternalAccess";
import InternalAccess from "./InternalAccess";
import ProductsProvider from "../contexts/ProductsContext";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const Routes = () => {
  const { user } = useContext(AuthContext);
  return (
    <NavigationContainer>
      {!user.logado ? (
        <ExternalAccess />
      ) : (
        <ProductsProvider>
          <InternalAccess />
        </ProductsProvider>
      )}
    </NavigationContainer>
  );
};

export default Routes;
