import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Container } from 'styles/Container'
import { Home } from 'pages/Home'
import { About } from 'pages/About'

function App() {
  return (
    <Container>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </BrowserRouter>
    </Container>
  )
}

export default App
