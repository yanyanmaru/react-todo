import { Todo } from "./../types/Todo";
import React from "react";

const OneTodo = (props: Todo) => {
    return (
        <div key={props.id} className="flex gap-2 border-2 w-60 p-2">
            <input type="checkbox" />
            <p>{props.title}</p>
        </div>
    )
}

export default OneTodo;