import React, { useRef, useState } from 'react';
import { View, StyleSheet, PanResponder, TouchableOpacity, Text, Alert } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import RNFS from 'react-native-fs';

export default function DrawSymbolScreen({ navigation }) {
  const [paths, setPaths] = useState([]);  // Store all drawn paths
  const currentPathRef = useRef('');  // Track the current drawing path
  const [layout, setLayout] = useState(null);  // Store canvas layout

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderGrant: (evt) => {
      if (layout) {
        const startX = evt.nativeEvent.locationX;  // Fixing the coordinates calculation
        const startY = evt.nativeEvent.locationY;  // Fixing the coordinates calculation
        currentPathRef.current = `M${startX.toFixed(2)},${startY.toFixed(2)}`;
      } else {
        Alert.alert('Error', 'Canvas layout not available.');
      }
    },
    onPanResponderMove: (evt) => {
      if (layout) {
        const adjustedX = evt.nativeEvent.locationX;  // Fixing the coordinates calculation
        const adjustedY = evt.nativeEvent.locationY;  // Fixing the coordinates calculation

        if (!isNaN(adjustedX) && !isNaN(adjustedY)) {
          currentPathRef.current += ` L${adjustedX.toFixed(2)},${adjustedY.toFixed(2)}`;
          setPaths((prevPaths) => [...prevPaths]);  // Trigger re-render
        }
      }
    },
    onPanResponderRelease: () => {
      setPaths((prevPaths) => [...prevPaths, currentPathRef.current]);  // Save the current path
      currentPathRef.current = '';  // Reset the current path
    },
  });

  const saveDrawing = async () => {
    try {
      const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        ${paths.map((d) => `<path d="${d}" stroke="#000" strokeWidth="3" fill="none"/>`).join('')}
      </svg>`;
      const fileUri = `${RNFS.DocumentDirectoryPath}/user_drawing.svg`;
      await RNFS.writeFile(fileUri, svgContent, 'utf8');
      return fileUri;
    } catch (error) {
      console.error('Error saving drawing:', error);
    }
  };

  const handleSearch = async () => {
    const fileUri = await saveDrawing();
    if (fileUri) {
      fetch('http://192.168.0.17:5001/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          imageUri: fileUri,
        }),
      })
        .then(response => response.json())
        .then(data => {
          navigation.navigate('LensMatches', { matches: data.matches });
        })
        .catch(error => {
          console.error('Error:', error);
          Alert.alert('Error', 'Something went wrong.');
        });
    }
  };

  const clearCanvas = () => {
    setPaths([]);  // Clear all paths
  };

  const undoLastPath = () => {
    setPaths((prevPaths) => prevPaths.slice(0, -1));  // Remove the last path
  };

  return (
    <View style={styles.container}>
      {/* Drawing Canvas */}
      <View
        style={styles.canvas}
        {...panResponder.panHandlers}
        onLayout={(event) => {
          const layoutData = event.nativeEvent.layout;
          setLayout({
            pageX: layoutData.x,
            pageY: layoutData.y,
            width: layoutData.width,
            height: layoutData.height,
          });
        }}
      >
        <Svg height="100%" width="100%">
          {paths.map((d, index) => (
            <Path key={index} d={d} stroke="#000" strokeWidth={3} fill="none" />
          ))}
          {currentPathRef.current && (
            <Path d={currentPathRef.current} stroke="#000" strokeWidth={3} fill="none" />
          )}
        </Svg>
      </View>

      {/* Tool Bar */}
      <View style={styles.toolBar}>
        <TouchableOpacity style={styles.toolButton} onPress={clearCanvas}>
          <Text style={styles.buttonText}>Clear</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.toolButton} onPress={undoLastPath}>
          <Text style={styles.buttonText}>Undo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.toolButton} onPress={handleSearch}>
          <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  canvas: {
    width: '90%',
    height: '70%',
    borderColor: '#6A1B9A',  // Darker purple theme border
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  toolBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: 10,
    backgroundColor: '#6A1B9A',  // Darker purple background for the toolbar
  },
  toolButton: {
    flex: 1,
    marginHorizontal: 5,
    paddingVertical: 15,
    backgroundColor: '#7B1FA2',  // Slightly lighter purple for buttons
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,  // Shadow for Android
    shadowColor: '#000',  // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
