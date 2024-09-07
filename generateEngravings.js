
const fs = require('fs');
const path = require('path');

// Directory containing the files you want to rename
const directoryPath = path.join(__dirname, 'assets/extracted_engravings');

// Function to replace spaces and special characters in filenames
function sanitizeFileName(fileName) {
  return fileName
    .replace(/ /g, '_')       // Replace spaces with underscores
    .replace(/:/g, '-')       // Replace colons with hyphens
    .replace(/%20/g, '_');    // Replace URL encoded spaces with underscores
}

// Read the directory and rename each file
fs.readdir(directoryPath, (err, files) => {
  if (err) {
    console.error('Unable to scan directory:', err);
    return;
  }

  files.forEach((file) => {
    const oldPath = path.join(directoryPath, file);
    const newFileName = sanitizeFileName(file);
    const newPath = path.join(directoryPath, newFileName);

    // Rename the file
    fs.rename(oldPath, newPath, (err) => {
      if (err) {
        console.error(`Error renaming ${file}:`, err);
      } else {
        // console.log(`Renamed: ${file} -> ${newFileName}`);
        // Print out the new require() path
        console.log(`require('../assets/extracted_engravings/${newFileName}'),`);
      }
    });
  });
});
