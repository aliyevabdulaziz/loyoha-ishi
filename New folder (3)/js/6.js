window.onload = function () {
	var height = $('#page').height() - 25;
	$('.bar-left-main').height(height);
	$('.bar-left').height(height);
	$('.bar-main').height(height);
	$('.menu-left').height(height);
	var knopqa = 0;
	var sqs = 0;
	GetIp();
};
var timeoutID;
var contentLoaded = 0;
$(document).ready(function () {
	//*******AKA AZAMAT*****************************

	var knopqa = 0;
	var sqs = 0;
	var clickpayflag = 0;
	window.product = 'NP';

	$('#ras-poisk-block').hide();
	$('#err-win-neo').hide();
	$('#bar-left-main-fluid').css('height', 'auto');
	$('#bar-left-selection').css('height', 'auto');
	//alert($("#bar-left-main-fluid").height());
	$('#bar-main-section').css('height', 'auto');

	// ÐžÑˆÐ¸Ð±ÐºÐ° Ð²Ð²Ð¾Ð´Ð° Ð»Ð¾Ð³Ð¸Ð½Ð° Ð¸Ð»Ð¸ Ð¿Ð°Ñ€Ð¾Ð»Ñ
	var url = window.location;
	var sss = /err=login/i.test(url);
	if (sss) {
		$('#err-win').show();
	}
	$('#err-win').click(function () {
		if (sss) {
			//            var qqq = url.toString().split("?")[0];
			var qqq = url.toString().split('&')[0];
			window.location = qqq;
		}
	});
	$("span[id^='list-text-']").each(function () {
		var span = $(this).html();
		//alert(span);
		var matched = span.toString().match(/\s/gi);
		// alert(matched);
		/*
        if(matched.length===1){
            var budu_paravit_a_cho_eshe_ostayotsya_delat = span.toString().replace(/\s/g,'<br/>');
            //span.html(budu_paravit_a_cho_eshe_ostayotsya_delat);
            //document.getElementById(span.attr("id")).innerHTML =budu_paravit_a_cho_eshe_ostayotsya_delat;
            $(this).html(budu_paravit_a_cho_eshe_ostayotsya_delat);
        }
*/
	});

	/*var a_tag = $("#lang-a-id").html();
    if (a_tag.toString().indexOf("Ð ÑƒÑÑÐºÐ¸Ð¹")){
        $("#lang-a-id").html('<span class="icon icon-uz-krill"></span>Ð£Ð·Ð±ÐµÐºÑ‡Ð°');
    }else{
        $("#lang-a-id").html('Ð ÑƒÑÑÐºÐ¸Ð¹');
    }*/

	//$("#column-column-second").hide();
	/*var $document = $(".document");
        var $secondCol = $("#column-column-second");
        $secondCol.width("500px");
        var gattr = $("#parallel-view").attr('data-link');

        var contentLoaded = 0;
        $("#parallel-view").on("click", function() {

            //loadContent(gattr);
            document.location=gattr;
        });

        function loadContent(link) {
           $.ajax({
            type: "GET",
            url: link,
            data: { },
            }).done(function(data) {
                $secondCol.html(data);
                stl=$secondCol.find('head').html();
                //alert(stl);

            });
       }*/
	//***************add aka Azamat************************************
	$('#ltr1').click(function () {
		$('input[name="langUZ"]').each(function () {
			var sds = $(this).val();
			$('tr[name="tr' + sds + '"]').hide();
		});
		$('input[name="langRU"]').each(function () {
			var sds = $(this).val();
			$('tr[name="tr' + sds + '"]').show();
		});
	});
	$('#ltr2').click(function () {
		$('input[name="langRU"]').each(function () {
			var sds = $(this).val();
			$('tr[name="tr' + sds + '"]').hide();
		});
		$('input[name="langUZ"]').each(function () {
			var sds = $(this).val();
			$('tr[name="tr' + sds + '"]').show();
		});
	});
	$('#ltr3').click(function () {
		$('tr[name^="tr"]').each(function () {
			$(this).show();
		});
	});
	$('#grand_document_type').change(function () {
		var typytypy = $(this).val();
		document.getElementById('ltr3').checked = 'checked';
		if (typytypy != '') {
			$('tr[name^="tr"]').each(function () {
				var tr = $(this).attr('name');
				//alert(tr);
				var fl = 0;
				var qqq = $(this);
				$('input[name="doc_type' + typytypy + '"]').each(function () {
					var loclol = 'tr' + $(this).val();
					if (tr == loclol) {
						fl = 1;
						qqq.show();
					}
				});
				if (fl == 0) {
					$(this).hide();
				}
			});
		} else {
			$('tr[name^="tr"]').each(function () {
				$(this).show();
			});
		}
	});
	$('#show_all_aa').click(function () {
		$('#tabs').tabs('option', 'active', 0);
		document.getElementById('ltr3').checked = 'checked';
		//alert(knopqa);

		$("input[name='form_base']").each(function () {
			knopqa = $(this).is(':checked');

			var base = $(this).val();
			if (sqs == 1) {
				if (knopqa == false) {
					var sss = $(this).attr('id');
					document.getElementById(sss).checked = 'checked';
				}
				$('input[name="base' + base + '"]').each(function () {
					var sds = $(this).val();
					$('tr[name="tr' + sds + '"]').show();
				});
			} else {
				if (knopqa == true) {
					var sss = $(this).attr('id');
					document.getElementById(sss).checked = '';
				}
				$('input[name="base' + base + '"]').each(function () {
					var sds = $(this).val();
					$('tr[name="tr' + sds + '"]').hide();
				});
			}
		});
		if (sqs == 0) {
			sqs = 1;
			$(this).html('Ð’Ñ‹Ð´ÐµÐ»Ð¸Ñ‚ÑŒ Ð²ÑÐµ');
		} else {
			sqs = 0;
			$(this).html('Ð£Ð±Ñ€Ð°Ñ‚ÑŒ Ð²ÑÐµ');
		}
		return false;
	});
	$("input[name='form_base']").click(function () {
		document.getElementById('ltr3').checked = 'checked';
		var base = $(this).val();
		knopqa = $(this).is(':checked');
		if (knopqa == false) {
			//$(this).removeAttr('checked');
			$('input[name="base' + base + '"]').each(function () {
				//$(this).hide();
				var sds = $(this).val();
				$('tr[name="tr' + sds + '"]').hide();
			});
		} else {
			$('input[name="base' + base + '"]').each(function () {
				//$(this).hide();
				var sds = $(this).val();
				$('tr[name="tr' + sds + '"]').show();
			});
		}
	});

	function AdminSearchLogin() {
		//alert("ok");
	}
	function externalLinks() {
		links = document.getElementsByTagName('a');
		for (i = 0; i < links.length; i++) {
			link = links[i];

			var langcheck = link.toString().indexOf('/lang/') + 1;
			if (langcheck == 0) {
				var strurl = link.toString().indexOf('#') + 1;
				if (link.getAttribute('href')) {
					if (strurl == 0) {
						// link.target = "_blank";
					}
				}
			} else {
				var sss = link.toString().substr(0, langcheck) + link.toString().substr(langcheck + 5, link.toString().length);
				link.href = sss;
				//link.target = "_blank";
			}
		}
	}
	if ($('#hidden-content').val() == 'content') {
		externalLinks();
	}
	var $secondCol = $('#column-column-second');

	//**************ÐŸÐ°Ñ€Ð°Ð»ÐµÐ»ÑŒÐ½Ñ‹Ð¹ Ð¿Ñ€Ð¾ÑÐ¼Ð¾Ñ‚Ñ€********************************************
	$('#parallel-view').on('click', function (event) {
		/* var qqq = $("#column-column-second").html();

       if (! contentLoaded) {
           var url =this.getAttribute("data-link");
           loadContent(this.getAttribute("data-link"));
       } else {
           if (qqq){
              $("#column-column-second-td").html('');
              $("#column-column-second").hide();
              contentLoaded = 0;
              $("#paralel-span").html('ÐŸÐ°Ñ€Ð°Ð»Ð»ÐµÐ»ÑŒÐ½Ñ‹Ð¹ Ð¿Ñ€Ð¾ÑÐ¼Ð¾Ñ‚Ñ€');
           }
       }
       //toggleParallelView();
       //$("#bar-left-main-fluid").height($(document).height());

       $("#bar-left-main-fluid").css("height", "auto");
       $("#bar-left-selection").height('auto');
       $("#bar-left-selection").css("height", "auto");
       $("#bar-main-section").css("height", "auto");;
       //alert($( "#bar-left-main-fluid").height());
        var docid = document.getElementById("docid-input").value;
        document.getElementById("export-word-a").href="/scripts/word.php?id="+docid;
        document.getElementById("translit-input").value="";
       */
	});
	$('#neo-takoy').click(function () {
		//        $("#err-win-neo-title").html("Ð¤ÑƒÐ½ÐºÑ†Ð¸Ñ Ð½ÐµÐ´Ð¾ÑÑ‚ÑƒÐ¿Ð½Ð°");
		//       $("#err-win-neo-body").html("Ð”Ð°Ð½Ð½Ð°Ñ Ñ„ÑƒÐ½ÐºÑ†Ð¸Ñ Ð´Ð¾ÑÑ‚ÑƒÐ¿Ð½Ð¾ Ñ‚Ð¾Ð»ÑŒÐºÐ¾ Ð´Ð»Ñ ÐºÐ»Ð¸ÐµÐ½Ñ‚Ð¾Ð² (Ð¿Ð¾Ð»ÑŒÐ·Ð¾Ð²Ð°Ñ‚ÐµÐ»ÐµÐ¹)");
		$('#err-win-neo').show();
	});
	$('#err-win-neo .close').click(function () {
		$('#err-win-neo').hide();
	});
	function loadContent(link) {
		var docid = document.getElementById('docid-input').value;
		$.ajax({
			type: 'POST',
			url: link,
			data: { link: docid, paralel: 1 },
			beforeSend: function () {
				$('#main_contents_list').css('display', 'none');
				$('#search_result_box')
					.css('display', 'block')
					.css('text-align', 'center')
					.css('padding-top', '50px')
					.html("Ð—Ð°Ð³Ñ€ÑƒÐ·ÐºÐ° Ð´Ð¾ÐºÑƒÐ¼ÐµÐ½Ñ‚Ð¾Ð²<br /><img src='/files1/ajax-loader.gif' alt='' title='Loading' />");
			},
		}).done(function (data) {
			//jQuery("#column.column-second").html(data);
			//$secondCol.append(data);
			$('#main_contents_list').css('display', '');
			$('#search_result_box').hide();
			contentLoaded = 1;
			//document.getElementById('column-column-second').innerHTML = data;
			var aaa = $('#parent_path-id').html();

			document.getElementById('content-table').innerHTML = data;
			//alert(aaa);
			//$("#parent_path-id").html(aaa);
			externalLinks();

			$('#paralel-span').html('ÐžÐ´Ð¸Ð½Ð¾Ñ‡Ð½Ñ‹Ð¹ Ð¿Ñ€Ð¾ÑÐ¼Ð¾Ñ‚Ñ€');
		});
	}

	$('#search_btn').click(function () {
		var linkchik = $('#parallel-view').attr('data-link');
		var docid = $('#docid-input').val();
		var searchid = $('#searchid').val();
		var qqq = $('#column-column-second').html();
		if (qqq) {
			var data = { doc: docid, search: searchid, paralel: 1 };
		} else {
			var data = { doc: docid, search: searchid };
		}
		$.ajax({
			type: 'POST',
			url: '/contentleft/',
			data: data,
		}).done(function (data) {
			var aaa = $('#parent_path-id').html();
			document.getElementById('content-table').innerHTML = data;
			$('#parent_path-id').html(aaa);
			externalLinks();
		});
	});

	function toggleParallelView() {
		//$secondCol.toggleClass("hidden");
	}

	//$("#err-win").hide();
	$('.dobavit').click(function () {
		$('#dobavitIzbr').show();
		return false;
	});
	$('.menu-left li.active a').click(function () {
		//return false;
	});
	$('.menu-left li.active a').click(function () {
		//return false;
	});
	$('html').click(function () {
		$('.login-block').hide();
		$('.log').removeClass('log_hover');
		$('.reg').removeClass('reg_hover');
	});
	$('.log').click(function (e) {
		e.stopPropagation();
		$(this).addClass('log_hover');
		$('.login-block').show();
	});
	$('.login-block').click(function (e) {
		e.stopPropagation();
	});
	$('.registrat').click(function (e) {
		$('.reg-block').show();
		var delay = 5000; //Your delay in milliseconds
		timeoutID = setTimeout(function () {
			redirect_on_norma_reg();
		}, delay);
	});
	$('.reg-block').click(function (e) {
		window.clearTimeout(timeoutID);
		redirect_on_norma_reg();
	});
	function redirect_on_norma_reg() {
		window.open('https://www.norma.uz/registration', '_blank');
		$('.reg-block').hide();
	}
	$('.tabl-main tbody tr').click(function () {
		$('.tabl-main tbody tr').removeClass('tr-backg');
		$(this).addClass('tr-backg');
	});
	$('.slider .next').click(function () {
		$('.slide').animate(
			{
				left: '-242px',
			},
			500,
			function () {
				$('.slide').append($('.slide .slider-items:first')).css('left', 0);
			}
		);
	});
	$('.slider .prev').click(function () {
		$('.slide').prepend($('.slide .slider-items:last')).css('left', '-242px');
		$('.slide').animate(
			{
				left: 0,
			},
			500
		);
	});
	$('.rasshirenniy_poisk.svernut .click').click(function () {
		$(this).parent().hide();
		$('.rasshirenniy_poisk_block').slideUp(200);
		$('.rasshirenniy_poisk.razvernut p').show();
		var $s = $('#doc_text');
		var $t = $('#form_title_doc');
		var $b = $('#form_body_doc');
		if (($t.val() === '' || $t.val() === $s.val()) && ($b.val() === '' || $b.val() === $s.val())) {
			$t.val('');
			$b.val('');
		}
		top_search_form_activate('enable');
	});
	$('.rasshirenniy_poisk.razvernut .click').click(function () {
		$(this).hide();
		$('.rasshirenniy_poisk_block').slideDown(200, function () {
			$('.rasshirenniy_poisk.svernut').show();
			var $s = $('#doc_text');
			var $t = $('#form_title_doc');
			var $b = $('#form_body_doc');
			if ($s.val() !== '' && $t.val() === '' && $b.val() === '') {
				if ($('#chkSearchTitle').prop('checked')) {
					$t.val($s.val());
				}
				if ($('#chkSearchContent').prop('checked')) {
					$b.val($s.val());
				}
			}
		});
		top_search_form_activate('disable');
	});
	$('#grand_organization, #grand_document_type').chosen({});
	function top_search_form_activate(mode) {
		if (mode == 'disable') {
			$('#top_search_form').css('display', 'none');
			$('#search_phrase').css('display', 'block');
		} else {
			$('#top_search_form').css('display', 'block');
			$('#search_phrase').css('display', 'none');
		}
		return;

		$('#top_search_form')
			.find('input,select')
			.each(function () {
				if (mode == 'disable') {
					$(this).attr('disabled', true);
					$('#klav').css('display', 'none');
					$('#submit_btn_sht').removeClass('btn-yellow');
				} else {
					$(this).removeAttr('disabled');
					$('#klav').css('display', 'block');
					$('#submit_btn_sht').addClass('btn-yellow');
				}
				//       alert(mode + ' - ' + $(this).attr('type'))
			});
	}

	$('.sbros').click(function () {
		$('.r-p-main').find('input[type="text"]').val('');
		$('.r-p-main').find('input[type="checkbox"]').removeAttr('checked');
		$('.r-p-main').find('.block-3 input[type="radio"]').removeAttr('checked');
		/*
            $('.r-p-main').find('.block-3:first input[type="radio"]:last').prop('checked', 'checked');
            $('.r-p-main').find('.block-3:last input[type="radio"]:last').prop('checked', 'checked');
*/
		$('.r-p-main').find('.block-1:last input[type="radio"]').removeAttr('checked');
		$('.r-p-main').find('.block-1:last input[type="radio"]:first').prop('checked', 'checked');

		$('#grand_reg_mu').removeAttr('checked');
		$('#grand_strogo').prop('checked', 'checked');
		$('#grand_document_type').val('');
		$('#grand_organization').val('');
		$(".block-3 input[type='radio']").eq(1).prop('checked', 'checked');
	});
	/*
    $('#spl-okno .close').click(function () {
            $('#spl-okno').hide();
    });

    $('#err-win .close').click(function () {
        $('#err-win').hide();
    });
    */
	$('.reg').click(function () {
		$('#spl-okno').show();
	});

	$('.close').click(function () {
		//$('#spl-okno').hide();
		$('.close').parent().hide();
	});
	/*
    $('#activ-tarifs-okno .close').click(function () {
        $(".close").parent().hide();
        //$('#activ-tarifs-okno').hide();
    });
    */
	$('.activ-tarifs').click(function () {
		$('#activ-tarifs-okno').show();
	});
	/*
    $('.modal .modal-close').click(function () {
            $('.modal').hide();
            return false;
    });*/
	$('#login_input').click(function () {
		var logininput = $('#login_input').val();
		if (logininput == 'Ð›Ð¾Ð³Ð¸Ð½') {
			$('#login_input').val('');
		}
	});
	$('#pasword_input').click(function () {
		var passinput = $('#pasword_input').val();
		if (passinput == 'ÐŸÐ°Ñ€Ð¾Ð»ÑŒ') {
			$('#pasword_input').val('');
			$('#pasword_input').attr('type', 'password');
		}
	});

	//=================================================================================

	var root = $('#multi-derevo');
	$('li.f-item', root).css('border', 'none');
	$('li.vetka', root).append('<hr>');
	$('li', root).each(function (index) {
		this.id = 'n' + index;
	});

	//    $('li', root).find('a').append('<b class="icon icon-close2"></b>');
	//    $('li', root).find('b').click(function () {
	//            $(this).parent().parent().parent().remove();
	//    })
	$('li:has("ul")', root).find('a:first').prepend('<em class="icon icon-marker"></em>');
	$('li:not(:has("ul"))', root).find('a:first').prepend('<em class="icon icon-folder"></em>');
	$('li:not(:has("ul"))', root).find('i').css({
		border: 'none',
		color: '#000',
	});
	$('li.file em', root).removeClass('icon-folder').addClass('icon-file');
	var current_id = 'n0';
	if (current_id)
		$('#' + current_id)
			.find('a:first')
			.toggleClass('current');
	$('li span', root).click(function () {
		$('a.current', root).removeClass('current');
		var a = $('a:first', this.parentNode);
		a.toggleClass('current');
		var current_id = a.parent('li').attr('id');
		toggleNode(this.parentNode);
	});
	//*******AKA AZAMAT*****************************
	/*$('#authorization_button').click(function(){
         alert("ok");
          $.ajax({
            url: "/User.php",
            type : "GET",
            dataType : "json",
            success: function (datas) {
                alert(datas);
            }

        });

     });*/
	var ss = $('#username_input_id').val();
	if (ss == 1) {
		try {
			curLoc = '/';
			$('#err-win').show();
			$('#username_input_id').val(0);
			history.pushState(null, null, curLoc);
			return;
		} catch (e) {}
		location.hash = '#' + curLoc;
	}

	$('#lang-a-id').click(function () {});

	$("a[name='tarif-a-name']").click(function () {
		var tid = $(this).attr('tarifid');
		var tarifname = $(this).attr('tarifname');

		$.ajax({
			type: 'POST',
			url: '/tarifplan/products',
			data: { tid: tid, tarifname: tarifname },
			success: function (answ) {
				$('#tarif-products-div').html(answ);
				$('#tarif-products-div').show();
			},
		});
	});

	$("input[name='tarif-select-button']").click(function () {
		var prodstr = $(this).attr('products');
		var prodarr = prodstr.split('-');
		var prodliststr = $('#tarif-product-list').val();
		var prodlang = $('#tarif-lang').val();
		var tid = $(this).attr('tid');
		var prodlistarr = prodliststr.split('-');
		var prodid = 0;
		//var allCookies = document.cookie.split(";");

		for (var i = 0; i < prodlistarr.length; i++) {
			if (i == 0) continue;
			prodid = 'product-' + prodlistarr[i];
			document.getElementById(prodid).innerHTML = '';
			swith_product('on', prodlistarr[i]);
		}
		for (var i = 0; i < prodarr.length; i++) {
			if (i == 0) continue;
			prodid = 'product-' + prodarr[i];
			prodname = $('#product-a-' + prodid).attr('prodname');
			/*
 * Ð¾Ñ‚ÐºÐ»ÑŽÑ‡Ð¸Ð»Ð¸ Ð³Ð°Ð»ÐºÑƒ
            document.getElementById(prodid).innerHTML ='<img  src="/img/new/icon-galochka.png"  alt="'+prodname+'" title="'+prodname+'" height="25" width="25">';
*/
			//<img  src="/img/zeleniygalka.png"  alt={$menu.name} title={$menu.name} height="44" width="42">
			swith_product('off', prodarr[i]);
		}
		prodlang = 'ru';

		//console.log(prodarr, prodlistarr);

		reset_slider();
		/*
         $.ajax({
            type: "POST",
            url: "/scripts/tarif_desc.php",
            data: {tid:tid, lang:prodlang},
            success: function(answ){

                $("#tarif-descr-div-id").html(answ);
                var periodStr = $('#tarif-period-id').attr('period');
                var costStr =  $('#tarif-period-id').attr('cost');
                var perIdStr =  $('#tarif-period-id').attr('perid');
                var perIdarr = perIdStr.split('-');
                var periodarr = periodStr.split('-');
                var costarr = costStr.split('-');
                $("#timeSlider").slider("value", 0, 0);
                $("#timeSlider").slider("value", 1, 6);
                $("#tarif-period-put").html('');
                $("#tarif-cost-put").html('');
                $("#tarif-period-put").html(periodarr[1]);
                $("#tarif-cost-put").html(costarr[1]);
                $("#tarif-period-id-hidden").attr('value',perIdarr[1]);
            }
         });
         //  /scripts/tarif_desc.php
*/

		return false;
	});

	function swith_product(type, id) {
		if (type == 'off') {
			/*
          src = '/img/new/checkbox_2.gif';
          alt = 'remove';
*/
			check = 'on';
			background = '#D0F6D0';
			border = '1px solid #239523';
			is_checked = true;
		} else {
			/*
          src = '/img/new/checkbox_1.gif';
          alt = 'add';
*/
			check = 'off';
			background = '';
			border = '';
			is_checked = false;
		}
		/*
        $('#check-img-'+id).attr('src', src)
                           .attr('alt', alt);
*/
		$('#check-product-' + id).attr('data-check', check);
		$('#product-a-' + id).prop('checked', is_checked);
		/*
        $('#product-a-'+id).css('background', background)
                          .css('border', border);
*/
	}

	$("a[name='product-a-info']").click(function () {
		var tid = $(this).attr('id');
		var prodname = $(this).attr('prodname');
		tid = tid.split('-');
		tid = tid[2];
		var prodliststr = $('#tarif-product-list').val();

		var prodlistarr = prodliststr.split('-');
		var prodid = 0;
		//alert(tid + ' ' + prodname);
		$.ajax({
			type: 'POST',
			url: '/tarifplan/products',
			data: { tid: tid, prodname: prodname },
			success: function (answ) {
				$('#tarif-products-div').html(answ);
				$('#tarif-products-div').show();
			},
		});
		return false;
	});
	var serj = 0;
	$('#timeSlider').slider({
		min: 1,
		max: 4,
		range: 'min',
		value: 1,
		slide: function (event, ul) {
			var periodStr = $('#tarif-period-id').attr('period');
			var costStr = $('#tarif-period-id').attr('cost');
			var perIdStr = $('#tarif-period-id').attr('perid');
			var perIdarr = perIdStr.split('-');
			var periodarr = periodStr.split('-');
			var costarr = costStr.split('-');
			//alert(periodarr[ul.value]);
			$('#tarif-period-put').html(periodarr[ul.value]);
			$('#tarif-cost-put').html(costarr[ul.value]);
			$('#tarif-period-id-hidden').attr('value', perIdarr[ul.value]);
		},
	});
	$('#tarif-next-a').click(function () {
		//if(clickpayflag == 0){
		clickpayflag = 1;
		//$(this).attr('disable','true');
		$('#tarif-products-div').css('width', '370px');
		if (!$('#cost_full_for_pay').text()) {
			var stra =
				'<a href="#w" class="close" onclick="TarifProClose()"><span class="icon icon-close"></span></a><div class="win-title"></div><div class="bdy">';
			var str1 =
				'<p style="margin-top:40px; margin-left:20px; margin-bottom:60px; color:red; font-size:18px;">ÐÐµÐ¾Ð±Ñ…Ð¾Ð´Ð¸Ð¼Ð¾ Ð²Ñ‹Ð±Ñ€Ð°Ñ‚ÑŒ Ñ‚Ð°Ñ€Ð¸Ñ„Ð½Ñ‹Ð¹ Ð¿Ð»Ð°Ð½ Ð¸Ð»Ð¸ Ð¿Ñ€Ð¾Ð´ÑƒÐºÑ‚</p></div>';
			$('#tarif-products-div').html(stra + str1);
			$('#tarif-products-div').show();
		} else {
			if ($('#tarif-session-id').val() == '') {
				$('#tarif-products-div2').show();
			} else {
				SubmitProcess('tarif-next-a');
				/*
                    var perid = $("#tarif-period-id-hidden").val();
                    var tid   = $("#tarif-id-hidden").val();

*/
				var lang = $('#tarif-lang').val();

				var products = $('#products_for_pay').text();
				var period = $('#period_for_pay').text();
				var cost_full = $('#cost_full_for_pay').text();
				var skidka_percent = $('#skidka_percent_for_pay').text();
				var skidka_sum = $('#skidka_sum_for_pay').text();
				var cost_skidka = $('#cost_skidka_for_pay').text();
				if (lang) {
					lang = '/' + lang;
				}
				/*
alert('cost_full - ' + cost_full +' skidka_percent - ' + skidka_percent + ' skidka_sum - ' + skidka_sum + ' cost_skidka - ' +cost_skidka);
return;
*/
				//                            data: {perid:perid,tid:tid},
				$.ajax({
					type: 'POST',
					url: '/scripts/new_order.php',
					data: {
						products: products,
						period: period,
						cost_full: cost_full,
						skidka_percent: skidka_percent,
						skidka_sum: skidka_sum,
						cost_skidka: cost_skidka,
					},
					success: function (answ) {
						orderid = answ;
						window.location = lang + '/tarif/payment?orderid=' + orderid;
						//                           window.location=lang+"/tarif/payment?perid="+perid+"&tid="+tid+"&orderid="+orderid;
					},
					error: function () {
						alert('ÐžÑˆÐ¸Ð±ÐºÐ° Ð¿Ñ€Ð¸ Ð³ÐµÐ½ÐµÑ€Ð°Ñ†Ð¸Ð¸ Ð·Ð°ÐºÐ°Ð·Ð°!');
						SubmitCancel('tarif-next-a');
					},
				});
			}
			//}
		}
		return false;
		//alert(get_cookie('ses_SITE_userid'));
		// alert($.session.get("ses_SITE_userid"));
	});
	/*
    $("#click-pay-button").click(function(){
        var perid = $("#tarif-period-id-hidden").val();
        var tid   = $("#tarif-id-hidden").val();
        //var
        $.ajax({
                type: "POST",
                url: "/scripts/new_order.php",
                data: {perid:perid,tid:tid},
                success: function(answ){

                    var form =document.getElementById("click_form'");
                    form.submit();
                },
                error: function(){
                    alert("ÐžÑˆÐ¸Ð±ÐºÐ° Ð¿Ñ€Ð¸ Ð³ÐµÐ½ÐµÑ€Ð°Ñ†Ð¸Ð¸ Ð·Ð°ÐºÐ°Ð·Ð°!");
                }
        });


    });*/

	$('#LoginFormTarif').submit(function () {
		alert('submit');
	});

	$("a[name='tabs-a']").click(function () {
		attr = $(this).attr('abbra');
		if (attr != 'NP') {
			$('#bases_for_search-div-id').hide();
			$('#razdeli-p').hide();
			$('#form-control-pokazat-div').hide();
		} else {
			$('#bases_for_search-div-id').show();
			$('#razdeli-p').show();
			$('#form-control-pokazat-div').show();
		}
	});

	$('.span-click-srch').click(function () {
		var id = $(this).attr('inputid');
		var type = document.getElementById(id).type.toString();
		if (type == 'radio') {
			if (id.toString().substr(0, 1) == 'r') {
				document.getElementById(id).checked = 'checked';
				if (id.toString() == 'r1') {
					$('#sdate1,#sdate2').datepick('disable');
				} else {
					if (id.toString() == 'r2') {
						$('#sdate1').datepick('enable');
						$('#sdate2').datepick('disable');
					} else {
						$('#sdate1').datepick('enable');
						$('#sdate2').datepick('enable');
					}
				}
			} else {
				document.getElementById(id).checked = 'checked';
			}
		} else {
			if (document.getElementById(id).checked) {
				document.getElementById(id).checked = '';
			} else {
				document.getElementById(id).checked = 'checked';
			}
		}
	});

	$('#tarif-products-div').click(function () {
		//$(this).hide();
		//$(this).html('');
	});
	$(window).click(function () {
		/*if($("#tarif-products-div").html()){
            $("#tarif-products-div").hide();
            $("#tarif-products-div").html('');
        }*/
	});
	//**********Docement Ready END********************
});
function toggleNode(Node) {
	prepareLast(Node);
	var ul = $('ul:first', Node);
	if (ul.length) {
		ul.slideToggle(200);
		var em = $('em:first', Node);
		em.toggleClass('open');
	}
}
function prepareLast(Node) {
	$(Node).each(function () {
		if (!$(this).next().length) {
			$(this).find('ul:first > li').addClass('last');
		}
	});
}

// Ð¡Ð 01,04,2015
function svernut() {
	$(this).parent().hide();
	$('.rasshirenniy_poisk_block').slideUp(200);
	$('.rasshirenniy_poisk.razvernut p').show();
}
function TranlitSuc() {
	var a_tag = $('#lang-a-id').html();
	var demoshow = $('#translit-DEMOSHOW').val();
	/*
    if (a_tag.toString().indexOf("Ð ÑƒÑÑÐºÐ¸Ð¹")){
        alert(a_tag);
        TranlitErr();
        return false;
    }*/

	var docid = document.getElementById('docid-input').value;
	var productid = document.getElementById('productid-input').value;
	$.ajax({
		type: 'GET',
		url: '/scripts/latin.php?id=' + docid + '&demoshow=' + demoshow + '&products=' + productid,
		data: '',
		beforeSend: function () {
			$('#main_contents_list').css('display', 'none');
			$('#search_result_box')
				.css('display', 'block')
				.css('text-align', 'center')
				.css('padding-top', '50px')
				.html("Ð—Ð°Ð³Ñ€ÑƒÐ·ÐºÐ° Ð´Ð¾ÐºÑƒÐ¼ÐµÐ½Ñ‚Ð°<br /><img src='/files1/ajax-loader.gif' alt='' title='Loading' />");
		},
	}).done(function (data) {
		//var aaa = $("#parent_path-id").html();
		//document.getElementById('column-column-first').innerHTML= data;
		$('#main_contents_list').css('display', '');
		$('#search_result_box').hide();

		$('#column-column-second').html('');
		$('#column-column-second').hide();
		contentLoaded = 0;

		//           $("#paralel-span").html('ÐŸÐ°Ñ€Ð°Ð»Ð»ÐµÐ»ÑŒÐ½Ñ‹Ð¹ Ð¿Ñ€Ð¾ÑÐ¼Ð¾Ñ‚Ñ€');
		$('#column-column-first').html(data);

		document.getElementById('export-word-a').href = document.getElementById('export-word-a').href + '&translit=1';
		document.getElementById('translit-input').value = '1';
		$('#bar-left-main-fluid').css('height', 'auto');
		$('#bar-left-selection').css('height', 'auto');
		$('#bar-main-section').css('height', 'auto');
		//externalLinks();
	});
}
function TranlitErr(title, mess) {
	//    $("#err-win-neo-title").html("Ð¤ÑƒÐ½ÐºÑ†Ð¸Ñ Ð½ÐµÐ´Ð¾ÑÑ‚ÑƒÐ¿Ð½Ð°");
	//    $("#err-win-neo-body").html("Ð¢Ñ€Ð°Ð½ÑÐ»Ð¸Ñ‚ÐµÑ€Ð°Ñ†Ð¸Ñ Ð´Ð¾ÑÑ‚ÑƒÐ¿Ð½Ð° Ñ‚Ð¾Ð»ÑŒÐºÐ¾ Ð´Ð»Ñ ÑƒÐ·Ð±ÐµÐºÑÐºÐ¾Ð³Ð¾ ÑÐ·Ñ‹ÐºÐ°");
	$('#err-win-neo-title').html(title);
	$('#err-win-neo-body').html(mess);
	$('#err-win-neo').show();
}
function Print() {
	var docid = document.getElementById('docid-input').value;
	var authuser = $('#print-doc-a').attr('barat');
	var demoshow = $('#translit-DEMOSHOW').val();
	var product = $('#product').val();
	var hide_tags_content = '';
	if ($('#hide_tags_content').val() == 1) {
		hide_tags_content = '&hide_tags_content';
	}
	if (authuser) {
		var url = '/scripts/print.php?link=' + authuser + '&products=' + product + hide_tags_content;
	} else {
		var url = '/scripts/print.php?id=' + docid + '&products=' + product;
	}
	var translit = document.getElementById('translit-input').value;
	if (translit) {
		url = url + '&translit=1';
	}
	window.open(
		url,
		'_blank',
		(config =
			'height=690,width=1000,toolbar=no,menubar=no,scrollbars=yes,resizable=yes,location=no,directories=no,status=no,left=30,top=20')
	);
	return false;
}

function TarifProClose(winw) {
	/*    var winwidth = (winw) ? winw : 370 ;
    winwidth = winwidth + 'px;';
alert(winw + ' * ' + winwidth);
//    $("#tarif-products-div").css('width','370px');
    $("#tarif-products-div").css('width',winwidth);
*/
	$('#tarif-products-div').css('width', '570px');
	$('#tarif-products-div').hide();
	$('#tarif-products-div2').hide();
}
function TarifProSelect() {
	var tarifname = $('#tarif-plan-h3').html();
	//alert($("#selected-tarif-list-ul").find('li:last').html());
	$('#tarif-products-div').hide();
}

function TarifEntry() {
	var stra =
		'<a href="#w" class="close" onclick="TarifProClose()"><span class="icon icon-close"></span></a><div class="win-title"></div><div class="bdy">';
	var str1 = '<h4 style="margin-left:80px">ÐÐ²Ñ‚Ð¾Ñ€Ð¸Ð·Ð°Ñ†Ð¸Ñ</h4>';
	str1 +=
		'<input id ="tarif-login-input" type="text" name="login" value="" placeholder="Ð›Ð¾Ð³Ð¸Ð½" class="form_control" size="40" style="margin-bottom:20px;margin-top:40px ">';
	//str1 +='<br/>';
	str1 +=
		'<input id ="tarif-password-input" type="password" name="password" value="" placeholder="ÐŸÐ°Ñ€Ð¾Ð»ÑŒ" class="form_control" size="40" style="margin-bottom:40px;">';
	//str1 +='<br/>';
	str1 +=
		'<input type="button" id="entry-submit-btn" name="entry-submit-btn" onclick="LoginFormTarif()" value="Ð’Ð¾Ð¹Ñ‚Ð¸ Ð² Norma Online" class="btn btn-blue login-button" style="height: 40px; width:150px; margin-left:140px"><p class="forget_pass"><a href="https://norma.local/forgetpass">Ð—Ð°Ð±Ñ‹Ð»Ð¸ Ð¿Ð°Ñ€Ð¾Ð»ÑŒ</a></p>';
	str1 += '</div></div>';
	$('#tarif-products-div').css('width', '370px');

	$('#tarif-products-div').css('background-color', '#EAEFF4;');
	$('#tarif-products-div').html("<div style='margin-left:20px' >" + stra + str1 + '</div>');
	$('#tarif-products-div').show();
}
function LoginFormTarif() {
	var login = $('#tarif-login-input').val();
	var password = $('#tarif-password-input').val();
	var lang = $('#tarif-lang').val();
	if (lang) {
		lang = '/' + lang;
	}

	$.ajax({
		type: 'POST',
		url: '/scripts/check_user_tarif.php',
		data: { login: login, password: password, entry_submit_btn: 'btn_submit' },
		success: function (answ) {
			//alert(answ);
			if (answ == 'ok') {
				$('#tarif-products-div2').hide();
				//var period  = $("#tarif-period-put").html();
				//var cost = $("#tarif-cost-put").html();
				//                    var perid = $("#tarif-period-id-hidden").val();
				//                    var tid   = $("#tarif-id-hidden").val();
				var products = $('#products_for_pay').text();
				var period = $('#period_for_pay').text();
				var cost_full = $('#cost_full_for_pay').text();
				var skidka_percent = $('#skidka_percent_for_pay').text();
				var skidka_sum = $('#skidka_sum_for_pay').text();
				var cost_skidka = $('#cost_skidka_for_pay').text();

				$.ajax({
					type: 'POST',
					url: '/scripts/new_order.php',
					//                        data: {perid:perid,tid:tid},
					data: {
						products: products,
						period: period,
						cost_full: cost_full,
						skidka_percent: skidka_percent,
						skidka_sum: skidka_sum,
						cost_skidka: cost_skidka,
					},
					success: function (answ) {
						var orderid = answ;
						window.location = lang + '/tarif/payment?orderid=' + orderid;
						//                            window.location=lang+"/tarif/payment?perid="+perid+"&tid="+tid+"&orderid="+orderid;
					},
					error: function () {
						alert('ÐžÑˆÐ¸Ð±ÐºÐ° Ð¿Ñ€Ð¸ Ð³ÐµÐ½ÐµÑ€Ð°Ñ†Ð¸Ð¸ Ð·Ð°ÐºÐ°Ð·Ð°!');
					},
				});
			} else {
				if (answ == 'err_email') {
					alert('ÐÐµÐ¾Ð±Ñ…Ð¾Ð´Ð¸Ð¼Ð¾ Ð¿Ð¾Ð´Ñ‚Ð²ÐµÑ€Ð´Ð¸Ñ‚ÑŒ Email');
				} else {
					alert('ÐÐµÐ²ÐµÑ€Ð½Ñ‹Ð¹ Ð»Ð¾Ð³Ð¸Ð½ Ð¸Ð»Ð¸ Ð¿Ð°Ñ€Ð¾Ð»ÑŒ');
				}
			}
			// $("#tarif-products-div").html(answ);
			//$("#tarif-products-div").show();
		},
	});
	return false;
}
function TaqrifRegistration() {
	$.getJSON('/scripts/getip.php', function (data) {
		window.location = 'https://www.norma.uz/registration';
		/*if(data.ip=='127.0.0.1' || data.ip=='192.168.0.75'){
            //window.location="http://norma.local/registration";
        }else {
            window.location="http://norma.uz/registration";
        } */
	});
	//window.location="http://norma.uz/registration";
}

function Criter() {
	BackTrShow();
	var lang = $('#right-search-criter').attr('lang');
	var doctype = $('#right-search-criter').attr('doctype');
	var partition = $('#right-search-criter').attr('partion');

	$('tr[name^="tr"]').each(function () {
		langTr = $(this).attr('lang');

		if (lang == langTr) {
			$(this).show();
		} else {
			$(this).hide();
		}
	});

	/*
    if (lang){
        $('input[name="langUZ'+window.product+'"]').each(function(){
            var sds = $(this).val();
            //alert(sds);
            if(lang=='UZ'){
                $('tr[name="tr'+sds+'"]').show();
            }else{
                $('tr[name="tr'+sds+'"]').hide();
            }
        });
        $('input[name="langRU'+window.product+'"]').each(function(){
            var sds = $(this).val();
            if(lang=='UZ'){
                $('tr[name="tr'+sds+'"]').hide();
            } else {
                $('tr[name="tr'+sds+'"]').show();
            }
        });
    }
    if (doctype){
        $('tr[name^="tr"]').each(function(){

           $(this).hide();
        });
        /*$('input[name="doc_type'+doctype+'"]').each(function(){
            docid = $(this).val();
            langTr = $(this).attr('lang');
            if (lang){
                if(lang==langTr){
                    $('tr[name="tr'+docid+'"]').show();
                }
            } else{
               $('tr[name="tr'+docid+'"]').show();
            }
        });
    }*/
	if (partition) {
		var knopqa = $(e).is(':checked');
		if (knopqa == false) {
			$('input[name^="form_base"]').each(function () {
				var sds = $(this).val();
				$('tr[name="tr' + sds + '"]').hide();
			});
		}
	}
	BackTrHide();
}
function ltr1Click(lngg) {
	BackTrShow();
	var lang = lngg;
	var doctype = $('#right-search-criter').attr('doctype');
	var partition = $('#right-search-criter').attr('partion');
	$('#right-search-criter').attr('lang', lang);
	var qaq = '';
	$('input:checkbox:not(:checked)').each(function () {
		if ($(this).attr('name') == 'form_base') {
			qaq += '-' + $(this).val();
		}
	});

	$('tr[name^="tr"]').each(function () {
		langTr = $(this).attr('lang');
		doctypeTr = $(this).attr('doctype');
		partitionTr = $(this).attr('partition');
		if (lang == langTr) {
			if (doctype) {
				if (doctypeTr == doctype) {
					if (isPartition(partitionTr, qaq)) {
						$(this).show();
					} else {
						$(this).hide();
					}
				} else {
					$(this).hide();
				}
			} else {
				if (isPartition(partitionTr, qaq)) {
					$(this).show();
				} else {
					$(this).hide();
				}
			}
		} else {
			$(this).hide();
		}
	});
	BackTrHide();
	//
	//Criter();
	//BackTrHide();
}
/*
function ltr2Click(){
    //var sel =document.getElementById('grand_document_type');
    //sel.options[0].selected=true;
    //BackTrShow();

    $('input[name="langRU'+window.product+'"]').each(function(){
        var sds = $(this).val();
        $('tr[name="tr'+sds+'"]').hide();
     });
    $('input[name="langUZ'+window.product+'"]').each(function(){
        var sds = $(this).val();
        $('tr[name="tr'+sds+'"]').show();
    });
    $("#right-search-criter").attr('lang','UZ');
    Criter();
   // BackTrHide();
}*/
function ltr3Click() {
	var sel = document.getElementById('grand_document_type');
	sel.options[0].selected = true;
	$('input:checkbox:not(:checked)').each(function () {
		var sss = $(this).attr('id');
		document.getElementById(sss).checked = 'checked';
	});
	BackTrShow();
	PageShow(window.product);
	$('tr[name^="tr"]').each(function () {
		$(this).show();
	});
	$('#right-search-criter').attr('lang', '');
	$('#right-search-criter').attr('doctype', '');
}

function GrandDoctype(e) {
	var typytypy = $(e).val();
	//document.getElementById('ltr3').checked='checked';
	BackTrShow();
	var doctype = $('#right-search-criter').attr('doctype', typytypy);
	var lang = $('#right-search-criter').attr('lang');
	var partition = $('#right-search-criter').attr('partion');
	var qaq = '';
	$('input:checkbox:not(:checked)').each(function () {
		if ($(this).attr('name') == 'form_base') {
			qaq += '-' + $(this).val();
		}
	});
	if (typytypy != '') {
		$('tr[name^="tr"]').each(function () {
			langTr = $(this).attr('lang');
			doctypeTr = $(this).attr('doctype');
			partitionTr = $(this).attr('partition');
			if (doctypeTr == typytypy) {
				if (lang) {
					if (lang == langTr) {
						if (isPartition(partitionTr, qaq)) {
							$(this).show();
						} else {
							$(this).hide();
						}
					} else {
						$(this).hide();
					}
				} else {
					if (isPartition(partitionTr, qaq)) {
						$(this).show();
					} else {
						$(this).hide();
					}
				}
			} else {
				$(this).hide();
			}
		});
		BackTrHide();
	} else {
		GrandTypeAll();
	}
}

function isPartition(partitionTr, qaq) {
	if (qaq) {
		//Ð¤ÑƒÐ½ÐºÑ†Ð¸Ñ indexOf Ð½Ðµ Ñ€Ð°Ð±Ð¾Ñ‚Ð°ÐµÑ‚ Ð² IE Ð½Ñƒ Ð¸ Ð±Ð¾Ð³ Ñ Ð½Ð¸Ð¼
		if (qaq.indexOf(partitionTr) > 0) {
			//$(this).hide();
			return false;
		} else {
			//$(this).show();
			return true;
		}
	} else {
		//$(this).show();
		return true;
	}
}

function GrandTypeAll() {
	$('tr[name^="tr"]').each(function () {
		$(this).show();
	});
	var doctype = $('#right-search-criter').attr('doctype', '');
	$('#right-search-criter').attr('lang', '');
	document.getElementById('ltr3').checked = 'checked';
	$('input:checkbox:not(:checked)').each(function () {
		var sss = $(this).attr('id');
		document.getElementById(sss).checked = 'checked';
	});

	BackTrShow();
	// alert(window.product);
	PageShow(window.product);
}

var sqs = 0;
function RemoveAllA() {
	$('#tabs').tabs('option', 'active', 0);
	document.getElementById('ltr3').checked = 'checked';
	var aaa = document.getElementById('shssow_all_aa2');
	$("input[name='form_base']").each(function () {
		knopqa = $(this).is(':checked');

		var base = $(this).val();
		if (sqs == 1) {
			if (knopqa == false) {
				var sss = $(this).attr('id');
				document.getElementById(sss).checked = 'checked';
			}
			$('input[name="base' + base + '"]').each(function () {
				var sds = $(this).val();
				$('tr[name="tr' + sds + '"]').show();
			});
		} else {
			if (knopqa == true) {
				var sss = $(this).attr('id');
				document.getElementById(sss).checked = '';
			}
			$('input[name="base' + base + '"]').each(function () {
				var sds = $(this).val();
				$('tr[name="tr' + sds + '"]').hide();
			});
		}
	});
	BackTrShow();
	if (sqs == 0) {
		sqs = 1;
		aaa.innerHTML = 'Ð’Ñ‹Ð´ÐµÐ»Ð¸Ñ‚ÑŒ Ð²ÑÐµ';
		BackTrHide();
		PageHide();
	} else {
		document.getElementById('ltr3').checked = 'checked';
		var sel = document.getElementById('grand_document_type');
		sel.options[0].selected = true;
		sqs = 0;
		aaa.innerHTML = 'Ð£Ð±Ñ€Ð°Ñ‚ÑŒ Ð²ÑÐµ';
		PageShow(window.product);
	}

	return false;
}

function BackTrShow() {
	$("tr[name='backg-tr']").each(function () {
		$(this).show();
	});
}

function BackTrHide() {
	$("tr[name='backg-tr']").each(function () {
		var findnoneflag = 0;
		var trid = $(this);
		$(this)
			.find('tr')
			.each(function () {
				aa = $(this).css('display');
				if (aa != 'none') {
					findnoneflag = 1;
					return findnoneflag;
				}
			});
		if (findnoneflag != 1) {
			trid.hide();
		}
	});
	PageHide();
}

function PageHide() {
	$('.pagination').hide();
	$("td[name^='sas']").each(function () {
		//        $(this).slideUp("slow");
		$(this).show();
	});
}

function PageShow(prod_abbrev) {
	ShowPage(1, prod_abbrev);
	$('.pagination').show();
}

function ShowPage(page, prod_abbrev) {
	$("td[name='sas" + prod_abbrev + "']").each(function () {
		//
		$(this).hide();
	});

	$("a[name='pagination_" + prod_abbrev + "']").each(function () {
		//
		$(this).removeClass();
	});
	//$("#pagination_"+page+"_"+prod_abbrev).addClass("active");

	$("a[id^='pagination_" + page + '_' + prod_abbrev + "']").each(function () {
		$(this).addClass('active');
	});

	$('#page_' + page + '_' + prod_abbrev).css('display', 'block');
	$('html,body').animate({ scrollTop: 250 }, 1000);
}
// Initial execution if needed

function Agree(button) {
	if ($('#agree').is(':checked')) {
		$('#' + button).prop('disabled', false);
		$('#' + button).removeClass('btn-gray');
		$('#' + button).addClass('btn-blue');
	} else {
		$('#' + button).prop('disabled', true);
		$('#' + button).removeClass('btn-blue');
		$('#' + button).addClass('btn-gray');
	}
}

function SubmitProcess(button) {
	$('#' + button)
		.prop('disabled', true)
		.css('display', 'none');
	$('#buy_loader').css('display', 'block');
}
function SubmitCancel(button) {
	$('#' + button)
		.prop('disabled', false)
		.css('display', 'block');
	$('#buy_loader').css('display', 'none');
}