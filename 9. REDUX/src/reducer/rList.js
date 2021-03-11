import {ADD_SEASON, REMOVE_SEASON, MARK_COMPLETE} from '../action/action.type';

const initialState = []

export default (state = initialState , action) => {

switch (action.type) {
    case ADD_SEASON:
        return [...state ,action.payload]
    
    case REMOVE_SEASON:
        return state.filter((season) => season.id != action.payload)

    case MARK_COMPLETE:
        return    

        

    default:
        break;
}

}