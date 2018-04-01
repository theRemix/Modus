import xs from 'xstream'
import {Sources, Sinks} from './interfaces'

export function App(sources : Sources) : Sinks {

  const toggle = ( select:any ) => select.events('click')
    .map(( ev:Event ) => ev.currentTarget.dataset.selected === "false" ? "true" : "false")
    .startWith("false");

  const love$ = toggle(sources.DOM.select('.t1-love')).map(( love:string ) =>
    <div className={`t1 t1-love t1-selected-${love}`} data-selected={love}>Love {love}</div>
  );
  const learn$ = toggle(sources.DOM.select('.t1-learn')).map(( learn:string ) =>
    <div className={`t1 t1-learn t1-selected-${learn}`} data-selected={learn}>Learn</div>
  );
  const profit$ = toggle(sources.DOM.select('.t1-profit')).map(( profit:string ) =>
    <div className={`t1 t1-profit t1-selected-${profit}`} data-selected={profit}>Profit</div>
  );
  const proficiency$ = toggle(sources.DOM.select('.t1-proficiency')).map(( proficiency:string ) =>
    <div className={`t1 t1-proficiency t1-selected-${proficiency}`} data-selected={proficiency}>Proficiency</div>
  );

  const vtree$ = xs.combine(love$, learn$, profit$, proficiency$)
    .map(([ love, learn, profit, proficiency ]) => <div>
      <h1>Modus</h1>

      { love }
      { learn }
      { profit }
      { proficiency }

    </div>
  )

  return {
    DOM: vtree$
  }
}
