import {createNode, el, resolve} from '@elemaudio/core';
import type {NodeRepr_t} from '@elemaudio/core';

function MyComposite({props, children}) : NodeRepr_t {

    return resolve(el.mul( el.cycle(props.ampMod), 0.1,
        el.add(
        el.blepsaw(children[0]),
        el.blepsaw(el.mul(1.01, children[0])),
    )));
}

export function detunedSaws(props, frequency: NodeRepr_t | number) : NodeRepr_t {
    return createNode(MyComposite, props, [frequency]);
}
