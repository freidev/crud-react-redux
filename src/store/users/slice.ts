import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type UserId = string;

export interface User {
	name: string;
	email: string;
	github: string;
}
export interface UserWithId extends User {
	id: UserId;
}
const defaultState: UserWithId[] = [
	{
		id: "1",
		name: "Freilyn",
		email: "freilyn@example.com",
		github: "freilynbp03",
	},
	{
		id: "2",
		name: "John Doe",
		email: "john@example.com",
		github: "john",
	},
	{
		id: "3",
		name: "Midudev",
		email: "midu@example.com",
		github: "midudev",
	},
	{
		id: "4",
		name: "Joe Doe",
		email: "joe@example.com",
		github: "joe",
	},
];
const initialState: UserWithId[] = (() => {
	const persistedState = localStorage.getItem("app_state");
	if (persistedState) return JSON.parse(persistedState).users;
	return defaultState;
})();

export const usersSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		addNewUser: (state, action: PayloadAction<User>) => {
			const id = crypto.randomUUID();
			return [...state, { id: id, ...action.payload }];
		},
		deleteUserById: (state, action: PayloadAction<UserId>) => {
			return state.filter((user) => user.id !== action.payload);
		},
	},
});

export default usersSlice.reducer;

export const { addNewUser, deleteUserById } = usersSlice.actions;
