/**
 * Created by Administrator on 2017/9/19.
 */

//娉ㄥ唽椤甸潰瀵嗙爜
$('.yan').on('click', function () {
    var _yan = $(this).parent().find('input');
    if ($(_yan).prop('type') == 'password') {
        $(_yan).prop('type', 'text');
    } else {
        $(_yan).prop('type', 'password');
    }
})
// -- 鑷畾涔� alert銆乧onfirm 寮瑰嚭妗� 鏃犺繑鍥炲€�
function showBox(message, type, url) {

    if (type == 'alert') {
        layer.open({
            content: message,
            //skin: 'msg',
            style: 'background-color:#78BA32; color:#fff; border:none;font-size:30px;', //鑷畾椋庢牸
            time: 0.5 //x绉掑悗鑷姩鍏抽棴

        });
    }
    else {
        layer.open({
            content: message,
            btn: ['纭畾', '鍙栨秷'],
            yes: function (index) {
                location.href = url;
                layer.close(index);
            }
        });
    }
}

function red_money() {
    var _valuephone = $('#phonered').val();
    var phreg = /^1[34578]{1}\d{9}$/;
    var phonereg = phreg.test(_valuephone);
    if (!phonereg) {
        $('#phonered').prop({value: '', placeholder: '*璇疯緭鍏ユ纭殑鎵嬫満鍙�'}).parent('#redMoneyFrom').addClass('false');
        $('#phonered').focus();
    } else {
        $('#phonered').parent('#redMoneyFrom').removeClass('false');
        $('#redMoneyFrom').submit();
    }

}
// -- 鑷畾涔� alert銆乧onfirm 寮瑰嚭妗� 鏃犺繑鍥炲€�
function showBox2(message) {

    layer.open({
        content: message,
        //skin: 'msg',
        style: 'background-color:#78BA32; color:#fff; border:none;font-size:30px;', //鑷畾椋庢牸
        time: 2 //x绉掑悗鑷姩鍏抽棴

    });
}

// -- 鑷畾涔� confirm 寮瑰嚭灞� 鏈夎繑鍥炲€�
function openBox(message, type, url, data) {

    layer.open({
        content: message,
        btn: ['纭畾', '鍙栨秷'],
        yes: function (index) {
            if (type == 'one')//鎴戠殑鏀惰棌 涓€鏉�
            {
                $.post(url, data, function (result) {
                    $(this).parents('li').remove();
                    location.reload();
                });
                layer.close(index);
            }
            else if (type == 'all')//鎴戠殑鏀惰棌 澶氭潯
            {
                $.post(url, data, function (e) {
                    $('.collect-list').children('li').remove();
                    location.reload();
                });
                layer.close(index);
            }
            else if (type == 'del')//鎴戠殑璐墿杞� 鍒犻櫎
            {
                $.post(url, function (e) {
                    location.reload();
                });
                layer.close(index);
            }
            else if (type == 'remove')//鎴戠殑璐墿杞� 绉诲叆鏀惰棌
            {
                $.post(url, function (e) {
                    if (e.error == 90) {
                        showBox(e.message, 'alert', '');
                    }
                    else {
                        location.reload();
                    }
                });
                layer.close(index);
            }
        }
    });
}

// -- 鐧诲綍椤甸潰楠岃瘉
function login() {
    //鐢佃瘽鍙风爜
    var _valphone = $('#phone').val();
    var _valpsw = $('#psw').val();
    //var phreg = /^[1][0-9][0-9]{9}$/;
    //var phreg = /^1[34578]{1}\d{9}$/;
    var phreg = /\w/;
    var phonereg = phreg.test(_valphone);
    if (!phonereg) {
        $('#phone').prop({value: '', placeholder: '*璇疯緭鍏ユ纭殑鎵嬫満鍙锋垨鐢ㄦ埛鍚�'}).parent('li').addClass('false');
        $('#phone').focus();
    } else {
        $('#phone').parent('li').removeClass('false');
        if (_valpsw == '' || _valpsw == null) {
            $('#psw').prop('placeholder', '*璇疯緭鍏ユ纭殑瀵嗙爜').parent('li').addClass('false');
            $('#psw').focus();
        } else {
            $('#psw').parent('li').removeClass('false');
            $('#loginForm').submit();
        }
    }

}

// -- 淇敼瀵嗙爜楠岃瘉
function checkPsw() {
    //鐢佃瘽鍙风爜
    var _valphone = $('#phone').val();
    var _valpsw = $('#psw').val();
    var _valpsd1 = $('#psd1').val();
    var _valpsd2 = $('#psd2').val();
    var phreg = /^1[34578]{1}\d{9}$/;
    var phonereg = phreg.test(_valphone);
    if (!phonereg) {
        $('#phone').prop({value: '', placeholder: '*璇疯緭鍏ユ纭殑鎵嬫満鍙�'}).parent('li').addClass('false');
        $('#phone').focus();
    }
    else {
        $('#phone').parent('li').removeClass('false');
        if (_valpsw == '' || _valpsw == null) {
            $('#psw').prop('placeholder', '*璇疯緭鍏ョ殑楠岃瘉鐮�').parent('li').addClass('false');
            $('#psw').focus();
        } else {
            $('#psw').parent('li').removeClass('false');
            if (_valpsd1 == '' || _valpsd1 == null) {
                $('#psd1').prop('placeholder', '*璇疯緭鍏ョ殑瀵嗙爜').parent('li').addClass('false');
                $('#psd1').focus();
            } else {
                $('#psd1').parent('li').removeClass('false');
                if (_valpsd2 == '' || _valpsd2 == null) {
                    $('#psd2').prop('placeholder', '*璇疯緭鍏ョ殑瀵嗙爜').parent('li').addClass('false');
                    $('#psd2').focus();
                }
                else if (_valpsd1 != _valpsd2) {
                    $('#psd2').prop('type', 'text').prop('value', '');
                    $('#psd2').prop('placeholder', '*涓ゆ杈撳叆瀵嗙爜涓嶄竴鑷�').parent('li').addClass('false');
                    $('#psd2').focus();
                    $('#psd2').prop('type', 'password');
                } else {
                    $('#psd2').parent('li').removeClass('false');
                    $('#getPsdForm').submit();
                }
            }

        }
    }

}


// -- 娉ㄥ唽椤甸潰楠岃瘉
function zhuche() {
    //鐢佃瘽鍙风爜
    var _valphone = $('#phone1').val();
    //楠岃瘉鐮�
    var _valpsw = $('#psw1').val();
    //瀵嗙爜
    var _valpsw2 = $('#psw2').val();
    //var psdreg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,12}$/;
    var psdreg = /^[0-9A-Za-z]{6,12}$/;
    var passreg = psdreg.test(_valpsw2);
    //var phreg = /^[1][0-9][0-9]{9}$/;
    var phreg = /^1[34578]{1}\d{9}$/;
    var phonereg = phreg.test(_valphone);

    if (!phonereg) {
        $('#phone1').prop({value: '', placeholder: '*璇疯緭鍏ユ纭殑鎵嬫満鍙�'}).parent('li').addClass('false');
        $('#phone1').focus();
    } else {
        $('#phone1').parent('li').removeClass('false');
        if (!($('#psw1').val())) {
            $('#psw1').prop('placeholder', '*璇疯緭鍏ョ殑楠岃瘉鐮�').parent('li').addClass('false');
            $('#psw1').focus();
        } else {
            $('#psw1').parent('li').removeClass('false');
            if (!passreg) {
                $('#psw2').attr('value', '');
                $('#psw2').prop('placeholder', '*璇疯緭鍏�6-12浣嶅瘑鐮�').parent('li').addClass('false');
                $('#psw2').focus();
            } else {
                $('#psw2').parent('li').removeClass('false');
                $('#registerForm').submit();
            }
        }
    }

}

// -- 鐐瑰嚮鑾峰彇鎵嬫満楠岃瘉鐮�
function get_mobile_code(type, state) {
    var _phone = $('#phone1').val();//娉ㄥ唽鎵嬫満
    var _ztime = $('#ztime').val();//鍊掕鏃�
    var _valphone = $('#phone1').val();
    //var _verify = $('#verify').val();
    var phreg = /^1[34578]{1}\d{9}$/;
    var phonereg = phreg.test(_valphone);
    var url = 'user.php?act=ajax_getverify&r=' + Math.random();
    //鍒ゆ柇鏄惁濉啓鎵嬫満鍙风爜
    if (!phonereg) {
        $('#phone1').prop({value: '', placeholder: '*璇疯緭鍏ユ纭殑鎵嬫満鍙�'}).parent('li').addClass('false');
        $('#phone1').focus();
        return;
    }
    /*
     if(!_verify)
     {
     $('#verify').prop({value:'',placeholder:'*璇疯緭鍏ョ殑楠岃瘉鐮�'}).parent('li').addClass('false');
     $('#verify').focus();
     return false;
     }
     */
    //$.post( url , {phone:_phone,type:type,state:state,verify:_verify} , function(res){
    $.post(url, {phone: _phone, type: type, state: state}, function (res) {
        getVerifyResponse(res, _ztime);
    }, 'JSON');

}

// -- 鑾峰彇楠岃瘉鐮佸洖璋冨搷搴斿嚱鏁�
function getVerifyResponse(result, z_time) {
    if (result.error == 0) {
        RemainTime2(z_time);

    } else {
        if (result.error == 9) {
            $('#verify').prop({value: '', placeholder: '*楠岃瘉鐮佷笉姝ｇ‘鎴栧凡杩囨湡'}).parent('li').addClass('false');
            $('#verify').focus();
            return false;
        }
        else {
            showBox2(result.message);
        }
    }
}


// -- 鍊掕鏃跺嚱鏁�2
function RemainTime2(time) {
    var _time = time;

    var time = setInterval(function () {
        _time--;
        if (_time > 0) {
            $('#sms_verifycode').html(_time + '绉掑悗鍙噸鍙�');
        } else {
            $('#sms_verifycode').html('鐐瑰嚮鑾峰彇楠岃瘉鐮�');
        }

    }, 1000)

}

// -- 鎼滅储椤甸潰
$('.login-box input').focus(function () {
    $('.old-key').fadeIn();
})

// -- 鍟嗗搧鍒楄〃椤碉紝鎺掑簭绛涢€�
$('.one-select .orders span').on('click', function () {
    var _index = $(this).index();
    var _orders = $('.orders-box .orders-boxone').eq(_index);
    if (_orders.css('display') == 'none') {
        $(this).addClass('on').siblings().removeClass('on');
        $(_orders).slideDown(100).siblings().slideUp(50);
    } else {
        $(this).removeClass('on')
        $(_orders).slideUp(100);
    }
})


// -- 鍟嗗搧璇︽儏椤� 鍔犲叆璐墿杞︼紙鏁扮洰鍙樺寲锛�
$('.gouwuche .left span').on('click', function () {
    var _index = $(this).index();
    var _pval = $(this).siblings('p');
    var _value = Number($(this).siblings('p').html());

    if (_index == 0) {
        if (_value > 1) {
            $(_pval).text(_value - 1);
        }
    }
    else {
        $(_pval).text(_value + 1);
    }

})

// -- 璐墿杞﹂〉闈� 鍔犲叆璐墿杞︼紙鏁扮洰鍙樺寲锛�
$('.shouchang-gouwu span').on('click', function () {
    var _index = $(this).index();
    var _pval = $(this).siblings('p');
    var _value = Number($(this).siblings('p').html());
    var _checked = $(this).parents('li').find('.bigchecked').attr('src');
    var _recid = $(this).parents('li').find('input[type=checkbox]').attr('datarid');
    var _pnum = $(this).parent().find('p').attr("dataval");

    // 鏈€変腑 鏁扮洰鍙樺寲
    if (_checked == 'templates/images/no.png') {
        if (_index == 0) {
            if (_value > 1) {
                $(_pval).text(_value - 1);
            }
        }
        else {
            $(_pval).text(_value + 1);
        }
    }
    // 宸查€変腑 鏁扮洰鍙樺寲
    else {
        if (_index == 0) {
            if (_value > 1) {
                update_cart_number(_recid, (_value - 1));
                $(_pval).text(_value - 1);
            }
        }
        else {
            if ((_pnum > 0 && _value < _pnum) || _pnum == 0) {
                update_cart_number(_recid, (_value + 1));
                $(_pval).text(_value + 1);
            }
        }
    }
})


// -- 璐墿杞﹂〉闈� 鍒嗗埆閫夋嫨
$('.shouchang-input').on('click', function () {
    var _one = $('.shouchang-list ul li').length;
    var _two = $('.shouchang-list ul li .shouchang-input input:checkbox:checked').length;
    var _total = $('#total_price').val();
    var _recid = $(this).find('input[type=checkbox]').attr('datarid');

    // -- 璐墿杞﹀簳閮ㄦ樉绀轰笌鍚�
    if (_two > 0) {
        if ($('#go-done').hasClass('on')) {

        } else {
            $('#go-done').addClass('on');
            $('#go-done').find('a').attr('href', 'flow.php?step=checkout');
        }

    } else {
        $('#go-done').removeClass('on');
        $('#go-done').find('a').attr('href', 'javascript:;');
    }

    // -- 淇敼鏄惁閫変腑
    if ($(this).find('.bigchecked').attr('src') == 'templates/images/yes.png') {
        $(this).find('.bigchecked').attr('src', 'templates/images/no.png');
        $(this).find('input').attr('checked', false);
        update_cart_checked(_recid, 0);
    }
    else {
        $(this).find('.bigchecked').attr('src', 'templates/images/yes.png');
        $(this).find('input').attr('checked', true);
        update_cart_checked(_recid, 1);
    }

    if (_one == _two) {
        $('#no img , #newqx').attr('src', 'templates/images/yes.png');
        $('#go-done b').html(_total);
    }
    else {
        $('#no img , #newqx').attr('src', 'templates/images/no.png');
    }
    ;

})

// --  璐墿杞﹂〉闈� 鍟嗗搧鍏ㄩ€夈€佸弽閫�
$('#newqx').on('click', function () {
    var _one = $('.shouchang-list ul li').length;
    var _two = $('.shouchang-list ul li .shouchang-input input:checkbox:checked').length;
    var _total = $('#total_price').val();
    var _total2 = $('#total_count').val();

    if (_one == _two) {
        $('.shouchang-input input').attr('checked', false);
        $('.shouchang-input i img, #newqx').attr('src', 'templates/images/no.png');
        $('#go-done b').html('锟�0.00');
        $('#goods-num').html(0);
        $('#go-done').removeClass('on');
        $('#go-done').find('a').attr('href', 'javascript:;');
        update_cart_checked(-99, 0);

    }
    else {
        $('.shouchang-input input').attr('checked', true);
        $('.shouchang-input i img,#newqx').attr('src', 'templates/images/yes.png');
        $('#go-done b').html(_total);
        $('#goods-num').html(_total2);
        $('#go-done').addClass('on');
        $('#go-done').find('a').attr('href', 'flow.php?step=checkout');
        update_cart_checked(-99, 1);
    }

})

// -- 璁㈠崟缁撶畻椤甸潰 璐墿杞︼紙鏁扮洰鍙樺寲锛�
$('.shouchang-gowu-order span').on('click', function () {
    var _index = $(this).index();
    var _pval = $(this).parent().find('p');
    var _value = Number(_pval.html());
    var _recid = $('#gouwu-order').attr('datarid');

    if (_index == 0) {
        if (_value > 1) {
            update_cart_number(_recid, (_value - 1));
            $(_pval).text(_value - 1);
        }
    }
    else {
        update_cart_number(_recid, (_value + 1));
        $(_pval).text(_value + 1);
    }
})


// -- 璁㈠崟缁撶畻椤甸潰 鎴戠殑绾㈠寘
$('.yhq-top').on('click', function () {
    $(this).toggleClass('on');
    $('.yhq-list').slideToggle(100);
})
$('.yhq-list ul li').on('click', function () {
    var _text = $(this).text();
    $('.yhq-top span').html(_text);
    $('.yhq-list').delay(100).slideUp(100);
    $('.yhq-top').delay(100).removeClass('on');
    var bonus_id = $(this).attr('databid');
    var payment = $('#order-payment').val();
    $('#bonus').val(bonus_id);
    update_cart_bonus(bonus_id, payment);
})

// -- 璁㈠崟缁撶畻椤甸潰 鎴戠殑璐︽埛 绉垎鎶电幇
$('.imginput1').parent('.right').on('click', function () {

    var payment = $('#order-payment').val();

    if ($('.imginput1').attr('src') == 'templates/images/no.png') {
        $('.imginput1').attr('src', 'templates/images/yes.png')
        var val = $('#use-integral-money').val();
        update_cart_intergral(val, payment);
    }
    else {
        $('.imginput1').attr('src', 'templates/images/no.png')
        update_cart_intergral(0, payment);
    }

})


// -- 璁㈠崟缁撶畻椤甸潰 鏀惰揣鍦板潃淇℃伅鍙充晶婊戝嚭
$('#address').on('click', function () {
    $('.address-rightbg').fadeIn();
    $('.right-address').animate({right: '0px'}, 300);

})

$('.address-rightbg').click(function () {
    $('.address-rightbg').fadeOut();
    $('.right-address').animate({right: '-460px'}, 300);

})

$('.addressList .title-input').on('click', function () {
    if ($('.addressList-i', this).hasClass('addressList-no')) {
        $('.addressList-i', this).removeClass('addressList-no');
        $(this).parents('li').siblings().find('.addressList-i').addClass('addressList-no');

        var address_id = $('input', this).attr('dataval');
        var url = "flow.php?step=ajax_consignee";
        $.post(url, {"address_id": address_id}, function (data) {
            $('#address').html(data.content);
        }, 'JSON')
    }
    $('.address-rightbg').fadeOut();
    $('.right-address').animate({right: '-460px'}, 300);

})


// -- 璁㈠崟缁撶畻椤甸潰 閫佽揣涓婇棬 - 鑷彁鐐瑰垪琛ㄥ彸渚ф粦鍑�
function ztshow() {
    $('.songhuo-rightbg').fadeIn();
    $('.right-songhuo').animate({right: '0px'}, 300);
}

$('.songhuo-rightbg').click(function () {
    $('.songhuo-rightbg').fadeOut();
    $('.right-songhuo').animate({right: '-460px'}, 300);

})

$('.right-songhuo .top-box ul li .bigmenu').on('click', function () {
    $(this).siblings('.smallmenu,.zhongfeng').slideToggle(100);
    $(this).parent('li').siblings().find('.smallmenu,.zhongfeng').slideUp(50);

})

// -- 璁㈠崟缁撶畻椤甸潰 閰嶉€佹椂闂翠俊鎭�
function timeshow() {
    $('.choicetime').show();
    $('.choicetime .timemenu').animate({
        'bottom': '0'
    });
    $('body').css('position', 'fixed')
}
$('.choicetime .fr li').click(function () {
    $(this).addClass('on').siblings().removeClass('on');
    $('.choicetimebtn').val($(this).text());
    $('.choicetime').hide();
    $('.choicetime .timemenu').css('bottom', '-310px');
    $('body').css('position', 'static')
});
$('.choicetime .bg').click(function () {
    $('.choicetime').hide();
    $('.choicetime .timemenu').css('bottom', '-310px');
    $('body').css('position', 'static');
});
$('.choicetime .con01 span').click(function () {
    $('.choicetime').hide();
    $('.choicetime .timemenu').css('bottom', '-310px');
    $('body').css('position', 'static');
})

// -- 璁㈠崟缁撶畻椤甸潰 鑷彁鐐逛俊鎭�
$('.smallmenu ul li ').find('input').on('click', function () {
    $('.right-songhuo .top-box').find('.smallmenuimg').prop('src', 'templates/images/no.png');
    $(this).siblings('img').attr('src', 'templates/images/yes.png');
    var tit = $(this).siblings('img').attr('title');
    var val = $(this).val();
    $('.address-tit').html(tit);
    $('#order-pickup').val(val);

    $('.right-songhuo .top-box').find('input[type=radio]').removeAttr('checked');
    $(this).attr('checked', true);


    $('.songhuo-rightbg').fadeOut();
    $('.right-songhuo').animate({right: '-460px'}, 300);

})

// -- 璁㈠崟缁撶畻椤甸潰 鏀粯鏂瑰紡
$(function () {
    var _height = $('.zfstyle').height();
    $('.zfstyle').css('bottom', -_height);

})

function zfstyle() {
    $('.songhuo-bg').fadeIn();
    $('.zfstyle').animate({bottom: '0px'}, 300);

}

$('.songhuo-bg').click(function () {
    var _height = $('.zfstyle').height();
    $(this).fadeOut();
    $('.zfstyle').animate({bottom: -_height}, 300);

})

// -- 璁㈠崟缁撶畻椤甸潰 鏀粯鎸夐挳
$('.zfstyle ul li').on('click', function () {
    if ($(this).find('.liveimg').attr('src') == 'templates/images/no.png') {
        $(this).find('.liveimg').attr('src', 'templates/images/yes.png');
        $(this).siblings().find('.liveimg').attr('src', 'templates/images/no.png');
        $(this).find('input').attr('checked', true);
        $(this).siblings().find('input').attr('checked', false);

        var tit = $(this).find('.liveimg').attr('title');
        var val = $(this).find('input').val();
        $('#order-payment').val(val);
        $('.pay-text').html(tit);

        if (tit == '浣欓鏀粯') {
            change_cart_payment(val);
            //$('.my-surplus').fadeIn();
        }
        else {
            change_cart_payment(val);
            //$('.my-surplus').fadeOut();
        }

        var _height = $('.zfstyle').height();
        $('.songhuo-bg').fadeOut();
        $('.zfstyle').animate({bottom: -_height}, 300);
    }

})


// -- 璁㈠崟缁撶畻椤甸潰 鏀瑰彉閰嶉€佹柟寮忎环鏍煎彉鍔�
$('.right-style a').on('click', function () {

    var txt = $(this).text();
    var val = $(this).next().val();
    var url = 'flow.php?step=select_shipping';
    var pickup_time = $('#pick-up-time').val();
    var payment = $('#order-payment').val();
    var address = $(".address-tit").html();

    var songhuo = "<div class='right-time'><span>閰嶉€佹椂闂�</span>" +
        "<div class='time'>" +
        "<p><input type='text' id='shipping-time' class='choicetimebtn' readonly placeholder='閰嶉€佹椂闂�'' name='time' onClick='timeshow()'/></p>" +
        "</div></div>" +
        "<div class='atrrs' onClick=\"ztshow()\"><span>鍦扮偣</span>" +
        "<p class='address-tit'>" + address + "</p>" +
        "<img src='templates/images/top_right.png' />" +
        "</div>";

    var mendian = "<div class='right-time'><span>鏃堕棿</span>" +
        "<div class='time'>" +
        "<p><input type='text' id='shipping-time' class='choicetimebtn' readonly placeholder='鑷彁鏃堕棿' name='time' value=" + pickup_time + " /></p>" +
        "</div></div>" +
        "<div class='atrrs' onClick=\"ztshow()\"><span>鍦扮偣</span>" +
        "<p class='address-tit'>" + address + "</p>" +
        "<img src='templates/images/top_right.png' />" +
        "</div>";

    $(this).addClass('on').siblings().removeClass('on');
    $(this).next().attr('checked', true);
    $(this).siblings().next().removeAttr('checked');

    if (txt == '閫佽揣涓婇棬') {
        $(this).parent().nextAll().remove();
        $(this).parent().after(songhuo);
        $.post(url, {"shipping": val, "payment": payment}, function (data) {
            $('#my-pay').children().remove();
            $('#my-pay').append(data.content);
        }, 'JSON');
    }
    else {
        $(this).parent().nextAll().remove();
        $(this).parent().after(mendian);
        $.post(url, {"shipping": val, "payment": payment}, function (data) {
            $('#my-pay').children().remove();
            $('#my-pay').append(data.content);
        }, 'JSON');
    }

})

//***************************************************鍒嗗壊绾�**************************************************

// --鍏叡閮ㄥ垎 椤堕儴鑿滃崟鍏敤鍑芥暟
/*function menu()
 {
 //鍒ゆ柇鏄惁鑿滃崟鍑虹幇
 if($('.nav').css('left')=='0px'){
 $('.nav').animate({left:'-600px'},300);
 }else{
 $('.nav').animate({left:'0px'},300);
 }
 }

 $(function(){
 $('section').click(function(e){
 $('.nav').animate({left:'-600px'},300);
 })
 })

 $('.menu-one').on('click',function(){
 var _list = $(this).parent('li').find('.menu-list');
 var _listli = $(this).parent('li').siblings();

 if($(_list).is(':hidden')){
 $(this).find('.menu-left span').addClass('on');
 $(this).find('.menu-right img').prop('src','templates/images/top_right1.png');
 $(_list).slideDown(200).parent('li').siblings().find('.menu-list').slideUp(100);
 $(_listli).find('.menu-left span').removeClass('on');
 $(_listli).find('.menu-right img').prop('src','templates/images/top_right.png');
 }else{
 $(this).find('.menu-left span').removeClass('on');
 $(this).find('.menu-right img').prop('src','templates/images/top_right.png');
 $(_list).slideUp(200);
 }
 })*/

// --鍏叡閮ㄥ垎 椤堕儴鑿滃崟鍏敤鍑芥暟
function menu() {
    $(".ismy ul li span").css("position", "static");
    $('.ljnav').animate({
        'left': '0'
    })
}
$('.ljnav .leftnav li').click(function () {
    var _index = $(this).index();
    $(this).addClass('on').siblings().removeClass('on');
    $('.ljnav .rightinfo ul').eq(_index).show().siblings().hide();
});
$('.ljnav .hidenav').click(function () {
    $('.ljnav').animate({
        'left': '-100%'
    })
})

// --浼氬憳涓績 涓汉淇℃伅 淇敼
$('.mynews ul li label').on('click', function () {
    $(this).siblings().find('i').removeClass('on');
    $('i', this).addClass('on')
})

// -- 浼氬憳涓績 鍒ゆ柇浼氬憳涓績鎬у埆閫変腑
$(function () {
    $('.mynews ul li label').each(function () {
        if ($(this).find('input').attr('checked')) {
            $(this).find('i').addClass('on');
        }
    });
})

// -- 浼氬憳涓績 閫€娆俱€乻elect涓嬫媺
$('.tuikuan-dl input').on('focus', function () {
    $(this).parent().find('dl').slideDown(100);
}).keyup(function () {
    $(this).parent().find('dl').slideUp(100);
})
$('.tuikuan-dl dl dt').on('click', function () {
    var _text = $(this).text();
    $('.tuikuan-dl input').attr('value', _text);
    $(this).parent('dl').slideUp(100);
})

// -- 浼氬憳涓績 鍏呭€兼柟寮忋€侀€夋嫨
$('.one-style ul li').on('click', function () {
    if ($(this).find('.input-img').attr('src') == 'templates/images/non.png') {
        $(this).find('.input-img').attr('src', 'templates/images/has.png');
        $(this).siblings().find('.input-img').attr('src', 'templates/images/non.png');
    }
    if (!($(this).find('input').attr('checked'))) {
        $(this).find('input').attr('checked', 'checked');
        $(this).siblings().find('input').removeAttr('checked')
    }
})

// -- 浼氬憳涓績 鍒ゆ柇鍏呭€兼柟寮忛€変腑
$(function () {
    $('.one-style ul li').each(function () {
        if ($(this).find('input').attr('checked')) {
            $(this).find('.input-img').attr('src', 'templates/images/has.png');
        }
    });
})

// -- 浼氬憳涓績 璁㈠崟鏁扮洰鏄剧ず涓庡惁
$(document).ready(function (e) {

    // --鎴戠殑璁㈠崟 璁㈠崟鏁扮洰鏄剧ず涓庡惁
    $('.guanli-over ul li').each(function () {
        if (Number($(this).find('span').text()) == 0) {
            $(this).find('span').hide();
        }
    })

    // --浼氬憳涓績 璁㈠崟鏁扮洰鏄剧ず涓庡惁
    $('.ismy ul li').each(function () {
        if (Number($(this).find('span').text()) == 0) {
            $(this).find('span').hide();
        }
    })
});

// -- 浼氬憳涓績 鍟嗗搧璇勪环銆侀€夋嫨
$('.goods-list ul li').on('click', function () {
    if ($(this).find('.input-img').attr('src') == 'templates/images/non.png') {
        $(this).find('.input-img').attr('src', 'templates/images/has.png');
        $(this).siblings().find('.input-img').attr('src', 'templates/images/non.png');
    }

    if (($(this).find('input').prop('checked') == true)) {
        var val = $(this).find('input').val();
        $(this).find('input').attr('checked', true);
        $(this).siblings().find('input').removeAttr('checked');
        $('#comment-goodsId').attr('value', val);
    }

})

// -- 浼氬憳涓績 鍒ゆ柇鍟嗗搧璇勪环閫変腑
$(function () {
    $('.goods-list ul li').each(function () {
        if ($(this).find('input').attr('checked')) {
            $(this).find('.input-img').attr('src', 'templates/images/has.png');
        }
    });

})

// -- 浼氬憳涓績 璁㈠崟鍟嗗搧璇勫垎
$('#pingfen .like i').on('click', function () {
    $(this).prevAll().find('img').attr('src', 'templates/images/like2.png');
    $(this).find('img').attr('src', 'templates/images/like2.png');
    $(this).nextAll().find('img').attr('src', 'templates/images/like1.png');
    i = $(this).index();
    $('.pingfen input').attr('value', i + 1);

})

// -- 浼氬憳涓績 鎴戠殑鐜伴噾鍒� 鍒囨崲
$('.xianjinquan-title .one span').on('click', function () {
    $(this).addClass('yes').siblings().removeClass('yes');
    var _index = $(this).index();
    $('.xianjinquan-box ul').eq(_index).addClass('on').siblings().removeClass('on');

})

// -- 浼氬憳涓績 鎴戠殑鏀惰棌 鍟嗗搧鍏ㄩ€夈€佸弽閫�
$('#no').on('click', function () {
    var _one = $('.shouchang-list ul li').length;
    var _two = $('.shouchang-list ul li .shouchang-input input:checkbox:checked').length;

    if (_one == _two) {
        $('.shouchang-input input').attr('checked', false);
        $('.shouchang-input i img, #no img').attr('src', 'templates/images/no.png');

    } else {
        $('.shouchang-input input').attr('checked', true);
        $('.shouchang-input i img, #no img').attr('src', 'templates/images/yes.png');
    }

})

// -- 浼氬憳涓績 鍞悗銆侀€夋嫨
$('.body-bg .shouhou .list ul li').on('click', function () {
    $(this).find('img').prop('src', 'templates/images/has.png');
    $(this).siblings().find('img').prop('src', 'templates/images/non.png');

    var val = $(this).find('input').val();
    var goods_id = $('#shouhou-goods').val();
    var order_id = $('#shouhou-order').val();
    var url = val + '&goods_id=' + goods_id + '&order_id=' + order_id;
    $('#back-bottom').attr('href', url);

})

// -- 浼氬憳涓績 鍞悗 鏄剧ず涓庡惁
function shouhou(order_id) {
    var goods_id = $('#hidden-goods').val();
    //var order_id = $('#hidden-order').val();
    var url = 'user.php?act=apply_return_order&type=90&order_id=' + order_id + '&goods_id=' + goods_id;

    $('#shouhou-order').val(order_id);
    $('#shouhou-goods').val(goods_id);
    $('#back-bottom').attr('href', url);
    $('.body-bg').fadeIn();
    $('.shouhou').show();
}

// -- 浼氬憳涓績 鍞悗鍙栨秷
function havanot() {
    $('.body-bg').fadeOut();
}
// -- 浼氬憳涓績 鍦板潃淇敼

$('#adressCheckbox input').each(function () {
    if ($(this).prop('checked') == true) {
        $('#adressCheckbox').addClass('on');
    }
    ;
})
$('#adressCheckbox input').click(function () {
    if ($(this).prop('checked') == true) {
        $('#adressCheckbox').addClass('on');
        $(this).attr('checked', true);
        $(this).attr('value', 1);
    } else {
        $('#adressCheckbox').removeClass('on');
        $(this).removeAttr('checked');
    }
})

// -- 璁㈠崟璐拱鎴愬姛椤甸潰 鎶藉 閫昏緫璁＄畻
function choujiang() {
    var goods_price = $('#hidden-price').val();
    var url = "flow.php?step=ajax_luck_draw";
    $.post(url, {"goods_price": goods_price}, function (res) {
        $('#prize-level').html(res.content);
        $('.choujiang-bg').fadeIn('slow');
        setTimeout(window.location.href = 'index.php', 3);
    }, 'JSON');

}
$('.choujiang-bg').click(function (e) {
    if ($(e.target).is('.choujiang-bg')) {
        $(e.target).fadeOut();
    }
})


// -- 浼氬憳涓績 鍒犻櫎涓€鏉℃敹钘忔暟鎹�
function del_collection(obj, id) {
    var url = "user.php?r=" + Math.random() + "&act=ajax_del_collection";
    var data = {rec_id: id};
    openBox('纭畾瑕佸垹闄ゅ悧锛�', 'one', url, data);
}

// -- 浼氬憳涓績 鍒犻櫎澶氭潯鏀惰棌鏁版嵁
function del_collection_all() {
    var valArr = new Array;
    var count = $('.shouchang-list ul li .shouchang-input input[type=checkbox]');

    for (var i = 0; i < count.length; i++) {
        if (count[i].checked) {
            valArr[i] = count[i].value;
        }
    }

    if (valArr.length == 0) {
        showBox('璇烽€夋嫨瑕佸垹闄ょ殑鍟嗗搧锛�', 'alert', '');
        return false;
    }

    var ids = valArr.join(',');
    var data = {rec_id: ids};
    var url = 'user.php?r=' + Math.random() + '&act=ajax_del_collection';
    openBox('纭畾瑕佸垹闄ゅ晢鍝佸悧锛�', 'all', url, data);

}

// -- 浼氬憳涓績 鎴戠殑璁㈠崟 鍙栨秷璁㈠崟
function cancel_order(id) {
    var url = "user.php?act=cancel_order&order_id=" + id;
    showBox('鎮ㄧ‘璁よ鍙栨秷璇ヨ鍗曞悧锛熷彇娑堝悗姝よ鍗曞皢瑙嗕负鏃犳晥璁㈠崟锛�', 'confirm', url);
}

// -- 浼氬憳涓績 鎴戠殑璁㈠崟 绉婚櫎璁㈠崟
function delete_order(id) {
    var url = "user.php?act=delete_order&order_id=" + id;
    showBox('浣犵‘瀹氳绉婚櫎姝よ鍗曞悧锛熶竴鏃︽搷浣滀笉鍙仮澶嶏紒', 'confirm', url);
}

// -- 浼氬憳涓績 鎴戠殑璁㈠崟 纭鏀惰揣
function affirm_order(id) {
    var url = "user.php?act=affirm_received&order_id=" + id;
    showBox('浣犵‘璁ゅ凡缁忔敹鍒拌揣鐗╀簡鍚楋紵', 'confirm', url);
}

// --璐墿杞﹂〉闈� 淇敼璐墿杞﹀晢鍝佹暟閲�
function update_cart_number(id, num) {
    var url = "flow.php?step=ajax_update_cart";

    $.post(url, {"rec_id": id, "goods_number": num}, function (res) {
        if (res.error == 0) {
            $('#go-done b').html(res.total_price);
            $('#goods-num').html(res.total_goods_count);

        }
        else {
            showBox(res.message, 'alert', '');
        }
    }, 'JSON')

}
// -- 璐墿杞﹂〉闈� 淇敼璐墿杞﹂€変腑鍟嗗搧
function update_cart_checked(id, type) {
    var url = "flow.php?step=ajax_update_cart_checked";
    $.post(url, {"rec_id": id, "type": type}, function (data) {
        if (id != -99) {
            $('#go-done b').html(data.goods_price);
            $('#goods-num').html(data.goods_count);
        }

    }, 'JSON')
}
function redMoneyXi() {
    var url = "rob_redpacket.php";
    var data = "";
    openBox('鎭枩鎮ㄨ幏寰楃幇閲戜紭鎯犲埜璇峰埌涓汉涓績鏌ョ湅', '', url, data);
}
// -- 璁㈠崟缁撶畻椤甸潰锛堣喘鐗╄溅锛� 鏄惁閫変腑绉垎浣跨敤
function update_cart_intergral(num, payment) {
    var url = "flow.php?step=change_integral";
    $.post(url, {"points": num, "payment": payment}, function (data) {
        $('#my-pay').children().remove();
        $('#my-pay').append(data.content);
        $('#use-integral').attr('value', num);
    }, 'JSON')
}

// -- 璁㈠崟缁撶畻椤甸潰锛堣喘鐗╄溅锛� 鏄惁閫変腑绾㈠寘
function update_cart_bonus(id, payment) {
    var url = "flow.php?step=change_bonus";
    $.post(url, {"bonus": id, "payment": payment}, function (data) {
        $('#my-pay').children().remove();
        $('#my-pay').append(data.content);
    }, 'JSON')
}

// -- 璁㈠崟缁撶畻椤甸潰锛堣喘鐗╄溅锛� 鏀粯鏂瑰紡鏀瑰彉
function change_cart_payment(payment) {
    var url = "flow.php?step=select_payment";
    $.post(url, {"payment": payment}, function (data) {
        $('#my-pay').children().remove();
        $('#my-pay').append(data.content);
    }, 'JSON')
}

// -- 璁㈠崟缁撶畻椤甸潰锛堣喘鐗╄溅锛� 鏄惁浣欓鏀粯
function update_cart_surplus(num) {
    var url = "flow.php?step=change_surplus";
    var payment = $('#order-payment').val();
    $.post(url, {"surplus": num, "payment": payment}, function (data) {
        if (data.status == 0) {
            $('#my-pay').children().remove();
            $('#my-pay').append(data.content);
        }
        else {
            showBox(data.errot, 'alert', '');
        }

    }, 'JSON')
}

// -- 璐墿杞﹂〉闈� 鍒犻櫎璐墿杞﹀晢鍝�
function del_cart_goods() {
    var url = "flow.php?step=ajax_drop_goods";
    var data = "";
    openBox('浣犵‘瀹氳鍒犻櫎璐墿杞︿腑鐨勫晢鍝佸悧锛�', 'del', url, data);
}

// -- 璐墿杞﹂〉闈� 绉诲叆鏀惰棌
function remove_cart_goods() {
    var url = "flow.php?step=ajax_drop_to_collect";
    var data = "";
    openBox("浣犵‘瀹氳灏嗚喘鐗╄溅涓殑鍟嗗搧绉诲叆鏀惰棌涓悧锛�", 'remove', url, data);
}

// -- 璁㈠崟缁撶畻椤甸潰 鎻愪氦鎸夐挳
function order_submit() {
    var shipping = $('.right-style input:checked');
    var length = shipping.length;
    var val = shipping.val();
    var _time = $('#shipping-time').val();

    var pickup_point = $('#order-pickup').val();
    var payment = $('#order-payment').val();

    if (payment == 1) {  // 浣欓鏀粯鏃朵綑棰濅笉瓒崇殑鎯呭喌20170410
        var mypay_span = $('.right .wellspan').text();// 浣欓
        mypay_span = Number(mypay_span.replace("锟�", ""));

        if (mypay_span <= 0) {
            showBox('浣犵殑浣欓涓嶈冻,璇烽噸鏂伴€夋嫨鏀粯鏂瑰紡', 'alert', '');
            return false;
        } else {
            var mypay_p = $('#my-pay .right input').val(); //浣跨敤閲戦
            if (mypay_span < mypay_p) {
                showBox('浣犵殑浣欓涓嶈冻,璇烽噸鏂伴€夋嫨鏀粯鏂瑰紡', 'alert', '');
                return false;
            }
        }

    }

    if (length == 0) {
        showBox('璇烽€夋嫨閰嶉€佹柟寮�', 'alert', '');
        return false;
    }

    if (val == 11) {
        //閫佽揣涓婇棬
        if (_time == '') {
            showBox('璇烽€夋嫨閰嶉€佹椂闂�', 'alert', '');
            return false;
        }
        if (pickup_point == '') {
            showBox('璇烽€夋嫨闂ㄥ簵', 'alert', '');
            return false;
        }

    }
    if (val == 10) {
        //闂ㄥ簵鑷彁
        if (_time == '') {
            showBox('璇烽€夋嫨閰嶉€佹椂闂�', 'alert', '');
            return false;
        }
        if (pickup_point == '') {
            showBox('璇烽€夋嫨鑷彁闂ㄥ簵', 'alert', '');
            return false;
        }
    }
    if (payment == '') {
        showBox('璇烽€夋嫨鏀粯鏂瑰紡', 'alert', '');
        return false;
    }

    $('#subForm').submit();
}
// -- 璁㈠崟鐢熸垚鎴愬姛 缁х画鏀粯鐣岄潰
function order_pay(type, str) {
    var url = "flow.php?step=pay&type=" + type + "&code=" + str;
    window.location.href = url;
}







