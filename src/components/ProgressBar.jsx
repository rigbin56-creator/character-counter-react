const ProgressBar = () => {
    return(
        <li>
                  <span>{letter.letterName.toUppercase}</span>
                  <meter min="0" max="100" value={letter.percentage}></meter>
                  <span>{letter.amount} ({letter.percentage.toFixed(1)}%)</span>
              </li>
    )
}

export { ProgressBar }