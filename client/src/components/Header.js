import React from 'react'
import {
    HeaderWrap,
    RadioIcon,
    Title,
    TitleText,
    Navbar,
    NavbarLink,
    Copyright
} from '../styles/screen1/'
//import { colorScheme } from '../styles/colorScheme'

export default class Header extends React.Component {
    handlePress = e => {
        this.props.getAlbum(e.target.id) // Вернуть в id альбома в HeaderContainer
    }

    componentDidUpdate(prevProps) {
        /*
        if (prevProps.target !== this.props.target) {
            const arr = Array.from(this.nav.children)
           
            arr.forEach(item => {
                if (this.props.target === item.innerHTML) {
                    item.style = `color: ${colorScheme.linkMenuPress};`
                }
            })
        
        }
*/
    }

    render() {
        const { names } = this.props
        let list = names.map((item, i) => (
            <NavbarLink key={i} id={item} onClick={this.handlePress}>
                {item}
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
