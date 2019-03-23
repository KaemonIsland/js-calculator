import React from 'react';

const Clear = props => {
  return (
    <button
      id="clear"
      onClick={props.clear}
    >
      AC
    </button>
  )
}

export default Clear;