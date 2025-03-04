/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"

const Error = ({ error }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold">Error</h1>
        {error ? (
          <p className="text-2xl">{error.message}</p>
        ) : (
          <p className="text-2xl">Page Not Found</p>
        )}
        <Link to="/" className="text-blue-500">Go to Home</Link>
    </div>
  )
}
export default Error