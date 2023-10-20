import React from 'react';
import {family} from "./simpsons/simpsonsFamily";
import {Simpson} from "./simpsons/simpson";

const App = () => {
  return (
      <div>
          {family.map(value => <Simpson key={value.id} item={value}/>)}
      </div>
  );
};

export {App};
