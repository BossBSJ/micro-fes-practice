import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button
      onClick={() => setCount((count) => count + 1)}
      style={{ backgroundColor: "red" }}
    >
      count is {count}
    </button>
  );
}
