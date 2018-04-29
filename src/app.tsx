import xs from 'xstream'
import {Sources, Sinks} from './interfaces'

const initialState = {
  step : 0,
  desired : {
    people : false,
    product : false,
    tech : false,
    learn : false,
    pay : false,
    freedom : false,
    proficiency : false
  },
  current : {
    people : false,
    product : false,
    tech : false,
    learn : false,
    pay : false,
    freedom : false,
    proficiency : false
  }
}

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

  const current$ = xs.combine(lovePeople$, loveProduct$, loveTech$, learn$, rewardPay$, rewardFreedom$, proficiency$)
    .map(([ lovePeople, loveProduct, loveTech, learn, rewardPay, rewardFreedom, proficiency ]) => <ul>
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
    )

  const prospective$ = xs.combine(lovePeople$, loveProduct$, loveTech$, learn$, rewardPay$, rewardFreedom$, proficiency$)
    .map(([ lovePeople, loveProduct, loveTech, learn, rewardPay, rewardFreedom, proficiency ]) => <ul>
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
    )

  const steps = [
    <h2>Step 0</h2>,
    <h2>Step 1</h2>,
    <h2>Step 2</h2>
  ];

  const model = ({ dec$, dec2$ }) => {
    return xs.merge(
      dec$.mapTo({ step : 1 }).startWith({ step : 0 }),
      dec2$.mapTo({ step : 2 }).startWith({ step : 0 })
    );
  }

  const intent = DOM => ({
    dec$ : sources.DOM.select('.dec').events('click'),
    dec2$ : sources.DOM.select('.dec2').events('click')
  });

  const view = state$ => state$.map( state  => 
    <div className="container">
      <h1>Modus</h1>

      <div className="row">
        { steps[state.step] }
      </div>
      <div className="row">
        <button className="button dec">Set step 1</button>
        <button className="button dec">Set A to 5</button>
        <button className="button dec2">Set A to 10</button>
        <button className="button inc">Set B to 5</button>
        <button className="button inc2">Set B to 10</button>
      </div>
    </div>
  )

  return {
    DOM: view(model(intent(sources.DOM)))
  }
}
