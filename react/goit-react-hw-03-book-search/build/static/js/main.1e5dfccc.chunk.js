(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e){e.exports=["-------","fantasy","thriller","drama","mystery","horror","satire","computers"]},19:function(e,t,n){e.exports={BookListItem:"BookListItem_BookListItem__2Rh0q"}},2:function(e,t,n){e.exports={form:"SearchForm_form__3lbHM",input_form:"SearchForm_input_form__3IIcy",select_form:"SearchForm_select_form__11spo",button_form:"SearchForm_button_form__jiTP-"}},22:function(e,t,n){e.exports=n(48)},47:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(17),u=n.n(o),c=n(3),i=n(4),l=n(6),s=n(5),m=n(7),h=n(20),p=n(18),f=n(19),b=n.n(f),g=function(e){var t=e.url,n=e.title,a=e.author,o=e.publisher,u=e.publishedDate,c=e.pageCount,i=e.rating;return r.a.createElement("div",{className:b.a.BookListItem},r.a.createElement("img",{src:t,alt:"img-book-title"}),r.a.createElement("h2",null,n),r.a.createElement("p",null,"Author: ",a),r.a.createElement("p",null,"Publisher: ",o),r.a.createElement("p",null,"PublishedDate: ",u),r.a.createElement("p",null,"PageCount: ",c),r.a.createElement("p",null,"Rating: ",i))};g.defaultProps={rating:0,pageCount:100,publisher:"",publishedDate:""};var _=g,d=n(9),v=n.n(d),E=function(e){var t=e.items;return r.a.createElement("div",{className:v.a.BookList},r.a.createElement("ul",null,t.map(function(e){return r.a.createElement("li",{key:e.id,className:v.a.BookList_Item},r.a.createElement(_,e))})))},y=function(){return r.a.createElement("h1",null,"LOADING ...")},k=function(e){var t=e.text;return r.a.createElement("h1",null,"Whoops, something went wrong: ",t)},S=n(21),j=n(2),L=n.n(j),I=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={query:"",subject:""},n.handleChange=function(e){n.setState({query:e.target.value})},n.handleSelect=function(e){n.setState({subject:e.target.value})},n.handleSubmit=function(e){e.preventDefault(),n.props.onSubmit(Object(S.a)({},n.state)),n.setState({query:""})},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state.query,t=this.props.genres;return r.a.createElement("form",{className:L.a.form},r.a.createElement("input",{type:"text",value:e,onChange:this.handleChange,className:L.a.input_form}),r.a.createElement("select",{onBlur:this.handleSelect,className:L.a.select_form},t.map(function(e){return r.a.createElement("option",{key:e,value:e},e)})),r.a.createElement("button",{type:"button",onClick:this.handleSubmit,className:L.a.button_form},"Search"))}}]),t}(a.Component),w=n(10),B=n.n(w),O="https://www.googleapis.com/books/v1/volumes?q=",C=function(e,t){return""===e?B.a.get("".concat(O).concat(e)):B.a.get("".concat(O).concat(e,"+subject:").concat(t))},q=function(e){return e.map(function(e){var t=e.id,n=e.volumeInfo,a=n.imageLinks.thumbnail,r=Object(h.a)(n.authors,1)[0],o=n.averageRating,u=n.pageCount;return{id:t,url:a,author:r,title:n.title,publisher:n.publisher,publishedDate:n.publishedDate,rating:o,pageCount:u}})},x=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={items:[],isLoading:!1,error:null},n.fetchItem=function(e){var t=e.query,a=e.subject;n.setState({isLoading:!0}),C(t,a).then(function(e){var t=e.data;n.setState({items:q(t.items)})}).catch(function(e){return n.setState({error:e})}).finally(function(){return n.setState({isLoading:!1})})},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.fetchItem({query:"react",subject:"computers"})}},{key:"render",value:function(){var e=this.state,t=e.items,n=e.isLoading,a=e.error;return r.a.createElement("div",null,a&&r.a.createElement(k,{text:a.message}),r.a.createElement(I,{genres:p,onSubmit:this.fetchItem}),n&&r.a.createElement(y,null),t.length>0&&r.a.createElement(E,{items:t}))}}]),t}(a.Component);x.defaultProps={query:"",subject:""};n(47);u.a.render(r.a.createElement(x,null),document.querySelector("#root"))},9:function(e,t,n){e.exports={BookList:"BookList_BookList__3i-S3",BookList_Item:"BookList_BookList_Item__TCm5o"}}},[[22,1,2]]]);
//# sourceMappingURL=main.1e5dfccc.chunk.js.map