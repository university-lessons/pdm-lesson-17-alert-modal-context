import { Platform, Alert } from "react-native";

const AlertWeb = {
  alert: (message: string) => {
    if (Platform.OS === "web") {
      alert(message);
    } else {
      Alert.alert("Alert", message, [
        {
          text: "OK",
        },
      ]);
    }
  },
};

export default AlertWeb;
