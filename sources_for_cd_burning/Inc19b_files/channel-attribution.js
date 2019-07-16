//File to log incoming visitor values in to cookies.
//UTM test string: ?utm_source=adwords&utm_medium=display&utm_campaign=forresterreport2018&utm_content=forresterreport2018&utm_term=forresterreport2018&utm_budget=growth
var attribution = {

    utmParams: ['utm_adgroup', 'utm_budget', 'utm_campaign', 'utm_content', 'utm_medium', 'utm_source','utm_term'],

    init: function(){
        //check for utm
        var utm = this.readUtmParams();
        if(utm){
            if(!this.returningVisitor()){
                for(var n in utm){
                    writeDockerCookie(n + '_first', utm[n]);
                }
            }
            for(var n in utm){
                writeDockerCookie(n + '_last', utm[n]);
            }
        }
        else {
            //No utms present
            var url = this.checkReferrer();
            //new user
            if(!this.returningVisitor()){
                for(var n in url){
                    writeDockerCookie(n + '_first', url[n]);
                }
            }
            //Check that referrer is not the same as the host site.
            if(document.referrer.indexOf(document.location.hostname) <= 0){
                for(var n in url){
                    writeDockerCookie(n + '_last', url[n]);
                }
            }
        }

    },
    returningVisitor: function(){
        //is there an existing cookie?
        var existingCookie = false;
        var utms = this.utmParams;
        for(n in utms){
            if(getCookie(utms[n] + '_first')){
                existingCookie = true;
            }
        }
        //We added params and may have missing cookies.  Adding those on here to write a blank value.
        if(existingCookie){
            for(n in utms){
                if(!getCookie(utms[n] + '_first')){
                    writeDockerCookie(utms[n] + '_first', '');
                }   
            }
            return true;
        }
        else {
            return false;
        }
    },
    readUtmParams: function(){
        //Are there UTM params on the url?
        var utms = this.utmParams;
        var utm_values = {};
        var utm_present = false;
        for(n in utms){
            if(getUrlParameter(utms[n])){
                //checks if any of the params have a value.
                utm_present = true;
            }
            utm_values[utms[n]] = getUrlParameter(utms[n]);
        }
        if(utm_present){
            return utm_values;
        }
        else {
            return false;
        }
    },
    checkReferrer: function(){
        var utms = this.utmParams;
        var utm_values = {};
        var url = document.referrer;
        if(
            url.indexOf('www.google') >= 0 || 
            url.indexOf('bing') >= 0 || 
            url.indexOf('baidu') >= 0 || 
            url.indexOf('duckduckgo') >= 0 || 
            url.indexOf('yahoo') >= 0 || 
            url.indexOf('yandex') >= 0 ||
            url.indexOf('naver') >= 0 ||
            url.indexOf('ask.com') >= 0 ||
            url.indexOf('so.com') >= 0 ||
            url.indexOf('rakuten') >= 0 ||
            url.indexOf('sogou') >= 0 ||
            url.indexOf('daum') >= 0 ||
            url.indexOf('seznam') >= 0 ||          
            url.indexOf('rambler') >= 0
            ){
            for(var n in utms){
                if(utms[n] == 'utm_campaign'){
                    utm_values[utms[n]] = document.querySelector("meta[name='keywords']").getAttribute("content");
                }
                else {
                    utm_values[utms[n]] = 'SEO';
                } 
            }
            return utm_values;
        }
        else if(
            url.indexOf('docs.docker.com') >= 0 ||
            url.indexOf('hub.docker.com') >= 0 ||
            url.indexOf('success.docker.com') >= 0 ||
            url.indexOf('trial.docker.com') >= 0 ||
            url.indexOf('events.docker.com') >= 0 ||
            url.indexOf('forums.docker.com') >= 0 ||
            url.indexOf('goto.docker.com') >= 0 ||
            url.indexOf('support.docker.com') >= 0 ||
            url.indexOf('training.docker.com') >= 0 ||
            url.indexOf('cloud.docker.com')
            ){
                for(n in utms){
                    utm_values[utms[n]] = 'DOCKER';
                }
                return utm_values;
        }
        else if(
            url.indexOf('twitter.com') >= 0 ||
            url.indexOf('linkedin.com') >= 0 ||
            url.indexOf('facebook.com') >= 0 ||
            url.indexOf('blog.docker.com') >= 0
            ){
                for(n in utms){
                    utm_values[utms[n]] = 'SOCIAL';
                }
                return utm_values;
        }
        else {

            for(n in utms){
                utm_values[utms[n]] = 'DIRECT';
            }
            return utm_values;
        }
    }
};
attribution.init();