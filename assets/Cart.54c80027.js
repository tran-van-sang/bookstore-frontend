import{_ as y,u as a,r as g,o as c,c as u,a as t,F as v,i as S,t as d,b as p,w as m,h as f,k as b,v as C,p as N,g as x}from"./index.b7353698.js";const k={data(){const e=a().infoCart.products,n=a().infoCart,i=a();return{books:e,cart:n,userStore:i}},methods:{cartToOrder(){if(!this.userStore.user)document.getElementById("Modaldangnhap").style.display="block";else{const e=JSON.stringify(this.userStore.cart.products),n=JSON.stringify(this.userStore.cart.totalPrice),i=JSON.stringify(this.userStore.user.address);this.userStore.order={products:JSON.parse(e),totalPrice:JSON.parse(n),address:JSON.parse(i)},this.$router.push({name:"order"})}},goDetailItem(e){this.$router.push({name:"book.detail",params:{id:e}})},removeCart(e){a().removeCart(e)},formatter(e){return new Intl.NumberFormat("vi-VN",{style:"currency",currency:"VND"}).format(e)}}},o=e=>(N("data-v-fb888c58"),e=e(),x(),e),q={id:"bg-white",class:"bg-white article cach radius"},w={id:"flex-donhang"},I={id:"chitiet"},O=o(()=>t("h1",null,"GI\u1ECE H\xC0NG",-1)),T={id:"details-order"},P=o(()=>t("thead",null,[t("tr",null,[t("td",null,[t("b",null,"H\xECnh SP")]),t("td",null,[t("b",null,"T\xEAn SP")]),t("td",null,[t("b",null,"S\u1ED1 L\u01B0\u1EE3ng")]),t("td",null,[t("b",null,"Gi\xE1")]),t("td",null,[t("b",null,"Th\xE0nh Ti\u1EC1n")]),t("td")])],-1)),V={id:"details-order-body"},J=["src"],B={style:{"text-align":"left"}},D={class:"quantity-product"},H=["onClick"],F=o(()=>t("button",null,[t("i",{class:"fa-solid fa-minus"})],-1)),G=[F],L=["onUpdate:modelValue"],U=["onClick"],$=o(()=>t("button",null,[t("i",{class:"fa-solid fa-plus"})],-1)),E=[$],M=["onClick"],A={id:"hoadon",class:"radius"},X=o(()=>t("h1",{class:"radius bg-white"},"H\xD3A \u0110\u01A0N",-1)),j={id:"details-order-foot"},z={class:""},K=o(()=>t("td",{class:""},"T\u1ED5ng gi\xE1 tr\u1ECB t\u1EA1m t\xEDnh: ",-1)),Q={class:"",id:"totalprice",colspan:"6"},R={id:"sm-donhang",class:""},W={colspan:"2"},Y=o(()=>t("br",null,null,-1)),Z=o(()=>t("h5",null,[t("u",null,[t("b",null,"L\u01B0u \xFD:")]),f(" Ph\u1EA3i \u0111\u0103ng nh\u1EADp t\xE0i kho\u1EA3n tr\u01B0\u1EDBc khi \u0110\u1EB7t h\xE0ng !")],-1));function tt(e,n,i,et,_,r){const h=g("router-link");return c(),u("div",q,[t("div",w,[t("div",I,[O,t("table",T,[P,t("tbody",V,[(c(!0),u(v,null,S(_.userStore.cart.products,(s,st)=>(c(),u("tr",null,[t("td",null,[p(h,{to:{name:"book.detail",params:{id:s.book_id}}},{default:m(()=>[t("img",{src:s.image,class:"round-figure"},null,8,J)]),_:2},1032,["to"])]),t("td",B,[p(h,{style:{color:"#000"},to:{name:"book.detail",params:{id:s.book_id}}},{default:m(()=>[f(d(s.title),1)]),_:2},1032,["to"])]),t("td",null,[t("div",D,[t("div",{class:"quantity-product-form",onClick:l=>s.quantity>1?s.quantity--:""},G,8,H),b(t("input",{type:"text",class:"quantity","onUpdate:modelValue":l=>s.quantity=l},null,8,L),[[C,s.quantity]]),t("div",{class:"quantity-product-form",onClick:l=>s.quantity++},E,8,U)])]),t("td",null,d(r.formatter(s.price)),1),t("td",null,d(r.formatter(s.quantity*s.price)),1),t("td",null,[t("i",{onClick:l=>r.removeCart(s.book_id),class:"fa-solid fa-trash-can"},null,8,M)])]))),256))])])]),t("div",A,[X,t("table",null,[t("tbody",j,[t("tr",z,[K,t("td",Q,d(r.formatter(_.userStore.totalPriceComputer)),1)])]),t("tfoot",null,[t("tr",R,[t("td",W,[t("input",{onClick:n[0]||(n[0]=s=>r.cartToOrder()),class:"radius",type:"submit",value:"X\xE1c Nh\u1EADn \u0110\u01A1n H\xE0ng"})])])])]),Y,Z])])])}const nt=y(k,[["render",tt],["__scopeId","data-v-fb888c58"]]);export{nt as default};
