function each_keyword(proc) {
    $.each(keywords, function(i, key){
        proc(key);
    });
}

function find_parent(elem, matching) {
    if(elem == null) {
        return false;
    }
    if(!elem.parentNode) {
        return false;
    }
    if(document.isSameNode(elem)) {
        return false;
    }
    if(document.isSameNode(elem.parentNode)) {
        return false;
    }

    if(matching(elem, elem.parentNode)) {
        return false;
    } else {
        return find_parent(elem.parentNode, matching);
    }

}

var　removed  = 0;

$("ins .adsbygoogle").hide();