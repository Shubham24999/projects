import React from 'react'
import data from '../db.json'
import User from './User'
import { useContext } from 'react'
import { ThemeContext } from '../Context/ThemeContextProvider'



export const Dashboard = () => {

    const { isDarkTheme, setIsDarkTheme } = useContext(ThemeContext);

    const handleSelect = (e) => {
        setIsDarkTheme(e.target.value == 'light' ? false : true)
    }


    return (
        <div data-testid = "dashboard-cont" style={{ backgroundColor: isDarkTheme ? 'black' : 'white' }}>
            <select data-testid = "select-theme" onChange={handleSelect}>
                <option value='light'>Light Theme</option>
                <option value='dark'>Dark Theme</option>
            </select>
            <h3 style={{ color: isDarkTheme ? 'white' : 'black' }}>All Active Users</h3>
            {data.map((user) =>{
                return <User key={user.id} isDarkTheme={isDarkTheme} user={user} />})
            }
        </div>
)
}
