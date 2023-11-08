import { useRouteError } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

import PageContent from "../components/PageContent";

function ErrorPage() {
	const error = useRouteError();

	let title = "AN ERROR OCCURRED!";
	let message = "SOMETHING WENT WRONG!!!";

	if (error.status === 500) {
		message = error.data.message;
	}

	if (error.status === 404) {
		title = "not Found";
		message = "could not find resource or page";
	}

	return (
		<>
			<MainNavigation />

			<PageContent title={title}>
				<p>{message}</p>
			</PageContent>
		</>
	);
}

export default ErrorPage;
