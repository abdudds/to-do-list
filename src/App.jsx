import {useState} from "react";
import "./App.css";

function App() {

  const [toDos, setTodos] = useState([])
  const [toDo, setTodo] = useState('')
  
  const today = ()=>{
      const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      const date = new Date()
      return days[date.getDay()];
  }

  const addItem = ()=>{
    if(toDo.trim()!==""){
      let found = false
      toDos.map((obj)=>{if(obj.text==toDo) found = true})
      if(found){
        alert("Duplicate entry!")
      }
      else{
      setTodos([...toDos, { id: Date.now(), text: toDo, status: false }]);
      setTodo("")};
    }else{
      alert("Please make an valid entry!")
    }
  };
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's {today()} 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input
          value={toDo}
          onChange={(e) => setTodo(e.target.value)}
          type="text"
          placeholder="🖊️ Add item..."
        />
        <i onClick={addItem} className="fas fa-plus"></i>
      </div>
      <div className="todos">
        {toDos.map((obj, index) => {
          return (
            <div key={index} className="todo">
              <div className="left">
                <input
                  onChange={(e) => {
                    setTodos(
                      toDos.filter((obj2) => {
                        if (obj2.id == obj.id) {
                          obj2.status = e.target.checked;
                        }
                        return obj2;
                      })
                    );
                  }}
                  value={obj.status}
                  checked={obj.status}
                  type="checkbox"
                  name=""
                  id=""
                />
                <p>{obj.text}</p>
              </div>
              <div className="right">
                <i
                  onClick={(e) => {
                    setTodos(
                      toDos.filter((obj2) => {
                        if (obj2.id != obj.id) {
                          return obj2;
                        }
                      })
                    );
                  }}
                  className="fas fa-times"
                ></i>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
