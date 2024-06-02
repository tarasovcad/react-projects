import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [people, usePeople] = useState(data);
  return (
    <main>
      <section className="container">
        <h3>{people.length} birthday today</h3>
        <List people={people} />
        <button onClick={() => usePeople([])}>Clear me</button>
      </section>
    </main>
  );
}

export default App;
