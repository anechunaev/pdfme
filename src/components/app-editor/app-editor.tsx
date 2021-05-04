import { Component, Host, h } from "@stencil/core";

@Component({
	tag: "app-editor",
	styleUrl: "app-editor.css",
	shadow: true,
})
export class AppEditor {
	render() {
		return (
			<Host>
				<slot></slot>
			</Host>
		);
	}
}
