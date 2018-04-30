import xs from 'xstream'

const currentSituationStep = 1;
const desiredSituationStep = 6;
const boolQuestions = {
  2 : 'proficiency',
  3 : 'learn',
  4 : 'pay'
};

const reducers = ({
  workingStart$,
  unemployedStart$,
  nextClick$,
  buttonBoolClick$,
  currentLikeChoices$,
  desiredLikeChoices$
}) => xs.merge(
  workingStart$.mapTo(state => 
    state.set('step', currentSituationStep)
  ),
  unemployedStart$.mapTo(state =>
    state.set('step', desiredSituationStep )
  ),
  nextClick$.mapTo(state => 
    state.set('step', state.get('step') + 1)
  ),
  buttonBoolClick$.map(answer => state => 
    state
      .setIn(['current', boolQuestions[state.get('step')]], answer)
      .set('step', state.get('step') + 1)
  ),
  currentLikeChoices$.map(({ key, selected }) => state => 
    state.setIn(['current',key], selected)
  ),
  desiredLikeChoices$.map(({ key, selected }) => state => 
    state.setIn(['desired',key], selected)
  ),
);

export default reducers;