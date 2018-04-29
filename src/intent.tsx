const intent = DOM => ({
  workingStart$ : DOM.select('.workingStart').events('click'),
  unemployedStart$ : DOM.select('.unemployedStart').events('click'),
  currentLikePeople$ : DOM.select('#currentLikePeople').events('change'),
  currentLikeProduct$ : DOM.select('#currentLikeProduct').events('change'),
  currentLikeTech$ : DOM.select('#currentLikeTech').events('change'),
});

export default intent;