import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import uuid from "react-uuid";

const Home = () => {
  const [todos, setTodos] = useState([
    {
      id: uuid(),
      title: "제목1",
      contents: "내용1",
      isDone: false,
    },
    {
      id: uuid(),
      title: "제목2",
      contents: "내용2",
      isDone: true,
    },
  ]);
  const [title, setTitle] = useState();
  const [contents, setContents] = useState();
  // const todos = useSelector((state) => {
  //   return state;
  // });
  // const dispatch =useDispatch();
  // console.log(todos);
  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const newTodo = {
            id: uuid(),
            title,
            contents,
            isDone: false,
          };
          setTodos([...todos, newTodo]);
        }}
      >
        <input
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
        <input
          value={contents}
          onChange={(event) => {
            setContents(event.target.value);
          }}
        />
        <button>입력하기</button>
      </form>
      <div>
        <h2>할일</h2>
        {todos
          .filter((item) => item.isDone === false)
          .map((todo) => {
            return (
              <div>
                <p>{todo.title}</p>
                <p>{todo.contents}</p>
                <button
                  onClick={() => {
                    const removeTodo = todos.filter((item) => {
                      return todo.id !== item.id;
                    });
                    setTodos(removeTodo);
                  }}
                >
                  삭제
                </button>
                <button
                  onClick={() => {
                    const newIsDone = todos.map((item) => {
                      if (item.id === todo.id) {
                        return { ...item, isDone: !item.isDone };
                      } else {
                        return item;
                      }
                    });
                    setTodos(newIsDone);
                  }}
                >
                  완료
                </button>
              </div>
            );
          })}
        <h2>완료</h2>
        {todos
          .filter((item) => item.isDone === true)
          .map((todo) => {
            return (
              <div>
                <p>{todo.title}</p>
                <p>{todo.contents}</p>
                <button
                  onClick={() => {
                    const removeTodo = todos.filter((item) => {
                      return todo.id !== item.id;
                    });
                    setTodos(removeTodo);
                  }}
                >
                  삭제
                </button>
                <button
                  onClick={() => {
                    const newIsDone = todos.map((item) => {
                      if (item.id === todo.id) {
                        return { ...item, isDone: !item.isDone };
                      } else {
                        return item;
                      }
                    });
                    setTodos(newIsDone);
                  }}
                >
                  취소
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Home;
