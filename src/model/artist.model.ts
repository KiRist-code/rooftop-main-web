/*
artistName : 아티스트 이름
picture : 아티스트 프로필 사진
email : 아티스트 이메일
snsLink : sns 링크들
participateAlbum : 아티스트 개인이 참여한 앨범
*/

import { SNS } from "./sns.model";

export interface Artist {
  artistName: string;
  picture: string;
  email: string;
  snsLink: SNS;
  //   participateAlbum: Array<Album>;
}
