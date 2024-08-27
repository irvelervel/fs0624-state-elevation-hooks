import { ListGroup } from 'react-bootstrap'

const Table = ({ selected, changeState }) => {
  // state = {
  //   selected: '',
  // }

  // Table NON HA PIÙ selected nel proprio stato! Ma lo riceve da App nelle sue props
  const checkSelected = (value) => (value === selected ? 'selected' : '')

  return (
    <>
      <ListGroup className="text-dark">
        <ListGroup.Item
          // onClick={(e) => this.setState({ selected: 'Uno' })}
          onClick={() => changeState('Uno')}
          className={checkSelected('Uno')}
        >
          Uno
        </ListGroup.Item>
        <ListGroup.Item
          // onClick={(e) => this.setState({ selected: 'Due' })}
          onClick={() => changeState('Due')}
          className={checkSelected('Due')}
        >
          Due
        </ListGroup.Item>
        <ListGroup.Item
          // onClick={(e) => this.setState({ selected: 'Tre' })}
          onClick={() => changeState('Tre')}
          className={checkSelected('Tre')}
        >
          Tre
        </ListGroup.Item>
      </ListGroup>
      <p className="mt-3">Stato del componente: {selected || 'undefined'}</p>
    </>
  )
}

export default Table
