import { useState, useEffect } from "react";

export default function Counter() {

    let [countx, setCountx] = useState(0)
    let [county, setCounty] = useState(0)

    let incCountx = () => {
        setCountx((currVal) => currVal + 1);
    }
    let incCounty = () => {
        setCounty((currVal) => currVal + 1);
    }

    useEffect(function printSomething (){
        console.log("useeffect is working")
    }, [])

  return (
    <div>
      <h4>Count = {countx}</h4>
      <button onClick={incCountx}>+ 1</button>
      <h4>Count = {county}</h4>
      <button onClick={incCounty}>+ 1</button>
    </div>
  );
}
