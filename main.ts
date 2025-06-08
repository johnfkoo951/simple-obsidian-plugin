import { App, Editor, MarkdownView, Modal, Notice, Plugin, PluginSettingTab, Setting } from 'obsidian';

interface SimplePluginSettings {
	mySetting: string;
}

const DEFAULT_SETTINGS: SimplePluginSettings = {
	mySetting: 'default'
}

export default class SimplePlugin extends Plugin {
	settings: SimplePluginSettings;

	async onload() {
		await this.loadSettings();

		this.addRibbonIcon('dice', 'Simple Plugin', (evt: MouseEvent) => {
			new Notice('Hello from Simple Plugin!');
		});

		this.addCommand({
			id: 'open-sample-modal-simple',
			name: 'Open sample modal',
			callback: () => {
				new SampleModal(this.app).open();
			}
		});

		this.addCommand({
			id: 'sample-editor-command',
			name: 'Sample editor command',
			editorCallback: (editor: Editor, view: MarkdownView) => {
				const selection = editor.getSelection();
				if (selection) {
					editor.replaceSelection(`**${selection}**`);
				} else {
					editor.replaceRange('**Bold text**', editor.getCursor());
				}
			}
		});

		this.addSettingTab(new SampleSettingTab(this.app, this));

		this.registerDomEvent(document, 'click', (evt: MouseEvent) => {
			console.log('click', evt);
		});

		this.registerInterval(window.setInterval(() => console.log('setInterval'), 5 * 60 * 1000));
	}

	onunload() {

	}

	async loadSettings() {
		this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
	}

	async saveSettings() {
		await this.saveData(this.settings);
	}
}

class SampleModal extends Modal {
	constructor(app: App) {
		super(app);
	}

	onOpen() {
		const {contentEl} = this;
		contentEl.setText('Woah! This is a simple modal!');
		contentEl.createEl('h1', {text: 'Simple Plugin Modal'});
		contentEl.createEl('p', {text: 'This is a simple modal created by our plugin.'});
		contentEl.createEl('button', {text: 'Close', cls: 'mod-cta'}, (button) => {
			button.addEventListener('click', () => {
				this.close();
			});
		});
	}

	onClose() {
		const {contentEl} = this;
		contentEl.empty();
	}
}

class SampleSettingTab extends PluginSettingTab {
	plugin: SimplePlugin;

	constructor(app: App, plugin: SimplePlugin) {
		super(app, plugin);
		this.plugin = plugin;
	}

	display(): void {
		const {containerEl} = this;

		containerEl.empty();

		containerEl.createEl('h2', {text: 'Settings for Simple Plugin'});

		new Setting(containerEl)
			.setName('Setting #1')
			.setDesc('This is an example setting')
			.addText(text => text
				.setPlaceholder('Enter your setting')
				.setValue(this.plugin.settings.mySetting)
				.onChange(async (value) => {
					this.plugin.settings.mySetting = value;
					await this.plugin.saveSettings();
				}));
	}
}