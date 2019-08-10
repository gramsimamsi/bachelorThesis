window._sdi =window._sdi || {};
window._sdi.dtm =window._sdi.dtm || {};
window._sdi.dtm.video =window._sdi.dtm.video || {};
_sdi.dtm.video.wistia = {
  sc: {
    track: true,
    s: function(){
      if(_satellite.getVar('window.s_gi')){
        if(typeof _satellite.getVar('rsid') != "undefined"){
        return s_gi(_satellite.getVar('rsid'));
        }else{
          _satellite.notify("WISTIA Tracking:No RSID for s.Media: Wistia Tracking", 5);
        }
      }
    }
  },
  vids: [],
  timesPolled: 0,
  pollToBind:function(){
    _satellite.notify("WISTIA Tracking: Polling for remaing video binding");
    if(_sdi.dtm.video.wistia.timesPolled < 30){
      setTimeout(function(){ 
        _sdi.dtm.video.wistia.timesPolled++        
        _sdi.dtm.video.wistia.bindEvents();           
      }, 1000);
    }   
  },
  bindEvents: function(){
      ws = _sdi.dtm.video.wistia,
      sc = ws.sc,
      s = sc.s,
      poll=false;
      s().Media.playerName = "wistia";
      s().Media.autoTrack = false;
    for(var vid =0; vid < _sdi.dtm.video.wistia.vids.length;vid++){
      var thisVideo =_sdi.dtm.video.wistia.vids[vid];
      var name = thisVideo.name(),
      duration = thisVideo.duration();
      if(name != ""){ 
        if(typeof thisVideo.adobeAnalyicsTrackingApplied == "undefined"){
          _satellite.notify("WISTIA Tracking: Binding liteners to Wistia video named: "+name);          
          if(typeof s() != "undefined" && typeof s().Media != "undefined"){
            if(sc.track === true){            
              _satellite.notify("WISTIA Tracking: the video opened: "+name);
              s().Media.open(name,duration,'wistia');
            }
            
            thisVideo.bind("play", function() {   
              if(typeof s().Media.list[this.name()] !="undefined" && typeof s().Media.list[this.name()] != "object"){
                _satellite.notify("WISTIA Tracking: the video opened: "+this.name());
                s().Media.open(this.name(),this.duration(),'wistia');
              }           
              _satellite.notify("WISTIA Tracking: the video played: "+this.name());
              s().Media.play(this.name(),this.time());
            });

            thisVideo.bind("pause", function() {
              _satellite.notify("WISTIA Tracking: the video stoped: "+this.name());
              s().Media.stop(this.name(),this.time());
            });

            thisVideo.bind("seek", function(currentTime, lastTime) {
              _satellite.notify("WISTIA Tracking: the video seeked to "+ currentTime);
              s().Media.stop(this.name(),this.time());
              s().Media.play(this.name(),currentTime);
            });

            thisVideo.bind("end", function() {
              _satellite.notify("WISTIA Tracking: the video ended: "+this.name());
              s().Media.stop(this.name(),this.time());
              s().Media.close(this.name());
            });

            thisVideo.adobeAnalyicsTrackingApplied = true;
          }         
        }else{
          _satellite.notify("WISTIA Tracking: Liteners already bound to Wistia video named: "+name);
        }
      }else{      
        poll =true;
      }
    }//end for
    if(poll && _sdi.dtm.video.wistia.timesPolled < 30){
      _sdi.dtm.video.wistia.pollToBind(); 
    }
  },
  findVideos: function(){
    _satellite.notify("WISTIA Tracking: Looking for videos");
     window._wq = window._wq || [];
      _wq.push({ id: "_all", onReady: function(video) {
        _satellite.notify("WISTIA Tracking: Found "+ video.name() +" videos");
        _sdi.dtm.video.wistia.vids.push(video);
        _sdi.dtm.video.wistia.bindEvents();
      }});
  },
  init: function(){
    if(typeof window.Wistia != "undefined"){
      _sdi.dtm.video.wistia.findVideos();
      if(_sdi.dtm.video.wistia.vids.length >0){
        _sdi.dtm.video.wistia.bindEvents();
      }
    }else{
      _satellite.notify("WISTIA Tracking: No API detected");
    }
  }
};

_sdi.dtm.video.wistia.init();

