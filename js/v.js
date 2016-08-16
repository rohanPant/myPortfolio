/** Document Ready Functions **/
/********************************************************************/

$( document ).ready(function() {

    // Resive video
    scaleVideoContainer();

    initBannerVideoSize('.video-container .poster img');
    initBannerVideoSize('.video-container .filter');
    initBannerVideoSize('.video-container video');
        
    $(window).on('resize', function() {
        scaleVideoContainer();
        scaleBannerVideoSize('.video-container .poster img');
        scaleBannerVideoSize('.video-container .filter');
        scaleBannerVideoSize('.video-container video');
    });

});

/** Reusable Functions **/
/********************************************************************/

function scaleVideoContainer() {

    var height = $(window).height();
    var unitHeight = parseInt(height) + 'px';
    $('.header-content').css('height',unitHeight);

}

function initBannerVideoSize(element){
    
    $(element).each(function(){
        $(this).data('height', $(this).height());
        $(this).data('width', $(this).width());
    });

    scaleBannerVideoSize(element);

}

function scaleBannerVideoSize(element){

    var windowWidth = $(window).width(),
        windowHeight = $(window).height(),
        videoWidth,
        videoHeight;
    
    console.log(windowHeight);

    $(element).each(function(){
        var videoAspectRatio = $(this).data('height')/$(this).data('width'),
            windowAspectRatio = windowHeight/windowWidth;

        if (videoAspectRatio > windowAspectRatio) {
            videoWidth = windowWidth;
            videoHeight = videoWidth * videoAspectRatio;
            $(this).css({'top' : -(videoHeight - windowHeight) / 2 + 'px', 'margin-left' : 0});
        } else {
            videoHeight = windowHeight;
            videoWidth = videoHeight / videoAspectRatio;
            $(this).css({'margin-top' : 0, 'margin-left' : -(videoWidth - windowWidth) / 2 + 'px'});
        }

        $(this).width(videoWidth).height(videoHeight);

        $('.header-content .video-container video').addClass('fadeIn animated');
        

    });
}

<header>
    <div class="header-content">
    <div class="title-container">
            
        <video poster="img/nb.png" autoplay>
            <source src="v.mov" type="video/mp4" >
            <source src="v.webm" type="video/webm" >
        </video>
        <div class="header-content-inner">
        <h1 id="homeHeading">HEY there!</h1>
        <hr>
        <p>I am Rohan Pant, a Full Stack Developer in making.<br>There's much more to me than just this.<br>Go ahead and explore the page to know more! ;)</p>
        <a href="#about" class="btn btn-primary btn-xl page-scroll">Find Out More</a>
      </div>    
    </div>

    </div>
  </header>
        
        
        
        .homepage-hero-module {
  border-right: none;
  border-left: none;
  position: relative;
}
.no-video .video-container video,
.touch .video-container video {
  display: none;
}
.no-video .video-container .poster,
.touch .video-container .poster {
  display: block !important;
}
.video-container {
  position: relative;
  bottom: 0%;
  left: 0%;
  height: 100%;
  width: 100%;
  overflow: hidden;
  background: #000;
}
.video-container .poster img {
  width: 100%;
  bottom: 0;
  position: absolute;
}
.video-container .filter {
  z-index: 100;
  position: absolute;
  background: rgba(0, 0, 0, 0.4);
  width: 100%;
}
.video-container .title-container {
  z-index: 1000;
  position: absolute;
  top: 35%;
  width: 100%;
  text-align: center;
  color: #fff;
}
.video-container .description .inner {
  font-size: 1em;
  width: 45%;
  margin: 0 auto;
}
.video-container .link {
  position: absolute;
  bottom: 3em;
  width: 100%;
  text-align: center;
  z-index: 1001;
  font-size: 2em;
  color: #fff;
}
.video-container .link a {
  color: #fff;
}
.video-container video {
  position: absolute;
  z-index: 0;
  bottom: 0;
}
.video-container video.fillWidth {
  width: 100%;
}






video{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
}