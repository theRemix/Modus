import xs from 'xstream'

const currentSituationStep = 1;
const desiredSituationStep = 5;
const reducers = ({
  workingStart$,
  unemployedStart$,
  currentLikePeople$,
  currentLikeProduct$,
  currentLikeTech$,
  currentLikeNext$,
  currentProficiency$,
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