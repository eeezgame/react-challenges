export function getFinalState(baseState:number, queue: (Function | number)[]) {
    let finalState = baseState;
    let tasks =  queue.slice()

    // TODO: 对队列做些什么...
    while (tasks.length) {
        const task = tasks.shift()
        const isFunc = typeof task === 'function';
        const isNum = typeof task === 'number'
        if(isFunc){
            finalState = task(finalState)
        } else if(isNum) {
            finalState = task
        }
    }
  
    return finalState;
  }
  