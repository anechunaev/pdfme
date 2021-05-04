import { Component, Host, h } from "@stencil/core";

@Component({
	tag: "app-welcome",
	styleUrl: "app-welcome.css",
	shadow: true,
})
export class AppWelcome {
	render() {
		return (
			<Host>
				<stencil-route-link url="/editor">
					<button>Profile page</button>
				</stencil-route-link>
			</Host>
		);
	}
}
