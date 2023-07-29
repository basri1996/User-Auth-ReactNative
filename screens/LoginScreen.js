import AuthContent from "../components/Auth/AuthContent";
import { useState, useContext } from "react";
import { Login } from "../util/auth";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { Alert } from "react-native";
import { AuthContext } from "../store/auth-context";
function LoginScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const { authenticate } = useContext(AuthContext);
  async function LoginHandler({ email, password }) {
    setIsAuthenticating(true);
    try {
      const token = await Login(email, password);
      authenticate(token);
    } catch (error) {
      Alert.alert("Authentication failed", "Could not log in");
      setIsAuthenticating(false);
    }
  }
  if (isAuthenticating) {
    return <LoadingOverlay message="Logging you in..." />;
  }
  return <AuthContent isLogin onAuthenticate={LoginHandler} />;
}

export default LoginScreen;
