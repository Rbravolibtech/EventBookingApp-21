import { Link } from "react-router-dom";

import classes from "./EventItem.module.css";

function EventItem({ event }) {
	function startDeleteHandler() {
		// ...
	}

	return (
		<article className={classes.event}>
			<img src={event.image} alt={event.title} />
			<h1>{event.title}</h1>
			<time>{event.date}</time>
			<p>{event.description}</p>
			<menu className={classes.actions}>
				<Link to="edit">EDIT</Link>
				<button onClick={startDeleteHandler}>DELETE</button>
			</menu>
		</article>
	);
}

export default EventItem;
