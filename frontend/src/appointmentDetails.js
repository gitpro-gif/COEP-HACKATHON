const SET_APPOINTMENT_DETAILS = "SET_APPOINTMENT_DETAILS";
const UPDATE_APPOINTMENT_STATUS = "UPDATE_APPOINTMENT_STATUS";


export const setAppointmentDetails = (details) => ({
    type: SET_APPOINTMENT_DETAILS,
    payload: details,
});

export const updateAppointmentStatus = (status) => ({
    type: UPDATE_APPOINTMENT_STATUS,
    payload: status,
});


const initialState = {
    appointmentDetails: null,
    appointmentStatus: "", 
};


export default function appointmentReducer(state = initialState, action) {
    switch (action.type) {
        case SET_APPOINTMENT_DETAILS:
            return {
                ...state,
                appointmentDetails: action.payload,
            };
        case UPDATE_APPOINTMENT_STATUS:
            return {
                ...state,
                appointmentStatus: action.payload, 
            };
        default:
            return state;
    }
}
