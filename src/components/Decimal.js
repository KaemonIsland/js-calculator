import React from 'react';

const Decimal = props =>
  <button
    id="decimal"
    onClick={() => props.input('.')}
  >
  .
  </button>;

export default Decimal;