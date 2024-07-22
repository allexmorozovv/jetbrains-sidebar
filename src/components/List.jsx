

import {ListItem} from "./ListItem";

export const List = ({ ids, entities }) => {
  // console.log(ids);

  // const [openIds, setOpenIds] = useState([])

  // function handleClick(id) {
  //   if(openIds.includes(id)){
  //     setOpenIds(openIds.filter(el => el !== id))
  //   } else{

  //     setOpenIds([...openIds, id])
  //   }

  // }


  // console.log(open);

  return (

    <ul>
      {ids.map(id => {
        return <ListItem id={id} entities={entities} />;
      })}
    </ul>
  )
}