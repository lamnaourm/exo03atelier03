import React from 'react'
import Livre from './Livre'

export default function Bibliotheque({livres}) {
  return (
    <div className='biblio'>
        {livres.map(s => 
            <Livre image={s.url} titre={s.titre} prix={s.prix}/>
            )}
    </div>
  )
}
