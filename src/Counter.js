import React from 'react'

const Counter = () => {
  return (
    <div>
        <h1>Counter</h1>
        <div>
            <span>{count}</span>
        </div>
        
        {/* buttons are content inside the div */}
        <div>
            <button>+</button>
            <button>-</button>
            <button>Reset</button>


        </div>
      
    </div>
  )
}

export default Counter
