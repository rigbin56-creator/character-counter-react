const Stats = ({
  characters,
  words,
  sentences,
  readingTime,
}) => {
  return (
    <section>
      <p>Cantidad de caracteres: {characters}</p>
      <p>Cantidad de palabras: {words}</p>
      <p>Cantidad de oraciones: {sentences}</p>
      <p>Tiempo aprox de lectura: {readingTime} min</p>
    </section>
  )
}

export { Stats }