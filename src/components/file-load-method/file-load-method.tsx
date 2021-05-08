import { Component, Host, h, Prop, FunctionalComponent } from "@stencil/core";
import { RouterHistory } from "@stencil/router";

@Component({
	tag: "file-load-method",
	styleUrl: "file-load-method.css",
	shadow: true,
})
export class FileLoadMethod {
	@Prop() history: RouterHistory;

	@Prop() onFileInput: (e: Event) => void;

	render(): FunctionalComponent {
		return (
			<Host>
				<input
					type="file"
					style={{ display: "none" }}
					id="local-file"
					name="local-file"
					onChange={this.onFileInput}
				/>

				<div class="wrapper">
					<span class="header">Load PDF file:</span>
					<label htmlFor="local-file" class="file-loader">
						<div class="icon">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 64 64"
								width="64"
								height="64"
							>
								<path d="M52 2H12a3 3 0 00-3 3v54a3 3 0 003 3h40a3 3 0 003-3V5a3 3 0 00-3-3zm1 57a1 1 0 01-1 1H12a1 1 0 01-1-1V5a1 1 0 011-1h40a1 1 0 011 1z" />
								<path d="M15 11a3 3 0 10-3-3 3 3 0 003 3zm0-4a1 1 0 11-1 1 1 1 0 011-1zM49 5a3 3 0 103 3 3 3 0 00-3-3zm0 4a1 1 0 111-1 1 1 0 01-1 1zM15 53a3 3 0 103 3 3 3 0 00-3-3zm0 4a1 1 0 111-1 1 1 0 01-1 1zM49 53a3 3 0 103 3 3 3 0 00-3-3zm0 4a1 1 0 111-1 1 1 0 01-1 1zM32 12a1 1 0 000 2 11 11 0 0111 11 1 1 0 002 0 13 13 0 00-13-13zM21 56h22V46H21zm2-8h18v6H23zM32 21a4 4 0 104 4 4 4 0 00-4-4zm0 6a2 2 0 112-2 2 2 0 01-2 2z" />
								<path d="M32 8a17 17 0 00-12 29l-4.4 2.1a1 1 0 00-.6.9v3a1 1 0 001 1h6a1 1 0 00.7-.3l3-3A16.7 16.7 0 0032 42a17 17 0 000-34zM21.6 42H17v-1.4l11.2-5.3zM32 40a14.8 14.8 0 01-4.8-.8l6.5-6.5a1 1 0 00-1.1-1.6l-10.7 5A15 15 0 1132 40z" />
							</svg>
						</div>
						<span>From local disk</span>
					</label>
					<button class="file-loader">
						<div class="icon">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 512 512"
								width="64"
								height="64"
							>
								<path d="M512 335.6c0-2-.7-3.7-1.5-5L393 127.8a7.5 7.5 0 00-13 7.6l112.1 193.3H353.6L191.2 48.5h138.4l34.3 59.3a7.5 7.5 0 1013-7.6l-35.4-61c-2-3.5-5.8-5.7-10-5.7h-151c-6.3 0-9.2 4.3-10 5.7L1.5 330.5c-2 3.5-2 8 0 11.5l37.3 64.5a7.5 7.5 0 1013-7.5l-36.3-62.7L178.2 55.9l69.1 119.5L84.8 456l-16.3-28.2a7.5 7.5 0 00-13 7.5L77.2 473c1 1.7 4.2 5.6 9.9 5.6h265a7.5 7.5 0 000-15H97.8L167 343.8h325L423 463.5h-39.2a7.5 7.5 0 000 15H425c4 0 7.9-2.2 10-5.8l75.5-130.6c1-1.8 1.5-4.5 1.5-6.5zM256 190.3l80.2 138.5H175.8z" />
							</svg>
						</div>
						<span>From Google Drive</span>
					</button>
				</div>
			</Host>
		);
	}
}
