import React, { useState, useEffect } from 'react';
import { Animated, StyleSheet, View, Button } from 'react-native';

const ZoomView = () => {
  const [zoomAnim] = useState(new Animated.Value(0))
  const [size, setSize] = useState(50);

  useEffect(() => {
  Animated.timing(
      zoomAnim,
      {
        toValue: size,
        duration: 1000,
        useNativeDriver: false,
      }
    ).start();
  }, [size])
  
  const zoomIn = () => setSize((prev) => prev + 50);
  
  const zoomOut = () => setSize((prev) => prev - 50);
    
  return (
  <View style={styles.container}>
    <Animated.View
      style={{
        ...styles.box,
        transform: [{scale: zoomAnim}],
      }}
    >
    </Animated.View>
    <View style={{display: 'flex', flexDirection: 'row'}}>
      <Button title="Zoom in" onPress={zoomIn}/>
      <View style={{width: 4}}/>
      <Button title="Zoom out" onPress={zoomOut}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: 'gray', 
    borderRadius: 100, 
    marginBottom: 12,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
})
export default ZoomView;
