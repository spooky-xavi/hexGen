/* Create function the creates a random hex code
and returns the hexCode value as a string */
const generateHex = () => {
    let hexCode = "#";
    const hexaDecimal = "ABCDEF0123456789";
    
    for (let i = 0; i < 6; i++) {
        const randomNumber = Math.floor(Math.random() * 16);
        hexCode += hexaDecimal[randomNumber];
    }
    return hexCode;
};

const getRgbFromHex = () => {
    const hexValue = generateHex();
    // Converts hex value to rgb value
    const red = parseInt(hexValue.substring(1,3), 16);
    const green = parseInt(hexValue.substring(3,5), 16);
    const blue = parseInt(hexValue.substring(5,7), 16);
    return { red, green, blue } // Store Variables as an Object
};