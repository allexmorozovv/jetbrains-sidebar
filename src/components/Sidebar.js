import React from 'react'
import SidebarItem from './SidebarItem'
import {List} from './List'

const Sidebar = ({ data }) => {
  
  return (
    <div className='sidebar'>
      {/* <ul> */}
        <List 
        ids={data.topLevelIds}
        entities={data.entities}
        />
      {/* </ul> */}
    </div>
  )
}

export default Sidebar