(this["webpackJsonpyaradin-test-task"]=this["webpackJsonpyaradin-test-task"]||[]).push([[0],{43:function(e,t,n){e.exports=n(77)},48:function(e,t,n){},53:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(17),l=n.n(c),i=(n(48),n(11)),s=function(e,t){var n=e.title.toLowerCase(),a=t.title.toLowerCase();return n<a?-1:n>a?1:0},u=function(e){return e.searchValue},o=function(e){return function(e){return function(e){return e.films}(e).filter((function(t){return-1!==t.title.toLowerCase().indexOf(u(e))}))}(e).sort(s)},m=n(10),f={films:[],searchValue:""},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_FILMS":return Object(m.a)({},e,{films:t.films});case"SET_SEARCH_VALUE":return Object(m.a)({},e,{searchValue:t.value});default:return e}},d=(n(53),n(14)),E=function(e){var t=e.searchValue,n=e.handleChangeValue;return r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"header__logo"},r.a.createElement(d.b,{to:"/"},"Star wars")),r.a.createElement("form",{className:"header__search"},r.a.createElement("input",{type:"text",placeholder:"Search...",value:t,onChange:n})))},h=Object(i.b)((function(e){return{searchValue:u(e)}}),{setSearchValue:function(e){return{type:"SET_SEARCH_VALUE",value:e}}})((function(e){var t=e.searchValue,n=e.setSearchValue;return r.a.createElement(E,{searchValue:t,handleChangeValue:function(e){n(e.target.value.toLowerCase())}})})),v=n(40),_=n(3),b=n.n(_),S=n(13),O=n(23),j=function(e){return O.get(e).then((function(e){return e.data}))},w=function(){return O.get("".concat("https://swapi.co/api/","films/")).then((function(e){return e.data.results}))},g=function(e){return j(e)},y=function(e){return j(e)},N=function(e){return j(e)},L=function(e){return j(e)},T={title:"",id:0,description:"",director:"",producer:"",releaseDate:0,characters:[],planets:[],starships:[],url:""},x=function(e){return{type:"SET_PLANETS",planets:e}},P=function(e){return{type:"SET_PEOPLE",people:e}},k=function(e){return{type:"SET_STARSHIPS",starships:e}},V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_FILM":return Object(m.a)({},e,{title:t.film.title,id:t.film.episode_id,description:t.film.opening_crawl,director:t.film.director,producer:t.film.producer,releaseDate:t.film.release_date,characters:t.film.characters,planets:t.film.planets,starships:t.film.starships});case"SET_PLANETS":return Object(m.a)({},e,{planets:t.planets.map((function(e){return e.name}))});case"SET_PEOPLE":return Object(m.a)({},e,{characters:t.people.map((function(e){return e.name}))});case"SET_STARSHIPS":return Object(m.a)({},e,{starships:t.starships.map((function(e){return e.name}))});case"SET_URL":return Object(m.a)({},e,{url:t.url});default:return e}},F=(n(73),n(74),function(e){var t=e.name,n=e.description,a=e.releaseDate;return r.a.createElement("div",{className:"film"},r.a.createElement("div",{className:"film__name"},t),r.a.createElement("div",{className:"film__description"},n),r.a.createElement("div",{className:"film__release-date"},a))}),C=function(e){var t=e.films,n=e.setUrlFilm;return r.a.createElement("div",{className:"films"},t.map((function(e){return r.a.createElement(d.b,{key:e.episode_id,onClick:function(){n(e.url)},to:"/film?id=".concat(e.episode_id)},r.a.createElement(F,{key:e.episode_id,name:e.title,description:e.opening_crawl,releaseDate:e.release_date}))})))},A=(n(75),function(){return r.a.createElement("div",{className:"lds-wrapper"},r.a.createElement("div",{className:"lds-css"},r.a.createElement("div",{className:"lds-double-ring"},r.a.createElement("div",null),r.a.createElement("div",null))))}),U=Object(i.b)((function(e){return{films:o(e.films)}}),{setFilms:function(e){return{type:"SET_FILMS",films:e}},setUrlFilm:function(e){return{type:"SET_URL",url:e}}})((function(e){var t=e.setFilms,n=e.films,c=e.setUrlFilm,l=Object(a.useState)(!0),i=Object(v.a)(l,2),s=i[0],u=i[1];return Object(a.useEffect)((function(){w().then((function(e){t(e),u(!1)}))}),[]),r.a.createElement("div",null,s&&r.a.createElement(A,null),!s&&r.a.createElement(C,{films:n,setUrlFilm:c}))})),D=n(12),I=n(36),R=n(37),M=n(41),H=n(38),J=n(42),B=(n(76),function(e){var t=e.title,n=e.director,a=e.producer,c=e.releaseDate,l=e.description,i=e.characters,s=e.planets,u=e.starships;return r.a.createElement("div",null,r.a.createElement("div",{className:"film-info"},r.a.createElement("div",{className:"film-info__title"},r.a.createElement("h1",null,t)),r.a.createElement("div",{className:"film-info__information"},r.a.createElement("span",null,r.a.createElement("b",null,"director: "),n),r.a.createElement("span",null,r.a.createElement("b",null,"producer: "),a),r.a.createElement("span",null,r.a.createElement("b",null,"releaseDate: "),c)),r.a.createElement("div",{className:"film-info__description"},r.a.createElement("span",null,l)),r.a.createElement("div",{className:"film-info__planets"},"planets:",r.a.createElement("ul",null,s.map((function(e){return r.a.createElement("li",null,e)})))),r.a.createElement("div",{className:"film-info__planets"},"people:",r.a.createElement("ul",null,i.map((function(e){return r.a.createElement("li",null,e)})))),r.a.createElement("div",{className:"film-info__planets"},"starships:",r.a.createElement("ul",null,u.map((function(e){return r.a.createElement("li",null,e)}))))))}),q=function(e){function t(){var e,n;Object(I.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(M.a)(this,(e=Object(H.a)(t)).call.apply(e,[this].concat(r)))).state={isLoading:!0},n}return Object(J.a)(t,e),Object(R.a)(t,[{key:"componentDidMount",value:function(){var e=this;g(this.props.film.url).then((function(t){e.props.setFilm(t)})).then(Object(S.a)(b.a.mark((function t(){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.props.getPlanets(e.props.film.planets);case 2:case"end":return t.stop()}}),t)})))).then(Object(S.a)(b.a.mark((function t(){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.props.getPeople(e.props.film.characters);case 2:case"end":return t.stop()}}),t)})))).then(Object(S.a)(b.a.mark((function t(){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.props.getStarships(e.props.film.starships);case 2:case"end":return t.stop()}}),t)})))).then((function(){e.setState({isLoading:!1})}))}},{key:"render",value:function(){var e=this.state.isLoading,t=this.props.film;return r.a.createElement("div",null,e&&r.a.createElement(A,null),!e&&r.a.createElement(B,t))}}]),t}(r.a.Component),z=Object(i.b)((function(e){return{film:e.film}}),{setFilm:function(e){return{type:"SET_FILM",film:e}},setPlanets:x,getPlanets:function(e){return function(){var t=Object(S.a)(b.a.mark((function t(n){var a;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all(e.map((function(e){return N(e)})));case 2:a=t.sent,n(x(a));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},getPeople:function(e){return function(){var t=Object(S.a)(b.a.mark((function t(n){var a;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all(e.map((function(e){return y(e)})));case 2:a=t.sent,n(P(a));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},getStarships:function(e){return function(){var t=Object(S.a)(b.a.mark((function t(n){var a;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all(e.map((function(e){return L(e)})));case 2:a=t.sent,n(k(a));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})(q);var G=function(){return r.a.createElement(d.a,null,r.a.createElement(h,null),r.a.createElement(D.a,{exact:!0,path:"/",render:function(){return r.a.createElement(U,null)}}),r.a.createElement(D.a,{path:"/film/",render:function(){return r.a.createElement(z,null)}}))},K=n(15),Q=n(39),W=Object(K.c)({films:p,film:V}),X=Object(K.d)(W,Object(K.a)(Q.a));l.a.render(r.a.createElement(i.a,{store:X},r.a.createElement(G,null)),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.61c85247.chunk.js.map