import{j as a}from"./index.a236a14b.js";class r{constructor(t="/api/authors"){this.api=a("https://bookstore-backend-production-eec1.up.railway.app/api/authors")}async getAllAuthors(){return(await this.api.get("/")).data}async getAnAuthor(t){return(await this.api.get(`/${t}`)).data}async addAnAuthor(t){return(await this.api.post("/",t)).data}}const s=new r;export{s as A};
