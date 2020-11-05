import React, { Component } from 'react'
import { ThemeContext } from '../context/ThemeContext'

export default class BookList extends Component {
    static contextType = ThemeContext;
    render() {
        const { isLightTheme, light, dark } = this.context;
        const theme = isLightTheme ? light : dark;
        return (
            <div className="book-list" style={{ color: theme.syntax, background: theme.bg}}>
                <li style={{ background: theme.ui }}>The way of Kings</li>
                <li style={{ background: theme.ui }}>The name of the wind</li>
                <li style={{ background: theme.ui }}>The final empire</li>
            </div>
        )
    }
}
