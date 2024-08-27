import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Col, Container, Row } from 'react-bootstrap'
import Table from './components/Table'
import Detail from './components/Detail'
import { useState } from 'react'

// se io volessi condividere la stessa informazione di stato tra Table e Detail,
// non ho alternative: devo ELEVARE questo stato e portarlo nel loro componente
// PADRE

const App = () => {
  // "trapianto" lo stato di Table

  const [selected, setSelected] = useState('') // Uno, Due o Tre

  // i valori "falsy" -> '', false, 0, -0, undefined, null

  // changeState è un modo per cambiare lo stato di App
  // date un RADIOCOMANDO a Table :D
  const changeState = (newSelectedValue) => {
    setSelected(newSelectedValue) // Uno, Due o Tre
  }

  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <Row>
            <Col>
              <Table
                selected={selected}
                changeState={changeState} // passo a Table anche una funzione
              />
            </Col>
            <Col className="my-auto">
              <Detail selected={selected} />
            </Col>
          </Row>
        </Container>
      </header>
    </div>
  )
}

export default App
