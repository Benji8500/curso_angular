(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{X3zk:function(n,t,e){"use strict";e.r(t),e.d(t,"LoginModule",(function(){return f}));var o=e("ofXK"),r=e("tyNb"),c=e("fXoL"),i=e("3Pt+");function s(n,t){1&n&&(c.Rb(0,"div"),c.Bc(1," Name is required "),c.Qb())}function a(n,t){1&n&&(c.Rb(0,"div"),c.Bc(1," Name must be at least 4 characters "),c.Qb())}function u(n,t){1&n&&(c.Rb(0,"div"),c.Bc(1," Name must be at least 5 characters long\n"),c.Qb())}function l(n,t){if(1&n&&(c.Rb(0,"div",10),c.zc(1,s,2,0,"div",11),c.zc(2,a,2,0,"div",11),c.zc(3,u,2,0,"div",11),c.Qb()),2&n){c.ec();const n=c.qc(14);c.zb(1),c.jc("ngIf",n.errors.required),c.zb(1),c.jc("ngIf",n.errors.minlength),c.zb(1),c.jc("ngIf",n.errors.maxlength)}}const b=[{path:"",component:(()=>{class n{constructor(n){this.router=n,this.username="",this.password="",this.sw=!0}ngOnInit(){}onLogin(){console.log("username: ",this.username),console.log("password: ",this.password)}onLogin2(n){console.log("Variable local form: ",n.value),this.router.navigate(["/pages"])}}return n.\u0275fac=function(t){return new(t||n)(c.Mb(r.a))},n.\u0275cmp=c.Gb({type:n,selectors:[["app-login"]],decls:16,vars:1,consts:[[2,"display","flex","flex-direction","column"],[3,"ngSubmit"],["formulario","ngForm"],["type","text","name","username","id","username","ngModel",""],["type","password","name","password","id","password","ngModel",""],["type","submit"],[3,"click"],["type","text","required","","minlength","3","maxlength","5","ngModel","",1,"form-control"],["name","ngModel"],["class","alert alert-danger",4,"ngIf"],[1,"alert","alert-danger"],[4,"ngIf"]],template:function(n,t){if(1&n){const n=c.Sb();c.Rb(0,"p"),c.Bc(1,"Login works!"),c.Qb(),c.Rb(2,"div",0),c.Rb(3,"form",1,2),c.cc("ngSubmit",(function(){c.rc(n);const e=c.qc(4);return t.onLogin2(e)})),c.Nb(5,"input",3),c.Nb(6,"input",4),c.Rb(7,"button",5),c.Bc(8,"ENVIAR"),c.Qb(),c.Qb(),c.Qb(),c.Rb(9,"button",6),c.cc("click",(function(){return t.onLogin()})),c.Bc(10,"LOGIN"),c.Qb(),c.Rb(11,"button",6),c.cc("click",(function(){c.rc(n);const e=c.qc(4);return t.onLogin2(e)})),c.Bc(12,"LOGIN@"),c.Qb(),c.Nb(13,"input",7,8),c.zc(15,l,4,3,"div",9)}if(2&n){const n=c.qc(14);c.zb(15),c.jc("ngIf",n.invalid&&(n.touched||n.dirty))}},directives:[i.s,i.k,i.l,i.a,i.j,i.m,i.p,i.g,i.f,o.j],styles:[""]}),n})()}];let d=(()=>{class n{}return n.\u0275mod=c.Kb({type:n}),n.\u0275inj=c.Jb({factory:function(t){return new(t||n)},imports:[[r.d.forChild(b)],r.d]}),n})(),f=(()=>{class n{}return n.\u0275mod=c.Kb({type:n}),n.\u0275inj=c.Jb({factory:function(t){return new(t||n)},imports:[[o.b,d,i.e,i.o]]}),n})()}}]);