type State = { state: { count: number } };

export const decrement = ({ state }: State) => state.count--;
export const increment = ({ state }: State) => state.count++;
