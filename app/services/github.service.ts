import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
    private username = 'Diegow3b';
    private client_id = 'b5ad8895794ad0fdcd1d';
    private client_secret = '67cf1aa1c6bfad947f00993f9637785de5b91962';

    constructor(private _http:Http) {
        console.log('Github Service Init...');
    }

    getUser(){
    return this._http.get('https://api.github.com/users/'+this.username)
        .map(res => res.json());
    }

    getRepos(){
    return this._http.get('https://api.github.com/users/'+this.username+'/repos')
        .map(res => res.json());
    }

    updateUsername(username:string){
        this.username = username
    }
}
