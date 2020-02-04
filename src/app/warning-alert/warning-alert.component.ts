import { Component } from '@angular/core';

@Component({
	selector: 'app-warning-alert',
	template: `
		<p>This a warning, you are in danger</p>
	`,
	styles: [`
		p {
			padding: 1rem;
			background-color: yellow;
		}
	`]
})
export class WarningAlertComponent {

}
