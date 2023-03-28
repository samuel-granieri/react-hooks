import React, {useCallback, useState} from 'react'
import Child from './Child'

const UseCalback = () => {

    const [toogle, setToogle] = useState(false);
    const [data, setData] = useState("Olá")

    const returnComment = useCallback((name) => {
        return data + name
    },[data])

  return (
    <div>
        <Child returnComment={returnComment}/>

        <button onClick={()=>{setToogle(!toogle)}}>{' '} Toogle</button>

        {toogle && <h1>toogle</h1>}
    </div>
  )
}

export default UseCalback