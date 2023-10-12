import { Middleware, configureStore } from "@reduxjs/toolkit";
import { toast } from "sonner";
import usersReducer, { UserWithId } from "./users/slice";

const persistanceDataMiddleware: Middleware = (store) => (next) => (action) => {
	next(action);
	localStorage.setItem("app_state", JSON.stringify(store.getState()));
};

const syncWithDatabase: Middleware = (store) => (next) => (action) => {
	let user = action.payload;
	if (action.type === "user/deleteUserById") {
		const state = store.getState();
		const findUser = state.users.find(
			(user: UserWithId) => user.id === action.payload,
		);
		user = findUser;
	}
	toast.success(`User ${user.name} has been synced`);
	next(action);
};

export const store = configureStore({
	reducer: {
		users: usersReducer,
	},
	middleware: [persistanceDataMiddleware, syncWithDatabase],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
