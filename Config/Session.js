import AsyncStorage from "@react-native-community/async-storage";
const Session = {
    /* Set Cart */
  _setCart: async (value) => {
    try {
      await AsyncStorage.setItem("Mine", JSON.stringify(value));
    } catch (error) {
      // Error saving data
    }
  },

  /* Get Cart */
  _getCart: async () => {
    try {
      const value = await AsyncStorage.getItem("Mine");
      return value;
    } catch (error) {}
  },
}
export default Session;
