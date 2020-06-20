import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostPageService {
  constructor(
    // private http: HttpClient
  ) { }

  getPost(url: string) {
    return new Promise((resolve, reject) => {
      // const proxyurl = 'https://cors-anywhere.herokuapp.com/';
      fetch(url, {
        // mode: 'cors',
        // headers: {
        //   'Access-Control-Allow-Origin': '*',
        // }
      })
        .then(res => res.json())
        .then(response => {
          resolve(response);
        })
        .catch(err => {
          alert('A browser extension is blocking us, please open this url in incognito');
          reject();
        });
    });
  }
}
