import { TaskList } from "./components/TaskList";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

export const TestMainApp = () => {
  return (
      <div className="App">
        <Header />
        <TaskList />
        <Footer />
      </div>
  )
}
