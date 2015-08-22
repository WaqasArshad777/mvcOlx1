var FilterPool = new Array();

function Filter(id) {

    this.id = id;

    FilterPool[id] = this;
}

Filter.prototype.display = function (id) {



    var html = "<div id='";
    html += id;
    html += "'>"

    
    //Filters
    html += " <div id='searchBar' class='search' style='margin-left: 14%; margin-right: 14%;'> ";
    html += " <span> ";
    html += " <select id='brand' name = 'location'> ";
    html += " <option>@ViewBag.loc</option>";
    html += " <option>Lahore</option>";
    html += " <option>Karachi</option>";
    html += " <option>Islamabad</option>";
    html += " <option>Peshawar</option>";
    html += " <option>Multan</option>";
    html += " <option>Gujrat</option>";
    html += " <option>Gujranwala</option>";
    html += " </select>";
    html += " </span>";
    html += " <span>"
    html += " <input type='text' id='Add' placeholder=' Ads Near You' name='search_ad' />";
    html += " </span>";
    html +=" <br />"
    html += " <select id='brand' name = 'category'> ";
    html += " <option>@ViewBag.cat</option>";
    html += " <option>Mobiles & Tablets</option>";
    html += " <option>Electronics & Computers</option>";
    html += " <option>Vehicles</option>";
    html += " <option>Home & Furniture</option>";
    html += " <option>Animals</option>";
    html += " </select>";
    html += " </span> ";
    html += " <span style='margin-left: 2%'>Price Range: </span>";
    html += " <span> <input type='text' id='from' placeholder=' From' name='from_price' style='width: 12%' /> </span>";
    html += " <span> &nbsp - &nbsp </span>";
    html += " <span> <input type='text' id='to' placeholder=' To' name='to' style='width: 12%' /> </span>";
    html += " <span  style='margin-left: 4%'>";
    //html += " <a href='Search.aspx'> ";
    html += " <img src='/images/search3.png'  style='width: 4%; float:right; height: 25px; margin-left: 1%;' class='searchIcon' alt='Search Icon'/>";
    //html += " </a> ";
    //html += " <a href='Search.aspx'> ";
    html += " <input  style=' float:right;' type='submit' id='search' runat='server' value='Search'/> ";
    //html += " </a> ";

    html += " </span>";

    html += " </div>";

    html += " </div>";

    document.getElementById(id).innerHTML = html;



}

Filter.prototype.getFieldId = function () {
    return this.id + "_textfield";
}

