import React from 'react'
const CollectionImage = ({ image }) => {

  console.log('THIS IS SPARTA', image)

  const fallBack = './Images/robots_fallback.png'


  const onError = (e) => {
    return e.currentTarget.src = fallBack
  }

  const renderImage = () => {
    if (image) {
      return <img className='collectionImage' src={image} onError={onError} />
    }
    else {
      return <img className='collectionImage' src={fallBack} width='56px' onError={onError} />
    }
  }

  return (
    <>
    {renderImage()}
    </>
  )
}

export default CollectionImage