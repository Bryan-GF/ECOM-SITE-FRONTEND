import {} from '../actions';

const initialState = {

}

export const siteReducer = (state = initialState, action) => {
    switch (action.type) {
        /*case FETCHING_NOTES:
        return {...state,
                fetchingNotes: true};
        case FETCHING_NOTES_SUCCESS:
            return {...state, 
                    notes: action.payload,
                    fetchingNotes: false};
        case FETCHING_NOTES_FAILURE:
            return {...state, 
                error: action.payload,
                fetchingNotes: false}; */
        default:
            return state;
    }
};