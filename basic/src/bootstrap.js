import debug from 'debug';
window.debug = debug;

import App from './app';

window.onload = function() {
	App.load().then(() => {
		window.app = new App();
	});
};
