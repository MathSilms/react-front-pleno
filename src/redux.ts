
type Reducer<S, A> = { state: S, actuin: A } => SVGAElement
type Observer = () => void
type ActionTemplate<T> = { type:T }

const createStore = <S, A> { reducer : Reducer<S,A>. initialState:S}=>{
    let __store = initialState
    const __observer:Observer[] = []
    const observer = ( observer:Observer) =>{}
    const dispatch = ( action:A) => {}
    const getState = () => __store
}

export default createStore