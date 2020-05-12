export const asyncActionType = type => ({
    PENDING: `${type}_PENDING`,
    SUCCESS: `${type}_SUCCESS`,
    FAILURE: `${type}_FAILURE`
});


export const GET_PROFILE =  asyncActionType('GET_PROFILE')
export const UPDATE_PROFILE =  asyncActionType('UPDATE_PROFILE')
export const CONTACT_US  =  asyncActionType('GET_PROFILE')
