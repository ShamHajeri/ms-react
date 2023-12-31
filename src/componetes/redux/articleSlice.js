import { createSlice } from "@reduxjs/toolkit";

const initialState={
    articles:[]
}

const articleSlice = createSlice({
    name:'article',
    initialState,
    reducers:{
        updateArticle(state,action){
            state.articles = action.payload;
        },
        getArticle(state){
            return state.articleSlice;
        }

    }

});
export const {updateArticle,getArticle} =articleSlice.actions;

export default articleSlice.reducer;