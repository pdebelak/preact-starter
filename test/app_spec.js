import assert from 'assert';
import { h, render } from 'preact';

import App from '../src/app';

describe('<App />', () => {
  it('renders', () => {
    render(<App />, document.querySelector('body'));
    assert.equal(document.querySelector('p').textContent, 'From javascript!');
  });
});
