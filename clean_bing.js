

if(window.location.host.indexOf('bing.com') > -1 ) {
    var flag = false;
    var keywords = ['百度', 'baidu', 'BAIDU', 'Baidu'];

    
    
    each_keyword(function(key){
        console.log(key);
        $.each($(".b_algo"), function(idx, dv){
            if( $(dv).html().indexOf(key) > -1 ) {
                $(dv).remove();
                flag = true;
            }
        });  

        $.each($(".b_rs"), function(idx, dv){
            $.each($(dv).find("a"), function(idx, a){
                if( $(a).html().indexOf(key) > -1 ) {
                    $(a).remove();
                    flag = true;
                }
            });
        });  
    
        
        $.each($(".b_rrsr"), function(idx, dv){
            $.each($(dv).find("a"), function(idx, a){
                if( $(a).html().indexOf(key) > -1 ) {
                    $(a).remove();
                    flag = true;
                }
            });
        });  


        
    
        
    });
    
    
    if(flag) {
       $('<span/>').text("，已經過濾掉令人反感的商蛆。").appendTo($('#b_tween'));
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