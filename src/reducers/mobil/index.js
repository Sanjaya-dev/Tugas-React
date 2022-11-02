import {GET_LIST_MOBIL} from '../../actions/mobilaction'

const initialState = {
    getListMobilResult : false,
    getListMobilLoading : false,
    getListMobilError : false

}

const mobil = (state = initialState, action) => {
    switch(action.type) {
        case GET_LIST_MOBIL:
            return{
                ...state,
                getListMobilResult : action.payload.data,
                getListMobilLoading : action.payload.loading,
                getListMobilError : action.payload.errorMessage
            }
        default:
            return state;
    }
}

export default mobil;