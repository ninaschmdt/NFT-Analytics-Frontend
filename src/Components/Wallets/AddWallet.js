import React from 'react'

const AddWallet = () => {
  return (
    <div>
      <h3>AddWallet</h3>
      <form>
        <input type="text" id="fname" name="fname" /><br />
        <input type="submit" className='button' value="Add wallet" />
      </form>
    </div>
  )
}

export default AddWallet