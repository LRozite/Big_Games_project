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
        <div className='quote'>
        <svg xmlns="http://www.w3.org/2000/svg" width="42.2px" height="27.65px" fill="currentColor" class="bi bi-quote" viewBox="0 0 16 16">
  <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z"/>
</svg>
        <h4>BigGames projekts aizsākās 2008. gadā, kad pašu vajadzībām tika izgatavots pirmais lielais dārza Cirks. Tā mēs to izmantojām ģimenē, izklaidējām draugus viesībās, kā arī skolēnu saliedēšanas pasākumos. Biznesa ideja azotē tika lolota 11 gadus, katrai labai idejai pienāk savs realizēšanas sākums un 2019. gadā bija pienācis BigGames laiks.
        <div className='dice-align'>
        <img src={DC} alt="dice" className='dice'/>
        </div>
        </h4>
        <div className='quote-right'><svg xmlns="http://www.w3.org/2000/svg" width="42.2px" height="27.65px" fill="currentColor" class="bi bi-quote" viewBox="0 0 16 16">
  <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z"/>
</svg></div>
        </div>
        </div>
        </section>
  )
}

export default aboutowner