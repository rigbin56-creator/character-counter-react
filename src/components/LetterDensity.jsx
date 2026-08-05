import { ProgressBar } from "./ProgressBar"

const LetterDensity = ({
  sortLetters,
  showAll,
  setShowAll,
}) => {
  const visibleLetters = showAll
    ? sortLetters
    : sortLetters.slice(0, 5)

  return (
    <section>
      <h2>Cantidad de letras</h2>

      <button onClick={() => setShowAll(!showAll)}>
        {showAll ? "Ver menos" : "Ver todos"}
      </button>

      <article>
        {visibleLetters.map((letter) => (
          <ProgressBar
            key={letter.letter}
            letter={letter}
          />
        ))}
      </article>
    </section>
  )
}

export { LetterDensity }
