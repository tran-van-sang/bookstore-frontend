import{j as t}from"./index.94399bba.js";class e{constructor(r="/api/order"){this.api=t(r)}async addOrder(r){return(await this.api.post("/",r)).data}async confirmOrder(r,a){return(await this.api.put(`/confirmorder/${r}`,a)).data}}const c=new e;export{c as O};
