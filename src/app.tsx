import {Sources, Sinks} from './interfaces'
import model from './model'
import intent from './intent'
import view from './view'

export const App = (sources : Sources) : Sinks => ({
  DOM: view(model(intent(sources.DOM)))
});