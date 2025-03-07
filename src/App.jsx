import './App.css'
import Home from './component/Home'
import Navbar from './component/navbar'
import {Switch, Route} from 'react-router-dom'
function App() {

  return (
    <>
    <Switch>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/products"  component={Products} />
      <Home />
      </Switch>
    </>
  )
}

export default App
