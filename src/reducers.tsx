import xs from 'xstream'

const currentSituationStep = 1;
const desiredSituationStep = 6;
const boolQuestions = {
  2 : ['current', 'proficiency'],
  3 : ['current', 'learn'],
  4 : ['current', 'pay'],
  5 : ['current', 'freedom'],
  7 : ['desired', 'proficiency'],
  8 : ['desired', 'learn'],
  9 : ['desired', 'pay'],
  9 : ['desired', 'freedom'],
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
    state
      .set('currentlyWorking', true)
      .set('step', currentSituationStep)
  ),
  unemployedStart$.mapTo(state =>
    state
      .set('currentlyWorking', false)
      .set('step', desiredSituationStep )
  ),
  nextClick$.mapTo(state => 
    state.set('step', state.get('step') + 1)
  ),
  buttonBoolClick$.map(answer => state => 
    state
      .setIn(boolQuestions[state.get('step')], answer)
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