import { useState } from "react"
import { Button, Image } from "react-bootstrap"
import FilmDeleteModal from "./FilmDeleteModal"
import FilmEditModal from "./FilmEditModal"
import FilmViewModal from "./FilmViewModal"

function FilmCell(props) {
  const { film } = props
  const [viewShow, setViewShow] = useState(false)
  const [deleteShow, setDeleteShow] = useState(false)
  const [editShow, setEditShow] = useState(false)
  return (
    <tr style={{ verticalAlign: "middle", tableLayout: "fixed", wordWrap: "break-word" }}>
      <td style={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>{film._id}</td>
      <td>{film.title}</td>
      <td style={{ verticalAlign: "middle", tableLayout: "fixed", wordWrap: "break-word" }}>{film.description}</td>
      <td>
        <Image src={film.poster} style={{ objectFit: "contain", height: "100px", width: "100%" }} />
      </td>
      <td>{film.ratingAverage}</td>
      <td>
        <Button variant="info" className="me-2" onClick={() => setViewShow(true)}>
          View
        </Button>
        <Button variant="success" className="me-2" onClick={() => setEditShow(true)}>
          Edit
        </Button>
        <Button variant="danger" onClick={() => setDeleteShow(true)}>
          Delete
        </Button>
      </td>
      <FilmViewModal show={viewShow} setShow={setViewShow} film={film} />
      <FilmEditModal show={editShow} setShow={setEditShow} film={film} />
      <FilmDeleteModal show={deleteShow} setShow={setDeleteShow} filmId={film._id} />
    </tr>
  )
}

export default FilmCell
