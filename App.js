import Routes from "./routes/Routes";
import AuthProvider from "./contexts/AuthContext";

const App = () => {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
};

export default App;
