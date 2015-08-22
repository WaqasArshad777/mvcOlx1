

var AdPool = new Array();


function Ad(id) {

    this.id = id;

    AdPool[id] = this;
}

/*

Ad.prototype.hideAd = function (divID, ID) {

    var myhtml = " <div id='";
    html += ID;
    html += "'> style = 'visibility:hidden' > ";
    myhtml += " </div>";


    document.getElementById(divID).innerHTML = html;

}

*/

Ad.prototype.appear = function (id) {


    var html = "<div id='";
    html += id;
    html += "'>";
    html += " <div id='adID'>";
    html += " <div id='ad'> <a href='https://www.daraz.pk/' class='noUnderline'> <img src='/images/daraz1.jpg' alt='OLX Ad' style='width: 20%; height: 176px; position: absolute; top: 52%; left: 58%' />";
    html += " </a>";
    html += " </div>";
    html += " </div>";
    //html += "<div id='closebtn'>";
    //html += " <input type='button' id='closead' value='x' ";
    //html += "  onclick='hideAd('adID','ad')' ";
    //html += "/>";
    //html += " </div>";
    html += " </div>";

    document.getElementById(id).innerHTML = html;

}


Ad.prototype.display = function (id) {
    var html = " <div> <a href='/MainOlx/SubmitAd' class='noUnderline'> ";
    html += " <input type='button' id='submitad' value='Submit Free Ad' />";
    html += " </a>";
    html += " </div>";

    document.getElementById(id).innerHTML = html;
}


Ad.prototype.getFieldId = function () {
    return this.id + "_textfield";
}


