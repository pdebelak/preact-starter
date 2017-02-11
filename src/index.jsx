import { h, render } from 'preact';

const App = () =>
  <p>From javascript!</p>;

export default App;

render(<App />, document.getElementById('app'));
