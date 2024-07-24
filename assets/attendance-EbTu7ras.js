import{j as g,k,m as E,s as m,r as I,J as H,c as n,a as t,b as N,w as P,q as l,t as c,F as d,x as u,n as v,d as U,o as r,A as D,y as _,z as T,B as F}from"./index-_wxWPFXE.js";import{u as p}from"./attendance-BJirmHo6.js";import{f as R}from"./format-cwXK75ha.js";const f=g({id:"program",state:()=>({programs:[],loading:!1,error:null,success:null}),actions:{async fetchPrograms(){try{this.loading=!0;const s=await k.get("/program");s.data.data.forEach(h=>{h.time=R(new Date(h.time),"dd MMMM yyyy HH:mm")}),this.programs=s.data.data}catch(s){this.handleError(s)}finally{this.loading=!1}}}}),b=g({id:"shake",state:()=>({shakes:[],loading:!1,error:null,success:null}),actions:{async fetchShakes(){try{this.loading=!0;const s=await k.get("/shake");this.shakes=s.data.data}catch(s){this.handleError(s)}finally{this.loading=!1}}}}),i=s=>(T("data-v-6bbe97b8"),s=s(),F(),s),j={class:"sub-banner-section"},q=U('<section class="banner-section" data-v-6bbe97b8><div class="container" data-v-6bbe97b8><div class="row" data-v-6bbe97b8><div class="col-lg-12 col-md-12 col-sm-12 col-xs-12" data-v-6bbe97b8><div class="banner-section-content" data-v-6bbe97b8><h1 data-v-6bbe97b8>Attendance</h1></div></div></div></div></section>',1),z={class:"container"},C={class:"menu-section"},J=i(()=>t("div",{class:"menu-section-header"}," Add Attendance ",-1)),L={class:"menu-item"},Y={class:"form-group"},G=i(()=>t("label",{for:"program_id"},"Exercise",-1)),K=["value"],O={class:"form-group"},Q=i(()=>t("label",{for:"shake_id"},"Shake",-1)),W=["value"],X={class:"form-group"},Z=i(()=>t("label",{for:"tea"},"Tea",-1)),$=["value"],ee={class:"form-group"},te=i(()=>t("label",{for:"parking_ticket"},"Parking Ticket",-1)),se=["value"],ae=i(()=>t("div",{class:"form-group"},[t("button",{type:"submit",class:"btn-schedule"}," Attendance ")],-1)),oe={__name:"attendance",setup(s){const{loading:h,error:y}=m(p()),{createAttendance:S}=p(),{programs:A}=m(f()),{fetchPrograms:w}=f(),{shakes:x}=m(b()),{fetchShakes:M}=b(),a=I({program_id:"",shake_id:"",tea:"",parking_ticket:""}),V=()=>{S(a.value)},B=()=>{a.value={program_id:"",shake_id:"",tea:"",parking_ticket:""}};return H(()=>{document.title="Attendance",w(),M(),B(),y.value=null}),(ne,o)=>(r(),n(d,null,[t("div",j,[N(D),q]),t("div",z,[t("div",C,[J,t("div",L,[t("form",{onSubmit:P(V,["prevent"])},[t("div",Y,[G,l(t("select",{class:"form-control","onUpdate:modelValue":o[0]||(o[0]=e=>a.value.program_id=e)},[(r(!0),n(d,null,u(v(A),e=>(r(),n("option",{key:e.id,value:e.id},_(e.title),9,K))),128))],512),[[c,a.value.program_id]])]),t("div",O,[Q,l(t("select",{class:"form-control","onUpdate:modelValue":o[1]||(o[1]=e=>a.value.shake_id=e)},[(r(!0),n(d,null,u(v(x),e=>(r(),n("option",{key:e.id,value:e.id},_(e.name),9,W))),128))],512),[[c,a.value.shake_id]])]),t("div",X,[Z,l(t("select",{class:"form-control","onUpdate:modelValue":o[2]||(o[2]=e=>a.value.tea=e)},[(r(),n(d,null,u(["Hot","Cold"],e=>t("option",{key:e,value:e},_(e),9,$)),64))],512),[[c,a.value.tea]])]),t("div",ee,[te,l(t("select",{class:"form-control","onUpdate:modelValue":o[3]||(o[3]=e=>a.value.parking_ticket=e)},[(r(),n(d,null,u(["Yes","No"],e=>t("option",{key:e,value:e},_(e),9,se)),64))],512),[[c,a.value.parking_ticket]])]),ae],32)])])])],64))}},le=E(oe,[["__scopeId","data-v-6bbe97b8"]]);export{le as default};