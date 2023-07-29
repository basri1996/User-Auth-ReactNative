import { StyleSheet, Text, View } from "react-native";
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../store/auth-context";

function WelcomeScreen() {
  const [fetchedData, setFetchedData] = useState("");
  const { authToken } = useContext(AuthContext);
  console.log(fetchedData);
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        "https://user-authentication-a1701-default-rtdb.firebaseio.com/message.json?auth=" +
          authToken
      );
      setFetchedData(response.data);
    }
    fetchData();
  }, [authToken]);
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Welcome!</Text>
      <Text>You authenticated successfully!</Text>
      <Text>{fetchedData}</Text>
    </View>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
});
