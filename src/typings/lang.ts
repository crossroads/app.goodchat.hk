
export type Definite<T> = Exclude<T, null | undefined>

export type Callback<T> = (args: T) => any

export type Maybe<T> = T | null
