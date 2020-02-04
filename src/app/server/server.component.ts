import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-server',
    styleUrls: ['./server.component.scss'],
    templateUrl: './server.component.html'
})

export class ServerComponent {
	@Input() serverId: any = 10;
    serverStatus: string = 'offline';

    constructor() {
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }

    getServerStatus(): string {
        return this.serverStatus;
    }

    getColor(): string {
        return this.serverStatus === 'online' ? 'green' : 'red';
    }
}
