import React from 'react'
import {
    HeaderWrap,
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
    handlePress = e => {
        this.props.getAlbum(e.target.id) // Вернуть id альбома в HeaderContainer
    }

    handlePressDescriptionIcon = () => {
        const elem = document.getElementById('description')
        elem.scrollIntoView({ block: 'start', behavior: 'smooth' })
    }

    handlePressRadioIcon = () => {
        const elem = document.getElementById('radio')
        elem.scrollIntoView({ block: 'start', behavior: 'smooth' })
    }

    handlePressArrow = () => {
        const elem = document.getElementById('poster')
        elem.scrollIntoView({ block: 'start', behavior: 'smooth' })
    }

    render() {
        const { names } = this.props
        let list = names.map((item, i) => (
            <NavbarLink key={i} id={item} onClick={this.handlePress}>
                {item !== this.props.target ? item : <NavbarLinkPress>{item}</NavbarLinkPress>}
            </NavbarLink>
        ))

        return (
            <header id="header">
                <HeaderWrap>
                    <RadioIcon onClick={this.handlePressRadioIcon}>radio</RadioIcon>
                    <Title>Acoustic-friends.ru</Title>
                    <TitleText>Акустическая музыка для друзей</TitleText>
                    <Navbar
                        ref={nav => {
                            this.nav = nav
                        }}
                    >
                        {list}
                    </Navbar>
                    <Copyright>copyright</Copyright>
                    <DescriptionIcon onClick={this.handlePressDescriptionIcon}>
                        arrow_back_ios
                    </DescriptionIcon>
                    <Arrow onClick={this.handlePressArrow}>keyboard_arrow_down</Arrow>
                </HeaderWrap>
            </header>
        )
    }
}
