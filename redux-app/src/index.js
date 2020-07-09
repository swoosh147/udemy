import {createStore} from 'redux';

console.log('Hello');

// const initialState = 0;

const reduser = (state = 0, action) => {
//   if(action.type === 'INC'){
//     return state + 1;
//   }
//   return 0;
// }
    switch(action.type){
      case 'INC':
        return state + 1;
      case 'DEC':
        return state - 1;
      case 'RND':
        return state + action.value;
      default:
        return state;
    }
}

// const inc = () =>{
//   return {
//     type: 'INC'
//   }
// }

const inc = () => ({type: 'INC'});
const dec = () => ({type: 'DEC'});
const rnd = (value) => ({type: 'RND', value});

const store = createStore(reduser);

store.subscribe(() => {
  console.log(store.getState());
});

// console.log(store.getState());
// store.dispatch({type: 'INC'});
// console.log(store.getState());
// store.dispatch({type: 'INC'});
// console.log(store.getState());
// store.dispatch({type: 'INC'});
// console.log(store.getState());

document.getElementById('inc').addEventListener('click', () => {
  store.dispatch(inc());
})

document.getElementById('dec').addEventListener('click', () => {
  store.dispatch(dec());
})

document.getElementById('rnd').addEventListener('click', () => {
  const value = Math.floor(Math.random() * 10);
  store.dispatch(rnd(value));
})

const update = () =>{
  document.getElementById('counter').textContent = store.getState();
}

store.subscribe(update);

// store.subscribe(() => {
//   console.log(store.getState());
// });

// let state = reduser(undefined, {});

// state = reduser(state, {type: 'INC'});
// console.log(state);

// state = reduser(state, {type: 'INC'});
// console.log(state);