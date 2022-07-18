import React from 'react'
import './aboutowner.less'
import LND from '../../assets/owner.jpg'
import DC from '../../assets/dice.png'


function aboutowner() {
  return (
    <section id='aboutowner'>
      <div className="about aboutowner__container">
        <div className="about__owner">
          <div className="about__owner-image">
            <img src={LND} alt="About Owner" />
            <h2>LINDA</h2>
          </div>
        </div>
        <h4>BigGames projekts aizsākās 2008. gadā, kad pašu vajadzībām tika izgatavots pirmais lielais dārza Cirks. Tā mēs to izmantojām ģimenē, izklaidējām draugus viesībās, kā arī skolēnu saliedēšanas pasākumos. Biznesa ideja azotē tika lolota 11 gadus, katrai labai idejai pienāk savs realizēšanas sākums un 2019. gadā bija pienācis BigGames laiks.
        <div className='dice-align'>
        <img src={DC} alt="dice" className='dice'/>
        </div>
        </h4>
        </div>
        </section>
  )
}

export default aboutowner