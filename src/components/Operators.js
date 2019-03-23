import React from 'react';

let operators = [
  ['add', '+'],
  ['subtract', '-'],
  ['multiply', '/'],
  ['divide', '*'],
]

const Operators = props => {
  return (
    <>
      {
        operators.map((ops, id) => <button
          key={id}
          id={ops[0]}
          onClick={() => props.input(ops[1])}
        >
          {ops[1]}
        </button>)
      }
    </>
  )
}

export default Operators;