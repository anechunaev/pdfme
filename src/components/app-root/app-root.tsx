import { Component, FunctionalComponent, h, State } from "@stencil/core";

@Component({
	tag: "app-root",
	styleUrl: "app-root.less",
	shadow: true,
})
export class AppRoot {
	@State() result: Uint8Array | null = null;
	private latestExtension = "";
	private latestFileSize = 0;
	@State() isFileWithWrongExtension = false;
	@State() isFileTooBig = false;

	private onFileInput = (event: InputEvent) => {
		const file = (event.target as any).files[0] as File;
		this.result = null;
		this.isFileWithWrongExtension = false;
		this.isFileTooBig = false;

		if (file.type !== "application/pdf") {
			this.latestExtension = file.type || file.name.split(".").pop();
			this.isFileWithWrongExtension = true;
		}

		if (file.size / 1024 / 1024 > 100) {
			// file is bigger then 100 Mb
			this.latestFileSize = file.size / 1024 / 1024;
			this.isFileTooBig = true;
		}

		if (this.isFileTooBig || this.isFileWithWrongExtension) {
			return (this.result = null);
		}

		const fileReader = new FileReader();
		fileReader.onload = () => {
			this.result = new Uint8Array(fileReader.result as ArrayBuffer);
		};
		fileReader.readAsArrayBuffer(file);
	};

	render(): FunctionalComponent {
		return (
			<div>
				<header>
					<div class="container">
						<h1>PDF me</h1>
					</div>
				</header>

				<main class="container">
					{!this.result && this.isFileTooBig && (
						<div class="alert box" role="alert">
							<strong>Could not upload file.</strong>
							<p>
								File is too big. Limit is 100 Mb, but the file
								is {this.latestFileSize} Mb.
							</p>
						</div>
					)}

					{!this.result && this.isFileWithWrongExtension && (
						<div class="alert box" role="alert">
							<strong>Could not upload file.</strong>
							<p>
								File should be in PDF format, but got "
								{this.latestExtension}" instead.
							</p>
						</div>
					)}

					{this.result ? (
						<app-editor source={this.result} class="box" />
					) : (
						<file-load-method
							onFileInput={this.onFileInput}
							class="box"
						/>
					)}
				</main>
			</div>
		);
	}
}
