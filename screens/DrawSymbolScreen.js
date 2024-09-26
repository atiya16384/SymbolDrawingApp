import React, { useState } from 'react';
import { View, StyleSheet, PanResponder, TouchableOpacity, Image, Modal, Button, TextInput, Alert } from 'react-native';
import Svg, { Path, Text as SvgText } from 'react-native-svg';
import RNFS from 'react-native-fs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Text } from 'react-native';

export default function DrawSymbolScreen({ navigation }) {
  const [paths, setPaths] = useState([]);  // Store all drawn paths
  const [currentPath, setCurrentPath] = useState('');  // Track the current drawing path
  const [layout, setLayout] = useState(null);  // Store canvas layout
  const [brushSize, setBrushSize] = useState(3); // Control brush size
  const [brushColor, setBrushColor] = useState('#000');  // Control brush color
  const [isBrushSelectorVisible, setBrushSelectorVisible] = useState(false);  // Brush selector modal visibility
  const [isTextMode, setTextMode] = useState(false);  // Whether to add text
  const [inputText, setInputText] = useState('');  // Text input for the "T" tool
  const [cursorPosition, setCursorPosition] = useState({ x: -100, y: -100 }); // Track cursor position
  const [selectedTool, setSelectedTool] = useState('brush'); // Track the selected tool (brush or eraser)
  const [isEraserSelectorVisible, setEraserSelectorVisible] = useState(false);  // Eraser size modal visibility

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderGrant: (evt) => {
      if (layout && !isTextMode) {
        const startX = evt.nativeEvent.locationX;
        const startY = evt.nativeEvent.locationY;
        setCursorPosition({ x: startX, y: startY }); // Update cursor position

        const newPath = `M${startX.toFixed(2)},${startY.toFixed(2)}`;
        setCurrentPath(newPath);  // Start a new path
      } else if (isTextMode) {
        const startX = evt.nativeEvent.locationX;
        const startY = evt.nativeEvent.locationY;
        const textPath = { type: 'text', x: startX, y: startY, text: inputText, size: brushSize, color: brushColor };
        setPaths([...paths, textPath]);
        setTextMode(false);
      }
    },
    onPanResponderMove: (evt) => {
      const adjustedX = evt.nativeEvent.locationX;
      const adjustedY = evt.nativeEvent.locationY;

      setCursorPosition({ x: adjustedX + 22, y: adjustedY + 22 }); // Center cursor icon over drawing point- adjust this to allign icon to cursor

      if (!isNaN(adjustedX) && !isNaN(adjustedY) && layout && !isTextMode) {
        const updatedPath = `${currentPath} L${adjustedX.toFixed(2)},${adjustedY.toFixed(2)}`;
        setCurrentPath(updatedPath);  // Update the current path
      }
    },
    onPanResponderRelease: () => {
      setCursorPosition({ x: -100, y: -100 }); // Hide cursor when drawing is done

      if (!isTextMode) {
        setPaths((prevPaths) => [...prevPaths, { d: currentPath, strokeWidth: brushSize, strokeColor: brushColor }]);
        setCurrentPath('');  // Reset the current path
      }
    },
  });

  const saveDrawing = async () => {
    try {
      const drawingsDir = `${RNFS.DocumentDirectoryPath}/Drawings`;
      const folderExists = await RNFS.exists(drawingsDir);
      
      if (!folderExists) {
        await RNFS.mkdir(drawingsDir);  // Create the directory if it doesn't exist
      }

      const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        ${paths.map((path) => 
          path.type === 'text' 
            ? `<text x="${path.x}" y="${path.y}" font-size="${path.size}" fill="${path.color}">${path.text}</text>` 
            : `<path d="${path.d}" stroke="${path.strokeColor}" strokeWidth="${path.strokeWidth}" fill="none"/>`
        ).join('')}
      </svg>`;

      const fileName = `drawing_${Date.now()}.svg`;
      const filePath = `${drawingsDir}/${fileName}`;

      await RNFS.writeFile(filePath, svgContent, 'utf8');
      console.log('Saved file path:', filePath);
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

  const selectBrush = (color, size) => {
    setBrushColor(color);
    setBrushSize(size);
    setBrushSelectorVisible(false);
  };

  const selectEraser = (size) => {
    setBrushSize(size);
    setBrushColor('#FFF');  // Set eraser color to white
    setEraserSelectorVisible(false);
  };

  const renderCursorIcon = () => {
    if (selectedTool === 'brush') {
      return <Image source={require('../assets/brush.png')} style={styles.cursorIcon} />;
    } else if (selectedTool === 'eraser') {
      return <Image source={require('../assets/rubber.png')} style={styles.cursorIcon} />;
    }
    return null;
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
          {paths.map((path, index) => (
            path.type === 'text'
              ? <SvgText key={index} x={path.x} y={path.y} fontSize={path.size} fill={path.color}>{path.text}</SvgText>
              : <Path key={index} d={path.d} stroke={path.strokeColor} strokeWidth={path.strokeWidth} fill="none" />
          ))}
          {currentPath && (
            <Path d={currentPath} stroke={brushColor} strokeWidth={brushSize} fill="none" />
          )}
        </Svg>
      </View>

      {/* Cursor Icon */}
      <View style={[styles.cursorIconContainer, { top: cursorPosition.y, left: cursorPosition.x }]}>
        {renderCursorIcon()}
      </View>

      {/* Tool Bar */}
      <View style={styles.toolBar}>
        <TouchableOpacity style={styles.toolButton} onPress={clearCanvas}>
          <Icon name="delete" size={20} color="#fff" />
          <Text style={styles.buttonText}>Clear</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.toolButton} onPress={undoLastPath}>
          <Icon name="undo" size={20} color="#fff" />
          <Text style={styles.buttonText}>Undo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.toolButton} onPress={() => { setBrushSelectorVisible(true); setSelectedTool('brush'); }}>
          <Icon name="brush" size={20} color="#fff" />
          <Text style={styles.buttonText}>Brush</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.toolButton} onPress={() => setTextMode(true)}>
          <Icon name="text-fields" size={20} color="#fff" />
          <Text style={styles.buttonText}>Text</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.toolButton} onPress={() => { setEraserSelectorVisible(true); setSelectedTool('eraser'); }}>
          <Icon name="edit" size={20} color="#fff" />
          <Text style={styles.buttonText}>Eraser</Text>
        </TouchableOpacity>
        {/* New Search Icon */}
        <TouchableOpacity style={styles.toolButton} onPress={handleSearch}>
          <Icon name="search" size={20} color="#fff" />
          <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>
      </View>

      {/* Brush Selector Modal */}
      <Modal transparent={true} visible={isBrushSelectorVisible}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Choose Brush</Text>
          <View style={styles.verticalOptions}>
            <TouchableOpacity onPress={() => selectBrush('#000', 3)}>
              <Image source={require('../assets/thin_brush.png')} style={styles.optionImage} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => selectBrush('#000', 5)}>
              <Image source={require('../assets/medium_brush.png')} style={styles.optionImage} />
            </TouchableOpacity>
          </View>
          <Button title="CLOSE" onPress={() => setBrushSelectorVisible(false)} />
        </View>
      </Modal>

      {/* Eraser Selector Modal */}
      <Modal transparent={true} visible={isEraserSelectorVisible}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Choose Eraser Size</Text>
          <View style={styles.verticalOptions}>
            <TouchableOpacity onPress={() => selectEraser(5)}>
              <Image source={require('../assets/small_eraser.png')} style={styles.optionImage} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => selectEraser(15)}>
              <Image source={require('../assets/large_eraser.png')} style={styles.optionImage} />
            </TouchableOpacity>
          </View>
          <Button title="CLOSE" onPress={() => setEraserSelectorVisible(false)} />
        </View>
      </Modal>

      {/* Text Input Modal for adding text */}
      {isTextMode && (
        <Modal transparent={true} visible={true}>
          <View style={styles.modalView}>
            <TextInput
              style={styles.textInput}
              placeholder="Enter text"
              value={inputText}
              onChangeText={setInputText}
            />
            <Button title="Add Text" onPress={() => setTextMode(false)} />
          </View>
        </Modal>
      )}
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
    height: '65%',
    borderColor: '#5E35B1',
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
    borderRadius: 12,
    marginTop: 20,
  },
  toolButton: {
    flex: 1,
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 12,
  },
  cursorIconContainer: {
    position: 'absolute',
    zIndex: 10,
    pointerEvents: 'none', // Allows drawing to happen under the cursor
  },
  modalView: {
    marginTop: 100,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 18,
  },
  verticalOptions: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 20,
  },
  optionImage: {
    width: 50, // Adjusted for better visibility
    height: 50,
    marginBottom: 10,
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    width: '80%',
    textAlign: 'center',
  },
  cursorIcon: {
    width: 30,  // Smaller icon size for better alignment
    height: 30,
  },
  searchButton: {
    marginTop: 20,
    padding: 12,
    backgroundColor: '#673AB7',
    borderRadius: 10,
    width: '90%',
    alignItems: 'center',
  },
  searchButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
