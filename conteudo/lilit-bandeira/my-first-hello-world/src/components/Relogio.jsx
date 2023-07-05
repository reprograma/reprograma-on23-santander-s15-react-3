function Relogio() {
  const hora = new Date().toLocaleTimeString()

  return (
    <h2>{hora}</h2>
  )
}

export default Relogio
