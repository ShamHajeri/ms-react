import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    review: []
}

const reviewSlice = createSlice({
    name: 'review',
    initialState,
    reducers: {
        updateReview(state, action) {
            state.review = action.payload;
        },
        getReview(state) {
            return state.review;
        }
    }
});

export const { updateReview, getReview } = reviewSlice.actions;
export default reviewSlice.reducer;