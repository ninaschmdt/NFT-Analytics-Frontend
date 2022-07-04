import React from 'react'
const CollectionImage = ({ node }) => {

  const fallBack = 'https://static.toiimg.com/thumb/msid-67586673,width-800,height-600,resizemode-75,imgsize-3918697,pt-32,y_pad-40/67586673.jpg'


  const onError = (e) => {
    return e.currentTarget.src = fallBack
  }

  const renderImage = () => {
    if (node.token?.images.length   ) {
      return <img className='collectionImage' src={node.token.images[0].url} onError={onError} />
    }
    else {
      return <img className='collectionImage' src={fallBack} width='56px' onError={onError} />
    }
  }

  return (
    <div>
    {renderImage()}
    </div>
  )
}

export default CollectionImage