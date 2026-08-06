const WriteArea = ({ text, handleChangeTextarea }) => {
  return (
    <section className="inputs-zone">
      <textarea
        placeholder="Escribe tu texto..."
        onChange={handleChangeTextarea}
        value={text}
      />
    </section>
  )
}

export { WriteArea }