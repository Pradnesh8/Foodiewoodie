import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "app",
    initialState: {
        latitude: 0,
        longitude: 0
    },
    reducers: {
        changeGeoLocation: (state, action) => {
            state.latitude = action.payload.latitude
            state.longitude = action.payload.longitude
        }
    }
})

export const { changeGeoLocation } = appSlice.actions;
export default appSlice.reducer;