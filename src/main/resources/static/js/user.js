/**
 * Created by Administrator on 2017/9/19.
 */
function deleteUser(target){
    var tr = $(target).closest("tr");
    var userId = $(tr).find("td[class='id']").text();
    $("#dialog-confirm").show();
    $( "#dialog-confirm" ).dialog({
        resizable: false,
        height:200,
        modal: true,
        buttons: {
            "确定": function() {
                $.ajax({
                    url:"/delete",
                    dataType:"text",
                    type:"post",
                    data:{
                        "userId": userId
                    },
                    success: function () {
                        $("#dialog-confirm").dialog( "close" );
                        tr.remove();
                    }
                })
            },
            "取消": function() {
                $( this ).dialog( "close" );
            }
        }
    });
}