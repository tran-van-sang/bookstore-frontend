import{j as e}from"./index.02d78917.js";class t{constructor(r="/api/order"){this.api=e("https://bookstore-backend-production-eec1.up.railway.app/api/order")}async addOrder(r){return(await this.api.post("/",r)).data}async confirmOrder(r,a){return(await this.api.put(`/confirmorder/${r}`,a)).data}}const p=new t;export{p as O};
