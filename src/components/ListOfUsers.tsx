import {
	Badge,
	Button,
	Card,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeaderCell,
	TableRow,
	Title,
} from "@tremor/react";

import { useAppSelector } from "../hooks/store";

import { useUserActions } from "../hooks/useUsersActions";
import { TrashIcon } from "./Icons";
export default function ListOfUsers() {
	const users = useAppSelector((state) => state.users);
	const { removeUsers } = useUserActions();
	return (
		<Card className="col-span-2">
			<Title>
				Users
				<Badge style={{ marginLeft: "15px" }}>{users.length}</Badge>
			</Title>
			<Table>
				<TableHead>
					<TableRow>
						<TableHeaderCell>ID</TableHeaderCell>
						<TableHeaderCell>Name</TableHeaderCell>
						<TableHeaderCell>Email</TableHeaderCell>
						<TableHeaderCell className="text-center">Actions</TableHeaderCell>
					</TableRow>
				</TableHead>

				<TableBody>
					{users.map((user) => (
						<TableRow key={user.id}>
							<TableCell className="uppercase">{user.id.slice(0, 5)}</TableCell>
							<TableCell>
								<a
									href={`https://github.com/${user.github}`}
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center gap-4"
								>
									<img
										style={{
											width: "32px",
											height: "32px",
											borderRadius: "50%",
										}}
										src={`https://unavatar.io/github/${user.github}`}
										alt={user.github}
									/>
									{user.name}
								</a>
							</TableCell>
							<TableCell>{user.email}</TableCell>
							<TableCell className="flex justify-center">
								{/* Comming soom */}
								{/* <Button variant="light"> */}
								{/* <EditIcon /> */}
								{/* </Button> */}
								<Button
									variant="light"
									onClick={() => removeUsers(user.id)}
									color="red"
								>
									<TrashIcon />
								</Button>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</Card>
	);
}
