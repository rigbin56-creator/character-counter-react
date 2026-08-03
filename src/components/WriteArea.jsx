const WriteArea = ({ text, handleChangeTextarea }) => {
  return (
    <textarea
      placeholder="Escribe tu texto..."
      onChange={handleChangeTextarea}
      value={text}>
    </textarea>
  )
}

export { WriteArea }