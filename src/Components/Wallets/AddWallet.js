import React from 'react'

const AddWallet = () => {
  return (
    <div className='addWallet'>
      <h3>Add Wallet</h3>
      <form>
        <input type="text" id="fname" name="fname" placeholder="Paste wallet ID here..." /><br />
        <input type="submit" className='button' value="Nasty Follow Someones Wallet" />
      </form>
    </div>
  )
}

export default AddWallet