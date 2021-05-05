import { Component, Host, h, Prop, FunctionalComponent } from "@stencil/core";

@Component({
	tag: "app-editor",
	styleUrl: "app-editor.css",
	shadow: true,
})
export class AppEditor {
	@Prop() source: Uint8Array;

	render(): FunctionalComponent {
		console.log("File source:", this.source);
		return (
			<Host>
				<slot></slot>
			</Host>
		);
	}
}
