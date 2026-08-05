import { useState } from "react"
import { Header } from "./components/Header"
import { WriteArea } from "./components/WriteArea"
import { Controls } from "./components/Controls"
import { Stats } from "./components/Stats"
import { LetterDensity } from "./components/LetterDensity"

const App = () => {
  const [text, setText] = useState("Hola, esto es un texto de prueba")

  const [excludeSpaces, setExcludeSpaces] = useState(false)
  const [limitCharacter, setLimitCharacter] = useState(false)
  const [limitValue, setLimitValue] = useState(300)
  const [showAll, setShowAll] = useState(false)

  const [dark, setDarkTheme] = useState(
    localStorage.getItem("theme") === "dark"
  )

  const handleExcludeSpaces = () => {
    setExcludeSpaces(!excludeSpaces)
  }

  const characters = excludeSpaces
    ? text.replace(/\s/g, "").length
    : text.length

  const words =
    text.trim() === "" ? 0 : text.trim().split(/\s+/).length

  const sentences =
    text.trim() === ""
      ? 0
      : text
          .split(/[.!?]/)
          .filter((sentence) => sentence.trim() !== "").length

  const readingTime = Math.ceil(words / 200)

  const handleInputLimit = () => {
    setLimitCharacter(!limitCharacter)

    if (!limitCharacter) {
      setText(text.slice(0, limitValue))
    }
  }

  const handleChangeTextarea = (e) => {
    const value = e.target.value

    if (limitCharacter) {
      if (value.length <= limitValue) {
        setText(value)
      }
    } else {
      setText(value)
    }
  }

  const cleanText = text
    .toLowerCase()
    .replace(/[^a-záéíóúüñ]/g, "")

  const total = cleanText.length

  const dictionaryLetters = {}

  cleanText.split("").forEach((letter) => {
    dictionaryLetters[letter] =
      (dictionaryLetters[letter] || 0) + 1
  })

  const letters = Object.entries(dictionaryLetters).map(
    (dataLetter) => {
      const letter = dataLetter[0]
      const amountLetter = dataLetter[1]

      const infoToRenderLetter = {
        letter: letter,
        amount: amountLetter,
        percentage:
          total === 0 ? 0 : (amountLetter / total) * 100,
      }

      return infoToRenderLetter
    }
  )

  const sortLetters = letters.sort(
    (a, b) => b.amount - a.amount
  )

  const visibleLetters = showAll
    ? sortLetters
    : sortLetters.slice(0, 5)

  const handleDarkTheme = () => {
    setDarkTheme(!dark)

    if (!dark) {
      localStorage.setItem("theme", "dark")
    } else {
      localStorage.removeItem("theme")
    }
  }

  return (
    <>
    <main className={dark ? "dark-theme" : ""}>
      <Header
        dark={dark}
        handleDarkTheme={handleDarkTheme}
      />

        <WriteArea
          text={text}
          handleChangeTextarea={handleChangeTextarea}
        />

        <Controls
          excludeSpaces={excludeSpaces}
          handleExcludeSpaces={handleExcludeSpaces}
          limitCharacter={limitCharacter}
          handleInputLimit={handleInputLimit}
          limitValue={limitValue}
          setLimitValue={setLimitValue}
          readingTime={readingTime}
        />

        <Stats
          words={words}
          sentences={sentences}
          readingTime={readingTime}
          characters={characters}
        />

        {text && (
          <LetterDensity
            sortLetters={sortLetters}
            visibleLetters={visibleLetters}
            showAll={showAll}
            setShowAll={setShowAll}
          />
        )}
      </main>
    </>
  )
}

export { App }