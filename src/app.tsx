import xs from 'xstream'
import { Map } from 'immutable'
import {Sources, Sinks} from './interfaces'

export function App(sources : Sources) : Sinks {

  const currentSituationStep = 1;
  const desiredSituationStep = 5;
  const steps = [
    {
      label : <div>
        <h2>If you are currently working, <a href="#1" className="workingStart">start here</a>.</h2>
        <h2>Otherwise, <a href="#2" className="unemployedStart">start here</a>.</h2>
      </div>,
      input : null
    },
    {
      label : <div>
        <p>
          Where are you now?<br />
          Think about your current job— who you work with, what you are working on, your professional environment, and your lifestyle.
        </p>
        <h2>What about your current position do you really like?</h2>
        <p>(Select all that are true.)</p>
      </div>,
      input : <div>
        <ul className="inputList">
          <li>
            <input type="checkbox" id="currentLikePeople" />
            <label for="currentLikePeople" className="label-inline">
              I really like the people I work with.
            </label>
          </li>
          <li>
            <input type="checkbox" id="currentLikeProduct" />
            <label for="currentLikeProduct" className="label-inline">
              I like the project/product I am working on, or I like purpose that the project/product I am working on serves.
            </label>
          </li>
          <li>
            <input type="checkbox" id="currentLikeTech" />
            <label for="currentLikeTech" className="label-inline">
              I like the tech stack I am using.
            </label>
          </li>
        </ul>
        <button className="currentLikeNext">Next</button>
      </div>
    }
  ];

  const reducers = ({
    workingStart$,
    unemployedStart$,
    currentLikePeople$,
    currentLikeProduct$,
    currentLikeTech$
  }) => xs.merge(
    workingStart$.mapTo(state => 
      state.set('step', currentSituationStep)
    ),
    unemployedStart$.mapTo(state =>
      state.set('step', desiredSituationStep )
    ),
    currentLikePeople$.map(e => state => 
      state.setIn(['current','people'], e.target.checked)
    ),
    currentLikeProduct$.map(e => state => 
      state.setIn(['current','product'], e.target.checked)
    ),
    currentLikeTech$.map(e => state => 
      state.setIn(['current','tech'], e.target.checked)
    )
  );

  const model = actions => {
    const reducer$ = reducers(actions);

    const initialState = Map({
      step : 0,
      currentlyWorking : false,
      current : Map({
        people : false,
        product : false,
        tech : false,
        learn : false,
        pay : false,
        freedom : false,
        proficiency : false
      }),
      desired : Map({
        people : false,
        product : false,
        tech : false,
        learn : false,
        pay : false,
        freedom : false,
        proficiency : false
      })
    });

    const state$ = reducer$.fold((next, reducer) => reducer(next), initialState);
    return state$;
  }

  const intent = DOM => ({
    workingStart$ : sources.DOM.select('.workingStart').events('click'),
    unemployedStart$ : sources.DOM.select('.unemployedStart').events('click'),
    currentLikePeople$ : sources.DOM.select('#currentLikePeople').events('change'),
    currentLikeProduct$ : sources.DOM.select('#currentLikeProduct').events('change'),
    currentLikeTech$ : sources.DOM.select('#currentLikeTech').events('change'),
  });

  const view = state$ => state$.map( state  => 
    <div className="container">
      <h1>Modus</h1>

      <div className="row">
        { steps[state.get('step')].label }
      </div>
      <div className="row">
        { steps[state.get('step')].input }
      </div>
      <div>
        { JSON.stringify(state) }
      </div>
    </div>
  )

  return {
    DOM: view(model(intent(sources.DOM)))
  }
}
