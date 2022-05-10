import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import playerStyles from './player.module.scss'
import lineStyles from './line.module.scss'
import 'normalize.css'

const Player = ({
    data: { position, lastName, prefilledScore },
}) => {

    const [ score, setScore ] = useState(prefilledScore)

    const updateScore = e => {
        setScore(e.currentTarget.value)
    }

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
                    value={score || ''}
                    onChange={updateScore}
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

const FieldB = ({ prefilledScores, }) => {
    console.log('prefilled scores?', prefilledScores)
    return (
        <>
            <Line
                players={[
                    {
                        position: 3,
                        lastName: 'Perišić',
                        prefilledScore: prefilledScores && prefilledScores[3][0],
                    },
                    {
                        position: 5,
                        lastName: 'Mbappé',
                        prefilledScore: prefilledScores && prefilledScores[3][1],
                    },
                    {
                        position: 7,
                        lastName: 'Dembélé',
                        prefilledScore: prefilledScores && prefilledScores[3][2],
                    }
                ]}
            />
            <Line
                players={[
                    {
                        position: 3,
                        lastName: 'Machís',
                        prefilledScore: prefilledScores && prefilledScores[2][0],
                    },
                    {
                        position: 5,
                        lastName: 'Alcântara',
                        prefilledScore: prefilledScores && prefilledScores[2][1],
                    },
                    {
                        position: 7,
                        lastName: 'Sané',
                        prefilledScore: prefilledScores && prefilledScores[2][2],
                    }
                ]}
            />
            <Line
                players={[
                    {
                        position: 2,
                        lastName: 'Hernández',
                        prefilledScore: prefilledScores && prefilledScores[1][0],
                    },
                    {
                        position: 4,
                        lastName: 'Djené',
                        prefilledScore: prefilledScores && prefilledScores[1][1],
                    },
                    {
                        position: 6,
                        lastName: 'Militão',
                        prefilledScore: prefilledScores && prefilledScores[1][2],
                    },
                    {
                        position: 8,
                        lastName: 'Alexander-Arnold',
                        prefilledScore: prefilledScores && prefilledScores[1][3],
                    }
                ]}
            />
            <Line
                players={[
                    {
                        position: 5,
                        lastName: 'Gulácsi',
                        prefilledScore: prefilledScores && prefilledScores[0][0],
                    },
                ]}
            />
        </>
    )
}

const getPrefilledScores = str => {
    return str.split('_')
        .map(fieldRow => fieldRow.split('-'))
        .map(fieldRow => {
            return fieldRow.map(scoreStr => {
                const score = parseInt(scoreStr)
                return Number.isNaN(score) ? null : score
            })

        })
}

const prefilledScoresParams = new URLSearchParams(location.search).get('scores')
const prefilledScores = prefilledScoresParams && getPrefilledScores(prefilledScoresParams)
 
createRoot(document.querySelector('.root')).render(
    <>
        <h2><a href="/?scores=6_5.5-x-6-8-7_7-8-x_4-9-6.4">4-3-3</a></h2>
        <a href="/">clear</a>
        <div className="container">
        <FieldB
            prefilledScores={prefilledScores}
        />
        </div>
    </>
)
