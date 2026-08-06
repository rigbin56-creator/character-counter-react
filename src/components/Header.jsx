const Header = ({ dark, handleDarkTheme }) => {
  return (
    <header>
      <h1>Character Counter UTN</h1>

      <div className="hero-section">
       <h2>Analyze your text<br />in real-time.</h2>
      </div>

      <button onClick={handleDarkTheme}>
        <img 
          src={dark ? "./src/assets/icons/light-mode.png" : "./src/assets/icons/dark-mode.png"} 
          alt="icono tema" 
          style={{ width: "28px", height: "28px" }}
        />
      </button>

    </header>
  )
}

export { Header }