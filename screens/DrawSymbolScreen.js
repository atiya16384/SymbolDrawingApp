import React, { useRef, useState } from 'react';
import { View, StyleSheet, PanResponder, TouchableOpacity, Text, Alert } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import RNFS from 'react-native-fs';

export default function DrawSymbolScreen({ navigation }) {
  const [paths, setPaths] = useState([]);  // Store all drawn paths
  const [currentPath, setCurrentPath] = useState('');  // Track the current drawing path
  const [layout, setLayout] = useState(null);  // Store canvas layout

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderGrant: (evt) => {
      if (layout) {
        const startX = evt.nativeEvent.locationX;
        const startY = evt.nativeEvent.locationY;
        const newPath = `M${startX.toFixed(2)},${startY.toFixed(2)}`;
        setCurrentPath(newPath);  // Start a new path
      } else {
        Alert.alert('Error', 'Canvas layout not available.');
      }
    },
    onPanResponderMove: (evt) => {
      if (layout) {
        const adjustedX = evt.nativeEvent.locationX;
        const adjustedY = evt.nativeEvent.locationY;

        if (!isNaN(adjustedX) && !isNaN(adjustedY)) {
          const updatedPath = `${currentPath} L${adjustedX.toFixed(2)},${adjustedY.toFixed(2)}`;
          setCurrentPath(updatedPath);  // Update the current path
        }
      }
    },
    onPanResponderRelease: () => {
      setPaths((prevPaths) => [...prevPaths, currentPath]);  // Save the current path in the paths array
      setCurrentPath('');  // Reset the current path
    },
  });

  // Function to create a folder and save the drawing
  const saveDrawing = async () => {
    try {
      // Create a folder called "Drawings" in the document directory
      const drawingsDir = `${RNFS.DocumentDirectoryPath}/Drawings`;
      const folderExists = await RNFS.exists(drawingsDir);
      
      if (!folderExists) {
        await RNFS.mkdir(drawingsDir);  // Create the directory if it doesn't exist
      }

      // Save the SVG content
      const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        ${paths.map((d) => `<path d="${d}" stroke="#000" strokeWidth="3" fill="none"/>`).join('')}
      </svg>`;

      // Create a file name and path to store the drawing
      const fileName = `drawing_${Date.now()}.svg`;
      const filePath = `${drawingsDir}/${fileName}`;

      // Write the file
      await RNFS.writeFile(filePath, svgContent, 'utf8');
      
      console.log('Saved file path:', filePath);  // Log the file path for debugging
      return filePath;

    } catch (error) {
      console.error('Error saving drawing:', error);
    }
  };



  const handleSearch = async () => {
    const fileUri = await saveDrawing();
    if (fileUri) {
      const file = {
        uri: fileUri,
        name: `drawing_${Date.now()}.svg`,
        type: 'image/svg+xml'
      };
  
      const formData = new FormData();
      formData.append('image', file);
  
      fetch('http://10.0.2.2:5000/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        body: formData,
      })
        .then(response => response.json())
        .then(data => {
          navigation.navigate('LensMatchesScreen', { matches: data.matches });
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
          {currentPath && (
            <Path d={currentPath} stroke="#000" strokeWidth={3} fill="none" />
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
    backgroundColor: '#f0f4f7',
  },
  canvas: {
    width: '90%',
    height: '65%',  // Adjusted height
    borderColor: '#5E35B1',  // More consistent color for the border
    borderWidth: 3,
    borderRadius: 10,
    backgroundColor: '#ffffff',
  },
  toolBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '90%',
    padding: 12,
    backgroundColor: '#4527A0',
    borderRadius: 12,  // Rounded corners for toolbar
    marginTop: 20,  // Moved toolbar lower
  },
  toolButton: {
    flex: 1,
    marginHorizontal: 5,
    paddingVertical: 14,  // Adjusted padding for button size
    backgroundColor: '#673AB7',  // Harmonized color with toolbar
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,  // Shadow for Android
    shadowColor: '#000',  // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
