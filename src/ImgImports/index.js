function importAll(r) {
    return r.keys().map(r);
}

const images = importAll(require.context('../assets/img', false, /\.(png|jpe?g|svg)$/))

export function getImg(code = 800){

    const arrCodes = [ 200, 201, 202, 230, 231, 232, 233, 300, 301, 302, 500, 501, 502, 511, 520,
        521, 522, 600, 601, 602, 610, 611, 612, 621, 622, 623, 700, 711, 721, 731, 741, 751, 800,
        801, 802, 803, 804, 900 ]
    
    const ID = arrCodes.indexOf(code)
    return images[ID].default
}
