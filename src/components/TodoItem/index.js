import './index.css'

const TodoItem = props => {
  const {eachItem, onDelete} = props
  const {id, title} = eachItem
  const onClickDelete = () => {
    onDelete(id)
  }
  return (
    <li className="each-card-container">
      <p className="style-title">{title}</p>
      <li className="button-container">
        <button className="style-button" type="button" onClick={onClickDelete}>
          Delete
        </button>
      </li>
    </li>
  )
}

export default TodoItem
