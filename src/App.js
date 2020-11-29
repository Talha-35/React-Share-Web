
import AppRouter from "./router/AppRouter";
import AuthContextProvider from "./context/AuthContext";


function App() {

  
  return (
    <AuthContextProvider>
      <AppRouter />
    </AuthContextProvider>
  );
}

export default App;