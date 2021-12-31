import { CatInitialInterface } from "./Interface";
import { CatsTypes, CatTypeAction } from "./Types";


const initialState:CatInitialInterface = {
    loading:true
}

export const catReducer = (state=initialState,action:CatTypeAction) => {

    switch(action.type){
        case CatsTypes.LOADING_CATS:
            return {
                ...state,
                loading:true
            }

        case CatsTypes.LOAD_ALL_CATS:
            return {
                ...state,
                loading:false,
                cats:action.payload.data,
                catsBreed:null,
                catCategories:null
            }
        case CatsTypes.LOAD_ALL_BREEDS:
            return {
                ...state,
                loading:false,
                catBreeds:action.payload.data,
                catCategories:null,
                cats:null
            }
        case CatsTypes.LOAD_ALL_CATS_CATEGORIES:
            return {
                ...state,
                loading:false,
                catCategories:action.payload.data,
                cats:null,
                catsBreed:null,
            }
        default:
            return state 
    }

}
