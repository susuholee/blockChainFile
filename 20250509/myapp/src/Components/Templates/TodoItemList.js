import React from 'react'
import styled from 'styled-components'
import Input from '../Atoms/Input'

const TodoListWrap = styled.div`
  width: 1080px;
  height: 430px;
  border: 1px solid;
  box-shadow: 0px 0px 10px -20px;
  box-sizing: border-box;
  border-radius: 12px;
  margin: 20px;
  overflow: scroll;
  .item {
    display: flex;
    width: 100%;
    height: 40px;
    & span {
      display: inline-block;
      width: 40px;
      height: 100%;
      border-right : 1px solid;
      border-bottom: 1px solid;
      box-sizing: border-box;
    }
    & span:last-child{
      width: 1040px;
      border-bottom: 1px solid;
    }
    &.title {
      background-color: #F2F5F9;
      text-align: center;
    }
  }
`

const TodoItemList = ({todos, editId, setEditId, value, setValue}) => {
  const EdithandleClick = (id, editText) => {
    setEditId(id);
    setValue(editText);
  }


  return (
    <TodoListWrap>
      <div className='item title'>
        <span>NO</span>
        <span>할일 내용</span>
      </div>

      {todos.map((el, index) => (
         <div className='item' key={el.id}>
         <span>{index}</span>
      {editId === el.id ? (
            <Input value={value} onChange={(e) => setValue(e.target.value)}/>
          ) : (
            <span onClick={() => EdithandleClick(el.id, el.name)}>{el.name}</span>
          )}
       </div>
      ))}
    </TodoListWrap>
  )
}

export default TodoItemList
