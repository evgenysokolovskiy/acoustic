import React from 'react'
import { configAlbum } from '../config/'
import {
    DescriptionWrap,
    DescriptionArticle,
    DescriptionImage,
    DescriptionText,
    HomeIcon
} from '../styles/screen3/'

export default class Description extends React.Component {
    handlePressHomeIcon = () => {
        const elem = document.getElementById('header')
        elem.scrollIntoView({ block: 'start', behavior: 'smooth' })
    }

    render() {
        const albums = Object.keys(configAlbum)
        const article = albums.map(item => (
            <DescriptionArticle key={configAlbum[item].name}>
                <h2>
                    Альбом: <b>{configAlbum[item].name}</b>
                </h2>
                <h5>
                    Исполнитель: <b>{configAlbum[item].author}</b>
                </h5>
                <DescriptionImage
                    style={{ background: `url(${configAlbum[item].poster}) 100% 100% no-repeat` }}
                />
                <DescriptionText>{configAlbum[item].description}</DescriptionText>
            </DescriptionArticle>
        ))

        return (
            <DescriptionWrap id="description">
                {article}
                <HomeIcon onClick={this.handlePressHomeIcon}>close</HomeIcon>
            </DescriptionWrap>
        )
    }
}

/*
                    Часть 1. Начало 2000х. Нас двое. Только закончили школу. Для нас ещё нет
                    компьютера, нет интернета. В летнее время любимое место препровождения - парки,
                    где всегда можно спрятатся от солнца, прихватив с собой пару холодного пива.
                    Зимой от холода укрывались в подъездах. Почти всегда с собой гитара. На ум
                    приходили простые мелодии и тексты. Веселье и немного грусти... Всё просто! Нет
                    философских размышлений о смысле жизни. Ни для кого не пытались играть, но
                    всегда находились слушатели. Одни подсаживались на соседние скамейки в парке,
                    другие подходили с предложением принести чего-нибудь покрепче и продолжить
                    вечер. В подъезде нетрезвый сосед не мог пройти мимо, чтобы не остановится и не
                    послушать пару песен. В ту пору мы называли себя "БАтаники", именно через "А".
                    Играли, своего рода, неформально-ботанический панк. В атмосфере позитива, даже
                    немного протеста против системы, развивалось наше творчество. Запись на данном
                    сборнике сделана на кассетный магнитофон, большая часть песен записана в
                    подъезде. Затем переписывали с кассеты на кассету друзьям и знакомым. И вот в
                    настояшее время в один из дней, перебирая старые вещи, нашёл большое количество
                    старых кассет. Из-за большого их количества прослушал пока только часть, что-то
                    оцифровал, что-то нет. Качество записи оставляет желать лучшего, но в тот момент
                    у нас и не было других возможностей. Сейчас же для нас это не главное. Главное -
                    воспоминание вечного лета! Возможно, сборник будет пополнятся новыми найденными
                    мной записями.
*/

/*
                    Часть 2. Середина 2000-х. В то время, пока один из участников в течение двух лет
                    топтал сапоги, запевая на вечерних прогулках "Катюшу", второй продолжал начатое
                    дело. Появились компьютеры, программы для обработки звука. Появилась возможность
                    писать более качественно. В этот период было что-то записано из старого, что-то
                    придумано. Роль соло гитары так же взвалилась на плечи оставшегося единственного
                    участника. Песни становятся более осмысленными, с более романтическим уклоном.
                    Появляется целый ряд песен: "Город", "Ещё один день", "Моё сердце", "Мартовская
                    кровь", "Никто не ждёт". Институт, курсовые, первые настоящие экзамены. Первые
                    разочарования. Всё это наложило свои отпечатки на текстах песен. В записи вокала
                    так же принимает участие приглашенный исполнитель. На сборнике альбом записан в
                    2 голоса, одна песня записана с женским вокалом.
*/

/*
                    Часть 3. Начало 2010-х. Нас опять двое. Чтобы как-то подвести итог нашему
                    творчеству хотелось записать полноценный студийный альбом, куда вошли бы, на наш
                    взгляд, лучшие песни на тот момент. И мы это сделали! 12 песен, которые отразили
                    нас нсквозь. В этом и есть мы! Альбом получился более серьёзным, философским,
                    чем предыдущие работы. Возможно, не хватает лёгкости, наивности, но на тот
                    момент получилось то, что и должно было получится. Для себя придумали новое
                    более философское название, вместо "БАтаников" мы стали "Лето наших надежд".
                    Случилось так, что выступили на нескольких концертах, победили в небольшом
                    конкурсе авторской песни. Хотя свою музыку никогда не считали таковой. Но так
                    случилось. В противовес названию группы альбом получился более зимним, со
                    снежинками, безысходностью, но, всё-таки, с надеждой на будущую весну.
                    Вопрос-будет ли она?
*/
