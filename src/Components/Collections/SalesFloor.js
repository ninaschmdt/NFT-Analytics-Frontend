import { useEffect, useState } from 'react'
import SalesFloorChange from './SalesFloorChange'

const SalesFloor = ({ floor, address, prevDataCollection }) => {
  const [itRaised, setItRaised] = useState(0)
  const [change, setChange] = useState(0)

  useEffect(() => {
    const previousData = prevDataCollection.find(el => el.node.address === address)
    if (previousData) {
      // if (floor === previousData.node.stats.floor) {
      //   setItRaised(0)
      //   return setChange(0)
      // }
      if (floor > previousData.node.stats.floor) {
        setItRaised(1)
        return setChange((100-((previousData.node.stats.floor * 100) / floor)).toFixed(2))
      }
      if (floor < previousData.node.stats.floor) {
        setItRaised(2)
        return setChange((100-((floor * 100) / previousData.node.stats.floor)).toFixed(2))
      }
    }
  }, [prevDataCollection])

  return (
    <div className='sales'>
      {floor}
      <div className={itRaised ? 'itRaised' : null}>
        {
          itRaised === 0 ?
            '' :
            itRaised === 1 ? <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.6665 11.3333L11.3332 4.66663" stroke="#00A010" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M4.6665 4.66663H11.3332V11.3333" stroke="#00A010" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
            </svg> :
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.66748 4.66687L11.3341 11.3335" stroke="#A00013" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M11.3341 4.66687V11.3335H4.66748" stroke="#A00013" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
              </svg>

        }
        <span className='zero' style={{ color: change === 1 ? 'green' : change === 2 ? 'red' : 'black' }}>{change}%</span>
      </div>
    </div>
  )

}



export default SalesFloor

//take a value from salesfloor
//store it into local storage
//watch this value
//when value changes -> make math
//