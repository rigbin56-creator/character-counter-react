const Controls = ({
  excludeSpaces,
  handleExcludeSpaces,
  limitCharacter,
  handleInputLimit,
  limitValue,
  setLimitValue,
  readingTime,
}) => {
  return (
    <section>
      <div>
        <label>
          <input
            type="checkbox"
            checked={excludeSpaces}
            onChange={handleExcludeSpaces}
          />

          Excluir espacios
        </label>

        <label>
          <input
            type="checkbox"
            checked={limitCharacter}
            onChange={handleInputLimit}
          />

          Limite de caracteres
        </label>

        {limitCharacter && (
          <input
            type="number"
            value={limitValue}
            onChange={(e) => setLimitValue(Number(e.target.value))}
          />
        )}
      </div>

      <p>Tiempo aprox. de lectura: {readingTime} min</p>
    </section>
  )
}

export { Controls }