(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],[,,,,function(e,t,a){e.exports=a.p+"static/media/close-icon.5df32a06.svg"},function(e,t,a){e.exports=a.p+"static/media/pencil-icon.6bfdb354.svg"},,,function(e,t,a){e.exports=a.p+"static/media/plus-icon.b2fce4ac.svg"},function(e,t,a){e.exports=a.p+"static/media/delete-icon.d8078343.svg"},function(e,t,a){e.exports=a.p+"static/media/logo.c6f11019.svg"},,,,function(e,t,a){e.exports=a(20)},,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(7),c=a.n(o),i=(a(19),a(13)),l=a(1);var s=function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("p",{className:"footer__copyright"},"\xa9 \u0420\u0443\u0441\u043b\u0430\u043d\xa0\u041b\u0443\u043a\u0438\u0447\u0435\u0432"))},u=a(5),m=a.n(u),p=a(8),d=a.n(p),_=a(9),f=a.n(_),h=r.a.createContext();var b=function(e){var t=r.a.useContext(h),a=e.card.owner._id===t._id,n="element__delete-button ".concat(a?"element__delete-button_visible":"element__delete-button_hidden"),o=e.card.likes.some((function(e){return e._id===t._id})),c="".concat(o?"element__like-icon element__like-icon_active":"element__like-icon");return r.a.createElement("div",{className:"element-template",key:e.card._id},r.a.createElement("li",{className:"element"},r.a.createElement("button",{className:n,onClick:function(){e.onCardDelete(e.card)}},r.a.createElement("img",{className:"element__delete-icon",src:f.a,alt:"\u0418\u043a\u043e\u043d\u043a\u0430 \u043a\u043d\u043e\u043f\u043a\u0438 \u0443\u0434\u0430\u043b\u0438\u0442\u044c"})),r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{className:"element__photo",src:e.card.link,alt:e.card.name,onClick:function(){e.onCardClick(e.card)}})),r.a.createElement("div",{className:"element__title-background"},r.a.createElement("h3",{className:"element__title"},e.card.name),r.a.createElement("div",{className:"element__like-wrapper"},r.a.createElement("button",{className:"element__like-button",onClick:function(){e.onCardLike(e.card)}},r.a.createElement("div",{className:c})),r.a.createElement("p",{className:"element__like-number"},e.card.likes.length)))))};var v=function(e){var t=r.a.useContext(h);return r.a.createElement("main",null,r.a.createElement("section",{className:"profile"},r.a.createElement("div",{className:"profile__card"},r.a.createElement("div",{className:"profile__avatar-wrap"},r.a.createElement("img",{className:"profile__avatar",src:t.avatar,alt:"\u0410\u0432\u0430\u0442\u0430\u0440 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"}),r.a.createElement("button",{className:"profile__change-avatar-button",onClick:e.onEditAvatar},r.a.createElement("img",{className:"profile__change-avatar-icon",src:m.a,alt:"\u0418\u043a\u043e\u043d\u043a\u0430 \u043a\u043d\u043e\u043f\u043a\u0438 \u0441\u043c\u0435\u043d\u044b \u0430\u0432\u0430\u0442\u0430\u0440\u0430"}))),r.a.createElement("div",null,r.a.createElement("div",{className:"profile__name-button-container"},r.a.createElement("h1",{className:"profile__name"},t.name),r.a.createElement("button",{className:"profile__edit-button",onClick:e.onEditProfile},r.a.createElement("img",{className:"profile__edit-button-icon",src:m.a,alt:"\u0418\u043a\u043e\u043d\u043a\u0430 \u043a\u043d\u043e\u043f\u043a\u0438 \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u043f\u0440\u043e\u0444\u0438\u043b\u044f"}))),r.a.createElement("p",{className:"profile__position"},t.about))),r.a.createElement("button",{className:"profile__add-button",onClick:e.onAddPlace},r.a.createElement("img",{className:"profile__add-button-icon",src:d.a,alt:"\u0418\u043a\u043e\u043d\u043a\u0430 \u043a\u043d\u043e\u043f\u043a\u0438 \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c"}))),r.a.createElement("ul",{className:"elements"},e.cards.map((function(t){return r.a.createElement(b,{key:t._id,card:t,onCardClick:e.onCard,onCardLike:e.onCardLike,onCardDelete:e.onCardDelete})}))))},E=a(10),g=a.n(E);var N=function(){return r.a.createElement("header",{className:"header"},r.a.createElement("img",{className:"header__logo",src:g.a,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f Mesto Russia"}))},k=a(4),C=a.n(k);var y=function(e){return r.a.createElement("section",{className:e.isOpen?"popup ".concat(e.name," popup_opened"):"popup ".concat(e.name)},r.a.createElement("div",{className:"".concat(e.name,"__container")},r.a.createElement("button",{className:"".concat(e.name,"__close-button close-button"),onClick:e.onClose},r.a.createElement("img",{className:"".concat(e.name,"__close-icon close-icon"),src:C.a,alt:"\u0418\u043a\u043e\u043d\u043a\u0430 \u0437\u0430\u043a\u0440\u044b\u0442\u0438\u044f \u043c\u043e\u0434\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u043e\u043a\u043d\u0430"})),r.a.createElement("h3",{className:"".concat(e.name,"__title")},e.title),r.a.createElement("form",{className:"".concat(e.name,"__form form"),name:e.name,noValidate:!0,onSubmit:e.onSubmit},e.children)))};var j=function(e){return e.card?r.a.createElement("section",{className:"popup popup-image popup_opened"},r.a.createElement("figure",{className:"popup-image__container"},r.a.createElement("img",{className:"popup-image__photo",src:e.card.link,alt:e.card.name}),r.a.createElement("button",{className:"popup-image__close-button",onClick:e.onClose},r.a.createElement("img",{className:"popup-image__close-icon close-icon",src:C.a,alt:"\u0418\u043a\u043e\u043d\u043a\u0430 \u0437\u0430\u043a\u0440\u044b\u0442\u0438\u044f \u043c\u043e\u0434\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u043e\u043a\u043d\u0430"})),r.a.createElement("figcaption",{className:"popup-image__title"},e.card.name))):null};var O=function(e){var t=r.a.useState(""),a=Object(l.a)(t,2),n=a[0],o=a[1],c=r.a.useState(""),i=Object(l.a)(c,2),s=i[0],u=i[1],m=r.a.useContext(h);return r.a.useEffect((function(){o(m.name),u(m.about)}),[m]),r.a.createElement(y,{name:"popup-edit",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",onClose:e.onClose,isOpen:e.isOpen,onSubmit:function(t){t.preventDefault(),e.onUpdateUser(n,s)}},r.a.createElement("input",{className:"form__input form__input_type_name",id:"name-input",type:"text",value:n||"",name:"name-input",placeholder:"\u0418\u043c\u044f",minLength:"2",maxLength:"40",onChange:function(e){o(e.target.value)},required:!0}),r.a.createElement("span",{className:"form__input-error",id:"name-input-error"}),r.a.createElement("input",{className:"form__input form__input_type_job",type:"text",value:s||"",name:"job-input",id:"job-input",placeholder:"\u041e \u0441\u0435\u0431\u0435",minLength:"2",maxLength:"200",onChange:function(e){u(e.target.value)},required:!0}),r.a.createElement("span",{className:"form__input-error",id:"job-input-error"}),r.a.createElement("button",{className:"form__submit popup-edit__submit-button",type:"submit",value:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"))};var S=function(e){var t=r.a.useRef();return r.a.createElement(y,{name:"popup-avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",onClose:e.onClose,isOpen:e.isOpen,onSubmit:function(a){a.preventDefault(),e.onUpdateAvatar(t.current.value)}},r.a.createElement("input",{className:"form__input form__input_type_avatar_url",id:"avatar-url",name:"avatar-url",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0430\u0432\u0430\u0442\u0430\u0440",type:"url",required:!0,ref:t}),r.a.createElement("span",{className:"form__input-error",id:"avatar-url-error"}),r.a.createElement("button",{className:"form__submit popup-avatar__submit-button",type:"submit",value:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c"},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"))},P=a(11),U=a(12),x=new(function(){function e(t){var a=t.baseUrl,n=t.headers;Object(P.a)(this,e),this._baseUrl=a,this._headers=n}return Object(U.a)(e,[{key:"getUserData",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"getServerCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"createCard",value:function(e,t){return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers,method:"POST",body:JSON.stringify({name:e,link:t})}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"changeLikeCardStatus",value:function(e,t){return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{headers:this._headers,method:"".concat(t?"PUT":"DELETE")}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"editProfile",value:function(e,t){return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers,method:"PATCH",body:JSON.stringify({name:e,about:t})}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"deleteCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e),{headers:this._headers,method:"DELETE"}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"changeAvatar",value:function(e){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{headers:this._headers,method:"PATCH",body:JSON.stringify({avatar:e})}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}}]),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-14",headers:{authorization:"82766c49-7200-46d6-b92c-89ba083f974b","Content-Type":"application/json"}});var w=function(e){var t=r.a.useState(""),a=Object(l.a)(t,2),n=a[0],o=a[1],c=r.a.useState(""),i=Object(l.a)(c,2),s=i[0],u=i[1];return r.a.createElement(y,{name:"popup-add",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",onClose:e.onClose,isOpen:e.isOpen,onSubmit:function(t){t.preventDefault(),e.onAddPlaceSubmit(n,s)}},r.a.createElement("input",{className:"form__input form__input_type_title",type:"text",id:"title-input",name:"title-input",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",minLength:"1",maxLength:"30",required:!0,onChange:function(e){o(e.target.value)}}),r.a.createElement("span",{className:"form__input-error",id:"title-input-error"}),r.a.createElement("input",{className:"form__input form__input_type_url",id:"url-input",name:"url-input",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",type:"url",required:!0,onChange:function(e){u(e.target.value)}}),r.a.createElement("span",{className:"form__input-error",id:"url-input-error"}),r.a.createElement("button",{className:"form__submit popup-add__submit-button",type:"submit",value:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c"},"\u0421\u043e\u0437\u0434\u0430\u0442\u044c"))};document.body.style.backgroundColor="black";var L=function(){var e=r.a.useState({}),t=Object(l.a)(e,2),a=t[0],n=t[1],o=r.a.useState(!1),c=Object(l.a)(o,2),u=c[0],m=c[1],p=r.a.useState(!1),d=Object(l.a)(p,2),_=d[0],f=d[1],b=r.a.useState(!1),E=Object(l.a)(b,2),g=E[0],k=E[1],C=r.a.useState(null),P=Object(l.a)(C,2),U=P[0],L=P[1],A=r.a.useState([]),D=Object(l.a)(A,2),T=D[0],q=D[1];function J(){m(!1),f(!1),k(!1),L(null)}return r.a.useEffect((function(){Promise.all([x.getUserData(),x.getServerCards()]).then((function(e){var t=Object(l.a)(e,2),a=t[0],r=t[1].map((function(e){return{name:e.name,link:e.link,likes:e.likes,_id:e._id,owner:{_id:e.owner._id}}}));q(r),n(a)})).catch((function(e){console.log(e)}))}),[]),r.a.createElement("div",{className:"page"},r.a.createElement(h.Provider,{value:a},r.a.createElement(N,null),r.a.createElement(v,{onEditProfile:function(){m(!0)},onEditAvatar:function(){f(!0)},onAddPlace:function(){k(!0)},onCard:L,onCardLike:function(e){var t=e.likes.some((function(e){return e._id===a._id}));x.changeLikeCardStatus(e._id,!t).then((function(t){var a=T.map((function(a){return a._id===e._id?t:a}));q(a)})).catch((function(e){console.log(e)}))},onCardDelete:function(e){x.deleteCard(e._id).then((function(){var t=T.filter((function(t){return t._id!==e._id}));q(t)})).catch((function(e){console.log(e)}))},cards:T}),r.a.createElement(s,null),r.a.createElement(O,{onClose:J,isOpen:u,onUpdateUser:function(e,t){x.editProfile(e,t).then((function(e){n(e),J()})).catch((function(e){console.log(e)}))}}),r.a.createElement(w,{onClose:J,isOpen:g,onAddPlaceSubmit:function(e,t){x.createCard(e,t).then((function(e){q([].concat(Object(i.a)(T),[e])),J()})).catch((function(e){console.log(e)}))}}),r.a.createElement(y,{name:"popup-submit",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?"},r.a.createElement("button",{className:"form__submit popup-submit__submit-button form__submit-button_no-input",type:"submit",value:"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044c"},"\u0414\u0430")),r.a.createElement(S,{isOpen:_,onClose:J,onUpdateAvatar:function(e){x.changeAvatar(e).then((function(e){n(e),J()})).catch((function(e){console.log(e)}))}}),r.a.createElement(j,{card:U,onClose:J})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[14,1,2]]]);
//# sourceMappingURL=main.e0dd0fb8.chunk.js.map