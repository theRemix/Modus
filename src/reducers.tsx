import xs from 'xstream'

const currentSituationStep = 1;
const desiredSituationStep = 5;
const reducers = ({
  workingStart$,
  unemployedStart$,
  currentLikeChoices$,
  currentLikeNext$,
  currentProficiency$,
}) => xs.merge(
  workingStart$.mapTo(state => 
    state.set('step', currentSituationStep)
  ),
  unemployedStart$.mapTo(state =>
    state.set('step', desiredSituationStep )
  ),
  currentLikeChoices$.map(({ key, selected }) => state => 
    state.setIn(['current',key], selected)
  ),
  currentLikeNext$.mapTo(state => 
    state.set('step', 2)
  ),
  currentProficiency$.map(answer => state => 
    state
      .setIn(['current','proficiency'], answer)
      .set('step', 3)
  ),
);

export default reducers;