// Цветовая схема сайта

const colors = {
    // Основные цвета
    absoluteWhite: '#FFF', // Подкладка для заметок
    white: '#F6F6F7', // Светлый фон
    dark: '#2C2C2C', // Тёмный фон
    darkFont: '#262626', // Тёмный шрифт
    middle: '#555', // Заголовки на светлом фоне
    contrast: '#CC725C', // Контрастный цвет (шкала плеера, яркие заголовки)

    // Дополнительные цвета
    black: '#030303', // Футер, фон плеера для радио
    hover: '#AAA', // При наведении на ссылку
    press: '#AAA', // При клике на ссылку
    copyright: '#5E606C' // Для копирайта
}

export const colorScheme = {
    /* SCREEN #1 */

    // RadioIcon
    radioIcon: colors.white,
    radioIconHover: colors.hover,
    // Title
    title: colors.white,
    titleText: colors.contrast,
    // Menu
    navbarLink: colors.white,
    navbarLinkHover: colors.hover,
    navbarLinkPress: colors.press,
    // Copyright
    copyright: colors.copyright,

    /* SCREEN #2 */

    // Наименование альбома
    posterNameAlbum: colors.middle,
    // Исполнитель
    posterArtist: colors.contrast,
    // Шкала под постером
    scrabberPoster: colors.middle,
    // Прогресс шкалы под постером
    progressPoster: colors.contrast,
    // Плейлист
    playlistItem: colors.darkFont,
    playlistItemPress: colors.contrast,
    // Плеер
    playerWrap: 'linear-gradient(to top, #444 0%, #555 50%, #444 51%, #444 100%)',
    // Иконка воспроизведения
    playIcon: colors.white,
    // Шкала проигрывания
    scrabber: colors.white,
    // Прогресс
    progress: colors.contrast,
    // Таймлайн
    timeline: colors.white,

    /* SCREEN №3 */
    // Фон заметок description
    descriptionArticle: colors.absoluteWhite,

    /* SCREEN №4 */
    // Фон для радиоплеера
    radioboxWrap: colors.dark,
    // Фон для панели с кнопками
    radioboxButtons: colors.black,
    // Кнопки
    radioboxButtonsColor: colors.absoluteWhite,
    // Название радиостанции
    radioboxTitle: colors.contrast,
    // Описание радиостанции
    radioboxTitleText: colors.white,

    /* FOOTER */
    // Фон футера
    footerWrap: colors.black,
    // Цвет текста футера
    footerWrapColor: colors.copyright
}
