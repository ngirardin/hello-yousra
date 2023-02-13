import Link from "next/link";
import { useState } from "react";
import Counter from "../Counter";
import Sum from "../Sum";

export default function IndexComponent() {
  const defaultValue = 5;

  const [c1, setC1] = useState(defaultValue);
  const [c2, setC2] = useState(defaultValue);

  console.log({ c1, c2 });

  const onCounterChange = (counter: "one" | "two", count: number) => {
    if (counter === "one") setC1(count);
    if (counter === "two") setC2(count);
  };

  const sum = c1 + c2;

  return (
    <>
      <h1>My contact app</h1>

      <Link href="/contacts">Show your contacts</Link>

      <Counter
        default={defaultValue}
        onChange={(count) => onCounterChange("one", count)}
      />

      <Counter
        default={defaultValue}
        onChange={(count) => onCounterChange("two", count)}
      />

      <Sum sum={sum} />
    </>
  );
}
