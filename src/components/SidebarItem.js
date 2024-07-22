import React, { useState } from 'react'


function SidebarItem() {

// const[open, setOpen] = useState(false)

function handleClick(){
  // setOpen(!open)
}

  return (
    <div className={'sidebar-item '}>
      <div className="sidebar-title" onClick={handleClick}>
        {/* <button className='toggle-btnup'>&rsaquo;</button>  */}
        <i className="bi-chevron-down toggle-btn"></i>
        <span>Expanded Menu Item</span>
      </div>
      <div className="sidebar-content">
        <div>Sub-element to menu item</div>
        <div>Another under-menubr</div>
        <div>Hey, the third one for the beauty</div>
      </div>
    </div>
  )
}

export default SidebarItem
