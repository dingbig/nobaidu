

if(window.location.host.indexOf('google') > -1 ) {
    var flag = false;
    var keywords = ['百度', 'baidu', 'BAIDU', 'Baidu'];

    
    
    each_keyword(function(key){
        
      
        $.each($("g-section-with-header"), function(idx, dv){
            if( $(dv).html().indexOf(key) > -1 ) {
                $(dv).remove();
                flag = true;
            }
        });

        $.each($("div .g"), function(idx, dv){
            if( $(dv).html().indexOf(key) > -1 ) {
                $(dv).remove();
                flag = true;
            }
        });
    


        

    
    
    });
    
    
    if(flag) {
        $('<span/>').text("，已經過濾掉令人反感的商蛆。").appendTo($('#resultStats'));
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