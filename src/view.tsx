import steps from './steps'

const view = state$ => state$.map( state  => 
  <div className="container">
    <h1>Modus</h1>

    <div className="row">
      { steps[state.get('step')].label }
    </div>
    <div className="row">
      { steps[state.get('step')].input }
    </div>
    <div>
      { JSON.stringify(state) }
    </div>
  </div>
)

export default view;