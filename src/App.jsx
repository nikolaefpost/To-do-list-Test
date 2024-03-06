import styles from './app.module.scss'
import { TasksContent, Sidebar, Tasks } from './components'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className={styles.root}>
          <Sidebar/>
          <Tasks/>
          <TasksContent/>
      </div>
    </>
  )
}

export default App
