import { Component, h } from "@stencil/core";

@Component({
	tag: "app-root",
	styleUrl: "app-root.css",
	shadow: true,
})
export class AppRoot {
	render() {
		return (
			<div>
				<header>
					<h1>PDFme</h1>
				</header>

				<main>
					<stencil-router>
						<stencil-route-switch scrollTopOffset={0}>
							<stencil-route
								url="/"
								component="app-welcome"
								exact={true}
							/>
							<stencil-route
								url="/editor"
								component="app-editor"
							/>
						</stencil-route-switch>
					</stencil-router>
				</main>
			</div>
		);
	}
}
