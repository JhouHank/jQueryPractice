// 10. 如果是這樣寫的話，有錯誤訊息，為什麼？
// btnGet.onclick = function(){
//     console.log("OK");
// }












































































// 11. 畫面準備好以後才開始執行
$(function () {
    btnGet.onclick = function () {

        // 20. 取得 姓名欄位 (使用 JavaScript 的方式)
        // 21. 取得 姓名欄位 (使用 jQuery 的方式)
        let x1 = document.getElementById('userName').value;
        let y1 = $('#userName').prop('value');
        let z1 = $('#userName').val();
        console.log(x1);
        console.log(y1);
        console.log(z1);
        // 30. 取得 地址欄位 (使用 JavaScript 的方式)
        // 31. 取得 地址欄位 (使用 jQuery 的方式)
        let x2 = document.getElementById('address').value;
        let y2 = $('#address').prop('value');
        let z2 = $('#address').val();
        console.log(x2);
        console.log(y2);
        console.log(z2);
        // 40. 取得 年紀欄位 (使用 JavaScript 的方式)
        // 41. 取得 年紀欄位 (使用 jQuery 的方式)
        // 方法A(JS): document.getElementsByName
        let x3 = document.getElementsByName('age');
        for(let i = 0; i < x3.length ; i++){
            //if(x3[i].checked) 也可以
            if(x3[i].checked == true){
                //radio元素.radio元素屬性
                //明明就是元素，為什麼可以(句點)，不是物件才能(句點)嗎
                //Ans:DOM
                console.log(x3[i].value);
            }
        }
        // 方法B(JS): document.querySelector
        let y3 = document.querySelector("input[name='age']:checked").value;
        console.log(y3);
        // 方法C(JQ): $().val()
        let z3 = $("input[name='age']:checked").val();
        console.log(z3);
    }
})



