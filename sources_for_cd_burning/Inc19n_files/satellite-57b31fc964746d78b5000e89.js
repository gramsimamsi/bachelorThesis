// new youtube **
if (typeof jQuery !== 'undefined') {
  window._sdi = window._sdi || {};
  window._sdi.addEventHandler = window.addEventListener ? function(el, type, fn) {
    el.addEventListener(type, fn, !1);
  } : function(el, type, fn) {
    el.attachEvent("on" + type, fn);
  };

  window._sdi.addEventHandler(window, 'message', function(r) {
    var d = {};
    //skip looping video
    if (r.origin.match(/youtube\.com/) && typeof JSON != 'undefined' && r.origin.indexOf("loop=1") == -1) {
      d = JSON.parse(r.data);
      var videos = window._sdi.yt.videos,
        v;
      // video info
      if (d.event == 'infoDelivery') {
        var v = {},
          id;
        if (d.info.videoData) {
          id = d.info.videoData.video_id;
          v = videos[id] || {};
          v.info = d.info;
          v.id = d.id;
          videos[id] = v;
        }

        for (var vs in window._sdi.yt.videos) {
          var vid = window._sdi.yt.videos[vs];
          if (vid.id == d.id) {
            v = vid;
          }
        }

        var sc = window._sdi.yt.sc || {};

        //video start
        if (v.info) {
          if (Math.abs(d.info.currentTime - v.info.currentTime) > 1.5) {
            if (sc.track === true) {
              sc.s().Media.stop(v.info.videoData.title, v.info.currentTime);
              if (v.state != 'paused') {
                sc.s().Media.play(v.info.videoData.title, d.info.currentTime);
              }
            }
          }
          v.info.currentTime = d.info.currentTime;
        }

        // video pause
        if (d.info.playerState == 2) {
          sc.s().Media.stop(v.info.videoData.title, v.info.currentTime);
          v.state = 'paused';
        }

        if (d.info.playerState == 1) {
          // video start
          if (!v.started) {
            v.started = true;
            if (sc.track === true) {
              sc.s().Media.open(v.info.videoData.title, v.info.duration, 'youtube');
              sc.s().Media.play(v.info.videoData.title, v.info.currentTime);
            }
          }
          // video resume
          else {
            if (sc.track === true) {
              sc.s().Media.play(v.info.videoData.title, v.info.currentTime);
            }
          }
          v.state = 'playing';
        }
        // video buffer
        if (d.info.playerState == 3 && v.started) {
          if (sc.track === true) {
            sc.s().Media.stop(v.info.videoData.title, v.info.currentTime);
          }
          v.state = 'paused';
        }
        // video complete
        if (d.info.playerState === 0) {
          if (sc.track === true) {
            sc.s().Media.stop(v.info.videoData.title, v.info.currentTime);
            sc.s().Media.close(v.info.videoData.title);
          }
          v.state = 'completed';
        }

      } else if (d.event == 'onStateChange') {
        for (var vs in window._sdi.yt.videos) {
          var vid = window._sdi.yt.videos[vs];
          if (vid.id == d.id) {
            v = vid;
          }
        }
        var sc = window._sdi.yt.sc || {};
        // video play
        if (d.info == 1) {
          // video start
          if (!v.started) {
            v.started = true;
            if (sc.track === true) {
              sc.s().Media.open(v.info.videoData.title, v.info.duration, 'youtube');
              if (v.state != 'paused') {
                sc.s().Media.play(v.info.videoData.title, d.info.currentTime);
              }
            }
          }
          // video resume
          else {
            if (sc.track === true) {
              sc.s().Media.play(v.info.videoData.title, v.info.currentTime);
            }
          }
          v.state = 'playing';
        }
        // video pause
        if (d.info == 2) {
          if (sc.track === true) {
            sc.s().Media.stop(v.info.videoData.title, v.info.currentTime);
          }
          v.state = 'paused';
        }
        // video buffer
        if (d.info == 3 && v.started) {
          if (sc.track === true) {
            sc.s().Media.stop(v.info.videoData.title, v.info.currentTime);
          }
          v.state = 'paused';
        }
        // video complete
        if (d.info === 0) {
          if (sc.track === true) {
            sc.s().Media.stop(v.info.videoData.title, v.info.currentTime);
            sc.s().Media.close(v.info.videoData.title);
          }
          v.state = 'completed';
        }
      }
    }
  });
  window._sdi.loadScript = function(c, a) {
    var b = document.createElement("script");
    b.type = "text/javascript";
    if (a && typeof a == 'function') {
      if (b.readyState) {
        b.onreadystatechange = function() {
          if (b.readyState === "loaded" || b.readyState === "complete") {
            b.onreadystatechange = null;
            a();
          }
        };
      } else {
        b.onload = function() {
          a();
        };
      }
    }
    b.src = c;
    document.getElementsByTagName("head")[0].appendChild(b);
  };

  // youtube
  window._sdi.yt = {
    stages: {},
    players: {},
    sc: {
      track: true, // set to true if you want to use SiteCatalyst video measurement
      s: function() {
        return s_gi(_satellite.getVar("rsid")); // set to the global s object (can use s_gi with a report suite passed to it if not defined globally)
      }
    },
    init: function() {
      var scripts = document.getElementsByTagName('script'),
        api = false,
        ids = [],
        vids = window._sdi.yt.videos;
      for (var i = 0; i < scripts.length; i++) {
        var script = scripts[i],
          src = script.src || '';
        if (src.match(/youtube\.com\/iframe_api/)) {
          api = true;
        }
      }
      if (api === false) {
        window._sdi.loadScript('//www.youtube.com/iframe_api', function() {
          window._sdi.yt.ready('api');
        });
      } else {
        window._sdi.yt.ready('api');
      }
    },
    ready: function(stage) {
      window._sdi.yt.stages[stage] = true;
      if (window._sdi.yt.stages.dom && window._sdi.yt.stages.api) {
        window._sdi.yt.checkIframes();
      }
    },
    checkIframes: function() {
      var vids = window._sdi.yt.videos,
        timeout = 1000,
        videoNumber = 0;
      jQuery('iframe[src*="youtube"][data-sdiyt!="true"]').each(function(idx, ifr) {
        //don't tack looping video
        if (ifr.src.indexOf("loop=1") != -1) {
          var vid = null;
        } else {
          var vid = ifr.src.match(/h?t?t?p?s?\:?\/\/www\.youtube(-nocookie)?\.com\/embed\/([\w-]{11})(?:\?.*)?/),
            id;
        }
        if (vid) {
          id = (vid.length > 2 ? vid[2] : '');
          if (!ifr.id) {
            ifr.id = id + videoNumber;
            videoNumber++;
          }
          var rewrite = false;
          //only add optional "origin" param on HTTPS
          if (!ifr.src.match(/origin/) && document.location.protocol == "https:") {
           // ifr.src += (ifr.src.indexOf('?')>-1 ? '&' : '?') + 'origin=https://'+document.location.host;
            // rewrite = true;
          }
          if (!ifr.src.match(/enablejsapi=1/)) {
            ifr.src += (ifr.src.indexOf('?') > -1 ? '&' : '?') + 'enablejsapi=1';
            rewrite = true;
          }
          if (typeof jQuery != "undefined" && rewrite) {
            var frm = jQuery(this).clone();
            frm.src = ifr.src;
            frm.id = ifr.id;
            jQuery(this).replaceWith(frm);
          } else {
            if (typeof YT != 'undefined') {
              if (typeof YT.get != 'undefined') {
                ready = true;
                vids[id] = {};
                if ((!YT.get(ifr.id) || !(typeof YT.get(ifr.id).v != "undefined") && typeof YT.get(ifr.id).v.videoId !=
                    "undefined")) {
                  vids[id].player = new YT.Player(ifr.id, {
                    events: {
                      onReady: function() {},
                      onStateChange: function() {},
                      videoId: ifr.id
                    }
                  });
                  ifr.setAttribute('data-sdiyt', 'true');
                } else {
                  ifr.setAttribute('data-sdiyt', 'true');
                }
              } else {
                timeout = 100;
              }
            } else {
              timeout = 100;
            }
          }
        }
      });
      setTimeout(function() {
        window._sdi.yt.checkIframes();
      }, timeout);
    },
    videos: {}
  };

  if (typeof window._sdi != 'undefined' && typeof window._sdi.addEventHandler != 'undefined') {
    window._sdi.addEventHandler(window, "load", function() {
      window._sdi.yt.init();
      window._sdi.yt.ready('dom');
    });
  }
}
/************** END YT ***************/
