import { Component, Host, h, Prop } from "@stencil/core";
import { RouterHistory } from "@stencil/router";

@Component({
	tag: "app-editor",
	styleUrl: "app-editor.css",
	shadow: true,
})
export class AppEditor {
	@Prop() fileSource: Uint8Array;
	@Prop() history: RouterHistory;

	render() {
		console.log(
			"File source:",
			this.history.location.state.fileSource as Uint8Array,
		);
		return (
			<Host>
				<slot></slot>
			</Host>
		);
	}
}
