import './App.css'
import NoWorker from './components/NoWorker'
import Worker from './components/Worker'

function App() {

  return (
    <>
      <h1>No Worker</h1>
      <NoWorker />

      <br />
      <hr />
      <br />

      <h1>Worker</h1>
      <Worker />


      <br />
      <br />
      <br />
      <code><a target='_blank' href="https://github.com/hunghg255/web-worker">Github</a></code>
    </>
  )
}

export default App
