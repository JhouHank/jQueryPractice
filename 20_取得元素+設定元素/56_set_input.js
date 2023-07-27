$(function () {

    // 10. 練習設定初始值
    btnSet.onclick = function () {
        // 20. 將地址預設為台中
        $('#address').val('Taichung');
        //$('#address').prop('value','Taichung'); 也可以
        // 30. 將職業預設為其他
        $('input[name="job"][value="other"]').prop('checked',true);
        // 40. 將交通工具預設為機車
        let list = document.getElementsByName('vehicle');
        for(let cat = 0; cat <list.length ; cat++){
            if(list[cat].value == "motorcycle"){
                list[cat].checked = true;
            }
        }
        //$('input[value="motorcycle"]').prop('checked',true); 也可以
    }
})
