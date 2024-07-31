// screens/DrawSymbolScreen.js
import React, { useRef, useState } from 'react';
import { View, Button, StyleSheet, PanResponder, Dimensions } from 'react-native';
import Svg, { Path } from 'react-native-svg';

export default function DrawSymbolScreen() {
  const [d, setD] = useState('');
  const pathRef = useRef('M');

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderGrant: (evt, gestureState) => {
      const { locationX, locationY } = evt.nativeEvent;
      pathRef.current = `M${locationX.toFixed(2)},${locationY.toFixed(2)}`; // Initialize the path with 'M'
      setD(pathRef.current);
    },
    onPanResponderMove: (evt, gestureState) => {
      const { locationX, locationY } = evt.nativeEvent;
      pathRef.current += ` L${locationX.toFixed(2)},${locationY.toFixed(2)}`;
      setD(pathRef.current);
    },
    onPanResponderRelease: () => {
      pathRef.current += ' ';
    },
  });

  const handleSave = () => {
    const path = pathRef.current.trim();
    if (path) {
      alert('Symbol saved!');
      pathRef.current = 'M'; // Reset the path for new drawing
      setD('');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.canvas} {...panResponder.panHandlers}>
        <Svg height="100%" width="100%">
          <Path d={d} stroke="#000" strokeWidth={3} fill="none" />
        </Svg>
      </View>
      <Button title="Save Symbol" onPress={handleSave} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  canvas: {
    width: '90%',
    height: '70%',
    borderColor: '#000',
    borderWidth: 1,
  },
});

