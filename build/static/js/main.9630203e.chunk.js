(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{18:function(e,t,a){},19:function(e,t,a){e.exports=a(39)},24:function(e,t,a){},25:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(12),l=a.n(r),i=(a(24),a(6)),c=(a(25),a(40)),u=a(41),m=a(42),s=a(43),d=a(44),p=a(45),E=a(46),h=function(e){var t=Object(n.useState)(!1),a=Object(i.a)(t,2),r=a[0],l=a[1];return o.a.createElement("div",null,o.a.createElement("div",{className:"title"},"UNIVERSAL ORLANDO ATTRACTION GUIDE! "),o.a.createElement(c.a,{className:"bar",light:!0,expand:"md"},o.a.createElement(u.a,null),o.a.createElement(m.a,{onClick:function(){l(!r)}}),o.a.createElement(s.a,{isOpen:r,navbar:!0},o.a.createElement(d.a,{className:"ml-auto",navbar:!0},o.a.createElement(p.a,null,o.a.createElement(E.a,{id:"logout",onClick:e.clickLogout},"Log Out"))))))},g=(a(35),a(36),a(51)),v=a(52),f=a(53),R=a(47),T=a(48),y=a(49),S=a(50),k=(a(18),"");switch(window.location.universalapi){case"localhost":k="http:localhost:3000";break;case"kp-universalclient.herokuapp.com":k="https://kp-universalapi.herokuapp.com/ "}var b=k,O=function(e){var t=Object(n.useState)(""),a=Object(i.a)(t,2),r=a[0],l=a[1],c=Object(n.useState)(""),u=Object(i.a)(c,2),m=u[0],s=u[1];return o.a.createElement("div",null,o.a.createElement("h1",null,"Login"),o.a.createElement(R.a,{id:"login",onSubmit:function(t){fetch("".concat(b,"/user/login"),{method:"POST",body:JSON.stringify({user:{email:r,password:m}}),headers:new Headers({"Content-Type":"application/json"})}).then((function(e){return e.json()})).then((function(t){e.setToken(t.sessionToken)})),t.preventDefault()}},o.a.createElement(T.a,null,o.a.createElement(y.a,{htmlFor:"email"},"Email"),o.a.createElement(S.a,{onChange:function(e){return l(e.target.value)},name:"email",value:r})),o.a.createElement(T.a,null,o.a.createElement(y.a,{htmlFor:"password"},"Password"),o.a.createElement(S.a,{type:"password",onChange:function(e){return s(e.target.value)},name:"password",value:m})),o.a.createElement(E.a,{id:"button",type:"submit"},"Login")))},F=function(e){var t=Object(n.useState)(""),a=Object(i.a)(t,2),r=a[0],l=a[1],c=Object(n.useState)(""),u=Object(i.a)(c,2),m=u[0],s=u[1];return o.a.createElement("div",null,o.a.createElement("h1",null,"Sign Up"),o.a.createElement(R.a,{id:"signup",onSubmit:function(t){fetch("".concat(b,"/api/user"),{method:"POST",body:JSON.stringify({user:{email:r,passwordhash:m}}),headers:new Headers({"Content-Type":"application/json"})}).then((function(e){return e.json()})).then((function(t){e.setToken(t.sessionToken)})),t.preventDefault()}},o.a.createElement(T.a,null,o.a.createElement(y.a,{htmlFor:"email"},"Email"),o.a.createElement(S.a,{onChange:function(e){return l(e.target.value)},name:"email",value:r})),o.a.createElement(T.a,null,o.a.createElement(y.a,{htmlFor:"password"},"Password"),o.a.createElement(S.a,{type:"password",onChange:function(e){return s(e.target.value)},name:"password",value:m})),o.a.createElement(E.a,{id:"button",type:"submit"},"Signup")))},w=function(e){return o.a.createElement(g.a,{id:"auth-con"},o.a.createElement(v.a,null,o.a.createElement(f.a,{md:"12"},o.a.createElement(F,{setToken:e.setToken}))),o.a.createElement(v.a,null,o.a.createElement(f.a,{md:"12"},o.a.createElement(O,{setToken:e.setToken}))))},C=(a(37),function(e){var t=Object(n.useState)(""),a=Object(i.a)(t,2),r=a[0],l=a[1],c=Object(n.useState)(""),u=Object(i.a)(c,2),m=u[0],s=u[1],d=Object(n.useState)(""),p=Object(i.a)(d,2),h=p[0],g=p[1],v=Object(n.useState)(""),f=Object(i.a)(v,2),k=f[0],b=f[1],O=Object(n.useState)(""),F=Object(i.a)(O,2),w=F[0],C=F[1];return o.a.createElement("div",null,o.a.createElement("h3",null,"Create a Rating"),o.a.createElement(R.a,{onSubmit:function(t){fetch("http://localhost:3000/api/rating",{method:"POST",body:JSON.stringify({rating:{nameOfRide:r,date:m,waitTime:h,rideRating:k,comments:w}}),headers:new Headers({"Content-Type":"application/json",Authorization:e.token})}).then((function(e){return e.json()})).then((function(t){console.log(t),l(""),s(""),g(""),b(""),C(""),e.fetchRatings()})),t.preventDefault()}},o.a.createElement(T.a,null,o.a.createElement(y.a,{htmlFor:"nameOfRide"}),o.a.createElement(S.a,{type:"select",id:"nameOfRide",name:"nameOfRide",value:r,onChange:function(e){return l(e.target.value)},placeholder:"Name of Ride"},o.a.createElement("option",null,"Attraction Name"),o.a.createElement("option",{value:"Revenge of the Mummy"},"Revenge of the Mummy"),o.a.createElement("option",{value:"Kang and Kodos' Twirl 'n' Hurl"},"Kang and Kodos' Twirl 'n' Hurl"),o.a.createElement("option",{value:"Woody Woodpecker's Nuthouse Coaster"},"Woody Woodpecker's Nuthouse Coaster"),o.a.createElement("option",{value:"MEN IN BLACK Alien Attack"},"MEN IN BLACK Alien Attack"),o.a.createElement("option",{value:"E.T. Adventure"},"E.T. Adventure"),o.a.createElement("option",{value:"Transformers: The Ride-3D"},"Transformers: The Ride-3D"),o.a.createElement("option",{value:"Hogwarts Express: Kings Cross Station"},"Hogwarts Express: Kings Cross Station"),o.a.createElement("option",{value:"The Simpson Ride"},"The Simpson Ride"),o.a.createElement("option",{value:"Hollywood Rip Ride Rockit"},"Hollywood Rip Ride Rockit"),o.a.createElement("option",{value:"Despicable Me Minion Mayhem"},"Despicable Me Minion Mayhem"),o.a.createElement("option",{value:"Harry Potter and the Escape from Gringotts"},"Harry Potter and the Escape from Gringotts"),o.a.createElement("option",{value:"Race Through New York Starring Jimmy Fallon"},"Race Through New York Starring Jimmy Fallon"),o.a.createElement("option",{value:"Shrek 4-D"},"Shrek 4-D"),o.a.createElement("option",{value:"Fast and Furious - Supercharged"},"Fast and Furious - Supercharged"),o.a.createElement("option",{value:"Caro-Suess-el"},"Caro-Suess-el"),o.a.createElement("option",{value:"Dudley Do-Right's Ripsaw Falls"},"Dudley Do-Right's Ripsaw Falls"),o.a.createElement("option",{value:"Hogwarts Express: Hogsmeade Station"},"Hogwarts Express: Hogsmeade Station"),o.a.createElement("option",{value:"The Amazing Adventures of Spider-Man"},"The Amazing Adventures of Spider-Man"),o.a.createElement("option",{value:"Storm Force Accelatron"},"Storm Force Accelatron"),o.a.createElement("option",{value:"One Fish, Two Fish, Red Fish, Blue Fish"},"One Fish, Two Fish, Red Fish, Blue Fish"),o.a.createElement("option",{value:"The Cat in the Hat"},"The Cat in the Hat"),o.a.createElement("option",{value:"Pteranodon Flyers"},"Pteranodon Flyers"),o.a.createElement("option",{value:"The Incredible Hulk Coaster"},"The Incredible Hulk Coaster"),o.a.createElement("option",{value:"Doctor Doom's Fearfall"},"Doctor Doom's Fearfall"),o.a.createElement("option",{value:"The High in the Sky Seuss Trolly Train Ride!"},"The High in the Sky Seuss Trolly Train Ride!"),o.a.createElement("option",{value:"Jurassic Park River Adventure"},"Jurassic Park River Adventure"),o.a.createElement("option",{value:"Popeye and Bluto's Bilge-Rat Barges"},"Popeye and Bluto's Bilge-Rat Barges"),o.a.createElement("option",{value:"Harry Potter and the Forbidden Journey"},"Harry Potter and the Forbidden Journey"),o.a.createElement("option",{value:"Flight of the Hippogriff"},"Flight of the Hippogriff"),o.a.createElement("option",{value:"Poseidon's Fury"},"Poseidon's Fury"),o.a.createElement("option",{value:"Skull Island: Reign of Kong"},"Skull Island: Reign of Kong"),o.a.createElement("option",{value:"Hagrids Magical Creatures Motorbike Adventure"},"Hagrids Magical Creatures Motorbike Adventure"))),o.a.createElement(T.a,null,o.a.createElement(y.a,{htmlFor:"date"}),o.a.createElement(S.a,{name:"trip-start",type:"date",id:"start",value:m,onChange:function(e){return s(e.target.value)},min:"2000-01-01",max:"2020-12-31"})),o.a.createElement(T.a,null,o.a.createElement(y.a,{htmlFor:"waitTime"}),o.a.createElement(S.a,{name:"waitTime",value:h,onChange:function(e){return g(e.target.value)},placeholder:"Minutes Waited"})),o.a.createElement(T.a,null,o.a.createElement(S.a,{type:"select",id:"riderrating",name:"RiderRating",value:k,onChange:function(e){return b(e.target.value)},placeholder:"Attraction Rating"},o.a.createElement("option",null,"Attraction Rating"),o.a.createElement("option",{value:"1"},"1"),o.a.createElement("option",{value:"2"},"2"),o.a.createElement("option",{value:"3"},"3"),o.a.createElement("option",{value:"4"},"4"),o.a.createElement("option",{value:"5"},"5"))),o.a.createElement(T.a,null,o.a.createElement(y.a,{htmlFor:"comments"}),o.a.createElement(S.a,{name:"comments",value:w,onChange:function(e){return C(e.target.value)},placeholder:"Comments"})),o.a.createElement(E.a,{type:"submit"},"Submit Rating")))}),H=a(54),A=function(e){return o.a.createElement("div",null,o.a.createElement("h3",null,"Rating History"),o.a.createElement("hr",null),o.a.createElement(H.a,{striped:!0},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,"Attraction Name"),o.a.createElement("th",null,"Date"),o.a.createElement("th",null,"Wait Time In Minutes"),o.a.createElement("th",null,"Attraction Rating"),o.a.createElement("th",null,"Comments"))),o.a.createElement("tbody",null,e.riderratings.map((function(t,a){return o.a.createElement("tr",{key:a},o.a.createElement("td",null,t.nameOfRide),o.a.createElement("td",null,t.date),o.a.createElement("td",null,t.waitTime),o.a.createElement("td",null,t.rideRating),o.a.createElement("td",null,t.comments),o.a.createElement("td",null,o.a.createElement(E.a,{color:"info",onClick:function(){e.editUpdateRating(t),e.updateOn()}},"Update Rating"),o.a.createElement(E.a,{color:"danger",onClick:function(){!function(t){fetch("http://localhost:3000/api/rating/".concat(t.id),{method:"DELETE",headers:new Headers({"Content-Type":"application/json",Authorization:e.token})}).then((function(){return e.fetchRatings()}))}(t)}},"Delete Rating")))})))))},j=a(57),D=a(55),M=a(56),N=function(e){var t=Object(n.useState)(e.ratingToUpdate.nameOfRide),a=Object(i.a)(t,2),r=a[0],l=a[1],c=Object(n.useState)(e.ratingToUpdate.date),u=Object(i.a)(c,2),m=u[0],s=u[1],d=Object(n.useState)(e.ratingToUpdate.waitTime),p=Object(i.a)(d,2),h=p[0],g=p[1],v=Object(n.useState)(e.ratingToUpdate.rideRating),f=Object(i.a)(v,2),k=f[0],b=f[1],O=Object(n.useState)(e.ratingToUpdate.comments),F=Object(i.a)(O,2),w=F[0],C=F[1];return o.a.createElement(j.a,{isOpen:!0},o.a.createElement(D.a,null,"Rate An Attraction"),o.a.createElement(M.a,null,o.a.createElement(R.a,{onSubmit:function(t,a){t.preventDefault(),fetch("http://localhost:3000/api/rating/".concat(e.ratingToUpdate.id),{method:"PUT",body:JSON.stringify({rating:{nameOfRide:r,date:m,waitTime:h,rideRating:k,comments:w}}),headers:new Headers({"Content-Type":"application/json",Authorization:e.token})}).then((function(t){e.fetchRatings(),e.updateOff()}))}},o.a.createElement(T.a,null,o.a.createElement(y.a,{htmlFor:"nameOfRide"},"Change Name:"),o.a.createElement(S.a,{type:"select",id:"nameOfRide",name:"nameOfRide",value:r,onChange:function(e){return l(e.target.value)},placeholder:"Name of Ride"},o.a.createElement("option",null,"Attraction Name"),o.a.createElement("option",{value:"Revenge of the Mummy"},"Revenge of the Mummy"),o.a.createElement("option",{value:"Kang and Kodos' Twirl 'n' Hurl"},"Kang and Kodos' Twirl 'n' Hurl"),o.a.createElement("option",{value:"Woody Woodpecker's Nuthouse Coaster"},"Woody Woodpecker's Nuthouse Coaster"),o.a.createElement("option",{value:"MEN IN BLACK Alien Attack"},"MEN IN BLACK Alien Attack"),o.a.createElement("option",{value:"E.T. Adventure"},"E.T. Adventure"),o.a.createElement("option",{value:"Transformers: The Ride-3D"},"Transformers: The Ride-3D"),o.a.createElement("option",{value:"Hogwarts Express: Kings Cross Station"},"Hogwarts Express: Kings Cross Station"),o.a.createElement("option",{value:"The Simpson Ride"},"The Simpson Ride"),o.a.createElement("option",{value:"Hollywood Rip Ride Rockit"},"Hollywood Rip Ride Rockit"),o.a.createElement("option",{value:"Despicable Me Minion Mayhem"},"Despicable Me Minion Mayhem"),o.a.createElement("option",{value:"Harry Potter and the Escape from Gringotts"},"Harry Potter and the Escape from Gringotts"),o.a.createElement("option",{value:"Race Through New York Starring Jimmy Fallon"},"Race Through New York Starring Jimmy Fallon"),o.a.createElement("option",{value:"Shrek 4-D"},"Shrek 4-D"),o.a.createElement("option",{value:"Fast and Furious - Supercharged"},"Fast and Furious - Supercharged"),o.a.createElement("option",{value:"Caro-Suess-el"},"Caro-Suess-el"),o.a.createElement("option",{value:"Dudley Do-Right's Ripsaw Falls"},"Dudley Do-Right's Ripsaw Falls"),o.a.createElement("option",{value:"Hogwarts Express: Hogsmeade Station"},"Hogwarts Express: Hogsmeade Station"),o.a.createElement("option",{value:"The Amazing Adventures of Spider-Man"},"The Amazing Adventures of Spider-Man"),o.a.createElement("option",{value:"Storm Force Accelatron"},"Storm Force Accelatron"),o.a.createElement("option",{value:"One Fish, Two Fish, Red Fish, Blue Fish"},"One Fish, Two Fish, Red Fish, Blue Fish"),o.a.createElement("option",{value:"The Cat in the Hat"},"The Cat in the Hat"),o.a.createElement("option",{value:"Pteranodon Flyers"},"Pteranodon Flyers"),o.a.createElement("option",{value:"The Incredible Hulk Coaster"},"The Incredible Hulk Coaster"),o.a.createElement("option",{value:"Doctor Doom's Fearfall"},"Doctor Doom's Fearfall"),o.a.createElement("option",{value:"The High in the Sky Seuss Trolly Train Ride!"},"The High in the Sky Seuss Trolly Train Ride!"),o.a.createElement("option",{value:"Jurassic Park River Adventure"},"Jurassic Park River Adventure"),o.a.createElement("option",{value:"Popeye and Bluto's Bilge-Rat Barges"},"Popeye and Bluto's Bilge-Rat Barges"),o.a.createElement("option",{value:"Harry Potter and the Forbidden Journey"},"Harry Potter and the Forbidden Journey"),o.a.createElement("option",{value:"Flight of the Hippogriff"},"Flight of the Hippogriff"),o.a.createElement("option",{value:"Poseidon's Fury"},"Poseidon's Fury"),o.a.createElement("option",{value:"Skull Island: Reign of Kong"},"Skull Island: Reign of Kong"),o.a.createElement("option",{value:"Hagrids Magical Creatures Motorbike Adventure"},"Hagrids Magical Creatures Motorbike Adventure"))),o.a.createElement(T.a,null,o.a.createElement(y.a,{htmlFor:"date"},"Change Date:"),o.a.createElement(S.a,{name:"trip-start",type:"date",id:"start",value:m,onChange:function(e){return s(e.target.value)},min:"2000-01-01",max:"2020-12-31"})),o.a.createElement(T.a,null,o.a.createElement(y.a,{htmlFor:"waitTime"},"Edit Wait Time:"),o.a.createElement(S.a,{name:"waitTime",value:h,onChange:function(e){return g(e.target.value)}})),o.a.createElement(T.a,null,o.a.createElement(y.a,{htmlFor:"rideRating"},"Edit Rating:"),o.a.createElement(S.a,{type:"select",id:"riderrating",name:"RiderRating",value:k,onChange:function(e){return b(e.target.value)},placeholder:"Ride Rating"},o.a.createElement("option",null,"Ride Rating"),o.a.createElement("option",{value:"1"},"1"),o.a.createElement("option",{value:"2"},"2"),o.a.createElement("option",{value:"3"},"3"),o.a.createElement("option",{value:"4"},"4"),o.a.createElement("option",{value:"5"},"5"))),o.a.createElement(T.a,null,o.a.createElement(y.a,{htmlFor:"comments"},"Edit Comments:"),o.a.createElement(S.a,{name:"comments",value:w,onChange:function(e){return C(e.target.value)}})),o.a.createElement(E.a,{id:"button",type:"submit"},"Update Your Rating!"))))},P=function(e){var t=Object(n.useState)([]),a=Object(i.a)(t,2),r=a[0],l=a[1],c=Object(n.useState)(!1),u=Object(i.a)(c,2),m=u[0],s=u[1],d=Object(n.useState)({}),p=Object(i.a)(d,2),E=p[0],h=p[1],R=function(){fetch("http://localhost:3000/api/rating",{method:"GET",headers:new Headers({"Content-Type":"application/json",Authorization:e.token})}).then((function(e){return e.json()})).then((function(e){l(e)}))};Object(n.useEffect)((function(){R()}),[]);return o.a.createElement(g.a,null,o.a.createElement(v.a,null,o.a.createElement(f.a,{md:"3"},o.a.createElement(C,{fetchRatings:R,token:e.token})),o.a.createElement(f.a,{md:"8"},o.a.createElement(A,{riderratings:r,editUpdateRating:function(e){h(e)},updateOn:function(){s(!0)},fetchRatings:R,token:e.token})),m?o.a.createElement(N,{ratingToUpdate:E,updateOff:function(){s(!1)},token:e.token,fetchRatings:R}):o.a.createElement(o.a.Fragment,null)))};var B=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],r=t[1];Object(n.useEffect)((function(){localStorage.getItem("token")&&r(localStorage.getItem("token"))}),[]);var l=function(e){localStorage.setItem("token",e),r(e)},c=function(){localStorage.clear(),r("")};return o.a.createElement("div",null,o.a.createElement(h,{clickLogout:c}),a===localStorage.getItem("token")?o.a.createElement(P,{clickLogout:c,token:a}):o.a.createElement(w,{setToken:l}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(38);l.a.render(o.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.9630203e.chunk.js.map