import React from 'react'

const CollectionImage = ({ node }) => {

  const onError = (e) => {
    e.currentTarget.src = 'https://static.toiimg.com/thumb/msid-67586673,width-800,height-600,resizemode-75,imgsize-3918697,pt-32,y_pad-40/67586673.jpg'
  }

  const renderImage = () => {
    if (node.tokens.edges.length) {
      if (node.tokens.edges[0].node.images.length) {
        return <img src={node.tokens.edges[0].node.images[0].url} width='56px' onError={onError} />
      } else {
        return <img src='https://static.toiimg.com/thumb/msid-67586673,width-800,height-600,resizemode-75,imgsize-3918697,pt-32,y_pad-40/67586673.jpg' width='56px' onError={onError} />
      }
    }
    else {
      return <img src='https://static.toiimg.com/thumb/msid-67586673,width-800,height-600,resizemode-75,imgsize-3918697,pt-32,y_pad-40/67586673.jpg' width='56px' onError={onError} />
    }
  }

  return (
    <div className='collectionImage'>
      {renderImage()}
    </div>
  )
}

export default CollectionImage