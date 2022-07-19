import React from 'react'
import './sectioncards.less'
import OFFR1 from '../../assets/shop_offer1.jpg'
import OFFR2 from '../../assets/rent_offer1.jpg'
import OFFR3 from '../../assets/party_suply_offer1.jpg'

function Sectioncards() {
  return (
    <section id='sectioncards'>
    <h3 className='cards__title'>WE OFFER</h3>
    <div className='container item__container'>
      <article className='cards__item'>
        <a href='#shop' className='cards__item-image'>
          <img src={OFFR1} alt="" />SHOP</a>
          <a href='#rent' className='cards__item-image'>
          <img src={OFFR2} alt="" />RENT</a>
          <a href='#partysuply' className='cards__item-image'>
          <img src={OFFR3} alt="" />PARTY SUPLY</a>
    </article>
    </div>
    </section>
  )
}

export default Sectioncards