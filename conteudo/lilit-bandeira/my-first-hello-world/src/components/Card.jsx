import Subtitle from "./Subtitle"
import Title from "./Title"
import Image from "./Image"

import titania from './titania.jpeg' 

function Card() {
  return (
    <div className="cards_container">
      <Title text="Mahoutsukai no Yome"/>
      <Subtitle>2017</Subtitle>
      <Image class="image" caption="Titânia - Rainha das fadas" image={titania} />
    </div>
  )
}

export default Card
