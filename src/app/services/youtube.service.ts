import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,  } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  private apiKey = 'AIzaSyCfE4rmygJ9fvwYXry9vbXgjp6a5hOtQqI';
  private url= 'https://www.googleapis.com/youtube/v3';
 // private listaUploads = 'UU-2i2p_uIjREju03_cbKlaQ';
  private playListId ='UU-2i2p_uIjREju03_cbKlaQ';
  private nextPageToken;
  private fullUrl: string;

  constructor(private http: HttpClient) {

  }

  getVideosFromChannel(){

      if( this.nextPageToken ){
        this.fullUrl = `
        ${this.url}/playlistItems/?part=snippet&playlistId=
        ${this.playListId}&key=${this.apiKey}&maxResults=10&pageToken=${this.nextPageToken}`
      }else{
        this.fullUrl = `
        ${this.url}/playlistItems/?part=snippet&playlistId=
        ${this.playListId}&key=${this.apiKey}&maxResults=10`
      }

    return this.http.get(this.fullUrl)
    .pipe(
      map( data =>{

        this.nextPageToken = data['nextPageToken'];

           return data
        //this.nextPageToken = data.json().nextPageToken;
      })
    )




  }
}
