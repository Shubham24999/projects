import React from 'react'

export default function User({ isDarkTheme, user }) {
    
    return (
        <div data-testid = "user" style={{ color: isDarkTheme ? 'white' : 'black' }}>
            <div>
                <img src={user.img} alt="image" width='100px' />
                <h4>{user.name}</h4>
                <h4>{user.position}</h4>
            </div>
            <input data-testid = "level" type = "range" style={{ accentColor: isDarkTheme ? 'yellow' : 'blue' }}/>
            <h5 >Profession Level {user.level}</h5>
            <h5 >{user.points} Points</h5>
        </div>
    )
}
