function convertRGB(r, g, b) {
    if((typeof(r) === 'string' || typeof(r) === 'number') 
      && (typeof(g) === 'string' || typeof(g) === 'number') 
      && (typeof(b) === 'string' || typeof(b) === 'number') ) {

        const rgb = (r << 16) | (g << 8) | (b << 0);
        return '#' + (0x1000000 + rgb).toString(16).slice(1);
    } else {
        throw new Error('You must only use numbers or strings as rgb values');
    }
};

export default convertRGB;