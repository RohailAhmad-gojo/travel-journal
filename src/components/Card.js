import React from 'react'

function Card(props) {
  return (
    <div className='card-container'>
        <div className='card-contant'>
            <img src={props.img} alt='japan' />
            <div className='card-contant-info'>
                <div className='card-contant-location'>
                    <img src='./Assets/icon.png' alt={props.location}/>
                    <h4>{props.location}</h4>
                    <a href={props.googleMap}><span>View on Google Maps</span></a>
                </div>
                <h1>{props.title}</h1>
                <h3><span>{props.startDate}</span>-<span>{props.endDate}</span></h3>
                <p>{props.description}</p>
            </div>
        </div>
    </div>
  )
}

export default Card