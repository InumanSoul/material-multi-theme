import fs from 'fs';

export const themeBuilder = () => {
  fs.readFile('./tokens/design.tokens.json', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file', err)
      return
    }

    const jsonData = JSON.parse(data);
    
    console.log(jsonData);
    
    return jsonData;
  });
}