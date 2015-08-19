(function($) {
    //思路：1.是否必填；2.什么类型；3.获取信息；4.做出判断
    var methods = {
        //初始化
        init : function(options) {
            var dft = {
                name : /^\s*[\u4e00-\u9fa5]{1,}[\u4e00-\u9fa5.·]{0,15}[\u4e00-\u9fa5]{1,}\s*$/,
                nickname : /^([\u4e00-\u9fa5A-Za-z0-9]){1,12}$/,
                // sex : "",
                // school : "",
                // college : "",
                // major : "",
                // company : "",
                // motto : "",
                email : /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/,
                username : /^[a-zA-z]\w{3,15}$/,
                prepass : /^[a-zA-Z]\w{5,17}$/,
                newpass : /^[a-zA-Z]\w{5,17}$/,
                confirmpass : "/^[a-zA-Z]\w{5,17}$/",
                tel : /^1\d{10}$/,
                // work : "",
                // intro : "",
                // code : "",
                idcard : /^\d{15}(\d{2}[A-Za-z0-9])?$/
            };
            var ops = $.extend(dft,options);
            return this.each(function(){
                var that = $(this);
                methods.formType(that,ops);
            });
        },
        //判断类型
        formType : function(that,options) {
            // console.log(that);
            var finput = that.find("input");
            var ftextarea = that.find("textarea");
            var fselect = that.find("select");
            
            finput.each(function(){
                //排除radio和checkbox
                if($(this).attr("type") != "radio" && $(this).attr("type") != "checkbox"){
                    //必填或非空需要验证
                    if(methods.is_require($(this)) || !methods.is_empty($(this))){
                        $(this).blur(function(){
                            methods.default_check($(this),options);
                        });
                    }
                    //确认密码
                    if($(this).attr("name") == "confirmpass"){
                        var newpass = $("input[name='newpass']");
                        $(this).blur(function(){
                            if($(this).val() != newpass){
                                $(this).css("border","1px red solid");
                            } else {
                                $(this).css("border","1px green solid");
                            }
                        });
                    }
                }
            });
            fselect.each(function(){
                //必填则需要验证
                if(methods.is_require($(this))){
                    $(this).blur(function(){
                        if($(this).val() == "pretext"){
                            $(this).css("border","1px red solid");
                        } else {
                            $(this).css("border","1px green solid");
                        }
                    });
                }
            });
            ftextarea.each(function(){
                //必填则验证
                if(methods.is_require($(this))){
                    $(this).blur(function(){
                        if($(this).val() == ''){
                            console.log($(this).val());
                            $(this).css("border","1px green solid");
                        } else {
                            $(this).css("border","1px red solid");
                        }
                    });
                }
            });
        },
        //是否必填
        //返回 bool
        //true 必填；false 选填
        is_require : function(that) {
            // console.log(that.attr("name"));
            if(that.attr("required")){
                return true;
            } else {
                return false;
            }
        },
        //选填判断
        //返回 bool 
        //true 空；false 非空
        is_empty : function(that) {
            if(that.val() == ''){
                return true;
            } else {
                return false;
            }
        },
        //预定义判断
        //返回 bool
        //true 成功；false 失败
        default_check : function(that,options) {
            var name = that.attr("name");
            var regex = options[name];
            if(regex.test(that.val())){
                that.css("border","1px green solid");
            } else {
                that.css("border","1px red solid");
            }
        },
    };
    
    // 扩展模块
    $.fn.formcheck = function(method) {
        if(methods[method]) {
            return methods[method].apply(this,Array.prototype.slice.call(arguments,1));
        } else if (typeof method === 'object' || !method) {
            return methods.init.apply(this,arguments);
        } else {
            $.error('Method' + method + 'does no exist on jQuery.formcheck');
        }
    };

})(jQuery);