$(function(){

	//tab
	$('.list_tab ul li').click(function(){
		$('.list_tab ul li').removeClass();
		$(this).addClass('list_tab_col');
		$('.list_main ul').css('display','none');
		$('.list_main ul').eq($(this).index()).css('display','block');
	});

	//收藏
	$('.list_main_sc').click(function(){
		if($(this).hasClass('list_main_x')){
			$(this).removeClass('list_main_x').addClass('list_main_xx');
		}else{
			$(this).removeClass('list_main_xx').addClass('list_main_x');
		}
	});

})