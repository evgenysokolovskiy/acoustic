import React from 'react'
import {
    HeaderWrap,
    RadioIcon,
    Title,
    TitleText,
    Navbar,
    NavbarLink,
    NavbarLinkPress,
    Copyright
} from '../styles/screen1/'

export default class Header extends React.Component {
    handlePress = e => {
        this.props.getAlbum(e.target.id) // Вернуть id альбома в HeaderContainer
    }

    render() {
        const { names } = this.props
        let list = names.map((item, i) => (
            <NavbarLink key={i} id={item} onClick={this.handlePress}>
                {item !== this.props.target ? item : <NavbarLinkPress>{item}</NavbarLinkPress>}
            </NavbarLink>
        ))

        return (
            <header>
                <HeaderWrap>
                    <RadioIcon>radio</RadioIcon>
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
                </HeaderWrap>
            </header>
        )
    }
}
