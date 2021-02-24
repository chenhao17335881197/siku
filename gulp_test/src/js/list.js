class list{
    constructor(){
        this.addEvent();
    }
    addEvent(){
        //列表
        $('.hhhi').on('mouseenter',function(){
            $('.hide').css('display','block')
            $('.hhhi').css({
                background : function(){
                    return '#fff';
                },
                border : function(){
                    return '1px solid #cccccc';
                },
                borderBottom : function(){
                    return 0;
                },
                color : function(){
                    return '#e93b39';
                }
            })
            $('.hhhi span').css({
                transform : function(){
                    return 'rotateZ(-180deg)';
                }
            })
        })
        $('.hhhi').on('mouseleave',function(){
            $('.hide').css('display','none')
            $('.hhhi').css({
                background : function(){
                    return '#ededed';
                },
                border : function(){
                    return '1px solid transparent';
                },
                color : function(){
                    return '#666';
                }
            })
            $('.hhhi span').css({
                transform : function(){
                    return 'rotateZ(0)';
                }
            })
        })
        $('.hide').on('mouseenter',function(){
            $('.hide').css('display','block')
            $('.hhhi').css({
                background : function(){
                    return '#fff';
                },
                border : function(){
                    return '1px solid #cccccc';
                },
                borderBottom : function(){
                    return 0;
                },
                color : function(){
                    return '#666';
                }
            })
            $('.hhhi span').css({
                transform : function(){
                    return 'rotateZ(-180deg)';
                }
            })
        })
        $('.hide').on('mouseleave',function(){
            $('.hide').css('display','none')
            $('.hhhi').css({
                background : function(){
                    return '#ededed';
                },
                border : function(){
                    return '1px solid transparent';
                },
                color : function(){
                    return '#666';
                }
            })
            $('.hhhi span').css({
                transform : function(){
                    return 'rotateZ(0)';
                }
            })
        })

        //更多
        $('.more .see').click(function(){
            if($('.more .see span').text() == '更多选项'){
                $('.end').css('display','block');
                $('.more .see span').text('收起');
                $('.more .see').css('textIndent','25px');
            }else{
                $('.end').css('display','none');
                $('.more .see span').text('更多选项');
                $('.more .see').css('textIndent','12px');
            }
        })
        
        //登录/注册/首页
        $('.login a').click(function(){
            location.href = 'login.min.html';
        })
        $('.registor a').click(function(){
            location.href = 'register.min.html';
        })
        $('.first').click(function(){
            location.href = '../index.html';
        })
        $('#man').click(function(){
            location.href = 'list.min.html'
        })


        //商城/拍卖
        $(document).ready(function(){
            $('.pick').css({
                color : function(){
                    return '#e93b39';
                },
                borderTop : function(){
                    return '2px solid #e93b39';
                }
            })
            $('.buy').click(function(){
                $('.buy').css({
                    color : function(){
                        return '#e93b39';
                    },
                    borderTop : function(){
                        return '2px solid #e93b39';
                    }
                })
                $('.pick').removeAttr('style');
            })
            $('.pick').click(function(){
                $('.pick').css({
                    color : function(){
                        return '#e93b39';
                    },
                    borderTop : function(){
                        return '2px solid #e93b39';
                    }
                })
                $('.buy').removeAttr('style');
            })
        })

        //控制按钮点击
        $(document).ready(function(){
            $('.pro_control_btn a').eq(0).addClass('redbg')
        })
        $('.pro_control_btn a').each(function(i,value){
            $(value).click(function(){
                $(this).toggleClass('redbg')
                $(this).siblings().removeClass('redbg')
            })
        })

        //doller
        $('.two_inp span input').focus(function(){
            $('.two_inp span input').css({
                width : function(){
                    return '45px';
                },
                height : function(){
                    return '22px'
                }
            })
        })
        $('.two_inp span input').blur(function(){
            $('.two_inp span input').css({
                width : function(){
                    return '33px';
                },
                height : function(){
                    return '14px'
                }
            })
        })


        //选择框
        $('.pro_control_check label').each(function(i,value){
            $(value).click(function(){
                $(this).toggleClass("selectt")
            })
        })


        //搜索框
        $('.search').focus(function(){
            $('.search').attr('value','');
        })
        
        $('.search').blur(function(){
            if($('.search').val() == ''){
                $('.search').attr('value','在结果中搜索');
            }else{
                $('.search').val();
            }
        })


        //切换卡粘性定位动态阴影
        
        $(window).scroll(function(){
            if($('.price').position().top <= 60){
                $('.price').removeAttr('id');
            }
            if($('.price').position().top > 60){
                $('.price').attr('id','skity');
            }
            // console.log(parseInt($('.price').position().top));
        })
        $(window).ready(function(){
            if($('.price').position().top <= 60){
                $('.price').removeAttr('id');
            }
            if($('.price').position().top > 60){
                $('.price').attr('id','skity');
            } 
            //页面刷新时在列表部分
            $("html, body").scrollTop(0).animate({scrollTop: $(".pro_top").offset().top});
        })
            

    }
}
new list();
//小火箭
(function(){
    $(window).scroll(function(){
        let scroll_top = Math.floor(document.documentElement.scrollTop || document.body.scrollTop);
        if(scroll_top >= 300){
            $('.fixs').css('display','block')
        }else{
            $('.fixs').css('display','none')
        }
    })
    $('.fixs').click(function(){
        $('html,body').animate({scrollTop : 0},400)
    })
})()