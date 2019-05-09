velocidade = 2000;

$(document).ready(function() {
	$(document).on('keyup', function(e) {
		if ($.inArray(e.keyCode, [97, 98, 99, 100, 101, 102, 103, 104, 105]) != -1) {
			$('#quadrado').removeClass('pos-1 pos-2 pos-3 pos-4 pos-5 pos-6 pos-7 pos-8 pos-9');
		}

		switch (e.keyCode) {
			case 97:
				$('#quadrado').addClass('pos-1');
				break;
			case 98:
				$('#quadrado').addClass('pos-2');
				break;
			case 99:
				$('#quadrado').addClass('pos-3');
				break;
			case 100:
				$('#quadrado').addClass('pos-4');
				break;
			case 101:
				$('#quadrado').addClass('pos-5');
				break;
			case 102:
				$('#quadrado').addClass('pos-6');
				break;
			case 103:
				$('#quadrado').addClass('pos-7');
				break;
			case 104:
				$('#quadrado').addClass('pos-8');
				break;
			case 105:
				$('#quadrado').addClass('pos-9');
				break;
			case 111:
				mudar_velocidade();
				break;
			case 106:
				$('#quadrado').removeAttr('style');
				break;
			case 107:
				console.log(velocidade);
				if (velocidade >= 200) {
					velocidade -= 100;
					mudar_velocidade();
				}
				break;						
			case 109:
				if (velocidade <= 1900) {
					velocidade += 100;
					mudar_velocidade();
				}
				break;
		}
	});
});

function mudar_velocidade() {
	$('#quadrado').css({
		'-webkit-animation': 'rotation ' + velocidade + 'ms linear infinite',
	    '-moz-animation': 'rotation ' + velocidade + 'ms linear infinite',
	    '-ms-animation': 'rotation ' + velocidade + 'ms linear infinite'
	});

}





