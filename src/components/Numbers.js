import React from 'react';

let nums = [
  ['zero', '0'],
  ['one', '1'],
  ['two', '2'],
  ['three', '3'],
  ['four', '4'],
  ['five', '5'],
  ['six', '6'],
  ['seven', '7'],
  ['eight', '8'],
  ['nine', '9'],
]

const Numbers = props => {
  return (
    <>
      {
        nums.map((num, id) => <button
          key={id}
          id={num[0]}
          onClick={() => props.input(num[1])}
        >
          {num[1]}
        </button>)
      }
    </>
  )
}

export default Numbers;