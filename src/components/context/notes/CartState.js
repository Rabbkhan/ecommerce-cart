import React from 'react';
import NoteContext from './cartContext';

const Cartstate = (props) => {
  const state={
    "name": "Rabbil",
    "class": "5b"
  }
  return (
    <NoteContext.Provider value={state}>
    {props.children}
    </NoteContext.Provider>
  )
}

export default Cartstate;