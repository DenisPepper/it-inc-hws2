import React from 'react'
import s from './App.module.css'

const BALLS = Array.from({length: 12});

function App() {
    const getStyle = () => ({animationDuration: `${20 / Math.random()}s`} as React.CSSProperties);

    const getClassName = () => Math.random() > 0.5 ? s.ball_option : s.ball;

    return (
        <div className={s.App}>
            <div className={s.balls}>
                {BALLS.map((n, i) => <span key={i} className={getClassName()} style={getStyle()}></span>)}
            </div>
        </div>
    )
}

export default App

