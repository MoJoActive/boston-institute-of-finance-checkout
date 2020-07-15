(window.webpackJsonpCheckout=window.webpackJsonpCheckout||[]).push([[1],{1487:function(e,t,n){"use strict";var a=n(4),o=n(44),r=n.n(o),i=n(0),s=n.n(i),l=n(428),c=n(429),d=Object(i.forwardRef)((function(e,t){var n=e.additionalClassName,o=e.label,i=e.id,d=a.__rest(e,["additionalClassName","label","id"]);return s.a.createElement(s.a.Fragment,null,s.a.createElement(l.a,a.__assign({},d,{className:r()("form-checkbox","optimizedCheckout-form-checkbox",n),id:i,ref:t,type:"checkbox"})),s.a.createElement(c.a,{htmlFor:i},o))}));t.a=d},1517:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(4),o=n(12);function r(e,t){return!(!e||!t)&&Object(o.isEqual)(i(e),i(t))}function i(e){return Object(o.omit)(a.__assign({},e,{customFields:(e.customFields||[]).filter((function(e){return!!e.fieldValue}))}),["id","shouldSaveAddress","stateOrProvinceCode","type","email"])}},1520:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return r}));var a={address1:"addressLine1",address2:"addressLine2",postalCode:"postCode",stateOrProvince:"province",stateOrProvinceCode:"provinceCode"};function o(e){return""+(a[e]||e)}function r(e){return o(e)+"Input"}},1569:function(e,t,n){"use strict";var a=n(4),o=n(12),r=n(0),i=n.n(r),s=n(432),l=n(1487),c=n(434);t.a=Object(r.memo)((function(e){var t=e.additionalClassName,n=e.labelContent,d=e.onChange,u=e.name,m=e.id,p=Object(r.useCallback)((function(e){var t=e.field;return i.a.createElement(r.Fragment,null,i.a.createElement(l.a,a.__assign({},t,{checked:!!t.value,id:m||t.name,label:n})),i.a.createElement(c.a,{name:u,testId:Object(o.kebabCase)(u)+"-field-error-message"}))}),[m,n,u]);return i.a.createElement(s.a,{additionalClassName:t,name:u,onChange:d,render:p})}))},1570:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(638);function o(e){return Object(a.a)(e.lineItems.physicalItems.filter((function(e){return!e.addedByPromotion})))}},1588:function(e,t,n){},1589:function(e,t,n){"use strict";var a=n(4),o=n(0),r=n.n(o),i=n(1496),s=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={shouldShow:!1},t.handleClick=function(e){t.state.shouldShow?t.handleClose(e.nativeEvent):t.handleOpen(e.nativeEvent)},t.handleOpen=function(){t.state.shouldShow||t.setState({shouldShow:!0},(function(){document.addEventListener("click",t.handleClose)}))},t.handleClose=function(){t.state.shouldShow&&t.setState({shouldShow:!1},(function(){document.removeEventListener("click",t.handleClose)}))},t}return a.__extends(t,e),t.prototype.componentWillUnmount=function(){document.removeEventListener("click",this.handleClose)},t.prototype.render=function(){var e=this,t=this.props,n=t.children,o=t.placement,s=t.dropdown,l=this.state.shouldShow;return r.a.createElement(i.Manager,null,r.a.createElement(i.Reference,null,(function(t){var a=t.ref;return r.a.createElement("div",{className:"dropdownTrigger",onClick:e.handleClick,ref:a},n)})),r.a.createElement(i.Popper,{modifiers:{hide:{enabled:!1},flip:{enabled:!1},preventOverflow:{enabled:!1}},placement:o},(function(e){var t=e.ref,n=e.style;return l?r.a.createElement("div",{className:"dropdownMenu",ref:t,style:a.__assign({},n,{width:"100%",zIndex:1})},s):null})))},t.defaultProps={placement:"bottom-start"},t}(o.Component);t.a=s},1594:function(e,t,n){},1595:function(e,t,n){},1598:function(e,t,n){},1599:function(e,t,n){},1605:function(e,t,n){"use strict";var a=n(4),o=n(44),r=n.n(o),i=n(0),s=n.n(i),l=Object(i.forwardRef)((function(e,t){var n=e.additionalClassName,o=e.testId,i=e.className,l=a.__rest(e,["additionalClassName","testId","className"]);return s.a.createElement("textarea",a.__assign({},l,{className:i||r()("form-input","optimizedCheckout-form-input",n),"data-test":o,ref:t}))}));t.a=l},1606:function(e,t,n){},1614:function(e,t,n){"use strict";var a=n(0),o=n.n(a),r=n(4),i=n(658),s=n(429),l=n(1465),c=n(1520),d=n(115),u=n(12),m=n(656),p=n(434),h=n(154),f=n(1600),g=n.n(f),v=n(44),_=n.n(v),b=n(428),C=Object(a.forwardRef)((function(e,t){var n=e.additionalClassName,a=e.label,i=e.value,l=e.checked,c=e.id,d=r.__rest(e,["additionalClassName","label","value","checked","id"]);return o.a.createElement(o.a.Fragment,null,o.a.createElement(b.a,r.__assign({},d,{checked:l,className:_()("form-radio","optimizedCheckout-form-radio",n),id:c,ref:t,type:"radio",value:i})),o.a.createElement(s.a,{htmlFor:c},a))})),y=n(1487),E=n(1605),O=n(1464),k=Object(a.memo)((function(e){e.additionalClassName;var t=e.fieldType,n=e.id,i=e.name,s=e.onChange,l=void 0===s?u.noop:s,c=e.options,d=e.placeholder,m=e.value,p=r.__rest(e,["additionalClassName","fieldType","id","name","onChange","options","placeholder","value"]),f=Object(a.useCallback)((function(e,t){return l(r.__assign({},t,{target:{name:i,value:e}}))}),[l,i]);switch(t){case h.a.dropdown:return o.a.createElement("select",r.__assign({},p,{className:"form-select optimizedCheckout-form-select","data-test":n+"-select",id:n,name:i,onChange:l,value:null===m?"":m}),d&&o.a.createElement("option",{value:""},d),c&&c.map((function(e){var t=e.label,n=e.value;return o.a.createElement("option",{key:n,value:n},t)})));case h.a.radio:return c&&c.length?o.a.createElement(o.a.Fragment,null,c.map((function(e){var t=e.label,a=e.value;return o.a.createElement(C,r.__assign({},p,{checked:a===m,id:n+"-"+a,key:a,label:t,name:i,onChange:l,testId:n+"-"+a+"-radio",value:a}))}))):null;case h.a.checkbox:return c&&c.length?o.a.createElement(o.a.Fragment,null,c.map((function(e){var t=e.label,a=e.value;return o.a.createElement(y.a,r.__assign({},p,{checked:!!Array.isArray(m)&&m.includes(a),id:n+"-"+a,key:a,label:t,name:i,onChange:l,testId:n+"-"+a+"-checkbox",value:a}))}))):null;case h.a.date:return o.a.createElement(g.a,r.__assign({},p,{autoComplete:"off",calendarClassName:"optimizedCheckout-contentPrimary",className:"form-input optimizedCheckout-form-input",maxDate:p.max?new Date(p.max+" 00:00:00"):void 0,minDate:p.min?new Date(p.min+" 00:00:00"):void 0,name:i,onChange:f,placeholderText:"MM/DD/YYYY",popperClassName:"optimizedCheckout-contentPrimary",selected:Object(u.isDate)(m)?m:void 0}));case h.a.multiline:return o.a.createElement(E.a,r.__assign({},p,{id:n,name:i,onChange:l,testId:n+"-text",type:t,value:m}));default:return o.a.createElement(O.a,r.__assign({},p,{id:n,name:i,onChange:l,testId:n+"-"+(t===h.a.password?"password":"text"),type:t,value:m}))}})),S=(n(1606),Object(a.memo)((function(e){var t=e.testId,n=e.onSelectedAll,r=e.onSelectedNone,s=Object(a.useCallback)((function(e){e.preventDefault(),n()}),[n]),l=Object(a.useCallback)((function(e){e.preventDefault(),r()}),[r]);return o.a.createElement("ul",{className:"multiCheckbox--controls"},o.a.createElement("li",{className:"multiCheckbox--control"},o.a.createElement(i.a,{id:"address.select"})),o.a.createElement("li",{className:"multiCheckbox--control"},o.a.createElement("a",{"data-test":t+"Checkbox-all-button",href:"#",onClick:s},o.a.createElement(i.a,{id:"address.select_all"}))),o.a.createElement("li",{className:"multiCheckbox--control"},o.a.createElement("a",{"data-test":t+"Checkbox-none-button",href:"#",onClick:l},o.a.createElement(i.a,{id:"address.select_none"}))))}))),j=function(e){var t=e.form,n=t.values,r=t.errors,i=e.id,s=e.label,l=e.name,c=e.onChange,f=void 0===c?u.noop:c,g=e.options,v=e.pop,_=e.push,b=e.remove,C=Object(a.useCallback)((function(){var e=Object(d.getIn)(n,l)||[];Object(u.difference)(g.map((function(e){return e.value})),e).forEach((function(e){return _(e)})),f(Object(d.getIn)(n,l))}),[l,f,g,_,n]),y=Object(a.useCallback)((function(){(Object(d.getIn)(n,l)||[]).forEach((function(){return v()})),f(Object(d.getIn)(n,l))}),[l,f,v,n]),E=Object(a.useCallback)((function(e){var t=Object(d.getIn)(n,l)||[],a=e.target,o=a.value;a.checked?_(o):b(t.indexOf(o)),f(Object(d.getIn)(n,l))}),[l,f,_,b,n]);return o.a.createElement(m.a,{hasError:Object(d.getIn)(r,l)&&Object(d.getIn)(r,l).length},s,o.a.createElement(S,{onSelectedAll:C,onSelectedNone:y,testId:i}),o.a.createElement(k,{fieldType:h.a.checkbox,id:i,name:l,onChange:E,options:g,value:Object(d.getIn)(n,l)||[]}),o.a.createElement(p.a,{name:l,testId:Object(u.kebabCase)(l)+"-field-error-message"}))},w=Object(a.memo)((function(e){var t=e.id,n=e.label,i=e.name,s=e.onChange,l=e.options,c=Object(a.useCallback)((function(e){return o.a.createElement(j,r.__assign({id:t,label:n,name:i,onChange:s,options:l},Object(u.pick)(e,["form","pop","push","remove"])))}),[t,n,i,s,l]);return o.a.createElement(d.FieldArray,{name:i,render:c})})),N={address1:"address.address_line_1_label",address2:"address.address_line_2_label",city:"address.city_label",company:"address.company_name_label",countryCode:"address.country_label",firstName:"address.first_name_label",lastName:"address.last_name_label",phone:"address.phone_number_label",postalCode:"address.postal_code_label",stateOrProvince:"address.state_label",stateOrProvinceCode:"address.state_label"},A={address1:"address-line1",address2:"address-line2",city:"address-level2",company:"organization",countryCode:"country",firstName:"given-name",lastName:"family-name",phone:"tel",postalCode:"postal-code",stateOrProvince:"address-level1",stateOrProvinceCode:"address-level1"},x=Object(a.memo)((function(e){var t=e.field,n=t.name,d=t.label,u=t.custom,m=t.required,p=t.options,f=t.max,g=t.min,v=t.maxLength,_=e.fieldType,b=e.parentFieldName,C=e.onChange,y=e.placeholder,E=n,O=Object(c.a)(E),S=b?b+"."+n:n,j=N[n],x=Object(a.useMemo)((function(){return o.a.createElement(s.a,{htmlFor:O},u?d:j&&o.a.createElement(i.a,{id:j}),!m&&o.a.createElement(o.a.Fragment,null,"",o.a.createElement("small",{className:"optimizedCheckout-contentSecondary"},o.a.createElement(i.a,{id:"common.optional_text"}))))}),[u,O,d,m,j]),I=Object(a.useCallback)((function(e){var t=e.field;return o.a.createElement(k,r.__assign({},t,{autoComplete:A[E],fieldType:_,id:O,max:f,maxLength:v||void 0,min:g,options:p&&p.items,placeholder:y||p&&p.helperLabel,rows:p&&p.rows}))}),[E,O,_,f,v,g,p,y]);return o.a.createElement("div",{className:"dynamic-form-field dynamic-form-field--"+Object(c.b)(E)},_===h.a.checkbox?o.a.createElement(w,{id:O,label:x,name:S,onChange:C,options:p&&p.items||[]}):o.a.createElement(l.a,{input:I,label:x,name:S,onChange:C}))}));function I(e){var t=e.fieldType,n=e.type,a=e.secret;return"text"===t?"integer"===n?h.a.number:a?h.a.password:h.a.text:t}t.a=function(e){var t=e.field,n=e.parentFieldName,a=e.placeholder,r=e.onChange;return o.a.createElement(x,{field:t,fieldType:I(t),onChange:r,parentFieldName:n,placeholder:a})}},1621:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(4),o=n(12);function r(e){var t=e.customFields,n=a.__rest(e,["customFields"]),r=e.shouldSaveAddress,i=[];return Object(o.forIn)(t,(function(e,t){var n;if(Object(o.isDate)(e)){var a=Object(o.padStart)((e.getMonth()+1).toString(),2,"0"),r=Object(o.padStart)(e.getDate().toString(),2,"0");n=e.getFullYear()+"-"+a+"-"+r}else n=e;i.push({fieldId:t,fieldValue:n})})),a.__assign({},n,{shouldSaveAddress:r,customFields:i})}},1622:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(12),o=n(1517),r=n(600);function i(e,t,n){return!(!e||!Object(r.a)(e,n))&&Object(a.some)(t,(function(t){return Object(o.a)(t,e)}))}},1623:function(e,t,n){"use strict";var a=n(4),o=n(0),r=n.n(o),i=n(1456),s=n(658),l=n(1589),c=n(1517),d=(n(1588),n(1429)),u=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.handleSelectAddress=function(e){var n=t.props,a=n.onSelectAddress,o=n.selectedAddress;Object(c.a)(o,e)||a(e)},t.handleUseNewAddress=function(){var e=t.props,n=e.selectedAddress;(0,e.onUseNewAddress)(n)},t}return a.__extends(t,e),t.prototype.render=function(){var e=this.props,t=e.addresses,n=e.selectedAddress;return r.a.createElement("div",{className:"form-field"},r.a.createElement("div",{className:"dropdown--select",role:"combobox"},r.a.createElement(l.a,{dropdown:r.a.createElement(m,{addresses:t,onSelectAddress:this.handleSelectAddress,onUseNewAddress:this.handleUseNewAddress,selectedAddress:n})},r.a.createElement(p,{addresses:t,selectedAddress:n}))))},t}(o.PureComponent),m=function(e){var t=e.addresses,n=e.onSelectAddress,a=e.onUseNewAddress,o=e.selectedAddress;return r.a.createElement("ul",{className:"dropdown-menu instrumentSelect-dropdownMenu",id:"addressDropdown"},r.a.createElement("li",{className:"dropdown-menu-item dropdown-menu-item--select"},r.a.createElement("a",{href:"#",onClick:Object(i.a)((function(){return a(o)}))},r.a.createElement(s.a,{id:"address.enter_address_action"}))),t.map((function(e){return r.a.createElement("li",{className:"dropdown-menu-item dropdown-menu-item--select",key:e.id},r.a.createElement("a",{href:"#",onClick:Object(i.a)((function(){return n(e)}))},r.a.createElement(d.a,{address:e})))})))},p=function(e){var t=e.selectedAddress;return r.a.createElement("a",{className:"button dropdown-button dropdown-toggle--select",href:"#",id:"addressToggle",onClick:Object(i.a)()},t?r.a.createElement(d.a,{address:t}):r.a.createElement(s.a,{id:"address.enter_address_action"}))};t.a=Object(o.memo)(u)},1624:function(e,t,n){"use strict";var a=n(4),o=n(0),r=n.n(o),i=n(658),s=n(429),l=n(1464),c=n(1463),d=n(1462),u=n(1465);t.a=function(){var e=Object(o.useCallback)((function(e){return r.a.createElement(s.a,{hidden:!0,htmlFor:e},r.a.createElement(i.a,{id:"shipping.order_comment_label"}))}),[]),t=Object(o.useCallback)((function(e){var t=e.field;return r.a.createElement(l.a,a.__assign({},t,{autoComplete:"off",maxLength:2e3}))}),[]),n=Object(o.useMemo)((function(){return r.a.createElement(c.a,null,r.a.createElement(i.a,{id:"shipping.order_comment_label"}))}),[]);return r.a.createElement(d.a,{legend:n,testId:"checkout-shipping-comments"},r.a.createElement(u.a,{input:t,label:e,name:"orderComment"}))}},1625:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(655),o=n(1460);function r(e){return(e&&e.payments?e.payments:[]).find((function(e){return!Object(a.a)(e)&&!Object(o.a)(e)&&!!e.providerId}))}},1631:function(e,t,n){"use strict";var a=n(4),o=n(75),r=n(12),i=n(0),s=n.n(i),l=n(658),c=n(312),d=n(1462),u=n(1569),m=function(){function e(e){var t=e.address_components,n=e.name;this._name=n,this._address=t}return e.prototype.getState=function(){return this._get("administrative_area_level_1","short_name")},e.prototype.getStreet=function(){return this._name},e.prototype.getStreet2=function(){return""},e.prototype.getCity=function(){return this._get("postal_town","long_name")||this._get("locality","long_name")||this._get("neighborhood","short_name")},e.prototype.getCountry=function(){return this._get("country","short_name")},e.prototype.getPostCode=function(){return this._get("postal_code","short_name")},e.prototype._get=function(e,t){var n=this._address&&this._address.find((function(t){return-1!==t.types.indexOf(e)}));return n?n[t]:""},e}(),p=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return a.__extends(t,e),t.prototype.getState=function(){return this._get("administrative_area_level_2","long_name")},t.prototype.getStreet2=function(){return this._get("locality","long_name")},t}(m),h=function(){function e(){}return e.create=function(e){var t=new m(e);switch(t.getCountry()){case"GB":return new p(e)}return t},e}();var f=n(1465),g=n(1520),v=n(1596),_=n.n(v),b=(n(1598),function(e){var t=e.children;return s.a.createElement("div",{className:"popover"},t)});n(1599);function C(e,t){var n=["popoverList-item"];return e===t&&n.push("is-active"),n.join(" ")}var y,E=Object(i.memo)((function(e){var t=e.highlightedIndex,n=void 0===t?-1:t,o=e.testId,r=e.getItemProps,i=void 0===r?function(e){return e}:r,l=e.menuProps,c=void 0===l?{}:l,d=e.items;return d&&d.length?s.a.createElement("ul",a.__assign({className:"popoverList","data-test":o},c),d.map((function(e,t){return s.a.createElement("li",a.__assign({className:C(n,t),"data-test":o&&o+"-item"},i({key:e.id,index:t,item:e}),{key:t}),e.content)}))):null})),O=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.stateReducer=function(e,n){var o=t.props.onChange;switch(n.type){case _.a.stateChangeTypes.blurInput:case _.a.stateChangeTypes.blurButton:case _.a.stateChangeTypes.mouseUp:case _.a.stateChangeTypes.touchEnd:return a.__assign({},n,{inputValue:e.inputValue});case _.a.stateChangeTypes.changeInput:return n.inputValue!==e.inputValue&&o&&o(n.inputValue||"",e.isOpen),n;case _.a.stateChangeTypes.keyDownEnter:default:return n}},t.handleStateChange=function(e){var n=e.isOpen,a=e.inputValue,o=t.props.onToggleOpen,i=void 0===o?r.noop:o;void 0!==n&&i({isOpen:n,inputValue:a||""})},t}return a.__extends(t,e),t.prototype.render=function(){var e=this,t=this.props,n=t.inputProps,o=t.initialValue,i=t.initialHighlightedIndex,l=t.items,c=t.children,d=t.onSelect,u=t.listTestId;return s.a.createElement(_.a,{defaultHighlightedIndex:0,initialHighlightedIndex:i,initialInputValue:o,itemToString:this.itemToString,onChange:d,onStateChange:this.handleStateChange,stateReducer:this.stateReducer},(function(t){var o=t.isOpen,i=t.getInputProps,d=t.getMenuProps,m=t.getItemProps,p=t.highlightedIndex;return s.a.createElement("div",null,s.a.createElement("input",a.__assign({},i(),n)),o&&!!l.length&&s.a.createElement(b,null,s.a.createElement(E,{getItemProps:m,highlightedIndex:Object(r.isNumber)(p)?p:-1,items:l.map((function(t){return e.toPopoverItem(t)})),menuProps:d(),testId:u}),c))}))},t.prototype.toPopoverItem=function(e){return a.__assign({},e,{content:this.highlightItem(e)})},t.prototype.highlightItem=function(e){if(!e.highlightedSlices||!e.highlightedSlices.length)return e.label;var t=0,n=0;return e.highlightedSlices.reduce((function(a,o,r){var l=e.label,c=o.offset,d=o.length,u=c-t;return u&&(a.push(s.a.createElement(i.Fragment,{key:n},l.substr(t,u))),n+=1),t=c+d,a.push(s.a.createElement("strong",{key:n},l.substr(c,d))),n+=1,r===(e.highlightedSlices||[]).length-1&&(a.push(s.a.createElement(i.Fragment,{key:n},l.substr(t))),n+=1),a}),[])},t.prototype.itemToString=function(e){return e&&e.value||""},t}(i.PureComponent),k=(n(1595),n(670)),S=function(){function e(){this._scriptLoader=Object(k.getScriptLoader)()}return e.prototype.loadMapsSdk=function(e){var t=this;return this._googleAutoComplete?this._googleAutoComplete:(this._googleAutoComplete=new Promise((function(n,a){var o=["language=en","key="+e,"libraries=places","callback=initAutoComplete"].join("&");window.initAutoComplete=function(){(function(e){var t=e;return Boolean(t.google&&t.google.maps&&t.google.maps.places)})(window)&&n(window.google.maps),a()},t._scriptLoader.loadScript("//maps.googleapis.com/maps/api/js?"+o).catch((function(e){throw t._googleAutoComplete=void 0,e}))})),this._googleAutoComplete)},e}();var j=function(){function e(e,t){void 0===t&&(y||(y=new S),t=y),this._apiKey=e,this._scriptLoader=t}return e.prototype.getAutocompleteService=function(){return this._autocompletePromise||(this._autocompletePromise=this._scriptLoader.loadMapsSdk(this._apiKey).then((function(e){if(!e.places.AutocompleteService)throw new Error("`AutocompleteService` is undefined");return new e.places.AutocompleteService}))),this._autocompletePromise},e.prototype.getPlacesServices=function(){var e=document.createElement("div");return this._placesPromise||(this._placesPromise=this._scriptLoader.loadMapsSdk(this._apiKey).then((function(t){if(!t.places.PlacesService)throw new Error("`PlacesService` is undefined");return new t.places.PlacesService(e)}))),this._placesPromise},e}(),w=function(e){function t(t){var n=e.call(this,t)||this;return n.onSelect=function(e){var t=n.props,a=t.fields,o=t.onSelect,i=void 0===o?r.noop:o,s=t.nextElement;n.googleAutocompleteService.getPlacesServices().then((function(t){t.getDetails({placeId:e.id,fields:a||["address_components","name"]},(function(t){s&&s.focus(),i(t,e)}))}))},n.onChange=function(e){var t=n.props,a=t.isAutocompleteEnabled,o=t.onChange;if((void 0===o?r.noop:o)(e,!1),!a)return n.resetAutocomplete();n.setAutocomplete(e),n.setItems(e)},n.googleAutocompleteService=new j(t.apiKey),n.state={items:[],autoComplete:"off"},n}return a.__extends(t,e),t.prototype.render=function(){var e=this.props,t=e.initialValue,n=e.onToggleOpen,o=void 0===n?r.noop:n,i=e.inputProps,l=void 0===i?{}:i,c=this.state,d=c.autoComplete,u=c.items;return s.a.createElement(O,{initialHighlightedIndex:0,initialValue:t,inputProps:a.__assign({},l,{autoComplete:d}),items:u,listTestId:"address-autocomplete-suggestions",onChange:this.onChange,onSelect:this.onSelect,onToggleOpen:o},s.a.createElement("div",{className:"co-googleAutocomplete-footer"}))},t.prototype.setItems=function(e){var t=this;if(e){var n=this.props,a=n.componentRestrictions,o=n.types;this.googleAutocompleteService.getAutocompleteService().then((function(n){n.getPlacePredictions({input:e,types:o||["geocode"],componentRestrictions:a},(function(e){return t.setState({items:t.toAutocompleteItems(e)})}))}))}else this.setState({items:[]})},t.prototype.resetAutocomplete=function(){this.setState({items:[],autoComplete:"off"})},t.prototype.setAutocomplete=function(e){this.setState(a.__assign({},this.state,{autoComplete:e&&e.length?"nope":"off"}))},t.prototype.toAutocompleteItems=function(e){return(e||[]).map((function(e){return{label:e.description,value:e.structured_formatting.main_text,highlightedSlices:e.matched_substrings,id:e.place_id}}))},t}(i.PureComponent),N=Object(i.memo)((function(e){var t=e.field.name,n=e.countryCode,a=e.supportedCountries,o=e.parentFieldName,r=e.nextElement,c=e.apiKey,d=e.onSelect,u=e.onChange,m=e.onToggleOpen,p=o?o+"."+t:t,h=Object(i.useMemo)((function(){return s.a.createElement(l.a,{id:"address.address_line_1_label"})}),[]),v=Object(i.useMemo)((function(){return{className:"form-input optimizedCheckout-form-input",id:Object(g.a)(t)}}),[t]),_=Object(i.useCallback)((function(e){var t=e.field;return s.a.createElement(w,{apiKey:c,componentRestrictions:n?{country:n}:void 0,initialValue:t.value,inputProps:v,isAutocompleteEnabled:!!n&&a.indexOf(n)>-1,nextElement:r,onChange:u,onSelect:d,onToggleOpen:m})}),[c,n,v,r,u,d,m,a]);return s.a.createElement("div",{className:"dynamic-form-field dynamic-form-field--addressLineAutocomplete"},s.a.createElement(f.a,{input:_,labelContent:h,name:p}))})),A=(n(1594),n(1614)),x=n(154),I={countryCode:"address.select_country_action",stateOrProvince:"address.select_state_action",stateOrProvinceCode:"address.select_state_action"},P="address1",F=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.containerRef=Object(i.createRef)(),t.handleDynamicFormFieldChange=Object(o.memoize)((function(e){return function(n){t.syncNonFormikValue(e,n)}})),t.handleAutocompleteChange=function(e,n){n||t.syncNonFormikValue(P,e)},t.handleAutocompleteSelect=function(e,n){var o=n.value,i=t.props,s=i.countries,l=i.setFieldValue,c=void 0===l?r.noop:l,d=i.onChange,u=void 0===d?r.noop:d,m=function(e,t){if(void 0===t&&(t=[]),!e||!e.address_components)return{};var n=h.create(e),o=n.getState(),r=n.getCountry(),i=t&&t.find((function(e){return r===e.code})),s=n.getStreet2();return a.__assign({address2:s,city:n.getCity(),countryCode:r,postalCode:n.getPostCode()},o?function(e,t){void 0===t&&(t=[]);var n=t.find((function(t){var n=t.code,a=t.name;return n===e||a===e}));if(!n)return{stateOrProvince:t.length?"":e,stateOrProvinceCode:""};return{stateOrProvince:n.name,stateOrProvinceCode:n.code}}(o,i&&i.subdivisions):{})}(e,s);Object(r.forIn)(m,(function(e,t){c(t,e),u(t,e)})),o&&t.syncNonFormikValue(P,o)},t.syncNonFormikValue=function(e,n){var a=t.props,o=a.formFields,i=a.setFieldValue,s=void 0===i?r.noop:i,l=a.onChange,c=void 0===l?r.noop:l,d=o.filter((function(e){return e.custom&&e.fieldType===x.a.date})).map((function(e){return e.name}));(e===P||d.indexOf(e)>-1)&&s(e,n),c(e,n)},t}return a.__extends(t,e),t.prototype.componentDidMount=function(){var e=this.containerRef.current;e&&(this.nextElement=e.querySelector('[autocomplete="address-line2"]'))},t.prototype.render=function(){var e=this,t=this.props,n=t.formFields,a=t.fieldName,o=t.language,r=t.countriesWithAutocomplete,i=t.countryCode,c=t.googleMapsApiKey,m=t.onAutocompleteToggle,p=t.shouldShowSaveAddress;return s.a.createElement(s.a.Fragment,null,s.a.createElement(d.a,null,s.a.createElement("div",{className:"checkout-address",ref:this.containerRef},n.map((function(t){var n=t.name,l=I[n];return"address1"===n&&c&&r?s.a.createElement(N,{apiKey:c,countryCode:i,field:t,key:t.id,nextElement:e.nextElement||void 0,onChange:e.handleAutocompleteChange,onSelect:e.handleAutocompleteSelect,onToggleOpen:m,parentFieldName:a,supportedCountries:r}):s.a.createElement(A.a,{field:t,key:t.id+"-"+t.name,onChange:e.handleDynamicFormFieldChange(n),parentFieldName:t.custom?a?a+".customFields":"customFields":a,placeholder:l&&o.translate(l)})})))),p&&s.a.createElement(u.a,{labelContent:s.a.createElement(l.a,{id:"address.save_in_addressbook"}),name:a?a+".shouldSaveAddress":"shouldSaveAddress"}))},t}(i.Component);t.a=Object(c.a)(F)}}]);
//# sourceMappingURL=billing~shipping-fcc62e60.js.map