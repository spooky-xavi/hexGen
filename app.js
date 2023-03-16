// Declare variables
const background = document.body;
const theButton = document.querySelector('button');
const paragraph = document.getElementById('hexColor');

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

const getContrast = () => {
    const rgbValues = getRgbFromHex(); // Call the getRgbFromHex function and store the returned object in the rgbValues variable. Then, we can access the individual red, green, and blue values using the dot notation and logging them to the console.
    
    // Base value to test against
    const red = 0;
    const green = 0;
    const blue = 0;
    
    const colorBrightness = (rgbValues.red * 299) + (rgbValues.green * 587) + (rgbValues.blue * 114) / 1000;
    
    const colorDifference = (Math.max(rgbValues.red, red) - Math.min(rgbValues.red, red)) + 
    (Math.max(rgbValues.green, green) - Math.min(rgbValues.green, green)) +
    (Math.max(rgbValues.blue, blue) - Math.min(rgbValues.blue, blue));

    if (colorDifference > 510 || colorDifference < 250) {
        theButton.style.backgroundColor = "white";
        theButton.style.color = "black";
        paragraph.style.color = 'white';
        document.querySelector('h1').style.color = 'White';
        document.querySelector('p').style.color = 'White';
    } else {
        theButton.style.backgroundColor = "black";
        theButton.style.color = "white";
        paragraph.style.color = 'black';
        document.querySelector('h1').style.color = 'black';
        document.querySelector('p').style.color = 'black';
    }
    
    return colorDifference;
};

const setBackground = (hexValue) => {
    background.style.backgroundColor = hexValue;
    paragraph.innerHTML = hexValue;
}