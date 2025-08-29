
import { dispatcher } from '../dispatcher';

type EffectCallback = () => (void | (() => void));
type DependencyList = any[];

export function useEffect(effect: EffectCallback, deps?: DependencyList) {
    return dispatcher.use((stateIndex, componentStates) => {
        const oldEffectEntry = componentStates[stateIndex];

        if (!oldEffectEntry) {
            // First render, execute the effect and store the cleanup
            const newCleanupResult = effect();
            const newCleanup = typeof newCleanupResult === 'function' ? newCleanupResult : undefined;
            componentStates[stateIndex] = [effect, deps, newCleanup];
        } else {
            const [, prevDeps, prevCleanup] = oldEffectEntry;
            const hasChanged = !deps || !prevDeps || deps.some((dep, i) => dep !== prevDeps[i]);

            if (hasChanged) {
                // Execute previous cleanup if it exists
                if (typeof prevCleanup === 'function') {
                    prevCleanup();
                }

                // Execute the effect and store the new cleanup
                const newCleanupResult = effect();
                const newCleanup = typeof newCleanupResult === 'function' ? newCleanupResult : undefined;
                componentStates[stateIndex] = [effect, deps, newCleanup];
            } else {
                // Dependencies haven't changed, keep the old effect and cleanup
                componentStates[stateIndex] = oldEffectEntry;
            }
        }
    });
}
