import React, { useState } from 'react'

const InputForm = ({taskList, setTaskList}) => {

  const [inputText, setInputText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // フォームに入力されている場合タスクを追加する
    if(inputText !== "")setTaskList([
      ...taskList,
      {
        id: taskList.length,
        text: inputText,
        completed: false
      }
    ]);
    // 入力した文字を消す
    setInputText("")
  }

  const handleChange = (e) => {
    setInputText(e.target.value);
    console.log(inputText);
  }

  return (
    <div className='inputForm'>
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleChange} value={inputText} />
            <button>
            <i className="fa-solid fa-square-plus"></i>
            </button>
        </form>
    </div>
  )
}

export default InputForm;
