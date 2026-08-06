const Stats = ({
  characters,
  words,
  sentences,
}) => {
  return (
    <section>
      <div className="result-card card-total-characters">
        <span className="total-value-result">
          {characters}
        </span>

        <p>Cantidad de caracteres</p>
      </div>

      <div className="result-card card-word-count">
        <span className="total-value-result">
          {words}
        </span>

        <p>Cantidad de palabras</p>
      </div>

      <div className="result-card card-sentence-count">
        <span className="total-value-result">
          {sentences}
        </span>

        <p>Cantidad de oraciones</p>
      </div>
    </section>
  )
}

export { Stats }