import React from 'react'

const AddWallet = () => {
  return (
    <div className='addWallet'>
      <h1>Track Wallet</h1>
      <form>
        <input type="text" id="fname" name="fname" placeholder="Paste wallet ID here..." /><br />
        <input type="submit" className='button' value="Add" />
      </form>
    </div>
  )
}

export default AddWallet