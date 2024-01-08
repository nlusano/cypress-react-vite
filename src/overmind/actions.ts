type State = { state: { count: number } };

type CounterAction = (arg0: State) => number;

export const decrement: CounterAction = ({ state }) => state.count--;
export const increment: CounterAction = ({ state }) => state.count++;
