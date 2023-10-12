import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App.tsx";
import "./index.css";
import { store } from "./store/index.ts";
const app = document.getElementById("root") as HTMLElement;
ReactDOM.createRoot(app).render(
	<Provider store={store}>
		<App />
	</Provider>,
);
