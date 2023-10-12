import { Button, Card, TextInput, Title } from "@tremor/react";
import { toast } from "sonner";
import { useUserActions } from "../hooks/useUsersActions";

export function CreateNewUser() {
	const { addUser } = useUserActions();

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
		event.preventDefault();

		const form = event.target as HTMLFormElement;
		const formData = new FormData(form);

		const name = formData.get("name") as string;
		const email = formData.get("email") as string;
		const github = formData.get("github") as string;

		if (!name || !email || !github) {
			toast.error("Comlete the form");
			return;
		}
		addUser({ name, email, github });
		form.reset();
	};
	return (
		<Card>
			<Title>Create new user</Title>
			<form onSubmit={handleSubmit} className="grid gap-5 mt-5">
				<TextInput placeholder="Escribe el nombre" name="name" />
				<TextInput placeholder="Escribe el Email" name="email" />
				<TextInput placeholder="Escribe el github" name="github" />

				<Button>Create</Button>
			</form>
		</Card>
	);
}
