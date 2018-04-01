import xs from 'xstream'
import {Sources, Sinks} from './interfaces'

export function App(sources : Sources) : Sinks {

  const toggle = ( select:any ) => select.events('click')
    .map(( ev:any ) => {
      return ev.target.dataset.selected === "false" ? "true" : "false";
    })
    .startWith("false");

  const lovePeople$ = toggle(sources.DOM.select('.t2-love-people')).map(( people:string ) =>
    <div className={`t2 t2-love-people t2-selected-${people}`} data-selected={people}>People</div>
  );
  const loveProduct$ = toggle(sources.DOM.select('.t2-love-product')).map(( product:string ) =>
    <div className={`t2 t2-love-product t2-selected-${product}`} data-selected={product}>Product</div>
  );
  const loveTech$ = toggle(sources.DOM.select('.t2-love-tech')).map(( tech:string ) =>
    <div className={`t2 t2-love-tech t2-selected-${tech}`} data-selected={tech}>Tech</div>
  );

  const love$ = xs.combine( sources.DOM.select('.t1-love').events('click'), lovePeople$, loveProduct$, loveTech$ )
    .map(([ ev, people, product, tech ]) => {

        return <div className={`t1 t1-love t1-focused-${ev.target.dataset.focus === "false" ? "true" : "false"}`} data-focus={ev.target.dataset.focus === "false" ? "true" : "false"}>
        {
          ev.target.dataset.focus === "false" ?
            <div>
              { people }
              { product }
              { tech }
            </div>
          : "Love"
        }
        </div>;
      } 
    ).startWith(
    <div className={`t1 t1-love t1-focused-false`} data-focus="false">
      Love
    </div>);


  const rewardFreedom$ = toggle(sources.DOM.select('.t2-reward-freedom')).map(( freedom:string ) =>
    <div className={`t2 t2-reward-freedom t2-selected-${freedom}`} data-selected={freedom}>Freedom</div>
  );
  const rewardPay$ = toggle(sources.DOM.select('.t2-reward-pay')).map(( pay:string ) =>
    <div className={`t2 t2-love-pay t2-selected-${pay}`} data-selected={pay}>Pay</div>
  );
  const reward$ = xs.combine( sources.DOM.select('.t1-reward').events('click'), rewardFreedom$, rewardPay$ )
    .map(([ ev, freedom, pay ]) => 
    <div className={`t1 t1-reward t1-focused-${ev.currentTarget.dataset.focus === "false" ? "true" : "false"}`} data-focus={ev.currentTarget.dataset.focus === "false" ? "true" : "false"}>
    {
      ev.currentTarget.dataset.focus === "false" ?
        <div>
          { freedom }
          { pay }
        </div>
      : "Reward"
    }
    </div>
  ).startWith(
    <div className={`t1 t1-reward t1-focused-false`} data-focus="false">
      Reward
    </div>);
    
    toggle(sources.DOM.select('.t1-reward')).map(( reward:string ) =>
    <div className={`t1 t1-reward t1-focused-${reward}`} data-selected={reward}>Reward</div>
  );


  const learn$ = toggle(sources.DOM.select('.t1-learn')).map(( learn:string ) =>
    <div className={`t1 t1-learn t1-selected-${learn}`} data-selected={learn}>Learn</div>
  );

  const proficiency$ = toggle(sources.DOM.select('.t1-proficiency')).map(( proficiency:string ) =>
    <div className={`t1 t1-proficiency t1-selected-${proficiency}`} data-selected={proficiency}>Proficiency</div>
  );

  const vtree$ = xs.combine(love$, learn$, reward$, proficiency$)
    .map(([ love, learn, reward, proficiency ]) => <div>
      <h1>Modus</h1>

      { love }
      { proficiency }
      { learn }
      { reward }

    </div>
  )

  return {
    DOM: vtree$
  }
}
