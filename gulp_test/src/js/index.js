class header{
    constructor(){
        //header
        this.left_section = $('.left_section');
        this.switch = $('.switch');
        this.search = $('.search');
        this.product = $('.produc');
        this.icon_ss = $('.icon-ss');
        //banner
        this.bg_occ = $('.bg-occlusion');
        this.video_img = $('#video');
        this.video = $('video');
        this.play_img = $('.bg-play');
        this.addEvent();
    }
    addEvent(){
        //head
        this.left_section.click(function(){
            this.switch.css('display','block');
        }.bind(this));
        this.left_section.mouseleave(function(){
            this.switch.css('display','none')
        }.bind(this));
        this.product.bind({
            'mousedown':function(){
                this.product.css('textAlign','left');
                this.product.val('');
                this.product.css('cursor','text');
                this.search.animate({width : 190},'210','linear');
                this.search.css('borderBottom','1px solid #fff');
                this.icon_ss.css('color','#fff')
            }.bind(this),
            'blur':function(){
                this.search.animate({width : 55},'210','linear',function(){
                    this.product.val('搜索');
                    this.search.css('borderBottom','1px solid transparent');
                    this.product.css('cursor','pointer');
                    this.product.css('textAlign','right');
                }.bind(this));
                this.icon_ss.css('color','#ffb81c');
            }.bind(this)
        })
        //banner视频播放
        this.bg_occ.on('click',function(){
            this.video_img.css('display','none');
            this.play_img.css('display','none');
            this.video.css('zIndex','7');
        }.bind(this));
        $('#go').click(function(){
            location.href = 'pages/login.min.html';
        })
        $('#re').click(function(){
            location.href = 'pages/register.min.html';
        })


        //列表页
        $('#man').click(function(){
            location.href = 'pages/list.min.html'
        })
        
    }
}
new header();     
$(function(){
	$("#focus-img").changeImg({
		'boxWidth':1200,
		'changeLen':5,
		'changeSpend':800,
		'autoChange':false,
		'changeHandle':true
	});
});      