function convertRGB(r, g, b) {
    if(isCorrectType(r) && isCorrectType(g) && isCorrectType(b)) {
        if(isValidFloat(r) && isValidFloat(g) && isValidFloat(b)) {   
            const rgb = (r << 16) | (g << 8) | (b << 0);
            return '#' + (0x1000000 + rgb).toString(16).slice(1);   
        } else {
            throw new Error('Each value must be between 0 and 255');
        }
    } else {
        throw new Error('You must only use numbers or strings as rgb values');
    }
};

function isCorrectType(value) {
    return typeof(value) === 'string' || typeof(value) === 'number';
};

function isValidFloat(value) {
    return value === '' || (parseFloat(value) >= 0 && parseFloat(value) <= 255)
};

function cleanString(value) {
    return value.toString().replace(/\D+/g, '');
}

export {
    convertRGB,
    cleanString,
    isCorrectType,
    isValidFloat
};