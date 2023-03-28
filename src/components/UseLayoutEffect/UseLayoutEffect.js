import React, {useLayoutEffect, useEffect, useRef} from 'react'
// useLayoutEffect renderiza primeiro que os dados mostrados ao usuario e antes que o useEffect
const UseLayoutEffect = () => {

    const inputRef = useRef(null);

    useLayoutEffect(()=>{
        console.log(inputRef.current.value);
    },[]);

    useEffect(()=>{
        inputRef.current.value = 'Hello';
    },[]);



  return (
    <div>
        <input ref={inputRef} value='Samuel' style={{width:400, height:30}}/>
    </div>
  )
}

export default UseLayoutEffect