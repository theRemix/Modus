import xs from 'xstream'

const currentSituationStep = 1;
const desiredSituationStep = 5;
const boolQuestions = {
  2 : 'proficiency',
  3 : 'learn',
  4 : 'pay'
};

const reducers = ({
  workingStart$,
  unemployedStart$,
  currentLikeChoices$,
  currentLikeNext$,
  buttonBoolClick$,
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
  buttonBoolClick$.map(answer => state => 
    state
      .setIn(['current', boolQuestions[state.get('step')]], answer)
      .set('step', state.get('step') + 1)
  ),
);

export default reducers;