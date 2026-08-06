const ProgressBar = ({ letter }) => {
  return (
    <div className="density-row">
      <span className="letter">
        {letter.letter.toUpperCase()}
      </span>

      <div className="bar">
        <div
          className="fill"
          style={{ width: `${letter.percentage}%` }}
        />
      </div>

      <span className="stats">
        {letter.amount} ({letter.percentage.toFixed(1)}%)
      </span>
    </div>
  )
}

export { ProgressBar }
