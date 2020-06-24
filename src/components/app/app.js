import React from 'react'
import { Route } from 'react-router-dom'

import Form from '../Form'
import Button from '../Button'
import TableList from '../TableList'

function App() {
  return (
    <div>
      <h1>Estimator</h1>
      <Form />
      <TableList />
    </div>
  );
}

export default App;
