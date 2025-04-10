import type { ReactNode } from "react"
import type { QueryClient } from "@tanstack/react-query"
import {
	createRootRouteWithContext,
	HeadContent,
	Outlet,
	Scripts
} from "@tanstack/react-router"

import appCss from "../styles/app.css?url"

export const Route = createRootRouteWithContext<{
	queryClient: QueryClient
}>()({
	head: () => ({
		meta: [
			{
				charSet: "utf-8"
			},
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{
				title: "Repro"
			}
		],
		links: [{ rel: "stylesheet", href: appCss }]
	}),
	beforeLoad: async () => {
		return {
			subject: false
		}
	},
	component: RootComponent
})

function RootComponent() {
	return (
		<RootDocument>
			<Outlet />
		</RootDocument>
	)
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
	return (
		<html>
			<head>
				<HeadContent />
			</head>
			<body>
				{children}
				<Scripts />
			</body>
		</html>
	)
}
