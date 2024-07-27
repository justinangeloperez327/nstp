import{Q as c,T as d,o as n,f as l,b as a,a as s,u as t,w as m,s as p,e as f,d as _,g as y}from"./app-B6O6sYq6.js";import{a as v,_ as x}from"./InputLabel-Bs4jbW8b.js";import{P as g}from"./PrimaryButton-B5o05fdj.js";import{_ as V}from"./TextInput-umVapjyh.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const h=a("header",null,[a("h2",{class:"text-lg font-medium text-gray-900"},"Profile Information"),a("p",{class:"mt-1 text-sm text-gray-600"}," Update your account's profile information and email address. ")],-1),b={class:"flex items-center gap-4"},N={key:0,class:"text-sm text-gray-600"},T={__name:"UpdateProfileInformationForm",props:{status:{type:String}},setup(S){const i=c().props.auth.user,e=d({username:i.username});return(u,o)=>(n(),l("section",null,[h,a("form",{onSubmit:o[1]||(o[1]=f(r=>t(e).patch(u.route("profile.update")),["prevent"])),class:"mt-6 space-y-6"},[a("div",null,[s(x,{for:"name",value:"Name"}),s(V,{id:"name",type:"text",class:"mt-1 block w-full",modelValue:t(e).username,"onUpdate:modelValue":o[0]||(o[0]=r=>t(e).username=r),required:"",autofocus:"",autocomplete:"name"},null,8,["modelValue"]),s(v,{class:"mt-2",message:t(e).errors.name},null,8,["message"])]),a("div",b,[s(g,{disabled:t(e).processing},{default:m(()=>[_("Save")]),_:1},8,["disabled"]),s(p,{"enter-active-class":"transition ease-in-out","enter-from-class":"opacity-0","leave-active-class":"transition ease-in-out","leave-to-class":"opacity-0"},{default:m(()=>[t(e).recentlySuccessful?(n(),l("p",N,"Saved.")):y("",!0)]),_:1})])],32)]))}};export{T as default};