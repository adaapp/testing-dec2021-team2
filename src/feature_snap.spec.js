import React from 'react';
import renderer from 'react-test-renderer';
import Header from './Components/Header';
import Form from './Components/Form';
import App from './App';

it('checks that DOM for App is consistent', () => {
    const tree = renderer.create(<App/>).toJSON();
    expect(tree).toMatchSnapshot();
});

it('checks that DOM for Form is consistent', () => {
    const tree = renderer.create(<Form/>).toJSON();
    expect(tree).toMatchSnapshot();
});

it('checks that DOM for Header is consistent', () => {
    const tree = renderer.create(<Header/>).toJSON();
    expect(tree).toMatchSnapshot();
});

