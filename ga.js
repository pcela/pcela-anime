(function(i,s,o,g,r,a,m){i[‘GoogleAnalyticsObject’]=r;i[r]=i[r]||function(){

(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),

m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)

})(window,document,’script’,’https://www.googletagmanager.com/gtag/js’,’ga‘);

// Creates an adblock detection plugin.

ga(‘provide’, ‘adblockTracker’, function(tracker, opts) {

var ad = document.createElement(‘ins’);

ad.className = ‘AdSense’; //Name of ad partner you’re working with.

ad.style.display = ‘block’;

ad.style.position = ‘absolute’;

ad.style.top = ‘-1px’;

ad.style.height = ‘1px’;

document.body.appendChild(ad);

tracker.set(‘dimension’ + opts.dimensionIndex, !ad.clientHeight);

document.body.removeChild(ad);

});

ga(‘create’, ‘G-EYBKRGC0VE’, ‘auto’); //Replace UA-XXXXX-Y with your tracking ID.

ga(‘require’, ‘adblockTracker’, {dimensionIndex: 1});

ga(‘send’, ‘pageview’);
