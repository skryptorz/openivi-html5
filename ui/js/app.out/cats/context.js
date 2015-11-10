// Compiled by ClojureScript 1.7.166 {}
goog.provide('cats.context');
goog.require('cljs.core');
goog.require('cats.protocols');
cats.context._STAR_context_STAR_ = null;
cats.context._PLUS_level_default_PLUS_ = (10);
cats.context._PLUS_level_transformer_PLUS_ = (100);
cats.context.throw_ilegal_argument = (function cats$context$throw_ilegal_argument(text){
throw cljs.core.ex_info.call(null,text,cljs.core.PersistentArrayMap.EMPTY);
});
cats.context.not_nil_QMARK_ = cljs.core.comp.call(null,cljs.core.not,cljs.core.nil_QMARK_);
/**
 * Get current context or obtain it from
 *   the provided instance.
 */
cats.context.get_current = (function cats$context$get_current(var_args){
var args6274 = [];
var len__6218__auto___6279 = arguments.length;
var i__6219__auto___6280 = (0);
while(true){
if((i__6219__auto___6280 < len__6218__auto___6279)){
args6274.push((arguments[i__6219__auto___6280]));

var G__6281 = (i__6219__auto___6280 + (1));
i__6219__auto___6280 = G__6281;
continue;
} else {
}
break;
}

var G__6276 = args6274.length;
switch (G__6276) {
case 0:
return cats.context.get_current.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cats.context.get_current.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6274.length)].join('')));

}
});

cats.context.get_current.cljs$core$IFn$_invoke$arity$0 = (function (){
if(cljs.core.truth_(cats.context.not_nil_QMARK_.call(null,cats.context._STAR_context_STAR_))){
return cats.context._STAR_context_STAR_;
} else {
return cats.context.throw_ilegal_argument.call(null,"No context is set and it can not be automatically resolved.");
}
});

cats.context.get_current.cljs$core$IFn$_invoke$arity$1 = (function (param){
if(cljs.core.truth_(cats.context.not_nil_QMARK_.call(null,cats.context._STAR_context_STAR_))){
return cats.context._STAR_context_STAR_;
} else {
if(((!((param == null)))?(((false) || (param.cats$protocols$Contextual$))?true:(((!param.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,cats.protocols.Contextual,param):false)):cljs.core.native_satisfies_QMARK_.call(null,cats.protocols.Contextual,param))){
return cats.protocols._get_context.call(null,param);
} else {
if(((!((param == null)))?(((false) || (param.cats$protocols$Context$))?true:(((!param.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,cats.protocols.Context,param):false)):cljs.core.native_satisfies_QMARK_.call(null,cats.protocols.Context,param))){
return param;
} else {
return cats.context.throw_ilegal_argument.call(null,"No context is set and it can not be automatically resolved.");

}
}
}
});

cats.context.get_current.cljs$lang$maxFixedArity = 1;

//# sourceMappingURL=context.js.map