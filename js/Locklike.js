﻿/*!
 * Panda Lockers - v2.0.7, 2016-03-29 
 * for jQuery: http://onepress-media.com/plugin/social-locker-for-jquery/get 
 * for Wordpress: http://onepress-media.com/plugin/social-locker-for-wordpress/get 
 * 
 * Copyright 2016, OnePress, http://byonepress.com 
 * Help Desk: http://support.onepress-media.com/ 
*/

/*!
 * Localization
 * Copyright 2014, OnePress, http://byonepress.com
 * 
 * @since 1.0.0
 * @pacakge core
*/
(function ($) {

    /**
    * Text resources.
    */
   
    if ( !$.pandalocker ) $.pandalocker = {};
    
    if (!$.pandalocker.lang) $.pandalocker.lang = {};
    if (!$.pandalocker.lang.defaults ) $.pandalocker.lang.defaults = {};  
    
    $.pandalocker.lang.defaults = {
        
        // - translatable text
        
        // the Screen "Please Confirm Your Email"
        
        confirm_screen_title:           'Please Confirm Your Email',
        confirm_screen_instructiont:    'We have sent a confirmation email to {email}. Please click on the confirmation link in the email to reveal the content.',
        confirm_screen_note1:           'The content will be unlocked automatically within 10 seconds after confirmation.',    
        confirm_screen_note2:           'Note delivering the email may take several minutes.',

        confirm_screen_cancel:          '(cancel)',
        confirm_screen_open:            'Open my inbox on {service}',
        
        // the Screen "One Step To Complete"
        
        onestep_screen_title:           'One Step To Complete',
        onestep_screen_instructiont:    'Please enter your email below to continue.',
        onestep_screen_button:          'OK, complete',
        
        // the sign-in buttons
        
        signin_long:                    'Sign in via {name}',
        signin_short:                   'via {name}',
        signin_facebook_name:           'Facebook',
        signin_twitter_name:            'Twitter',
        signin_google_name:             'Google',
        signin_linkedin_name:           'LinkedIn',
        
        // miscellaneous
        
        misc_data_processing:           'Processing data, please wait...',
        misc_or_enter_email:            'or enter your email manually to sign in', 
        
        misc_enter_your_name:           'enter your name',
        misc_enter_your_email:          'enter your email address',
        
        misc_your_agree_with:           'By clicking on the button(s), you agree with {links}',
        misc_terms_of_use:              'Terms of Use',
        misc_privacy_policy:            'Privacy Policy',
        
        misc_or_wait:                   'or wait {timer}s',
        misc_close:                     'Close',
        misc_or:                        'OR',
        
        // errors & notices
            
        errors_empty_email:             "Please enter your email address.",
        errors_inorrect_email:          "It seems you entered an incorrect email address. Please check it.",
        errors_empty_name:              "Please enter your name.",  
        errors_empty_field:             "Please fill this field.",
        errors_invalid_value:           "Invalid value. Please check the value you entered.",
        errors_invalid_date:            "Please enter a valid date.",  
        errors_invalid_month:           "Please enter a valid month number (between 01 and 12).",        
        
        errors_subscription_canceled:   "You have canceled your subscription.", 
        errors_not_signed_in:           "Sorry, but you have not signed in. Please try again.",
        res_errors_not_granted:         "Sorry, but you have not granted all the required permissions ({permissions}). Please try again.",
        
        // - default text & internal errors
        
        // common resources
        
        error:                              'error',
        noSpam:                             'Your email address is 100% safe from spam!',
        
        errors: {
            ajaxError:                      'Unexpected ajax error. Please check the console log to get more details.',
            unableToLoadSDK:                'Unable to load SDK script for "{0}" due to the error "{1}". Please make sure that nothing blocks loading of social scripts in your browser. Some browser extentions (Avast, PrivDog, AdBlock etc.) or usage of private tabs in FireFox may cause this issue. Turn them off and try again.',     
            unableToCreateControl:          'Unable to create ({0}). Please make sure that nothing blocks loading of social scripts in your browser. Some browser extentions (Avast, PrivDog, AdBlock etc.) can cause this issue. Turn them off and try again.',     
            invlidFacebookAppId:            'Invalid App ID or given URL is not allowed by the Application configuration: One or more of the given URLs is not allowed by the App\'s settings.  It must match the Website URL or Canvas URL, or the domain must be a subdomain of one of the App\'s domains.',
            emptyFBAppIdError:              'Please set your Facebook App ID.',
            emptyTwitterFollowUrlError:     'Please set an URL of your Twitter profile.',
            tweetNotFound:                  'Please make sure that you have posted the tweet. Unfortunately we have not manage to find the tweet in your account.',
            followingNotFound:              'Please make sure that you have followed us. Unfortunately we have not manage to find you in the list of followers.',
            unsupportedTwitterTweetLayout:  'The Twitter Tweet Button doesn\'t support the vertical layout. Please remove the Tweet button or select another theme.',            
            unsupportedTwitterFollowLayout: 'The Twitter Follow Button doesn\'t support the vertical layout. Please remove the Follow button or select another theme.',
            emptyYoutubeChannelId:          'Please set your Youtube Channel ID.',
            emptyGoogleClientId:            'Please set your Google Client ID.',      
            unsupportedYoutubeSubscribeLayout: 'The Youtube Subscribe Button doesn\'t support the vertical layout. Please remove the Subscribe button or select another theme.'
        },
        
        // locker type-dependent resources
        
        scopes: {
            
            // when the Connect Buttons is the primary group
            
            signinLocker: {
                defaultHeader:      "Sing In To Unlock This Content",
                defaultMessage:     "Please sign in. Just click one of the buttons below to get instant access.",
                
                btnSubscribe:       "sign in to unlock",
                
                viaSignInLong:      "{long}",
                viaSignInShort:     "{short}"
            },
            
            // when the Subscription is the primary group
            
            emailLocker: {
                defaultHeader:      "This Content Is Only For Subscribers",
                defaultMessage:     "Please subscribe to unlock this content. Just enter your email.",
                
                btnSubscribe:       "subscribe to unlock",
                
                viaSignInLong:      "{short}",
                viaSignInShort:     "{name}"
            },
            
            // when the Social Buttons is the primary group
            
            socialLocker: {
                defaultHeader:      "This content is locked",
                defaultMessage:     "Please support us, use one of the buttons below to unlock the content."
            }
        },
        
        // text resources for the group 'connect-buttons'
        
        connectButtons: {

            defaultMessage: "subscribe via your social profile by one click",

            facebook: {},
            
            google: {
                clientIdMissed: "The Google Client ID is not set. You need to generate a client ID before using the button.",
                unexpectedError: 'Unable to sign in. Unexpected error occurred: {0}'
            },
            
            twitter: {
                proxyEmpty: "The proxy URL is empty. The proxy is used to call Twitter API."
            },
            
            linkedin: {
                clientIdMissed: "The LinkedIn Client ID or Client Secret is not set. You need to set these settings before using the button."
            },
            
            defaultSeparator: "or",

            errorYouTubeChannelMissed: "Please set an ID of your Youtube channel to subscribe.",
            errorLinkedInCompanyNotFound: "The LinkedIn company '{0}' not found.",
            errorLinkedInCompanyMissed: "Please specify the LinkedIn company ID or name to follow.",
            errorTwitterUserMissed: "Please specify the Twitter user name to follow.",
            errorTwitterMessageMissed: "Please specify the message to tweet.",            
        },
        
        // text resources for the group 'subscription'
        
        subscription: {

            defaultText: 'Cannot sign in via social networks? Enter your email manually.',
            defaultButtonText: 'done, sign in to unlock',
        },
        
        // text resources for the group 'social-buttons'
        
        socialButtons: {
            
            // default labels for the buttons covers
            facebookLike:       'like us',
            facebookShare:      'share',
            twitterTweet:       'tweet',  
            twitterFollow:      'follow us',  
            googlePlus:         '+1 us', 
            googleShare:        'share',
            youtubeSubscribe:   'subscribe',
            linkedinShare:      'share'
        }
    };  
    
    $.pandalocker.lang = $.pandalocker.lang.defaults;  
    
    if ( window.__pandalockers && window.__pandalockers.lang ) {
        $.pandalocker.lang = $.extend( $.pandalocker.lang, window.__pandalockers.lang );  
        window.__pandalockers.lang = null;
    }
 
})(jQuery);;
/*!
 * Themes Presets
 * Copyright 2014, OnePress, http://byonepress.com
 * 
 * @since 1.0.0
 * @pacakge core
*/
(function ($) {

    if (!$.pandalocker.themes) $.pandalocker.themes = {};
    
    // Theme: Great Attractor
    
    $.pandalocker.themes['great-attractor'] = {};
    
    // Theme: Friendly Giant
    
    $.pandalocker.themes['friendly-giant'] = {
        
        theme: {
            fonts: [{
                name: 'Open Sans',
                styles: ['400', '700']
            }]
        }
    };
    
    // Theme: Dark Force
    
    $.pandalocker.themes['dark-force'] = {
        
        theme: {
            fonts: [{
                name: 'Montserrat',
                styles: ['400', '700']
            }]
        }
    };
    
    // Theme: Starter

    $.pandalocker.themes['starter'] = {
        
        socialButtons: {
            layout: 'horizontal',
            counter: true,
            flip: false
        }
    };
    
    // Theme: Secrets
    
    $.pandalocker.themes['secrets'] = {
        
        socialButtons: {
            layout: 'horizontal',
            counter: true,
            flip: true
        }
    };
    
    // Theme: Dandyish
    
    $.pandalocker.themes['dandyish'] = {

        socialButtons: {
            unsupported: ['twitter-follow'],
            layout: 'vertical',
            counter: true,
            flip: false
        }
    };
    
    // Theme: Glass
    
    $.pandalocker.themes['glass'] = {

        socialButtons: {
            layout: 'horizontal',
            counter: true,
            flip: false
        }
    };

    // Theme: Flat
    
    $.pandalocker.themes['flat'] = {

        socialButtons: {
            layout: 'horizontal',
            counter: true,
            flip: true
        }
    };

})(jQuery);;
/*!
 * Variables
 * Copyright 2014, OnePress, http://byonepress.com
 * 
 * @since 1.0.0
 * @pacakge includes
*/
!function(a){"use strict";a.pandalocker||(a.pandalocker={}),a.pandalocker.data||(a.pandalocker.data={}),a.pandalocker.entity||(a.pandalocker.entity={}),a.pandalocker.groups||(a.pandalocker.groups={}),a.pandalocker.controls||(a.pandalocker.controls={}),a.pandalocker.tools||(a.pandalocker.tools={}),a.pandalocker.storages||(a.pandalocker.storages={}),a.pandalocker.services||(a.pandalocker.services={}),a.pandalocker.extras||(a.pandalocker.extras={}),a.pandalocker.controls["social-buttons"]||(a.pandalocker.controls["social-buttons"]={}),a.pandalocker.controls["connect-buttons"]||(a.pandalocker.controls["connect-buttons"]={}),a.pandalocker.controls.subscription||(a.pandalocker.controls.subscription={})}(jQuery);;
/*!
 * Filers & Hooks API
 * Copyright 2014, OnePress, http://byonepress.com
 * 
 * @since 1.0.0
 * @pacakge core
*/
!function(a){"use strict";a.pandalocker||(a.pandalocker={}),a.pandalocker.filters=a.pandalocker.filters||{_items:{},_priorities:{},run:function(a,b){var c=b&&b.length>0?b[0]:null;if(!this._items[a])return c;for(var d in this._priorities[a])if(this._priorities[a].hasOwnProperty(d))for(var e=this._priorities[a][d],f=0;f<this._items[a][e].length;f++){var g=this._items[a][e][f];c=g.apply(g,b)}return c},add:function(b,c,d){d||(d=10),this._items[b]||(this._items[b]={}),this._items[b][d]||(this._items[b][d]=[]),this._items[b][d].push(c),this._priorities[b]||(this._priorities[b]=[]),-1===a.inArray(d,this._priorities[b])&&this._priorities[b].push(d),this._priorities[b].sort(function(a,b){return a-b})}},a.pandalocker.hooks=a.pandalocker.hooks||{run:function(b,c){a.pandalocker.filters.run(b,c)},add:function(b,c,d){a.pandalocker.filters.add(b,c,d)}}}(jQuery);;
!function(a,b,c){"use strict";c.pandalocker||(c.pandalocker={}),c.pandalocker.deferred=c.Deferred||function(){var a={done:[],fail:[],always:[]};this.resolved=!1,this.rejected=!1,this.arg1=null,this.arg2=null,this.resolve=function(b,c){if(this.resolved||this.rejected)return this;this.resolved=!0,this.arg1=b,this.arg2=c;for(var d=0;d<a.done.length;d++)a.done[d](b,c);for(var d=0;d<a.always.length;d++)a.always[d](b,c);return this},this.reject=function(b,c){if(this.resolved||this.rejected)return this;this.rejected=!0,this.arg1=b,this.arg2=c;for(var d=0;d<a.fail.length;d++)a.fail[d](b,c);for(var d=0;d<a.always.length;d++)a.always[d](b,c);return this},this.done=this.success=function(b){return this.resolved?b&&b(this.arg1,this.arg2):a.done.push(b),this},this.fail=this.error=function(b){return this.rejected?b&&b(this.arg1,this.arg2):a.fail.push(b),this},this.always=function(b){return this.resolved||this.rejected?b&&b(this.arg1,this.arg2):a.always.push(b),this},this.promise=function(){return this}}}(window,document,jQuery);;
/*!
 * Helper Tools
 * Copyright 2014, OnePress, http://byonepress.com
 * 
 * @since 1.0.0
 * @pacakge core
*/
!function(a){"use strict";a.pandalocker.tools||(a.pandalocker.tools={}),a.pandalocker.tools.extend=function(b){function c(){}return c.prototype=a.extend(!0,{},b),new c},a.pandalocker.error=function(a){this.onpsl=!0,this.message=a},a.pandalocker.tools.normilizeHtmlOption=function(b){return b?"function"==typeof b?b(this):"string"==typeof b?a("<div>"+b+"</div>"):"object"==typeof b?b.clone():b:b},a.pandalocker.tools.diffArrays=function(b,c){return a.grep(b,function(b){return-1==a.inArray(b,c)})},a.pandalocker.tools.unionArrays=function(b,c){return a.grep(b,function(b){return-1!==a.inArray(b,c)})},a.pandalocker.tools.cookie=a.pandalocker.tools.cookie||function(b,c,d){if(arguments.length>1&&(!/Object/.test(Object.prototype.toString.call(c))||null===c||void 0===c)){if(d=a.extend({},d),(null===c||void 0===c)&&(d.expires=-1),"number"==typeof d.expires){var e=d.expires,f=d.expires=new Date;f.setDate(f.getDate()+e)}return c=String(c),document.cookie=[encodeURIComponent(b),"=",d.raw?c:encodeURIComponent(c),d.expires?"; expires="+d.expires.toUTCString():"",d.path?"; path="+d.path:"",d.domain?"; domain="+d.domain:"",d.secure?"; secure":""].join("")}d=c||{};for(var g,h=d.raw?function(a){return a}:decodeURIComponent,i=document.cookie.split("; "),j=0;g=i[j]&&i[j].split("=");j++)if(h(g[0])===b)return h(g[1]||"");return null},a.pandalocker.tools.hash=a.pandalocker.tools.hash||function(a){var b=0;if(!a||0===a.length)return b;for(var c=0;c<a.length;c++){var d=a.charCodeAt(c);b=(b<<5)-b+d,b&=b}return b=b.toString(16),b=b.replace("-","0")},a.pandalocker.tools.has3d=a.pandalocker.tools.has3d||function(){var a,b=document.createElement("p"),c={WebkitTransform:"-webkit-transform",OTransform:"-o-transform",MSTransform:"-ms-transform",MozTransform:"-moz-transform",Transform:"transform"};b.className="onp-sl-always-visible",document.body.insertBefore(b,null);for(var d in c)void 0!==b.style[d]&&(b.style[d]="translate3d(1px,1px,1px)",a=window.getComputedStyle(b).getPropertyValue(c[d]));return document.body.removeChild(b),void 0!==a&&a.length>0&&"none"!==a},a.pandalocker.tools.canBlur=a.pandalocker.tools.canBlur||function(){var a=document.createElement("div");a.style.cssText=_browserPrefixes.join("filter:blur(2px); ");var b=!!a.style.length&&(void 0===document.documentMode||document.documentMode>9);if(b)return!0;try{b=void 0!==typeof SVGFEColorMatrixElement&&2==SVGFEColorMatrixElement.SVG_FECOLORMATRIX_TYPE_SATURATE}catch(c){}return b},a.pandalocker.isTouch=a.pandalocker.isTouch||function(){return!!("ontouchstart"in window)||!!("onmsgesturechange"in window)},a.pandalocker.widget=function(b,c){var d={createWidget:function(d,e){var f=a.extend(!0,{},c);f.element=a(d),f.options=a.extend(!0,f.options,e),f._init&&f._init(),f._create&&f._create(),a.data(d,"plugin_"+b,f)},callMethod:function(a,b){return a[b]&&a[b]()}};a.fn[b]=function(){var c=arguments,e=arguments.length,f=this;return this.each(function(){var g=a.data(this,"plugin_"+b);!g&&1>=e?d.createWidget(this,e?c[0]:!1):1==e&&(f=d.callMethod(g,c[0]))}),f}},a.pandalocker.detectBrowser=a.pandalocker.detectBrowser||function(){function b(){var a=-1;if("Microsoft Internet Explorer"==navigator.appName){var b=navigator.userAgent,c=new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})");null!=c.exec(b)&&(a=parseFloat(RegExp.$1))}else if("Netscape"==navigator.appName){var b=navigator.userAgent,c=new RegExp("Trident/.*rv:([0-9]{1,}[.0-9]{0,})");null!=c.exec(b)&&(a=parseFloat(RegExp.$1))}return a}var c=jQuery.uaMatch||function(a){a=a.toLowerCase();var b=/(chrome)[ \/]([\w.]+)/.exec(a)||/(webkit)[ \/]([\w.]+)/.exec(a)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a)||/(msie) ([\w.]+)/.exec(a)||a.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},d=c(navigator.userAgent);a.pandalocker.browser={},d.browser&&(a.pandalocker.browser[d.browser]=!0,a.pandalocker.browser.version=d.version);var e=b();e>0&&(a.pandalocker.browser.msie=!0,a.pandalocker.browser.version=e),a.pandalocker.browser.chrome?a.pandalocker.browser.webkit=!0:a.pandalocker.browser.webkit&&(a.pandalocker.browser.safari=!0)},a.pandalocker.detectBrowser(),a.pandalocker.tools.camelCase=function(a){return a.toLowerCase().replace(/-(.)/g,function(a,b){return b.toUpperCase()})},a.pandalocker.tools.capitaliseFirstLetter=function(a){return a.charAt(0).toUpperCase()+a.slice(1)},a.pandalocker.tools.isMobile=function(){return/webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)?!0:/Android/i.test(navigator.userAgent)&&/Mobile/i.test(navigator.userAgent)?!0:!1},a.pandalocker.tools.isTabletOrMobile=function(){return/webOS|iPhone|iPad|Android|iPod|BlackBerry/i.test(navigator.userAgent)?!0:!1},a.pandalocker.tools.updateQueryStringParameter=function(a,b,c){var d=new RegExp("([?&])"+b+"=.*?(&|$)","i"),e=-1!==a.indexOf("?")?"&":"?";return a.match(d)?a.replace(d,"$1"+b+"="+c+"$2"):a+e+b+"="+c},a.pandalocker.tools.isValidEmailAddress=function(a){var b=new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);return b.test(a)},a.pandalocker.tools.isValidUrl=function(a){var b=new RegExp(/^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i);return b.test(a)},a.pandalocker.tools.findLeftWindowBoundry=function(){return window.screenLeft?window.screenLeft:window.screenX?window.screenX:0},a.pandalocker.tools.findTopWindowBoundry=function(){return window.screenTop?window.screenTop:window.screenY?window.screenY:0},a.pandalocker.tools.extractJSON=function(b){var c,d,e;c=b.indexOf("{",c+1);do{if(d=b.lastIndexOf("}"),c>=d)return null;do{e=b.substring(c,d+1);try{var f=a.parseJSON(e);if(f)return f}catch(g){}d=b.substr(0,d).lastIndexOf("}")}while(d>c);c=b.indexOf("{",c+1)}while(-1!=c);return!1}}(jQuery);;
/*!
 * SDK Connector
 * Copyright 2014, OnePress, http://byonepress.com
 * 
 * @since 1.0.0
 * @pacakge core
*/
!function(a){"use strict";a.pandalocker.sdk=a.pandalocker.sdk||{_ready:{},_connected:{},_error:{},getSDK:function(b){return b=a.pandalocker.tools.camelCase(b),a.pandalocker.sdk[b]?a.pandalocker.sdk[b]:null},isConnected:function(b){if(a("#"+b.scriptId).length>0)return!0;var c=!1;return a("script").each(function(){var d=a(this).attr("src");return d?(c=-1!==d.indexOf(b.url),c?(a(this).attr("id",b.scriptId),!1):void 0):!0}),c},getLoadingScript:function(b){var c=a("#"+b.scriptId),d=a("script[src='*"+b.url+"']");return c.length>0?c:d},isLoaded:function(a){return this.isConnected(a)&&a.isLoaded&&a.isLoaded()},connect:function(b,c,d){var e=this,f=this.getSDK(b),g=new a.pandalocker.deferred;if(!f)return console&&console.log("Invalide SDK name: "+b),g.reject("invalide-sdk"),g.promise();if(f.options=c,setTimeout(function(){var a=f.isLoaded();a||(e._connected[b]=!1,g.reject("timeout"))},d),this._ready[b])return g.resolve(),g.promise();if(a(document).bind(b+"-init",function(){g.resolve()}),a(document).bind(b+"-error",function(a,c){e._error[b]=!0,g.reject(c)}),this._connected[b]&&!e._error[b])return g.promise();f.createEvents||(f.createEvents=function(){var b=f.isLoaded(),c=function(){a(document).trigger(f.name+"-init")};return b?void c():void a(document).bind(f.name+"-script-loaded",function(){c()})}),f.prepare&&f.prepare();var h=f.isLoaded(),i=this.isConnected(f);if(a(document).bind(b+"-init",function(){e._ready[b]=!0}),this._connected[b]||f.createEvents(),!i||e._error[b]){if(e._error[b]){var j=this.getLoadingScript(f);j&&j.remove()}var k=function(){var a=document.createElement("script");a.type="text/javascript",a.id=f.scriptId,a.src=f.url;var b=f.getScriptBody?f.getScriptBody():null;b&&(a.innerHtml=b);var c=document.getElementsByTagName("body")[0];c.appendChild(a)};k()}if(!h){var j=this.getLoadingScript(f)[0];j.onerror=function(b){console&&console.log("Failed to load SDK script:"),console&&console.log(b),a(document).trigger(f.name+"-error",["blocked"])},j.onreadystatechange=j.onload=function(){var b=j.readyState;(!b||/loaded|complete/.test(b))&&(a(document).trigger(f.name+"-script-loaded"),a(document).unbind(f.name+"-script-loaded"))}}return setTimeout(function(){var b=f.isLoaded();b||a(document).trigger(f.name+"-error",["timeout"])},d),this._connected[b]=!0,g.promise()}}}(jQuery);;
/*!
 * Functions to work with URLs
 * Copyright 2014, OnePress, http://byonepress.com
 * 
 * @since 1.0.0
 * @pacakge core
*/
/*!
 * URL.js
 * Copyright 2011 Eric Ferraiuolo
 * https://github.com/ericf/urljs
 */
!function(a){var b=function(){var a=this;return a&&a.hasOwnProperty&&a instanceof b||(a=new b),a._init.apply(a,arguments)};!function(){var a,c,d,e="absolute",f="relative",g=":",h="//",i="@",j=".",k="/",l="..",m="../",n="?",o="=",p="&",q="#",r="",s="type",t="scheme",u="userInfo",v="host",w="port",x="path",y="query",z="fragment",A=/^(?:(https?:\/\/|\/\/)|(\/|\?|#)|[^;:@=\.\s])/i,B=/^(?:(https?):\/\/|\/\/)(?:([^:@\s]+:?[^:@\s]+?)@)?((?:[^;:@=\/\?\.\s]+\.)+[A-Za-z0-9\-]{2,})(?::(\d+))?(?=\/|\?|#|$)([^\?#]+)?(?:\?([^#]+))?(?:#(.+))?/i,C=/^([^\?#]+)?(?:\?([^#]+))?(?:#(.+))?/i,D="object",E="string",F=/^\s+|\s+$/g;a=String.prototype.trim?function(a){return a&&a.trim?a.trim():a}:function(a){try{return a.replace(F,r)}catch(b){return a}},c=function(a){return a&&typeof a===D},d=function(a){return typeof a===E},b.ABSOLUTE=e,b.RELATIVE=f,b.normalize=function(a){return new b(a).toString()},b.resolve=function(a,c){return new b(a).resolve(c).toString()},b.prototype={_init:function(a){return this.constructor=b,a=d(a)?a:a instanceof b?a.toString():null,this._original=a,this._url={},this._isValid=this._parse(a),this},toString:function(){var a=this._url,b=[],c=a[s],d=a[t],f=a[x],i=a[y],j=a[z];return c===e&&(b.push(d?d+g+h:h,this.authority()),f&&0!==f.indexOf(k)&&(f=k+f)),b.push(f,i?n+this.queryString():r,j?q+j:r),b.join(r)},original:function(){return this._original},isValid:function(){return this._isValid},isAbsolute:function(){return this._url[s]===e},isRelative:function(){return this._url[s]===f},isHostRelative:function(){var a=this._url[x];return this.isRelative()&&a&&0===a.indexOf(k)},type:function(){return this._url[s]},scheme:function(a){return arguments.length?this._set(t,a):this._url[t]},userInfo:function(a){return arguments.length?this._set(u,a):this._url[u]},host:function(a){return arguments.length?this._set(v,a):this._url[v]},domain:function(){var a=this._url[v];return a?a.split(j).slice(-2).join(j):void 0},port:function(a){return arguments.length?this._set(w,a):this._url[w]},authority:function(){var a=this._url,b=a[u],c=a[v],d=a[w];return[b?b+i:r,c,d?g+d:r].join(r)},path:function(a){return arguments.length?this._set(x,a):this._url[x]},query:function(a){return arguments.length?this._set(y,a):this._url[y]},queryString:function(a){if(arguments.length)return this._set(y,this._parseQuery(a));a=r;var b,c,d=this._url[y];if(d)for(b=0,c=d.length;c>b;b++)a+=d[b].join(o),c-1>b&&(a+=p);return a},fragment:function(a){return arguments.length?this._set(z,a):this._url[z]},resolve:function(a){a=a instanceof b?a:new b(a);var c,d;return this.isValid()&&a.isValid()?a.isAbsolute()?this.isAbsolute()?a.scheme()?a:new b(a).scheme(this.scheme()):a:(c=new b(this.isAbsolute()?this:null),a.path()?(d=a.isHostRelative()||!this.path()?a.path():this.path().substring(0,this.path().lastIndexOf(k)+1)+a.path(),c.path(this._normalizePath(d)).query(a.query()).fragment(a.fragment())):a.query()?c.query(a.query()).fragment(a.fragment()):a.fragment()&&c.fragment(a.fragment()),c):this},reduce:function(a){a=a instanceof b?a:new b(a);var c=this.resolve(a);return this.isAbsolute()&&c.isAbsolute()&&c.scheme()===this.scheme()&&c.authority()===this.authority()&&c.scheme(null).userInfo(null).host(null).port(null),c},_parse:function(b,c){if(b=a(b),!(d(b)&&b.length>0))return!1;var g,h;switch(c||(c=b.match(A),c=c?c[1]?e:c[2]?f:null:null),c){case e:g=b.match(B),g&&(h={},h[s]=e,h[t]=g[1]?g[1].toLowerCase():void 0,h[u]=g[2],h[v]=g[3].toLowerCase(),h[w]=g[4]?parseInt(g[4],10):void 0,h[x]=g[5]||k,h[y]=this._parseQuery(g[6]),h[z]=g[7]);break;case f:g=b.match(C),g&&(h={},h[s]=f,h[x]=g[1],h[y]=this._parseQuery(g[2]),h[z]=g[3]);break;default:return this._parse(b,e)||this._parse(b,f)}return h?(this._url=h,!0):!1},_parseQuery:function(b){if(d(b)){b=a(b);var c,e,f,g=[],h=b.split(p);for(e=0,f=h.length;f>e;e++)h[e]&&(c=h[e].split(o),g.push(c[1]?c:[c[0]]));return g}},_set:function(a,b){return this._url[a]=b,!b||a!==t&&a!==u&&a!==v&&a!==w||(this._url[s]=e),b||a!==v||(this._url[s]=f),this._isValid=this._parse(this.toString()),this},_normalizePath:function(a){var b,c,d,e,f,g;if(a.indexOf(m)>-1){for(b=a.split(k),d=[],f=0,g=b.length;g>f;f++)c=b[f],c===l?d.pop():c&&d.push(c);e=d.join(k),a[0]===k&&(e=k+e),a[a.length-1]===k&&e.length>1&&(e+=k)}else e=a;return e}}}(),a.pandalocker||(a.pandalocker={}),a.pandalocker.tools||(a.pandalocker.tools={}),a.pandalocker.tools.URL=b}(jQuery);;
/*!
 * Blurring
 * Copyright 2014, OnePress, http://byonepress.com
 * 
 * @since 1.0.0
 * @pacakge core
*/
/*!
 *
 * Version: 0.0.5
 * Author: Gianluca Guarini
 * Website: http://www.gianlucaguarini.com/
*/
!function(a,b,c){"use strict";var d={filterId:0},e=" -webkit- -moz- -o- -ms- ".split(" "),f=function(){var a=b.createElement("div");return a.style.cssText=e.join("filter:blur(2px); "),!!a.style.length&&(void 0===b.documentMode||b.documentMode>9)},g=function(){var a=!1;try{a=void 0!==typeof SVGFEColorMatrixElement&&2==SVGFEColorMatrixElement.SVG_FECOLORMATRIX_TYPE_SATURATE}catch(b){}return a},h=function(e,h){var i,j,k,l={intensity:5,forceSVGUrl:!1,animationOptions:{duration:1e3,easing:"linear"}},m=c.extend(l,h),n={},o=function(a){if(n[a]||""===n[a])return n[a]+a;for(var c=b.createElement("div"),d=["","Moz","Webkit","O","ms","Khtml"],e=0;e<d.length;e++)if("undefined"!=typeof c.style[d[e]+a])return n[a]=d[e],d[e]+a;return a.toLowerCase()},p={cssfilters:f(),svgfilters:g()},q=!1,r=o("Filter"),s=function(a){return b.createElementNS("http://www.w3.org/2000/svg",a)},t=function(){var a=s("svg"),b=s("filter");i=s("feGaussianBlur"),a.setAttribute("style","position:absolute"),a.setAttribute("width","0"),a.setAttribute("height","0"),b.setAttribute("id","blur-effect-id-"+d.filterId),b.appendChild(i),a.appendChild(b),c("body").append(a)};return this.$elm=e instanceof c?e:c(e),this.init=function(){return p.svgfilters&&t(),j=d.filterId,d.filterId++,this},this.blur=function(){var b,c=a.location,d=m.forceSVGUrl?c.protocol+"//"+c.host+c.pathname:"";return p.cssfilters?b="blur("+m.intensity+"px)":p.svgfilters?(i.setAttribute("stdDeviation",m.intensity),b="url("+d+"#blur-effect-id-"+j+")"):b="progid:DXImageTransform.Microsoft.Blur(pixelradius="+m.intensity+")",this.$elm[0].style[r]=b,q=!0,this},this.animate=function(a,b){if("number"!=typeof a)throw typeof a+" is not a valid number to animate the blur";if(0>a)throw"I can animate only positive numbers";var d=new c.Deferred;return k&&k.stop(!0,!0),k=new c.Animation(m,{intensity:a},c.extend(m.animationOptions,b)).progress(c.proxy(this.blur,this)).done(d.resolve),d.promise()},this.unblur=function(){return this.$elm.css(r,"none"),this.$elm[0].style[r]="none",q=!1,this},this.toggleblur=function(){return q?this.unblur():this.blur(),this},this.destroy=function(){p.svgfilters&&c("filter#blur-effect-id-"+j).parent().remove(),this.unblur();for(var a in this)delete this[a];return this},this.init()};c.fn.Vague=function(a){return new h(this,a)},c.pandalocker.tools.supportBlurring=function(){return c.pandalocker.browser.msie&&c.pandalocker.browser.version>9&&c.pandalocker.browser.msie<12?!1:f()||g()?!0:!1}}(window,document,jQuery);;
/*!
 * OnePress Default State Storage
 * Copyright 2014, OnePress, http://byonepress.com
*/
!function(a){"use strict";a.pandalocker.storages.defaultStateStorage=function(b){var c=b.options;this.demo=c.demo,this.useCookies=c.locker.useCookies,this.expires=c.locker.expires,this.isUnlocked=function(a){return this.demo?!1:this._getValue(a)?!0:!1},this.isLocked=function(a){return!this.isUnlocked(a)},this.requestState=function(a,b){return this.demo?b("locked"):void b(this.isUnlocked(a)?"unlocked":"locked")},this.setState=function(a,b){if(this.demo)return!0;try{return"unlocked"===b?this._setValue(a):this._removeValue(a)}catch(c){console&&console.log(c)}},this._setValue=function(b){if(!b)return!1;var c=!0,d=1e4;if(this.expires){var e=new Date,f=e.getTime(),g=f+1e3*this.expires;d=Math.ceil(this.expires/86400),c=JSON.stringify({expires:g})}var h=!0;if(localStorage&&!this.useCookies){h=!1;try{localStorage.setItem(b,c)}catch(i){console&&console.log(i),h=!0}}return h&&a.pandalocker.tools.cookie(b,c,{expires:d,path:"/"}),!0},this._getValue=function(b){if(!b)return!1;var c=localStorage&&!this.useCookies&&localStorage.getItem(b);if(c||(c=a.pandalocker.tools.cookie(b)),c)try{var d=JSON.parse(c);if(d&&d.expires){var e=new Date;return d.expires>e}return!0}catch(f){return!0}},this._removeValue=function(b){return b?(localStorage&&localStorage.removeItem(b),void a.pandalocker.tools.cookie(b,null)):!1}}}(jQuery);;
/*!
 * OnePress Visibility Checker Service
 * Copyright 2015, OnePress, http://byonepress.com
*/
!function(a){"use strict";a.pandalocker.services.visibility=function(){this.canLock=function(a){if(!a)return!0;for(var b in a){var c=a[b],d=this.isVisible(c);if(!d)return!1}return!0},this.isVisible=function(a){if(!a.conditions)return!0;var b=this.matchFilter(a),c=a.type||"showif";return"showif"===c?b:"hideif"===c?!b:void 0},this.matchFilter=function(a){var b=!0;for(var c in a.conditions){var d=a.conditions[c],e=this.matchScope(d);e||(b=!1)}return b},this.matchScope=function(a){var b=!1;if(!a.conditions)return!0;for(var c in a.conditions){var d=a.conditions[c],e=this.matchCondition(d);e&&(b=!0)}return b},this.matchCondition=function(a){var b=a.param,c=a.operator,d=a.value,e=a.type||"text",f=this.getValueProvider(b);if(!f)return console&&console.log('[visibility]: the value provider "%s" not found.'.replace("%s",b)),!0;var g=f.getValue();return null===g?(console&&console.log('[visibility]: the value returned from the provider "%s" equals to null.'.replace("%s",b)),!0):f.compare?f.compare(c,d,g,e):this.compare(c,d,g,e)},this.getValueProvider=function(b){var c=a.pandalocker.services.visibilityProviders[b];return c=a.pandalocker.filters.run("visibility-value-provider",[c,b])},this.compare=function(b,c,d,e){var f="date"===e&&("equals"===b||"notequal"===b);switch(c=this.castValue(c,e,f?"range":null),d=this.castValue(d,e),b){case"equals":return a.isArray(d)?a.inArray(c,d)>-1:c.range?d>c.start&&d<c.end:c===d;case"notequal":return a.isArray(d)?-1===a.inArray(c,d):c.range?!(d>c.start&&d<c.end):c!==d;case"less":case"older":return c>d;case"greater":case"younger":return d>c;case"contains":return d.indexOf(c)>-1;case"notcontain":return-1===d.indexOf(c);case"between":return d>=c.start&&d<=c.end}return!0},this.castValue=function(b,c,d){if(null===b)return b;if(a.isArray(b)){for(var e=0;e<b.length;e++)b[e]=this.castValue(b[e],c);return b}if("undefined"!=typeof b.start){var f=this.castValue(b.start,c,"start"),g=this.castValue(b.end,c,"end");return"relative"===b.start.type?(b.end=f,b.start=g):(b.end=g,b.start=f),b}switch(c){case"text":case"select":return""+b;case"integer":return parseInt(b);case"date":return this.castToDate(b,d)}},this.castToDate=function(a,b){var c=(new Date).getTime();if("relative"===a.type){var d=parseInt(a.unitsCount);switch(a.units){case"seconds":var e=c-1e3*d;break;case"minutes":var e=c-60*d*1e3;break;case"hours":var e=c-60*d*60*1e3;break;case"days":var e=c-60*d*60*24*1e3;break;case"weeks":var e=c-60*d*60*24*7*1e3;break;case"months":var e=c-60*d*60*24*30*1e3;break;case"years":var e=c-60*d*60*24*365*1e3}if("range"!==b)return e;var f={range:!0,end:e,start:0};switch(a.units){case"seconds":f.start=f.end-1e3;break;case"minutes":f.start=f.end-6e4;break;case"hours":f.start=f.end-36e5;break;case"days":f.start=f.end-864e5;break;case"weeks":f.start=f.end-6048e5;break;case"months":f.start=f.end-2592e6;break;case"years":f.start=f.end-31536e6}return f}if("range"===b){var g=new Date(a),h=g.getUTCDate(),i=g.getUTCMonth(),j=g.getUTCFullYear();return{range:!0,start:Date.UTC(j,i,h),end:Date.UTC(j,i,h,23,59,59,999)}}return a}},a.pandalocker.services.visibilityProviders={},a.pandalocker.services.visibilityProviders["user-mobile"]={getValue:function(){return a.pandalocker.tools.isMobile()?"yes":"no"}},a.pandalocker.services.visibilityProviders["location-page"]={getValue:function(){return window.location.href}},a.pandalocker.services.visibilityProviders["location-referrer"]={getValue:function(){return document.referrer}}}(jQuery);;
/*!
 * OnePress Default Subscription Service
 * Copyright 2014, OnePress, http://byonepress.com
*/
!function(a){"use strict";a.pandalocker.services.subscription=function(b){this.id=b.id,this.serviceOptions=b,this.cookieName="opanda_"+b.name+"_"+b.service+"_"+b.listId,this.checkingInterval=b.checkingInterval||1e4,this._call=function(b,c,d){var e=this,f={};f.opandaIdentityData=c,f.opandaServiceData=d,f.opandaHandler="subscription",f.opandaRequestType=b,f.opandaService=this.serviceOptions.service,f.opandaListId=this.serviceOptions.listId,f.opandaDoubleOptin=this.serviceOptions.doubleOptin,f.opandaConfirm=this.serviceOptions.confirm,f.opandaRequireName=this.serviceOptions.requireName,f=a.pandalocker.filters.run(this.id+".ajax-data",[f]),f=a.pandalocker.filters.run(this.id+".subscribe.ajax-data",[f]),this.serviceOptions.parentId&&(f=a.pandalocker.filters.apply("subscription-data-"+this.serviceOptions.parentId,f));var g=new a.pandalocker.deferred,h=function(a){a&&a.readyState<4||console&&console.log&&(console.log("Invalide ajax response:"),console.log(a.responseText),g.reject(a))},i=a.ajax({type:"POST",dataType:"text",url:e.serviceOptions.proxy,data:f,error:function(){h(i)},success:function(b){var c=a.pandalocker.tools.extractJSON(b);return c?void g.resolve(c):h(i)}});return g.promise()},this.subscribe=function(b,c){var d=this,e=new a.Deferred;return this._call("subscribe",b,c).done(function(a){return console.log(a),a&&a.error?void e.reject(a):a&&"subscribed"===a.status?void e.resolve(a):d.serviceOptions.doubleOptin&&d.serviceOptions.confirm?(d._setWaitingStatus(b),e.notify("waiting-confirmation"),void d.waitSubscription(b).done(function(a){e.resolve(a)}).fail(function(a){e.reject(a)}).always(function(){d._removeWaitingStatus()})):void e.resolve(a)}).fail(function(b){b&&b.readyState<4||e.reject({error:a.pandalocker.lang.errors.ajaxError})}),e.promise()},this.waitSubscription=function(b){var c=this,d=new a.Deferred;return this._waitingConfirmationResult=d,c._isCanceled?void(c._isCanceled=!1):(this.check(b).done(function(a){return c._isCanceled?void(c._isCanceled=!1):(console&&console.log&&console.log("waiting subscription..."),console&&console.log&&console.log(a),a&&"subscribed"===a.status?void d.resolve(a):void setTimeout(function(){var a=c.waitSubscription(b);a&&(a.done(function(a){d.resolve(a)}),a.fail(function(a){d.reject(a)}))},c.checkingInterval))}).fail(function(a){return c._isCanceled?void(c._isCanceled=!1):void d.reject(a)}),d.promise())},this.check=function(b){var c=new a.Deferred;return this._call("check",b).done(function(a){return a.error?void c.reject(a):void c.resolve(a)}).fail(function(b){b&&b.readyState<4||c.reject({error:a.pandalocker.lang.errors.ajaxError})}),c.promise()},this.cancel=function(){this._isCanceled=!0,this._removeWaitingStatus(),this._waitingConfirmationResult&&(this._waitingConfirmationResult.reject({error:a.pandalocker.lang.errors_subscription_canceled}),this._waitingConfirmationResult=null)},this._setWaitingStatus=function(b){var c=JSON.stringify(b);if(localStorage&&localStorage.setItem)try{localStorage.setItem(this.cookieName,c)}catch(d){a.pandalocker.tools.cookie(this.cookieName,c,{expires:365,path:"/"})}else a.pandalocker.tools.cookie(this.cookieName,c,{expires:365,path:"/"})},this._removeWaitingStatus=function(){localStorage&&localStorage.removeItem&&localStorage.removeItem(this.cookieName),a.pandalocker.tools.cookie(this.cookieName,!1,{expires:0,path:"/"})},this.isWaitingSubscription=function(){var a=this.getWaitingIdentityData();return a?!0:!1},this.getWaitingIdentityData=function(){var b=localStorage&&localStorage.getItem&&localStorage.getItem(this.cookieName);return b||(b=a.pandalocker.tools.cookie(this.cookieName)),b?JSON.parse(b):b}}}(jQuery);;
/*!
 * Interrelation
 * Copyright 2014, OnePress, http://byonepress.com
 * 
 * @since 4.0.0
 * @pacakge extras
*/
!function(a){"use strict";a.pandalocker.extras||(a.pandalocker.extras={}),a.pandalocker.extras.interrelation={init:function(){var a=this.options.locker&&this.options.locker.scope;if(a){var b=this;this.addHook("state-changed",function(c,d){if("unlocked"===d){var e=b._getStateStorage(),f="scope_"+a;e.setState(f,"unlocked")}}),this.addFilter("functions-requesting-state",function(c){return c.push(function(c){var d=b._getStateStorage(),e="scope_"+a;d.requestState(e,function(a){c(a)})}),c}),this.addHook("unlocked",function(c,d){"button"===d&&b.runHook("unlocked-by-scope-"+a,[],!0)}),this.addHook("unlocked-by-scope-"+a,function(a){a!==b&&b.unlock("scope")},10,!0)}}}}(jQuery);;
/*!
 * Google Analytics
 * Copyright 2014, OnePress, http://byonepress.com
 * 
 * @since 4.0.0
 * @pacakge extras
*/
!function(a){"use strict";a.pandalocker.extras||(a.pandalocker.extras={}),a.pandalocker.extras.googleAnalytics={init:function(){if(this.options.googleAnalytics){this.addHook("unlocked",function(b,c,d,e){if(window._gaq||window.ga)if(e||(e=window.location.href),"button"===c){var f=null;f="facebook-like"===d?"Facebook Like":"facebook-share"===d?"Facebook Share":"twitter-tweet"===d?"Twitter Tweet":"twitter-follow"===d?"Twitter Follow":"google-plus"===d?"Google Plus":"google-share"===d?"Google Share":"linkedin-share"===d?"LinkedIn Share":"google-youtube"===d?"Google Youtube":"facebook"===d?"Facebook Sign-In":"twitter"===d?"Twitter Sign-In":"google"===d?"Google Sign-In":"linkedin"===d?"LinkedIn Sign-In":"form"===d?"Opt-In Form":d.substr(0,1).toUpperCase()+d.substr(1),a("Lockers","Unlocked (Total)",e),a("Lockers ","Unlocked via "+f,e)}else"timer"===c?(a("Lockers","Skipped (Total)",e),a("Lockers ","Skipped via Timer",e)):"cross"===c&&(a("Lockers","Skipped (Total)",e),a("Lockers ","Skipped via Cross",e))});var a=function(a,b,c){window.ga?window.ga("send","event",a,b,c):window._gaq.push(["_trackEvent",a,b,c])}}}}}(jQuery);;
/*!
 * Not Available
 * Copyright 2014, OnePress, http://byonepress.com
 * 
 * @since 4.0.0
 * @pacakge extras
*/
!function(a){"use strict";a.pandalocker.extras||(a.pandalocker.extras={}),a.pandalocker.extras.na={init:function(){var a=this,b=0,c=0,d={},e=function(){for(var b=0,c=0;c<a._groups.length;c++)for(var d=0;d<a._groups[c].controls.length;d++)b++;return b};this.addHook("control-error",function(f,g,h){b||(b=e(),c=b);var i=h+"-"+g;d[i]||(d[i]=!0,c--,c>0||(a.runHook("na"),"show-content"===a.options.locker.naMode&&a.unlock("na")))})}}}(jQuery);;
!function(a){"use strict";var b={};b.init=function(b,c){var d=a.extend(!0,{},this._defaults);if(this.options=a.extend(!0,d,c),this.groupOptions=b.options,this.lockerOptions=b.locker.options,this.lang=b.lang,this.group=b,this.locker=b.locker,this.groupOptions.senderName&&(this.senderName=this.groupOptions.senderName),!this.name)throw new Error('The property "name" cannot be empty for the control.');this.options.proxy=this.options.proxy||this.groupOptions.proxy||this.lockerOptions.proxy,this.setup&&this.setup(),this.setupHooks&&this.setupHooks(),this.prepareOptions&&this.prepareOptions()},b._defaults={},b.renderControl=function(b){this.control=a(this.tag||"<div>").addClass("onp-sl-control").addClass("onp-sl-"+this.name).appendTo(b),this.innerWrap=a("<div></div>").addClass("onp-sl-control-inner-wrap").appendTo(this.control),this._isRendered=!0,this._hasError()&&this.showError(),this.render(this.innerWrap)},b.render=function(){throw new Error("The control should implement the method 'render'")},b.unlock=function(a,b,c){this.setState("unlocked"),this.group.unlock(a||"button",b||this.senderName||this.name,c)},b.addClassToLocker=function(a){this.group.addClassToLocker(a)},b._trackWindow=function(a,b){var c=window.open;window.open=function(d,e,f){var g=c(d,e,f);if(!d)return g;if(-1===d.indexOf(a))return g;var h=setInterval(function(){g&&g.closed===!1||(clearInterval(h),b&&b())},300);return g}},b.requestState=function(a){var b=this._getStateStorage();b.requestState(this._getStorageIdentity(),a)},b.setState=function(a,b){var c=this._getStateStorage();c.setState(this._getStorageIdentity(),a,b),this.group.setState(a,"button",this.name)},b._getStorageIdentity=function(){return"control_"+this.name},b._getStateStorage=function(){return this.locker._getStateStorage()},b._setLoadingState=function(a){this._stateSender||(this._stateSender=a,this.control.addClass("onp-sl-state-loading"),this._isLoadingState=!0)},b._removeLoadingState=function(a){this._stateSender&&this._stateSender!==a||(this._stateSender=null,this.control.removeClass("onp-sl-state-loading"),this._isLoadingState=!1)},b._isLoading=function(){return this._isLoadingState},b._setError=function(a){this._error||(this._error=a)},b._hasError=function(){return this._error?!0:!1},b.showError=function(a,b){var c=this;if(this.runHook("control-error",[c.name,c.group.name]),!this._isRendered)return void this._setError(a);var b=b||this.innerWrap,a=a||this._error;if(!this.control.hasClass("onp-sl-state-error")){this.control.removeClass("onp-sl-state-loading").addClass("onp-sl-state-error");var d=this.createErrorMarkup(a).appendTo(b);d.find(".onp-sl-error-title").click(function(){return c.group.showError(c.name,a),!1})}},b.createErrorMarkup=function(){return a("<div class='onp-sl-error-body'><a href='#' class='onp-sl-error-title'>"+a.pandalocker.lang.error+"</a></div>")},b.showNotice=function(a,b){this.group.showNotice(a,null,b)},b.addHook=function(a,b,c){return this.group.addHook(a,b,c)},b.runHook=function(a,b){return this.group.runHook(a,b)},b.addFilter=function(a,b,c){return this.group.addFilter(a,b,c)},b.applyFilters=function(a,b,c){return this.group.applyFilters(a,b,c)},b.requireSdk=function(b,c){var d=this,e=new a.pandalocker.deferred;if(!b)return e.resolve(),e.promise();var f=this.group.options.loadingTimeout||this.lockerOptions.locker.loadingTimeout||2e4,g=d.attemptToLoad(b,c||{},5,f);return g.done(function(){e.resolve()}),g.fail(function(c){var d=a.pandalocker.lang.errors.unableToLoadSDK.replace("{0}",b).replace("{1}",c);e.reject(d)}),e.promise()},b.attemptToLoad=function(b,c,d,e){var f=this;d||(d=5);var g=new a.pandalocker.deferred,h=a.pandalocker.sdk.connect(b,c||{},e);return h.done(function(){g.resolve()}),h.fail(function(a){console.log('Failed to load SDK script "'+b+'" due to the error "'+a+'". '+d+" attempts left."),"timeout"!==a&&"blocked"!==a&&g.reject(a),0>=d-1?g.reject(a):f.attemptToLoad(b,c,d-1,e).done(function(){g.resolve()}).fail(function(){g.reject(a)})}),g.promise()},b.verifyButton=function(){var b=this,c=new a.pandalocker.deferred,d=b.verification.timeout,e=function(){if(0===b.control.find(b.verification.container).length&&d>=0)return setTimeout(function(){e()},500),void(d-=500);if(0>=d){var f=a.pandalocker.lang.errors.unableToCreateControl.replace("{0}",b.networkName);return c.reject(f)}c.resolve()};return e(),c.promise()},b.showScreen=function(a,b){this.group.showScreen(a,b)},a.pandalocker.entity.control=b}(jQuery);;
!function(a){"use strict";var b=a.pandalocker.tools.extend(a.pandalocker.entity.control);b.setup=function(){var b=this;this.options.actions=this.options.actions||[];var c=!1;for(var d in this.options.actions)"subscribe"===this.options.actions[d]&&(this.options.actions.splice(d,1),c=!0);c&&this.options.actions.push("subscribe"),this.groupOptions.actions&&(this.options.actions=a.extend(this.options.actions,this.groupOptions.actions));for(var e=0;e<this.options.actions.length;e++){var f=a.pandalocker.tools.camelCase(this.options.actions[e]);this.options[f]=this.options[f]||{};var g=f+"Options";this.groupOptions[g]&&(this.options[f]=a.extend(!0,this.options[f],this.groupOptions[g]));var h=f+"ActionOptions";this.lockerOptions[h]&&(this.options[f]=a.extend(!0,this.options[f],this.lockerOptions[h]))}if(this.options.proxy=this.options.proxy||this.groupOptions.proxy||this.lockerOptions.proxy,this.options.lazy=this.options.lazy||this.groupOptions.lazy||this.lockerOptions.lazy,c){var i={id:b.locker.id,proxy:b.lockerOptions.proxy,name:b.name,listId:b.options[f].listId,service:b.options[f].service,doubleOptin:b.options[f].doubleOptin,confirm:b.options[f].confirm,requireName:b.options[f].requireName||!1},j=new a.pandalocker.services.subscription(i);this.subscriptionService=b.applyFilters("get-default-subscription-service",j)}},b.runActions=function(b,c,d){var e=new a.Deferred,f=this;if(!this._actionsDone){this._actionsDone=!0;var g=this.options.actions.slice();d&&this.showScreen("data-processing");var h=function(){var i=g.shift();if(!i)return e.resolve(),void f.unlock();var j=f.options[a.pandalocker.tools.camelCase(i)],k=a.pandalocker.tools.camelCase("run-"+i+"-action");if(!f[k])throw e.reject(),f._actionsDone=!1,new Error("The action '"+k+"' not found.");f[k](b,c,j,d,function(a){return"error"===a?(f.runHook("raw-error"),e.reject(a),f._actionsDone=!1,f.showScreen("default")):void h()})};return h(),e.promise()}},b.runSubscribeAction=function(b,c,d,e,f){var g=this;console.log("serviceData = "),console.log(c);var h=function(){e&&g.showScreen("data-processing");var a=g.subscriptionService.subscribe(b,c);g._setupSubscriptionHooks(a,b),a.fail(function(){f("error")})};return b.email?void h():this.showScreen("enter-email",{header:a.pandalocker.lang.onestep_screen_title,message:a.pandalocker.lang.onestep_screen_instructiont,buttonTitle:a.pandalocker.lang.onestep_screen_button,note:a.pandalocker.tools.normilizeHtmlOption(g.options.noSpamText||g.groupOptions.text.noSpamText||a.pandalocker.lang.noSpam),callback:function(a){b.email=a,h()}})},b.runSignupAction=function(b,c,d,e,f){var g=this,h=function(){e&&g.showScreen("data-processing");var c={};return c.opandaIdentityData=b,c.opandaHandler="signup",c=a.pandalocker.filters.run(g.locker.id+".ajax-data",[c]),c=a.pandalocker.filters.run(g.locker.id+".signup.ajax-data",[c]),a.ajax({type:"POST",dataType:"json",url:g.lockerOptions.proxy,data:c,success:function(){f()},error:function(a){a&&a.readyState<4||(g.showScreen("default"),g.showError("Unable to sign in, the ajax error occurred."),f("error"),console&&console.log&&(console.log("Invalide ajax response:"),console.log(a.responseText)))}})};return b.email?void h():this.showScreen("enter-email",{header:a.pandalocker.lang.onestep_screen_title,message:a.pandalocker.lang.onestep_screen_instructiont,buttonTitle:a.pandalocker.lang.onestep_screen_button,note:a.pandalocker.tools.normilizeHtmlOption(g.options.noSpamText||g.groupOptions.text.noSpamText||a.pandalocker.lang.noSpam),callback:function(a){b.email=a,h()}})},b.runLeadAction=function(b,c,d,e,f){var g=this,h=function(){e&&g.showScreen("data-processing");var c={};return c.opandaIdentityData=b,c.opandaHandler="lead",c=a.pandalocker.filters.run(g.locker.id+".ajax-data",[c]),c=a.pandalocker.filters.run(g.locker.id+".lead.ajax-data",[c]),a.ajax({type:"POST",dataType:"json",url:g.lockerOptions.proxy,data:c,success:function(){f()},error:function(a){a&&a.readyState<4||(g.showScreen("default"),g.showError("Unable to sign in, the ajax error occurred."),f("error"),console&&console.log&&(console.log("Invalide ajax response:"),console.log(a.responseText)))}})};return b.email?void h():this.showScreen("enter-email",{header:a.pandalocker.lang.onestep_screen_title,message:a.pandalocker.lang.onestep_screen_instructiont,buttonTitle:a.pandalocker.lang.onestep_screen_button,note:a.pandalocker.tools.normilizeHtmlOption(g.options.noSpamText||g.groupOptions.text.noSpamText||a.pandalocker.lang.noSpam),callback:function(a){b.email=a,h()}})},b._checkWaitingSubscription=function(){if(this.subscriptionService&&this.subscriptionService.isWaitingSubscription()){var a=this.subscriptionService.getWaitingIdentityData(),b=this.subscriptionService.waitSubscription(a);this._setupSubscriptionHooks(b,a);var c=this;this.showScreen("email-confirmation",{service:c.subscriptionService,email:a.email})}},b._setupSubscriptionHooks=function(a,b){var c=this;return a.done(function(){c.unlock()}),a.fail(function(a){c.runHook("raw-error"),c.showNotice(a.error),c.showScreen("default"),a.detailed&&console&&console.log&&console.log(a.detailed)}),a.always(function(){c.subscriptionService._removeWaitingStatus()}),a.progress(function(a){c.showScreen("email-confirmation",{service:c.subscriptionService,email:b.email})}),a},a.pandalocker.entity.actionControl=b}(jQuery);;
!function(a){"use strict";var b={};b._defaults={},b.init=function(b,c){var d=this;this.locker=b,this.lockerOptions=b.options,this.lang=b.lang,c||(c={});var e=a.extend(!0,{},this._defaults);this.options=a.extend(!0,e,c);for(var f in c)c.hasOwnProperty(f)&&a.isArray(c[f])&&(this.options[f]=c[f]);if(this.isFirst=1===c.index,this.isLast=c.index===this.lockerOptions.groups.order.length,this.isSingle=1===this.lockerOptions.groups.order.length,"object"!=typeof this.options.text&&(this.options.text={message:d.options.text}),this.isFirst&&(this.options.text.header=""===this.options.text.header?"":this.options.text.header||this.lang.defaultHeader,this.options.text.message=""===this.options.text.message?"":this.options.text.message||this.lang.defaultMessage),this.options.text.header=a.pandalocker.tools.normilizeHtmlOption(this.options.text.header),this.options.text.message=a.pandalocker.tools.normilizeHtmlOption(this.options.text.message),this.options.text.footer=a.pandalocker.tools.normilizeHtmlOption(this.options.text.footer),!1!==this.options.separator){var g=a.isPlainObject(this.options.separator)?this.options.separator:{type:"line",title:d.options.separator};g.type=g.type||"line",this.options.separator=g}this.childInit&&this.childInit(),this.setup&&this.setup(),this.setupHooks&&this.setupHooks(),this.prepareOptions&&this.prepareOptions();try{this.createControls()}catch(h){if(!h.onpsl)throw h;this.showError(this.name,h.message)}},b.createControls=function(){this.controls=[];for(var b=0;b<this.options.order.length;b++){var c=this.options.order[b];if("string"==typeof c){if(!a.pandalocker.controls[this.name][c])throw new a.pandalocker.error('Control "'+c+'" not found in the group "'+this.name+'"');var d=this.createControl(c);this.controls.push(d)}}},b.createControl=function(b){var c=a.pandalocker.tools.extend(a.pandalocker.controls[this.name][b]),d=a.pandalocker.tools.camelCase(b),e=this.options[d]||{};return c.init(this,e),c},b.requestState=function(a){for(var b=this.controls.length,c="locked",d=0;d<this.controls.length;d++)this.controls[d].requestState(function(d){b--,"unlocked"===d&&(c=d),0>=b&&a(c)})},b.canLock=function(){return!0},b.renderGroup=function(b){var c=a("<div class='onp-sl-group onp-sl-"+this.name+"'></div>");c.appendTo(b);var d=a("<div class='onp-sl-group-inner-wrap'></div>");if(d.appendTo(c),c.addClass(this.isFirst?"onp-sl-first-group":this.isLast?"onp-sl-last-group":"onp-sl-middle-group"),c.addClass(this.isSingle?"onp-sl-single-group":"onp-sl-not-single-group"),c.addClass("onp-sl-group-index-"+this.options.index),this.element=c,this.innerWrap=d,this.renderSeparator(),this.options.text.header||this.options.text.message){var e=a("<div class='onp-sl-text'></div>").appendTo(this.innerWrap);this.options.text.header&&e.append(this.options.text.header.addClass("onp-sl-header onp-sl-strong").clone()),this.options.text.message&&e.append(this.options.text.message.addClass("onp-sl-message").clone())}this._isRendered=!0,this.render(this.innerWrap)},b.render=function(){this.renderControls(this.innerWrap)},b.unlock=function(a,b,c){this.locker.unlock(a,b,c)},b.setState=function(a,b,c){this.locker.setState(a,b||"group",c||this.name)},b.renderControls=function(a){for(var b=0;b<this.controls.length;b++)this.controls[b].renderControl(a)},b.showError=function(b,c){if(this._isRendered){if(this.element.find(".onp-sl-group-error").remove(),this._currentErrorFor===b)this.element.find(".onp-sl-group-error").remove(),this._currentErrorFor=null;else{var d=a("<div class='onp-sl-group-error'>"+c+"</div>");this.innerWrap.append(d),this._currentErrorFor=b}this.runHook("size-changed")}else this.locker._showError(b,c)},b.addClassToLocker=function(a){this.locker._addClass(a)},b.showNotice=function(b,c,d){this.element.find(".onp-sl-group-notice").remove();var e=a("<div class='onp-sl-group-notice'>"+b+"</div>").hide();this.innerWrap.append(e),e.fadeIn(500),c||(c=7e3),setTimeout(function(){e.length&&e.fadeOut(800,function(){e.remove(),d&&d()})},c)},b.renderSeparator=function(){if(!this.isFirst&&this.options.separator!==!1){var b=this,c=this.options.separator,d=c.type;this.element.addClass("onp-sl-has-separator").addClass("onp-sl-has-"+d+"-separator");var e=a("<div class='onp-sl-group-separator onp-sl-"+d+"-separator'></div>"),f="hiding-link"===d?"<a href='#'></a>":"<span></span>",g=a(f).addClass("onp-sl-title").appendTo(e);if(g.html(c.title||a.pandalocker.lang.misc_or),e.appendTo(this.innerWrap),"hiding-link"===d){this.element.addClass("onp-sl-separator-hides");var h=a("<div class='onp-sl-hiding-link-container' style='display: none;'></div>");h.appendTo(this.innerWrap),this.innerWrap=h,g.click(function(){return b.element.removeClass("onp-sl-separator-hides"),b.element.addClass("onp-sl-separator-shows"),e.hide(),h.fadeIn(500),b.runHook("size-changed"),!1})}}},b.addHook=function(a,b,c){return this.locker.addHook(a,b,c)},b.runHook=function(a,b){return this.locker.runHook(a,b)},b.addFilter=function(a,b,c){return this.locker.addFilter(a,b,c)},b.applyFilters=function(a,b,c){return this.locker.applyFilters(a,b,c)},b.showScreen=function(a,b){this.locker._showScreen(a,b)},b.registerScreen=function(a,b){this.locker._registerScreen(a,b)},a.pandalocker.entity.group=b}(jQuery);;
!function(a){"use strict";var b=a.pandalocker.tools.extend(a.pandalocker.entity.group);b._defaults={url:null,layout:"horizontal",flip:!1,order:["twitter-tweet","facebook-like","google-plus"],counters:!0,lazy:!1,facebook:{version:"v2.5",like:{title:a.pandalocker.lang.socialButtons.facebookLike},share:{title:a.pandalocker.lang.socialButtons.facebookShare}},twitter:{tweet:{title:a.pandalocker.lang.socialButtons.twitterTweet},follow:{title:a.pandalocker.lang.socialButtons.twitterFollow}},google:{plus:{title:a.pandalocker.lang.socialButtons.googlePlus},share:{title:a.pandalocker.lang.socialButtons.googleShare}},youtube:{title:a.pandalocker.lang.socialButtons.youtubeSubscribe},linkedin:{share:{title:a.pandalocker.lang.socialButtons.linkedinShare}}},b.name="social-buttons",b.prepareOptions=function(){this.options.lang=this.locker.options.lang,"horizontal"!==this.options.layout&&"vertical"!==this.options.layout&&(this.options.layout="horizontal"),this.options.url=this.options.url||this.locker.options.url,this.options.lazy=this.options.lazy||this.locker.options.lazy,this.locker.options.buttons&&(this.locker.options.buttons.order&&(this.options.order=this.locker.options.buttons.order),"undefined"!=typeof this.locker.options.buttons.counters&&(this.options.counters=this.locker.options.buttons.counters),"undefined"!=typeof this.locker.options.buttons.lazy&&(this.options.lazy=this.locker.options.buttons.lazy)),this.locker.options.facebook&&(this.options.facebook=a.extend(!0,this.options.facebook,this.locker.options.facebook)),this.locker.options.twitter&&(this.options.twitter=a.extend(!0,this.options.twitter,this.locker.options.twitter)),this.locker.options.google&&(this.options.google=a.extend(!0,this.options.google,this.locker.options.google)),this.locker.options.linkedin&&(this.options.linkedin=a.extend(!0,this.options.linkedin,this.locker.options.linkedin)),this.locker.options.youtube&&(this.options.youtube=a.extend(!0,this.options.youtube,this.locker.options.youtube))},b.render=function(){this.element.addClass(this.options.counters?"onp-sl-has-counters":"onp-sl-no-counters"),this.element.addClass("onp-sl-"+this.options.layout),this.element.addClass("onp-sl-lang-"+this.options.lang),this.renderControls(this.innerWrap)},b.createControl=function(b){var c=a.pandalocker.tools.extend(a.pandalocker.controls[this.name][b]),d=b.split("-"),e=2===d.length?d[0]:null,f=2===d.length?d[1]:d[0],g={};e?(this.options[e]&&(g=a.extend({},this.options[e])),this.options[e][f]&&(g=a.extend(g,this.options[e][f]))):this.options[f]&&(g=a.extend(g,this.options[f]));var h=e?this.options[e]:{};return h.lang=this.options.lang,h.counters=this.options.counters,h.url=h.url||this.options.url,c.init(this,g,h),c},b.canLock=function(){return 0===this.options.order.length?!1:!0},a.pandalocker.groups["social-buttons"]=b}(jQuery);;
!function(a){"use strict";var b=a.pandalocker.tools.extend(a.pandalocker.entity.control);b.init=function(b,c,d){this.networkOptions=d;var e=this.name.split("-");this.networkName=this.sdk?this.sdk:2===e.length?e[0]:null,this.buttonName=2===e.length?e[1]:e[0],a.pandalocker.entity.control.init.call(this,b,c),this._ssIdentity=this.networkName?"page_"+a.pandalocker.tools.hash(this.url)+"_hash_"+this.networkName+"-"+this.buttonName:"page_"+a.pandalocker.tools.hash(this.url)+"_hash_"+this.buttonName},b._extractUrl=function(){return a.pandalocker.tools.URL.normalize(this.options.url||this.networkOptions.url||window.location.href)},b.render=function(b){var c=this;if(this.networkName&&this.control.addClass("onp-sl-"+this.networkName),this.container=a("<div class='onp-sl-social-button onp-sl-social-button-"+this.name+"'></div>"),this.container.appendTo(b),!this._hasError()){this._setLoadingState();var d=function(){var a=c.requireSdk(c.networkName,c.networkOptions);a.fail(function(a){c._removeLoadingState(),c.showError(a)}),a.done(function(){c.setupEvents(),c.renderButton(c.container),c.verifyButton().always(function(){c._removeLoadingState()}).fail(function(a){c.showError(a)})})};this.groupOptions.lazy?this.addHook("raw-impress",function(){c._rendered||(c._rendered=!0,d())}):d()}this._addFlipEffect()},b._addFlipEffect=function(){var b=this.control,c=this.innerWrap,d=this.group.options.flip,e=a.pandalocker.tools.has3d();if(d&&e&&b.addClass("onp-sl-flip")||b.addClass("onp-sl-no-flip"),!d)return!0;var f=this.options.title||(this.networkName?a.pandalocker.lang[this.networkName+"_"+this.buttonName]:a.pandalocker.lang[this.networkName]),g=a("<a href='#'></a>").addClass("onp-sl-button-overlay").append(a("<div class='onp-sl-overlay-back'></div>")).append(a("<div class='onp-sl-overlay-front'></div>").append(a("<div class='onp-sl-overlay-icon'></div>")).append(a("<div class='onp-sl-overlay-line'></div>")).append(a("<div class='onp-sl-overlay-text'>"+f+"</div>"))).append(a("<div class='onp-sl-overlay-header'></div>"));g.prependTo(c),e||b.hover(function(){var b=a(this).find(".onp-sl-button-overlay");b.stop().animate({opacity:0},200,function(){b.hide()})},function(){var b=a(this).find(".onp-sl-button-overlay").show();b.stop().animate({opacity:1},200)}),a.pandalocker.isTouch()&&g.click(e?function(){return b.hasClass("onp-sl-flip-hover")?b.removeClass("onp-sl-flip-hover"):(a(".onp-sl-flip-hover").removeClass("onp-sl-flip-hover"),b.addClass("onp-sl-flip-hover")),!1}:function(){var b=a(this);return b.stop().animate({opacity:0},200,function(){b.hide()}),!1}),this.group._buttonsZIndex||(this.group._buttonsZIndex=54),this.group._buttonsZIndex=this.group._buttonsZIndex-4;var h=this.group._buttonsZIndex;b.css("z-index",h),g&&(g.css("z-index",h),g.find(".onp-sl-overlay-front").css("z-index",1),g.find(".onp-sl-overlay-back").css("z-index",-1),g.find(".onp-sl-overlay-header").css("z-index",1))},b._getStorageIdentity=function(){return this._ssIdentity},b.verification={container:"iframe",timeout:5e3},a.pandalocker.entity.socialButton=b}(jQuery);;
/*!
 * Facebook SDK Connector
 * Copyright 2014, OnePress, http://byonepress.com
*/
!function(a){"use strict";a.onepress||(a.onepress={}),a.pandalocker.sdk||(a.pandalocker.sdk={}),a.pandalocker.sdk.facebook=a.pandalocker.sdk.facebook||{name:"facebook",url1:"//connect.facebook.net/{lang}/all.js",url2:"//connect.facebook.net/{lang}/sdk.js",scriptId:"facebook-jssdk",timeout:1e4,isLoaded:function(){return"object"==typeof window.FB},prepare:function(){0===a("#fb-root").length&&a("<div id='fb-root'></div>").appendTo(a("body"));var b=this.options&&this.options.lang||"en_US";this.url1=this.url1.replace("{lang}",b),this.url2=this.url2.replace("{lang}",b),this.url="v1.0"===this.options.version?this.url1:this.url2},createEvents:function(){var b=this,c=this.isLoaded(),d=function(){window.FB.init({appId:b.options&&b.options.appId||null,status:!0,cookie:!0,xfbml:!0,version:b.options.version}),window.FB.Event.subscribe("edge.create",function(b){a(document).trigger("onp-sl-facebook-like",[b])}),window.FB.init=function(){},a(document).trigger(b.name+"-init")};if(c)return void d();if(window.fbAsyncInit)var e=window.fbAsyncInit;window.fbAsyncInit=function(){d(),e&&e(),window.fbAsyncInit=function(){}}}}}(jQuery);;
/*!
 * Twitter SDK Connector
 * Copyright 2014, OnePress, http://byonepress.com
*/
!function(a){"use strict";a.onepress||(a.onepress={}),a.pandalocker.sdk||(a.pandalocker.sdk={}),a.pandalocker.sdk.twitter=a.pandalocker.sdk.twitter||{name:"twitter",url:"//platform.twitter.com/widgets.js",scriptId:"twitter-wjs",timeout:1e4,isLoaded:function(){return"undefined"!=typeof window.__twttrlr},createEvents:function(){var b=this,c=this.isLoaded(),d=function(){a(document).trigger(b.name+"-init")};return c?void d():(window.twttr||(window.twttr={}),window.twttr.ready||(window.twttr=a.extend(window.twttr,{_e:[],ready:function(a){this._e.push(a)}})),void twttr.ready(function(){d()}))},prepare:function(){var b=function(b){return(b||b.data)&&"string"==typeof b.data?-1!==b.data.indexOf(':["tweet"')?a(document).trigger("onp-sl-twitter-tweet"):-1!==b.data.indexOf(':["follow"')?a(document).trigger("onp-sl-twitter-follow"):void 0:void 0};window.addEventListener?window.addEventListener("message",b,!1):window.attachEvent("onmessage",b)}}}(jQuery);;
/*!
 * Google SDK Connector
 * Copyright 2014, OnePress, http://byonepress.com
*/
!function(a){"use strict";a.onepress||(a.onepress={}),a.pandalocker.sdk||(a.pandalocker.sdk={}),a.pandalocker.sdk.google=a.pandalocker.sdk.google||{name:"google",url:"//apis.google.com/js/plusone.js",scriptId:"google-jssdk",timeout:1e4,isLoaded:function(){return"object"==typeof window.gapi},prepare:function(){var b=this;b.notAuthed=!1;var c=this.options&&this.options.lang||"en";if(window.___gcfg=window.___gcfg||{lang:c},window.OPanda_GooglePlusOne_Callback=function(b){"on"===b.state&&a(document).trigger("onp-sl-google-plus",[b.href])},window.OPanda_GoogleShare_StartInteraction=function(b){a.pandalocker.data.__googleShareUrl=b.id},!a.pandalocker.tools.isTabletOrMobile()){var d=function(c){if((c||c.data)&&"string"==typeof c.data&&-1===c.data.indexOf("oauth2relay")){if(-1!==c.data.indexOf("::drefresh"))return void(b.notAuthed=!0);if(-1!==c.data.indexOf("::_g_wasClosed")||-1!==c.data.indexOf("::_g_closeMe")){if(b.notAuthed)return void(b.notAuthed=!1);a(document).trigger("onp-sl-google-share")}}};window.addEventListener?window.addEventListener("message",d,!1):window.attachEvent("onmessage",d)}}}}(jQuery);;
/*!
 * Google Client SDK
 * Copyright 2014, OnePress, http://byonepress.com
*/
!function(a){"use strict";a.onepress||(a.onepress={}),a.pandalocker.sdk||(a.pandalocker.sdk={}),a.pandalocker.sdk.googleClient=a.pandalocker.sdk.googleClient||{name:"google-client",url:"//apis.google.com/js/client:platform.js?onload=OPanda_GoogleClient_Callback",scriptId:"google-client-jssdk",timeout:1e4,isLoaded:function(){return window.gapi&&"object"==typeof window.gapi.auth},prepare:function(){var b=this;window.OPanda_GoogleClient_Callback=function(){a(document).trigger(b.name+"-script-loaded")}}}}(jQuery);;
/*!
 * LinkedIn SDK Connector
 * Copyright 2014, OnePress, http://byonepress.com
*/
!function(a){"use strict";a.onepress||(a.onepress={}),a.pandalocker.sdk||(a.pandalocker.sdk={}),a.pandalocker.sdk.linkedin=a.pandalocker.sdk.linkedin||{name:"linkedin",url:"//platform.linkedin.com/in.js",scriptId:"linkedin-jssdk",timeout:1e4,isLoaded:function(){return"object"==typeof window.IN},prepare:function(){window.OPanda_LinkedinShare_Callback=function(b){a(document).trigger("onp-sl-linkedin-share",[b])};var b=window.open;window.open=function(c,d,e){var f=b(c,d,e);if(!f)return f;var g=d||f.name;return g?"easyXDM_IN"!==g.substring(0,10)?f:void(a.pandalocker.sdk.linkedin._activePopup=f):f}}}}(jQuery);;
/*!
 * Facebook Like Button
 * Copyright 2014, OnePress, http://byonepress.com
*/
!function(a){"use strict";var b=a.pandalocker.tools.extend(a.pandalocker.entity.socialButton);b.name="facebook-like",b._defaults={url:null,layout:"button_count",width:null,verbToDisplay:"like",colorScheme:"light",font:"tahoma",ref:null,theConfirmIssue:!1},b.prepareOptions=function(){this.url=this._extractUrl(),"vertical"===this.groupOptions.layout?this.options.layout="box_count":this.groupOptions.counters||(this.options.layout="button")},b.setupHooks=function(){var a=this;this.addHook("markup-created",function(){a._startTrackIFrameSizes()}),this.addHook("before-show-content",function(){a._stopTrackIFrameSizes()})},b.setupEvents=function(){var b=this;a(document).bind("onp-sl-facebook-like",function(c,d){b.url===a.pandalocker.tools.URL.normalize(d)&&b.unlock("button",b.name,b.url)})},b.renderButton=function(b){this.button=a("<div></div>").appendTo(b),this.button.attr("data-show-faces",!1),this.button.attr("data-send",!1),this.button.attr("data-href",this.url),this.options.font&&this.button.attr("data-font",this.options.font),this.options.colorScheme&&this.button.attr("data-colorscheme",this.options.colorScheme),this.options.ref&&this.button.attr("data-ref",this.options.ref),this.options.width&&this.button.attr("data-width",this.options.width),this.options.layout&&this.button.attr("data-layout",this.options.layout),this.options.verbToDisplay&&this.button.attr("data-action",this.options.verbToDisplay),this.button.addClass("fb-like"),window.FB.XFBML.parse(b[0])},b._startTrackIFrameSizes=function(){if(!this.options.theConfirmIssue){var b=this;this._trackIFrameTimer=null,this.locker.locker.hover(function(){var c=b.control.find("iframe");c.length&&(b._trackIFrameTimer=setInterval(function(){var d=parseInt(c[0].style.height);d||(d=c.height()),d>200&&(b._stopTrackIFrameSizes(),a(document).trigger("onp-sl-facebook-like",[b.url]))},500))},function(){b._stopTrackIFrameSizes()})}},b._stopTrackIFrameSizes=function(){this._trackIFrameTimer&&clearInterval(this._trackIFrameTimer)},a.pandalocker.controls["social-buttons"]["facebook-like"]=b}(jQuery);;
/*!
 * Facebook Share Button
 * Copyright 2014, OnePress, http://byonepress.com
*/
!function(a){"use strict";var b=a.pandalocker.tools.extend(a.pandalocker.entity.socialButton);b.name="facebook-share",b._defaults={url:null,layout:"button_count",count:"standard",lang:"en_US",width:null,shareDialog:!1,name:null,caption:null,description:null,image:null,unlock:null},b.prepareOptions=function(){return this.url=this._extractUrl(),this.options.appId&&"117100935120196"!=this.options.appId?void("vertical"===this.groupOptions.layout?this.options.layout="box_count":this.groupOptions.counters||(this.options.layout="button")):(this.showError(a.pandalocker.lang.errors.emptyFBAppIdError),!1)},b.setupEvents=function(){var b=this;a(document).bind("onp-sl-facebook-share",function(c,d){b.url===a.pandalocker.tools.URL.normalize(d)&&b.unlock("button",b.name,b.url)})},b.renderButton=function(b){var c=this;this.button=a("<div></div>").appendTo(b),this.button.attr("data-href",this.url),this.options.width&&this.button.attr("data-width",this.options.width),this.options.layout&&(this.button.attr("data-layout",this.options.layout),this.button.attr("data-type",this.options.layout));var d=a("<div class='onp-sl-facebook-share-overlay'></div>").appendTo(b);d.click(c.options.shareDialog?function(){return FB.ui({method:"share",href:c.url,display:"popup"},function(b){console&&console.log&&console.log("AX12:"),console&&console.log&&console.log(b),"undefined"!=typeof b&&null!==b&&a(document).trigger("onp-sl-facebook-share",[c.url])}),!1}:function(){return FB.ui({method:"feed",name:c.options.name,link:c.url,picture:c.options.image,caption:c.options.caption,description:c.options.description},function(b){console&&console.log&&console.log("AX12:"),console&&console.log&&console.log(b),"undefined"!=typeof b&&null!==b&&a(document).trigger("onp-sl-facebook-share",[c.url])}),!1}),this.button.addClass("fb-share-button"),window.FB.XFBML.parse(b[0])},a.pandalocker.controls["social-buttons"]["facebook-share"]=b}(jQuery);;
/*!
 * Twitter Tweet
 * Copyright 2014, OnePress, http://byonepress.com
*/
!function(a){"use strict";a.pandalocker.data||(a.pandalocker.data={}),a.pandalocker.data.__tweetedUrl=null,a.pandalocker.data.__tweetWindow=null;var b=a.pandalocker.tools.extend(a.pandalocker.entity.socialButton);b.name="twitter-tweet",b.verification={container:"iframe",timeout:6e5},b._defaults={doubleCheck:!1,url:null,text:null,via:null,related:null,count:"horizontal",lang:"en",counturl:null,size:"medium"},b.prepareOptions=function(){if(!this.options.url&&!this.networkOptions.url&&a("link[rel='canonical']").length>0&&(this.options.url=a("link[rel='canonical']").attr("href")),this.url=this._extractUrl(),"vertical"===this.groupOptions.layout?this.showError(a.pandalocker.lang.errors.unsupportedTwitterTweetLayout):this.groupOptions.counters||(this.options.count="none"),this.groupOptions.lang){var b=this.groupOptions.lang.split("_");this.options.lang=b[0]}if(!this.options.text){var c=a("title");this.options.text=c.length>0?a(c[0]).text():""}},b.setupEvents=function(){var b=this;a(document).bind("onp-sl-twitter-tweet",function(){b.url===a.pandalocker.data.__tweetedUrl&&(a.pandalocker.data.__tweetWindow&&a.pandalocker.data.__tweetWindow.close&&a.pandalocker.data.__tweetWindow.close(),a.pandalocker.data.__tweetWindow=null,b.unlock("button",b.name,b.url))})},b.renderButton=function(b){var c=this;this.button=a('<a href="https://twitter.com/share" class="twitter-share-button">Tweet</a>').appendTo(b),this.button.attr("data-url",this.url),this.button.attr("data-show-count",this.options.showCount),this.options.via&&this.button.attr("data-via",this.options.via),this.options.text&&this.button.attr("data-text",this.options.text),this.options.lang&&this.button.attr("data-lang",this.options.lang),this.options.hashtags&&this.button.attr("data-hashtags",this.options.hashtags),this.options.size&&this.button.attr("data-size",this.options.size),this.options.dnt&&this.button.attr("data-dnt",this.options.dnt);var d=a("<div class='onp-sl-feature-overlay'></div>").appendTo(b);d.click(function(){var b=c.tweet(c.options.doubleCheck);b.done(function(){a(document).trigger("onp-sl-twitter-tweet",[c.url])})}),b.data("url-to-verify",c.url);var e=5,f=function(){if(!(b.find("iframe").length>0))if(window.twttr.widgets&&window.twttr.widgets.load)window.twttr.widgets.load(b[0]);else{if(0>=e)return;e--,setTimeout(function(){f()},1e3)}};f()},b.tweet=function(b){var c=this,d=a.Deferred();if(b)return this.connect(function(){var b=c.tweet(!1);b.done(function(){var b=c.checkTweet(c.url);b.done(function(){d.resolve()}),b.fail(function(){c.showNotice(a.pandalocker.lang.errors.tweetNotFound)})})}),d;var e=[];if(c.options.text){var f=encodeURI(c.options.text);f=f.replace(/#/g,"%23"),f=f.replace(/\|/g,"-"),f=f.replace(/\&/g,"%26"),e.push(["text",f])}c.options.hashtags&&e.push(["hashtags",c.options.hashtags]),c.options.via&&e.push(["via",c.options.via]),c.options.related&&e.push(["via",c.options.related]),e.push(["url",c.url]),a.pandalocker.data.__tweetedUrl=c.url;var g=a.pandalocker.tools.URL().scheme("http").host("twitter.com").path("/intent/tweet").query(e).toString(),h=550,i=420,j=screen.width?screen.width/2-h/2+a.pandalocker.tools.findLeftWindowBoundry():0,k=screen.height?screen.height/2-i/2+a.pandalocker.tools.findTopWindowBoundry():0;return a.pandalocker.data.__twitterAuth&&a.pandalocker.data.__twitterAuth.closed===!1?(a.pandalocker.data.__twitterAuth.updateState(g,h,i,j,k),a.pandalocker.data.__tweetWindow=a.pandalocker.data.__twitterAuth,a.pandalocker.data.__twitterAuth=null):a.pandalocker.data.__tweetWindow=window.open(g,"TwitterTweetWindow","width="+h+",height="+i+",left="+j+",top="+k),setTimeout(function(){var b=setInterval(function(){a.pandalocker.data.__tweetWindow&&a.pandalocker.data.__tweetWindow.closed===!1||(clearInterval(b),d.resolve())},200)},200),d.promise()},b.connect=function(b){var c=this;if(a.pandalocker.data.twitterOAuthReady)a.pandalocker.data.__twitterAuthIdentityData?b(a.pandalocker.data.__twitterAuthIdentityData,c._getServiceData()):this._identify(function(a){b(a,c._getServiceData())});else{var d={opandaHandler:"twitter",opandaRequestType:"init",opandaKeepOpen:!0,opandaReadOnly:!0},e=a.pandalocker.tools.cookie("opanda_twid");e&&"null"!==e&&(d.opandaVisitorId=e);var f=c.options.proxy;for(var g in d)d.hasOwnProperty(g)&&(f=a.pandalocker.tools.updateQueryStringParameter(f,g,d[g]));c._trackWindow("opandaHandler=twitter",function(){setTimeout(function(){a.pandalocker.data.twitterOAuthReady||(c.runHook("raw-social-app-declined"),c.showNotice(a.pandalocker.lang.errors_not_signed_in))},500)});var h=500,i=610,j=screen.width?screen.width/2-h/2+a.pandalocker.tools.findLeftWindowBoundry():0,k=screen.height?screen.height/2-i/2+a.pandalocker.tools.findTopWindowBoundry():0;a.pandalocker.data.__twitterAuth=window.open(f,"Twitter Tweet","width="+h+",height="+i+",left="+j+",top="+k+",resizable=yes,scrollbars=yes,status=yes"),window.OPanda_TwitterOAuthCompleted=function(d){a.pandalocker.data.twitterOAuthReady=!0,c._saveVisitorId(d),c.connect(b)},window.OPanda_TwitterOAuthDenied=function(b){c.runHook("raw-social-app-declined"),c.showNotice(a.pandalocker.lang.errors_not_signed_in),c._saveVisitorId(b)}}},b._saveVisitorId=function(b){this._visitorId=b,a.pandalocker.data.__twitterVisitorId=b,a.pandalocker.tools.cookie("opanda_twid",b,{expires:1e3,path:"/"})},b._getServiceData=function(){return{visitorId:a.pandalocker.data.__twitterVisitorId}},b._identify=function(b){var c=this,d=a.ajax({type:"POST",dataType:"json",url:c.options.proxy,data:{opandaHandler:"twitter",opandaRequestType:"user_info",opandaVisitorId:a.pandalocker.data.__twitterVisitorId,opandaReadOnly:!0},success:function(c){console.log(c),(!c||c.error||c.errors)&&console&&console.log&&console.log("Unable to get the user data: "+d.responseText);var e={};e.displayName=c.screen_name,e.twitterUrl="https://twitter.com/"+c.screen_name,c.profile_image_url&&(e.image=c.profile_image_url.replace("_normal","")),a.pandalocker.data.__twitterAuthIdentityData=e,b(e)},error:function(){console&&console.log&&console.log("Unable to get the user data: "+d.responseText),b({})}})},b.checkTweet=function(){var b=this,c=a.Deferred(),d=a.ajax({type:"POST",dataType:"json",url:b.options.proxy,data:{opandaHandler:"twitter",opandaRequestType:"get_tweets",opandaVisitorId:a.pandalocker.data.__twitterVisitorId,opandaReadOnly:!0},success:function(a){(!a||a.error||a.errors)&&console&&console.log&&console.log("Unable to get the user data: "+d.responseText);for(var e=0;e<a.length;e++)if(a[e].entities)for(var f=0;f<a[e].entities.urls.length;f++)if(a[e].entities.urls[f]&&a[e].entities.urls[f].expanded_url===b.url)return void c.resolve();c.reject()},error:function(){console&&console.log&&console.log("Unable to get the user data: "+d.responseText),callback({})}});return c.promise()},a.pandalocker.controls["social-buttons"]["twitter-tweet"]=b}(jQuery);;
/*!
 * Twitter Follow
 * Copyright 2014, OnePress, http://byonepress.com
*/
!function(a){"use strict";a.pandalocker.data||(a.pandalocker.data={}),a.pandalocker.data.__followedUrl=null,a.pandalocker.data.__followWindow=null;var b=a.pandalocker.tools.extend(a.pandalocker.entity.socialButton);b.name="twitter-follow",b.verification={container:"iframe",timeout:6e5},b._defaults={doubleCheck:!1,url:null,hideScreenName:!1,showCount:!0,lang:"en",size:"medium"},b.prepareOptions=function(){if(!this.options.url||-1===this.options.url.indexOf("twitter"))return this.showError(a.pandalocker.lang.errors.emptyTwitterFollowUrlError),!1;if(this.url=this._extractUrl(),"vertical"===this.groupOptions.layout?this.showError(a.pandalocker.lang.errors.unsupportedTwitterFollowLayout):this.groupOptions.counters||(this.options.showCount=!1),this.groupOptions.lang){var b=this.groupOptions.lang.split("_");this.options.lang=b[0]}},b.setupEvents=function(){var b=this;a(document).bind("onp-sl-twitter-follow",function(){b.url===a.pandalocker.data.__followedUrl&&(a.pandalocker.data.__followWindow&&a.pandalocker.data.__followWindow.close&&a.pandalocker.data.__followWindow.close(),a.pandalocker.data.__followWindow=null,b.unlock("button",b.name,b.url))})},b.renderButton=function(b){var c=this;this.button=a('<a href="https://twitter.com/share" class="twitter-follow-button">Follow</a>').appendTo(b),this.button.attr("href",this.url),this.button.attr("data-show-count",this.options.showCount),this.options.showCount&&this.button.attr("data-show-count",this.options.showCount),this.options.lang&&this.button.attr("data-lang",this.options.lang),this.options.alignment&&this.button.attr("data-alignment",this.options.alignment),this.options.size&&this.button.attr("data-size",this.options.size),this.options.dnt&&this.button.attr("data-dnt",this.options.dnt),this.options.hideScreenName&&this.button.attr("data-show-screen-name",!1);var d=a("<div class='onp-sl-feature-overlay'></div>").appendTo(b);d.click(function(){var b=c.follow(c.options.doubleCheck);return b.done(function(){a(document).trigger("onp-sl-twitter-follow",[c.url])}),!1}),b.data("url-to-verify",c.url);var e=5,f=function(){if(!(b.find("iframe").length>0))if(window.twttr.widgets&&window.twttr.widgets.load)window.twttr.widgets.load(b[0]);else{if(0>=e)return;e--,setTimeout(function(){f()},1e3)}};f()},b.follow=function(b){var c=this,d=a.Deferred();if(b)return this.connect(function(){var b=c.follow(!1);b.done(function(){var b=c.checkFollower(c.url);b.done(function(){d.resolve()}),b.fail(function(){c.showNotice(a.pandalocker.lang.errors.followingNotFound)})})}),d;var e=[];a.pandalocker.data.__followedUrl=c.url;var f=c.url.split("/");c.screenName=f[f.length-1],e.push(["screen_name",c.screenName]);var g=a.pandalocker.tools.URL().scheme("http").host("twitter.com").path("/intent/follow").query(e).toString(),h=550,i=530,j=screen.width?screen.width/2-h/2+a.pandalocker.tools.findLeftWindowBoundry():0,k=screen.height?screen.height/2-i/2+a.pandalocker.tools.findTopWindowBoundry():0;return a.pandalocker.data.__twitterAuth&&a.pandalocker.data.__twitterAuth.closed===!1?(a.pandalocker.data.__twitterAuth.updateState(g,h,i,j,k),a.pandalocker.data.__followWindow=a.pandalocker.data.__twitterAuth,a.pandalocker.data.__twitterAuth=null):a.pandalocker.data.__followWindow=window.open(g,"TwitterFollowWindow","width="+h+",height="+i+",left="+j+",top="+k),setTimeout(function(){var b=setInterval(function(){a.pandalocker.data.__followWindow&&a.pandalocker.data.__followWindow.closed===!1||(clearInterval(b),d.resolve())},200)},200),d.promise()},b.connect=function(b){var c=this;if(a.pandalocker.data.twitterOAuthReady)a.pandalocker.data.__twitterAuthIdentityData?b(a.pandalocker.data.__twitterAuthIdentityData,c._getServiceData()):this._identify(function(a){b(a,c._getServiceData())});else{var d={opandaHandler:"twitter",opandaRequestType:"init",opandaKeepOpen:!0,opandaReadOnly:!0},e=a.pandalocker.tools.cookie("opanda_twid");e&&"null"!==e&&(d.opandaVisitorId=e);var f=c.options.proxy;for(var g in d)d.hasOwnProperty(g)&&(f=a.pandalocker.tools.updateQueryStringParameter(f,g,d[g]));c._trackWindow("opandaHandler=twitter",function(){setTimeout(function(){a.pandalocker.data.twitterOAuthReady||(c.runHook("raw-social-app-declined"),c.showNotice(a.pandalocker.lang.errors_not_signed_in))},500)});var h=500,i=610,j=screen.width?screen.width/2-h/2+a.pandalocker.tools.findLeftWindowBoundry():0,k=screen.height?screen.height/2-i/2+a.pandalocker.tools.findTopWindowBoundry():0;a.pandalocker.data.__twitterAuth=window.open(f,"Twitter Follow","width="+h+",height="+i+",left="+j+",top="+k+",resizable=yes,scrollbars=yes,status=yes"),window.OPanda_TwitterOAuthCompleted=function(d){a.pandalocker.data.twitterOAuthReady=!0,c._saveVisitorId(d),c.connect(b)},window.OPanda_TwitterOAuthDenied=function(b){c.runHook("raw-social-app-declined"),c.showNotice(a.pandalocker.lang.errors_not_signed_in),c._saveVisitorId(b)}}},b._saveVisitorId=function(b){this._visitorId=b,a.pandalocker.data.__twitterVisitorId=b,a.pandalocker.tools.cookie("opanda_twid",b,{expires:1e3,path:"/"})},b._getServiceData=function(){return{visitorId:a.pandalocker.data.__twitterVisitorId}},b._identify=function(b){var c=this,d=a.ajax({type:"POST",dataType:"json",url:c.options.proxy,data:{opandaHandler:"twitter",opandaRequestType:"user_info",opandaVisitorId:a.pandalocker.data.__twitterVisitorId,opandaReadOnly:!0},success:function(c){console.log(c),(!c||c.error||c.errors)&&console&&console.log&&console.log("Unable to get the user data: "+d.responseText);var e={};e.displayName=c.screen_name,e.twitterUrl="https://twitter.com/"+c.screen_name,c.profile_image_url&&(e.image=c.profile_image_url.replace("_normal","")),a.pandalocker.data.__twitterAuthIdentityData=e,b(e)},error:function(){console&&console.log&&console.log("Unable to get the user data: "+d.responseText),b({})}})},b.checkFollower=function(){var b=this,c=a.Deferred(),d=a.ajax({type:"POST",dataType:"json",url:b.options.proxy,data:{opandaHandler:"twitter",opandaRequestType:"get_followers",opandaSceenName:b.screenName,opandaVisitorId:a.pandalocker.data.__twitterVisitorId,opandaReadOnly:!0},success:function(a){if((!a||a.error||a.errors)&&console&&console.log&&console.log("Unable to get the user data: "+d.responseText),a[0])for(var b=0;b<a[0].connections.length;b++)if("following"===a[0].connections[b])return void c.resolve();c.reject()},error:function(){console&&console.log&&console.log("Unable to get the user data: "+d.responseText),callback({})}});return c.promise()},a.pandalocker.controls["social-buttons"]["twitter-follow"]=b}(jQuery);;
/*!
 * Google +1
 * Copyright 2014, OnePress, http://byonepress.com
*/
!function(a){"use strict";var b=a.pandalocker.tools.extend(a.pandalocker.entity.socialButton);b.name="google-plus",b._defaults={url:null,lang:"en-US",size:"medium",annotation:null,width:null,align:"left",expandTo:"",recommendations:!0},b.prepareOptions=function(){this.url=this._extractUrl(),"vertical"===this.groupOptions.layout?this.options.size="tall":this.groupOptions.counters||(this.options.annotation="none")},b.setupEvents=function(){var b=this;a(document).bind("onp-sl-google-plus",function(c,d){b.url===a.pandalocker.tools.URL.normalize(d)&&b.unlock("button",b.name,b.url)})},b.renderButton=function(b){this.button=a("<div></div>").appendTo(b),this.button.attr("data-href",this.url),this.options.size&&this.button.attr("data-size",this.options.size),this.options.annotation&&this.button.attr("data-annotation",this.options.annotation),this.options.align&&this.button.attr("data-align",this.options.align),this.options.expandTo&&this.button.attr("data-expandTo",this.options.expandTo),this.options.recommendations&&this.button.attr("data-recommendations",this.options.recommendations),this.button.attr("data-callback","OPanda_GooglePlusOne_Callback"),this.button.addClass("g-plusone"),setTimeout(function(){window.gapi.plusone.go(b[0])},100)},a.pandalocker.controls["social-buttons"]["google-plus"]=b}(jQuery);;
/*!
 * Google Share
 * Copyright 2014, OnePress, http://byonepress.com
*/
!function(a){"use strict";a.pandalocker.data||(a.pandalocker.data={}),a.pandalocker.data.__googleShareUrl=null;var b=a.pandalocker.tools.extend(a.pandalocker.entity.socialButton);b.name="google-share",b._defaults={url:null,lang:"en-US",size:null,annotation:"bubble",width:null,align:"left",expandTo:"",recommendations:!0},b.prepareOptions=function(){this.url=this._extractUrl(),"vertical"===this.groupOptions.layout?this.options.annotation="vertical-bubble":this.groupOptions.counters||(this.options.annotation="none")},b.setupEvents=function(){var b=this;a(document).bind("onp-sl-google-share",function(c,d){var e=d||a.pandalocker.data.__googleShareUrl;b.url===a.pandalocker.tools.URL.normalize(e)&&b.unlock("button",b.name,b.url)})},b.renderButton=function(b){var c=this;if(this.button=a("<div></div>").appendTo(b),this.button.attr("data-href",this.url),this.options.size&&this.button.attr("data-size",this.options.size),this.options.annotation&&this.button.attr("data-annotation",this.options.annotation),this.options.align&&this.button.attr("data-align",this.options.align),this.options.expandTo&&this.button.attr("data-expandTo",this.options.expandTo),this.options.recommendations&&this.button.attr("data-recommendations",this.options.recommendations),this.button.attr("data-onstartinteraction","OPanda_GoogleShare_StartInteraction"),this.button.attr("data-onendinteraction","OPanda_GoogleShare_EndInteraction"),this.button.addClass("g-plus").attr("data-action","share"),setTimeout(function(){window.gapi.plus.go(b[0])},100),a.pandalocker.tools.isTabletOrMobile()){var d=a("<div class='onp-sl-feature-overlay'></div>").appendTo(b);d.click(function(){var b=[];b.push(["url",c.url]);var d=a.pandalocker.tools.URL().scheme("https").host("plus.google.com").path("/share").query(b),e=550,f=420,g=screen.width?screen.width/2-350+a.pandalocker.tools.findLeftWindowBoundry():0,h=screen.height?screen.height/2-225+a.pandalocker.tools.findTopWindowBoundry():0,i=window.open(d,"GoogleShareWindow","width="+e+",height="+f+",left="+g+",top="+h);return setTimeout(function(){var b=setInterval(function(){i&&i.closed===!1||(clearInterval(b),a(document).trigger("onp-sl-google-share",[c.url]))},200)},200),!1})}},a.pandalocker.controls["social-buttons"]["google-share"]=b}(jQuery);;
/*!
 * Youtube Subscribe
 * Copyright 2013, OnePress, http://byonepress.com
*/
!function(a){"use strict";var b=a.pandalocker.tools.extend(a.pandalocker.entity.socialButton);b.name="youtube-subscribe",b.sdk="google-client",b._defaults={clientId:null,channelId:null,layout:"default",count:"default"},b._extractUrl=function(){return this.options.channelId},b.prepareOptions=function(){this.url=this._extractUrl(),this.options.channelId||this.showError(a.pandalocker.lang.errors.emptyYoutubeChannelId),this.options.clientId||this.showError(a.pandalocker.lang.errors.emptyGoogleClientId),"vertical"===this.groupOptions.layout?this.showError(a.pandalocker.lang.errors.unsupportedYoutubeSubscribeLayout):this.groupOptions.counters||(this.options.count="hidden")},b.setupEvents=function(){var b=this;a(document).bind("onp-sl-youtube-subscribe",function(){b.unlock("button",b.name,b.url)})},b.renderButton=function(b){var c=this;this.button=a("<div></div>").appendTo(b),this.button.attr("data-channelid",this.options.channelId),this.button.attr("data-layout",this.options.layout),this.button.attr("data-count",this.options.count),this.button.addClass("g-ytsubscribe"),setTimeout(function(){window.gapi.ytsubscribe.go(b[0])},100);var d=a("<div class='onp-sl-youtube-subscribe-overlay'></div>").appendTo(b);d.click(function(){return c.authorize(!1,function(b){return"immediate_failed"!==b.error?b&&b.status.signed_in?void c.subscribe():void c.showNotice(a.pandalocker.lang.errors_not_signed_in):void 0}),!1})},b.authorize=function(a,b){var c=this,d={};d.client_id=c.options.clientId,d.immediate=a,d.scope="https://www.googleapis.com/auth/youtube",gapi.auth.authorize(d,b)},b.subscribe=function(){var b=this;gapi.client.load("youtube","v3",function(){var c=gapi.client.youtube.subscriptions.insert({part:"snippet",resource:{snippet:{resourceId:{kind:"youtube#channel",channelId:b.options.channelId}}}});c.execute(function(c){return c.error&&"subscriptionDuplicate"!=c.error.data[0].reason?b.showNotice(c.error.data[0].message):void a(document).trigger("onp-sl-youtube-subscribe")})})},a.pandalocker.controls["social-buttons"]["youtube-subscribe"]=b}(jQuery);;
/*!
 * LinkedIn Share
 * Copyright 2014, OnePress, http://byonepress.com
*/
!function(a){"use strict";var b=a.pandalocker.tools.extend(a.pandalocker.entity.socialButton);b.name="linkedin-share",b.verification.container=".IN-widget",b.verification.timeout=5e3,b._defaults={url:null,counter:"right"},b.prepareOptions=function(){this.url=this._extractUrl(),"vertical"===this.groupOptions.layout?this.options.counter="top":this.groupOptions.counters||(this.options.counter="none")},b.setupEvents=function(){var b=this;a(document).bind("onp-sl-linkedin-share",function(c,d){b.url===a.pandalocker.tools.URL.normalize(d)&&b.unlock("button",b.name,b.url)})},b.renderButton=function(b){var c=this;this.button=a('<script type="IN/Share" data-onsuccess="OPanda_LinkedinShare_Callback" data-success="OPanda_LinkedinShare_Callback" data-onSuccess="OPanda_LinkedinShare_Callback"></script>'),this.options.counter&&this.button.attr("data-counter",this.options.counter),this.button.attr("data-url",this.url),this.button.appendTo(b),IN.init(),IN.parse&&IN.parse(this.button[0]),b.click(function(){setTimeout(function(){if(a.pandalocker.sdk.linkedin._activePopup){var b=a.pandalocker.sdk.linkedin._activePopup;a.pandalocker.sdk.linkedin._activePopup=!1;var d=setInterval(function(){b&&b.closed===!1||(clearInterval(d),a(document).trigger("onp-sl-linkedin-share",[c.url]))},200)}},200)})},a.pandalocker.controls["social-buttons"]["linkedin-share"]=b}(jQuery);;
!function(a){"use strict";var b=a.pandalocker.tools.extend(a.pandalocker.entity.group);b._defaults={order:["facebook","twitter","google"],facebook:{version:"v1.0"},twitter:{},google:{},linkedin:{}},b.name="connect-buttons",b.setup=function(){this.isFirst||(this.options.text.message=this.options.text.message||a.pandalocker.lang.connectButtons.defaultMessage,this.options.text.message=a.pandalocker.tools.normilizeHtmlOption(this.options.text.message))},a.pandalocker.groups["connect-buttons"]=b}(jQuery);;
!function(a){"use strict";var b=a.pandalocker.tools.extend(a.pandalocker.entity.actionControl);b.tag='<a href="#"></a>',b.render=function(b){var c=this;if(this.sdk=this.sdk||this.name,this.control.addClass("onp-sl-button"),this.icon=a("<div class='onp-sl-icon'></div>"),this.icon.appendTo(b),this.container=a("<div class='onp-sl-connect-button onp-sl-social-button-"+this.name+"'></div>"),this.container.appendTo(b),!this._hasError()){this._lockLoadingState();var d=this.requireSdk(this.sdk,this.options);d.fail(function(a){c._unlockLoadingState(),c.showError(a)}),d.done(function(){c.setupEvents&&c.setupEvents(),c.renderButton(c.container)})}this.handleClick(),this._checkWaitingSubscription()},b.processButtonTitle=function(b,c){var d=b.replace("{long}",a.pandalocker.lang.signin_long);return d=d.replace("{short}",a.pandalocker.lang.signin_short),d=d.replace("{name}",c)},b.handleClick=function(){var a=this;this.control.click(function(){return a.runHook("raw-interaction"),a._hasError()||a._isLoading()?void 0:(a.connect(function(b,c){a.runActions(b,c,!0)}),!1)})},b._lockLoadingState=function(){this._setLoadingState("connect-button")},b._unlockLoadingState=function(){this._removeLoadingState("connect-button")},b.connect=function(){throw new Error("The control should implement the method 'connect'")},b._getStorageIdentity=function(){return"opanda_"+a.pandalocker.tools.hash(this.name)+"_hash_"+this.name},a.pandalocker.entity.connectButton=b}(jQuery);;
/*!
 * Facebook Connect
 * Copyright 2014, OnePress, http://byonepress.com
*/
!function(a){"use strict";var b=a.pandalocker.tools.extend(a.pandalocker.entity.connectButton);b.name="facebook",b._defaults={},b.prepareOptions=function(){this.permissions=["public_profile","email"],this.restPermissions=this.permissions,this.declinedPermissions=[]},b.renderButton=function(b){var c=this,d=this.processButtonTitle(this.lang.viaSignInLong,a.pandalocker.lang.signin_facebook_name),e=this.processButtonTitle(this.lang.viaSignInShort,a.pandalocker.lang.signin_facebook_name);this.longTitle=a("<span class='onp-sl-long'>"+d+"</span>").appendTo(b),this.shortTtle=a("<span class='onp-sl-short'>"+e+"</span>").appendTo(b);var f=this.groupOptions.loadingTimeout||2e4,g=!1;setTimeout(function(){g||c.showError(a.pandalocker.lang.errors.invlidFacebookAppId)},f),this._getLoginStatus(function(){g=!0,c._unlockLoadingState()})},b.connect=function(b){var c=this;if("connected"===c._status&&!this.restPermissions.length)return this._identify(function(a){b(a,c._serviceData)});var d={scope:c.restPermissions.join(",")};c.declinedPermissions.length>0&&(d.auth_type="rerequest");var e=!1;c._trackWindow("facebook.com/dialog/oauth",function(){setTimeout(function(){e||(c.runHook("raw-social-app-declined"),c.showNotice(a.pandalocker.lang.errors_not_signed_in))},500)}),FB.login(function(d){e=!0,c._checkPermissions(d,function(){return"connected"!==c._status?(c.runHook("raw-social-app-declined"),void c.showNotice(a.pandalocker.lang.errors_not_signed_in)):c.restPermissions.length?(c.runHook("raw-social-app-declined"),void c.showNotice(a.pandalocker.lang.res_errors_not_granted.replace("{permissions}",c.restPermissions.join(", ")))):c._identify(function(a){b(a,c._serviceData)})})},d)},b._getLoginStatus=function(a){var b=this;FB.getLoginStatus(function(c){b._checkPermissions(c,a)})},b._checkPermissions=function(b,c){var d=this;return this._status=b.status,this._serviceData=b,b&&"connected"===this._status?void FB.api("/me/permissions",function(b){if(b&&b.data){if(!b.data[0]||b.data[0].permission||b.data[0].status){var e=a.grep(b.data,function(a){return"granted"!==a.status}),f=a.grep(b.data,function(a){return"granted"==a.status});e=a.map(e,function(a){return a.permission}),f=a.map(f,function(a){return a.permission})}else{var f=[],e=[];for(var g in b.data[0])b.data[0][g]?f.push(g):e.push(g)}d.restPermissions=a.pandalocker.tools.diffArrays(d.permissions,f),d.declinedPermissions=a.pandalocker.tools.unionArrays(d.restPermissions,e),c&&c()}}):void(c&&c())},b._identify=function(a){FB.api("/me?fields=email,first_name,last_name,gender,link",function(b){var c={};return b?(c.source="facebook",c.email=b.email,c.displayName=b.first_name+" "+b.last_name,c.name=b.first_name,c.family=b.last_name,c.gender=b.gender,c.facebookUrl=b.link,c.image="https://graph.facebook.com/"+b.id+"/picture?type=large",c.social=!0,void a(c)):a(c)})},a.pandalocker.controls["connect-buttons"].facebook=b}(jQuery);;
/*!
 * Facebook Connect
 * Copyright 2014, OnePress, http://byonepress.com
*/
!function(a){"use strict";var b=a.pandalocker.tools.extend(a.pandalocker.entity.connectButton);b.name="google",b.sdk="google-client",b._defaults={},b.prepareOptions=function(){return this.options.clientId?(this.permissions=["https://www.googleapis.com/auth/userinfo.profile"],this.permissions.push("https://www.googleapis.com/auth/userinfo.email"),-1===a.inArray("youtube-subscribe",this.options.actions)||(this.permissions.push("https://www.googleapis.com/auth/youtube"),this.options.youtubeSubscribe&&this.options.youtubeSubscribe.channelId)?(this.restPermissions=this.permissions,void(this.declinedPermissions=[])):this.showError(a.pandalocker.lang.connectButtons.errorYouTubeChannelMissed)):void this.showError(a.pandalocker.lang.connectButtons.google.clientIdMissed)},b.renderButton=function(b){var c=this.processButtonTitle(this.lang.viaSignInLong,a.pandalocker.lang.signin_google_name),d=this.processButtonTitle(this.lang.viaSignInShort,a.pandalocker.lang.signin_google_name);this.longTitle=a("<span class='onp-sl-long'>"+c+"</span>").appendTo(b),this.shortTtle=a("<span class='onp-sl-short'>"+d+"</span>").appendTo(b),this._unlockLoadingState()},b.connect=function(b){var c=this,d=!1,e={callback:function(e){return"immediate_failed"!==e.error?(d=!0,e&&e.status.signed_in?c._identify(function(d,f){return"error"===d?void c.showNotice(a.pandalocker.lang.connectButtons.google.unexpectedError.replace("{0}",f)):void b(f,e)}):(c.runHook("raw-social-app-declined"),void c.showNotice(a.pandalocker.lang.errors_not_signed_in))):void 0}};if(e.clientid=this.options.clientId,e.cookiepolicy="single_host_origin",e.scope=this.permissions.join(" "),this.options.share){var f=a.pandalocker.tools.capitaliseFirstLetter(this.options.share.type||"add");e.requestvisibleactions="http://schema.org/"+f+"Action"}c._trackWindow("google.com/o/oauth2",function(){setTimeout(function(){d||(c.runHook("raw-social-app-declined"),c.showNotice(a.pandalocker.lang.errors_not_signed_in))},500)}),console.log(e),gapi.auth.signIn(e)},b._identify=function(a){gapi.client.load("plus","v1").then(function(){gapi.client.plus.people.get({userId:"me"}).then(function(b){var c={};return b&&b.result?(c.source="google",c.email=b.result.emails&&b.result.emails[0]&&b.result.emails[0].value,c.displayName=b.result.displayName,c.name=b.result.name&&b.result.name.givenName,c.family=b.result.name&&b.result.name.familyName,c.gender=b.result.gender,c.googleUrl=b.result.url,c.social=!0,b.result.image&&b.result.image.url&&(c.image=b.result.image.url.replace(/\?sz=\d+/gi,"")),void a("success",c)):a("error",c)},function(b){a("error",b.result.error.message)})})},b.runYoutubeSubscribeAction=function(a,b,c,d,e){var f=this;gapi.client.load("youtube","v3",function(){var a=gapi.client.youtube.subscriptions.insert({part:"snippet",resource:{snippet:{resourceId:{kind:"youtube#channel",channelId:f.options.youtubeSubscribe.channelId}}}});a.execute(function(a){return a&&a.error?a.error.data&&a.error.data[0]&&"subscriptionDuplicate"===a.error.data[0].reason?void e():(console&&console.log&&console.log(a),f.showError(a.error.message),void e("error")):(f.runHook("got-youtube-subscriber",[a]),void e())})})},a.pandalocker.controls["connect-buttons"].google=b}(jQuery);;
/*!
 * Facebook Twitter
 * Copyright 2014, OnePress, http://byonepress.com
*/
!function(a){"use strict";var b=a.pandalocker.tools.extend(a.pandalocker.entity.connectButton);b.name="twitter",b._defaults={},b.prepareOptions=function(){return this.options.proxy?-1===a.inArray("follow",this.options.actions)||this.options.follow&&this.options.follow.user?-1===a.inArray("tweet",this.options.actions)||this.options.tweet&&this.options.tweet.message?void 0:this.showError(a.pandalocker.lang.connectButtons.errorTwitterMessageMissed):this.showError(a.pandalocker.lang.connectButtons.errorTwitterUserMissed):void this.showError(a.pandalocker.lang.connectButtons.twitter.proxyEmpty)},b.renderButton=function(b){var c=this,d=this.processButtonTitle(this.lang.viaSignInLong,a.pandalocker.lang.signin_twitter_name),e=this.processButtonTitle(this.lang.viaSignInShort,a.pandalocker.lang.signin_twitter_name);this.longTitle=a("<span class='onp-sl-long'>"+d+"</span>").appendTo(b),this.shortTtle=a("<span class='onp-sl-short'>"+e+"</span>").appendTo(b),c._unlockLoadingState()},b.connect=function(b){var c=this;if(a.pandalocker.data.twitterOAuthReady)this._identify(function(a){b(a,c._getServiceData())});else{var d=a.extend(!0,{},c.options);delete d.proxy;var e={opandaHandler:"twitter",opandaRequestType:"init",opandaTwitterOptions:JSON.stringify(d)},f=a.pandalocker.tools.cookie("opanda_twid");f&&"null"!==f&&(e.opandaVisitorId=f);var g=c.options.proxy;for(var h in e)e.hasOwnProperty(h)&&(g=a.pandalocker.tools.updateQueryStringParameter(g,h,e[h]));c._trackWindow("opandaHandler=twitter",function(){setTimeout(function(){a.pandalocker.data.twitterOAuthReady||(c.runHook("raw-social-app-declined"),c.showNotice(a.pandalocker.lang.errors_not_signed_in))},500)});{window.open(g,"Twitter Sign-In","width=500,height=450,resizable=yes,scrollbars=yes,status=yes")}window.OPanda_TwitterOAuthCompleted=function(d){a.pandalocker.data.twitterOAuthReady=!0,c._saveVisitorId(d),c.connect(b)},window.OPanda_TwitterOAuthDenied=function(b){c.runHook("raw-social-app-declined"),c.showNotice(a.pandalocker.lang.errors_not_signed_in),c._saveVisitorId(b)}}},b._saveVisitorId=function(b){this._visitorId=b,a.pandalocker.tools.cookie("opanda_twid",b,{expires:1e3,path:"/"})},b._getServiceData=function(){var a=this;return{visitorId:a._visitorId}},b._identify=function(b){var c=this,d=a.ajax({type:"POST",dataType:"json",url:c.options.proxy,data:{opandaHandler:"twitter",opandaRequestType:"user_info",opandaVisitorId:c._visitorId},success:function(a){(!a||a.error||a.errors)&&console&&console.log&&console.log("Unable to get the user data: "+d.responseText);var c={};if(!a)return b(c);if(a.name){var e=a.name.split(" ",2);2===e.length?(c.name=e[0],c.family=e[1]):c.name=a.name}else c.name=a.name;c.source="twitter",c.email=a.email,c.displayName=a.screen_name,c.twitterUrl="https://twitter.com/"+a.screen_name,a.profile_image_url&&(c.image=a.profile_image_url.replace("_normal","")),b(c)},error:function(){console&&console.log&&console.log("Unable to get the user data: "+d.responseText),b({})}})},b.runFollowAction=function(b,c,d,e,f){var g=this,h={opandaHandler:"twitter",opandaRequestType:"follow",opandaVisitorId:g._visitorId,opandaFollowTo:d.user,opandaNotifications:d.notifications};h=a.pandalocker.filters.run(g.locker.id+".ajax-data",[h]),h=a.pandalocker.filters.run(g.locker.id+".twitter-follow.ajax-data",[h]);var i=a.ajax({type:"POST",dataType:"json",url:g.options.proxy,data:h});i.success(function(a){return(!a||a.error||a.errors)&&console&&console.log&&console.log("Unable to follow: "+i.responseText),a&&a.error?(g.showScreen("default"),void g.showNotice("Unable to perform the follow action due to the error: "+a.error)):void f()}),i.error(function(){g.showScreen("default"),g.showNotice("Unable to perform the follow action due to the unexpected error. See the logs for more details."),console&&console.log&&console.log("Unable to follow: "+i.responseText)})},b.runTweetAction=function(b,c,d,e,f){var g=this,h={opandaHandler:"twitter",opandaRequestType:"tweet",opandaVisitorId:g._visitorId,opandaTweetMessage:d.message};h=a.pandalocker.filters.run(g.locker.id+".ajax-data",[h]),h=a.pandalocker.filters.run(g.locker.id+".twitter-tweet.ajax-data",[h]);var i=a.ajax({type:"POST",dataType:"json",url:g.options.proxy,data:h});i.success(function(a){return(!a||a.error||a.errors)&&console&&console.log&&console.log("Unable to tweet: "+i.responseText),a&&a.error?(g.showScreen("default"),void g.showNotice("Unable to perform the tweet action due to the error: "+a.error)):void f()}),i.error(function(){g.showScreen("default"),g.showNotice("Unable to perform the tweet action due to the unexpected error. See the logs for more details."),console&&console.log&&console.log("Unable to follow: "+i.responseText)})},a.pandalocker.controls["connect-buttons"].twitter=b}(jQuery);;
/*!
 * Facebook LinkedIn
 * Copyright 2014, OnePress, http://byonepress.com
*/
!function(a){"use strict";var b=a.pandalocker.tools.extend(a.pandalocker.entity.connectButton);b.name="linkedin",b._defaults={},b.prepareOptions=function(){return this.options.clientId?void 0:void this.showError(a.pandalocker.lang.connectButtons.linkedin.clientIdMissed)},b.renderButton=function(b){var c=this,d=this.processButtonTitle(this.lang.viaSignInLong,a.pandalocker.lang.signin_linkedin_name),e=this.processButtonTitle(this.lang.viaSignInShort,a.pandalocker.lang.signin_linkedin_name);this.longTitle=a("<span class='onp-sl-long'>"+d+"</span>").appendTo(b),this.shortTtle=a("<span class='onp-sl-short'>"+e+"</span>").appendTo(b),c._unlockLoadingState()},b.connect=function(b){var c=this;if(a.pandalocker.data.linkedInOAuthReady)this._identify(function(a){b(a,c._getServiceData())});else{var d=a.extend(!0,{},c.options);delete d.proxy;var e={opandaHandler:"linkedin",opandaRequestType:"init",opandaLinkedinOptions:JSON.stringify(d)},f=c.options.proxy;for(var g in e)e.hasOwnProperty(g)&&(f=a.pandalocker.tools.updateQueryStringParameter(f,g,e[g]));c._trackWindow("opandaHandler=linkedin",function(){setTimeout(function(){a.pandalocker.data.linkedInOAuthReady||(c.runHook("raw-social-app-declined"),c.showNotice(a.pandalocker.lang.errors_not_signed_in))},500)});{window.open(f,"LinkedIn Sign-In","width=500,height=450,resizable=yes,scrollbars=yes,status=yes")}window.OPanda_LinkedInOAuthCompleted=function(d){a.pandalocker.data.linkedInOAuthReady=!0,c._accessToken=d,c.connect(b)},window.OPanda_LinkedInOAuthDenied=function(){c.runHook("raw-social-app-declined"),c.showNotice(a.pandalocker.lang.errors_not_signed_in)}}},b._getServiceData=function(){var a=this;return{accessToken:a._accessToken}},b._identify=function(b){var c=this,d=a.ajax({type:"POST",dataType:"json",url:c.options.proxy,data:{opandaHandler:"linkedin",opandaRequestType:"user_info",opandaAccessToken:c._accessToken},success:function(a){(!a||a.error||a.errors)&&console&&console.log&&console.log("Unable to get the user data: "+d.responseText);var c={};return a?(c.source="linkedin",c.email=a.emailAddress,c.displayName=a.firstName+" "+a.lastName,c.name=a.firstName,c.family=a.lastName,c.linkedinUrl=a.publicProfileUrl,c.social=!0,a.pictureUrls&&a.pictureUrls.values&&(c.image=a.pictureUrls.values[0]),void b(c)):b(c)},error:function(){console&&console.log&&console.log("Unable to get the user data: "+d.responseText),b({})}})},a.pandalocker.controls["connect-buttons"].linkedin=b}(jQuery);;
/*!
 * Google Client SDK
 * Copyright 2014, OnePress, http://byonepress.com
*/
!function(a){"use strict";a.onepress||(a.onepress={}),a.pandalocker.sdk||(a.pandalocker.sdk={}),a.pandalocker.sdk.googleClient=a.pandalocker.sdk.googleClient||{name:"google-client",url:"//apis.google.com/js/client:platform.js?onload=OPanda_GoogleClient_Callback",scriptId:"google-client-jssdk",timeout:1e4,isLoaded:function(){return window.gapi&&"object"==typeof window.gapi.auth},prepare:function(){var b=this;window.OPanda_GoogleClient_Callback=function(){a(document).trigger(b.name+"-script-loaded")}}}}(jQuery);;
/*!
 * LinkedIn SDK Connector
 * Copyright 2014, OnePress, http://byonepress.com
*/
!function(a){"use strict";a.onepress||(a.onepress={}),a.pandalocker.sdk||(a.pandalocker.sdk={}),a.pandalocker.sdk.linkedinConnect=a.pandalocker.sdk.linkedinConnect||{name:"linkedin-connect",url:"//platform.linkedin.com/in.js?async=true",scriptId:"linkedin-jssdk",timeout:1e4,isLoaded:function(){return"object"==typeof window.IN},prepare:function(){window.OPanda_LinkedinShare_Callback=function(b){a(document).trigger("onp-sl-linkedin-share",[b])}},createEvents:function(){var b=this,c=this.isLoaded(),d=function(){window.IN.init({api_key:b.options.apiKey}),window.IN.init=function(){},a(document).trigger(b.name+"-init")};return c?void d():void a(document).bind(b.name+"-script-loaded",function(){d()})}}}(jQuery);;
!function(a){"use strict";var b=a.pandalocker.tools.extend(a.pandalocker.entity.group);b._defaults={order:["form"],text:a.pandalocker.lang.subscription.defaultText,separator:{type:"hiding-link",title:a.pandalocker.lang.misc_or_enter_email}},b.name="subscription",a.pandalocker.groups.subscription=b}(jQuery);;
!function($){"use strict";var form=$.pandalocker.tools.extend($.pandalocker.entity.actionControl);form.name="form",form._defaults={type:"email-form",fields:null,unlocksPerPage:!1},form.setup=function(){this.options.actions&&0!==this.options.actions.length||(this.options.actions=["subscribe"]),$.pandalocker.entity.actionControl.setup.apply(this),this.options.requireName=this.options.requireName||this.options.subscribe&&this.options.subscribe.requireName,this.advancedValidation=!0,"email-form"===this.options.type?(this.advancedValidation=!1,this.options.fields=[{id:"email",type:"email",placeholder:$.pandalocker.lang.errors_empty_email,req:!0}]):"name-email-form"===this.options.type&&(this.advancedValidation=!0,this.options.fields=[{id:"fullname",type:"text",placeholder:$.pandalocker.lang.misc_enter_your_name,req:!0},{id:"email",type:"email",placeholder:$.pandalocker.lang.misc_enter_your_email,req:!0}])},form._memorize=function(a,b){var c="opanda_"+a;if(localStorage&&localStorage.setItem)try{localStorage.setItem(c,b)}catch(d){$.pandalocker.tools.cookie(c,b,{expires:365,path:"/"})}else $.pandalocker.tools.cookie(c,b,{expires:365,path:"/"})},form._getFromMemory=function(a){var b="opanda_"+a,c=localStorage&&localStorage.getItem&&localStorage.getItem(b);return c||(c=$.pandalocker.tools.cookie(b)),c},form.submit=function(){var a=this;if(!this.validate())return!1;if(this.options.preview)return console.log(this.getValues()),void this.showNotice(window.bizpanda&&window.bizpanda.res&&window.bizpanda.res["subscription-preview-mode"]||"The locker is in the preview mode. The subscription does not work here.");var b=this.$button.text();this.$button.addClass("load").prop("disabled",!0),this.$button.html("&nbsp;");var c=a.runActions(this.getValues(),{});c.fail(function(){a.$button.removeClass("load").removeProp("disabled"),a.$button.text(b)})},form.getValues=function(){var a=this,b=this.options.fields,c={};return $.each(b,function(b,d){d.id&&(c[d.id]=a.getFieldValue(d))}),c},form.getFieldValue=function(a){var b=a.type,c=$.pandalocker.hooks.run("get-field-value-"+b,[a]);if("undefined"!=typeof c)return c;"email"===a.id?this._memorize("email",$.trim(a._$input.val())):"fullname"===a.id&&this._memorize("fullname",$.trim(a._$input.val()));var d=$.pandalocker.tools.capitaliseFirstLetter($.pandalocker.tools.camelCase(b)),e="get"+d+"Value";return this[e]?this[e](a):a._$input?$.trim(a._$input.val()):null},form.getDateValue=function(a){return $.pandalocker.tools.isTabletOrMobile()?$.trim(a._$input.val()):a._$input.data("value")},form.getCheckboxValue=function(a){return a._$input.is(":checked")?a.onValue:a.offValue},form.validate=function(){var a=this,b=this.options.fields,c=!0;return $.each(b,function(b,d){a.advancedValidation&&d._$input&&d._$input.bind("change keyup blur",function(){a.validateField(d)}),a.validateField(d)||(c=!1)}),c},form.validateField=function(field){var type=field.type;this.hideValidationErrors(field);var result=$.pandalocker.hooks.run("validate-field-"+type,[field]);if("undefined"!=typeof result)return result;var typeName=$.pandalocker.tools.capitaliseFirstLetter($.pandalocker.tools.camelCase(type)),method="validate"+typeName,res=this[method]?this[method](field):!0;if(res&&field.validation){var value=$.trim(field._$input.val()),expression=null,validationError=field.validationError;if(field.validation instanceof RegExp)expression=field.validation;else{var regexp=new RegExp("^/.*?/[ims]*$");if(regexp.test(field.validation))eval("expression = "+field.validation);else if("month/year"===field.validation){expression=/^\d\d\/\d\d\d\d$/;var parts=value.split("/");if(parts.length<2)return this.showValidationError(field,$.pandalocker.lang.errors_invalid_date),!1;var month=parseInt(parts[0]),year=parseInt(parts[1]);if(1>month||month>12)return this.showValidationError(field,$.pandalocker.lang.errors_invalid_month),!1}else if("month"===field.validation){var month=parseInt(value);if(1>month||month>12)return this.showValidationError(field,$.pandalocker.lang.errors_invalid_month),!1}else expression="year"===field.validation?/^\d\d\d\d$/:new RegExp(field.validation)}if(expression&&!expression.test(value))return this.showValidationError(field,validationError?validationError:$.pandalocker.lang.errors_invalid_value),!1}return this.runHook("size-changed"),res},form.validateText=function(a,b){var c=$.trim(a._$input.val());return!a.req||c&&c.length?!0:("fullname"===a.id?b=$.pandalocker.lang.errors_empty_name:"email"===a.id&&(b=$.pandalocker.lang.errors_empty_email),this.showValidationError(a,b?b:$.pandalocker.lang.errors_empty_field),!1)},form.validateHidden=function(){return!0},form.validateDate=function(a){var b=this.validateText(a);return b?!0:b},form.validateEmail=function(a){var b=this.validateText(a);if(!b)return b;var c=$.trim(a._$input.val());return $.pandalocker.tools.isValidEmailAddress(c)?!0:(this.showValidationError(a,$.pandalocker.lang.errors_inorrect_email),!1)},form.validatePhone=function(a){return this.validateText(a)},form.validateUrl=function(a){var b=this.validateText(a);if(!b)return b;var c=$.trim(a._$input.val());return $.pandalocker.tools.isValidUrl(c)?!0:(this.showValidationError(a,"Please enter a valid URL."),!1)},form.validateBirthday=function(a){var b=this.validateText(a);if(!b)return b;var c=$.trim(a._$input.val()),d=c.split("/");if(d.length<2)return this.showValidationError(a,"Please enter a valid date."),!1;var e=parseInt(d[1]),f=parseInt(d[0]);if("mm/dd"===a.maskPlaceholder)var e=parseInt(d[0]),f=parseInt(d[1]);return 1>f||f>31?(this.showValidationError(a,"Please enter a valid date."),!1):1>e||e>12?(this.showValidationError(a,"Please enter a valid date."),!1):!0},form.validateInteger=function(a){var b=this.validateText(a);if(!b)return b;var c=parseInt($.trim(a._$input.val()));return a.min&&c<a.min?(this.showValidationError(a,"Please enter a number greater than or equal to {0}.".replace("{0}",a.min)),!1):a.max&&c>a.max?(this.showValidationError(a,"Please enter a number less than or equal to {0}.".replace("{0}",a.max)),!1):!0},form.validateCheckbox=function(a){var b=a._$input.is(":checked");return a.req&&!b?(this.showValidationError(a,"Please mark this checkbox to continue."),!1):!0},form.showValidationError=function(a,b){var c=a._$wrap,d=this;if(this.advancedValidation){var e=$('<div class="onp-sl-validation-error"></div>').html(b);c.append(e),c.addClass("onp-sl-error-state")}else{if(this._validationErrorShown)return;this._validationErrorShown=!0,this.showNotice(b,function(){d._validationErrorShown=!1})}},form.hideValidationErrors=function(a){if(this.advancedValidation){var b=a._$wrap;b.find(".onp-sl-validation-error").remove(),b.removeClass("onp-sl-error-state")}},form.render=function(a){var b=this;this.options.fields&&this.options.fields.length>1&&this.addClassToLocker("onp-sl-custom-form");var c=this.options.fields;for(var d in c)if(c.hasOwnProperty(d)){var e=c[d];e._$input=this.renderField(a,e)}a.find("input").keypress(function(a){13===a.which&&b.control.find(".onp-sl-submit").click()}),this.$button=this.renderSubmitButton(a),this._checkWaitingSubscription()},form.renderSubmitButton=function(a){var b=this,c=this.options.buttonText||this.groupOptions.text.buttonText||this.lang.btnSubscribe,d=$.pandalocker.tools.normilizeHtmlOption(this.options.noSpamText||this.groupOptions.text.noSpamText||$.pandalocker.lang.noSpam),e=$("<div></div>").addClass("onp-sl-field").addClass("onp-sl-field-submit"),f=$("<button class='onp-sl-button onp-sl-form-button onp-sl-submit'>"+c+"</button>");return this.group.isFirst&&f.addClass("onp-sl-button-primary"),f.appendTo(e),d.addClass("onp-sl-note").addClass("onp-sl-nospa"),d.appendTo(e),f.click(function(){return b.submit(),!1}),e.appendTo(a),f},form.renderField=function(a,b){var c=b.type,d=b.id,e=$("<div class='onp-sl-field'></div>");if(b._$wrap=e,d&&e.addClass("onp-sl-field-"+d),c&&e.addClass("onp-sl-field-"+c),b.title&&"hidden"!==c){var f=$("<div class='onp-sl-field-title'></div>");f.html(b.title),f.appendTo(e)}e.appendTo(a);var g=$("<div class='onp-sl-field-control'></div>");g.appendTo(e);var h=$.pandalocker.hooks.run("render-"+c,[a,b]);if(h)return h;var i=$.pandalocker.tools.capitaliseFirstLetter($.pandalocker.tools.camelCase(c)),j="render"+i;if(!this[j])return this.showError('Cannot render a field of the type "'+c+'".');var k=this[j](g,b);return"email"===b.id?k.val(this._getFromMemory("email")):"fullname"===b.id&&k.val(this._getFromMemory("fullname")),k},form.renderEmail=function(a,b){return this.renderText(a,b,"text","email")},form.renderPhone=function(a,b){return this.renderText(a,b,"text","phone")},form.renderUrl=function(a,b){return this.renderText(a,b,"text","website")},form.renderInteger=function(a,b){return this.renderText(a,b,"text","interger")},form.renderHidden=function(a,b){var c=$("<input type='hidden' id='onp-sl-input-"+b.id+"' />");return b.value&&c.attr("value",b.value),c.appendTo(a),c},form.renderBirthday=function(a,b){return b.mask||(b.mask="99/99"),b.maskPlaceholder||(b.maskPlaceholder="dd/mm"),this.renderText(a,b,"text","birthday")},form.renderDate=function(a,b){if($.pandalocker.tools.isTabletOrMobile())return this.renderText(a,b,"date");var c=this.renderText(a,b,"text");if(!window.Pikaday)return this.showError('Unable to create a field of the type "date" due to the lib Pikaday not found.');c.attr("readOnly","true");new Pikaday({field:c[0],container:a[0],format:"DD MMM YYYY",onSelect:function(){c.data("value",this.getMoment().format("YYYY-MM-DD"))}});return c},form.renderText=function(a,b,c,d){if(b.icon){var e=b.iconPosition||"right";if("none"!==e){var f=$("<i class='onp-sl-icon'></i>").addClass(b.icon);f.addClass("right"===e?"onp-sl-icon-append":"onp-sl-icon-prepend"),f.appendTo(a)}}c||(c="text"),b.password&&(c="password");var g=$("<input type='"+c+"' class='onp-sl-input' id='onp-sl-input-"+b.id+"' />");if(b.placeholder&&g.attr("placeholder",b.placeholder),b.value&&g.attr("value",b.value),d&&g.attr("name",d),b.mask){if(!$.mask)return this.showError("Unable to create a masked input, the lib not found");var h={};b.maskPlaceholder&&(h.placeholder=b.maskPlaceholder),g.mask(b.mask,h)}return g.appendTo(a),g},form.renderCheckbox=function(a,b){var c=$("<label></lable>"),d=$("<input type='checkbox' />");d.appendTo(c),b.markedByDefault&&d.attr("checked","checked");var e=$("<span class='onp-sl-checkbox' id='onp-sl-input-"+b.id+"' />");e.appendTo(c);var f=$("<span></span>");return b.description&&f.html(b.description),f.appendTo(c),c.appendTo(a),d},form.renderDropdown=function(a,b){var c=$("<select class='onp-sl-input onp-sl-dropdown'></select>"),d=$("<i></i>");for(var e in b.choices){var f=$("<option></option>").attr("value",b.choices[e]).text(b.choices[e]);f.appendTo(c)}return c.appendTo(a),d.appendTo(a),c},form.renderSeparator=function(){return null},form.renderHtml=function(a,b){return a.html(b.html),null},form.renderLabel=function(a,b){return a.html(b.text),null},form._getStorageIdentity=function(){var a="";if(this.options.unlocksPerPage){var b=$.pandalocker.tools.URL.normalize(this.options.url||window.location.href);a="opanda_"+$.pandalocker.tools.hash(b)+"_hash_"+this.name}else a="opanda_"+$.pandalocker.tools.hash(this.options.listId+this.options.service)+"_hash_"+this.name;return a=$.pandalocker.filters.run("subscription-form-get-storage-identity",[a])},$.pandalocker.controls.subscription.form=form}(jQuery);;
/*!
 * Panda Lockers
 * Copyright 2016, OnePress, http://byonepress.com
*/
!function(a){"use strict";a.fn.pandalocker||(a.pandalocker.widget("pandalocker",{options:{},_isLocked:!1,_defaults:{text:{header:null,message:null},theme:{name:"starter"},lang:"en_US",groups:{order:["social-buttons"],union:"or"},terms:!1,privacyPolicy:!1,termsPopup:!1,connectButtons:{},socialButtons:{},overlap:{mode:"full",position:"middle",intensity:5,altMode:"transparence"},cssClass:null,demo:!1,highlight:!0,googleAnalytics:!1,locker:{off:!1,stepByStep:!1,close:!1,timer:0,mobile:!0,expires:!1,useCookies:!1,scope:!1,loadingTimeout:1e3,tumbler:!0,tumblerInterval:500,naMode:"show-error",visibility:[]},subscribeActionOptions:{},content:null},getState:function(){return this._isLocked?"locked":"unlocked"},_create:function(){var a=this;this.id=this.options.id||this._generteId(),this._prepareOptions(),this._setupVariables(),this._initExtras(),this._initHooks(),this._initGroups(),this._initScreens(),this.runHook("init"),this._canLock()&&this.requestState(function(b){"locked"===b?a._lock():a._unlock("provider")})},_generteId:function(){for(var a="",b="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",c=0;5>c;c++)a+=b.charAt(Math.floor(Math.random()*b.length));return a},_prepareOptions:function(){var b=this,c=a.extend(!0,{},this._defaults);c=this.applyFilters("filter-default-options",c),this.options.theme&&!a.isPlainObject(this.options.theme)&&(this.options.theme={name:b.options.theme}),"object"!=typeof this.options.theme&&(this.options.theme={name:b.options.theme});var d=this.options.theme.name||this._defaults.theme;a.pandalocker.themes[d]&&(c=a.extend(!0,{},c,a.pandalocker.themes[d]));var e=a.extend(!0,c,this.options);a.isArray(e.groups)&&(e.groups=a.extend(!0,{},c.groups,{order:e.groups})),e.locker.timer=parseInt(e.locker.timer),0===e.locker.timer&&(e.locker.timer=null),this.options=this.applyFilters("filter-options",e),"blurring"!==this.options.overlap.mode||a.pandalocker.tools.supportBlurring()||(this.options.overlap.mode=this.options.overlap.altMode)},_setupVariables:function(){if(this.style="onp-sl-"+this.options.theme.name,this.overlap="full"===this.options.overlap.mode?!1:this.options.overlap.mode,this.groupUnion=this.options.groups.union,this.options.groups.order.length>0)switch(this.options.groups.order[0]){case"connect-buttons":this.lockerType="signin-locker",this.langScope="signinLocker";break;case"subscription":this.lockerType="email-locker",this.langScope="emailLocker";break;default:this.lockerType="social-locker",this.langScope="socialLocker"}this.lang=a.pandalocker.lang.scopes[this.langScope]},_initExtras:function(){for(var b in a.pandalocker.extras)a.pandalocker.extras.hasOwnProperty(b)&&a.pandalocker.extras[b].init&&a.pandalocker.extras[b].init.apply(this)},_initHooks:function(){var a=this,b=!1,c=!1,d=!1,e=!1;this.addHook("raw-interaction",function(){e&&(b||(b=!0,a.runHook("interaction")))}),this.addHook("raw-error",function(){e&&(c||(c=!0,a.runHook("error")))}),this.addHook("raw-impress",function(){"default"===a._currentScreenName&&(e=!0,a.runHook("impress"))}),this.addHook("raw-social-app-declined",function(){e&&(d||(d=!0,a.runHook("social-app-declined")))})},_initGroups:function(){this._groups=[];for(var b=0;b<this.options.groups.order.length;b++){var c=this.options.groups.order[b],d=a.pandalocker.tools.camelCase(c),e=this.options[d]||{};if(0==b&&(e.text=this.options.text),!a.pandalocker.groups[c])return void this._showError("core",'The control group "'+c+'" not found.');var f=a.pandalocker.tools.extend(a.pandalocker.groups[c]);e.index=parseInt(b)+1,f.init(this,e),this._groups[b]=f}},_canLock:function(){if(a.pandalocker.browser.msie&&7===parseInt(a.pandalocker.browser.version,10))return this._unlock("ie7"),!1;if(this.options.locker.visibility){var b=new a.pandalocker.services.visibility;if(!b.canLock(this.options.locker.visibility))return this._unlock("visibility"),!1}if(!this.options.locker.mobile&&a.pandalocker.tools.isMobile())return this._unlock("mobile"),!1;for(var c=0,d=0;d<this._groups.length;d++)if(!this._groups[d].canLock()){if("or"===this.groupUnion)return this._unlock("group"),!1;c++}return c===this._groups.length?(this._unlock("group"),!1):!0},requestState:function(a){var b=this,c=function(a){for(var c=b._groups.length,d="locked",e=0;e<b._groups.length;e++)b._groups[e].requestState(function(b){c--,"unlocked"===b&&(d=b),0>=c&&a(d)})},d=[];d=this.applyFilters("functions-requesting-state",d),d.push(c);var e=function(){var b=d.shift();return b?void b(function(b){return"unlocked"===b?a(b):void e()}):a("locked")};e()},setState:function(a,b,c){this.runHook("state-changed",[a,b,c])},_getStateStorage:function(){return this._stateStorage?this._stateStorage:(this._stateStorage=this.applyFilters("get-default-state-storage",new a.pandalocker.storages.defaultStateStorage(this)),this._stateStorage)},_showError:function(a,b){this._error=!0,this._errorText=b,this.locker&&this.locker.hide(),this.element.html("<strong>[Error]: "+b+"</strong>"),this.element.show().addClass("onp-sl-locker-error"),this.runHook("size-changed")},addHook:function(b,c,d,e){a.pandalocker.hooks.add(this.id+"."+b,c,d),e&&a.pandalocker.hooks.add(b,c,d)},runHook:function(b,c,d){c||(c=[]),c.unshift(this),a.pandalocker.hooks.run(this.id+"."+b,c),d&&a.pandalocker.hooks.run(b,c),this.element.trigger("opanda-"+b,c);var e=c.slice(),f={};f.lockId=this.id,f.locker=this.locker,f.content=this.element,e.unshift(f),a.pandalocker.hooks.run("opanda-"+b,e)},addFilter:function(b,c,d){a.pandalocker.filters.add(this.id+"."+b,c,d)},applyFilters:function(b,c,d,e){d||(d=[]),a.isArray(d)||(d=[d]),d.unshift(this),d.unshift(c);var f=a.pandalocker.filters.run(this.id+"."+b,d);return d[0]=f,e&&(f=a.pandalocker.filters.run(b,d)),f},screens:{},_screenFactory:{},_showScreen:function(b,c){if(!this._screenFactory[b]&&!this.screens[b])throw new a.pandalocker.error('The screen "'+b+'" not found in the group "'+this.name+'"');var d=this;if(this._currentScreenName=b,this.innerWrap.find(".onp-sl-screen").hide(),this.screens[b])return this.screens[b].show(),void d.runHook("size-changed");var e=a("<div class='onp-sl-screen onp-sl-non-default-screen onp-sl-screen-"+b+"'></div>").appendTo(this.innerWrap).hide();this.screens[b]=this._screenFactory[b](e,c),e.fadeIn(300,function(){d.runHook("size-changed")})},_registerScreen:function(a,b){this._screenFactory[a]=b},_initScreens:function(){var b=this;this._currentScreenName="default",this._registerScreen("enter-email",function(b,c){var d=a('<div class="onp-sl-text"></div>');if(b.append(d),c.header){var e=a('<div class="onp-sl-header onp-sl-strong">'+c.header+"</div>");d.append(e)}if(c.message){var f=a('<div class="onp-sl-message">'+c.message+"</div>");d.append(f)}var g=a('<div class="onp-sl-control"></div>');b.append(g);var h={};h.email={name:"email",type:"text",placeholder:a.pandalocker.lang.misc_enter_your_email},h.submit={name:"submit",type:"submit",title:c.buttonTitle};for(var i in h){var j=h[i].type,k=h[i].title,l=h[i].value||c.fields&&c.fields[i]&&c.fields[i].value,m=a("<div></div>").addClass("onp-sl-field").addClass("onp-sl-field-"+i).addClass("onp-sl-field-type-"+j);if("text"===j||"email"===j){var n=a("<input type='"+j+"' name='"+i+"' class='onp-sl-input' id='onp-sl-input-"+i+"' />");h[i].placeholder&&n.attr("placeholder",h[i].placeholder),l&&n.attr("value",l),n.appendTo(m)}if("submit"===j){var n=a("<button class='onp-sl-button onp-sl-form-button onp-sl-submit'>"+k+"</button>");n.addClass("onp-sl-button-primary"),n.appendTo(m)}m.appendTo(g)}if(c.note){var o=a("<div class='onp-sl-note onp-sl-nospam'></div>").html(c.note);o.appendTo(m)}b.find(".onp-sl-submit").click(function(){var d=function(c,d){b.find(".onp-sl-group-notice").remove();var e=a("<div class='onp-sl-group-notice'>"+c+"</div>").hide();b.append(e),e.fadeIn(500),d||(d=7e3),setTimeout(function(){e.length&&e.fadeOut(800,function(){e.remove()})},d)},e=(a(this),a.trim(b.find("#onp-sl-input-email").val()));return e&&e.length?a.pandalocker.tools.isValidEmailAddress(e)?void(c.callback&&c.callback(e)):void d(a.pandalocker.lang.errors_inorrect_email):void d(a.pandalocker.lang.errors_empty_email)})}),this._registerScreen("data-processing",function(b){b.append(a("<div class='onp-sl-process-spin'></div>")),b.append(a("<div class='onp-sl-processing-sreen-text'>"+a.pandalocker.lang.misc_data_processing+"</div>"))}),this._registerScreen("email-confirmation",function(c,d){var e=a('<div class="onp-sl-screen-message"></div>'),f=a("<div class='onp-sl-header'></div>").html(a.pandalocker.lang.confirm_screen_title),g=a("<div class='onp-sl-message'></div>"),h=a("<p></p>").html(a.pandalocker.lang.confirm_screen_instructiont.replace("{email}","<strong>"+d.email+'</strong> <a href="#" class="onp-sl-cancel">'+a.pandalocker.lang.confirm_screen_cancel+"</a>")),i=a('<p class="onp-sl-highlight"></p>').html(a.pandalocker.lang.confirm_screen_note1),j=a('<p class="onp-sl-note"></p>').html(a.pandalocker.lang.confirm_screen_note2),k=h.find(".onp-sl-cancel");k.click(function(){return d.service.cancel(),b._showScreen("default"),!1}),g.append(h),g.append(i),e.append(f),e.append(g),c.append(e);var l=d.email.split("@"),m=null;if(l[1].indexOf("gmail")>=0?m={url:"https://mail.google.com/mail/?tab=wm",icon:"0px 0px",title:"Gmail"}:l[1].indexOf("yahoo")>=0?m={url:"https://mail.yahoo.com/",icon:"0px -70px",title:"Yahoo!"}:l[1].indexOf("hotmail")>=0?m={url:"https://hotmail.com/",icon:" 0px -140px",title:"Hotmail"}:l[1].indexOf("outlook")>=0&&(m={url:"http://www.outlook.com/",icon:" 0px -140px",title:"Outlook"}),m){var n=a('<a class="onp-sl-button onp-sl-form-button onp-sl-form-button-sm onp-sl-open"></a>').html(a.pandalocker.lang.confirm_screen_open.replace("{service}",m.title));if(n.attr("href",m.url),n.attr("target","_blank"),m.icon){n.addClass("onp-sl-has-icon");var o=a('<i class="onp-sl-icon"></i>').prependTo(n);o.css("background-position",m.icon)}var p=a("<div class='onp-sl-open-button-wrap'></div>");p.append(n),c.append(p)}c.append(j)})},_lock:function(){var a=this;this._isLocked||(this._markupIsCreated||this._createMarkup(),this.overlap?(this.overlapLockerBox.fadeIn(1e3,function(){a._updateLockerPosition()}),a._updateLockerPosition()):(this.element.hide(),this.locker.fadeIn(1e3)),this._isLocked=!0,this.runHook("lock"),this.runHook("locked"),setTimeout(function(){a._startTrackVisability()},1500))},_unlock:function(a,b,c){if(!this.options.locker.off){if(!this._isLocked)return this.runHook("cancel",[a]),this._showContent("button"===a),!1;this._showContent(!0),this._isLocked=!1,this.runHook("unlock",[a,b,c]),this.runHook("unlocked",[a,b,c])}},lock:function(a){this._lock(a||"api")},unlock:function(a,b,c){this._unlock(a||"api",b,c)},_createMarkup:function(){var b=this;this._loadFonts();var c=this.element.parent().is("a")?this.element.parent():this.element;c.addClass("onp-sl-content");var d=a.pandalocker.browser.mozilla&&"mozilla"||a.pandalocker.browser.opera&&"opera"||a.pandalocker.browser.webkit&&"webkit"||"msie";this.locker=a("<div class='onp-sl onp-sl-"+d+"'></div>"),this.outerWrap=a("<div class='onp-sl-outer-wrap'></div>").appendTo(this.locker),this.innerWrap=a("<div class='onp-sl-inner-wrap'></div>").appendTo(this.outerWrap);var e=a("<div class='onp-sl-screen onp-sl-screen-default'></div>").appendTo(this.innerWrap);this.screens["default"]=this.defaultScreen=e,this.locker.addClass(this.style),this.locker.addClass("onp-sl-"+this.lockerType),this.locker.addClass("onp-sl-"+this.options.groups.order[0]+"-frist"),this.locker.addClass(1===this.options.groups.order.length?"onp-sl-contains-single-group":"onp-sl-contains-many-groups");for(var f=0;f<this.options.groups.order.length;f++)this.locker.addClass("onp-sl-"+this.options.groups.order[f]+"-enabled");this.locker.addClass(a.pandalocker.isTouch()?"onp-sl-touch":"onp-sl-no-touch"),this.options.cssClass&&this.locker.addClass(this.options.cssClass);for(var g=0;g<this._groups.length;g++)this._groups[g].renderGroup(e);if((this.options.terms||this.options.privacyPolicy)&&this._createTerms(),this.options.locker.close&&this._createClosingCross(),this.options.locker.timer&&this._createTimer(),this.overlap){c.addClass("onp-sl-overlap-mode");var h=this.element.css("display"),i=c;if("blurring"===this.overlap||c.is("img")||c.is("iframe")||c.is("object")||"block"!==h&&"inline-block"!==h){i=a('<div class="onp-sl-content-wrap"></div>'),i.insertAfter(c),i.append(c);var j=c.css("margin");i.css({margin:j}),c.css({margin:"0"}),b.addHook("unlock",function(){i.css({margin:j})})}c.show(),this.element.show(),"blurring"===this.overlap&&(this.blurArea=a("<div class='onp-sl-blur-area'></div>"),this.blurArea.insertAfter(c),this.blurArea.append(c),c=this.blurArea);var k=i.css("position");"static"===k&&i.css("position","relative");var l=c.is("iframe")&&c||c.find("iframe");if(1===l.length&&"absolute"===l.css("position")){var m=!c.is(l)&&!l.parent().is(c)&&"relative"===l.parent().css("position");m||(i.css({position:"absolute",width:"100%",height:"100%",top:l.css("top"),left:l.css("left"),right:l.css("right"),bottom:l.css("bottom"),margin:l.css("margin")}),l.css({top:0,left:0,right:0,bottom:0,margin:"auto"}))}this.overlapLockerBox=a("<div class='onp-sl-overlap-locker-box'></div>").hide(),this.overlapLockerBox.addClass("onp-sl-position-"+this.options.overlap.position),this.overlapLockerBox.append(this.locker),this.overlapBox=a("<div class='onp-sl-overlap-box'></div>"),this.overlapBox.append(this.overlapLockerBox),this.overlapBox.addClass("onp-sl-"+this.overlap+"-mode"),this.overlapBox.addClass(this.style+"-theme");var n=a("<div class='onp-sl-overlap-background'></div>");if(this.overlapBox.append(n),i.append(this.overlapBox),this.containerToTrackSize=i,"blurring"===this.overlap){var o=this.options.overlap&&this.options.overlap.intensity||5;this.blurArea=this.blurArea.Vague({intensity:o,forceSVGUrl:!1}),this.blurArea.blur()}a(window).resize(function(){b._updateLockerPosition()}),this.addHook("size-changed",function(){b._updateLockerPosition()}),"scroll"===this.options.overlap.position&&a(window).scroll(function(){b._updateLockerPositionOnScrolling()})}else this.locker.hide(),this.locker.insertAfter(c);this._markupIsCreated=!0,this.runHook("markup-created"),this.locker.click(function(){b.runHook("raw-interaction")})},_addClass:function(a){this.locker.addClass(a)},_loadFonts:function(){if(this.options.theme.fonts&&this.options.theme.fonts.length)for(var b="https:"===document.location.protocol?"https":"http",c=b+"://fonts.googleapis.com/css",d=0;d<this.options.theme.fonts.length;d++){var e=this.options.theme.fonts[d],f=e.name;e.styles&&e.styles.length&&(f=f+":"+e.styles.join(","));var g=a.pandalocker.tools.updateQueryStringParameter(c,"family",f);e.subset&&e.subset.length&&(g=a.pandalocker.tools.updateQueryStringParameter(g,"subset",e.subset.join(",")));var h=a.pandalocker.tools.hash(g);a("#onp-sl-font-"+h).length>0||a('<link id="onp-sl-font-'+h+'" rel="stylesheet" type="text/css" href="'+g+'" >').appendTo("head")}},_updateLockerPosition:function(){if(this.overlap){var a=this.containerToTrackSize.outerHeight();"undefined"==typeof this.contentMinTopMargin&&(this.contentMinTopMargin=parseInt(this.containerToTrackSize.css("marginTop"))),"undefined"==typeof this.contentMinBottomMargin&&(this.contentMinBottomMargin=parseInt(this.containerToTrackSize.css("marginBottom")));var b=this.locker.outerHeight();if(b>a){var c=parseInt((b-a)/2)+20,d=this.contentMinTopMargin<c?c:this.contentMinTopMargin,e=this.contentMinBottomMargin<c?c:this.contentMinBottomMargin;this.containerToTrackSize.css({marginTop:d+"px",marginBottom:e+"px"})}if("top"===this.options.overlap.position||"scroll"===this.options.overlap.position){var f=this.overlapBox.outerWidth(),g=this.locker.outerWidth(),h=this.overlapBox.outerHeight(),i=this.options.overlap.offset;if(!i){var i=Math.floor((f-g)/2);10>=i&&(i=10)}if(2*i+b>h)var i=Math.floor((h-b)/2);this.overlapLockerBox.css("marginTop",i+"px"),"scroll"===this.options.overlap.position&&(this._baseOffset=i,this._updateLockerPositionOnScrolling())}return"middle"===this.options.overlap.position?void this.overlapLockerBox.css("marginTop","-"+Math.floor(this.overlapLockerBox.innerHeight()/2)+"px"):void 0}},_updateLockerPositionOnScrolling:function(){var b=this.overlapBox.offset(),c=b.top,d=b.left,e=b.top+this.overlapBox.outerHeight(),f=this.overlapBox.outerWidth(),g=this.overlapBox.outerHeight(),h=this.locker.outerHeight();if(!(2*this._baseBoxOffset+h+10>=g)){var i=a(document).scrollTop(),j=20;return i+h+2*this._baseOffset+j>e?void this.overlapLockerBox.css("position","absolute").css("top","auto").css("left","0px").css("width","auto").css("bottom",this._baseOffset+"px").css("margin-top","0px"):i+j>c?void this.overlapLockerBox.css("position","fixed").css("top",this._baseOffset+j+"px").css("left",d+"px").css("width",f+"px").css("bottom","auto").css("margin-top","0px"):void this.overlapLockerBox.css("position","absolute").css("top","0px").css("left","0px").css("bottom","auto").css("width","auto").css("margin-top",this._baseOffset+"px")}},_startTrackVisability:function(){var b=this,c=this.locker[0];c.getBoundingClientRect||this.runHook("raw-impress");var d=a(window).height(),e=a(window).width(),f=function(){if(!c)return void b._stopTrackVisability();var a=c.getBoundingClientRect(),f=a.height/2,g=a.width/2;a.top+f>0&&a.bottom-f<=d&&a.left+g&&a.right-g<=e&&(b.runHook("raw-impress"),b._stopTrackVisability())};a(window).bind("resize.visability.opanda",function(){d=a(window).height(),e=a(window).width()}),a(window).bind("resize.visability.opanda scroll.visability.opanda",function(){f()}),f()},_stopTrackVisability:function(){a(window).unbind(".visability.opanda")},_createClosingCross:function(){var b=this;a("<div class='onp-sl-cross' title='"+a.pandalocker.lang.misc_close+"' />").prependTo(this.locker).click(function(){b.close&&b.close(b)||b._unlock("cross",!0)})},_createTimer:function(){this.timer=a("<span class='onp-sl-timer'></span>");var b=a.pandalocker.lang.misc_or_wait;b=b.replace("{timer}",a("<span class='onp-sl-timer-counter'>"+this.options.locker.timer+"</span>")[0].outerHTML),this.timerLabel=a("<span class='onp-sl-timer-label'></span>").html(b).appendTo(this.timer),this.timerCounter=this.timerLabel.find(".onp-sl-timer-counter"),this.timer.appendTo(this.locker),this.counter=this.options.locker.timer,this._kickTimer()},_kickTimer:function(){var b=this;setTimeout(function(){if(b._isLocked)if(b.counter--,b.counter<=0)b._unlock("timer");else{if(b.timerCounter.text(b.counter),a.pandalocker.browser.opera){var c=b.timerCounter.clone();c.insertAfter(b.timerCounter),b.timerCounter.remove(),b.timerCounter=c}b._kickTimer()}},1e3)},_createTerms:function(){this.locker.addClass("onp-sl-has-terms"),this.terms=a("<div class='onp-sl-terms'></div>").appendTo(this.defaultScreen),this.termsInnerWrap=a("<div class='onp-sl-terms-inner-wrap'></div>").appendTo(this.terms);var b=a.pandalocker.lang.misc_your_agree_with,c="";if(this.options.terms&&(c=a("<a target='_black' class='onp-sl-link'>"+a.pandalocker.lang.misc_terms_of_use+"</a>").attr("href",this.options.terms)[0].outerHTML),this.options.privacyPolicy&&(this.options.terms&&(c+=", "),c+=a("<a target='_black' class='onp-sl-link'>"+a.pandalocker.lang.misc_privacy_policy+"</a>").attr("href",this.options.privacyPolicy)[0].outerHTML),c&&(b=b.replace("{links}",c)),this.termsInnerWrap.html(b),this.options.termsPopup){var d=this.options.termsPopup.width||550,e=this.options.termsPopup.height||400;this.termsInnerWrap.find(".onp-sl-link").click(function(){var b=a(this).attr("href");return window.open(b,"bizpanda_policies","width="+d+",height="+e+",resizable=yes,scrollbars=yes"),!1})}},_showContent:function(b){var c=this;this.runHook("before-show-content");var d=function(){c.overlap?(c.overlapBox&&c.overlapBox.hide(),c.blurArea&&c.blurArea.unblur()):c.locker&&c.locker.hide(),c.locker&&c.locker.hide(),b?c.element.fadeIn(1e3,function(){c.options.highlight&&c.element.effect&&c.element.effect("highlight",{color:"#fffbcc"},800)}):c.element.show(),c.runHook("after-show-content")};if(this.options.content)if("string"==typeof this.options.content)this.element.html(this.options.content),d();else if("object"!=typeof this.options.content||this.options.content.url)if("object"==typeof this.options.content&&this.options.content.url){var e=a.extend(!0,{},this.options.content),f=e.success,g=e.complete,h=e.error;e.success=function(a,b,e){f?f(c,a,b,e):c.element.html(a),d()},e.error=function(a,b,d){c._showError("ajax","An error is triggered during the ajax request! Text: "+b+" "+d),h&&h(a,b,d)},e.complete=function(a,b){g&&g(a,b)},a.ajax(e)}else d();else this.element.append(this.options.content.clone().show()),d();else d()}}),a.fn.sociallocker=function(b){return a(this).pandalocker(b)})}(jQuery);

(function($){
    if ( !window.bizpanda ) window.bizpanda = {};
    if ( !window.bizpanda.lockerOptions ) window.bizpanda.lockerOptions = {};
    
    /**
     * Init lockers.
     */
    window.bizpanda.initLockers = function() {

        var init = function( $holder, ignorePageview ) {
            if ( !$holder ) $holder = $(document);

            var inlineMine = window.bizpanda.createInlineLockers($holder);
            var cssMine = window.bizpanda.createCssLockers($holder);

            if ( ( inlineMine.has() || cssMine.has() ) && !this._inited ) {
                if ( !ignorePageview ) window.bizpanda.countPageViews();
                window.bizpanda.countLockerViews();
            }
            
            inlineMine.explode();
            cssMine.explode();
        };

        if ( !__pandalockers.managedInitHook ) {
            
            // we are viewing a single post,
            // inits lockers immediately
            
            init( null, true );
            
        } else {
            
            // if window.bizpanda.managedInitHook set, 
            // waits a hook to create lockers
            
            if ( this._inited ) return;

            $(document).bind(__pandalockers.managedInitHook, function(e, $content, ignorePageview){
                init( $content, ignorePageview );
            });
        }
        
        this._inited = true;
        
        window.bizpanda.inited = true;
        $(document).trigger('bp-init');
    };
    
    /**
     * Create inline lockers.
     */
    window.bizpanda.createInlineLockers = function( $holder ) {
        var mine = window.bizpanda.createMine();
        
        if ( !$holder ) $holder = $(document);
        
        var $elements = $holder.find(".onp-locker-call");
        for ( var n = 0; n < $elements.length; n++ ) {
            var $target = $( $elements[n] );
            
            var lockId = $target.data('lock-id');
            
            var applied = $target.data('bp-locker-applied');
            if ( applied ) continue;

            $target.data('bp-locker-applied', true);
                
            var data = window.bizpanda.lockerOptions[lockId] 
                ? window.bizpanda.lockerOptions[lockId] 
                : $.parseJSON( $target.next().text() );
            
            var runner = window.bizpanda.createLocker( $target, data, lockId, true );
            mine.triggers.push(runner);
        }
        
        return mine;
    };
    
    /**
     * Create CSS Lockers.
     */
    window.bizpanda.createCssLockers = function( $holder ) {
        var mine = window.bizpanda.createMine();
        
        if ( !$holder ) $holder = $(document);
        if ( !window.bizpanda.bulkCssSelectors ) return mine;

        for(var index in window.bizpanda.bulkCssSelectors) {
            var selector = window.bizpanda.bulkCssSelectors[index]['selector'];
            var lockId = window.bizpanda.bulkCssSelectors[index]['lockId'];

            var limitCounter = 0;
            
            var $elements = $holder.find(selector);
            for ( var n = 0; n < $elements.length; n++ ) {
                var $target = $( $elements[n] );
  
                var applied = $target.data('bp-locker-applied');
                if ( applied ) continue;
                
                $target.data('bp-locker-applied', true);
                
                limitCounter++;
                if ( limitCounter > 20 ) return false;

                var data = window.bizpanda.lockerOptions[lockId];
                
                var runner = window.bizpanda.createLocker( $target, data, lockId, true );
                mine.triggers.push(runner);
            };
        }

        return mine;
    };
    
    /**
     * Creates a new mine.
     */
    window.bizpanda.createMine = function() {
        
        return {
            has: function(){
                return this.triggers.length > 0;
            },
            triggers: [],
            explode: function(){

                for ( var i = 0; i < this.triggers.length; i++ ) {
                    this.triggers[i]();
                }
            }
        };
    };
    
    /**
     * Counts page views.
     */
    window.bizpanda.countPageViews = function() {
        if ( !window.bizpanda.bp_ut_count_pageview ) return;
        window.bizpanda.bp_ut_count_pageview();
    }; 
    
    /**
     * Counts locker views.
     */
    window.bizpanda.countLockerViews = function() {
        if ( !window.bizpanda.bp_ut_count_locker_pageview ) return;
        window.bizpanda.bp_ut_count_locker_pageview();
    };
    
    window.bizpanda.createLocker = function( $target, data, lockId, mine ) {

        // helpers
        
        /**
         * Returns the current context data.
         */
        var getContextData = function() {
            
            var context = {};
            context.postId = data.postId;
            context.postTitle = document.getElementsByTagName("title")[0].innerHTML;
            context.postUrl = window.location.href;
            context.itemId = data.lockerId;
            return context;
        };
        
        /**
         * Pings the stats.
         */
        var pingStats = function( eventName, eventType ) {

            var statsItem = {
                eventName: eventName,
                eventType: eventType
            };

            var req = $.ajax({ url: data.ajaxUrl, type: 'POST', dataType: 'json', data: {
                    action: 'opanda_statistics',
                    opandaStats: statsItem,
                    opandaContext: getContextData()
                }
            });

            req.success(function( data ){
                
                if ( data && data.error ) {
                    console && console.log && console.log( data.error );
                    return;
                }
            }); 
            
            req.error(function( data ){
                if ( !console || !console.log ) return;
                console.log('Unexpected error occurred during the ajax request:');
                console.log( req.responseText );
            }); 
        };
        
        var options = data.options;
        options.id = lockId;
        options.lockerId = data.lockerId;
        
        // loading the locked content via ajax
        
        if ( data.ajax ) {
            
            options.content = {
                url: data.ajaxUrl, type: 'POST', data: {
                    lockerId: data.lockerId,
                    action: 'opanda_loader',
                    hash: data.contentHash
                }
            };
        }
        
        // tracking subscribers & subscriptions
        
        $.pandalocker.filters.add( lockId + '.ajax-data', function( dataToPass ){
            dataToPass.opandaContextData = getContextData();
            return dataToPass;
        });
        
        // tracking stats

        $.pandalocker.hooks.add( lockId + '.unlock', function( locker, sender, senderName ){
            if ( $.inArray( sender, ['button', 'timer', 'cross'] ) === -1 ) return;
            if ( 'button' === sender ) pingStats( senderName, 'unlock' );
            else pingStats( sender, 'skip' );
            
            $(window).resize();
            
            // for the 'mtouch-quiz' plugin
            mtq_resize_quizzes && mtq_resize_quizzes();
        });
        
        var hooksToTrack = [
            'impress',
            'error', 'social-app-declined', 
            'got-linkedin-follower', 
            'got-youtube-subscriber'
        ];
        
        $.each( hooksToTrack, function( index, value ){
            $.pandalocker.hooks.add( lockId + '.' + value, function(){
                pingStats( value );
            });       
        });

        // removes the called and creates the locker
        
        $target.removeClass("onp-locker-call");
        if ( !window.bizpanda.lockerOptions[lockId] ) $target.next().remove();
        
        var result = function() {
            $target.pandalocker( options );
        };
        
        if ( mine ) return result;
        result();
    };

    // dynamic themes
    
    var bindFunction = function(){
        $(document).ajaxComplete(function() {
            window.bizpanda.initLockers();
        });
            
        if ( !window.bizpanda.dynamicThemeSupport ) return;

        if ( window.bizpanda.dynamicThemeEvent !== '' ) {
            $(document).bind(window.bizpanda.dynamicThemeEvent, function(){
                window.bizpanda.initLockers();
            });
        }
    };

    if ( window.bizpanda.dynamicThemeSupport ) {
        bindFunction();
    } else {
        $(function(){ bindFunction(); });
    }
    
    // visibility providers
    
    var visibilityVars = window.__pandalockers.visibility;
    var visibilityParams = ['user-role', 'user-registered', 'post-published'];

    var setVisibilityProvider = function( visibilityParam ){

        $.pandalocker.services.visibilityProviders[visibilityParam] = {
            getValue: function() {
                if ( !visibilityVars[visibilityParam] ) return null;
                return visibilityVars[visibilityParam];
            }
        }; 
    };
    
    for ( var i = 0; i < visibilityParams.length; i++ ) {
        setVisibilityProvider(visibilityParams[i]);
    }
    
    var getUserTracker = function() {
        var obj = null;
           
        if ( !window.bizpanda.bp_can_store_localy ) {
            console.log && console.log('[Lockers] User Tracker code is not loaded.');
            return null;
        }
           
        if ( window.bizpanda.bp_can_store_localy() ) { 
            obj = window.localStorage.getItem('bp_ut_session');
        } else {
            obj = $.pandalocker.tools.cookie('bp_ut_session');
        }
        
        if ( !obj ) return obj;
        return JSON.parse(obj);
    }
    
    $.pandalocker.services.visibilityProviders['session-pageviews'] = {
        getValue: function() {
            var obj = getUserTracker();
            
            if ( !obj ) return 0;
            return obj.pageviews;
        }
    }; 
    
    $.pandalocker.services.visibilityProviders['session-locker-pageviews'] = {
        getValue: function() {
            var obj = getUserTracker();
            if ( !obj ) return 0;
            return obj.lockerPageviews ? obj.lockerPageviews : 0;
        }
    };
    
    $.pandalocker.services.visibilityProviders['session-landing-page'] = {
        getValue: function() {
            var obj = getUserTracker();
            return obj.landingPage;
        }
    };
    
    $.pandalocker.services.visibilityProviders['session-referrer'] = {
        getValue: function() {
            var obj = getUserTracker();
            return obj.referrer;
        }
    };
    
})(jQuery);

/*!
 * Creater Script  
 * Copyright 2014, OnePress, http://byonepress.com
*/
(function($){ 
    $(function(){ 
        window.bizpanda.initLockers();
        setTimeout( function(){ window.bizpanda.initLockers(); }, 2000 );
    });
})(jQuery);