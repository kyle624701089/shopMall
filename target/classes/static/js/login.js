/**
 * Created by Administrator on 2017/9/20.
 */
/*校验*/
/*$(function(){
    var validate = $("#loginForm").validate({
        debug: true, //调试模式取消submit的默认提交功能
        focusInvalid: true, //当为false时，验证无效时，没有焦点响应
        onkeyup:true,
        submitHandler:function(form){
            alert("提交表单");
            form.submit();   //提交表单
        },
        rules:{
            username:{
                required:true,
                rangelength:[5,12]
            },
            password:{
                required:true,
                rangelength:[6,18]
            }
        },
        messages:{
            username:{
                required:"必填",
                //rangelength: $.format("用户名最小长度:{0},最大长度:{1}。")
            },
            password:{
                required:"必填",
                //rangelength: $.format("密码最小长度:{0},最大长度:{1}。")
            }
        }
    })
})*/


/**
 * 前往注册页面
 */
function registerPage(){
    resetForm();
    $("#login-box").hide();
    $("#signup-box").show();
}

/**
 * 返回登录页面
 */
function backLoginPage(){
    $("#login-box").show();
    $("#signup-box").hide();
}

/**
 * 激活、遮蔽注册按钮
 */
function showRegiste(){
    var disabled = $("#registeButton").attr("disabled");
    if("disabled"==disabled){
        $("#registeButton").removeAttr("disabled");
    }else{
        $("#registeButton").attr("disabled","disabled");
    }
}

/**
 *重置按钮
 */
function resetForm(){
    $("#registeButton").attr("disabled","disabled");
    var inputList = $("#registerForm").find("input");
    $("#usernameNullError").text("");
    $("#passwordNullError").text("");
    $("#rePasswordNullError").text("");
    $("#emailNullError").text("");
    $("#readCheck").removeAttr("checked");
    for(var i=0;i<inputList.length;i++){
        var input = inputList.get(i);
        $(input).val("");
    }
}

/**
 * 登录
 * @returns {boolean}
 */
function login(){
	/*
	 * 点击登录按钮清空所有错误提示框
	 */
	$("#usernameLabel").html("");
	$("#passwordLabel").html("");
	$("#errorLabel").html("");
	
    var username = $("#username").val();
    var password = $("#password").val();
    if(username==null || username==''){
        $("#username").focus();
        $("#username").val(username);
        $("#usernameLabel").html("<font color='red'><b>请输入用户名！</b></font>");
         return false;
    }else{
        $("#usernameLabel").html("");
    }
    if(password==null || password==''){
        $("#password").focus();
        $("#passwordLabel").html("<font color='red'><b>请输入密码！</b></font>");
        return false;
    }else{
        $("#passwordLabel").html("");
    }
    $.ajax({
        url:"/loginValidate",
        dataType:"json",
        type:"post",
        data:{
            "username":username,
            "password":password
        },
        success:function(data){
            if(data){
                $("#loginForm").submit();
            }else{
                $("#errorLabel").html("<font color='red'><b>该用户不存在，请重新输入！</b></font>");
            }
        }
    });
 }

/**
 * 注册
 */
function register(){
    var username_reg = $("#username_reg").val();//用户名
    var password_reg = $("#password_reg").val();//密码
    var rePassword_reg = $("#rePassword_reg").val();//重复密码
    var email_reg = $("#email_reg").val();//邮箱
    /**
     * 判断用户名是否为空
     */
    if(username_reg==null || username_reg==''){
        $("#username_reg").focus();
        $("#username_reg").val(username_reg);
        $("#usernameNullError").html("<font color='red'><b>请输入用户名！</b></font>");
        return false;
    }else{
        $("#usernameNullError").html("");
    }

    /**
     * 判断密码是否为空
     */
    if(password_reg==null || password_reg==''){
        $("#password_reg").focus();
        $("#password_reg").val(password_reg);
        $("#passwordNullError").html("<font color='red'><b>请输入密码！</b></font>");
        return false;
    }else{
        $("#passwordNullError").html("");
    }

    /**
     * 判断重复密码是否为空
     */
    if(rePassword_reg==null || rePassword_reg==''){
        $("#rePassword_reg").focus();
        $("#rePassword_reg").val(rePassword_reg);
        $("#rePasswordNullError").html("<font color='red'><b>请输入重复密码！</b></font>");
        return false;
    }else{
        $("#rePasswordNullError").html("");
    }

    /**
     * 判断邮箱地址是否为空
     */
    if(email_reg==null || email_reg==''){
        $("#email_reg").focus();
        $("#email_reg").val(email_reg);
        $("#emailNullError").html("<font color='red'><b>请输入邮箱地址！</b></font>");
        return false;
    }else{
        $("#emailNullError").html("");
    }
}

