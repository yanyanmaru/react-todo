import OneTodo from './../components/OneTodo'
import AddTodo from './../components/AddTodo'
import { useState } from 'react'
import {Todo} from './../types/Todo'

export default function Home(){
  const initializeTodo: Todo[] = [
    {id:1,title: "fafファファファa"},
    {id:2,title: "fafa"},
    {id:3,title: "fafa"},
    {id:4,title: "fafa"},
  ]
  const [todos, setTodos] = useState<Todo[]>(initializeTodo);

  return (
    <div className='flex flex-col gap-y-2 items-center'>
      <AddTodo />
      {todos.map((todo) => {
        return <OneTodo props={todo} />
      })}
    </div>
  )
}