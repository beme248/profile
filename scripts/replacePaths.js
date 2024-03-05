const fs = require('fs');
const path = require('path');

// Function to recursively process files in a directory
function replaceInFiles(directory) {
    fs.readdir(directory, (err, files) => {
        if (err) {
            console.error('Error reading the directory', err);
            return;
        }

        files.forEach(file => {
            const filePath = path.join(directory, file);
            fs.stat(filePath, (err, stat) => {
                if (err) {
                    console.error('Error stating file.', err);
                    return;
                }

                if (stat.isFile()) {
                    const fileExt = path.extname(filePath).toLowerCase();
                    // Check if the file is .html, .js, or .css
                    if (fileExt === '.html' || fileExt === '.js' || fileExt === '.css' || fileExt === '.json') {
                        // Read file and replace content
                        fs.readFile(filePath, 'utf8', (err, data) => {
                            if (err) {
                                console.error('Error reading file.', err);
                                return;
                            }
                            const result = data.replaceAll("/profile", '');

                            // Write the modified content back to the file
                            fs.writeFile(filePath, result, 'utf8', err => {
                                if (err) console.error('Error writing file.', err);
                            });
                        });
                    }
                } else if (stat.isDirectory()) {
                    // If it's a directory, process it recursively
                    replaceInFiles(filePath);
                }
            });
        });
    });
}

// Replace '/profile' with an empty string in all files under the 'docs' directory
const docsDirectory = './docs'; // Adjust this path as necessary
replaceInFiles(docsDirectory);

console.log('Processing completed. Please check your files.');
