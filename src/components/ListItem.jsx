import { useState } from "react"
import { List } from './List'

export const ListItem = ({ id, entities }) => {
  const {url, title, pages} = entities.pages[id]

  const [open, setOpen] = useState(false)
 

  return (
    <li>
      {pages && <button onClick={() => setOpen(!open)}>open</button>}
      <a className="title" href={url}>{title}</a>
      {open && pages && <List ids={pages} entities={entities} />}
    </li>
  )
}