import { use, useState } from "react"
import { Header } from "./components/Header"
import { WriteArea } from "./components/WriteArea"
import { Controls } from "./components/Controls"
import { Stats } from "./components/Stats"
import { LetterDensity } from "./components/LetterDensity"

const  App = () => {
  const [text, setText] = useState("Hola, esto es un texto de prueba")
  
  const [excludeSpaces, setExcludeSpaces] = useState(false)
  const [limitCharacter, setLimitCharacter] = useState(false)
  const [limitValue, setLimitValue] = useState(300)
  const [showAll, setShowAll] = useState(false)
  const [dark, setDarkTheme] = useState(JSON.parse(localStorage.getItem("theme") === "dark" ? true : false))

  const handleExcludeSpaces = () => {
    serExlcudeSpaces(!excludeSpaces)
  } 
  // creo q falta algo


  const characters = excludeSpaces ? text.replace(/\s/g, "").length : text.length

  const words = text.trim() === "" ? 0 : text.trim().split(/\s+/).length

  const sentences = text.trim() === "" ? 0 : text.split(/[.!?]/).filter(sentence => sentence.trim() !== "").length

  const readingTime = Math.ceil(words / 200)

  const handleInputLimit = () => {
    setLimitCharacter(!limitCharacter)
    const newText = text.slice(0, limitValue)
    setText(newText)
  }

  const handleChangeTextarea = (e) => {
    const value = e.target.value

    if (limitCharacter) {
      if (e.target.value.length <= limitValue) {
        setText
      }
    } else {
      setText(e.target.value)
    }
  }

  const cleanText = text.toLowerCase().replace(/[^a-záéíóúüñ]/g, "")
  const total = cleanText.length

  // diccionario --> clave/valor
  const dictionaryLetters = {}

  cleanText.split("").forEach(letter =>{
    dictionaryLetters[letter] = (dictionaryLetters[letter] || 0) + 1
  })

  const letters = Object.entries(dictionaryLetters).map(dataLetter => {
    const letter = dataLetter[0]
    const amountLetter = dataLetter[1]

    const infoToRenderLetter = {
      letter: letter,
      amount: amountLetter,
      percentage: (amountLetter / total)* 100
    }

    return infoToRenderLetter
  })

  const sortLetters = letters.sort((a, b) => b.amount - a.amount)

  const visibleLetters = showAll ? sortLetters : sortLetters.slice(0, 5)

  const  handleDarkTheme = () => {
    setDarkTheme(!dark)
    if (!dark) {
      localStorage.setItem("theme", JSON.stringify("dark"))
    } else {
      localStorage.removeItem("theme")
    }
  }

  return(
  <main>
     <Header dark={dark} handleDarkTheme={handleDarkTheme}/>
    <h2>Analyze your text <br /> 
    in real-time.</h2>
    {/* <textarea placeholder="Escribe tu texto..." onChange={(e) => setText(e.target.value)} value={text}></textarea> */}
    <WriteArea 
    handleChangeTextarea={handleChangeTextarea}
    text={text}
    />
    {/* <div>
        <label>
          <input type="checkbox"  checked={limitCharacter} onChange={handleInputLimit}/>
          Limite de caracteres
        </label>
        {
          limitCharacter && 
          <input type="number" 
          onChange={(e) => setLimitValue(e.target.value)}
          />
        }
    </div> */}
    <Controls 
    excludeSpaces={excludeSpaces}
    handleExcludeSpaces={handleExcludeSpaces}
    limitCharacter={limitCharacter}
    handleChangeInputLimit={handleChangeInputLimit}
    limitValue={limitValue}
    handleLimitValue={handleLimitValue}
    />

    <Stats 
    words={words}
    sentences={sentences}
    readingTime={readingTime}
    characters={characters}
    />
    {/* <p>Cantidad de caracteres: {characters}</p>
    <p>Cantidad de palabras: {words}</p>
    <p>Cantidad de oraciones: {sentences}</p>
    <p>Tiempo aprox de lectura: {readingTime} min</p> */}
    
    {
      text && <LetterDensity  />
    }
    {/* <section>
        <h2>Cantidad de letras</h2>
        <button onClick={() => setShowAll(!showAll)}>{showAll ? "Ver menos" : "Ver todos"}</button>
        <article>
            {
             sortLetters.splice(0, 5).map(letter => 
              <div key={letter.letterName}>
                  <span>{letter.letterName.toUppercase}</span>
                  <meter min="0" max="100" value={letter.percentage}></meter>
                  <span>{letter.amount} ({letter.percentage.toFixed(1)}%)</span>
              </div>)
            }
        </article>
    </section> */}
    
  </main>)
}

export { App }
