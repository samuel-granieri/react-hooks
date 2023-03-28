import React, {useState} from 'react'

const UseState = () => {

  const [counter, setCounter] = useState(0)
  const [inputValue, setInputValue ] = useState("Samuel")

  const increment = ()=>{
    setCounter(counter + 1)
  }

  const onChange = (event)=>{
    const newValue = event.target.value;
    setInputValue(newValue);
  }

  

  return (
    <div>
      <section>
        {counter}
        <button onClick={increment}>Increment</button>
      </section>

      <section>
        <input placeholder='Type something...' onChange={onChange}/>
        {inputValue}
      </section>

    </div>
  )
}

export default UseState