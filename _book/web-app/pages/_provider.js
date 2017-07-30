import { store } from 'common'
import { Provider } from 'react-redux'

const ProviderComponent = (props) => (
  <Provider store={store()}>
    <div>{props.children}</div>
  </Provider>
)

export default ProviderComponent
