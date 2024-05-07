import React from 'react'
import "../style/Dropdown.css"
import { useNavigate } from 'react-router-dom'

const DropdownGames = () => {
  const navigate = useNavigate();
  return (
    <div className='dropdwnGames'>
        <ul className='flex flex-col gap-4'>
        <li><a  className="genshin"  onClick={()=> navigate('/genshin')}>Genshin Impact</a></li>           
            <li><a  className="apex"  onClick={()=> navigate('/apex')}>Apex Legend</a></li>
            <li><a  className="valo">Valorant</a></li>
            <li><a  className="subnauticazero">Subnautica: Below Zero</a></li>
        </ul>
    </div>
  )
}

export default DropdownGames