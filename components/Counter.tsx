import { useState } from "react";

type Props = {
  default: number;
  onChange: (count: number) => void;
};

export default function Counter(props: Props) {
  const [count, setCount] = useState(props.default);

  const increment = () => {
    const newCount = count + 1;
    setCount(newCount);
    props.onChange(newCount);
  };

  const decrement = () => {
    const newCount = count - 1;
    setCount(count - 1);
    props.onChange(newCount);
  };

  return (
    <div style={{ display: "flex", padding: 10 }}>
      <button onClick={decrement}>-</button>

      <div style={{ margin: "0 20px" }}>{count}</div>

      <button onClick={increment}>+</button>
    </div>
  );
}
