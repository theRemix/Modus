import { Map } from 'immutable'
import reducers from './reducers'

const model = actions => {
  const reducer$ = reducers(actions);

  const initialState = Map({
    step : 0,
    currentlyWorking : false,
    current : Map({
      people : false,
      product : false,
      tech : false,
      proficiency : false,
      learn : false,
      pay : false,
      freedom : false,
    }),
    desired : Map({
      people : false,
      product : false,
      tech : false,
      proficiency : false,
      learn : false,
      pay : false,
    })
  });

  const state$ = reducer$.fold((next, reducer) => reducer(next), initialState);
  return state$;
}

export default model;