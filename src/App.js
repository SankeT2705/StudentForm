import React, { useState } from 'react';
import Card from './card';
import Form from './form';
function App() {

  const [obj, setList] = useState([])
  const update = (data) => {
    const updateList = [
      ...obj, data
    ]
    setList(updateList)
  }
  const card = obj.map((a) => {
    return <Card name={a.name} email={a.email} mobile={a.mobile} branch={a.branch} />
  })
  return (
    <div className="App">
      <Form list={update} />
      {card}
    </div>
  );
}

export default App;
