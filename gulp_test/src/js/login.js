class login{
    constructor(){
        this.arr = [false,false,false];
        this.addEvent();
    }
    addEvent(){
        $('.Vf_code').css('display','none');
        $('#upwd').on('focus',function(){
            $('.Vf_code').css('display','block');
        })
        //用户名输入框
        $('#name').on('focus',function(){
            $('.lab').text('');
        })
        $('#name').on('blur',function(){
            if($('#name').val() == ''){
                $('.lab').text('用户名/手机号/邮箱');
            }else{
                $('#name').val();
            }
        })
        //密码输入框
        $('#upwd').on('focus',function(){
            $('.lab-p').text('');
        })
        $('#upwd').on('blur',function(){
            if($('#upwd').val() == ''){
                $('.lab-p').text('密码');
            }else{
                $('#upwd').val();
            }
        })

        //tab切换
        $('document').ready(function(){
            $('.on').css('color','#f19108');
            $('.center_content').css('display','none')
        })
        $('.on').on('click',function(){
            $('.on').css('color','#f19108');
            $('.off').css('color','#666');
            $('.center_content_clone').css('display','block')
            $('.center_content').css('display','none')
        })
        $('.off').on('click',function(){
            $('.off').css('color','#f19108');
            $('.on').css('color','#666');
            $('.center_content').css('display','block')
            $('.center_content_clone').css('display','none')
        })

        //验证登录
        //用户名
        $('#name').on('change',function(){
            let reg = /0?(13|14|15|17|18|19)[0-9]{9}|\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/;
            let uname = $('#name').val();
            if(reg.test(uname)){
                $('#error').css('display','none');
                this.arr[0] = true;
            }else{
                $('#error').text('！！请输入正确的用户名')
                $('#error').css({
                    display : function(){
                        return 'block';
                    },
                    color : function(){
                        return 'red';
                    }
                })
                this.arr[0] = false;
            }
            console.log(this.arr[0])
        }.bind(this))

        //密码
        $('#upwd').on('change',function(){
            let reg = /^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9~!@&%#_]{8,16}$/;
            let upwd = $('#upwd').val();
            if(reg.test(upwd)){
                this.arr[1] = true;
                $('#error').css('display','none');
            }else{
                $('#error').text('！！请输入正确的密码')
                $('#error').css({
                    display : function(){
                        return 'block';
                    },
                    color : function(){
                        return 'red';
                    }
                })
                this.arr[1] = false;
            }
        }.bind(this))

        $(function() {
            code_draw();
            // 点击后刷新验证码
            $("#canvas").on('click', function() {
                code_draw();
            })
            
            $(".input-val").on('change', function() {
                // 将输入的内容转为大写，可通过这步进行大小写验证
                var val = $(".input-val").val().toLowerCase();
                // 获取生成验证码值
                var num = $('#canvas').attr('data-code');
                if (val == '') {
                    // alert('请输入验证码！');
                    $('#tips').text('请输入验证码！')
                    $('#tips').css({
                        color : function(){
                            return 'red';
                        },
                        fontWeight : function(){
                            return 'bold';
                        },
                        marginLeft : function(){
                            return '10px'
                        }
                    })
                } else if (val == num) {
                    $('#tips').text('验证成功!')
                    $('#tips').css({
                        color : function(){
                            return 'red';
                        },
                        fontWeight : function(){
                            return 'bold';
                        },
                        marginLeft : function(){
                            return '10px'
                        }
                    })
            
                } else {
                    $('#tips').text('验证码错误!请重新输入!')
                    $('#tips').css({
                        color : function(){
                            return 'red';
                        },
                        fontWeight : function(){
                            return 'bold';
                        },
                        marginLeft : function(){
                            return '10px'
                        }
                    })
                }
            })
        })


        //验证码
        $('.input-val').on('blur',function(){
            if($('#tips').text() == '验证成功!'){
                this.arr[2] = true;
            }else{
                this.arr[2] = false;
            }
            console.log(this.arr[2])
        }.bind(this))

        //登录按钮
        $('#loginbtn').on('click',function(){
            if(this.arr.indexOf(false) === -1){
                let uname = $('#name').val();
                let upwd = $('#upwd').val();
                let cookie_str = getCookie('registers');
                let cookie_obj = this.convertStrToObj(cookie_str);
                if(uname in cookie_obj){
                    if(upwd === cookie_obj[uname]){
                        location.href = '../index.html';
                    }else{
                        $('#error').text('密码错误!');
                        $('#error').css({
                            display : function(){
                                return 'block';
                            },
                            color : function(){
                                return 'red';
                            }
                        })
                    }
                }else{
                    $('#error').css({
                        display : function(){
                            return 'block';
                        },
                        color : function(){
                            return 'red';
                        }
                    })
                    $('#error').text('用户名不存在!');
                }
            }else{
                $('#error').css({
                    display : function(){
                        return 'block';
                    },
                    color : function(){
                        return 'red';
                    }
                })
                $('#error').text('请完善信息!');
            }
        }.bind(this))
        $('.regis').click(function(){
            location.href = 'register.min.html';
        })
        //回到首页
        $('#index').click(function(){
            location.href = '../index.html';
        })


        $('document').ready(function(){
            alert(decodeURIComponent(document.cookie));
        })
    }
    convertStrToObj(str){
        if(!str){
            return {};
        }
        return JSON.parse(str);
    }
}
new login();