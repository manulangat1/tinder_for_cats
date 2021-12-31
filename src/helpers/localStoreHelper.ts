/* eslint-disable no-console */

import { AnyARecord } from "dns";

class localStorageHelpers{
    static async SaveDataToLocalStorage(data:any) {
        let a = [];
        // Parse the serialized data back into an aray of objects
        const likedCats = localStorage?.getItem('likes') 
        
        if (likedCats != null) {
            a = JSON.parse(likedCats);
            
            // Push the new data  onto the array
            a.push(data);
            a.map((al:any) => console.log(al))
            return localStorage.setItem('likes', JSON.stringify([...a]));
        } else {
            
            // Push the new data  onto the array
            a.push(data);
            // Re-serialize the array back into a string and store it in localStorage
            return localStorage.setItem('likes', JSON.stringify([...a]));
        }
    }

    static async removeDatafromLocalStorage(data:any){
        const likedCats = localStorage?.getItem('likes') 
        const disLikedCats = localStorage?.getItem('dislikes') 
        let a: any[] = []
        let dislikeList:any = []
        if (likedCats != null) {
            a = JSON.parse(likedCats);
            
            // remove item from the array 
            a.map((al:any) => {
                if (al?.id === data.id){
                    const index = a.indexOf(al)
                    a.splice(index, 1)
                    console.log('found',data.id,index)
                    localStorage.setItem('likes', JSON.stringify([...a]));
                }
            })
            console.log("here")
            
            dislikeList =  disLikedCats  != null ?  JSON.parse(disLikedCats) : [];
                // Push the new data  onto the array
                dislikeList.push(data);
                dislikeList.map((al:any) => console.log(al))
            
            return localStorage.setItem('dislikes', JSON.stringify([...dislikeList]));
        } else {
                dislikeList.push(data);
                dislikeList.map((al:any) => console.log(al))
                return localStorage.setItem('dislikes', JSON.stringify([...dislikeList]));
        }
    }

    static async getlikesfromLocalStorage(){
        const likes = localStorage.getItem('likes') 
        return likes != null ? JSON.parse(likes) : []
    }

    static async getdislikesfromLocalStorage(){
        const dislikes = localStorage.getItem('dislikes')
        return dislikes != null ? JSON.parse(dislikes) : []
    }
}


export default localStorageHelpers;

