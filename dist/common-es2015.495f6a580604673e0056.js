(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{mB2O:function(t,r,s){"use strict";s.d(r,"a",(function(){return e}));var u=s("AytR"),o=s("fXoL"),n=s("tk/3");let e=(()=>{class t{constructor(t){this.http=t,this.url=u.a.app.apiBaseUrl}getProducts(t){return this.http.get(`${this.url}/products.json?auth=${t}`)}addProducts(t){return this.http.post(this.url+"/products.json",t)}deleteProducts(t){return this.http.delete(`${this.url}/products/${t}.json`)}updateProducts(t,r){return this.http.put(`${this.url}/${t}.json`,r)}}return t.\u0275fac=function(r){return new(r||t)(o.Sb(n.b))},t.\u0275prov=o.Fb({token:t,factory:t.\u0275fac}),t})()}}]);