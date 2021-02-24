class register{
    constructor(){
        //用户名
        this.name = $('#name');
        //密码
        this.password = $('#password');
        //确认密码
        this.confirm = $('#confirm');
        //vip邀请码
        this.vipcode = $('#vipcode');
        //注册
        this.ready = $('.ready');
        //选择框
        this.check = $('#check');
        //存放正确信息;
        this.arr = [false,false,false];
        this.addEvent();
    }
    addEvent(){
        this.name.on('blur',function(){
            let reg = /0?(13|14|15|17|18|19)[0-9]{9}|\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/;
            let uname = this.name.val();
            if(reg.test(uname)){
                $('.uname_j').text('');
                this.name.css('borderColor','#dedede');
                this.arr[0] = true;
            }else{
                this.name.css('borderColor','#9d003f');
                $('.uname_j').text('请输入正确的手机号或者邮箱');
                $('.uname_j').css({
                    color : function(){
                        return 'red';
                    },
                    fontSize : function(){
                        return '12px';
                    },
                    fontWeight : function(){
                        return 'bold';
                    }
                })
                this.arr[0] = false;
            }
            console.log(this.arr)
        }.bind(this))
        this.password.on('blur',function(){
            let reg = /^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9~!@&%#_]{8,16}$/;
            let upwd = this.password.val();
            if(reg.test(upwd)){
                $('.upwd').text('');
                this.password.css('borderColor','#dedede');
                this.arr[1] = true;
            }else{
                this.password.css('borderColor','#9d003f');
                $('.upwd').text('请输入大小写加数字!');
                $('.upwd').css({
                    color : function(){
                        return 'red';
                    },
                    fontSize : function(){
                        return '12px';
                    },
                    fontWeight : function(){
                        return 'bold';
                    }
                })
                this.arr[1] = false;
            }
        }.bind(this))
        this.confirm.on('blur',function(){
            let upwd = this.password.val();
            let enter = this.confirm.val();
            if(upwd === enter){
                $('.sure').text('');
                this.confirm.css('borderColor','#dedede');
                this.arr[2] = true;
            }else{
                this.confirm.css('borderColor','#9d003f');
                $('.sure').text('两次密码输入不一致，请重新输入');
                $('.sure').css({
                    color : function(){
                        return 'red';
                    },
                    fontSize : function(){
                        return '12px';
                    },
                    fontWeight : function(){
                        return 'bold';
                    }
                })
                this.arr[2] = false;
            }
        }.bind(this))
        
        this.check.click(function(){
            if($('.vip_code').css('display') == 'none'){
                $('.vip_code').css('display','block');
            }else{
                $('.vip_code').css('display','none');
                $('.code_red').text('');
            }
            this.vipcode.blur(function(){
                let reg = /^\d{4,8}$/;
                let value = this.vipcode.val();
                if(reg.test(value)){
                    $('.code_red').text('');
                    this.vipcode.css('borderColor','#dedede');
                }else{
                    this.vipcode.css('borderColor','#9d003f');
                    $('.code_red').text('请输入正确的邀请码');
                    $('.code_red').css({
                        color : function(){
                            return 'red';
                        },
                        fontSize : function(){
                            return '12px';
                        },
                        fontWeight : function(){
                            return 'bold';
                        }
                    })
                }
            }.bind(this))
        }.bind(this))

        $('#user').click(function(){
            if($('#user').attr('name') == 'false'){
                $('#user').attr('name','true');
            }else{
                $('#user').attr('name','false')
            }
        })

        this.ready.click(function(){
            if($('#user').attr('name') == 'false'){
                $('.uname_j').text('请阅读并同意！');
                $('.uname_j').css('color','red');
            }else if($('#user').attr('name') == 'true'){
                if(this.arr.indexOf(false) === -1){
                    let uname = this.name.val();
                    let upwd = this.password.val();
                    let sure = this.confirm.val();
                    let cookie_str = getCookie('registers');
                    let cookie_obj = this.convertStrToObj(cookie_str);
                    if(uname in cookie_obj){
                        $('.uname_j').text('用户名已存在！');
                    }else{
                        cookie_obj[uname] = upwd;
                        createCookie('registers',JSON.stringify(cookie_obj),{expires : 100,path : '/'});
                        location.href = 'login.min.html';
                        uname = upwd = sure = '';
                    }
                }else{
                    $('.uname_j').text('请完善信息!');
                }
            }
        }.bind(this))

        $('.login').click(function(){
            location.href = 'login.min.html';
        })
        //回到首页
        $('#index').click(function(){
            location.href = '../index.html';
        })
    }
    convertStrToObj(str){
        if(!str){
            return {};
        }
        return JSON.parse(str);
    }
}
new register();