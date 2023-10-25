import { NavigationContainer } from "@react-navigation/native";
import ExternalAccess from "./ExternalAccess";
import InternalAccess from "./InternalAccess";

import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';


const Routes = () => {
  return (
    <NavigationContainer>
        <ExternalAccess />
    </NavigationContainer>
  );
};

export default Routes;