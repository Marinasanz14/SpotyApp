import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


import { map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient) { 
    console.log('Spotify Service Listo');
  }

  getQuery( query: string ) {
    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDwiKN_Zu10FQWaZBGfM8q9bS-TS_v_8tmZuZ4s4QIVkHlHOyBPgL1dFZetVk9ZoqS-NBbBeUJlMWGcRVfxYGJGbRVvddK9jugj3B8OskGdrvF41uAHM2bPdxMed5Pn3EQYY865Zkv4ljZI'
    });

    return this.http.get(url, { headers });


  }

  getNewReleases() {


    return this.getQuery('browse/new-releases')
              .pipe( map( data => data['albums'].items));
  }            


  getArtista(termino: string) {

    return this.getQuery(`search?query=${ termino }&type=artist&offset=0&limit=15`)
              .pipe( map( data => data['artists'].items));
  }
}
