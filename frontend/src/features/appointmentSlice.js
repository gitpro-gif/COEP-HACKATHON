import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    adhar: "",
    status: "", 
};

const appointmentSlice = createSlice({
    name: 'appointment',
    initialState,
    reducers: {
        setAppointmentDetails: (state, action) => {
            return { ...state, ...action.payload }; 
        },
        resetForm: () => initialState,
    }
});

export const { setAppointmentDetails, resetForm } = appointmentSlice.actions;
export default appointmentSlice.reducer;
