import xs from 'xstream'

const intent = DOM => ({
  workingStart$ : DOM.select('.workingStart').events('click'),
  unemployedStart$ : DOM.select('.unemployedStart').events('click'),
  currentLikeChoices$ : xs.merge(
    DOM.select('#currentLikePeople').events('change').map(e => ({ key : 'people', selected : e.target.checked})),
    DOM.select('#currentLikeProduct').events('change').map(e => ({ key : 'product', selected : e.target.checked})),
    DOM.select('#currentLikeTech').events('change').map(e => ({ key : 'tech', selected : e.target.checked}))
  ),
  currentLikeNext$ : DOM.select('.currentLikeNext').events('click'),
  currentProficiency$ : xs.merge(
    DOM.select('.buttonYes').events('click').mapTo(true),
    DOM.select('.buttonNo').events('click').mapTo(false)
  )
});

export default intent;