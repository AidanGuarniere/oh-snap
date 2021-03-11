import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

afterEach(cleanup);

// check for Nav component on DOM 
describe("Nav component", () => {
  // test 1
  it("renders", () => {
    render(<Nav />);
  });
  // test 2
  it("matches snapshot DOM node structure", () => {
    const { asFragment } = render(<Nav />);
    expect(asFragment()).toMatchSnapshot();

  });
});

// check for emoji content in Nav by label 
describe('emoji is visible', () => {
  it('inserts emoji into the h2', () => {
  const { getByLabelText } = render(<Nav />);

  expect(getByLabelText('camera')).toHaveTextContent('📸');
  });
});

// check for visible link content in Nav by data-testid
describe('links are visible', () => {
  it('inserts text into the links', () => {
    const { getByTestId } = render(<Nav />);
    expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
    expect(getByTestId('about')).toHaveTextContent('About Me');
  });
})