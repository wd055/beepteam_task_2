(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{172:function(module,__webpack_exports__,__webpack_require__){"use strict";var classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(230),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__(0),__webpack_require__(867),__webpack_require__(31)),EmailItem=function EmailItem(_ref){var email=_ref.email,select=_ref.select,onSelect=_ref.onSelect;return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:classnames__WEBPACK_IMPORTED_MODULE_0___default()("email-item",{"email-item_select":select}),onClick:function toggleChecked(e){onSelect&&onSelect(email.id,!select,e.shiftKey)},children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:"email-item__avatar",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("input",{className:"email-item__checkbox",type:"checkbox",checked:select,onChange:function onChange(){onSelect&&onSelect(email.id,!select)}}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("img",{className:"email-item__img",src:email.avatar,alt:"аватар"})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:"email-item__content ellipsis",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:"email-item__sender nowrap align-center",children:email.sender}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:"email-item__theme nowrap align-center",children:email.theme}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:"email-item__snippet ellipsis align-center",children:email.snippet})]})]})};__webpack_exports__.a=EmailItem;try{EmailItem.displayName="EmailItem",EmailItem.__docgenInfo={description:"",displayName:"EmailItem",props:{email:{defaultValue:null,description:"",name:"email",required:!0,type:{name:"IEmail"}},select:{defaultValue:null,description:"",name:"select",required:!1,type:{name:"boolean"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!1,type:{name:"((email: number, select: boolean, multiple?: boolean) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/EmailItem/EmailItem.tsx#EmailItem"]={docgenInfo:EmailItem.__docgenInfo,name:"EmailItem",path:"src/components/EmailItem/EmailItem.tsx#EmailItem"})}catch(__react_docgen_typescript_loader_error){}},233:function(module){module.exports=JSON.parse('{"a":[{"id":1,"avatar":"http://i.pravatar.cc/300?u=1","sender":"Бединге","theme":"Carolina Hurricanes","snippet":"Люди всё время меня спрашивают: знаю ли я Тайлера Дёрдена?"},{"id":2,"avatar":"http://i.pravatar.cc/300?u=2","sender":"Лиаторп","theme":"Columbus Blue Jackets","snippet":"Шесть месяцев я не мог спать. Когда у тебя бессонница — всё нереально; всё очень далеко от тебя, всё это — копия, снятая с копии, которая в свою очередь снята с копии."},{"id":3,"avatar":"http://i.pravatar.cc/300?u=3","sender":"Хемнэс","theme":"New Jersey Devils","snippet":"Когда-то мы зачитывались порнографией — теперь каталогами IKEA."},{"id":4,"avatar":"http://i.pravatar.cc/300?u=4","sender":"Стольмен","theme":"New York Islanders","snippet":"Я обрёл свободу. Свобода есть утрата всяческих надежд."},{"id":5,"avatar":"http://i.pravatar.cc/300?u=5","sender":"Вемб","theme":"Philadelphia Flyers","snippet":"Каждый вечер я умирал и каждый вечер я рождался заново. Воскресал."},{"id":6,"avatar":"http://i.pravatar.cc/300?u=6","sender":"Бьюрста","theme":"Pittsburgh Penguins","snippet":"После боя шумовой фон жизни становится приглушённым. Тебе всё по силам."},{"id":7,"avatar":"http://i.pravatar.cc/300?u=7","sender":"Сальми","theme":"Washington Capitals","snippet":"Суть бойцовского клуба не в победах и поражениях. Слова тут пустой звук. Истеричные выкрики на неведомых языках, как в церкви пятидесятников. После боя проблем меньше не становилось, но тебе на них было начхать. Каждый чувствовал, что возродился."},{"id":8,"avatar":"http://i.pravatar.cc/300?u=8","sender":"Гру​ндталь","theme":"Boston Bruins","snippet":"Преодолеть страх. Отсечь лишнее. Отвергнуть всё, что не имеет подлинной ценности. И скользить."},{"id":9,"avatar":"http://i.pravatar.cc/300?u=9","sender":"Лиллонген","theme":"Detroit Red Wings","snippet":"Я сплю? Я спал? Тайлер приснился мне? Или я снюсь Тайлеру?"},{"id":10,"avatar":"http://i.pravatar.cc/300?u=10","sender":"Мюскмальва","theme":"Tampa Bay Lightning","snippet":"Меня повсюду преследовало ощущение дежавю. Куда бы я не приходил, мне казалось, что я там уже бывал. Это было похоже на погоню за невидимкой."}]}')},499:function(module,exports,__webpack_require__){__webpack_require__(500),__webpack_require__(656),__webpack_require__(657),__webpack_require__(873),__webpack_require__(869),__webpack_require__(875),__webpack_require__(876),__webpack_require__(874),__webpack_require__(870),__webpack_require__(877),__webpack_require__(871),__webpack_require__(872),__webpack_require__(878),module.exports=__webpack_require__(858)},566:function(module,exports){},657:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(360)},858:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(360).configure)([__webpack_require__(859),__webpack_require__(863)],module,!1)}).call(this,__webpack_require__(210)(module))},859:function(module,exports,__webpack_require__){var map={"./stories/Introduction.stories.mdx":860};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=859},860:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"__page",(function(){return __page}));__webpack_require__(0);var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(57),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(229);__webpack_require__(861),__webpack_require__(862);function _extends(){return _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const layoutProps={};function MDXContent({components:components,...props}){return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)("wrapper",_extends({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.b,{title:"Example/Introduction",mdxType:"Meta"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)("style",null,"\n  .subheading {\n    --mediumdark: '#999999';\n    font-weight: 900;\n    font-size: 13px;\n    color: #999;\n    letter-spacing: 6px;\n    line-height: 24px;\n    text-transform: uppercase;\n    margin-bottom: 12px;\n    margin-top: 40px;\n  }\n\n  .link-list {\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr 1fr;\n    row-gap: 10px;\n  }\n\n  @media (min-width: 620px) {\n    .link-list {\n      row-gap: 20px;\n      column-gap: 20px;\n      grid-template-columns: 1fr 1fr;\n    }\n  }\n\n  @media all and (-ms-high-contrast:none) {\n  .link-list {\n      display: -ms-grid;\n      -ms-grid-columns: 1fr 1fr;\n      -ms-grid-rows: 1fr 1fr;\n    }\n  }\n\n  .link-item {\n    display: block;\n    padding: 20px 30px 20px 15px;\n    border: 1px solid #00000010;\n    border-radius: 5px;\n    transition: background 150ms ease-out, border 150ms ease-out, transform 150ms ease-out;\n    color: #333333;\n    display: flex;\n    align-items: flex-start;\n  }\n\n  .link-item:hover {\n    border-color: #1EA7FD50;\n    transform: translate3d(0, -3px, 0);\n    box-shadow: rgba(0, 0, 0, 0.08) 0 3px 10px 0;\n  }\n\n  .link-item:active {\n    border-color: #1EA7FD;\n    transform: translate3d(0, 0, 0);\n  }\n\n  .link-item strong {\n    font-weight: 700;\n    display: block;\n    margin-bottom: 2px;\n  }\n  \n  .link-item img {\n    height: 40px;\n    width: 40px;\n    margin-right: 15px;\n    flex: none;\n  }\n\n  .link-item span {\n    font-size: 14px;\n    line-height: 20px;\n  }\n\n  .tip {\n    display: inline-block;\n    border-radius: 1em;\n    font-size: 11px;\n    line-height: 12px;\n    font-weight: 700;\n    background: #E7FDD8;\n    color: #66BF3C;\n    padding: 4px 12px;\n    margin-right: 10px;\n    vertical-align: top;\n  }\n\n  .tip-wrapper {\n    font-size: 13px;\n    line-height: 20px;\n    margin-top: 40px;\n    margin-bottom: 40px;\n  }\n\n  .tip-wrapper code {\n    font-size: 12px;\n    display: inline-block;\n  }\n\n  \n"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)("h1",{id:"storybook-тестового-задания"},"Storybook тестового задания"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)("p",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)("a",{parentName:"p",href:"https://github.com/wd055/beepteam_task_2",target:"_blank",rel:"nofollow noopener noreferrer"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)("strong",{parentName:"a"},"GitHub"))))}MDXContent.isMDXComponent=!0;const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Example/Introduction",includeStories:["__page"]},mdxStoryNameToKey={};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:()=>Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.a,{mdxStoryNameToKey:mdxStoryNameToKey,mdxComponentMeta:componentMeta},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(MDXContent,null))},__webpack_exports__.default=componentMeta},861:function(module,exports,__webpack_require__){},862:function(module,exports,__webpack_require__){},863:function(module,exports,__webpack_require__){var map={"./components/Button/Button.stories.tsx":879,"./components/EmailItem/EmailItem.stories.tsx":866,"./components/Emails/Emails.stories.tsx":880,"./components/FullScreenPlaceholder/FullScreenPlaceholder.stories.tsx":881};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=863},864:function(module,exports,__webpack_require__){},866:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default}));var _home_runner_work_beepteam_task_2_beepteam_task_2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(73),_EmailItem__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__(0),__webpack_require__(172)),_data_json__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(233),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(31);__webpack_exports__.default={title:"Example/EmailItem",component:_EmailItem__WEBPACK_IMPORTED_MODULE_2__.a};var Default=function Template(args){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_EmailItem__WEBPACK_IMPORTED_MODULE_2__.a,Object(_home_runner_work_beepteam_task_2_beepteam_task_2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},args))}.bind({});Default.args={email:_data_json__WEBPACK_IMPORTED_MODULE_3__.a[0]},Default.parameters=Object(_home_runner_work_beepteam_task_2_beepteam_task_2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({storySource:{source:"(args) => <EmailItem {...args} />"}},Default.parameters)},867:function(module,exports,__webpack_require__){},868:function(module,exports,__webpack_require__){},878:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters}));var client_api=__webpack_require__(890),esm=__webpack_require__(4),parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.a.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return Object(client_api.c)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(client_api.d)(loader,!1)}));case"parameters":return Object(client_api.e)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(client_api.a)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return Object(client_api.b)(enhancer)}));case"render":return Object(client_api.g)(value);case"globals":case"globalTypes":var v={};return v[key]=value,Object(client_api.e)(v,!1);default:return console.log(key+" was not supported :( !")}}))},879:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default}));var objectSpread2=__webpack_require__(73),classnames=(__webpack_require__(0),__webpack_require__(230)),classnames_default=__webpack_require__.n(classnames),jsx_runtime=(__webpack_require__(864),__webpack_require__(31)),Button_Button_Button=function Button(_ref){var icon=_ref.icon,children=_ref.children,disabled=_ref.disabled,onClick=_ref.onClick;return Object(jsx_runtime.jsxs)("button",{className:classnames_default()("button",{button_disabled:disabled}),disabled:disabled,onClick:onClick,children:[icon&&Object(jsx_runtime.jsx)("div",{className:"button__icon",children:icon}),Object(jsx_runtime.jsx)("div",{className:"button__children",children:children})]})},components_Button_Button=Button_Button_Button;try{Button_Button_Button.displayName="Button",Button_Button_Button.__docgenInfo={description:"",displayName:"Button",props:{icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((e: MouseEvent<Element, MouseEvent>) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/Button.tsx#Button"]={docgenInfo:Button_Button_Button.__docgenInfo,name:"Button",path:"src/components/Button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}var delete_outline=__webpack_require__(888),Default=(__webpack_exports__.default={title:"Example/Button",component:components_Button_Button,argTypes:{icon:{options:["С иконкой","Без иконки"],mapping:{"С иконкой":Object(jsx_runtime.jsx)(delete_outline.a,{}),"Без иконки":null}}}},function Template(args){return Object(jsx_runtime.jsx)(components_Button_Button,Object(objectSpread2.a)({},args))}.bind({}));Default.args={children:"Button"},Default.parameters=Object(objectSpread2.a)({storySource:{source:"(args) => <Button {...args} />"}},Default.parameters)},880:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default}));var objectSpread2=__webpack_require__(73),react=__webpack_require__(0),toConsumableArray=__webpack_require__(145),slicedToArray=__webpack_require__(478),EmailItem=__webpack_require__(172),jsx_runtime=__webpack_require__(31),Emails_Emails=function Emails(_ref){var emails=_ref.emails,selectedEmails=_ref.selectedEmails,setSelectedEmails=_ref.setSelectedEmails,_useState=Object(react.useState)(-1),_useState2=Object(slicedToArray.a)(_useState,2),prevEmail=_useState2[0],setPrevEmail=_useState2[1],onSelect=function onSelect(email,select,multiple){if(selectedEmails&&setSelectedEmails){if(multiple&&-1!==prevEmail){var min=Math.min(prevEmail,email),max=Math.max(prevEmail,email);emails.forEach((function(email){if(email.id>=min&&email.id<=max&&selectedEmails){var _index=selectedEmails.indexOf(email.id);select&&-1===_index?selectedEmails=[].concat(Object(toConsumableArray.a)(selectedEmails),[email.id]):select||-1===_index||(selectedEmails=Object(toConsumableArray.a)(selectedEmails.filter((function(item){return item!==email.id}))))}})),setSelectedEmails(Object(toConsumableArray.a)(selectedEmails))}else{var index=selectedEmails.indexOf(email);select&&-1===index?setSelectedEmails([].concat(Object(toConsumableArray.a)(selectedEmails),[email])):select||-1===index||setSelectedEmails(Object(toConsumableArray.a)(selectedEmails.filter((function(item){return item!==email}))))}setPrevEmail(email)}};return Object(jsx_runtime.jsx)("div",{className:"email-list",children:emails.map((function(email){var _selectedEmails;return Object(jsx_runtime.jsx)(EmailItem.a,{email:email,select:selectedEmails&&-1!==(null===(_selectedEmails=selectedEmails)||void 0===_selectedEmails?void 0:_selectedEmails.indexOf(email.id)),onSelect:selectedEmails&&setSelectedEmails&&onSelect},email.id)}))})},components_Emails_Emails=Emails_Emails;try{Emails_Emails.displayName="Emails",Emails_Emails.__docgenInfo={description:"",displayName:"Emails",props:{emails:{defaultValue:null,description:"",name:"emails",required:!0,type:{name:"IEmail[]"}},selectedEmails:{defaultValue:null,description:"",name:"selectedEmails",required:!1,type:{name:"number[]"}},setSelectedEmails:{defaultValue:null,description:"",name:"setSelectedEmails",required:!1,type:{name:"((emails: number[]) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Emails/Emails.tsx#Emails"]={docgenInfo:Emails_Emails.__docgenInfo,name:"Emails",path:"src/components/Emails/Emails.tsx#Emails"})}catch(__react_docgen_typescript_loader_error){}var data=__webpack_require__(233),Default=(__webpack_exports__.default={title:"Example/Emails",component:components_Emails_Emails},function Template(args){return Object(jsx_runtime.jsx)(components_Emails_Emails,Object(objectSpread2.a)({},args))}.bind({}));Default.args={emails:data.a},Default.parameters=Object(objectSpread2.a)({storySource:{source:"(args) => <Emails {...args} />"}},Default.parameters)},881:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default}));var objectSpread2=__webpack_require__(73),jsx_runtime=(__webpack_require__(0),__webpack_require__(868),__webpack_require__(31)),FullScreenPlaceholder_FullScreenPlaceholder_FullScreenPlaceholder=function FullScreenPlaceholder(_ref){var icon=_ref.icon,children=_ref.children;return Object(jsx_runtime.jsx)("div",{className:"placeholder",children:Object(jsx_runtime.jsxs)("div",{className:"placeholder__content",children:[Object(jsx_runtime.jsx)("div",{className:"placeholder__children",children:icon}),Object(jsx_runtime.jsx)("div",{className:"placeholder__children",children:children})]})})},components_FullScreenPlaceholder_FullScreenPlaceholder=FullScreenPlaceholder_FullScreenPlaceholder_FullScreenPlaceholder;try{FullScreenPlaceholder_FullScreenPlaceholder_FullScreenPlaceholder.displayName="FullScreenPlaceholder",FullScreenPlaceholder_FullScreenPlaceholder_FullScreenPlaceholder.__docgenInfo={description:"",displayName:"FullScreenPlaceholder",props:{icon:{defaultValue:null,description:"",name:"icon",required:!0,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/FullScreenPlaceholder/FullScreenPlaceholder.tsx#FullScreenPlaceholder"]={docgenInfo:FullScreenPlaceholder_FullScreenPlaceholder_FullScreenPlaceholder.__docgenInfo,name:"FullScreenPlaceholder",path:"src/components/FullScreenPlaceholder/FullScreenPlaceholder.tsx#FullScreenPlaceholder"})}catch(__react_docgen_typescript_loader_error){}var mail_outline=__webpack_require__(889),Default=(__webpack_exports__.default={title:"Example/FullScreenPlaceholder",component:components_FullScreenPlaceholder_FullScreenPlaceholder,argTypes:{icon:{options:["С иконкой","Без иконки"],mapping:{"С иконкой":Object(jsx_runtime.jsx)(mail_outline.a,{}),"Без иконки":null},defaultValue:"С иконкой"}}},function Template(args){return Object(jsx_runtime.jsx)(components_FullScreenPlaceholder_FullScreenPlaceholder,Object(objectSpread2.a)({},args))}.bind({}));Default.args={children:"текст под иконкой"},Default.parameters=Object(objectSpread2.a)({storySource:{source:"(args) => (\n\t<FullScreenPlaceholder {...args} />\n)"}},Default.parameters)}},[[499,2,3]]]);