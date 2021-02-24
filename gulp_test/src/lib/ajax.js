// function ajax(url,fnWin,fnFail){
//     //1.创建xhr对象
//     // var xhr = new XMLHttpRequest();   非IE6兼容
//     // var xhr = new ActiveXObject('Microsoft.XMLHttp');   IE6兼容
//     var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHttp');
//     //2.与服务器建立连接
//     //第一个参数：get post delete put ……
//     //第二个参数：请求的接口地址(url地址)
//     //第三个参数：是否为异步,默认为true(异步),flase(同步);
//     xhr.open('get',url,true);
//     //3.发送请求
//     xhr.send();
//     //4.等待响应
//     xhr.onreadystatechange = function(){
//         if(xhr.readyState === 4){
//             if(xhr.status === 200){
//                 if(fnWin instanceof Function){
//                     fnWin(xhr.responseText);
//                 }
//             }else{
//                 if(fnFail instanceof Function){
//                     fnFail();
//                 }
//             }
//         }
//     }
// }


// function ajax(url,fnWin,fnFail){
//     var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHttp');
//     xhr.open('get',url,true);
//     xhr.send();
//     xhr.onreadystatechange = function(){
//         if(xhr.readyState === 4){
//             if(xhr.status === 200){
//                 if(fnWin instanceof Function){
//                     fnWin(xhr.responseText);
//                 }
//             }else{
//                 if(fnFail instanceof Function){
//                     fnFail();
//                 }
//             }
//         }
//     }
// }



// function ajax(url,fnWin,fnFail){
//     var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHttp');
//     xhr.open('get',url,true);
//     xhr.send();
//     xhr.onreadystatechange = function(){
//         if(xhr.readyState === 4){
//             if(xhr.status === 200){
//                 if(fnWin instanceof Function){
//                     fnWin(xhr.responseText);
//                 }
//             }else{
//                 if(fnFail instanceof Function){
//                     fnFail();
//                 }
//             }
//         }
//     }
// } 



function ajax(url,fnWin,fnFail){
    var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHttp');
    xhr.open('get',url,true);
    xhr.send();
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4){
            if(xhr.status === 200){
                if(fnWin instanceof Function){
                    fnWin(xhr.responseText);
                }
            }else{
                if(fnFail instanceof Function){
                    fnFail();
                }
            }
        }
    }
}