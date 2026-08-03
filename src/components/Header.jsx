import { useState } from "react"

const Header = ({ dark, handleDarkTheme }) => {
    const [dark, setDark] = useState(false)
    return(
    <header>
        <div>
            <p>C</p>
            <h1>Character Counter UTN</h1>
        </div>
        <button onClick={() => console.log(!dark)}>☀️</button>
    </header>)
}

export { Header }