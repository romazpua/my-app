import React, {useEffect, useState} from "react";

const Test = () => {

  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = `Вы нажали ${count} раз`;
  });

  return (
    <div style={{margin: '50px'}}>
      <p style={{
        padding: '20px',
        background: "grey",
        width: '300px',
        fontSize: '24px',
        margin: '20px'
      }}>
        Вы кликнули {count} раз(а)
      </p>
      <button
        style={{
          background: "green",
          padding: '20px',
          margin: '20px',
          fontSize: '24px',
          cursor: 'pointer',
          fontWeight: '700'
        }}
        onClick={() => setCount(count + 1)}>
        +
      </button>
      <button
        style={{
          background: "red",
          padding: '20px',
          margin: '20px',
          fontSize: '24px',
          cursor: 'pointer',
          fontWeight: '700'
        }}
        onClick={() => setCount(count - 1)}>
        -
      </button>
    </div>
  )
}

export default Test