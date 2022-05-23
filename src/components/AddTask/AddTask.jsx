

import React from "react";
import styles from "./addTask.module.css";

const AddTask = ({data,setData,value,setValue}) => {
  // NOTE: do not delete `data-cy` key value pair
const reset=()=>{
  setData("");
}
  return (
    <div className={styles.todoForm}>
      <input data-cy="add-task-input" className={styles.input1} value={value}type="text" placeholder="Add task..." onChange={(e)=>{setValue(e.target.value)} } />
      <button data-cy="add-task-button"  disabled={!value} onChange={reset} className={styles.addbtn}  onClick={()=>{setData([...data,{id:Date.now(),text:value,done:false,count:1}],setValue(""))}} 
    
     >+</button>
    </div>
  );
};

export default AddTask;
