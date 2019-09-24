import userReducer from './userReducer';

describe('Testing userReducer states', () => {
    test('should have its correct initial state', () => {
        let action = {};
        let newState = userReducer(undefined, action);
        expect(newState).toEqual({});
    })

    test('should have a state of action.payload', () => {
        let action = {type: 'SET_USER'};
        let newState = userReducer(undefined, action);
        expect(newState).toEqual(action.payload);
    })

    test('should have a state of {}', () => {
        let action = { type: 'UNSET_USER' };
        let newState = userReducer(undefined, action);
        expect(newState).toEqual({});
    })

})