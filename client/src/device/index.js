// 240 320, 480, 540, 640, 720,

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
    s: '320px',
    m: '360px',
    l: '425px',
    xl: '540px',
    xxl: '670px',

    _520: '520px',
    tablet: '768px',
    _1366: '1360px'
}

export const device = {
    // mobileS: `(max-width: ${size.mobileS})`,
    // mobileM: `(max-width: ${size.mobileM})`,
    portraitXs: `(orientation: portrait) and (max-width: ${size.s})`,
    portraitS: `(orientation: portrait) and (min-width: ${size.s}) and (max-width: ${size.m})`,
    portraitM: `(orientation: portrait) and (min-width: ${size.m}) and (max-width: ${size.l})`,
    portraitL: `(orientation: portrait) and (min-width: ${size.l}) and (max-width: ${size.xl})`,
    portraitXl: `(orientation: portrait) and (min-width: ${size.xl}) and (max-width: ${size.xxl})`,

    landscapeS: `(orientation: landscape) and (min-width: ${size.s}) and (max-width: ${size.m})`,
    landscapeM: `(orientation: landscape) and (min-width: ${size.m}) and (max-width: ${size.l})`,
    landscapeL: `(orientation: landscape) and (min-width: ${size.l}) and (max-width: ${size.xl})`,
    landscapeXl: `(orientation: landscape) and (min-width: ${size.xl}) and (max-width: ${
        size.xxl
    })`,

    // middle: `(min-width: ${size._520}) and (max-width: ${size.tablet})`,
    // tablet: `(max-width: ${size.tablet})`,
    // laptop: `(max-width: ${size.laptop})`,
    // laptopL: `(max-width: ${size.laptopL})`,
    laptop: `(min-width: ${size.tablet}) and (max-width: ${size._1366})`
    // desktopL: `(max-width: ${size.desktop})`
}
