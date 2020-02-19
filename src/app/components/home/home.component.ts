import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../../services/youtube.service';
import { YoutubePipe } from '../../pipes/youtube-pipe';

// import * as $ from 'jquery';

declare var $:any;


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  videos: any = [];
  nexPageToken:string = '';
  videoSel: any;
  idVideoSel: string ='';

  constructor( private yts: YoutubeService) { }

  ngOnInit() {
    this.yts.getVideosFromChannel().subscribe( lista =>{

      this.videos = lista['items'];
     // console.log(this.videos);
      this.nexPageToken = lista['nextPageToken'];
    })


  }


  verVideo( video:any ){
console.log(video);
    this.videoSel = video['snippet'];
    this.idVideoSel = video['snippet']['resourceId'].videoId;
    $('#myModal').modal();

  }

  fecharModal(){
    this.idVideoSel = '';
    $('#myModal').modal('hide');
  }

  carregarMais(){
    this.yts.getVideosFromChannel().subscribe( lista =>{

      this.videos.push.apply(this.videos, lista['items']);
     console.log(this.videos);
      this.nexPageToken = lista['nextPageToken'];
    })

  }
}

// https://www.googleapis.com/youtube/v3/playlistItems/?part=snippet&playlistId=%20%20%20%20%20%20%20%20UU-2i2p_uIjREju03_cbKlaQ&key=AIzaSyCfE4rmygJ9fvwYXry9vbXgjp6a5hOtQqI&maxResults=10%20%20%20%20%20%20%20%20&pageToken=CAoQAA
