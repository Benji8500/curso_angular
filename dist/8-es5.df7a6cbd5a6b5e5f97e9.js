!function(){function e(t,n){return(e=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(t,n)}function t(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,a=i(e);if(t){var o=i(this).constructor;r=Reflect.construct(a,arguments,o)}else r=a.apply(this,arguments);return n(this,r)}}function n(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function o(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{X3zk:function(n,i,a){"use strict";a.r(i),a.d(i,"LoginModule",(function(){return G}));var s=a("ofXK"),u=a("fXoL"),l=a("tyNb"),c=a("IYfF"),d=a("Wp6s"),f=a("3Pt+"),h=a("kmnG"),p=a("nLfN"),b=a("8LU1"),m=a("EY2u"),v=a("XNiG");a("xgIS"),a("3UWI"),a("1G5W");var y,_,g,O,k=Object(p.f)({passive:!0}),w=((_=function(){function e(t,n){r(this,e),this._platform=t,this._ngZone=n,this._monitoredElements=new Map}return o(e,[{key:"monitor",value:function(e){var t=this;if(!this._platform.isBrowser)return m.a;var n=Object(b.b)(e),i=this._monitoredElements.get(n);if(i)return i.subject.asObservable();var r=new v.a,a="cdk-text-field-autofilled",o=function(e){"cdk-text-field-autofill-start"!==e.animationName||n.classList.contains(a)?"cdk-text-field-autofill-end"===e.animationName&&n.classList.contains(a)&&(n.classList.remove(a),t._ngZone.run((function(){return r.next({target:e.target,isAutofilled:!1})}))):(n.classList.add(a),t._ngZone.run((function(){return r.next({target:e.target,isAutofilled:!0})})))};return this._ngZone.runOutsideAngular((function(){n.addEventListener("animationstart",o,k),n.classList.add("cdk-text-field-autofill-monitored")})),this._monitoredElements.set(n,{subject:r,unlisten:function(){n.removeEventListener("animationstart",o,k)}}),r.asObservable()}},{key:"stopMonitoring",value:function(e){var t=Object(b.b)(e),n=this._monitoredElements.get(t);n&&(n.unlisten(),n.subject.complete(),t.classList.remove("cdk-text-field-autofill-monitored"),t.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(t))}},{key:"ngOnDestroy",value:function(){var e=this;this._monitoredElements.forEach((function(t,n){return e.stopMonitoring(n)}))}}]),e}()).\u0275fac=function(e){return new(e||_)(u.Sb(p.a),u.Sb(u.z))},_.\u0275prov=Object(u.Fb)({factory:function(){return new _(Object(u.Sb)(p.a),Object(u.Sb)(u.z))},token:_,providedIn:"root"}),_),N=((y=function e(){r(this,e)}).\u0275mod=u.Hb({type:y}),y.\u0275inj=u.Gb({factory:function(e){return new(e||y)},imports:[[p.b]]}),y),x=a("FKr1"),E=new u.q("MAT_INPUT_VALUE_ACCESSOR"),C=["button","checkbox","file","hidden","image","radio","range","reset","submit"],I=0,S=Object(x.i)((function e(t,n,i,a){r(this,e),this._defaultErrorStateMatcher=t,this._parentForm=n,this._parentFormGroup=i,this.ngControl=a})),j=((O=function(n){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&e(t,n)}(a,n);var i=t(a);function a(e,t,n,o,s,u,l,c,d,f){var h;r(this,a),(h=i.call(this,u,o,s,n))._elementRef=e,h._platform=t,h.ngControl=n,h._autofillMonitor=c,h._formField=f,h._uid="mat-input-"+I++,h.focused=!1,h.stateChanges=new v.a,h.controlType="mat-input",h.autofilled=!1,h._disabled=!1,h._required=!1,h._type="text",h._readonly=!1,h._neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter((function(e){return Object(p.e)().has(e)}));var b=h._elementRef.nativeElement,m=b.nodeName.toLowerCase();return h._inputValueAccessor=l||b,h._previousNativeValue=h.value,h.id=h.id,t.IOS&&d.runOutsideAngular((function(){e.nativeElement.addEventListener("keyup",(function(e){var t=e.target;t.value||t.selectionStart||t.selectionEnd||(t.setSelectionRange(1,1),t.setSelectionRange(0,0))}))})),h._isServer=!h._platform.isBrowser,h._isNativeSelect="select"===m,h._isTextarea="textarea"===m,h._isNativeSelect&&(h.controlType=b.multiple?"mat-native-select-multiple":"mat-native-select"),h}return o(a,[{key:"ngAfterViewInit",value:function(){var e=this;this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe((function(t){e.autofilled=t.isAutofilled,e.stateChanges.next()}))}},{key:"ngOnChanges",value:function(){this.stateChanges.next()}},{key:"ngOnDestroy",value:function(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement)}},{key:"ngDoCheck",value:function(){this.ngControl&&this.updateErrorState(),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}},{key:"focus",value:function(e){this._elementRef.nativeElement.focus(e)}},{key:"_focusChanged",value:function(e){e===this.focused||this.readonly&&e||(this.focused=e,this.stateChanges.next())}},{key:"_onInput",value:function(){}},{key:"_dirtyCheckPlaceholder",value:function(){var e=this._formField,t=e&&e._hideControlPlaceholder()?null:this.placeholder;if(t!==this._previousPlaceholder){var n=this._elementRef.nativeElement;this._previousPlaceholder=t,t?n.setAttribute("placeholder",t):n.removeAttribute("placeholder")}}},{key:"_dirtyCheckNativeValue",value:function(){var e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}},{key:"_validateType",value:function(){if(C.indexOf(this._type)>-1)throw Error('Input type "'.concat(this._type,"\" isn't supported by matInput."))}},{key:"_isNeverEmpty",value:function(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}},{key:"_isBadInput",value:function(){var e=this._elementRef.nativeElement.validity;return e&&e.badInput}},{key:"setDescribedByIds",value:function(e){this._ariaDescribedby=e.join(" ")}},{key:"onContainerClick",value:function(){this.focused||this.focus()}},{key:"disabled",get:function(){return this.ngControl&&null!==this.ngControl.disabled?this.ngControl.disabled:this._disabled},set:function(e){this._disabled=Object(b.a)(e),this.focused&&(this.focused=!1,this.stateChanges.next())}},{key:"id",get:function(){return this._id},set:function(e){this._id=e||this._uid}},{key:"required",get:function(){return this._required},set:function(e){this._required=Object(b.a)(e)}},{key:"type",get:function(){return this._type},set:function(e){this._type=e||"text",this._validateType(),!this._isTextarea&&Object(p.e)().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}},{key:"value",get:function(){return this._inputValueAccessor.value},set:function(e){e!==this.value&&(this._inputValueAccessor.value=e,this.stateChanges.next())}},{key:"readonly",get:function(){return this._readonly},set:function(e){this._readonly=Object(b.a)(e)}},{key:"empty",get:function(){return!(this._isNeverEmpty()||this._elementRef.nativeElement.value||this._isBadInput()||this.autofilled)}},{key:"shouldLabelFloat",get:function(){if(this._isNativeSelect){var e=this._elementRef.nativeElement,t=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&t&&t.label)}return this.focused||!this.empty}}]),a}(S)).\u0275fac=function(e){return new(e||O)(u.Jb(u.l),u.Jb(p.a),u.Jb(f.f,10),u.Jb(f.i,8),u.Jb(f.d,8),u.Jb(x.a),u.Jb(E,10),u.Jb(w),u.Jb(u.z),u.Jb(h.a,8))},O.\u0275dir=u.Eb({type:O,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-input-element","mat-form-field-autofill-control"],hostVars:10,hostBindings:function(e,t){1&e&&u.Vb("focus",(function(){return t._focusChanged(!0)}))("blur",(function(){return t._focusChanged(!1)}))("input",(function(){return t._onInput()})),2&e&&(u.Rb("disabled",t.disabled)("required",t.required),u.Ab("id",t.id)("data-placeholder",t.placeholder)("readonly",t.readonly&&!t._isNativeSelect||null)("aria-describedby",t._ariaDescribedby||null)("aria-invalid",t.errorState)("aria-required",t.required.toString()),u.Bb("mat-input-server",t._isServer))},inputs:{id:"id",disabled:"disabled",required:"required",type:"type",value:"value",readonly:"readonly",placeholder:"placeholder",errorStateMatcher:"errorStateMatcher"},exportAs:["matInput"],features:[u.yb([{provide:h.b,useExisting:O}]),u.wb,u.xb]}),O),R=((g=function e(){r(this,e)}).\u0275mod=u.Hb({type:g}),g.\u0275inj=u.Gb({factory:function(e){return new(e||g)},providers:[x.a],imports:[[N,h.c],N,h.c]}),g),L=a("bTqV");function M(e,t){1&e&&(u.Ob(0,"div"),u.nc(1," Name is required "),u.Nb())}function P(e,t){if(1&e&&(u.Ob(0,"div",9),u.mc(1,M,2,0,"div",10),u.Nb()),2&e){u.Xb();var n=u.dc(11);u.zb(1),u.ac("ngIf",n.errors.required)}}function q(e,t){1&e&&(u.Ob(0,"div"),u.nc(1," Name is required "),u.Nb())}function A(e,t){if(1&e&&(u.Ob(0,"div",9),u.mc(1,q,2,0,"div",10),u.Nb()),2&e){u.Xb();var n=u.dc(17);u.zb(1),u.ac("ngIf",n.errors.required)}}var J,T,V=((J=function(){function e(t,n){r(this,e),this.router=t,this.authService=n,this.username="",this.password="",this.email="",this.sw=!0}return o(e,[{key:"ngOnInit",value:function(){this.authService.verifyLogged()&&this.router.navigate(["pages"])}},{key:"onLogin",value:function(e){var t=this;console.log("FORM: ",e.value),this.authService.login({email:e.value.email,password:e.value.password,returnSecureToken:!0}).subscribe((function(e){console.log("LOGIN RESPONSE: ",e),t.router.navigate(["pages"])}),(function(e){console.log("LOGIN ERROR: ")}))}}]),e}()).\u0275fac=function(e){return new(e||J)(u.Jb(l.a),u.Jb(c.a))},J.\u0275cmp=u.Db({type:J,selectors:[["app-login"]],decls:22,vars:3,consts:[[1,"example-card"],[2,"display","flex","flex-direction","column"],["form","ngForm"],["matInput","","type","text","name","email","ngModel","","required",""],["emailUI","ngModel"],["class","alert alert-danger",4,"ngIf"],["matInput","","type","password","name","password","ngModel","","required",""],["passwordUI","ngModel"],["mat-button","",3,"disabled","click"],[1,"alert","alert-danger"],[4,"ngIf"]],template:function(e,t){if(1&e){var n=u.Pb();u.Ob(0,"mat-card",0),u.Ob(1,"mat-card-header"),u.Ob(2,"mat-card-title"),u.nc(3,"LOGIN"),u.Nb(),u.Nb(),u.Ob(4,"mat-card-content"),u.Ob(5,"form",1,2),u.Ob(7,"mat-form-field"),u.Ob(8,"mat-label"),u.nc(9,"E-mail"),u.Nb(),u.Kb(10,"input",3,4),u.mc(12,P,2,1,"div",5),u.Nb(),u.Ob(13,"mat-form-field"),u.Ob(14,"mat-label"),u.nc(15,"Password"),u.Nb(),u.Kb(16,"input",6,7),u.mc(18,A,2,1,"div",5),u.Nb(),u.Nb(),u.Nb(),u.Ob(19,"mat-card-actions"),u.Ob(20,"button",8),u.Vb("click",(function(){u.ec(n);var e=u.dc(6);return t.onLogin(e)})),u.nc(21,"Login"),u.Nb(),u.Nb(),u.Nb()}if(2&e){var i=u.dc(6),r=u.dc(11),a=u.dc(17);u.zb(12),u.ac("ngIf",r.invalid&&(r.touched||r.dirty)),u.zb(6),u.ac("ngIf",a.invalid&&(a.touched||a.dirty)),u.zb(2),u.ac("disabled",i.invalid)}},directives:[d.a,d.d,d.h,d.c,f.n,f.h,f.i,h.a,h.d,j,f.a,f.g,f.j,f.l,s.i,d.b,L.a],styles:["[_nghost-%COMP%]{width:100%;height:100%;display:flex;align-items:center;justify-content:center}.example-card[_ngcontent-%COMP%]{max-width:400px}.example-header-image[_ngcontent-%COMP%]{background-image:url(https://material.angular.io/assets/img/examples/shiba1.jpg);background-size:cover}"]}),J),z=a("XhcP"),F=[{path:"",component:V}],G=((T=function e(){r(this,e)}).\u0275mod=u.Hb({type:T}),T.\u0275inj=u.Gb({factory:function(e){return new(e||T)},providers:[c.a],imports:[[s.b,l.d.forChild(F),f.e,f.k,z.c,L.b,d.f,h.c,R]]}),T)}}])}();