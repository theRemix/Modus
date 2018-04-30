const resolve = {
  currentlyWorking : [
    {
      key : 'people',
      content : [
        null,
        null,
        <p>You don't like the people you work with.</p>,
        null
      ],
    },
    {
      key : 'product',
      content : [
        null,
        null,
        <p>You don't like the product, or projects that you are working on.</p>,
        null
      ],
    },
    {
      key : 'tech',
      content : [
        null,
        null,
        <p>You don't like the tech stack, the product you are building, or the actual code/work that you do at your current position.</p>,
        null
      ],
    },
    {
      key : 'proficiency',
      content : [
        null,
        null,
        <p>You don't feel like you are bringing as much value to your position as you'd want.</p>,
        null
      ],
    },
    {
      key : 'learn',
      content : [
        null,
        null,
        <p>You aren't learning or growing at where you are, or from the team you work with.</p>,
        null
      ],
    },
    {
      key : 'pay',
      content : [
        null,
        null,
        <p>You aren't being paid as much as you deserve at your current position.</p>,
        null
      ],
    },
    {
      key : 'freedom',
      content : [
        null,
        null,
        <p>Work is not allowing you to have as much freedom to have a balanced life.</p>,
        null
      ],
    }
  ],
  unemployed : [
    {
      key : 'people',
      content : [
        null,
        null,
        <p>The people at a company is important to you.</p>,
        null
      ],
    },
    {
      key : 'product',
      content : [
        null,
        null,
        <p>Find a company that is working on a product or service that you are passionate about.</p>,
        null
      ],
    },
    {
      key : 'tech',
      content : [
        null,
        null,
        <p>The code that you write, or software that you build is important.</p>,
        null
      ],
    },
    {
      key : 'proficiency',
      content : [
        null,
        <p>Look for a company that can keep you challenged.</p>,
        <p>Look for a company that will be able to leverage your full potential.</p>,
        null
      ],
    },
    {
      key : 'learn',
      content : [
        null,
        <p>You are ok with being the strongest dev in your team.</p>,
        <p>Be on a team that are more experienced than you, with different valuable perspectives.</p>,
        null
      ],
    },
    {
      key : 'pay',
      content : [
        null,
        <p>You are in a place in life where money isn't a huge driving force, so you can focus on other aspects.</p>,
        <p>Accept a company that values your time enough to provide competitive pay.</p>,
        null
      ],
    },
    {
      key : 'freedom',
      content : [
        null,
        <p>You are in a place in life where you can focus on obtaining your professional goals.</p>,
        <p>Find out if your prospective companies have happy employees that get to have a life outside of work.</p>,
        null
      ],
    }
  ]
}
const resolution = state => {
  
  const getDiff = key => // in unemployed state, current is always false
    state.getIn(['current',key]) && state.getIn(['desired',key]) ? 0 :
    state.getIn(['current',key]) && !state.getIn(['desired',key]) ? 1 :
    !state.getIn(['current',key]) && state.getIn(['desired',key]) ? 2 : 3;
  
  const status = state.get('currentlyWorking') ? resolve.currentlyWorking : resolve.unemployed;
  return status.map(({ key }, i ) => 
    status[i].content[getDiff(key)]
  );
}

export default resolution;