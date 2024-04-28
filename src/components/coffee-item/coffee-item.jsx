import React from 'react'
import star from '../../assets/Star.svg'
import star_fill from '../../assets/Star_fill.svg'
import './coffee-item.css'
export default function coffeeItem({props}) {
  
  return (
    <div className='coffee-item' key={props.id}>
       <img className="coffee-img" src={props.image} alt={props.name} />
       <div className="space-between">
        <p className='name padding-margin-zero'>{props.name}</p>
        <p className='price padding-margin-zero'>{props.price}</p>
       </div>
       <div className='space-between'>
        {props.rating!=null?(<div className='rating-star-vote'>
          <img src={star_fill} alt="star-fill icon" />
          <p className='rating padding-margin-zero'>{props.rating}</p>
          <p className='voting padding-margin-zero'>({props.votes} votes)</p>
        </div>):(<div className='rating-star-vote'>
          <img src={star} alt="star icon" className='padding-margin-zero' />
          <p className='voting padding-margin-zero'>No ratings</p>
        </div>)}
        {props.available==false?(<p className="soldout padding-margin-zero">Sold out</p>):null}
       </div>
    </div>
  )
}
