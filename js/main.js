jQuery(document).ready(function($){
	
	$('.ProductList li').on('click', toggleCheckboxHandler);
	
	function toggleCheckboxHandler () {
		
		var checkbox = $(this).find('.CheckBox');
		var checkboxId = 0;
		var total = 0;
		
		var checked = checkbox.hasClass('Checked') ? 1 : 0;
		
		if ( checkbox.hasClass('ProductCheck') && checked==0 ) {
			
			$('.ProductCheck').removeClass('Checked');
			checkbox.addClass('Checked');
			checkboxId = checkbox.attr('data-id');
			
			$('.ProductPrice').addClass('Hidden');
			$('#product-'+checkboxId).removeClass('Hidden');
			var newTotal = $('#price-'+checkboxId).html();
			$('.SubTotalNumber,.TotalNumber').html(newTotal);
			
		} else if ( !checkbox.hasClass('ProductCheck') && checked==0 ) {
			checkbox.addClass('Checked');
		} else if ( !checkbox.hasClass('ProductCheck') && checked==1 ) {
			checkbox.removeClass('Checked');
		}
		
	};
});

var internalLink = false;
function pageUnload() {
//$('#browser_instructions').show();
	if (!internalLink) {
		internalLink = true;
			el = document.querySelector('#browser_instructions');
			if (el) el.style.display = "block";
			el2 = document.querySelector('#browser_overlay');
			if (el2) el2.style.display = "block";
		var s = '*************************************************\n\nAreAAA you sure you don\'t want to take advantage of the Pure Garcinia Cambogia Special Promotion?\n\nFor a Limited Time - SAVE AN ADDITOIANL 20% *INSTANTLY*\n\nWe will cover 100% of the shipping cost so you can see what this little pill can do for you!\n\n...and for TODAY ONLY we\'re going to knock an additional 20% off the price to get you started losing weight!\n\nClick *Cancel* or *Stay* below to activate coupon.\n\n*************************************************';
		if (navigator.userAgent.indexOf("Firefox") > -1) {
			alert(s);
		 
		}
		setTimeout("	$('#browser_instructions,#browser_overlay').hide();",100);
		return s;
	}
}
window.onbeforeunload = pageUnload;