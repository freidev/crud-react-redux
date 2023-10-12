import { User, UserId, addNewUser, deleteUserById } from "../store/users/slice";
import { useAppDispatch } from "./store";

export const useUserActions = () => {
	const dispath = useAppDispatch();

	const addUser = ({ name, email, github }: User) => {
		dispath(addNewUser({ name, email, github }));
	};
	const removeUsers = (id: UserId) => {
		dispath(deleteUserById(id));
	};

	return { addUser, removeUsers };
};
