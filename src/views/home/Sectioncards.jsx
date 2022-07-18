import React from 'react'
import './sectioncards.less'
import BG1 from '../../assets/BG1.jpg'
import BG2 from '../../assets/BG2.jpg'
import BG3 from '../../assets/BG3.jpg'

function Sectioncards() {
  return (
    <section id='sectioncards'>
    <div className='container item__container'>
    <h3>We Offer</h3>
      <article className='cards__item'>
        <a href='#shop' className='cards__item-image'>
          <img src={BG1} alt="" />SHOP</a>
          <a href='#rent' className='cards__item-image'>
          <img src={BG2} alt="" />RENT</a>
          <a href='#partysuply' className='cards__item-image'>
          <img src={BG3} alt="" />PARTY SUPLY</a>
    </article>
    </div>
    </section>
  )
}

export default Sectioncards