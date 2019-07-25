import React from 'react'
import Description from './Description'
import Texts from './Texts'
import {
    HeaderWrap,
    TextsIcon,
    DescriptionIcon,
    RadioIcon,
    Title,
    TitleText,
    Navbar,
    NavbarLink,
    NavbarLinkPress,
    Copyright,
    Arrow
} from '../styles/screen1/'

export default class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            txtElem: null,
            descriptionElem: null,
            radioboxElem: null
        }
    }
    componentDidMount() {
        this.props.getHeader(this.headerElem)
    }

    // Получить id альбома в HeaderContainer
    handlePress = e => {
        this.props.getAlbum(e.target.id)
    }

    /* Получить элементы */

    // Тексты песен
    getTxtElem = txtElem => {
        this.setState({ txtElem })
    }

    // Описание альбомов
    getDescriptionElem = descriptionElem => {
        this.setState({ descriptionElem })
    }

    /* Клик по кнопкам навигации */

    // Тексты песен
    handlePressTextsIcon = () => {
        // Показать элемент
        const elem = this.state.txtElem
        elem.style.cssText += 'display: block;'
        // Скрыть элемент (если открыт)
        const hide = this.state.descriptionElem
        hide.style.cssText += 'display: none;'
    }

    // Описание альбомов
    handlePressDescriptionIcon = () => {
        // Показать элемент
        const elem = this.state.descriptionElem
        elem.style.cssText += 'display: block;'
        // Скрыть элемент (если открыт)
        const hide = this.state.txtElem
        hide.style.cssText += 'display: none;'
    }

    // Радиобокс
    handlePressRadioIcon = () => {
        const radioboxElem = this.props.radioboxElem
        radioboxElem.scrollIntoView({ block: 'start', behavior: 'smooth' })
    }

    // Стрелка вниз (страница прослушивания)
    handlePressArrow = () => {
        const elem = this.props.posterElem
        elem.scrollIntoView({ block: 'start', behavior: 'smooth' })
    }

    render() {
        // Построить меню с названиями альбомов. Выделить активную ссылку
        const { names } = this.props
        let list = names.map((item, i) => (
            <NavbarLink key={i} id={item} onClick={this.handlePress}>
                {item !== this.props.target ? item : <NavbarLinkPress>{item}</NavbarLinkPress>}
            </NavbarLink>
        ))

        return (
            <>
                <HeaderWrap
                    ref={headerElem => {
                        this.headerElem = headerElem
                    }}
                >
                    <Title>Acoustic-friends.ru</Title>
                    <TitleText>Акустическая музыка для друзей</TitleText>
                    <Navbar>{list}</Navbar>
                    <Copyright>copyright</Copyright>
                    <TextsIcon onClick={this.handlePressTextsIcon}>text_fields</TextsIcon>
                    <DescriptionIcon onClick={this.handlePressDescriptionIcon}>
                        description
                    </DescriptionIcon>
                    <RadioIcon onClick={this.handlePressRadioIcon}>radio</RadioIcon>
                    <Arrow onClick={this.handlePressArrow}>keyboard_arrow_down</Arrow>
                </HeaderWrap>
                <Description
                    album={this.props.album}
                    indexComposition={this.props.indexComposition}
                    getDescriptionElem={this.getDescriptionElem}
                />
                <Texts
                    album={this.props.album}
                    indexComposition={this.props.indexComposition}
                    getTxtElem={this.getTxtElem}
                    ref={txtElem => {
                        this.txtElem = txtElem
                    }}
                />
            </>
        )
    }
}
