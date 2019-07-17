///////////////////FACEBOOK
jQuery(document).ready(function(){
    window.fbAsyncInit = function() {
        FB.init({
          appId      : window.ism_facebook_id,
          xfbml      : true,
          version    : 'v2.5'
        });
      };

      (function(d, s, id){
         var js, fjs = d.getElementsByTagName(s)[0];
         if (d.getElementById(id)) {return;}
         js = d.createElement(s); js.id = id;
         js.src = "//connect.facebook.net/en_US/sdk.js";
         fjs.parentNode.insertBefore(js, fjs);
       }(document, 'script', 'facebook-jssdk-ism'));	      
});

function ism_fake_increment(target, type, url){
    var value = parseInt(jQuery(target).html());
    if( (value%1 === 0 && value!='') || value == 0 ) value++;//de testat
    jQuery(target).html(value);
    
    //share counts in db
    if(typeof window.ism_save_share_counts!='undefined' && window.ism_save_share_counts==1){
        jQuery.ajax({
            type : "post",
            url : window.ism_base_path+'/wp-admin/admin-ajax.php',
            data : {
                   		action: "ism_update_db_share_count_share_bttn_action",
                   		sm: type,
                   		the_url: url,
                   },
        });
    } 
    
    
    //Statistics    
    //if(typeof window.ism_enable_statistics!='undefined' && window.ism_enable_statistics==1 ){ //old version
    if ((typeof window.ism_enable_statistics!='undefined' && window.ism_enable_statistics==1) || type=='twitter' ){
    	//////////TWITTER OFFLINE COUNTS
        jQuery.ajax({
            type : "post",
            url : window.ism_base_path+'/wp-admin/admin-ajax.php',
            data : {
                   		action: "ism_update_share_db_wd",
                   		sm: type,
                   		the_url: url,
                   },
        });    	
    }
}

function ism_load_counts(i, ism_url, wrapp_id, items, i_print){
	//check every time for counts
    if(typeof items[i]=='undefined') return;
    the_sm_type = items[i];
   
    jQuery.ajax({
       type : "post",
       url : window.ism_base_path+'/wp-admin/admin-ajax.php',
       data : {
              action: "ism_a_return_counts",
              dir_url: ism_url,
              sm_type: the_sm_type
              },
       success: function(response){
           num = i+1;
           ism_load_counts(num, ism_url, wrapp_id, items, i_print);//recursive 
           //console.log(items[i]+ ' ' + response);
           if(response=='' || isNaN(response) ) return;
           
           if(items[i]=='twitter' || items[i]=='linkedin'){
        	   recheck_tw_li_every_time(ism_url, wrapp_id, items[i], i_print);
           }else{
           	   setNumDiv(0, Number(response), wrapp_id+' .'+items[i]+'_share_count', i_print);   
           	   //total share count
           	   if(typeof window.total_share_obj!='undefined' && typeof window.total_share_obj[wrapp_id]!='undefined'){
           		   window.total_share_obj[wrapp_id] = Number(response) + Number(window.total_share_obj[wrapp_id]);
           	   }
           }
           
         }
     });
	
    //call ism_print_total_count after loop is over
    if(items.length==i+1) {
    	if(typeof window.total_share_obj!='undefined' && typeof window.total_share_obj[wrapp_id]!='undefined'){
    		ism_print_total_count(wrapp_id);
    	}
    }
}


function recheck_tw_li_every_time(ism_url, wrapp_id, the_sm_type, i_print){
	//check every time for twitter and linkedin  
	
	if(the_sm_type=='linkedin'){
		var linkedin_url = "https://www.linkedin.com/countserv/count/share?format=jsonp&url="+ism_url+"&callback=?";
		jQuery.getJSON(linkedin_url).done(function(data){ 
		    jQuery.ajax({
		        type : "post",
		        url : window.ism_base_path+'/wp-admin/admin-ajax.php',
		        data : {
		               action: "ism_check_min_special_counts_from_js_tl",
		               the_url: ism_url,
		               the_type: the_sm_type,
		               the_count: data.count,
		               },
		        success: function(response){
		        	if(response!='not_show'){
		        		n = Number(response);
		        		setNumDiv(0, n, wrapp_id+' .linkedin_share_count', i_print);
		        		
		        		//total share count
		        		if(typeof window.total_share_obj!='undefined' && typeof window.total_share_obj[wrapp_id]!='undefined'){
			        		window.total_share_obj[wrapp_id] = n + Number(window.total_share_obj[wrapp_id]);
			        		ism_print_total_count(wrapp_id);	
		        		}
		        	}		        	
		        }
		    });			
		});
	} else if(the_sm_type=='twitter') {
    // return;
    ////////// TWITTER OFFLINE COUNTS
    //	var twitter_url	= "http://cdn.api.twitter.com/1/urls/count.json?url="+ism_url+"&callback=?";
		var twitter_url	= "https://public.newsharecounts.com/count.json?url="+ism_url;
		jQuery.getJSON(twitter_url).done(function(data){ 
		    jQuery.ajax({
		        type : "post",
		        url : window.ism_base_path+'/wp-admin/admin-ajax.php',
		        data : {
		               action: "ism_check_min_special_counts_from_js_tl",
		               the_url: ism_url,
		               the_type: the_sm_type,
		               the_count: data.count,
		               },
		        success: function(response){
		        	if(response!='not_show'){
		        		n = parseInt(response);
		        		setNumDiv(0, n, wrapp_id+' .twitter_share_count', i_print);
		        		
		        		//total share count
		        		if(typeof window.total_share_obj!='undefined' && typeof window.total_share_obj[wrapp_id]!='undefined'){
			        		window.total_share_obj[wrapp_id] = n + Number(window.total_share_obj[wrapp_id]);
			        		ism_print_total_count(wrapp_id);	
		        		}
		        	}
		        }
		    });			
		});		
	}
    
}


function ism_load_counts_from_db(the_sm_list, ism_url, wrapp_id, i_print){
    jQuery.ajax({
       type : "post",
       url : window.ism_base_path+'/wp-admin/admin-ajax.php',
       data : {
              action: "ism_get_sm_db_share_counts_return_list",
              the_url: ism_url,
              sm_list: the_sm_list,
              },
       success: function(response){
    	   			response = jQuery.parseJSON(response);

    	   			twitter_flag = 0;
    	   			linkedin_flag = 0;
    	   			
    	   			if( typeof response['linkedin-flag']!='undefined' ){
    	   				delete response['linkedin-flag'];
    	   				linkedin_flag = 1;
    	   			}
    	   			if(  typeof response['twitter-flag']!='undefined' ){
    	   				delete response['twitter-flag'];
    	   				twitter_flag = 1;
    	   			}
    	   			
    	   			//total share counts
    	   			total_share = 0;
    	   			
    	   			for(var key in response) {
	 		            num = response[key];
    	   				t_inc = 0;

    	   				//standard 
    	 		        if(num!='not_show'){
    	 		          	if(num==null || isNaN(num)) num = 0;
    	 			        setNumDiv(0, parseInt(num), wrapp_id+' .'+key+'_share_count', i_print);
    	 		        }
    	 		        
    	   				if(key=='twitter' && twitter_flag==1){
    	   					t_inc = 1;
    	   					recheck_tw_li_on_counts_from_db(key, num, ism_url, wrapp_id, i_print);
    	   				}else if(key=='linkedin' && linkedin_flag==1){
    	   					t_inc = 1;
    	   					recheck_tw_li_on_counts_from_db(key, num, ism_url, wrapp_id, i_print);    	   					
    	   				}
    	   				
    	   				//total share counts
    	   				if(t_inc==0 && typeof window.total_share_obj!='undefined' && typeof window.total_share_obj[wrapp_id]!='undefined' ){    	   					
    	   					if(num==null || isNaN(num) || num=='not_show') num = 0;
        	 		        total_share = total_share + Number(num);
    	   				}
 					    	   					    	   			
    	   			}//end of for
    	   			
    	   			//total share counts
    	   			if(typeof window.total_share_obj!='undefined' && window.total_share_obj[wrapp_id]!='undefined'){
		   				if( Number.isInteger(window.total_share_obj[wrapp_id]) ){
		   					window.total_share_obj[wrapp_id] = window.total_share_obj[wrapp_id] + total_share;
		   				}else{
		   					window.total_share_obj[wrapp_id] = total_share;
		   				}
        	   			ism_print_total_count(wrapp_id);
    	   			}	   			
         		}		
     });
}

function recheck_tw_li_on_counts_from_db(key, num, ism_url, wrapp_id, i_print){
	if (key=='linkedin'){
		var linkedin_url = "https://www.linkedin.com/countserv/count/share?format=jsonp&url="+ism_url+"&callback=?";
		jQuery.getJSON(linkedin_url).done(function(data){
		    jQuery.ajax({
		        type : "post",
		        url : window.ism_base_path+'/wp-admin/admin-ajax.php',
		        data : {
		               action: "ism_check_tl_flag",
		               the_url: ism_url,
		               sm: key,
		               the_count: data.count
		               },
		        success: function(response){
	        			if(response!='not_show'){
			        		setNumDiv(0, parseInt(response), wrapp_id+' .'+key+'_share_count', i_print);  	
			        		
			        		//total share
			        		if(typeof window.total_share_obj!='undefined' && typeof window.total_share_obj[wrapp_id]!='undefined'){
				        		window.total_share_obj[wrapp_id] = window.total_share_obj[wrapp_id] + Number(response);
				        		ism_print_total_count(wrapp_id);
			        		}
	        			}				            	    	        		
		        }
		    });				
		});
	} else if (key=='twitter'){
		return;
		////////// TWITTER OFFLINE COUNTS
	//	var twitter_url	= "http://cdn.api.twitter.com/1/urls/count.json?url="+ism_url+"&callback=?";
		var twitter_url	= "https://public.newsharecounts.com/count.json?url="+ism_url;
		jQuery.getJSON(twitter_url).done(function(data){ 
		    jQuery.ajax({
		        type : "post",
		        url : window.ism_base_path+'/wp-admin/admin-ajax.php',
		        data : {
		               action: "ism_check_tl_flag",
		               the_url: ism_url,
		               sm: key,
		               the_count: data.count
		        },
		        success: function(response){
        			if(response!='not_show'){
		        		setNumDiv(0, Number(response), wrapp_id+' .'+key+'_share_count', i_print);  
		        		
		        		//total share
		        		if(typeof window.total_share_obj!='undefined' && typeof window.total_share_obj[wrapp_id]!='undefined'){
		        			window.total_share_obj[wrapp_id] = window.total_share_obj[wrapp_id] + Number(response);
		        			ism_print_total_count(wrapp_id);
		        		}
        			}              	    	        		
		        }
		    });				
		});		
	}
}

function ism_print_total_count(id){	
	if (typeof window.total_share_obj[id]!='undefined' && window.total_share_obj[id]!==true){
		if (!isNaN(window.total_share_obj[id]) ) {
			setNumDiv(parseInt(jQuery(id+' .ism_tc_count').html()), window.total_share_obj[id], id+' .ism_tc_count', 1);
		}
	}
}

function setNumDiv(current, max, div, i_print){
    if (current < parseInt(jQuery(div).html())) return; 
	if (current>max) return;
    if (i_print==0) return;
    cnt = current;
    if (cnt>999){
    	if(cnt>999999){
    		cnt = cnt/1000000;
            type_num = 'M';
        }else{
        	cnt = cnt/1000;
            type_num = 'k';
        }
        if(cnt<=99 && cnt%1>0.09){
        	entire_num = cnt.toString();
            arr = entire_num.split('.');
            d = parseInt(arr[1][0]);
            if(arr[1][1]>=5) d = d + 1;
            	cnt = arr[0] +'.'+ d;
            }else cnt = parseInt(cnt);
            	cnt += type_num;
            }
  
    jQuery(div).html(cnt);
    setTimeout(function(){
        step = 1;
        if(max-current>1000) step = 500;
        if(max-current<1001) step = 300;
        if(max-current<501) step = 100;
        if(max-current<101) step = 10;
        if(max-current<11) step = 1;

        current=current+step;
        setNumDiv(current, max, div);
    },1);
}


function indeedPopUpEmail(ism_url, currentURL){
    jQuery.ajax({
        type : "post",
        data : {
                    action: "ism_send_email_ajax_popup",
                    url: ism_url,
                    permalink: currentURL
                },
        url : window.ism_base_path+'/wp-admin/admin-ajax.php',
        success: function (data) { jQuery(data).hide().appendTo('body').fadeIn('normal'); },
        dataType: 'html'
    });
}

function indeedPrintFriendlyCount(ism_url, postId){
	    jQuery.ajax({
			type : "post",
			data : {
						action: "ism_print_friendly",
						the_url: ism_url,
					},
			url : window.ism_base_path+'/wp-admin/admin-ajax.php',
			success: function (data) { jQuery(data).hide().appendTo('body').fadeIn('normal'); },
			dataType: 'html'
    	});
	
}

function ism_love_this(ism_url){
	var v = jQuery.jStorage.get('love_this_' +ism_url);
	if (v){  
		return;
	} else {
		jQuery.jStorage.set('love_this_' + ism_url, 1);
	    jQuery.ajax({
			type : "post",
			data : {
						action: "ism_love_this_ajax_counter",
						the_url: ism_url,
					},
			url : window.ism_base_path+'/wp-admin/admin-ajax.php',
			success: function (data) { jQuery(data).hide().appendTo('body').fadeIn('normal'); },
			dataType: 'html'
		});		
	}
}

function ism_func_sendEmail(){
    jQuery('#loading_img').css('display', 'inline-block');
    jQuery.ajax({
        type : "post",
        data : {
                    action: "ism_sendEmail",
                    name: jQuery('#ism_email_name').val(),
                    from: jQuery('#ism_email_from').val(),
                    sentTo: jQuery('#ism_email_sentto').val(),
                    subject: jQuery('#ism_email_subject').val(),
                    message: jQuery('#ism_email_message').val(),
                    capcha: jQuery('#capcha_answer').val(),
                    capcha_key: jQuery('#cp_ar_k').val(),
                    the_url: jQuery('#popup_ism_theurl').val(),
                },
        url : window.ism_base_path+'/wp-admin/admin-ajax.php',
        success: function (data) {
            jQuery('#loading_img').fadeOut();
            if(jQuery('#capcha_error').length) jQuery('#capcha_error').remove();
            if(jQuery('#ism_form_error').length) jQuery('#ism_form_error').remove();
            if(data==1){
                jQuery('.popup_content').append('<p id="succes_message" class="popup_success">'+jQuery('#email_success_message').val()+'</p>');
                setTimeout(function(){
                    closePopup();
                }, 2000);
            }else if(data==2){
                //capcha error
                jQuery('.popup_content').append('<p class="popup_error" id="capcha_error">Wrong Answer!</p>');
            }else{
                //error
                jQuery('.popup_content').append('<p  class="popup_error" id="ism_form_error">Something Went Wrong. Please Try Again!</p>');
            }
        },
        dataType: 'html'
    });
}

function closePopup(){
    jQuery('#popup_box').fadeOut('normal', function(){
        jQuery('#popup_box').remove();
    });
}

function activateLocker(ism_content_id,ism_locker_id,ism_vc_set,url,overlock,delay_lk){
	//show locker hide content
    		if (overlock=='default'){
    			//DEFAULT LOCKER
            	jQuery('#'+ism_locker_id).css('display', 'block');
            	if (ism_vc_set==1){
            		//visual composer
            		var s = jQuery("#"+ism_locker_id).next();
            		var s2 = jQuery(s).next();
            		jQuery(s2).attr('id', ism_content_id);
            		jQuery(s2).css('display', 'none');
            		/*            		
            		jQuery(this).next().attr('id', ism_content_id);
            		jQuery(this).next().css('display', 'none');  
            		*/
            	} else {
            		jQuery('#'+ism_content_id).css('display', 'none');
            	}
            	jQuery('#'+ism_locker_id+', #'+ism_content_id+' ').wrapAll('<div class="ismLockerWrap" style="position: relative;">');    			
    		
    		} else {
    			//LOCKER OVER CONTENT (opacity&blur)
            	if(ism_vc_set==1){
            		//visual composer
            		jQuery(this).next().attr('id', ism_content_id);
            	}

            	locker_height = jQuery('#'+ism_locker_id).outerHeight();
    			margin_top = parseInt(locker_height)/2;
    			margin_top = '-'+margin_top+'px';

    			jQuery('#'+ism_locker_id).css({
    			    'display': 'block', 
    			    'position': 'absolute',
    			    'top': '0px',
					'top': '25%',
    			    'left': '0px',
    			    'width': '100%',
    			    'height': '100%',
    			    'z-index': 2,
    			});
				if(overlock=='blur'){
					jQuery('#'+ism_content_id).css({
    				'opacity': '0.85',
    				'display': 'block',
					'-webkit-filter': 'blur(5px)',
					'-moz-filter': 'blur(5px)',
					'-o-filter': 'blur(5px)',
					'-ms-filter': 'blur(5px)',
					'filter': 'blur(5px)',
    			});
				}else{
    			jQuery('#'+ism_content_id).css({
    				'opacity': '0.15',
    				'display': 'block',
    			});
				}
				
    			jQuery('#'+ism_locker_id+', #'+ism_content_id+' ').wrapAll('<div class="ismLockerWrap" style="position: relative;min-height: '+locker_height+'px; overflow:hidden;">'); 
    			
    		}
}

jQuery(document).ready(function(){
	jQuery('.ism-before-row').each(function(){
		var ism_content_id = jQuery(this).attr('data-id');
		var ism_locker_id = jQuery(this).attr('data-lockerId');
		var ism_vc_set = jQuery(this).attr('data-vc_set');
		var url = jQuery(this).attr('data-ism_url');
		var overlock = jQuery(this).attr('data-ism_overlock');
		var delay_lk = jQuery(this).attr('data-ism_delay_lk');

		v = jQuery.jStorage.get(url);

        if (v){       	
            //show content, hide locker
        	jQuery('#'+ism_locker_id).css('display', 'none');
        	jQuery('#'+ism_content_id).css('display', 'block');
        } else { 
			if (delay_lk>0){
				jQuery('#'+ism_content_id).css('display', 'block');
				setTimeout( function(){
					activateLocker(ism_content_id,ism_locker_id,ism_vc_set,url,overlock,delay_lk);
				}, delay_lk*1000 );
			} else {
				activateLocker(ism_content_id,ism_locker_id,ism_vc_set,url,overlock,delay_lk);
			}
        }
        jQuery(this).remove();       
        
	});
});

///pinterest
function openPinterestShare(){
	closePopup();
	if(window.pinterest_feat_img && window.pinterest_feat_img!=''){
		window.open('http://pinterest.com/pin/create/bookmarklet/?media='+window.pinterest_feat_img+jQuery('#pin_hide_info').val(), 'sharer', 'toolbar=0,status=0,width=750,height=330');
	}else{
		window.open('http://pinterest.com/pin/create/bookmarklet/?media='+jQuery('#pin_default_feat_img').val()+jQuery('#pin_hide_info').val(), 'sharer', 'toolbar=0,status=0,width=750,height=330');
	}
}

function indeedPinterestPopUp(rand_pin){
	window.pinterest_feat_img = '';
	//getting the images
	var imgSrc = new Array();
	
	if(jQuery('#indeed_top_ism').length){
		parent = jQuery('#indeed_top_ism').parent();
		if(jQuery(parent).attr('id')) selector = '#'+jQuery(parent).attr('id');
		else selector = '.'+jQuery(parent).attr('class');		
		jQuery(selector+" img").each(function(){
			if(jQuery(this).attr('src')) imgSrc.push(jQuery(this).attr('src'));
		});
	}else{
		jQuery('body img').each(function(){
			if(jQuery(this).attr('src')){
				if(jQuery(this).width()>99){
					imgSrc.push(jQuery(this).attr('src'));
				}				
			}
		});
	}

	def_img = jQuery('#pin_default_feat_img_'+rand_pin).val();
	if(jQuery.inArray(def_img, imgSrc)===-1) imgSrc.push(def_img);
	//if(def_img.length==0) return;

	//send request
    jQuery.ajax({
        type : "post",
        data : {
                    action: "ism_pinterest_popup",
                    ism_images: imgSrc,
                    other_info: jQuery('#pin_hide_info_'+rand_pin).val()
                },
        url : window.ism_base_path+'/wp-admin/admin-ajax.php',
        success: function (data) { jQuery(data).hide().appendTo('body').fadeIn('normal'); },
        dataType: 'html'
    });
}

function pinterest_select_img(target){
	window.pinterest_feat_img = jQuery(target).attr('src');
	openPinterestShare();
}

///TIMEOUT LOCKER
function ism_the_TimeOut(timeout, content_id, locker_id){
	var id = '#line_'+locker_id;
	locker_id = '#'+locker_id;
	var wd = 100;
	timeout = timeout *10;
	counter = setTimeout(ism_countDown, timeout);
	function ism_countDown(){
		if(wd<=0){
			jQuery(locker_id).css('display', 'none');
			jQuery(content_id).css({
		    	'display': 'block',
		    	'opacity': 1,
				'-webkit-filter': 'none',
				'-moz-filter': 'none',
				'-o-filter': 'none',
				'-ms-filter': 'none',
				'filter': 'none'
		    });
			return;
		}
		wd = wd - 1;
		jQuery(id).css('width', wd+'%');
		setTimeout(ism_countDown, timeout);
	}		
}

function ismMobilePopup(id, the_direction){
	jQuery(id).toggle('slide', { direction: the_direction}, 500);
}

function ismMoveDiv(id){
	if(jQuery(id).css('left')=='-45px'){
		jQuery(id).animate({ "left": "+=45px" }, "slow" );		
	}else{
		jQuery(id).animate({ "left": "-=45px" }, "slow" );
	}
}

function ism_slide_in( id, st, t, auto  ){
	if(typeof t=='undefined' || t=='') t = 0;
	setTimeout(function(){
		slide_arr = ['up', 'down', 'left', 'right'];
		if(inArray(st, slide_arr) ){
			//slide effect
			jQuery(id).show('slide', {direction: st}, 1000);
		}else if(st=='fadeIn'){
			jQuery(id).fadeIn(1000);
		}else{
			  var o = {}; //options
		      if ( st == "scale" ) {
		    	  o = { percent: 100 };
		      }
		      jQuery(id).show(st, o, 1000);
		}
		if(typeof auto != 'undefined' && auto !='0') 
			ism_autoclose_slide(auto, id);			
	}, t*1000);
}

function ism_autoclose_slide(d, id){
	setTimeout(function(){
		jQuery(id).fadeOut(500);
	},d*1000);
}

function ism_close_slide( id ){
	jQuery(id).fadeOut(500);
	if(window.ism_slide_display_once==1) window.ism_slide_display_once = 0;
	else window.ism_slide_display_once = 1;
}

function ism_show_popup( id, st, t, auto ){
	if(typeof t=='undefined' || t=='') t = 0;
	setTimeout(function(){
		jQuery('.ism_popup_wrapper').show();
		slide_arr = ['up', 'down', 'left', 'right'];
		if(inArray(st, slide_arr) ){
			//slide effect
			jQuery(id).show('slide', {direction: st}, 1000);
		}else if(st=='fadeIn'){
			jQuery(id).fadeIn(1000);
		}else{
			  var o = {}; //options
		      if ( st == "scale" ) {
		    	  o = { percent: 100 };
		      }
		      jQuery(id).show(st, o, 1000);
		}
		if(typeof auto != 'undefined' && auto !='0') 
			ism_autoclose_popup(auto, id);			
	}, t*1000);
	
	//Resize popup if mobile
	ism_popup_resize_mobile('.ism_popup_box');
}

function ism_autoclose_popup(d, id){
	setTimeout(function(){
		jQuery(id).css('display', 'none');
		jQuery('.ism_popup_wrapper').css('display', 'none');
		if(window.ism_popup_display_once==1) window.ism_popup_display_once = 0;
		else window.ism_popup_display_once = 1;
	},d*1000);
}

function ism_close_popup( id ){
	jQuery(id).css('display', 'none');
	jQuery('.ism_popup_wrapper').css('display', 'none');
	if(window.ism_popup_display_once==1) window.ism_popup_display_once = 0;
	else window.ism_popup_display_once = 1;
}

function inArray(needle, haystack) {
    var length = haystack.length;
    for(var i = 0; i < length; i++) {
        if(haystack[i] == needle) return true;
    }
    return false;
}

function ism_popup_resize_mobile(c){
	if(jQuery(c).width()>jQuery(window).outerWidth() ){
		jQuery(c).css('width', jQuery(window).outerWidth() );
		left = jQuery(c).css('left');
		if(isNaN(left) || left<0){
			jQuery(c).css('left', 0);
		}
	}
}

/*===============AFTER SHARE====================*/
function ism_open_window(link, the_width, the_height, popup_id){
	jQuery('.ism_popup_box').css('display', 'none');
	jQuery('.ism_popup_wrapper').css('display', 'none');
	
	ism_window = window.open(link, "", "width="+the_width+", height="+the_height+"" );
	jQuery(ism_window).unload(function(){
	var interval = window.setInterval(function() {
                try {
                    if (ism_window == null || ism_window.closed) {
                        window.clearInterval(interval);
                        ismas_open_popup(popup_id);
                    }
                }
                catch (e) {
                }
            }, 1000);
	});
}

////FACEBOOK
function shareOnFacebook_afterAction(i_title, i_link, i_img, description_id, popup_id ) {
	jQuery('.ism_popup_box').css('display', 'none');
	jQuery('.ism_popup_wrapper').css('display', 'none');

	if(description_id!=''){
		desc = jQuery(description_id).attr('data-ism_description');
		if(desc!=undefined && desc!='') fb_description = jQuery(description_id).attr('data-ism_description');
		else fb_description = '';
	}
	FB.ui(
      {
        method        : 'share',
        display       : 'popup',
        href          :  i_link,
        link          :  i_link,
        name          :  decodeURIComponent(i_title),       
        picture       :  i_img,
        description   :  fb_description
      },
      function(response) {
        if (response && response.post_id) {
        	ismas_open_popup(popup_id);
        }
      }
    );
}
function shareFacebookWI_afterAction( url, title, description_id, popup_id ){
	jQuery('.ism_popup_box').css('display', 'none');
	jQuery('.ism_popup_wrapper').css('display', 'none');
	
	if(description_id!=''){
		desc = jQuery(description_id).attr('data-ism_description');
		if(desc!=undefined && desc!='') fb_description = jQuery(description_id).attr('data-ism_description');
		else fb_description = '';
	}
    ism_window = window.open('http://www.facebook.com/sharer/sharer.php?s=100&p[title]='+ decodeURIComponent(title) + '&u=' + encodeURIComponent(url) + '&p[summary]=' + fb_description , 'sharer', 'toolbar=0,status=0,width=600,height=360');
	jQuery(ism_window).unload(function(){
		var interval = window.setInterval(function() {
	                try {
	                    if (ism_window == null || ism_window.closed) {
	                        window.clearInterval(interval);
	                        ismas_open_popup(popup_id);
	                    }
	                }
	                catch (e) {
	                }
	            }, 1000);
	});
}


/////PINTEREST
function openPinterestShare_afterAction(popup_id){
	jQuery('.ism_popup_box').css('display', 'none');
	jQuery('.ism_popup_wrapper').css('display', 'none');
	
	closePopup();
	if(window.pinterest_feat_img && window.pinterest_feat_img!=''){
		ism_window = window.open('http://pinterest.com/pin/create/bookmarklet/?media='+window.pinterest_feat_img+jQuery('#pin_hide_info').val(), 'sharer', 'toolbar=0,status=0,width=750,height=330');
	}else{
		ism_window = window.open('http://pinterest.com/pin/create/bookmarklet/?media='+jQuery('#pin_default_feat_img').val()+jQuery('#pin_hide_info').val(), 'sharer', 'toolbar=0,status=0,width=750,height=330');
	}
	jQuery(ism_window).unload(function(){
		var interval = window.setInterval(function() {
	                try {
	                    if (ism_window == null || ism_window.closed) {
	                        window.clearInterval(interval);
	                        ismas_open_popup(popup_id);
	                    }
	                }
	                catch (e) {
	                }
	            }, 1000);
	});
}

function indeedPinterestPopUp_afterAction(rand_pin, popup_id){
	window.pinterest_feat_img = '';
	//getting the images
	var imgSrc = new Array();
	
	if(jQuery('#indeed_top_ism').length){
		parent = jQuery('#indeed_top_ism').parent();
		if(jQuery(parent).attr('id')) selector = '#'+jQuery(parent).attr('id');
		else selector = '.'+jQuery(parent).attr('class');		
		jQuery(selector+" img").each(function(){
			if(jQuery(this).attr('src')) imgSrc.push(jQuery(this).attr('src'));
		});
	}else{
		jQuery('body img').each(function(){
			if(jQuery(this).attr('src')){
				if(jQuery(this).width()>99){
					imgSrc.push(jQuery(this).attr('src'));
				}				
			}
		});
	}
	if(typeof popup_id=='undefined') popup_id = '';

	def_img = jQuery('#pin_default_feat_img_'+rand_pin).val();
	if(jQuery.inArray(def_img, imgSrc)===-1) imgSrc.push(def_img);
	//if(def_img.length==0) return;

	//send request
    jQuery.ajax({
        type : "post",
        data : {
                    action: "ism_pinterest_popup_after_action",
                    ism_images: imgSrc,
                    other_info: jQuery('#pin_hide_info_'+rand_pin).val(),
                    after_data_a: popup_id,
                },
        url : window.ism_base_path+'/wp-admin/admin-ajax.php',
        success: function (data) { jQuery(data).hide().appendTo('body').fadeIn('normal'); },
        dataType: 'html'
    });
}

function pinterest_select_img_afterAction(target, popup_id){
	window.pinterest_feat_img = jQuery(target).attr('src');
	openPinterestShare_afterAction(popup_id);
}

function ismas_open_popup(id){
	//Resize popup if mobile
	ism_after_share_resize_popup('.ism_after_share_box');
	
    jQuery('#wrapper-'+id).show();
	jQuery('#'+id).fadeIn(400);	
}
function ismas_close_popup(id){
	jQuery('#'+id).css('display', 'none');
	jQuery('#wrapper-'+id).css('display', 'none');
	if(window.ism_popup_display_once==1) window.ism_popup_display_once = 0;
	else window.ism_popup_display_once = 1;	
}

function ism_after_share_resize_popup(c){
	maxw = jQuery(c).css('max-width');
	if(parseInt(maxw)>jQuery(window).outerWidth()/2){
		jQuery(c).css('left', 0);
	}
}

function ism_load_statistics_counts(the_sm_list, ism_url, wrapp_id, i_print){
	//load counts from statistics
    jQuery.ajax({
        type : "post",
        url : window.ism_base_path+'/wp-admin/admin-ajax.php',
        data : {
	               action: 'ism_load_statistics_counts_via_ajax',
	               the_url: ism_url,
	               sm_list: the_sm_list,
               },
        success: function(response){
        			var response = jQuery.parseJSON(response);
        			var total_share = 0;
		   			for (var key in response) {
				        num = response[key];
		   				//standard 
				        if (num!='not_show'){
		 		          	if (num==null || isNaN(num)) num = 0;
		 			        setNumDiv(0, parseInt(num), wrapp_id+' .'+key+'_share_count', i_print);
	    	   				//total share counts
				 		    total_share = total_share + parseInt(num);
		 		        }
 		        
		   			}//end of for
		   			
    	   			//total share counts
		   			if (typeof window.total_share_obj!='undefined' && window.total_share_obj[wrapp_id]!='undefined'){
		   				if (Number.isInteger(window.total_share_obj[wrapp_id])){
		   					window.total_share_obj[wrapp_id] = window.total_share_obj[wrapp_id] + total_share;
		   				} else {
		   					window.total_share_obj[wrapp_id] = total_share;
		   				}
    	   				
    	   				ism_print_total_count(wrapp_id); 
    	   			}
          		}	
      });
}
Number.isInteger = Number.isInteger || function(value) {
    return typeof value === "number" && 
           isFinite(value) && 
           Math.floor(value) === value;
};


//================================= SHARE + UNLOCK
function ism_unlock(locker_id, content_id, url, type_of_locker){
	/*
	 * type_of_unlock - int 1 = standard, 2 = via refresh
	 */
	jQuery.jStorage.set(url, ism_return_current_date());
	if (locker_id!='0' && content_id!='0'){
		if (type_of_locker==1){	    
		    jQuery(locker_id).css('display', 'none');
		    jQuery(content_id).css({
		    	'display': 'block',
		    	'opacity': 1,
				'-webkit-filter': 'none',
				'-moz-filter': 'none',
				'-o-filter': 'none',
				'-ms-filter': 'none',
				'filter': 'none'
		    });		
		} else if (type_of_locker==2){
			window.location.href = url;
		}		
	}
}

//twitter
function ism_unlock_on_c(lockerId, contentId, link, unlock_type){
	//twitter unlock on click
    if (contentId!='0' && lockerId!='0'){
    	ism_unlock(lockerId, contentId, link, unlock_type);
    }
}

jQuery(document).ready(function() {
	//twitter unlock
	if (typeof window.ism_twitter_set!='undefined' && window.ism_twitter_set==1){
	    twttr.ready(function (twttr) {
	        twttr.events.bind('tweet', function(event) {
	        	ism_unlock(window.lockerId, window.contentId, window.i_link, window.ism_type_of_unlock);
	        });
	   });	 
	}
});

function setIds(lockerId, contentId, link, unlock_type){
	//used only in twitter
	window.lockerId = lockerId;
	window.contentId = contentId;
	window.i_link = link;
	window.ism_type_of_unlock = unlock_type;
}

//facebbok
function shareOnFacebook(i_title, i_link, i_img, locker_id, content_id, description_id, unlock_type ) {

	if(description_id!=''){
		desc = jQuery(description_id).attr('data-ism_description');
		if(desc!=undefined && desc!='') fb_description = jQuery(description_id).attr('data-ism_description');
		else fb_description = '';
	}
	if (locker_id=='0' && content_id=='0'){
		//share
		var the_method = 'share';
	} else {
		//feed on locker
		var the_method = 'feed';
	}

	FB.ui(
      {
        method        :  the_method,
        display       :  'popup',
        href          :  i_link,
        name          :  decodeURIComponent(i_title),
        link          :  i_link,
        picture       :  i_img,
        description   :  fb_description
      },
      function(response) {
	        if (response && response.post_id) {
	            ism_unlock(locker_id, content_id, i_link, unlock_type);
	        }
      }
    );
}

function shareFacebookWI( url, title, locker_id, content_id, description_id, unlock_type ){
	///OLD VERSION
	if (description_id!=''){
		desc = jQuery(description_id).attr('data-ism_description');
		if (desc!=undefined && desc!='') fb_description = jQuery(description_id).attr('data-ism_description');
		else fb_description = '';
	}
    window.open('http://www.facebook.com/sharer/sharer.php?s=100&p[title]='+ decodeURIComponent(title) + '&u=' + encodeURIComponent(url) + '&p[summary]=' + fb_description , 'sharer', 'toolbar=0,status=0,width=600,height=360');
	
	ism_unlock(locker_id, content_id, url, unlock_type);
}

function shareFacebookWithoutI( url, title, locker_id, content_id, description_id, unlock_type ){
	//NEW VERSION
	if (description_id!=''){
		desc = jQuery(description_id).attr('data-ism_description');
		if (desc!=undefined && desc!='') fb_description = jQuery(description_id).attr('data-ism_description');
		else fb_description = '';
	}
	var share_window = window.open('http://www.facebook.com/sharer/sharer.php?s=100&p[title]='+ decodeURIComponent(title) + '&u=' + encodeURIComponent(url) + '&p[summary]=' + fb_description , 'sharer', 'toolbar=0,status=0,width=600,height=360');
	jQuery(share_window).unload(function(){	
		var interval = window.setInterval(function(){
			try {
                if (share_window == null || share_window.closed) {
                    window.clearInterval(interval);
                   	if (locker_id!='0' && content_id!='0'){
						ism_unlock(locker_id, content_id, url, unlock_type);
					}
                }
            } catch (e){}
		}, 1000);		
	});
}

//linkedin
function ism_linkedin_share(ism_link, locker_id, content_id, unlock_type){	
	/*
	OLD VERSION
	share_window = IN.UI.Share().params({
		url: ism_link
	}).place();
	
	//LOCKER
    if (locker_id!='0' && content_id!='0'){
		share_window.success(function() {
			ism_unlock(locker_id, content_id, ism_link, unlock_type);
		});	
	}*/
	
	share_window = window.open('https://www.linkedin.com/cws/share?url='+ decodeURIComponent(ism_link)+'&original_referer='+decodeURIComponent(ism_link)+'&token=&isFramed=false&lang=en_US', 'sharer', 'toolbar=0,status=0,width=600,height=360');
	
	jQuery(share_window).unload(function(){
		var interval = window.setInterval(function() {
                try {
					
                    if (share_window == null || share_window.closed) {
                        window.clearInterval(interval);
                       	if (locker_id!='0' && content_id!='0'){
								ism_unlock(locker_id, content_id, ism_link, unlock_type);
						}
                    }
                }
                catch (e) {
                }
        }, 1000);
	});	
}

function ism_general_locker(locker_id, content_id, unlock_type, sm_type, ism_link, image, title, description){
	/*
	 * Available for Twitter, LinkedIn, VK, Odnoklassniki, Pinterest
	 */
	switch (sm_type){
		case 'li':
			url = 'https://www.linkedin.com/cws/share?url='+ decodeURIComponent(ism_link)+'&original_referer='+decodeURIComponent(link_to_share)+'&token=&isFramed=false&lang=en_US';
			break;
		case 'tw':
			url = 'https://twitter.com/intent/tweet?text=' + title + ' ' + ism_link;
			break
		case 'vk':
			url = 'http://vkontakte.ru/share.php?url=' + ism_link + '&image=' + image + '&title=' + title + '&description=' + description;
			break;
		case 'pt':
			url = 'http://pinterest.com/pin/create/bookmarklet/?media=' + image + '&amp;url=' + ism_link + '&amp;title=' + title + '&amp;description=' + description;
			break;
		case 'ok':
			url = 'http://www.odnoklassniki.ru/dk?st.cmd=addShare&st.s=1&st._surl=' + ism_link;
			break;
	}
	share_window = window.open(url, 'sharer', 'toolbar=0,status=0,width=600,height=360');
	jQuery(share_window).unload(function(){	
		var interval = window.setInterval(function(){
			try {
                if (share_window == null || share_window.closed) {
                    window.clearInterval(interval);
                   	if (locker_id!='0' && content_id!='0'){
						ism_unlock(locker_id, content_id, ism_link, unlock_type);
					}
                }
            } catch (e){}
		}, 1000);		
	});
}


