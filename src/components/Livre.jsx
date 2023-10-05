import React from 'react'
import Titre from './Titre'
import Prix from './Prix'
import Image from './Image'

const Livre = ({titre, prix, image}) => {
  return (
    <div className='livre'>
        <Image url={image} titre={titre} />
        <Titre titre={titre} />
        <Prix prix={prix}/>
    </div>
  )
}

export default Livre