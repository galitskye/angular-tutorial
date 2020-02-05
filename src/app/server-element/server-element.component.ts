import { Component, Input, OnInit, ViewEncapsulation, OnChanges } from '@angular/core';

@Component({
	selector: 'app-server-element',
	templateUrl: './server-element.component.html',
	styleUrls: ['./server-element.component.scss'],
	encapsulation: ViewEncapsulation.Emulated
})

export class ServerElementComponent implements OnInit, OnChanges {
	@Input() element: {
		type: string;
		name: string;
		content: string;
	};

	constructor() {
		console.log('constructor called');
	}

	ngOnChanges() {
		console.log('ngOnChanges called');
	}

	ngOnInit() {
		console.log('ngOnInit called');
	}
}
