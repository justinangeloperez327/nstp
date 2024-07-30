import{h as l,T as V,k,o as p,f,b as a,a as s,e as g,u as n,w as _,s as U,d as w,g as C}from"./app-7cg8LbSf.js";import{a as d,_ as c}from"./InputLabel--0G723ms.js";import{P as $}from"./PrimaryButton-CYZ2jxUW.js";import{_ as v}from"./TextInput-DEECwRjZ.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const B=a("header",null,[a("h2",{class:"text-lg font-medium text-gray-900"},"Update Student ID")],-1),N=["src"],T={class:"flex items-center gap-4"},j={key:0,class:"text-sm text-gray-600"},L={__name:"UpdateStudentForm",props:{student:{type:Object,default:{}}},setup(y){const x=l(null),I=l(null),u=l(null),i=l(""),r=y,e=V({student_id:"",section:"",image:""}),b=()=>{e.post(route("student.update"),{onSuccess:()=>{e.reset(),alert("Successfully updated!")},onError:()=>{e.errors.image&&(e.reset("image"),u.value.focus()),e.errors.student_id&&(e.reset("student_id"),x.value.focus()),e.errors.section&&(e.reset("section"),I.value.focus())}})};k(()=>{e.student_id=r.student.student_id,e.section=r.student.section,i.value=`/storage/${r.student.image}`});const S=()=>{u.value.click()},h=m=>{const t=m.target.files[0];t&&(e.image=t,i.value=URL.createObjectURL(t))};return(m,t)=>(p(),f("section",null,[B,a("form",{onSubmit:g(b,["prevent"]),class:"mt-6 space-y-6",method:"POST"},[a("div",null,[s(c,{for:"image",value:"Image"}),a("img",{src:i.value,alt:"Selected Image",class:"w-32 h-32 object-cover rounded-full"},null,8,N),a("button",{type:"button",class:"mt-2 text-sm text-gray-600 underline",onClick:t[0]||(t[0]=g(o=>S(),["prevent"]))},"Change Image"),a("input",{id:"image",ref_key:"imageInput",ref:u,type:"file",class:"hidden",onInput:h},null,544),s(d,{message:n(e).errors.image,class:"mt-2"},null,8,["message"])]),a("div",null,[s(c,{for:"student_id",value:"Student ID"}),s(v,{id:"student_id",type:"text",class:"mt-1 block w-full",modelValue:n(e).student_id,"onUpdate:modelValue":t[1]||(t[1]=o=>n(e).student_id=o)},null,8,["modelValue"]),s(d,{message:n(e).errors.student_id,class:"mt-2"},null,8,["message"])]),a("div",null,[s(c,{for:"section",value:"Section"}),s(v,{id:"section",type:"text",class:"mt-1 block w-full",modelValue:n(e).section,"onUpdate:modelValue":t[2]||(t[2]=o=>n(e).section=o)},null,8,["modelValue"]),s(d,{message:n(e).errors.section,class:"mt-2"},null,8,["message"])]),a("div",T,[s($,{disabled:n(e).processing},{default:_(()=>[w("Update")]),_:1},8,["disabled"]),s(U,{"enter-active-class":"transition ease-in-out","enter-from-class":"opacity-0","leave-active-class":"transition ease-in-out","leave-to-class":"opacity-0"},{default:_(()=>[n(e).recentlySuccessful?(p(),f("p",j,"Updated.")):C("",!0)]),_:1})])],32)]))}};export{L as default};