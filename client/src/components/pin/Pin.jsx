import React from 'react'
import { Link } from 'react-router-dom'
import { Marker, Popup } from 'react-leaflet'
import './pin.css'

function Pin({item}) {
    return (
        <Marker position = {[item.latitude, item.longitude]}>
            <Popup>
                <div className="popupContainer">
                    <img src={item.img} alt="" />
                    <div className="textContainer">
                        <Link to={`/${item.id}`}>{item.title}</Link>
                        <span>{item.address}</span>
                        <span>${item.price}</span>
                    </div>
                </div>
            </Popup>
        </Marker>
      )
    }

export default Pin