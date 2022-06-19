import React from 'react'

const CollectionName = ({ data, arrayName }) => {
    return (
        <div>
            {data.map((item, index) => <CollectionNameItem item={item} arrayName ={arrayName}/>)}
        </div>
    )
}

const CollectionNameItem = ({ item, arrayName }) => {
    console.log(item['name'])
    return <h1>  </h1>
}

export default CollectionName