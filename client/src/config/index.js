// ТЕКСТЫ
import { texts_time } from '../data/texts/texts_time'
import { texts_nobody } from '../data/texts/texts_nobody'
import { texts_backToSchool } from '../data/texts/texts_backToSchool'

// ПОСТЕРЫ
import { poster_time, poster_nobody, poster_backToSchool } from '../api/images'

// ОСНОВНЫЕ ДАННЫЕ
export const configAlbum = {
    Время: {
        name: 'Время',
        list: [
            'Деньги всей земли',
            'Время',
            'Ещё один день',
            'Если когда-нибудь',
            'Прости меня',
            'Без тебя',
            'Когда упадут звёзды',
            'Парк',
            'Одинокая звезда',
            'Начни с себя',
            'Далеко',
            'С первым снегом'
        ],
        author: 'Лето наших надежд',
        poster: poster_time,
        photographer: 'Alex Robert',
        year: 2011,
        description: `
            'Лето наших надежд' с привкусом грусти. Летняя тёплая романтика и первый снег, одинокий дождь и признания.
            В лучшем качестве перезаписаны некоторые старые песни.  
        `
    },
    'Никто не ждёт': {
        name: 'Никто не ждёт',
        list: [
            'Город',
            'Время',
            'Ещё один день',
            'Моё сердце',
            'Мартовская кровь',
            'На свидание с ветром',
            'Посмотрю в небеса',
            'Никто не ждёт'
        ],
        author: 'Сергей Шпагин',
        poster: poster_nobody,
        photographer: 'Brandi Redd',
        year: 2007,
        description: `
            Институт, курсовые, первые экзамены, любовь, разочарования, посиделки с друзьями, а вместе с тем - мысли о настоящем и будущем...
            Куда мы движемся? Что нас ждёт? Запутанный клубок мыслей способствовал написанию песен данного сборника.   
        `
    },
    backToSchool: {
        name: 'backToSchool',
        list: [
            'Выпускница',
            'Ботаник',
            'Кудряшки',
            'Хорошо',
            'Песенка для девочек',
            'В первый раз',
            'Она',
            'Далеко',
            'Наступит тот день!',
            'Помутнело в глазах моих'
        ],
        author: 'БАтаники',
        poster: poster_backToSchool,
        photographer: 'Aleksandr Ledogorov',
        year: 2004,
        description: `
            Год примерно 2004.
            Для записи использовали: подъезд городской пятиэтажки, две акустики, двухкассетник, пару банок и хорошее настроение.
            На улице лето, впереди вся жизнь и, непременно, всё будет хорошо!   
        `
    }
}

// ПРИВЯЗАТЬ ТЕКСТЫ К АЛЬБОМАМ С ПОРЯДКОМ КАК В СВОЙСТВЕ LIST
export const texts = {
    Время: configAlbum['Время'].list.map(item => texts_time[item]),
    'Никто не ждёт': configAlbum['Никто не ждёт'].list.map(item => texts_nobody[item]),
    backToSchool: configAlbum['backToSchool'].list.map(item => texts_backToSchool[item])
}

// ДОСТУП К МЕДИАДАННЫМ
export const pathToMedia = album => {
    const [time, nobody, backToSchool] = [
        require.context('../../../data/sound/Время', true, /\.mp3$/),
        require.context('../../../data/sound/Никто не ждёт', true, /\.mp3$/),
        require.context('../../../data/sound/backToSchool', true, /\.mp3$/)
    ]

    const [path_time, path_nobody, path_backToSchool] = [
        getPath(time),
        getPath(nobody),
        getPath(backToSchool)
    ]

    function getPath(name) {
        const keys = name.keys()
        const arr = keys.map(key => name(key))
        return arr
    }

    if (album.name === 'Время') return path_time
    if (album.name === 'Никто не ждёт') return path_nobody
    if (album.name === 'backToSchool') return path_backToSchool
}
