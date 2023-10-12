import { Toaster } from "sonner";
import { CreateNewUser } from "./components/CreateNewUser";
import ListOfUsers from "./components/ListOfUsers";

function App() {
	return (
		<div className="container mx-auto">
			<div className="grid grid-cols-3 gap-4 p-5">
				<ListOfUsers />
				<div className="max-w-md col-span-1 h-auto">
					<CreateNewUser />
				</div>
				<Toaster richColors />
			</div>
		</div>
	);
}

export default App;
