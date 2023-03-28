import axios from 'axios';
import React, { useEffect, useState, useMemo } from 'react'

const UseMemo = () => {

    const [data, setData] = useState(null);
    const [toogle, setToogle] = useState(false);

    useEffect(()=>{
        axios
            .get("https://jsonplaceholder.typicode.com/comments")
                .then((response)=>{
                    setData(response.data)
                })
    },[])

    const findLongestName = (comments)=>{
        if (!comments) return null;

        let longestName = "";
        for (let i=0; i<comments.length; i++){
            let currentName = comments[i].name;

            if (currentName.length > longestName.length){
                longestName = currentName;
            }
        }

        console.log("This was computed")

        return longestName
    }


    const getLongestName = useMemo(()=>findLongestName(data),[data])

  return (
    <div>
        <div>{getLongestName}</div>

        <button onClick={()=> {setToogle(!toogle)}}>{' '}Toogle</button>

        {toogle && <h1>toogle</h1>}

    </div>
  )
}

export default UseMemo