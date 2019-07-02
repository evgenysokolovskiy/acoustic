const size = {
    /*
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px' 
    */
    mobileS: '320px',
    _520: '520px',
    tablet: '768px',
    _1366: '1360px'
}

export const device = {
    // mobileS: `(max-width: ${size.mobileS})`,
    // mobileM: `(max-width: ${size.mobileM})`,
    mobileL: `(min-width: ${size.mobileS}) and (max-width: ${size.tablet})`,
    // middle: `(min-width: ${size._520}) and (max-width: ${size.tablet})`,
    // tablet: `(max-width: ${size.tablet})`,
    // laptop: `(max-width: ${size.laptop})`,
    // laptopL: `(max-width: ${size.laptopL})`,
    laptop: `(min-width: ${size.tablet}) and (max-width: ${size._1366})`
    // desktopL: `(max-width: ${size.desktop})`
}
