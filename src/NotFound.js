import { Link } from "react-router-dom"

const NotFound = () => {
    return (
        <div className="not-found">
            <h2>Oops</h2>
            <p>This page doesn't exist.</p>
            <Link to="/">Back to homepage...</Link>
        </div>
    );
}
 
export default NotFound;