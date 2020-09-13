import React from 'react';
import { Admin, Resource, ListGuesser } from 'react-admin';
import dataProvider from './dataProvider';

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="posts" list={ListGuesser} />
    <Resource name="users" list={ListGuesser} />
    <Resource name="comments" list={ListGuesser} />
    <Resource name="albums" list={ListGuesser} />
    <Resource name="photos" list={ListGuesser} />
    <Resource name="todos" list={ListGuesser} />
  </Admin>
);

export default App;
