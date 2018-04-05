import xs from 'xstream'
import {Sources, Sinks} from './interfaces'

export function App(sources : Sources) : Sinks {

  const toggle = ( select:any, label:string ) => select.events('click')
    .map(( ev:any ) => ({ 
      label, 
      val : ev.target.dataset.selected === "false" ? true : false 
    }))
    .startWith({ label, val : false });

  const [
    lovePeople$,
    loveProduct$,
    loveTech$,
    learn$,
    rewardPay$,
    rewardFreedom$,
    proficiency$
  ] = [
    ['love-people', 'People'],
    ['love-product', 'Product'],
    ['love-tech', 'Tech'],
    ['learn', 'Learn'],
    ['reward-pay', 'Pay'],
    ['reward-freedom', 'Freedom'],
    ['proficiency', 'Proficiency']
  ].map(([selector, label]) => toggle(sources.DOM.select('.'+selector), label).map(({ val, label }) =>
    <button className={`button ${val ? '' : 'button-outline'} ${selector} selected-${val}`} data-selected={val}>{ label }</button>
  ));

  const vtree$ = xs.combine(lovePeople$, loveProduct$, loveTech$, learn$, rewardPay$, rewardFreedom$, proficiency$)
    .map(([ lovePeople, loveProduct, loveTech, learn, rewardPay, rewardFreedom, proficiency ]) => <div className="container">
      <h1>Modus</h1>

      <div className="row">
        <div className="column user-input">
          <div className="row">
            <div className="column user-input-current">
              <ul>
                <li>
                  <h2>Love</h2>
                  { lovePeople }
                  { loveProduct }
                  { loveTech }
                </li>
                <li>
                  <h2>Learn</h2>
                  { learn }
                </li>
                <li>
                  <h2>Reward</h2>
                  { rewardPay }
                  { rewardFreedom }
                </li>
                <li>
                  <h2>Proficiency</h2>
                  { proficiency }
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  return {
    DOM: vtree$
  }
}
