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
								exact={true}
								routeRender={({ history }) => (
									<app-welcome history={history} />
								)}
							/>
							<stencil-route
								url="/editor"
								exact={true}
								routeRender={({ history }) => (
									<app-editor history={history} />
								)}
							/>
						</stencil-route-switch>
					</stencil-router>
				</main>
			</div>
		);
	}
}
