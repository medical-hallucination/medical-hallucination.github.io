const fs = require('fs');
const path = require('path');

// Path to the content folder
const contentDir = path.join(__dirname, 'content');

// Function to create caseSections object
function generateCaseSections() {
    const caseSections = {};

    // Read all case folders
    const cases = fs.readdirSync(contentDir, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory()) // Only folders
        .map(dirent => dirent.name);

    // Process each case folder
    cases.forEach(caseFolder => {
        const casePath = path.join(contentDir, caseFolder);
        const files = fs.readdirSync(casePath)
            .filter(file => file.endsWith('.txt')); // Only .txt files

        caseSections[caseFolder] = files.map(file => ({
            id: file.replace('.txt', ''), // Use file name (without extension) as ID
            label: formatLabel(file.replace('.txt', '')) // Format the label
        }));
    });

    return caseSections;
}

// Helper function to format labels
function formatLabel(filename) {
    return filename
        .replace(/_/g, ' ')      // Replace underscores with spaces
        .replace(/\b\w/g, c => c.toUpperCase()); // Capitalize each word
}

// Generate the caseSections object
const caseSections = generateCaseSections();

// Write the result to a JSON file
fs.writeFileSync(
    path.join(__dirname, 'caseSections.json'),
    JSON.stringify(caseSections, null, 2)
);

console.log('caseSections.json has been generated:', caseSections);
