import React from 'react'
import './ListPage.css'
import { listData } from '../../lib/dummyData'
import Filter from '../../components/filter/Filter'
import Card from '../../components/cards/Card'
import Map from '../../components/map/Map'

function ListPage() {
  const data = listData
  return (
    <div className="listPage">
      <div className="listContainer">
        <div className="wrapper">
          <Filter />
          {data.map((item) => (
            <Card item={item} key={item.id} />
          ))}
        </div>
      </div>
      <div className="mapContainer">
        <Map items={data} />
      </div>
    </div>
  )
}

export default ListPage