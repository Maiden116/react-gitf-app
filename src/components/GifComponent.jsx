import React from 'react'

export const GifComponent = ({title, url}) => {

  return (
    <div className='card'>
        <p>{title}</p>
        <img src={url} alt={title} />
    </div>
  )
}
