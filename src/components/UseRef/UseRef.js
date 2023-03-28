import React, {useRef} from 'react'

const UseRef = () => {

    const inputRef = useRef('');

    const onClick =()=>{
        inputRef.current.focus();
        console.log(inputRef.current.value)
    }

  return (
    <div>
        <h1>Samuel</h1>
        <input type='text' placeholder='Ex...' ref={inputRef}/>
        <button onClick={onClick}>Change Name</button>
    </div>
  )
}

export default UseRef