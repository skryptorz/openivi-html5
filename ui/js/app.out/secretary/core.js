// Compiled by ClojureScript 1.7.170 {}
goog.provide('secretary.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.walk');

/**
 * @interface
 */
secretary.core.IRouteMatches = function(){};

secretary.core.route_matches = (function secretary$core$route_matches(this$,route){
if((!((this$ == null))) && (!((this$.secretary$core$IRouteMatches$route_matches$arity$2 == null)))){
return this$.secretary$core$IRouteMatches$route_matches$arity$2(this$,route);
} else {
var x__5823__auto__ = (((this$ == null))?null:this$);
var m__5824__auto__ = (secretary.core.route_matches[goog.typeOf(x__5823__auto__)]);
if(!((m__5824__auto__ == null))){
return m__5824__auto__.call(null,this$,route);
} else {
var m__5824__auto____$1 = (secretary.core.route_matches["_"]);
if(!((m__5824__auto____$1 == null))){
return m__5824__auto____$1.call(null,this$,route);
} else {
throw cljs.core.missing_protocol.call(null,"IRouteMatches.route-matches",this$);
}
}
}
});


/**
 * @interface
 */
secretary.core.IRouteValue = function(){};

secretary.core.route_value = (function secretary$core$route_value(this$){
if((!((this$ == null))) && (!((this$.secretary$core$IRouteValue$route_value$arity$1 == null)))){
return this$.secretary$core$IRouteValue$route_value$arity$1(this$);
} else {
var x__5823__auto__ = (((this$ == null))?null:this$);
var m__5824__auto__ = (secretary.core.route_value[goog.typeOf(x__5823__auto__)]);
if(!((m__5824__auto__ == null))){
return m__5824__auto__.call(null,this$);
} else {
var m__5824__auto____$1 = (secretary.core.route_value["_"]);
if(!((m__5824__auto____$1 == null))){
return m__5824__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IRouteValue.route-value",this$);
}
}
}
});


/**
 * @interface
 */
secretary.core.IRenderRoute = function(){};

secretary.core.render_route = (function secretary$core$render_route(var_args){
var args13973 = [];
var len__6226__auto___13976 = arguments.length;
var i__6227__auto___13977 = (0);
while(true){
if((i__6227__auto___13977 < len__6226__auto___13976)){
args13973.push((arguments[i__6227__auto___13977]));

var G__13978 = (i__6227__auto___13977 + (1));
i__6227__auto___13977 = G__13978;
continue;
} else {
}
break;
}

var G__13975 = args13973.length;
switch (G__13975) {
case 1:
return secretary.core.render_route.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return secretary.core.render_route.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13973.length)].join('')));

}
});

secretary.core.render_route.cljs$core$IFn$_invoke$arity$1 = (function (this$){
if((!((this$ == null))) && (!((this$.secretary$core$IRenderRoute$render_route$arity$1 == null)))){
return this$.secretary$core$IRenderRoute$render_route$arity$1(this$);
} else {
var x__5823__auto__ = (((this$ == null))?null:this$);
var m__5824__auto__ = (secretary.core.render_route[goog.typeOf(x__5823__auto__)]);
if(!((m__5824__auto__ == null))){
return m__5824__auto__.call(null,this$);
} else {
var m__5824__auto____$1 = (secretary.core.render_route["_"]);
if(!((m__5824__auto____$1 == null))){
return m__5824__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IRenderRoute.render-route",this$);
}
}
}
});

secretary.core.render_route.cljs$core$IFn$_invoke$arity$2 = (function (this$,params){
if((!((this$ == null))) && (!((this$.secretary$core$IRenderRoute$render_route$arity$2 == null)))){
return this$.secretary$core$IRenderRoute$render_route$arity$2(this$,params);
} else {
var x__5823__auto__ = (((this$ == null))?null:this$);
var m__5824__auto__ = (secretary.core.render_route[goog.typeOf(x__5823__auto__)]);
if(!((m__5824__auto__ == null))){
return m__5824__auto__.call(null,this$,params);
} else {
var m__5824__auto____$1 = (secretary.core.render_route["_"]);
if(!((m__5824__auto____$1 == null))){
return m__5824__auto____$1.call(null,this$,params);
} else {
throw cljs.core.missing_protocol.call(null,"IRenderRoute.render-route",this$);
}
}
}
});

secretary.core.render_route.cljs$lang$maxFixedArity = 2;

secretary.core._STAR_config_STAR_ = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"prefix","prefix",-265908465),""], null));
/**
 * Gets a value for *config* at path.
 */
secretary.core.get_config = (function secretary$core$get_config(path){
var path__$1 = ((cljs.core.sequential_QMARK_.call(null,path))?path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));
return cljs.core.get_in.call(null,cljs.core.deref.call(null,secretary.core._STAR_config_STAR_),path__$1);
});
/**
 * Associates a value val for *config* at path.
 */
secretary.core.set_config_BANG_ = (function secretary$core$set_config_BANG_(path,val){
var path__$1 = ((cljs.core.sequential_QMARK_.call(null,path))?path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));
return cljs.core.swap_BANG_.call(null,secretary.core._STAR_config_STAR_,cljs.core.assoc_in,path__$1,val);
});
secretary.core.encode = encodeURIComponent;
if(typeof secretary.core.encode_pair !== 'undefined'){
} else {
/**
 * Given a key and a value return and encoded key-value pair.
 */
secretary.core.encode_pair = (function (){var method_table__6081__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__6082__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__6083__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__6084__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__6085__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"secretary.core","encode-pair"),((function (method_table__6081__auto__,prefer_table__6082__auto__,method_cache__6083__auto__,cached_hierarchy__6084__auto__,hierarchy__6085__auto__){
return (function (p__13980){
var vec__13981 = p__13980;
var k = cljs.core.nth.call(null,vec__13981,(0),null);
var v = cljs.core.nth.call(null,vec__13981,(1),null);
if((cljs.core.sequential_QMARK_.call(null,v)) || (cljs.core.set_QMARK_.call(null,v))){
return new cljs.core.Keyword("secretary.core","sequential","secretary.core/sequential",-347187207);
} else {
if((function (){var or__5168__auto__ = cljs.core.map_QMARK_.call(null,v);
if(or__5168__auto__){
return or__5168__auto__;
} else {
if(!((v == null))){
if(((v.cljs$lang$protocol_mask$partition0$ & (67108864))) || (v.cljs$core$IRecord$)){
return true;
} else {
if((!v.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IRecord,v);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IRecord,v);
}
}
})()){
return new cljs.core.Keyword("secretary.core","map","secretary.core/map",-31086646);
} else {
return null;
}
}
});})(method_table__6081__auto__,prefer_table__6082__auto__,method_cache__6083__auto__,cached_hierarchy__6084__auto__,hierarchy__6085__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__6085__auto__,method_table__6081__auto__,prefer_table__6082__auto__,method_cache__6083__auto__,cached_hierarchy__6084__auto__));
})();
}
secretary.core.key_index = (function secretary$core$key_index(var_args){
var args13984 = [];
var len__6226__auto___13987 = arguments.length;
var i__6227__auto___13988 = (0);
while(true){
if((i__6227__auto___13988 < len__6226__auto___13987)){
args13984.push((arguments[i__6227__auto___13988]));

var G__13989 = (i__6227__auto___13988 + (1));
i__6227__auto___13988 = G__13989;
continue;
} else {
}
break;
}

var G__13986 = args13984.length;
switch (G__13986) {
case 1:
return secretary.core.key_index.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return secretary.core.key_index.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13984.length)].join('')));

}
});

secretary.core.key_index.cljs$core$IFn$_invoke$arity$1 = (function (k){
return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str("[]")].join('');
});

secretary.core.key_index.cljs$core$IFn$_invoke$arity$2 = (function (k,index){
return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str("["),cljs.core.str(index),cljs.core.str("]")].join('');
});

secretary.core.key_index.cljs$lang$maxFixedArity = 2;
cljs.core._add_method.call(null,secretary.core.encode_pair,new cljs.core.Keyword("secretary.core","sequential","secretary.core/sequential",-347187207),(function (p__13991){
var vec__13992 = p__13991;
var k = cljs.core.nth.call(null,vec__13992,(0),null);
var v = cljs.core.nth.call(null,vec__13992,(1),null);
var encoded = cljs.core.map_indexed.call(null,((function (vec__13992,k,v){
return (function (i,x){
var pair = ((cljs.core.coll_QMARK_.call(null,x))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [secretary.core.key_index.call(null,k,i),x], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [secretary.core.key_index.call(null,k),x], null));
return secretary.core.encode_pair.call(null,pair);
});})(vec__13992,k,v))
,v);
return clojure.string.join.call(null,"&",encoded);
}));
cljs.core._add_method.call(null,secretary.core.encode_pair,new cljs.core.Keyword("secretary.core","map","secretary.core/map",-31086646),(function (p__13993){
var vec__13994 = p__13993;
var k = cljs.core.nth.call(null,vec__13994,(0),null);
var v = cljs.core.nth.call(null,vec__13994,(1),null);
var encoded = cljs.core.map.call(null,((function (vec__13994,k,v){
return (function (p__13995){
var vec__13996 = p__13995;
var ik = cljs.core.nth.call(null,vec__13996,(0),null);
var iv = cljs.core.nth.call(null,vec__13996,(1),null);
return secretary.core.encode_pair.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [secretary.core.key_index.call(null,k,cljs.core.name.call(null,ik)),iv], null));
});})(vec__13994,k,v))
,v);
return clojure.string.join.call(null,"&",encoded);
}));
cljs.core._add_method.call(null,secretary.core.encode_pair,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__13997){
var vec__13998 = p__13997;
var k = cljs.core.nth.call(null,vec__13998,(0),null);
var v = cljs.core.nth.call(null,vec__13998,(1),null);
return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str("="),cljs.core.str(secretary.core.encode.call(null,[cljs.core.str(v)].join('')))].join('');
}));
/**
 * Convert a map of query parameters into url encoded string.
 */
secretary.core.encode_query_params = (function secretary$core$encode_query_params(query_params){
return clojure.string.join.call(null,"&",cljs.core.map.call(null,secretary.core.encode_pair,query_params));
});
/**
 * Like js/encodeURIComponent excepts ignore slashes.
 */
secretary.core.encode_uri = (function secretary$core$encode_uri(uri){
return clojure.string.join.call(null,"/",cljs.core.map.call(null,secretary.core.encode,clojure.string.split.call(null,uri,/\//)));
});
secretary.core.decode = decodeURIComponent;
/**
 * Parse a value from a serialized query-string key index. If the
 *   index value is empty 0 is returned, if it's a digit it returns the
 *   js/parseInt value, otherwise it returns the extracted index.
 */
secretary.core.parse_path = (function secretary$core$parse_path(path){
var index_re = /\[([^\]]*)\]*/;
var parts = cljs.core.re_seq.call(null,index_re,path);
return cljs.core.map.call(null,((function (index_re,parts){
return (function (p__14001){
var vec__14002 = p__14001;
var _ = cljs.core.nth.call(null,vec__14002,(0),null);
var part = cljs.core.nth.call(null,vec__14002,(1),null);
if(cljs.core.empty_QMARK_.call(null,part)){
return (0);
} else {
if(cljs.core.truth_(cljs.core.re_matches.call(null,/\d+/,part))){
return parseInt(part);
} else {
return part;

}
}
});})(index_re,parts))
,parts);
});
/**
 * Return a key path for a serialized query-string entry.
 * 
 *   Ex.
 * 
 *  (key-parse "foo[][a][][b]")
 *  ;; => ("foo" 0 "a" 0 "b")
 *   
 */
secretary.core.key_parse = (function secretary$core$key_parse(k){
var re = /([^\[\]]+)((?:\[[^\]]*\])*)?/;
var vec__14004 = cljs.core.re_matches.call(null,re,k);
var _ = cljs.core.nth.call(null,vec__14004,(0),null);
var key = cljs.core.nth.call(null,vec__14004,(1),null);
var path = cljs.core.nth.call(null,vec__14004,(2),null);
var parsed_path = (cljs.core.truth_(path)?secretary.core.parse_path.call(null,path):null);
return cljs.core.cons.call(null,key,parsed_path);
});
/**
 * Like assoc-in but numbers in path create vectors instead of maps.
 * 
 *   Ex.
 * 
 *  (assoc-in-query-params {} ["foo" 0] 1)
 *  ;; => {"foo" [1]}
 * 
 *  (assoc-in-query-params {} ["foo" 0 "a"] 1)
 *  ;; => {"foo" [{"a" 1}]}
 *   
 */
secretary.core.assoc_in_query_params = (function secretary$core$assoc_in_query_params(m,path,v){
var heads = (function (xs){
return cljs.core.map_indexed.call(null,(function (i,_){
return cljs.core.take.call(null,(i + (1)),xs);
}),xs);
});
var hs = heads.call(null,path);
var m__$1 = cljs.core.reduce.call(null,((function (heads,hs){
return (function (m__$1,h){
if((typeof cljs.core.last.call(null,h) === 'number') && (!(cljs.core.vector_QMARK_.call(null,cljs.core.get_in.call(null,m__$1,cljs.core.butlast.call(null,h)))))){
return cljs.core.assoc_in.call(null,m__$1,cljs.core.butlast.call(null,h),cljs.core.PersistentVector.EMPTY);
} else {
return m__$1;
}
});})(heads,hs))
,m,hs);
if((cljs.core.last.call(null,path) === (0))){
return cljs.core.update_in.call(null,m__$1,cljs.core.butlast.call(null,path),cljs.core.conj,v);
} else {
return cljs.core.assoc_in.call(null,m__$1,path,v);
}
});
/**
 * Extract a map of query parameters from a query string.
 */
secretary.core.decode_query_params = (function secretary$core$decode_query_params(query_string){
var parts = clojure.string.split.call(null,query_string,/&/);
var params = cljs.core.reduce.call(null,((function (parts){
return (function (m,part){
var vec__14006 = clojure.string.split.call(null,part,/=/,(2));
var k = cljs.core.nth.call(null,vec__14006,(0),null);
var v = cljs.core.nth.call(null,vec__14006,(1),null);
return secretary.core.assoc_in_query_params.call(null,m,secretary.core.key_parse.call(null,k),secretary.core.decode.call(null,v));
});})(parts))
,cljs.core.PersistentArrayMap.EMPTY,parts);
var params__$1 = clojure.walk.keywordize_keys.call(null,params);
return params__$1;
});
/**
 * Like re-matches but result is a always vector. If re does not
 *   capture matches then it will return a vector of [m m] as if it had a
 *   single capture. Other wise it maintains consistent behavior with
 *   re-matches. 
 */
secretary.core.re_matches_STAR_ = (function secretary$core$re_matches_STAR_(re,s){
var ms = cljs.core.re_matches.call(null,re,s);
if(cljs.core.truth_(ms)){
if(cljs.core.sequential_QMARK_.call(null,ms)){
return ms;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ms,ms], null);
}
} else {
return null;
}
});
secretary.core.re_escape_chars = cljs.core.set.call(null,"\\.*+|?()[]{}$^");
secretary.core.re_escape = (function secretary$core$re_escape(s){
return cljs.core.reduce.call(null,(function (s__$1,c){
if(cljs.core.truth_(secretary.core.re_escape_chars.call(null,c))){
return [cljs.core.str(s__$1),cljs.core.str("\\"),cljs.core.str(c)].join('');
} else {
return [cljs.core.str(s__$1),cljs.core.str(c)].join('');
}
}),"",s);
});
/**
 * Attempt to lex a single token from s with clauses. Each clause is a
 *   pair of [regexp action] where action is a function. regexp is
 *   expected to begin with ^ and contain a single capture. If the
 *   attempt is successful a vector of [s-without-token (action capture)]
 *   is returned. Otherwise the result is nil.
 */
secretary.core.lex_STAR_ = (function secretary$core$lex_STAR_(s,clauses){
return cljs.core.some.call(null,(function (p__14010){
var vec__14011 = p__14010;
var re = cljs.core.nth.call(null,vec__14011,(0),null);
var action = cljs.core.nth.call(null,vec__14011,(1),null);
var temp__4425__auto__ = cljs.core.re_find.call(null,re,s);
if(cljs.core.truth_(temp__4425__auto__)){
var vec__14012 = temp__4425__auto__;
var m = cljs.core.nth.call(null,vec__14012,(0),null);
var c = cljs.core.nth.call(null,vec__14012,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,s,cljs.core.count.call(null,m)),action.call(null,c)], null);
} else {
return null;
}
}),clauses);
});
/**
 * Return a pair of [regex params]. regex is a compiled regular
 *   expression for matching routes. params is a list of route param
 *   names (:*, :id, etc.). 
 */
secretary.core.lex_route = (function secretary$core$lex_route(s,clauses){
var s__$1 = s;
var pattern = "";
var params = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.seq.call(null,s__$1)){
var vec__14015 = secretary.core.lex_STAR_.call(null,s__$1,clauses);
var s__$2 = cljs.core.nth.call(null,vec__14015,(0),null);
var vec__14016 = cljs.core.nth.call(null,vec__14015,(1),null);
var r = cljs.core.nth.call(null,vec__14016,(0),null);
var p = cljs.core.nth.call(null,vec__14016,(1),null);
var G__14017 = s__$2;
var G__14018 = [cljs.core.str(pattern),cljs.core.str(r)].join('');
var G__14019 = cljs.core.conj.call(null,params,p);
s__$1 = G__14017;
pattern = G__14018;
params = G__14019;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.re_pattern.call(null,[cljs.core.str("^"),cljs.core.str(pattern),cljs.core.str("$")].join('')),cljs.core.remove.call(null,cljs.core.nil_QMARK_,params)], null);
}
break;
}
});
/**
 * Given a route return an instance of IRouteMatches.
 */
secretary.core.compile_route = (function secretary$core$compile_route(orig_route){
var clauses = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [/^\*([^\s.:*\/]*)/,(function (v){
var r = "(.*?)";
var p = ((cljs.core.seq.call(null,v))?cljs.core.keyword.call(null,v):new cljs.core.Keyword(null,"*","*",-1294732318));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,p], null);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [/^\:([^\s.:*\/]+)/,(function (v){
var r = "([^,;?/]+)";
var p = cljs.core.keyword.call(null,v);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,p], null);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [/^([^:*]+)/,(function (v){
var r = secretary.core.re_escape.call(null,v);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null);
})], null)], null);
var vec__14025 = secretary.core.lex_route.call(null,orig_route,clauses);
var re = cljs.core.nth.call(null,vec__14025,(0),null);
var params = cljs.core.nth.call(null,vec__14025,(1),null);
if(typeof secretary.core.t_secretary$core14026 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {secretary.core.IRouteValue}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {secretary.core.IRouteMatches}
*/
secretary.core.t_secretary$core14026 = (function (compile_route,orig_route,clauses,vec__14025,re,params,meta14027){
this.compile_route = compile_route;
this.orig_route = orig_route;
this.clauses = clauses;
this.vec__14025 = vec__14025;
this.re = re;
this.params = params;
this.meta14027 = meta14027;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
secretary.core.t_secretary$core14026.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (clauses,vec__14025,re,params){
return (function (_14028,meta14027__$1){
var self__ = this;
var _14028__$1 = this;
return (new secretary.core.t_secretary$core14026(self__.compile_route,self__.orig_route,self__.clauses,self__.vec__14025,self__.re,self__.params,meta14027__$1));
});})(clauses,vec__14025,re,params))
;

secretary.core.t_secretary$core14026.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (clauses,vec__14025,re,params){
return (function (_14028){
var self__ = this;
var _14028__$1 = this;
return self__.meta14027;
});})(clauses,vec__14025,re,params))
;

secretary.core.t_secretary$core14026.prototype.secretary$core$IRouteValue$ = true;

secretary.core.t_secretary$core14026.prototype.secretary$core$IRouteValue$route_value$arity$1 = ((function (clauses,vec__14025,re,params){
return (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.orig_route;
});})(clauses,vec__14025,re,params))
;

secretary.core.t_secretary$core14026.prototype.secretary$core$IRouteMatches$ = true;

secretary.core.t_secretary$core14026.prototype.secretary$core$IRouteMatches$route_matches$arity$2 = ((function (clauses,vec__14025,re,params){
return (function (_,route){
var self__ = this;
var ___$1 = this;
var temp__4425__auto__ = secretary.core.re_matches_STAR_.call(null,self__.re,route);
if(cljs.core.truth_(temp__4425__auto__)){
var vec__14029 = temp__4425__auto__;
var ___$2 = cljs.core.nth.call(null,vec__14029,(0),null);
var ms = cljs.core.nthnext.call(null,vec__14029,(1));
return cljs.core.merge_with.call(null,cljs.core.vector,cljs.core.PersistentArrayMap.EMPTY,cljs.core.partition.call(null,(2),cljs.core.interleave.call(null,self__.params,cljs.core.map.call(null,secretary.core.decode,ms))));
} else {
return null;
}
});})(clauses,vec__14025,re,params))
;

secretary.core.t_secretary$core14026.getBasis = ((function (clauses,vec__14025,re,params){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"compile-route","compile-route",-1479918120,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"orig-route","orig-route",899103121,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given a route return an instance of IRouteMatches."], null)),new cljs.core.Symbol(null,"orig-route","orig-route",899103121,null),new cljs.core.Symbol(null,"clauses","clauses",-1199594528,null),new cljs.core.Symbol(null,"vec__14025","vec__14025",-1488231370,null),new cljs.core.Symbol(null,"re","re",1869207729,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"meta14027","meta14027",1536054827,null)], null);
});})(clauses,vec__14025,re,params))
;

secretary.core.t_secretary$core14026.cljs$lang$type = true;

secretary.core.t_secretary$core14026.cljs$lang$ctorStr = "secretary.core/t_secretary$core14026";

secretary.core.t_secretary$core14026.cljs$lang$ctorPrWriter = ((function (clauses,vec__14025,re,params){
return (function (this__5766__auto__,writer__5767__auto__,opt__5768__auto__){
return cljs.core._write.call(null,writer__5767__auto__,"secretary.core/t_secretary$core14026");
});})(clauses,vec__14025,re,params))
;

secretary.core.__GT_t_secretary$core14026 = ((function (clauses,vec__14025,re,params){
return (function secretary$core$compile_route_$___GT_t_secretary$core14026(compile_route__$1,orig_route__$1,clauses__$1,vec__14025__$1,re__$1,params__$1,meta14027){
return (new secretary.core.t_secretary$core14026(compile_route__$1,orig_route__$1,clauses__$1,vec__14025__$1,re__$1,params__$1,meta14027));
});})(clauses,vec__14025,re,params))
;

}

return (new secretary.core.t_secretary$core14026(secretary$core$compile_route,orig_route,clauses,vec__14025,re,params,cljs.core.PersistentArrayMap.EMPTY));
});
secretary.core.render_route_STAR_ = (function secretary$core$render_route_STAR_(var_args){
var args__6233__auto__ = [];
var len__6226__auto___14033 = arguments.length;
var i__6227__auto___14034 = (0);
while(true){
if((i__6227__auto___14034 < len__6226__auto___14033)){
args__6233__auto__.push((arguments[i__6227__auto___14034]));

var G__14035 = (i__6227__auto___14034 + (1));
i__6227__auto___14034 = G__14035;
continue;
} else {
}
break;
}

var argseq__6234__auto__ = ((((1) < args__6233__auto__.length))?(new cljs.core.IndexedSeq(args__6233__auto__.slice((1)),(0))):null);
return secretary.core.render_route_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6234__auto__);
});

secretary.core.render_route_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,args){
if(((!((obj == null)))?(((false) || (obj.secretary$core$IRenderRoute$))?true:(((!obj.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,secretary.core.IRenderRoute,obj):false)):cljs.core.native_satisfies_QMARK_.call(null,secretary.core.IRenderRoute,obj))){
return cljs.core.apply.call(null,secretary.core.render_route,obj,args);
} else {
return null;
}
});

secretary.core.render_route_STAR_.cljs$lang$maxFixedArity = (1);

secretary.core.render_route_STAR_.cljs$lang$applyTo = (function (seq14030){
var G__14031 = cljs.core.first.call(null,seq14030);
var seq14030__$1 = cljs.core.next.call(null,seq14030);
return secretary.core.render_route_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__14031,seq14030__$1);
});
secretary.core._STAR_routes_STAR_ = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
secretary.core.add_route_BANG_ = (function secretary$core$add_route_BANG_(obj,action){
var obj__$1 = ((typeof obj === 'string')?secretary.core.compile_route.call(null,obj):obj);
return cljs.core.swap_BANG_.call(null,secretary.core._STAR_routes_STAR_,cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [obj__$1,action], null));
});
secretary.core.remove_route_BANG_ = (function secretary$core$remove_route_BANG_(obj){
return cljs.core.swap_BANG_.call(null,secretary.core._STAR_routes_STAR_,(function (rs){
return cljs.core.filterv.call(null,(function (p__14038){
var vec__14039 = p__14038;
var x = cljs.core.nth.call(null,vec__14039,(0),null);
var _ = cljs.core.nth.call(null,vec__14039,(1),null);
return cljs.core.not_EQ_.call(null,x,obj);
}),rs);
}));
});
secretary.core.reset_routes_BANG_ = (function secretary$core$reset_routes_BANG_(){
return cljs.core.reset_BANG_.call(null,secretary.core._STAR_routes_STAR_,cljs.core.PersistentVector.EMPTY);
});
secretary.core.locate_route = (function secretary$core$locate_route(route){
return cljs.core.some.call(null,(function (p__14042){
var vec__14043 = p__14042;
var compiled_route = cljs.core.nth.call(null,vec__14043,(0),null);
var action = cljs.core.nth.call(null,vec__14043,(1),null);
var temp__4425__auto__ = secretary.core.route_matches.call(null,compiled_route,route);
if(cljs.core.truth_(temp__4425__auto__)){
var params = temp__4425__auto__;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"action","action",-811238024),action,new cljs.core.Keyword(null,"params","params",710516235),params,new cljs.core.Keyword(null,"route","route",329891309),compiled_route], null);
} else {
return null;
}
}),cljs.core.deref.call(null,secretary.core._STAR_routes_STAR_));
});
/**
 * Returns original route value as set in defroute when passed a URI path.
 */
secretary.core.locate_route_value = (function secretary$core$locate_route_value(uri){
return secretary.core.route_value.call(null,new cljs.core.Keyword(null,"route","route",329891309).cljs$core$IFn$_invoke$arity$1(secretary.core.locate_route.call(null,uri)));
});
secretary.core.prefix = (function secretary$core$prefix(){
return [cljs.core.str(secretary.core.get_config.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prefix","prefix",-265908465)], null)))].join('');
});
secretary.core.uri_without_prefix = (function secretary$core$uri_without_prefix(uri){
return clojure.string.replace.call(null,uri,cljs.core.re_pattern.call(null,[cljs.core.str("^"),cljs.core.str(secretary.core.prefix.call(null))].join('')),"");
});
/**
 * Ensures that the uri has a leading slash
 */
secretary.core.uri_with_leading_slash = (function secretary$core$uri_with_leading_slash(uri){
if(cljs.core._EQ_.call(null,"/",cljs.core.first.call(null,uri))){
return uri;
} else {
return [cljs.core.str("/"),cljs.core.str(uri)].join('');
}
});
/**
 * Dispatch an action for a given route if it matches the URI path.
 */
secretary.core.dispatch_BANG_ = (function secretary$core$dispatch_BANG_(uri){
var vec__14047 = clojure.string.split.call(null,secretary.core.uri_without_prefix.call(null,uri),/\?/);
var uri_path = cljs.core.nth.call(null,vec__14047,(0),null);
var query_string = cljs.core.nth.call(null,vec__14047,(1),null);
var uri_path__$1 = secretary.core.uri_with_leading_slash.call(null,uri_path);
var query_params = (cljs.core.truth_(query_string)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query-params","query-params",900640534),secretary.core.decode_query_params.call(null,query_string)], null):null);
var map__14048 = secretary.core.locate_route.call(null,uri_path__$1);
var map__14048__$1 = ((((!((map__14048 == null)))?((((map__14048.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14048.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14048):map__14048);
var action = cljs.core.get.call(null,map__14048__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var params = cljs.core.get.call(null,map__14048__$1,new cljs.core.Keyword(null,"params","params",710516235));
var action__$1 = (function (){var or__5168__auto__ = action;
if(cljs.core.truth_(or__5168__auto__)){
return or__5168__auto__;
} else {
return cljs.core.identity;
}
})();
var params__$1 = cljs.core.merge.call(null,params,query_params);
return action__$1.call(null,params__$1);
});
secretary.core.invalid_params = (function secretary$core$invalid_params(params,validations){
return cljs.core.reduce.call(null,(function (m,p__14052){
var vec__14053 = p__14052;
var key = cljs.core.nth.call(null,vec__14053,(0),null);
var validation = cljs.core.nth.call(null,vec__14053,(1),null);
var value = cljs.core.get.call(null,params,key);
if(cljs.core.truth_(cljs.core.re_matches.call(null,validation,value))){
return m;
} else {
return cljs.core.assoc.call(null,m,key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [value,validation], null));
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.partition.call(null,(2),validations));
});
secretary.core.params_valid_QMARK_ = (function secretary$core$params_valid_QMARK_(params,validations){
return cljs.core.empty_QMARK_.call(null,secretary.core.invalid_params.call(null,params,validations));
});
(secretary.core.IRouteMatches["string"] = true);

(secretary.core.route_matches["string"] = (function (this$,route){
return secretary.core.route_matches.call(null,secretary.core.compile_route.call(null,this$),route);
}));

RegExp.prototype.secretary$core$IRouteMatches$ = true;

RegExp.prototype.secretary$core$IRouteMatches$route_matches$arity$2 = (function (this$,route){
var this$__$1 = this;
var temp__4425__auto__ = secretary.core.re_matches_STAR_.call(null,this$__$1,route);
if(cljs.core.truth_(temp__4425__auto__)){
var vec__14054 = temp__4425__auto__;
var _ = cljs.core.nth.call(null,vec__14054,(0),null);
var ms = cljs.core.nthnext.call(null,vec__14054,(1));
return cljs.core.vec.call(null,ms);
} else {
return null;
}
});

cljs.core.PersistentVector.prototype.secretary$core$IRouteMatches$ = true;

cljs.core.PersistentVector.prototype.secretary$core$IRouteMatches$route_matches$arity$2 = (function (p__14055,route){
var vec__14056 = p__14055;
var route_string = cljs.core.nth.call(null,vec__14056,(0),null);
var validations = cljs.core.nthnext.call(null,vec__14056,(1));
var vec__14057 = this;
var route_string__$1 = cljs.core.nth.call(null,vec__14057,(0),null);
var validations__$1 = cljs.core.nthnext.call(null,vec__14057,(1));
var params = secretary.core.route_matches.call(null,secretary.core.compile_route.call(null,route_string__$1),route);
if(cljs.core.truth_(secretary.core.params_valid_QMARK_.call(null,params,validations__$1))){
return params;
} else {
return null;
}
});
(secretary.core.IRouteValue["string"] = true);

(secretary.core.route_value["string"] = (function (this$){
return secretary.core.route_value.call(null,secretary.core.compile_route.call(null,this$));
}));

RegExp.prototype.secretary$core$IRouteValue$ = true;

RegExp.prototype.secretary$core$IRouteValue$route_value$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});

cljs.core.PersistentVector.prototype.secretary$core$IRouteValue$ = true;

cljs.core.PersistentVector.prototype.secretary$core$IRouteValue$route_value$arity$1 = (function (p__14058){
var vec__14059 = p__14058;
var route_string = cljs.core.nth.call(null,vec__14059,(0),null);
var validations = cljs.core.nthnext.call(null,vec__14059,(1));
var vec__14060 = this;
var route_string__$1 = cljs.core.nth.call(null,vec__14060,(0),null);
var validations__$1 = cljs.core.nthnext.call(null,vec__14060,(1));
return cljs.core.vec.call(null,cljs.core.cons.call(null,secretary.core.route_value.call(null,route_string__$1),validations__$1));
});
(secretary.core.IRenderRoute["string"] = true);

(secretary.core.render_route["string"] = (function() {
var G__14066 = null;
var G__14066__1 = (function (this$){
return secretary.core.render_route.call(null,this$,cljs.core.PersistentArrayMap.EMPTY);
});
var G__14066__2 = (function (this$,params){
var map__14061 = params;
var map__14061__$1 = ((((!((map__14061 == null)))?((((map__14061.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14061.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14061):map__14061);
var m = map__14061__$1;
var query_params = cljs.core.get.call(null,map__14061__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
var a = cljs.core.atom.call(null,m);
var path = this$.replace((new RegExp(":[^\\s.:*/]+|\\*[^\\s.:*/]*","g")),((function (map__14061,map__14061__$1,m,query_params,a){
return (function ($1){
var lookup = cljs.core.keyword.call(null,((cljs.core._EQ_.call(null,$1,"*"))?$1:cljs.core.subs.call(null,$1,(1))));
var v = cljs.core.get.call(null,cljs.core.deref.call(null,a),lookup);
var replacement = ((cljs.core.sequential_QMARK_.call(null,v))?(function (){
cljs.core.swap_BANG_.call(null,a,cljs.core.assoc,lookup,cljs.core.next.call(null,v));

return secretary.core.encode_uri.call(null,cljs.core.first.call(null,v));
})()
:(cljs.core.truth_(v)?secretary.core.encode_uri.call(null,v):$1));
return replacement;
});})(map__14061,map__14061__$1,m,query_params,a))
);
var path__$1 = [cljs.core.str(secretary.core.get_config.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prefix","prefix",-265908465)], null))),cljs.core.str(path)].join('');
var temp__4423__auto__ = (function (){var and__5156__auto__ = query_params;
if(cljs.core.truth_(and__5156__auto__)){
return secretary.core.encode_query_params.call(null,query_params);
} else {
return and__5156__auto__;
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var query_string = temp__4423__auto__;
return [cljs.core.str(path__$1),cljs.core.str("?"),cljs.core.str(query_string)].join('');
} else {
return path__$1;
}
});
G__14066 = function(this$,params){
switch(arguments.length){
case 1:
return G__14066__1.call(this,this$);
case 2:
return G__14066__2.call(this,this$,params);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__14066.cljs$core$IFn$_invoke$arity$1 = G__14066__1;
G__14066.cljs$core$IFn$_invoke$arity$2 = G__14066__2;
return G__14066;
})()
);

cljs.core.PersistentVector.prototype.secretary$core$IRenderRoute$ = true;

cljs.core.PersistentVector.prototype.secretary$core$IRenderRoute$render_route$arity$1 = (function (this$){
var this$__$1 = this;
return secretary.core.render_route.call(null,this$__$1,cljs.core.PersistentArrayMap.EMPTY);
});

cljs.core.PersistentVector.prototype.secretary$core$IRenderRoute$render_route$arity$2 = (function (p__14063,params){
var vec__14064 = p__14063;
var route_string = cljs.core.nth.call(null,vec__14064,(0),null);
var validations = cljs.core.nthnext.call(null,vec__14064,(1));
var vec__14065 = this;
var route_string__$1 = cljs.core.nth.call(null,vec__14065,(0),null);
var validations__$1 = cljs.core.nthnext.call(null,vec__14065,(1));
var invalid = secretary.core.invalid_params.call(null,params,validations__$1);
if(cljs.core.empty_QMARK_.call(null,invalid)){
return secretary.core.render_route.call(null,route_string__$1,params);
} else {
throw cljs.core.ex_info.call(null,"Could not build route: invalid params",invalid);
}
});

//# sourceMappingURL=core.js.map