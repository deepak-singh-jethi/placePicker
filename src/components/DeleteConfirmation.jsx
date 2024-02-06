import { useEffect, useState } from "react";

const timer = 5000;

export default function DeleteConfirmation({ onConfirm, onCancel }) {

  const [remainingTime, setRemianingTime] = useState(timer);

  useEffect(()=>{
     const intervalId =  setInterval(() => {
      console.log('interval of 1 sec');
      setRemianingTime(prevTime => prevTime-10)

      },10)

      return ()=>{
        clearInterval(intervalId);
      }

  },[])
  


useEffect(()=>{
  console.log('timer Start');
   const timerId =  setTimeout(()=>{
    console.log('finish');
    onConfirm();
  },5000);

  return ()=>{
    console.log('clear');
     clearTimeout(timerId);
  }

  },[onConfirm]);


  

  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>
      <progress value={remainingTime} max={timer}/>
    </div>
  );
}
