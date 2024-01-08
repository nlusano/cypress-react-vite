import { useActions, useAppState } from "../overmind";

export const CounterOvermind = () => {
  const { count } = useAppState();
  const { decrement, increment } = useActions();

  return (
    <div className="card">
      <button data-cy="decrement" onClick={decrement}>
        -
      </button>
      <span data-cy="counter">{count}</span>
      <button data-cy="increment" onClick={increment}>
        +
      </button>
    </div>
  );
};
