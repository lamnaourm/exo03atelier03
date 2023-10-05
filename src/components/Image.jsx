import React from 'react'

export default function Image({url, titre}) {
  return (
    <img src={url} alt={titre} />
  )
}
