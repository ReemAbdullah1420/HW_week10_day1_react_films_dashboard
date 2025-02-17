import { useContext } from "react"
import { Button, Modal } from "react-bootstrap"
import FilmsContext from "../utils/FilmsContext"

function ActorsDeleteModal(props) {
  const { deletecast } = useContext(FilmsContext)
  const { show, setShow, castId } = props
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Delete actors</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure to delete this actor ?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShow(false)}>
          Cancel
        </Button>
        <Button variant="danger" onClick={() => deletecast(castId)}>
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ActorsDeleteModal
