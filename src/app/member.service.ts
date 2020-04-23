import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 
@Injectable({
  providedIn: 'root'
})
export class MemberService {
 
  uri = 'https://json-server-elastics.herokuapp.com/members';
 
  constructor(private http: HttpClient) { }
 
  addMember(name, bio, age) {
    const obj = {
      name,
      bio,
      age
    };
    console.log(obj);
    this.http.post(`${this.uri}`, obj)
      .subscribe(res => console.log('Done'));
  }
 
  getMembers() {
    return this
      .http
      .get(`${this.uri}`);
  }
 
  editMember(id) {
    return this
      .http
      .get(`${this.uri}/${id}`);
  }
 
  updateMember(name, bio, age, id) {
    const obj = {
      name,
      bio,
      age
    };
    this
      .http
      .put(`${this.uri}/${id}`, obj)
      .subscribe(res => console.log('Done'));
  }
 
  deleteMember(id) {
    return this
      .http
      .delete(`${this.uri}/${id}`);
  }
}