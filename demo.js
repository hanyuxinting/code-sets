
//demo.js

// 判断时间区间
function dateInterval(){
	var today = new Date();
	var startday = new Date("2015-10-26 19:00:00".replace(/\-/g, "\/"));
	var endday = new Date("2015-10-26 21:00:00".replace(/\-/g, "\/"));

	if((endday-today>0) && (today-startday>0)){
	    var el = $('#order01 .extra-r');
	    el.html('<strong>京东系统升级中，如出现异常情况请您不必担心，请21点后重新操作，订单会正常生产和配送~</strong>')
	        .addClass('ftx-04');
	}
}

function getRandom(){
	var len = 172;
	var random = Math.floor(Math.random() * len);
}

function initAsds(){
    var ads = [{adname: '1', adurl: '//www.jd.com'},
            {adname: '2', adurl: '//www.jd.com'},
            {adname: '3', adurl: '//www.jd.com'},
            {adname: '4', adurl: '//www.jd.com'},
            {adname: '5', adurl: '//www.jd.com'},
            {adname: '6', adurl: '//www.jd.com'}
    ];

    setInterval(function(){
        var i = Math.floor(Math.random() * ( ads.length + 1));
        var ad = ads[i];
        if(ad){
            var el = $('#order01 .extra-r');
            el.html('<a clstag="click|keycount|orderinfo|adlink" target="_blank" href="'
                    + ad.adurl + '">' + ad.adname + '</a>');
        }
    }, 10000);
}