import steps from './steps'
import resolution from './resolution'

const resolutionStep = 10;

const view = state$ => state$.map( state  => 
  <div className="container">
    <h1>Modus</h1>

    {
      state.get('step') < resolutionStep ?
        <div>
          <div className="row">
            { steps[state.get('step')].label }
          </div>
          <div className="row">
            { steps[state.get('step')].input }
          </div>
        </div>
      :
        <div>
          <h2>Resolution</h2>
          { resolution(state) }
        </div>

    }
  </div>
)

export default view;