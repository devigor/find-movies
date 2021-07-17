import { Container } from 'components/Container'
import { Home } from 'pages/Home'
import MovieDetails from 'pages/MovieDetails'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <Container>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/movie/:id">
            <MovieDetails />
          </Route>
        </Switch>
      </BrowserRouter>
    </Container>
  )
}

export default App
