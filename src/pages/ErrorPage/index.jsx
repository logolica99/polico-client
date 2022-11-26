import { Link } from "react-router-dom";
export default function ErrorPage() {
  return (
    <div
      id="error-page"
      className="nav-padding margin-x"
      style={{ marginBottom: "100px" }}
    >
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <Link to="/">Go to Home</Link>
      <p>{/* <i>{error.statusText || error.message}</i> */}</p>
    </div>
  );
}
