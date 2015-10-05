import Debug from 'debug';
let debug = Debug('app');

import co from 'co';
import Emitter from 'emitter';

export default class App {
	static load() {
		return Promise.all([
			
		]);
	}
	
	constructor(config) {
		let emitter = new Emitter();
		
		emitter.on('foo').then(function* () {
			yield new Promise((resolve) => {
				debug('foo', 1);
				
				setTimeout(() => {
					debug('foo', 1, 'done');
					resolve();
				}, 1000);
			});
		});
		
		emitter.on('bar').then(function* () {
			yield new Promise((resolve) => {
				debug('bar');
				
				setTimeout(() => {
					debug('bar', 'done');
					resolve();
				}, 1000);
			});
		});
		
		emitter.on('foo', function* () {
			debug('foo', 2);
		});
		
		emitter.on('foo', () => {
			debug('foo', 3);
		});
		
		debug('start');
		
		co(function* () {
			yield emitter.emit('foo');
			yield emitter.emit('bar');
			
			yield new Promise((resolve) => {
				setTimeout(() => {
					resolve();
				}, 1000);
			})
		}).then(() => {
			debug('done');
		});
	}
}
