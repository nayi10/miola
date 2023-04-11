import React, { useRef, useState } from "react";
import {
  DrawerLayoutAndroid,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";

const views = [
  <Text>Drawer View 1</Text>,
  <Text>Drawer View 2</Text>,
  <Text>Drawer View 3</Text>,
  <Text>Drawer View 4</Text>,
];
const App = () => {
  const drawer = useRef(null);
  const [index, setIndex] = useState(0);

  const navigationView = () => (
    <View style={styles.container}>
      {Array.from(4).map((value) => (
        <TouchableOpacity onPress={() => setIndex(value)}>
          <Text>Close drawer</Text>
        </TouchableOpacity>
      ))}
    </View>
  );

  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      renderNavigationView={navigationView}
    >
      <View style={styles.container}>
        <Text>Drawer Example</Text>
        {views[index]}
      </View>
    </DrawerLayoutAndroid>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  button: {
    marginTop: 20,
    backgroundColor: "blue",
    padding: 12,
    borderRadius: 5,
  },
  buttonText: { fontSize: 18, color: "white" },
});

export default App;
