import React from 'react'

export default function Header(props) {
    const {countCartItem} = props;
    return (
        <header className="row block center">
            <div className="title">
                <a href="#/">
                    LOGO
                </a>
            </div>
            <div className="nav">
                <a href="#/cart"><i class="fas fa-shopping-cart"></i> {' '}
                {countCartItem ? (
                    <button className="btn btn-badge">{countCartItem}</button>
                ) : (
                    ''
                )}</a>{' '}
                <a href="#/sigin">SignIn</a>
            </div>
        </header>
    )
}
