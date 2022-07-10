import type { NodeRepr_t } from '@elemaudio/core'

export type SignalOrNumber = NodeRepr_t | number

export type Channels = { L: SignalOrNumber; R: SignalOrNumber }

