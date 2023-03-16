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