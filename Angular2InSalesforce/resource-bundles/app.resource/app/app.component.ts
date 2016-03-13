import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';
import {Account} from './account'
import {SFRemoteService} from './sfremote.service'
@Component({
    selector: 'my-app',
    template: `	
    			<div class="jumbotron">
    				<center><h2>Angular 2 in Salesforce</h2></center>
    				<div class="panel panel-default">
					  <div class="panel-heading">
					    <h3 class="panel-title">{{status}}</h3>
					  </div>
					  <div class="panel-body">
					    <ul class="accounts list-group">
						  <li class="list-group-item" *ngFor="#account of accounts" >
						    	<span>{{account.Name}}</span>
						  </li>
						</ul>
					  </div>
					</div>					
				</div>
	`,
	providers: [SFRemoteService]
})
export class AppComponent implements OnInit {
	public accounts: Account[];
	public status: string = 'AppInit';
	constructor(private _sfRemoteService: SFRemoteService) {

	}

	ngOnInit() {				
		this.status = 'NgOnInit';
		this._sfRemoteService.remote({ "controller": "SFRemoteController", "method": "getRecords", "methodInput": { "soql": "Select Id, Name From Account " } }).then(result => { 
			this.accounts = (<Account[]>result);
			this.status = 'Accounts from SFDC';
		}); 
	}
}
