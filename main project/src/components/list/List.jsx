import React from 'react'
import './list.css'
import {listData} from '../../lib/dummyData'
import Card from '../cards/Card'
function List() {
    return (
        <div className='list'>
          {listData.map(item=>(
            <Card key={item.id} item={item}/>
          ))}
        </div>
      )
    }
export default List