webpackJsonp([0],{"+v2S":function(t,i){},"5Ahp":function(t,i){},"8EF5":function(t,i){},"9mUS":function(t,i){},BOGq:function(t,i){},"G/o6":function(t,i){},GGjl:function(t,i){},"H+Bv":function(t,i){},NHnr:function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e=s("7+uW"),n={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{attrs:{id:"app"}},[i("section",{staticClass:"hero is-primary"},[i("div",{staticClass:"hero-body"},[i("div",{staticClass:"container"},[i("router-link",{attrs:{to:"/"}},[i("h1",{staticClass:"title"},[i("b-icon",{attrs:{icon:"home",size:"is-medium"}}),this._v(" Catalogue de services\n        ")],1)]),this._v(" "),i("h2",{staticClass:"subtitle"},[this._v("\n          Centre Profesionnel du Nord Vaudois\n        ")])],1)])]),this._v(" "),i("transition",{attrs:{name:"fade",mode:"out-in"}},[i("router-view")],1),this._v(" "),this._m(0,!1,!1)],1)},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("footer",{staticClass:"footer"},[i("div",{staticClass:"container"},[i("div",{staticClass:"content has-text-centered"},[i("p",[i("strong",[this._v("Service Catalog")]),this._v(" by "),i("a",{attrs:{href:"https://github.com/bastiennicoud"}},[this._v("Bastien Nicoud")])])])])])}]},a=s("VU/8")({name:"app"},n,!1,function(t){s("+v2S")},null,null).exports,r=s("/ocq"),c={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"container my-container"},[s("div",{staticClass:"tile is-ancestor"},[s("div",{staticClass:"tile is-vertical is-8"},[s("div",{staticClass:"tile"},[s("div",{staticClass:"tile is-parent is-vertical"},[s("article",{staticClass:"tile is-child notification is-info",on:{click:function(i){t.click("mails/outlook")}}},[s("h1",{staticClass:"title"},[t._v("Messagrie")]),t._v(" "),s("h2",{staticClass:"subtitle"},[t._v("Mail, listes de diffusion")]),t._v(" "),s("p",[t._v("Comment utiliser les outils de messagerie, configurer une application avec votre compte de l'école.")])]),t._v(" "),s("article",{staticClass:"tile is-child notification is-warning",on:{click:function(i){t.click("network/sharedfolders")}}},[s("h1",{staticClass:"title"},[t._v("Ressources réseau")]),t._v(" "),s("h2",{staticClass:"subtitle"},[t._v("Accés local et a distance")]),t._v(" "),s("p",[t._v("Comment accéder au ressources depuis les machine de l'école, ou depuis des machines externes.")])])]),t._v(" "),s("div",{staticClass:"tile is-parent"},[s("article",{staticClass:"tile is-child notification is-success",on:{click:function(i){t.click("printers/drivers")}}},[s("h1",{staticClass:"title"},[t._v("Impression")]),t._v(" "),s("h2",{staticClass:"subtitle"},[t._v("Ajout et configuration")]),t._v(" "),s("p",[t._v("Comment accéder aux imprimentes du réseau, configurer les drivers, accés depuis une machine externe au réseau.")])])])]),t._v(" "),s("div",{staticClass:"tile is-parent"},[s("article",{staticClass:"tile is-child notification is-info",on:{click:function(i){t.click("web/intranet")}}},[s("h1",{staticClass:"title"},[t._v("Services WEB")]),t._v(" "),s("h2",{staticClass:"subtitle"},[t._v("Intranet, accés a internet")]),t._v(" "),s("p",[t._v("Intranet, quels identifiants utiliser, comment utiliser les applications. Gestion des accés internet aux classes.")])])])]),t._v(" "),s("div",{staticClass:"tile is-parent"},[s("article",{staticClass:"tile is-child notification is-warning",on:{click:function(i){t.click("authentication/password")}}},[s("h1",{staticClass:"title"},[t._v("Authentification")]),t._v(" "),s("h2",{staticClass:"subtitle"},[t._v("Identifients, mot de passe")]),t._v(" "),s("p",[t._v("Comment obtenir ses identifiants, restaurer un mot de passe oublié.\n          Quels sont les droits des différents types de profils dans le domaine du cpnv.\n        ")])])])])])},staticRenderFns:[]},o=s("VU/8")({name:"Home",data:function(){return{msg:"Welcome to Your Vue.js App"}},methods:{click:function(t){this.$router.push("/"+t)}}},c,!1,function(t){s("GGjl")},null,null).exports,l={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"mails"},[s("section",{staticClass:"hero is-info"},[t._m(0,!1,!1),t._v(" "),s("div",{staticClass:"hero-foot"},[s("div",{staticClass:"container"},[s("div",{staticClass:"tabs is-boxed is-medium"},[s("ul",[s("router-link",{attrs:{tag:"li",to:"outlook"}},[s("a",[t._v("Outlook")])]),t._v(" "),s("router-link",{attrs:{tag:"li",to:"webmail"}},[s("a",[t._v("WebMail")])]),t._v(" "),s("router-link",{attrs:{tag:"li",to:"app"}},[s("a",[t._v("Configure app")])])],1)])])])]),t._v(" "),s("div",{staticClass:"container my-container"},[s("transition",{attrs:{name:"fade",mode:"out-in"}},[s("router-view")],1)],1)])},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"hero-body"},[i("div",{staticClass:"container"},[i("h1",{staticClass:"title"},[this._v("\n          Mails\n        ")]),this._v(" "),i("h2",{staticClass:"subtitle"},[this._v("\n          Mail, listes de diffusion\n        ")])])])}]},u=s("VU/8")({name:"Mails",data:function(){return{activeTab:0}}},l,!1,function(t){s("eM4T")},"data-v-27e862f2",null).exports,d={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"network"},[i("section",{staticClass:"hero is-warning"},[this._m(0,!1,!1),this._v(" "),i("div",{staticClass:"hero-foot"},[i("div",{staticClass:"container"},[i("div",{staticClass:"tabs is-boxed is-medium"},[i("ul",[i("router-link",{attrs:{tag:"li",to:"sharedfolders"}},[i("a",[this._v("Doosier partagés")])]),this._v(" "),i("router-link",{attrs:{tag:"li",to:"datacpnv"}},[i("a",[this._v("data.cpnv.ch")])]),this._v(" "),i("router-link",{attrs:{tag:"li",to:"smb"}},[i("a",[this._v("Accés SMB")])])],1)])])])]),this._v(" "),i("div",{staticClass:"container my-container"},[i("transition",{attrs:{name:"fade",mode:"out-in"}},[i("router-view")],1)],1)])},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"hero-body"},[i("div",{staticClass:"container"},[i("h1",{staticClass:"title"},[this._v("\n          Ressources réseau\n        ")]),this._v(" "),i("h2",{staticClass:"subtitle"},[this._v("\n          Accés local et a distance\n        ")])])])}]},v=s("VU/8")({name:"Network",data:function(){return{activeTab:0}}},d,!1,function(t){s("H+Bv")},"data-v-d41ac200",null).exports,h={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"printers"},[i("section",{staticClass:"hero is-success"},[this._m(0,!1,!1),this._v(" "),i("div",{staticClass:"hero-foot"},[i("div",{staticClass:"container"},[i("div",{staticClass:"tabs is-boxed is-medium"},[i("ul",[i("router-link",{attrs:{tag:"li",to:"drivers"}},[i("a",[this._v("Installation des drivers")])]),this._v(" "),i("router-link",{attrs:{tag:"li",to:"add"}},[i("a",[this._v("Ajouter une imprimante")])])],1)])])])]),this._v(" "),i("div",{staticClass:"container my-container"},[i("transition",{attrs:{name:"fade",mode:"out-in"}},[i("router-view")],1)],1)])},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"hero-body"},[i("div",{staticClass:"container"},[i("h1",{staticClass:"title"},[this._v("\n          Services d'impression\n        ")]),this._v(" "),i("h2",{staticClass:"subtitle"},[this._v("\n          Ajout et configuration\n        ")])])])}]},m=s("VU/8")({name:"Printers",data:function(){return{activeTab:0}}},h,!1,function(t){s("G/o6")},"data-v-59268800",null).exports,_={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"printers"},[i("section",{staticClass:"hero is-warning"},[this._m(0,!1,!1),this._v(" "),i("div",{staticClass:"hero-foot"},[i("div",{staticClass:"container"},[i("div",{staticClass:"tabs is-boxed is-medium"},[i("ul",[i("router-link",{attrs:{tag:"li",to:"password"}},[i("a",[this._v("Mot de passe")])])],1)])])])]),this._v(" "),i("div",{staticClass:"container my-container"},[i("transition",{attrs:{name:"fade",mode:"out-in"}},[i("router-view")],1)],1)])},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"hero-body"},[i("div",{staticClass:"container"},[i("h1",{staticClass:"title"},[this._v("\n          Authentification\n        ")]),this._v(" "),i("h2",{staticClass:"subtitle"},[this._v("\n          Gestion des identifiants, mot de passes\n        ")])])])}]},f=s("VU/8")({name:"Printers",data:function(){return{activeTab:0}}},_,!1,function(t){s("OgbY")},"data-v-96cd1200",null).exports,p={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"web"},[i("section",{staticClass:"hero is-info"},[this._m(0,!1,!1),this._v(" "),i("div",{staticClass:"hero-foot"},[i("div",{staticClass:"container"},[i("div",{staticClass:"tabs is-boxed is-medium"},[i("ul",[i("router-link",{attrs:{tag:"li",to:"intranet"}},[i("a",[this._v("Intranet")])]),this._v(" "),i("router-link",{attrs:{tag:"li",to:"webaccess"}},[i("a",[this._v("Accés a internet")])])],1)])])])]),this._v(" "),i("div",{staticClass:"container my-container"},[i("transition",{attrs:{name:"fade",mode:"out-in"}},[i("router-view")],1)],1)])},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"hero-body"},[i("div",{staticClass:"container"},[i("h1",{staticClass:"title"},[this._v("\n          Services WEB\n        ")]),this._v(" "),i("h2",{staticClass:"subtitle"},[this._v("\n          Intranet, accés a internet\n        ")])])])}]},C=s("VU/8")({name:"web",data:function(){return{activeTab:0}}},p,!1,function(t){s("BOGq")},"data-v-59f923be",null).exports,b={render:function(){this.$createElement;this._self._c;return this._m(0,!1,!1)},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"outlook"},[i("div",{staticClass:"tile is-ancestor"},[i("div",{staticClass:"tile is-parent"},[i("div",{staticClass:"tile is-child box"},[i("div",{staticClass:"content"},[i("h1",[this._v("Hello World")]),this._v(" "),i("p",[this._v("Lorem ipsum"),i("sup",[i("a",[this._v("[1]")])]),this._v(" dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque. Sub"),i("sub",[this._v("script")]),this._v(" works as well!")]),this._v(" "),i("h2",[this._v("Second level")]),this._v(" "),i("p",[this._v("Curabitur accumsan turpis pharetra "),i("strong",[this._v("augue tincidunt")]),this._v(" blandit. Quisque condimentum maximus mi, sit amet commodo arcu rutrum id. Proin pretium urna vel cursus venenatis. Suspendisse potenti. Etiam mattis sem rhoncus lacus dapibus facilisis. Donec at dignissim dui. Ut et neque nisl.")]),this._v(" "),i("ul",[i("li",[this._v("In fermentum leo eu lectus mollis, quis dictum mi aliquet.")]),this._v(" "),i("li",[this._v("Morbi eu nulla lobortis, lobortis est in, fringilla felis.")]),this._v(" "),i("li",[this._v("Aliquam nec felis in sapien venenatis viverra fermentum nec lectus.")]),this._v(" "),i("li",[this._v("Ut non enim metus.")])]),this._v(" "),i("h3",[this._v("Third level")]),this._v(" "),i("p",[this._v("Quisque ante lacus, malesuada ac auctor vitae, congue "),i("a",{attrs:{href:"#"}},[this._v("non ante")]),this._v(". Phasellus lacus ex, semper ac tortor nec, fringilla condimentum orci. Fusce eu rutrum tellus.")]),this._v(" "),i("ol",[i("li",[this._v("Donec blandit a lorem id convallis.")]),this._v(" "),i("li",[this._v("Cras gravida arcu at diam gravida gravida.")]),this._v(" "),i("li",[this._v("Integer in volutpat libero.")]),this._v(" "),i("li",[this._v("Donec a diam tellus.")]),this._v(" "),i("li",[this._v("Aenean nec tortor orci.")]),this._v(" "),i("li",[this._v("Quisque aliquam cursus urna, non bibendum massa viverra eget.")]),this._v(" "),i("li",[this._v("Vivamus maximus ultricies pulvinar.")])]),this._v(" "),i("blockquote",[this._v("Ut venenatis, nisl scelerisque sollicitudin fermentum, quam libero hendrerit ipsum, ut blandit est tellus sit amet turpis.")]),this._v(" "),i("p",[this._v("Quisque at semper enim, eu hendrerit odio. Etiam auctor nisl et "),i("em",[this._v("justo sodales")]),this._v(" elementum. Maecenas ultrices lacus quis neque consectetur, et lobortis nisi molestie.")]),this._v(" "),i("p",[this._v("Sed sagittis enim ac tortor maximus rutrum. Nulla facilisi. Donec mattis vulputate risus in luctus. Maecenas vestibulum interdum commodo.")]),this._v(" "),i("dl",[i("dt",[this._v("Web")]),this._v(" "),i("dd",[this._v("The part of the Internet that contains websites and web pages")]),this._v(" "),i("dt",[this._v("HTML")]),this._v(" "),i("dd",[this._v("A markup language for creating web pages")]),this._v(" "),i("dt",[this._v("CSS")]),this._v(" "),i("dd",[this._v("A technology to make HTML look better")])]),this._v(" "),i("p",[this._v("Suspendisse egestas sapien non felis placerat elementum. Morbi tortor nisl, suscipit sed mi sit amet, mollis malesuada nulla. Nulla facilisi. Nullam ac erat ante.")]),this._v(" "),i("h4",[this._v("Fourth level")]),this._v(" "),i("p",[this._v("Nulla efficitur eleifend nisi, sit amet bibendum sapien fringilla ac. Mauris euismod metus a tellus laoreet, at elementum ex efficitur.")])])])])])])}]},g=s("VU/8")({name:"outlook",data:function(){return{}}},b,!1,function(t){s("nN7e")},null,null).exports,w={render:function(){this.$createElement;this._self._c;return this._m(0,!1,!1)},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"webmail"},[i("h2",[this._v("webmail")])])}]},k=s("VU/8")({name:"webmail",data:function(){return{}}},w,!1,function(t){s("5Ahp")},"data-v-01c8f53b",null).exports,E={render:function(){this.$createElement;this._self._c;return this._m(0,!1,!1)},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"app"},[i("h2",[this._v("app")])])}]},$=s("VU/8")({name:"app",data:function(){return{}}},E,!1,function(t){s("wXbu")},"data-v-71625efd",null).exports,x={render:function(){this.$createElement;this._self._c;return this._m(0,!1,!1)},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"sharedfolders"},[i("h2",[this._v("sharedfolders")])])}]},V=s("VU/8")({name:"sharedfolders",data:function(){return{}}},x,!1,function(t){s("VdIR")},"data-v-2b85fc5a",null).exports,F={render:function(){this.$createElement;this._self._c;return this._m(0,!1,!1)},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"datacpnv"},[i("h2",[this._v("datacpnv")])])}]},M=s("VU/8")({name:"datacpnv",data:function(){return{}}},F,!1,function(t){s("kmGN")},"data-v-b099209a",null).exports,U={render:function(){this.$createElement;this._self._c;return this._m(0,!1,!1)},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"smb"},[i("h2",[this._v("smb")])])}]},A=s("VU/8")({name:"smb",data:function(){return{}}},U,!1,function(t){s("pvBz")},"data-v-2ce3fa9c",null).exports,R={render:function(){this.$createElement;this._self._c;return this._m(0,!1,!1)},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"drivers"},[i("h2",[this._v("drivers")])])}]},y=s("VU/8")({name:"drivers",data:function(){return{}}},R,!1,function(t){s("oVM/")},"data-v-0d8537fb",null).exports,q={render:function(){this.$createElement;this._self._c;return this._m(0,!1,!1)},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"add"},[i("h2",[this._v("add")])])}]},S=s("VU/8")({name:"add",data:function(){return{}}},q,!1,function(t){s("9mUS")},"data-v-f66e8b06",null).exports,N={render:function(){this.$createElement;this._self._c;return this._m(0,!1,!1)},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"password"},[i("h2",[this._v("password")])])}]},I=s("VU/8")({name:"password",data:function(){return{}}},N,!1,function(t){s("8EF5")},"data-v-864543a2",null).exports,G={render:function(){this.$createElement;this._self._c;return this._m(0,!1,!1)},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"intranet"},[i("h2",[this._v("intranet")])])}]},T=s("VU/8")({name:"intranet",data:function(){return{}}},G,!1,function(t){s("ye2N")},"data-v-bc49c6da",null).exports,j={render:function(){this.$createElement;this._self._c;return this._m(0,!1,!1)},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"webaccess"},[i("h2",[this._v("webaccess")])])}]},B=s("VU/8")({name:"webaccess",data:function(){return{}}},j,!1,function(t){s("e6rj")},"data-v-e202e47c",null).exports;e.a.use(r.a);var P=new r.a({mode:"history",routes:[{path:"/",name:"Home",component:o},{path:"/mails",name:"Mails",component:u,children:[{path:"outlook",name:"Outlook",component:g},{path:"webmail",name:"WebMail",component:k},{path:"app",name:"App",component:$}]},{path:"/network",name:"Network",component:v,children:[{path:"sharedfolders",name:"SharedFolders",component:V},{path:"datacpnv",name:"Datacpnv",component:M},{path:"smb",name:"Smb",component:A}]},{path:"/printers",name:"Printers",component:m,children:[{path:"drivers",name:"Drivers",component:y},{path:"add",name:"Add",component:S}]},{path:"/authentication",name:"Authentication",component:f,children:[{path:"password",name:"Password",component:I}]},{path:"/web",name:"Web",component:C,children:[{path:"intranet",name:"Intranet",component:T},{path:"webaccess",name:"WebAccess",component:B}]},{path:"*",redirect:"/"}],scrollBehavior:function(t,i,s){return s||{x:0,y:0}},linkActiveClass:"is-active"}),W=s("MMSg"),H=s.n(W);s("doPI");e.a.config.productionTip=!1,e.a.use(H.a),new e.a({el:"#app",router:P,template:"<App/>",components:{App:a}})},OgbY:function(t,i){},VdIR:function(t,i){},doPI:function(t,i){},e6rj:function(t,i){},eM4T:function(t,i){},kmGN:function(t,i){},nN7e:function(t,i){},"oVM/":function(t,i){},pvBz:function(t,i){},wXbu:function(t,i){},ye2N:function(t,i){}},["NHnr"]);