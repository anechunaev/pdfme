import { Component, Host, h, Prop } from "@stencil/core";
import { RouterHistory } from "@stencil/router";

@Component({
	tag: "app-welcome",
	styleUrl: "app-welcome.css",
	shadow: true,
})
export class AppWelcome {
	@Prop() history: RouterHistory;

	render() {
		return (
			<Host>
				<stencil-route-link url="/editor">
					<button>Editor page</button>
				</stencil-route-link>

				<br />
				<br />
				<br />

				<file-load-method history={this.history} />
			</Host>
		);
	}
}
