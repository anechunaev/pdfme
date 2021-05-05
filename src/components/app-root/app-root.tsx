import { Component, h, State } from "@stencil/core";

@Component({
	tag: "app-root",
	styleUrl: "app-root.css",
	shadow: true,
})
export class AppRoot {
	@State() isValid = true;
	@State() fileSource: Uint8Array | null = null;
	private isFileWithWrongExtension = false;
	private isFileTooBig = false;

	private onFileInput = (event: InputEvent) => {
		const file = (event.target as any).files[0];

		if (file.type !== "application/pdf") {
			this.isFileWithWrongExtension = true;
		}

		if (file.size / 1024 / 1024 > 100) {
			// file is bigger then 100 Mb
			this.isFileTooBig = true;
		}

		if (this.isFileTooBig || this.isFileWithWrongExtension) {
			return (this.isValid = false);
		}

		const fileReader = new FileReader();
		fileReader.onload = () => {
			this.fileSource = new Uint8Array(fileReader.result as ArrayBuffer);
		};
		fileReader.readAsArrayBuffer(file);
	};

	render() {
		return (
			<div>
				<header>
					<h1>PDFme</h1>
				</header>

				<main>
					{this.fileSource ? (
						<app-editor source={this.fileSource} />
					) : (
						<file-load-method onFileInput={this.onFileInput} />
					)}
				</main>
			</div>
		);
	}
}
