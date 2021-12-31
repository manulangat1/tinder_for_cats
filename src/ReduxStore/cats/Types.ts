import { Cat } from "./Interface";

export enum CatsTypes {
    LOAD_ALL_CATS='LOAD/ALL/CATS',
    LOAD_ALL_CATS_CATEGORIES='LOAD/ALL/CATS/CATEGORIES',
    LOAD_ALL_BREEDS='LOAD/ALL/BREEDS',
    LOADING_CATS='LOADING/CATS',
    LOAD_ALL_FAIL='LOAD/ALL/FAIL',
}

interface CATS_LOADED {
    type: typeof CatsTypes.LOAD_ALL_CATS
    payload: {
        data: Cat
    }
}

interface CATS_LOADING { 
    type: typeof CatsTypes.LOADING_CATS
}

interface LOAD_FAIL {
    type: typeof CatsTypes.LOAD_ALL_FAIL
}

interface LOAD_BREEDS {
    type: typeof CatsTypes.LOAD_ALL_BREEDS
    payload:{
        data:Cat
    }
}

interface LOAD_CATEGORIES {
    type: typeof CatsTypes.LOAD_ALL_CATS_CATEGORIES
    payload:{
        data: Cat
    }
}
export type CatTypeAction = CATS_LOADED | CATS_LOADING | LOAD_FAIL | LOAD_BREEDS | LOAD_CATEGORIES
