import React, { useState } from 'react'
import "./TaskCreator.css"

function TaskCreator(props) {
  var today = new Date(),
  dateToday = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

  const [task, setTask] = useState("")
  const [description, setDescription] = useState("")
  const [time, setTime] = useState("00:00:00")
  const [date, setDate] = useState(dateToday)

  function GetTask(e) {
    setTask(e.target.value)
  }
  function GetDescription(e) {
    setDescription(e.target.value)
  }
  function GetDate(e) {
    console.log(e);
    setDate(e.target.value)
  }
  function GetTime(e) {
    setTime(e.target.value)
  }

  function ReturnItem() {
    if (task && description && date && time !== "") {

      props.fullitem({ task, description, date: new Date(date + " " + time), })
      setDescription("")
      setTask("")
      setDate("")
      setTime("")
      props.onExit()
    }
    else {
      return alert("make sure you added all the information needed")
    }
  }

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <button className="closeButton" onClick={props.onExit}> <b> X </b> </button>
        <input className="TaskTitle" type="text" placeholder="write your task" onChange={GetTask} value={task}></input>
        <textarea className="TaskText" placeholder="description..." onChange={GetDescription} value={description}></textarea>
        <div>
          <input className="TaskDate" type="date" onChange={GetDate} value={date}></input>
          <input className="TaskTime" type="time" onChange={GetTime} value={time}></input>
        </div>
        <div className = "changesButtons">
          <button className="saveButton" onClick={ReturnItem}>Save</button>
          <button className="cancelButton" onClick={props.onExit}> cancel </button>
        </div>
      </div>
    </div>
  )
}

export default TaskCreator
