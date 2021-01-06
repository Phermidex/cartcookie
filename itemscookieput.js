/* Button cart event */
const Body = $('body');
//const addCartck  = $('#addcartck');
//const btnclear     = $('#clear');
const mcartEvent = $('.msj-cartEvent');


function cookieString() {
    return Cookies.get('test');
}

function getdata() {
    mcartEvent.html("<p class='white-text'>[]</p>");
    var coo = cookieString();
    if (coo != null) {
        mcartEvent.html("<p class='white-text'>" + coo + "</p>");
    }

}
/* Comentar en production */
getdata();
/* Comentar en production */

Body.on('click', '#addcartck', function () {
    /* Comentar en production */
    mcartEvent.html("<p class='white-text'>Processing ....</p>");
    /* Comentar en production */
    var data = cookieString();

    var proID = $(this).data('productid');
    var disID = $(this).data('distributid');
    var proName = $(this).data('productname');
    var fill = 0;

    /*Json test*/
    jsonObj = [];
    item = {};



    if (data != null) {
        var cdata = JSON.parse(data);
        $.each(cdata, function (index, element) {

            jsonObj.push(element);
            data = JSON.stringify(jsonObj);


            if (element.productID == proID) {
                fill = 1;
            }

        });
        var inArr = cdata.indexOf(proID);

        if (fill < 1) {
            item["productID"] = proID;
            item["distributID"] = disID;
            item["productName"] = proName;

            jsonObj.push(item);
            data = JSON.stringify(jsonObj);
        }
    } else {
        item["productID"] = proID;
        item["distributID"] = disID;
        item["productName"] = proName;

        jsonObj.push(item);
        data = JSON.stringify(jsonObj);
    }

    Cookies.set('test', data);
    /* Comentar en production */
    setTimeout(function () {
        getdata();
    }, 1000);
    /* Comentar en production */
});



Body.on('click', '#clear', function () {
    //Cookies.remove('test');
    /* Comentar en production */
    mcartEvent.html("<p class='white-text'>Processing ....</p>");
    /* Comentar en production */
    var data = cookieString();

    var proID = $(this).data('productid');
    var fill = 0;

    /*Json test*/
    jsonObj = [];
    item = {};



    if (data != null) {
        var cdata = JSON.parse(data);
        $.each(cdata, function (index, element) {
            if (element.productID != proID) {
                jsonObj.push(element);
            }
            data = JSON.stringify(jsonObj);

            //alert(proID);
            /* Comentar en production *
                        if(element.productID == proID){
                            item ["productID"] = proID;
                            item ["distributID"] = 'false';
                            item ["productName"] = 'delete';
        
                            jsonObj.push(item);
                            data = JSON.stringify(jsonObj);
                            //alert(proID);
                        }
                        /* Comentar en production */
        });

    }

    Cookies.set('test', data);
    /* Comentar en production */
    setTimeout(function () {
        getdata();
    }, 1000);
    /* Comentar en production */
});



Body.on('click', '#clearall', function () {
    Cookies.remove('test');
    /* Comentar en production */
    setTimeout(function () {
        getdata();
    }, 1000);
    /* Comentar en production */
});


function get_countItems() {

    var data = cookieString();
    var num = 0;
    var cdata = JSON.parse(data);

    $.each(cdata, function (index, element) {
        num = parseInt(num) + 1;
    });



    return parseInt(num);
}