import React from 'react'
import { createRoot } from 'react-dom/client'
import playerStyles from './player.module.scss'
import lineStyles from './line.module.scss'
import 'normalize.css'

const Player = ({
    data: { position, lastName },
}) => {
    return (
        <div
            className={playerStyles.player}
            style={{
                '--position': position,
            }}
        >
            <div
                className={playerStyles['rate-box']}
            >
                <input
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    size={1}
                    onFocus={() => {console.log('focus')} }
                    onBlur={() =>{ console.log('blur') }}
                />
            </div>
            <div className={playerStyles.name}>{lastName?.toUpperCase()}</div>
        </div>
    )
}

const Line = ({
    players = [],
}) => {

    return (
        <div className={lineStyles.line}>
        {players.map((player, index) => (
            <Player
                key={index}
                data={player}
            />
        ))}
        </div>
    )
}

const FieldA = () => {
    return (
        <>
            <Line
                players={[
                    {
                        position: 4,
                    },

                    {
                        position: 6,
                    },
                ]}
            />
            <Line
                players={[
                    {
                        position: 3,
                    },
                    {
                        position: 5,
                    },
                    {
                        position: 7,
                    },
                ]}
            />
            <Line
                players={[
                    {
                        position: 1,
                    },
                    {
                        position: 3,
                    },
                    {
                        position: 5,
                    },
                    {
                        position: 7,
                    },                {
                        position: 9,
                    }
                ]}
            />
        </>
    )
}

const FieldB = () => {
    return (
        <>
            <Line
                players={[
                    {
                        position: 3,
                        lastName: 'Perišić',
                    },
                    {
                        position: 5,
                        lastName: 'Mbappé',
                    },
                    {
                        position: 7,
                        lastName: 'Dembélé',
                    }
                ]}
            />
            <Line
                players={[
                    {
                        position: 3,
                        lastName: 'Machís',
                    },
                    {
                        position: 5,
                        lastName: 'Alcântara',
                    },
                    {
                        position: 7,
                        lastName: 'Sané',
                    }
                ]}
            />
            <Line
                players={[
                    {
                        position: 2,
                        lastName: 'Hernández',
                    },
                    {
                        position: 4,
                        lastName: 'Djené',
                    },
                    {
                        position: 6,
                        lastName: 'Militão',
                    },
                    {
                        position: 8,
                        lastName: 'Alexander-Arnold',
                    }
                ]}
            />
            <Line
                players={[
                    {
                        position: 5,
                        lastName: 'Gulácsi',
                    },
                ]}
            />
        </>
    )
}

createRoot(document.querySelector('.root')).render(
    <>
        <h2>4-3-3</h2>
        <div className="container">
        <FieldB />
        </div>
    </>
)