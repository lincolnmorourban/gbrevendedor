import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NewUser } from './newUser';

const API_URL = "http://localhost:3000"

@Injectable()
export class CadastroService {

    constructor(private http: HttpClient) { }

    cadastrar(newUser: NewUser) {
        return this.http.post(API_URL + '/users', newUser);
    }
}