// Compiled by ClojureScript 1.7.170 {}
goog.provide('adzerk.boot_reload.reload');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.Uri');
goog.require('goog.async.DeferredList');
goog.require('goog.net.jsloader');
adzerk.boot_reload.reload.page_uri = (new goog.Uri(window.location.href));
adzerk.boot_reload.reload.ends_with_QMARK_ = (function adzerk$boot_reload$reload$ends_with_QMARK_(s,pat){
return cljs.core._EQ_.call(null,pat,cljs.core.subs.call(null,s,(cljs.core.count.call(null,s) - cljs.core.count.call(null,pat))));
});
adzerk.boot_reload.reload.reload_page_BANG_ = (function adzerk$boot_reload$reload$reload_page_BANG_(){
return window.location.reload();
});
adzerk.boot_reload.reload.changed_href_QMARK_ = (function adzerk$boot_reload$reload$changed_href_QMARK_(href_or_uri,changed){
if(cljs.core.truth_(href_or_uri)){
var uri = (new goog.Uri(href_or_uri));
var path = adzerk.boot_reload.reload.page_uri.resolve(uri).getPath();
if(cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.filter.call(null,((function (uri,path){
return (function (p1__16626_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,p1__16626_SHARP_,path);
});})(uri,path))
,changed)))){
return uri;
} else {
return null;
}
} else {
return null;
}
});
adzerk.boot_reload.reload.reload_css = (function adzerk$boot_reload$reload$reload_css(changed){
var sheets = document.styleSheets;
var seq__16631 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),sheets.length));
var chunk__16632 = null;
var count__16633 = (0);
var i__16634 = (0);
while(true){
if((i__16634 < count__16633)){
var s = cljs.core._nth.call(null,chunk__16632,i__16634);
var temp__4425__auto___16635 = (sheets[s]);
if(cljs.core.truth_(temp__4425__auto___16635)){
var sheet_16636 = temp__4425__auto___16635;
var temp__4425__auto___16637__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_16636.href,changed);
if(cljs.core.truth_(temp__4425__auto___16637__$1)){
var href_uri_16638 = temp__4425__auto___16637__$1;
sheet_16636.ownerNode.href = href_uri_16638.makeUnique().toString();
} else {
}
} else {
}

var G__16639 = seq__16631;
var G__16640 = chunk__16632;
var G__16641 = count__16633;
var G__16642 = (i__16634 + (1));
seq__16631 = G__16639;
chunk__16632 = G__16640;
count__16633 = G__16641;
i__16634 = G__16642;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__16631);
if(temp__4425__auto__){
var seq__16631__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16631__$1)){
var c__5971__auto__ = cljs.core.chunk_first.call(null,seq__16631__$1);
var G__16643 = cljs.core.chunk_rest.call(null,seq__16631__$1);
var G__16644 = c__5971__auto__;
var G__16645 = cljs.core.count.call(null,c__5971__auto__);
var G__16646 = (0);
seq__16631 = G__16643;
chunk__16632 = G__16644;
count__16633 = G__16645;
i__16634 = G__16646;
continue;
} else {
var s = cljs.core.first.call(null,seq__16631__$1);
var temp__4425__auto___16647__$1 = (sheets[s]);
if(cljs.core.truth_(temp__4425__auto___16647__$1)){
var sheet_16648 = temp__4425__auto___16647__$1;
var temp__4425__auto___16649__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_16648.href,changed);
if(cljs.core.truth_(temp__4425__auto___16649__$2)){
var href_uri_16650 = temp__4425__auto___16649__$2;
sheet_16648.ownerNode.href = href_uri_16650.makeUnique().toString();
} else {
}
} else {
}

var G__16651 = cljs.core.next.call(null,seq__16631__$1);
var G__16652 = null;
var G__16653 = (0);
var G__16654 = (0);
seq__16631 = G__16651;
chunk__16632 = G__16652;
count__16633 = G__16653;
i__16634 = G__16654;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_img = (function adzerk$boot_reload$reload$reload_img(changed){
var images = document.images;
var seq__16659 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),images.length));
var chunk__16660 = null;
var count__16661 = (0);
var i__16662 = (0);
while(true){
if((i__16662 < count__16661)){
var s = cljs.core._nth.call(null,chunk__16660,i__16662);
var temp__4425__auto___16663 = (images[s]);
if(cljs.core.truth_(temp__4425__auto___16663)){
var image_16664 = temp__4425__auto___16663;
var temp__4425__auto___16665__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_16664.src,changed);
if(cljs.core.truth_(temp__4425__auto___16665__$1)){
var href_uri_16666 = temp__4425__auto___16665__$1;
image_16664.src = href_uri_16666.makeUnique().toString();
} else {
}
} else {
}

var G__16667 = seq__16659;
var G__16668 = chunk__16660;
var G__16669 = count__16661;
var G__16670 = (i__16662 + (1));
seq__16659 = G__16667;
chunk__16660 = G__16668;
count__16661 = G__16669;
i__16662 = G__16670;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__16659);
if(temp__4425__auto__){
var seq__16659__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16659__$1)){
var c__5971__auto__ = cljs.core.chunk_first.call(null,seq__16659__$1);
var G__16671 = cljs.core.chunk_rest.call(null,seq__16659__$1);
var G__16672 = c__5971__auto__;
var G__16673 = cljs.core.count.call(null,c__5971__auto__);
var G__16674 = (0);
seq__16659 = G__16671;
chunk__16660 = G__16672;
count__16661 = G__16673;
i__16662 = G__16674;
continue;
} else {
var s = cljs.core.first.call(null,seq__16659__$1);
var temp__4425__auto___16675__$1 = (images[s]);
if(cljs.core.truth_(temp__4425__auto___16675__$1)){
var image_16676 = temp__4425__auto___16675__$1;
var temp__4425__auto___16677__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_16676.src,changed);
if(cljs.core.truth_(temp__4425__auto___16677__$2)){
var href_uri_16678 = temp__4425__auto___16677__$2;
image_16676.src = href_uri_16678.makeUnique().toString();
} else {
}
} else {
}

var G__16679 = cljs.core.next.call(null,seq__16659__$1);
var G__16680 = null;
var G__16681 = (0);
var G__16682 = (0);
seq__16659 = G__16679;
chunk__16660 = G__16680;
count__16661 = G__16681;
i__16662 = G__16682;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_js = (function adzerk$boot_reload$reload$reload_js(changed,p__16685){
var map__16688 = p__16685;
var map__16688__$1 = ((((!((map__16688 == null)))?((((map__16688.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16688.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16688):map__16688);
var on_jsload = cljs.core.get.call(null,map__16688__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),cljs.core.identity);
var js_files = cljs.core.filter.call(null,((function (map__16688,map__16688__$1,on_jsload){
return (function (p1__16683_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,p1__16683_SHARP_,".js");
});})(map__16688,map__16688__$1,on_jsload))
,changed);
if(cljs.core.seq.call(null,js_files)){
goog.async.DeferredList.gatherResults(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,((function (js_files,map__16688,map__16688__$1,on_jsload){
return (function (p1__16684_SHARP_){
return goog.net.jsloader.load(goog.Uri.parse(p1__16684_SHARP_).makeUnique());
});})(js_files,map__16688,map__16688__$1,on_jsload))
,js_files))).addCallbacks(((function (js_files,map__16688,map__16688__$1,on_jsload){
return (function() { 
var G__16690__delegate = function (_){
return on_jsload.call(null);
};
var G__16690 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__16691__i = 0, G__16691__a = new Array(arguments.length -  0);
while (G__16691__i < G__16691__a.length) {G__16691__a[G__16691__i] = arguments[G__16691__i + 0]; ++G__16691__i;}
  _ = new cljs.core.IndexedSeq(G__16691__a,0);
} 
return G__16690__delegate.call(this,_);};
G__16690.cljs$lang$maxFixedArity = 0;
G__16690.cljs$lang$applyTo = (function (arglist__16692){
var _ = cljs.core.seq(arglist__16692);
return G__16690__delegate(_);
});
G__16690.cljs$core$IFn$_invoke$arity$variadic = G__16690__delegate;
return G__16690;
})()
;})(js_files,map__16688,map__16688__$1,on_jsload))
,((function (js_files,map__16688,map__16688__$1,on_jsload){
return (function (e){
return console.error("Load failed:",e.message);
});})(js_files,map__16688,map__16688__$1,on_jsload))
);

if(cljs.core.truth_((window["jQuery"]))){
return jQuery(document).trigger("page-load");
} else {
return null;
}
} else {
return null;
}
});
adzerk.boot_reload.reload.reload_html = (function adzerk$boot_reload$reload$reload_html(changed){
var page_path = adzerk.boot_reload.reload.page_uri.getPath();
var html_path = (cljs.core.truth_(adzerk.boot_reload.reload.ends_with_QMARK_.call(null,page_path,"/"))?[cljs.core.str(page_path),cljs.core.str("index.html")].join(''):page_path);
if(cljs.core.truth_(adzerk.boot_reload.reload.changed_href_QMARK_.call(null,html_path,changed))){
return adzerk.boot_reload.reload.reload_page_BANG_.call(null);
} else {
return null;
}
});
adzerk.boot_reload.reload.group_log = (function adzerk$boot_reload$reload$group_log(title,things_to_log){
console.groupCollapsed(title);

var seq__16697_16701 = cljs.core.seq.call(null,things_to_log);
var chunk__16698_16702 = null;
var count__16699_16703 = (0);
var i__16700_16704 = (0);
while(true){
if((i__16700_16704 < count__16699_16703)){
var t_16705 = cljs.core._nth.call(null,chunk__16698_16702,i__16700_16704);
console.log(t_16705);

var G__16706 = seq__16697_16701;
var G__16707 = chunk__16698_16702;
var G__16708 = count__16699_16703;
var G__16709 = (i__16700_16704 + (1));
seq__16697_16701 = G__16706;
chunk__16698_16702 = G__16707;
count__16699_16703 = G__16708;
i__16700_16704 = G__16709;
continue;
} else {
var temp__4425__auto___16710 = cljs.core.seq.call(null,seq__16697_16701);
if(temp__4425__auto___16710){
var seq__16697_16711__$1 = temp__4425__auto___16710;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16697_16711__$1)){
var c__5971__auto___16712 = cljs.core.chunk_first.call(null,seq__16697_16711__$1);
var G__16713 = cljs.core.chunk_rest.call(null,seq__16697_16711__$1);
var G__16714 = c__5971__auto___16712;
var G__16715 = cljs.core.count.call(null,c__5971__auto___16712);
var G__16716 = (0);
seq__16697_16701 = G__16713;
chunk__16698_16702 = G__16714;
count__16699_16703 = G__16715;
i__16700_16704 = G__16716;
continue;
} else {
var t_16717 = cljs.core.first.call(null,seq__16697_16711__$1);
console.log(t_16717);

var G__16718 = cljs.core.next.call(null,seq__16697_16711__$1);
var G__16719 = null;
var G__16720 = (0);
var G__16721 = (0);
seq__16697_16701 = G__16718;
chunk__16698_16702 = G__16719;
count__16699_16703 = G__16720;
i__16700_16704 = G__16721;
continue;
}
} else {
}
}
break;
}

return console.groupEnd();
});
adzerk.boot_reload.reload.reload = (function adzerk$boot_reload$reload$reload(opts,changed){
adzerk.boot_reload.reload.group_log.call(null,"Reload",changed);

var G__16723 = changed;
adzerk.boot_reload.reload.reload_js.call(null,G__16723,opts);

adzerk.boot_reload.reload.reload_html.call(null,G__16723);

adzerk.boot_reload.reload.reload_css.call(null,G__16723);

adzerk.boot_reload.reload.reload_img.call(null,G__16723);

return G__16723;
});

//# sourceMappingURL=reload.js.map