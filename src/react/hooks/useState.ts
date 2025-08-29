import { dispatcher } from '../dispatcher';

type SetStateAction<S> = S | ((prevState: S) => S);
type Dispatch<A> = (value: A) => void;

export function useState<S>(initialState: S | (() => S)): [S, Dispatch<SetStateAction<S>>] {
    return dispatcher.use((stateIndex, componentStates) => {
        if (componentStates[stateIndex] === undefined) {
            componentStates[stateIndex] = [typeof initialState === 'function' ? (initialState as () => S)() : initialState];
        }

        const setState = (action: SetStateAction<S>) => {
            const oldState = componentStates[stateIndex][0];
            const newState = typeof action === 'function'
                ? (action as (prevState: S) => S)(oldState)
                : action;

            if (newState !== oldState) {
                componentStates[stateIndex][0] = newState;
                dispatcher.scheduleUpdate();
            }
        };

        return [componentStates[stateIndex][0], setState];
    });
}
