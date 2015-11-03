import reduceReducers from 'reduce-reducers';


function reducer(state = {}, action = null){
    return state;
}

/**
 * Merge objects into state substructure: { application }
 */
const applicationReducer = reduceReducers(
    reducer
);

export default applicationReducer;

