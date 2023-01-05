import{P as _}from"./ProductCarousel.44386615.js";import{b as p}from"./bootstrap.82b09eed.js";import{u as b,_ as g,r as c,o as r,c as m,a as t,t as n,b as v,w as k,k as y,v as f,h as u,d as w,e as h,p as B,g as C}from"./index.d2f3f473.js";import{B as d}from"./book.service.890602b1.js";const T={components:{ProductCarousel:_},setup(){return{userStore:b()}},props:{id:{type:String,required:!0}},watch:{id(){this.getABook()}},data(){return{book:{},suggestBooks:[],message:"",numberProduct:1}},methods:{async retrieveSuggestBooks(){console.log("retrieveSuggestBooks");try{this.books=await d.getData(this.$route.fullPath.slice(9))}catch(s){console.log(s)}},async getABook(){try{this.book=await d.get(this.id),this.book&&(this.suggestBooks=await d.getDataSuggest(this.book.category[0],this.book._id))}catch(s){this.$router.push({name:"notfound",params:{pathMatch:this.$route.path.split("/").slice(1)},query:this.$route.query,hash:this.$route.hash}),console.log(s)}},formatter(s){return new Intl.NumberFormat("vi-VN",{style:"currency",currency:"VND"}).format(s)},openCity(s,e){var i,l,a;for(l=document.getElementsByClassName("tabcontent"),i=0;i<l.length;i++)l[i].style.display="none";for(i=0;i<l.length;i++)l[i].classList.toggle("active");for(a=document.getElementsByClassName("tablinks"),i=0;i<a.length;i++)a[i].classList.toggle("active");document.getElementById(e).style.display="block"},showNotify(){const s=document.getElementById("liveToast");new p.Toast(s).show()},addToCart(){this.userStore.addToCart({book_id:this.book._id,quantity:parseInt(this.numberProduct),price:this.book.price,title:this.book.title,image:this.book.image[0]}),this.showNotify()}},created(){this.getABook(),this.message=""}};const o=s=>(B("data-v-fef78c0d"),s=s(),C(),s),N={key:0,class:"container-fluid"},S={class:"box radius bg-white"},P={class:"row"},I={class:"col-5"},q=["src"],$={class:"col-7"},D={class:"row"},V={class:"title"},E={class:"row"},H={class:"col"},A={class:"row"},L=o(()=>t("span",{class:"key"}," Nh\xE0 cung c\u1EA5p: ",-1)),M={class:"value"},U={class:"row"},G=o(()=>t("span",{class:"key"}," Nh\xE0 xu\u1EA5t b\u1EA3n: ",-1)),X={class:"value"},F={class:"col"},O={class:"row"},R=o(()=>t("span",{class:"key"}," T\xE1c gi\u1EA3: ",-1)),j={class:"value"},z={class:"row"},J=o(()=>t("span",{class:"key"}," N\u0103m xu\u1EA5t b\u1EA3n: ",-1)),K={class:"value"},Q={class:"row"},W={class:"price"},Y=o(()=>t("div",{class:"row"},[t("p",null," Ch\xEDnh s\xE1ch \u0111\u1ED5i tr\u1EA3 \u0110\u1ED5i tr\u1EA3 s\u1EA3n ph\u1EA9m trong 30 ng\xE0y")],-1)),Z={class:"row"},x={class:"quantity-product"},tt=o(()=>t("label",{for:"quantity"},"S\u1ED1 l\u01B0\u1EE3ng:",-1)),st=o(()=>t("button",null,[t("i",{class:"fa-solid fa-minus"})],-1)),ot=[st],et=o(()=>t("button",null,[t("i",{class:"fa-solid fa-plus"})],-1)),it=[et],nt={class:"row"},at=o(()=>t("i",{class:"fa-solid fa-cart-shopping f-icon"},null,-1)),lt=o(()=>t("div",{class:"toast-container position-fixed bottom-0 end-0 p-3"},[t("div",{id:"liveToast",class:"toast align-items-center border-1",role:"alert","aria-live":"assertive","aria-atomic":"true"},[t("div",{class:"d-flex"},[t("div",{class:"toast-body notify-success"}," Th\xEAm v\xE0o gi\u1ECF h\xE0ng th\xE0nh c\xF4ng ! "),t("button",{type:"button",class:"btn-close btn-close-white me-2 m-auto","data-bs-dismiss":"toast","aria-label":"Close"})])])],-1)),dt={class:"box radius bg-white"},ct={class:"row"},rt={class:"col"},ut={class:"tab"},ht={id:"infoBook",class:"tabcontent active",style:{display:"block"}},_t={class:"table table-striped"},pt=o(()=>t("td",null,"TH\u1EC2 LO\u1EA0I: ",-1)),bt={class:"striped"},gt=o(()=>t("td",null,"T\xC1C GI\u1EA2:",-1)),mt=o(()=>t("td",null,"N\u0102M XU\u1EA4T B\u1EA2N: ",-1)),vt={class:"striped"},kt=o(()=>t("td",null,"S\u1ED0 TRANG: ",-1)),yt=o(()=>t("td",null,"NH\xC0 XU\u1EA4T B\u1EA2N: ",-1)),ft={class:"striped"},wt=o(()=>t("td",null,"NH\xC0 PH\xC1T H\xC0NH: ",-1)),Bt={id:"detailInfo",class:"tabcontent",style:{"min-height":"243px"}};function Ct(s,e){const i=c("router-link"),l=c("ProductCarousel");return s.book.image?(r(),m("div",N,[t("div",S,[t("div",P,[t("div",I,[t("img",{src:s.book.image[0],class:"image",alt:""},null,8,q)]),t("div",$,[t("div",D,[t("h3",V,n(s.book.title),1)]),t("div",E,[t("div",H,[t("div",A,[L,t("span",M,n(s.book.supplier),1)]),t("div",U,[G,t("span",X,n(s.book.publishing_house),1)])]),t("div",F,[t("div",O,[R,t("span",j,[v(i,{to:{name:"author.detail",query:{id:s.book.author._id}}},{default:k(()=>[u(n(s.book.author.full_name),1)]),_:1},8,["to"])])]),t("div",z,[J,t("span",K,n(s.book.publishing_year),1)])])]),t("div",Q,[t("p",W,n(s.formatter(s.book.price)),1)]),Y,t("div",Z,[t("div",x,[tt,t("div",{class:"quantity-product-form",onClick:e[0]||(e[0]=a=>s.numberProduct>1?s.numberProduct--:1)},ot),y(t("input",{type:"text",id:"quantity","onUpdate:modelValue":e[1]||(e[1]=a=>s.numberProduct=a),min:"1"},null,512),[[f,s.numberProduct]]),t("div",{class:"quantity-product-form",onClick:e[2]||(e[2]=a=>s.numberProduct++)},it)])]),t("div",nt,[t("button",{class:"addToCart",value:"Th\xEAm v\xE0o gi\u1ECF h\xE0ng",onClick:e[3]||(e[3]=a=>s.addToCart())},[at,u(" Th\xEAm v\xE0o gi\u1ECF h\xE0ng ")])]),lt])])]),t("div",dt,[t("div",ct,[t("div",rt,[t("div",ut,[t("button",{class:"tablinks active",onClick:e[4]||(e[4]=a=>s.openCity(a,"infoBook"))},"Th\xF4ng tin chi ti\u1EBFt"),t("button",{class:"tablinks",onClick:e[5]||(e[5]=a=>s.openCity(a,"detailInfo"))},"M\xF4 t\u1EA3 s\u1EA3n ph\u1EA9m")]),t("div",ht,[t("div",null,[t("table",_t,[t("tbody",null,[t("tr",null,[pt,t("td",null,n(s.book.category[0]),1)]),t("tr",bt,[gt,t("td",null,n(s.book.author.full_name),1)]),t("tr",null,[mt,t("td",null,n(s.book.publishing_year),1)]),t("tr",vt,[kt,t("td",null,n(s.book.num_pages),1)]),t("tr",null,[yt,t("td",null,n(s.book.publishing_house),1)]),t("tr",ft,[wt,t("td",null,n(s.book.supplier),1)])])])])]),t("div",Bt,[t("p",null,n(s.book.desc),1)])])])]),this.suggestBooks?(r(),w(l,{key:0,loaiSach:this.suggestBooks,title:"C\xF3 Th\u1EC3 B\u1EA1n C\u0169ng Th\xEDch",id:"1"},null,8,["loaiSach"])):h("",!0)])):h("",!0)}const It=g(T,[["render",Ct],["__scopeId","data-v-fef78c0d"]]);export{It as default};
