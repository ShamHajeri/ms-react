import { createSlice } from "@reduxjs/toolkit";

const initialState={
    article:[]
}

const articleSlice = createSlice({
    name:'article',
    initialState,
    reducers:{
        updateArticle(state,action){
            state.article = action.payload;
        },
        getArticle(state){
            return state.article;
        }

    }

});
export const {updateArticle,getArticle} =articleSlice.actions;

export default articleSlice.reducer;