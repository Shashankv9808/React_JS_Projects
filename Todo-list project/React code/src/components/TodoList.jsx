import "../css/Todo.css";
import { Header } from "./Header";
import { AddTask } from "./AddTask";
import { Footer } from "./Footer";
import { DisplayTask } from "./DisplayTask";
import { useState } from "react";
import { useFetch } from '../hooks/useFetch';


export const TodoList = () => {

  const [data, setData] = useState(null);
  const { loading } = useFetch({ setData });

  if (loading || data === null) {
    return <div className="loader"></div>;
  }

  return (
    <div className="App">
      <Header />
      <main>
        <AddTask data={data} setData={setData} />
        <DisplayTask data={data} setData={setData} />
      </main>
      <Footer />
    </div>
  )
}
