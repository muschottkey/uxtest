YUI().use(
  'aui-carousel',
  function(Y) {
    new Y.Carousel(
      {
        activeIndex: 0,
        contentBox: '#myCarousel',
        height: 365,
        animationTime:1,
        intervalTime: 3
        // width:870
      }
    ).render();
  }
);

YUI().use(
  'aui-carousel',
  function(Y) {
    new Y.Carousel(
      {
        activeIndex: 0,
        contentBox: '#testiCarousel',
        height: 350,
        animationTime:1,
        intervalTime: 3
        // width:870
      }
    ).render();
  }
);

YUI().use(
  'aui-button',
  function(Y) {
    new Y.Button(
      {
        icon: 'fa fa-chevron-circle-right',
        iconAlign: 'right',
        label: 'Contact Us',
        srcNode: '#contactus',
        cssClass: 'pull-right'
      }
    ).render();
  }
);
YUI().use(
  'aui-button',
  function(Y) {
    new Y.Button(
      {
        icon: 'fa fa-chevron-circle-right',
        iconAlign: 'right',
        label: 'READ MORE',
        srcNode: '.readmore',
        cssClass: 'pull-right'
      }
    ).render();
  }
);

YUI().use(
  'aui-video',
  function(Y) {
    new Y.Video(
      {
        boundingBox: '#featured-video',
        ogvUrl: 'http://alloyui.com/video/movie.ogg',
        url: 'http://alloyui.com/video/movie.mp4',
        width: 570
      }
    ).render();
  }
);