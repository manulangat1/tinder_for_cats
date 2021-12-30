export interface CatImage {
    id:number,
    url:string
}
export interface Cat { 
    id:number,
    url?:string,
    name?:string,
    image?:CatImage,
    description?:string
}


export interface CatInitialInterface{
    loading: boolean,
    readonly cats? : Cat[],
    readonly catBreeds?:Cat[]
    readonly catCategories?: Cat[]
}
