import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/_authed")({
	beforeLoad: ({ context }) => {
		console.log("beforeLoad", context)
		if (!context.subject) {
			throw new Error("Not authenticated")
		}
	},
	errorComponent: ({ error }) => {

		if (error.message === "Not authenticated") {
			return (
				<div className="flex items-center justify-center p-12">
					<button
						onClick={() => {
						}}
						className="rounded bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700"
					>
						Login
					</button>
				</div>
			)
		}

		throw error
	}
})
