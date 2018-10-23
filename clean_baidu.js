

if(window.location.host.indexOf('baidu') > -1 ) {
    var flag = false;
    var keywords = ['广告'];

    function removeAd() {
        $('#content_right').hide();       
         $('#rs').hide();
         $('#rs_top_new').hide();

        each_keyword(function(key){
            $.each($("span"), function(idx,　e){
                if( $(e).html().indexOf(key) > -1 ) {
                   find_parent(e, function(c, p) {
                    if(p.id == 'content_left') {
                        $(c).remove();
                        removed +=1;
                        return true;
                    } else {
                        return false;
                    }
                   });
                }
            });    
        });
    }
    removeAd();


    setInterval(function(){
        removeAd();
    }, 100);
    
    
    if(flag) {
        // $('<span/>').text("，已經過濾掉令人反感的商蛆。").appendTo($('#resultStats'));
    }
    
}





/*
var kw = $('#kw');
var form = $('#form');
chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        alert("shit");

        if (request.action == "send") {
            kw.val(request.keyword)
            sendResponse({state:'关键词填写成功！'});
        }
        if (request.action == "submit") {
            form.submit();
            sendResponse({state:'提交成功！'});
        }
    }
);
*/