import { Alert } from 'react-bootstrap'

const Detail = ({ selected }) => {
  return (
    <Alert variant="success">{selected || 'Nessun valore selezionato'}</Alert>
  )
}

export default Detail
