import xs from 'xstream'

const intent = DOM => ({
  workingStart$ : DOM.select('.workingStart').events('click'),
  unemployedStart$ : DOM.select('.unemployedStart').events('click'),
  currentLikePeople$ : DOM.select('#currentLikePeople').events('change'),
  currentLikeProduct$ : DOM.select('#currentLikeProduct').events('change'),
  currentLikeTech$ : DOM.select('#currentLikeTech').events('change'),
  currentLikeNext$ : DOM.select('.currentLikeNext').events('click'),
  currentProficiency$ : xs.merge(
    DOM.select('.buttonYes').events('click').mapTo(true),
    DOM.select('.buttonNo').events('click').mapTo(false)
  )
});

export default intent;