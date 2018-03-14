import { 
    VisibilityFilters, 
    SET_VISIBILITY_FILTER, 
    ADD_TODO, 
    TOGGLE_TODO} from './actions';

import { combineReducers } from 'redux';

const { SHOW_ALL } = VisibilityFilters;

const initialState = {
    visibilityFilter: VisibilityFilters.SHOW_ALL,
    todos:[]
};

function visibilityFilter(state = SHOW_ALL, action){
    switch(action.type){
        case SET_VISIBILITY_FILTER:
            return action.filter;
        default:
            return state;
    }
};

function todos(state = [], action){
    // console.log(...state)
    switch(action.type){
        //增加todo类型
        case ADD_TODO:
            return [
                    ...state,
                    {
                        id: action.id,
                        text: action.text,
                        completed: false
                    }
                ];
        //根据index切换todo状态
        case TOGGLE_TODO:
            return state.map((todo) => {
                if(todo.id === action.id){
                    return Object.assign({}, todo, {
                        completed: !todo.completed
                    })
                }
                return todo
            })
        default:
            return state;
    }
};

// function todoApp (state = initialState, action) {
//     return {
//         visibilityFilter: visibilityFilter(state.visibilityFilter, action),
//         todos: todos(state.todos, action)
//     }
// }

const todoApp = combineReducers({
    visibilityFilter,
    todos
});

export default todoApp;