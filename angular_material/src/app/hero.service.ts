import { Injectable } from '@angular/core';
import {BehaviourSubject} from 'rxjs';
import { list } from './moduleku/cardlist
/card';


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  list : BehaviourSubject <list[]> =new BehaviourSubject<list[]>([]);
  list$ = this.list.asObservable();

  

  constructor(private httpClient: HttpClient) { 
    this.dummyInitlist();
  }

  dummyinitlist(){
    this.fetchlistJson().subscribe(resp => {
      let usersData = resp.users;
      this.setAlllistLists(usersData);
    })
  }


  // list = [
  //   {
  //     img: "https://img.cdnki.com/sebutkan-cabang-olahraga-bola-besar-dan-bola-kecil---37542827c848aa5c274992db303d7852.webp",
  //     Nama: "Sepak Bola",
  //     Jenis: "Permainan Bola Besar",
  //     Desc: 'Sepak bola adalah olahraga yang dimainkan secara beregu atau berkelompok. Tiap-tiap regu terdiri atas 11 pemain. Tujuan utama dari permainan sepak bola adalah memasukkan bola ke gawang lawan.',
  //     like: false
  //   }, {
  //     img: "https://img.sportstars.id//2021/08/8j3P5H/master_v7E492Qa2b_1755_manfaat_permainan_bola_besar.JPG",
  //     Nama: "Bola Voli",
  //     Jenis: "Permainan Bola Besar",
  //     Desc: 'Permainan Bola Voli adalah memainkan bola dengan cara dipantulkan dengan 1 atau 2 tangan secara bersama-sama untuk mencegah bola jatuh di daerah sendiri. Beberapa teknik dasar yang dipelajari dalam permainan bola voli adalah servis, passing, smash, dan block.',
  //     like: false
  //   }, {
  //     img: "https://img.cdnki.com/sebutkan-cabang-olahraga-bola-besar-dan-bola-kecil---38d3242e69f526f1601c7a8d37576b8c.webp",
  //     Nama: "Bola Basket",
  //     Jenis: "Permainan Bola Besar",
  //     Desc: 'Permainan Bola Basket merupakan suatu permainan beregu yang masing-masing regu terdiri dari lima orang. Teknik dasar permainan bola basket adalah melempar, menangkap, menggiring, dan menembak bola.',
  //     like: false
  //   }, {
  //     img: "https://image-cdn.medkomtek.com/eYUJdVXR8LDVo4kDi4jxS-Hrb24=/1200x675/smart/klikdokter-media-buckets/medias/2324022/original/005071600_1616578615-Jarang_Diketahui__Ini_Manfaat_Tenis_Meja_bagi_Kesehatan.jpg",
  //     Nama: "Tenis Meja",
  //     Jenis: "Permainan Bola Kecil",
  //     Desc: 'tenis meja atau biasa disebut dengan ping-pong adalah permainan yang dilaksanakan di atas meja dengan net di bagian tengah. Maksud dari permainan ini adalah mengalahkan lawan dengan cara memukul bola hingga melewati net dan bola keluar dari area meja.',
  //     like: false
  //   }, {
  //     img: "https://img.cdnki.com/sebutkan-apa-saja-cabang-olahraga-yang-masuk-dalam-permainan-bola-kecil----98c1a0a8cfb73aea29cb80242bb646e2.webp",
  //     Nama: "Bola Kasti",
  //     Jenis: "Permainan Bola Kecil",
  //     Desc: 'permainan bola kasti adalah olahraga yang berasal dari bangsa Eropa dan muncul di Indonesia saat masa penjajahan Belanda, Portugal, dan negara Eropa lainnya.',
  //     like: false
  //   }, {
  //     img: "https://ringkasanku.com/wp-content/uploads/2022/07/pexels-photo-2202685.jpeg",
  //     Nama: "Bulu Tangkis",
  //     Jenis: "Permainan Bola Kecil",
  //     Desc: 'Bulutangkis atau badminton adalah permainan yang dilakukan dengan menggunakan raket dan kok (shuttlecock).',
  //     like: false
  //   }
  // ]
}
