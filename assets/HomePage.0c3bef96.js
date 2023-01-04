import{P as u}from"./ProductCarousel.2a446b49.js";import{B as h}from"./book.service.6e37a3b0.js";import{_ as p,r as b,o,c as m,a,b as r,w as n,d,e as l,F as g,f as _,p as v,g as k,h as s}from"./index.e7813fbd.js";const y="/bookstore-frontend/img/quangcao/qc1.jpg",f="/bookstore-frontend/img/quangcao/qc2.jpg",S="/bookstore-frontend/img/quangcao/qc3.jpg",x="/bookstore-frontend/img/quangcao/qc4.jpg",q="/bookstore-frontend/img/quangcao/qc5.jpg",N="/bookstore-frontend/img/sanpham/sach-giao-khoa.png",w="/bookstore-frontend/img/sanpham/thieu-nhi.png",I="/bookstore-frontend/img/sanpham/tam-ly-ky-nang.png";const B={components:{ProductCarousel:u},data(){return{books:{},category:[]}},methods:{async retrieveBooks(){try{this.books=await h.getDataHome()}catch(t){console.log(t)}}},mounted(){this.retrieveBooks()}},e=t=>(v("data-v-10b596b2"),t=t(),k(),t),K=_('<div class="qc cach radius" data-v-10b596b2><div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true" data-v-10b596b2><div class="carousel-indicators" data-v-10b596b2><button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1" data-v-10b596b2></button><button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2" data-v-10b596b2></button><button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3" data-v-10b596b2></button></div><div class="carousel-inner" data-v-10b596b2><div class="carousel-item active" data-v-10b596b2><img src="'+y+'" class="d-block w-100" data-v-10b596b2></div><div class="carousel-item" data-v-10b596b2><img src="'+f+'" class="d-block w-100" data-v-10b596b2></div><div class="carousel-item" data-v-10b596b2><img src="'+S+'" class="d-block w-100" data-v-10b596b2></div></div><button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev" data-v-10b596b2><span class="carousel-control-prev-icon" aria-hidden="true" data-v-10b596b2></span><span class="visually-hidden" data-v-10b596b2>Previous</span></button><button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next" data-v-10b596b2><span class="carousel-control-next-icon" aria-hidden="true" data-v-10b596b2></span><span class="visually-hidden" data-v-10b596b2>Next</span></button></div><img class="h1" src="'+x+'" alt="" data-v-10b596b2><img class="h2" src="'+q+'" alt="" data-v-10b596b2></div>',1),E={class:"box bg-white radius cach"},P=e(()=>a("h2",{class:""},[a("i",{class:"fas fa-th-list"}),s(" Danh m\u1EE5c s\u1EA3n ph\u1EA9m")],-1)),C=e(()=>a("div",{class:"bg-white giaokhoa"},[a("img",{src:N,alt:""}),s("S\xE1ch gi\xE1o khoa")],-1)),T=e(()=>a("div",{class:"bg-white thieunhi"},[a("img",{src:w,alt:""}),s("Thi\u1EBFu nhi")],-1)),j=e(()=>a("div",{class:"bg-white kinang"},[a("img",{src:I,alt:""}),s("K\u1EF9 n\u0103ng")],-1));function V(t,$,G,H,D,F){const c=b("router-link"),i=b("ProductCarousel");return o(),m(g,null,[K,a("div",E,[P,r(c,{to:{name:"book.list",query:{category:"S\xE1ch Gi\xE1o Khoa - Tham Kh\u1EA3o"}}},{default:n(()=>[C]),_:1},8,["to"]),r(c,{to:{name:"book.list",query:{category:"S\xE1ch Thi\u1EBFu Nhi"}}},{default:n(()=>[T]),_:1},8,["to"]),r(c,{to:{name:"book.list",query:{category:"S\xE1ch K\u0129 N\u0103ng"}}},{default:n(()=>[j]),_:1},8,["to"])]),this.books.sachGiaoKhoa?(o(),d(i,{key:0,loaiSach:this.books.sachGiaoKhoa,id:"1"},null,8,["loaiSach"])):l("",!0),this.books.sachThieuNhi?(o(),d(i,{key:1,loaiSach:this.books.sachThieuNhi,id:"2"},null,8,["loaiSach"])):l("",!0),this.books.sachKyNang?(o(),d(i,{key:2,loaiSach:this.books.sachKyNang,id:"3"},null,8,["loaiSach"])):l("",!0)],64)}const L=p(B,[["render",V],["__scopeId","data-v-10b596b2"]]);export{L as default};
