import { selectCountry } from "./covid.actions";
import * as fromReducer from "./covid.reducer"

describe("Covidreducer", () => {
    describe("unknown action", () => {
        it("should retorn the same state", () => {


            const { initialState } = fromReducer;
            const action = {
                type: 'unknown',
            }
            const state = fromReducer.covidReducer(initialState, action);
            expect(state).toBe(initialState);
        })
    });

    describe("SelectCountry", () => {
        it("should create the object country in the state", () => {

            const { initialState } = fromReducer;
            const action = selectCountry({ payload: 'Spain' });
            const state = fromReducer.covidReducer(initialState, action);
            expect(state).toEqual({ ...initialState, selectedCountry: { name: 'Spain', code: 'Spain' } });
        });

    });
});
