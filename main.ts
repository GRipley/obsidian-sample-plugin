import {Notice, Plugin} from 'obsidian';

// Remember to rename these classes and interfaces!

interface HelloWorldPluginSettings {
	mySetting: string;
}

const DEFAULT_SETTINGS: HelloWorldPluginSettings = {
	mySetting: 'default'
}

export default class HelloWorldPlugin extends Plugin {
	settings: HelloWorldPluginSettings;

	async onload() {
		console.log('Loading HelloWorldPlugin');
		this.addRibbonIcon('dice', 'Greet', () => {
			new Notice('Hello, world!');
		  });
	}

	async onunload() {
		console.log('Unloading HelloWorldPlugin');
	}}