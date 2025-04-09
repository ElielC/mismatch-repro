import { createFileRoute, Link } from "@tanstack/react-router"

export const Route = createFileRoute("/")({
	component: Home
})

function Home() {
	return (
		<div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 text-white">
			<h1 className="mb-6 text-4xl font-bold">Repro</h1>

			<Link
				to="/teste"
				className="rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 shadow-md transition hover:bg-gray-100"
			>
				Start Creating a Mini
			</Link>
		</div>
	)
}
