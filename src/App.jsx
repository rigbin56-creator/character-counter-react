import { use, useState } from "react"
import { Header } from "./components/Header"

const  App = () => {
  const [text, setText] = useState("Hola, esto es un texto de prueba")
  
  const [excludeSpaces, setExcludeSpaces] = useState(false)
  const [limitCharacter, setLimitCharacter] = useState(false)
  const [limitValue, setLimitValue] = useState(300)

  const characters = excludeSpaces ? text.replace(/\s/g, "").length : text.length

  const words = text.trim() === "" ? 0 : text.trim().split(/\s+/).length

  const sentences = text.trim() === "" ? 0 : text.split(/[.!?]/).filter(sentence => sentence.trim() !== "").length

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

  if (text.typeof)

  return(
  <main>
     <Header />
    <h2>Analyze your text <br /> 
    in real-time.</h2>
    <textarea placeholder="Escribe tu texto..." onChange={(e) => setText(e.target.value)} value={text}></textarea>
    <div>
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
    </div>
    <p>Cantidad de caracteres: {characters}</p>
    <p>Cantidad de palabras: {words}</p>
    <p>Cantidad de oraciones</p>
  </main>)
}

export { App }
