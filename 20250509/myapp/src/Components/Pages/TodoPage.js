import React, { useEffect, useState } from 'react'
import Input from '../Atoms/Input'
import Button from '../Atoms/Button'
import Loading from '../Atoms/Loading'
import TodoItemList from '../Templates/TodoItemList'
import {useDispatch, useSelector} from 'react-redux'
import { readTodoAction, createTodoAction, updateTodoAction, deleteTodoAction } from '../../Actions/todoActions'

const Todopage = () => {
  const dispatch = useDispatch();
  const {todos, loading} = useSelector(state => state);
  const [value, setValue] = useState("");
  const [editId, setEditId] = useState(null);
  const [deleteId, setDeleteId] = useState(null);

  useEffect(() => {
    // 액션 생성자 함수 호출출
    dispatch(readTodoAction());
  }, [])

  const createHandler = () => {
    dispatch(createTodoAction(value));
    setValue("");
  }

  const inputValueHandler = (e) => {
    setValue(e.target.value)
  }

  const updateHandler = () => {
    dispatch(updateTodoAction(editId, value));
    setValue("");
    setEditId(null);
  }

  const deleteHandler = () => {
    dispatch(deleteTodoAction(deleteId));
    setDeleteId(null);
  }

  return (
    <div>
      <Input placeholder={"할일을 입력해주세요"} value={value} onChange={inputValueHandler}/>
      <Button onClick={createHandler}>할일 추가</Button>
      <Button onClick={updateHandler}>할일 수정</Button>
      <TodoItemList  todos={todos}  editId={editId} setEditId={setEditId}  onDelete={(id) => dispatch(deleteTodoAction(id))}
      value={value} setValue={setValue}/>
      {loading ? <Loading /> : null}
    </div>
  )
}

export default Todopage
