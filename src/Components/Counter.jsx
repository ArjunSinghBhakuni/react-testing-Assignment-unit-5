import React, { useState } from 'react'

const Counter = () => {
const  [count,setCount] = useState(0)

  return (
    <div>
     <h1>count is {count}</h1>
<button className='increament' onClick={()=>setCount((prev)=>prev-1)}>Decreament</button>
<button className='decreament' onClick={()=>setCount((prev)=>prev+1)}>Increament</button>

    </div>
  )
}

export default Counter