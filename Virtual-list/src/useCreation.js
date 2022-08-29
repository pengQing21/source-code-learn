import { useRef } from 'react';

const depsAreSame = (oldDeps, deps) => {
    if (oldDeps === deps) return true

    for (let i = 0; i < oldDeps.length; i++) {
        // 判断两个值是否是同一个值
        if (!Object.is(oldDeps[i], deps[i])) return false
    }

    return true
}

const useCreation = (fn, deps) => {

    const { current } = useRef({
        deps,
        obj: {},
        initialized: false
    })

    if (current.initialized === false || !depsAreSame(current.deps, deps)) {
        current.deps = deps;
        current.obj = fn();
        current.initialized = true;
    }

    return current.obj
}

export default useCreation;