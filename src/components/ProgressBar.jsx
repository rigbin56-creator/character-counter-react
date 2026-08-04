const ProgressBar = ({ letter }) => {
  return (
    <div>
      <span>{letter.letter.toUpperCase()}</span>

      <meter
        min="0"
        max="100"
        value={letter.percentage}
      />

      <span>
        {letter.amount} ({letter.percentage.toFixed(1)}%)
      </span>
    </div>
  )
}

export { ProgressBar }