// screens/DrawSymbolScreen.js
import React, { useRef, useState } from 'react';
import { View, Button, StyleSheet, PanResponder, AsyncStorage } from 'react-native';
import Svg, { Path } from 'react-native-svg';

export default function DrawSymbolScreen() {
  const [d, setD] = useState('');
  const pathRef = useRef('M');

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (evt, gestureState) => {
      const x = (gestureState.moveX - evt.nativeEvent.locationX).toFixed(2);
      const y = (gestureState.moveY - evt.nativeEvent.locationY).toFixed(2);
      pathRef.current += ` L${x},${y}`;
      setD(pathRef.current);
    },
    onPanResponderRelease: () => {
      pathRef.current += ' ';
    },
  });

  const handleSave = async () => {
    const path = pathRef.current.trim();
    if (path) {
      alert('Symbol saved!');
      await saveSymbol(path);
      pathRef.current = 'M'; // Reset the path for new drawing
      setD('');
    }
  };

  const saveSymbol = async (path) => {
    try {
      let symbols = await AsyncStorage.getItem('symbols');
      symbols = symbols ? JSON.parse(symbols) : [];
      symbols.push(path);
      await AsyncStorage.setItem('symbols', JSON.stringify(symbols));
      console.log('Symbols saved:', symbols);
    } catch (error) {
      console.error('Error saving symbol:', error);
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

