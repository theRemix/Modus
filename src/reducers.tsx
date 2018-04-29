import xs from 'xstream'

const currentSituationStep = 1;
const desiredSituationStep = 5;
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

export default reducers;