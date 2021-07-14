(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{17:function(t,e,n){t.exports={ContactList:"ContactList_ContactList__4TvGi",ContactListItem:"ContactList_ContactListItem__1Gd3I",DeleteBtn:"ContactList_DeleteBtn__24kLZ"}},21:function(t,e,n){t.exports={inputLabel:"Filter_inputLabel__KDsXr",inputValue:"Filter_inputValue__23IJH"}},30:function(t,e,n){},60:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),r=n(10),o=n.n(r),u=n(6),i=n(13),s=n(14),b=n(16),l=n(15),j=n(4),d=n(8),f=n.n(d),h=n(11),O=function(t){return t.filter},p=function(t){return t.contacts},m={getLoading:function(t){return t.loading},getFilter:O,getCurrentContacts:Object(h.a)([p,O],(function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))})),getAllContacts:p},C=n(9),g=n.n(C),v=n(2),x=Object(v.b)("contacts/fetchContactRequest"),L=Object(v.b)("contacts/fetchContactSuccess"),_=Object(v.b)("contacts/fetchContactError"),y=Object(v.b)("contacts/addContactRequest"),N=Object(v.b)("contacts/addContactSuccess"),k=Object(v.b)("contacts/addContactError"),A=Object(v.b)("contacts/deleteContactRequest"),F=Object(v.b)("contacts/deleteContactSuccess"),w=Object(v.b)("contacts/deleteContactError"),S=Object(v.b)("contacts/Filter");g.a.defaults.baseURL="http://localhost:4040";var D=n(1),q=function(t){Object(b.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(i.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={name:"",number:""},t.handleChange=function(e){t.setState(Object(j.a)({},e.currentTarget.name,e.currentTarget.value))},t.handleSubmit=function(e){e.preventDefault();var n=t.state,c=n.name,a=n.number,r=t.props,o=r.currentContacts,u=r.onSubmit;o.some((function(t){return c.toLowerCase()===t.name.toLowerCase()}))?alert("".concat(c," is already in contacts.")):u(c,a),t.setState({name:"",number:""})},t}return Object(s.a)(n,[{key:"render",value:function(){return Object(D.jsxs)("form",{onSubmit:this.handleSubmit,className:f.a.FormContainer,children:[Object(D.jsxs)("label",{className:f.a.inputLabel,children:["Name",Object(D.jsx)("input",{className:f.a.inputValue,value:this.state.name,onChange:this.handleChange,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(D.jsxs)("label",{className:f.a.inputLabel,children:["Number",Object(D.jsx)("input",{className:f.a.inputValue,value:this.state.number,onChange:this.handleChange,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(D.jsx)("button",{type:"submit",children:"Add contact"})]})}}]),n}(c.Component),R=Object(u.b)((function(t){return{currentContacts:m.getAllContacts(t)}}),(function(t){return{onSubmit:function(e,n){return t(function(t,e){return function(n){var c={name:t,number:e};n(y()),g.a.post("/contacts",c).then((function(t){var e=t.data;return n(N(e))})).catch((function(t){return n(k(t))}))}}(e,n))}}}))(q),V=n(12),I=n.n(V),z=n(17),B=n.n(z),J=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(D.jsx)("ul",{className:B.a.ContactList,children:e.map((function(t){var e=t.id,c=t.name,a=t.number;return Object(D.jsxs)("li",{className:B.a.ContactListItem,children:[Object(D.jsxs)("p",{children:[c,": ",a]}),Object(D.jsx)("button",{className:B.a.DeleteBtn,type:"button",onClick:function(){return n(e)},children:"Delete"})]},e)}))})};J.propTypes={contacts:I.a.array.isRequired,onDeleteContact:I.a.func.isRequired};var T,E,Z=Object(u.b)((function(t){return{contacts:m.getCurrentContacts(t)}}),(function(t){return{onDeleteContact:function(e){return t((n=e,function(t){t(A()),g.a.delete("/contacts/".concat(n)).then((function(){return t(F(n))})).catch((function(e){return t(w(e))}))}));var n}}}))(J),M=n(21),G=n.n(M),P=Object(u.b)((function(t){return{value:m.getFilter(t)}}),(function(t){return{onChange:function(e){return t(S(e.target.value))}}}))((function(t){var e=t.value,n=t.onChange;return Object(D.jsxs)("label",{className:G.a.inputLabel,children:["Find contacts by name",Object(D.jsx)("input",{className:G.a.inputValue,type:"text",value:e,onChange:n})]})})),U=(n(30),function(t){Object(b.a)(n,t);var e=Object(l.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchContacts()}},{key:"render",value:function(){return Object(D.jsxs)("div",{className:"Phonebook",children:[Object(D.jsx)("h1",{children:"Phonebook"}),Object(D.jsx)(R,{}),Object(D.jsx)("h2",{children:"Contacts"}),Object(D.jsx)(P,{}),this.props.isLoading&&Object(D.jsx)("h1",{children:"Loading..."}),Object(D.jsx)(Z,{})]})}}]),n}(c.Component)),H=Object(u.b)((function(t){return{isLoading:m.getLoading(t)}}),(function(t){return{fetchContacts:function(){return t((function(t){t(x()),g.a.get("/contacts").then((function(e){var n=e.data;return t(L(n))})).catch((function(e){return t(_(e))}))}))}}}))(U),K=n(32),Q=n(3),X=Object(v.c)([],(T={},Object(j.a)(T,L,(function(t,e){return e.payload})),Object(j.a)(T,N,(function(t,e){var n=e.payload;return[].concat(Object(K.a)(t),[n])})),Object(j.a)(T,F,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),T)),$=Object(v.c)(!1,(E={},Object(j.a)(E,x,(function(){return!0})),Object(j.a)(E,L,(function(){return!1})),Object(j.a)(E,_,(function(){return!1})),Object(j.a)(E,y,(function(){return!0})),Object(j.a)(E,N,(function(){return!1})),Object(j.a)(E,k,(function(){return!1})),Object(j.a)(E,A,(function(){return!0})),Object(j.a)(E,F,(function(){return!1})),Object(j.a)(E,w,(function(){return!1})),E)),W=Object(v.c)("",Object(j.a)({},S,(function(t,e){return e.payload}))),Y=Object(Q.b)({contacts:X,filter:W,loading:$}),tt=n(7),et=n(31),nt=n.n(et),ct=Object(v.a)({reducer:Y,middleware:function(t){return t({serializableCheck:{ignoredActions:[tt.a,tt.f,tt.b,tt.c,tt.d,tt.e]}}).concat(nt.a)},devTools:!1});o.a.render(Object(D.jsx)(a.a.StrictMode,{children:Object(D.jsx)(u.a,{store:ct,children:Object(D.jsx)(H,{})})}),document.getElementById("root"))},8:function(t,e,n){t.exports={FormContainer:"ContactForm_FormContainer__3JfQi",inputLabel:"ContactForm_inputLabel__3ilUb",inputValue:"ContactForm_inputValue__wR2AA"}}},[[60,1,2]]]);
//# sourceMappingURL=main.11a8e04b.chunk.js.map