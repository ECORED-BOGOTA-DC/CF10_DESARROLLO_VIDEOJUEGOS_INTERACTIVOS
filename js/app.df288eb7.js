(function(e){function a(a){for(var n,t,c=a[0],s=a[1],d=a[2],l=0,u=[];l<c.length;l++)t=c[l],Object.prototype.hasOwnProperty.call(i,t)&&i[t]&&u.push(i[t][0]),i[t]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);m&&m(a);while(u.length)u.shift()();return r.push.apply(r,d||[]),o()}function o(){for(var e,a=0;a<r.length;a++){for(var o=r[a],n=!0,t=1;t<o.length;t++){var c=o[t];0!==i[c]&&(n=!1)}n&&(r.splice(a--,1),e=s(s.s=o[0]))}return e}var n={},t={app:0},i={app:0},r=[];function c(e){return s.p+"js/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",sintesis:"sintesis",tema1:"tema1",tema2:"tema2",tema3:"tema3",tema4:"tema4"}[e]||e)+"."+{actividad:"fb4bb119","chunk-0206bfa0":"bdfa0da0","chunk-0c047e41":"474edd9a","chunk-13a6037e":"7ea7543c","chunk-18f95272":"ee032482","chunk-25b302c8":"e427670a","chunk-26fc7596":"720ef9f6","chunk-2c06842c":"b9b456f8","chunk-2d0c5615":"c543438f","chunk-2d0e96ec":"eed16829","chunk-2d208d90":"5ddc8300","chunk-2d21d0e2":"e7a7ad5b","chunk-2d22c123":"ca3f9538","chunk-2d2747e2":"a7741052","chunk-2e80bb9a":"35b29020","chunk-319206de":"3116e31a","chunk-32334cb6":"6b65de30","chunk-36769079":"38ad62db","chunk-3c57cd7b":"0db60a85","chunk-4cdd78c0":"9f8c50b3","chunk-4f2d402a":"60e0792c","chunk-515a8379":"d85d498e","chunk-53ccb27e":"3ccc2a28","chunk-55d286b8":"0643df9e","chunk-59974754":"e3f22076","chunk-60cbc06b":"f9ca922d","chunk-659152b8":"55d991fc","chunk-6e1e538a":"10759ab3","chunk-766a929b":"78773ed6","chunk-c796899c":"43246c04","chunk-e8a7823a":"5faeabdd","chunk-f2df7d2c":"6a36155c","chunk-fde47172":"39362287",comple:"a10f80ed",creditos:"d31fec14",glosario:"4377aed4",intro:"312dd9dc",referencias:"9c6e303a",sintesis:"655a555f",tema1:"6ca286da",tema2:"54da9da9",tema3:"45abd917",tema4:"568f8ea4"}[e]+".js"}function s(a){if(n[a])return n[a].exports;var o=n[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.e=function(e){var a=[],o={"chunk-0c047e41":1,"chunk-25b302c8":1,"chunk-26fc7596":1,"chunk-2d2747e2":1,"chunk-32334cb6":1,"chunk-3c57cd7b":1,"chunk-4f2d402a":1,"chunk-515a8379":1,"chunk-59974754":1,"chunk-60cbc06b":1,"chunk-6e1e538a":1,"chunk-766a929b":1,"chunk-f2df7d2c":1,comple:1,creditos:1,glosario:1,referencias:1};t[e]?a.push(t[e]):0!==t[e]&&o[e]&&a.push(t[e]=new Promise((function(a,o){for(var n="css/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",sintesis:"sintesis",tema1:"tema1",tema2:"tema2",tema3:"tema3",tema4:"tema4"}[e]||e)+"."+{actividad:"31d6cfe0","chunk-0206bfa0":"31d6cfe0","chunk-0c047e41":"3babef71","chunk-13a6037e":"31d6cfe0","chunk-18f95272":"31d6cfe0","chunk-25b302c8":"3babef71","chunk-26fc7596":"3babef71","chunk-2c06842c":"31d6cfe0","chunk-2d0c5615":"31d6cfe0","chunk-2d0e96ec":"31d6cfe0","chunk-2d208d90":"31d6cfe0","chunk-2d21d0e2":"31d6cfe0","chunk-2d22c123":"31d6cfe0","chunk-2d2747e2":"3babef71","chunk-2e80bb9a":"31d6cfe0","chunk-319206de":"31d6cfe0","chunk-32334cb6":"3babef71","chunk-36769079":"31d6cfe0","chunk-3c57cd7b":"3babef71","chunk-4cdd78c0":"31d6cfe0","chunk-4f2d402a":"3babef71","chunk-515a8379":"8f9cd922","chunk-53ccb27e":"31d6cfe0","chunk-55d286b8":"31d6cfe0","chunk-59974754":"ac9f3bed","chunk-60cbc06b":"09438581","chunk-659152b8":"31d6cfe0","chunk-6e1e538a":"3ba0a060","chunk-766a929b":"0e0ffd89","chunk-c796899c":"31d6cfe0","chunk-e8a7823a":"31d6cfe0","chunk-f2df7d2c":"3babef71","chunk-fde47172":"31d6cfe0",comple:"e766caee",creditos:"9ca98631",glosario:"a8263125",intro:"31d6cfe0",referencias:"47f89f89",sintesis:"31d6cfe0",tema1:"31d6cfe0",tema2:"31d6cfe0",tema3:"31d6cfe0",tema4:"31d6cfe0"}[e]+".css",i=s.p+n,r=document.getElementsByTagName("link"),c=0;c<r.length;c++){var d=r[c],l=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(l===n||l===i))return a()}var u=document.getElementsByTagName("style");for(c=0;c<u.length;c++){d=u[c],l=d.getAttribute("data-href");if(l===n||l===i)return a()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=a,m.onerror=function(a){var n=a&&a.target&&a.target.src||i,r=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=n,delete t[e],m.parentNode.removeChild(m),o(r)},m.href=i;var f=document.getElementsByTagName("head")[0];f.appendChild(m)})).then((function(){t[e]=0})));var n=i[e];if(0!==n)if(n)a.push(n[2]);else{var r=new Promise((function(a,o){n=i[e]=[a,o]}));a.push(n[2]=r);var d,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=c(e);var u=new Error;d=function(a){l.onerror=l.onload=null,clearTimeout(m);var o=i[e];if(0!==o){if(o){var n=a&&("load"===a.type?"missing":a.type),t=a&&a.target&&a.target.src;u.message="Loading chunk "+e+" failed.\n("+n+": "+t+")",u.name="ChunkLoadError",u.type=n,u.request=t,o[1](u)}i[e]=void 0}};var m=setTimeout((function(){d({type:"timeout",target:l})}),12e4);l.onerror=l.onload=d,document.head.appendChild(l)}return Promise.all(a)},s.m=e,s.c=n,s.d=function(e,a,o){s.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:o})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,a){if(1&a&&(e=s(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var n in e)s.d(o,n,function(a){return e[a]}.bind(null,n));return o},s.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(a,"a",a),a},s.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},s.p="",s.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],l=d.push.bind(d);d.push=a,d=d.slice();for(var u=0;u<d.length;u++)a(d[u]);var m=l;r.push([0,"chunk-vendors"]),o()})({0:function(e,a,o){e.exports=o("56d7")},"417a":function(e,a,o){e.exports=o.p+"img/fondo-banner-principal.09d28ffd.svg"},"52e5":function(e,a,o){e.exports=o.p+"img/cc.58a75e32.svg"},"56d7":function(e,a,o){"use strict";o.r(a);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("68f3"),t=function(){var e=this,a=e.$createElement,o=e._self._c||a;return o("div",{staticClass:"app",attrs:{id:"app"}},[o("Header"),o("div",{staticClass:"contenedor-principal"},[o("AsideMenu"),o("section",{staticClass:"seccion-principal",class:{"seccion-principal--barra-avance-open":!e.menuState}},[o("router-view")],1)],1),o("BarraAvance"),o("Accesibilidad")],1)},i=[],r={name:"App",data:function(){return{menuOpen:!1}},computed:{menuState:function(){return this.$store.getters.isMenuOpen}},mounted:function(){this.$aos.init({offset:100})}},c=r,s=o("2877"),d=Object(s["a"])(c,t,i,!1,null,null,null),l=d.exports,u=(o("d3b7"),o("3ca3"),o("ddb0"),o("b0c0"),o("2b0e")),m=o("8c4f"),f=o("ae58"),p=o("7e58");u["a"].use(m["a"]);var b=new m["a"]({routes:[{path:"/",name:"inicio",component:f["a"]},{path:"/introduccion",name:"introduccion",component:function(){return o.e("intro").then(o.bind(null,"5167"))}},{path:"/curso",name:"curso",component:p["a"],redirect:{name:"tema1"},children:[{path:"tema1",name:"tema1",component:function(){return o.e("tema1").then(o.bind(null,"02c8"))}},{path:"tema2",name:"tema2",component:function(){return o.e("tema2").then(o.bind(null,"fd11"))}},{path:"tema3",name:"tema3",component:function(){return o.e("tema3").then(o.bind(null,"eb46"))}},{path:"tema4",name:"tema4",component:function(){return o.e("tema4").then(o.bind(null,"3eb5"))}}]},{path:"/actividad",name:"actividad",component:function(){return o.e("actividad").then(o.bind(null,"4298"))}},{path:"/glosario",name:"glosario",component:function(){return o.e("glosario").then(o.bind(null,"69a7"))}},{path:"/complementario",name:"complementario",component:function(){return o.e("comple").then(o.bind(null,"dd8c"))}},{path:"/referencias",name:"referencias",component:function(){return o.e("referencias").then(o.bind(null,"64ef"))}},{path:"/sintesis",name:"sintesis",component:function(){return o.e("sintesis").then(o.bind(null,"15a3"))}},{path:"/creditos",name:"creditos",component:function(){return o.e("creditos").then(o.bind(null,"2e81"))}}],scrollBehavior:function(e,a){if(e.hash){var o={selector:e.hash,offset:{y:100},behavior:"smooth"};return e.name===a.name?o:new Promise((function(e){setTimeout((function(){e(o)}),500)}))}setTimeout((function(){window.scrollTo({left:0,top:0,behavior:"auto"})}),100)}}),g=b,h=o("1c2c"),k=(o("a3a0"),{global:{componenteFormativo:"Verificación y ajustes de funcionalidad",descripcionCurso:"El componente de formación presentado describe la forma de verificar el funcionamiento del prototipo digital elaborado, aplicando metodologías ágiles y herramientas propias del motor de Unity.",imagenBannerPrincipal:o("74b5"),fondoBannerPrincipal:o("417a")},menuPrincipal:{menu:[{nombreRuta:"inicio",icono:"fas fa-home",titulo:"Volver al inicio"},{nombreRuta:"introduccion",icono:"fas fa-info-circle",titulo:"Introducción",desarrolloContenidos:!0},{nombreRuta:"tema1",icono:"far fa-file-alt",numero:"1",titulo:"Diseño del ciclo de iteraciones - <em>backlog</em>",desarrolloContenidos:!0},{nombreRuta:"tema2",icono:"far fa-file-alt",numero:"2",titulo:"Prototipado digital con paquetes prefabricados",desarrolloContenidos:!0},{nombreRuta:"tema3",icono:"far fa-file-alt",numero:"3",titulo:"Métricas del videojuego a partir de impresiones de detalles de eventos (<em>debug.log</em>)",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"3.1",titulo:"Métricas de Unity",hash:"t_3_1"},{icono:"far fa-file-alt",numero:"3.2",titulo:"Método <em>debug.log</em>",hash:"t_3_2"}]},{nombreRuta:"tema4",icono:"far fa-file-alt",numero:"4",titulo:"Verificación del videojuego",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"4.1",titulo:"Verificación basada en el modelo SCRUM",hash:"t_4_1"},{icono:"far fa-file-alt",numero:"4.2",titulo:"Verificación basada en el modelo SUM",hash:"t_4_2"},{icono:"far fa-file-alt",numero:"4.3",titulo:"Verificación y ajustes en el entorno de desarrollo (consola, modo edición)",hash:"t_4_3"}]}],subMenu:[{icono:"fas fa-sitemap",titulo:"Síntesis",nombreRuta:"sintesis",desarrolloContenidos:!0},{nombreRuta:"actividad",icono:"far fa-question-circle",titulo:"Actividad didáctica",desarrolloContenidos:!0},{nombreRuta:"glosario",icono:"fas fa-sort-alpha-down",titulo:"Glosario"},{nombreRuta:"complementario",icono:"far fa-folder-open",titulo:"Material complementario"},{icono:"fas fa-book",titulo:"Referencias bibliográficas",nombreRuta:"referencias"},{icono:"fas fa-file-pdf",titulo:"Descargar PDF",download:"downloads/material.pdf"},{icono:"fas fa-download",titulo:"Descargar material",download:"downloads/material.zip"},{icono:"far fa-registered",titulo:"Créditos",nombreRuta:"creditos"}]},complementario:[{tema:"Diseño del ciclo de iteraciones - <em>backlog</em>",referencia:"Deloitte. (s.f). <em>Artefactos Scrum: las 3 herramientas clave de gestión</em>.",tipo:"Página web",link:"https://www2.deloitte.com/es/es/pages/technology/articles/artefactos-scrum.html"},{tema:"Diseño del ciclo de iteraciones - <em>backlog</em>",referencia:"Alicia Raeburn. (2022). <em>Qué es product backlog y guía para hacer uno con ejemplo</em>.",tipo:"Página web",link:"https://asana.com/es/resources/product-backlog"},{tema:"Prototipado digital con paquetes prefabricados",referencia:"Monteserín, P. (s.f). <em>Instanciar un objeto en Unity 3D</em>.",tipo:"Blog",link:"https://pablomonteserin.com/curso/unity-3d/instanciar/"},{tema:"Prototipado digital con paquetes prefabricados",referencia:"Unity. Documentation. (2016). <em>Prefabs</em>.",tipo:"Manual web",link:"https://docs.unity3d.com/es/530/Manual/Prefabs.html"},{tema:"Métricas del videojuego a partir de impresiones de detalles de eventos (<em>debug.log</em>)",referencia:"Unity. Documentation. (2020). <em>Métricas, segmentos y terminología de Analytics</em>.",tipo:"Manual web",link:"https://docs.unity3d.com/es/2019.4/Manual/UnityAnalyticsTerminology.html"},{tema:"Métricas del videojuego a partir de impresiones de detalles de eventos (<em>debug.log</em>)",referencia:"Unity. Documentation. (2021). <em>Depurar</em>.",tipo:"Manual web",link:"https://docs.unity3d.com/ScriptReference/Debug.html"},{tema:"Verificación basada en el modelo SCRUM",referencia:"Trigas, M. (s.f). <em>Metodología Scrum</em>.",tipo:"PDF",link:"http://openaccess.uoc.edu/webapps/o2/bitstream/10609/17885/1/mtrigasTFC0612memoria.pdf"},{tema:"Verificación basada en el modelo SUM",referencia:"SUM. (s.f). <em>SUM para desarrollo de videojuegos</em>.",tipo:"Página web",link:"http://www.gemserk.com/sum/"},{tema:"Verificación y ajustes en entorno de desarrollo (consola, modo edición)",referencia:"Unity Technologies. (2021). <em>Prueba el código de tu juego con Unity Test Framework</em>.",tipo:"Manual web",link:"https://unity.com/es/how-to/unity-test-framework-video-game-development"}],glosario:[{termino:"<em>Backlog</em>",significado:"Listado del trabajo pendiente por realizar y ordenado jerárquicamente por prioridad (García, 2019)."},{termino:"<em>Debug.log</em>",significado:"Método que facilita la depuración mientras se está desarrollando el juego (Unity Documentation, 2021)."},{termino:"Métricas",significado:"Mecanismos para evaluar e identificar la jugabilidad de un videojuego para detectar si es o no jugable (Gonzáles & Gutiérrez, s.f)."},{termino:"SCRUM",significado:"Marco de trabajo que sirve para ayudar a generar valor en la solución de problemas complejos a las personas, equipos de trabajo y organizaciones (Schwaber & Sutherland, 2020)."},{termino:"SUM",significado:"Metodología ágil utilizada para el desarrollo de videojuegos de calidad en menor tiempo y a menor costo, con resultados fácilmente predecibles (Acerenza, et al, 2009)."},{termino:"Verificación",significado:"Proceso de análisis y pruebas en cada fase del desarrollo del software que consiste en revisión de requisitos, diseño, líneas de código y aplicación de pruebas (Hernández & Pérez, 2017)."}],referencias:[{referencia:"Acerenza, N. Et al. (2009). <em>Una metodología para desarrollo de videojuegos</em>. ",link:"https://www.fing.edu.uy/sites/default/files/biblio/22811/asse_2009_16.pdf"},{referencia:"García, R. (2019). <em>¿Qué es el Backlog?</em> ",link:"https://muyagile.com/que-es-el-backlog/"},{referencia:"Gonzáles, J. & Gutiérrez, F. (s.f.). <em>Jugabilidad como medida de calidad en el desarrollo de videojuegos</em>. ",link:"http://ceur-ws.org/Vol-1196/cosecivi14_submission_23.pdf"},{referencia:"Hernández, A. & Pérez, K. (2017). <em>Criterios para verificar y validar mecanismos en el desarrollo de videojuegos</em>.",link:"https://zenodo.org/record/2617300/files/n12a1.pdf"},{referencia:"Schwaber, K. & Stherland, J. (2020). <em>La guía de Scrum</em>. ",link:"https://scrumguides.org/docs/scrumguide/v2020/2020-Scrum-Guide-Spanish-Latin-South-American.pdf"},{referencia:"Unity Documentation. (2021). <em>Depurar</em>. ",link:"https://docs.unity3d.com/ScriptReference/Debug.html"}],creditos:[{titulo:"ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES",autores:[{nombre:"Claudia Patricia Aristizábal Gutiérrez",cargo:"Responsable del equipo",centro:"Dirección General"},{nombre:"Liliana Victoria Morales Gualdrón",cargo:"Responsable de línea de producción",centro:"Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital"}]},{titulo:"CONTENIDO INSTRUCCIONAL",autores:[{nombre:"Olga Lucía Mogollón Carvajal",cargo:"Experta temática",centro:"Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital"},{nombre:"Luz Aída Quintero Velásquez",cargo:"Diseñadora instruccional",centro:"Centro de Gestión Industrial - Regional Distrito Capital"},{nombre:"Silvia Milena Sequeda Cárdenas",cargo:"Evaluadora instruccional",centro:"Centro de Gestión Industrial - Regional Distrito Capital"},{nombre:"Rafael Neftalí Lizcano Reyes",cargo:"Asesor pedagógico Ecosistema RED",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Julia Isabel Roberto",cargo:"Diseñadora y evaluador instruccional",centro:"Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital"},{nombre:"Gloria Amparo López Escudero",cargo:"Adecuadora instruccional - 2023",centro:"Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital"},{nombre:"Andrés Felipe Velandia Espitia",cargo:"Metodólogo para la formación virtual - 2023",centro:"Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital"}]},{titulo:"DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES",autores:[{nombre:"Yuly Andrea Rey Quiñonez",cargo:"Diseñador de contenidos digitales - 2023",centro:"Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital"},{nombre:"Laura Gisselle Murcia Pardo",cargo:"Animador y productor multimedia - 2023",centro:"Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital"},{nombre:"Jhon Jairo Urueta Alvarez",cargo:"Desarrollador full-stack - 2023",centro:"Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital"}]},{titulo:"VALIDACIÓN RECURSO EDUCATIVO DIGITAL",autores:[{nombre:"Carolina Coca Salazar",cargo:"Evaluadora para contenidos inclusivos y accesibles - 2023",centro:"Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital"},{nombre:"Lina Marcela Perez Manchego",cargo:"Validadora de recursos digitales - 2023",centro:"Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital"},{nombre:"Leyson Fabián Castaño Pérez",cargo:"Validador de recursos digitales - 2023",centro:"Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital"}]}],creditosAdicionales:{imagenes:'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',creativeCommons:'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>'}});n["a"].prototype.$config=k;var v=o("9224");n["a"].prototype.$package=v,new n["a"]({router:g,store:h["a"],render:function(e){return e(l)}}).$mount("#app")},"74b5":function(e,a,o){e.exports=o.p+"img/banner-princiapal.9d15d112.png"},9224:function(e){e.exports=JSON.parse('{"name":"sena-base-2021","version":"7.0.0","private":true,"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","lint":"vue-cli-service lint"},"dependencies":{"ecored-base-pkg":"6.0.1","vue":"^2.6.14","vue-router":"^3.5.2","vuex":"^3.4.0"},"devDependencies":{"@vue/cli-plugin-babel":"^4.5.13","@vue/cli-plugin-eslint":"^4.5.13","@vue/cli-plugin-router":"^4.5.13","@vue/cli-plugin-vuex":"^4.5.13","@vue/cli-service":"^4.5.13","@vue/eslint-config-prettier":"^6.0.0","babel-eslint":"^10.1.0","eslint":"^6.7.2","eslint-plugin-prettier":"^3.4.1","eslint-plugin-vue":"^6.2.2","node-sass":"^4.12.0","prettier":"^1.19.1","sass-loader":"^8.0.2","vue-cli-plugin-pug":"^2.0.0","vue-template-compiler":"^2.6.14"}}')},a00a:function(e,a,o){e.exports=o.p+"img/logo-sena.47d29d11.svg"},a3a0:function(e,a,o){}});
//# sourceMappingURL=app.df288eb7.js.map