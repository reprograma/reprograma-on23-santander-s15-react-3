function Image(props) { // imagem, texto, class, 
  return (
    <> 
      <img className={props.class} src={props.image}/>
      <p>{props.caption}</p>
    </>
  )
}

export default Image
