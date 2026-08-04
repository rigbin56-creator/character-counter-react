const Header = ({ dark, handleDarkTheme }) => {
  return (
    <header>
      <h1>Character Counter UTN</h1>

      <button onClick={handleDarkTheme}>
        {dark ? "☀️" : "🌙"}
      </button>
    </header>
  )
}

export { Header }