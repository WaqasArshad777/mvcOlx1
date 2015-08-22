var SearchPool = new Array();

function Search(id) {

    this.id = id;

    SearchPool[id] = this;
}

Search.prototype.display = function (id) {

    

    var html = "<div id='";
    html += id;
    html += "' style='margin-left:2%; margin:right:10%'>"
    
    html += "<div id='searchBar' class='search' style='margin-left:20%; margin:right:35%'> ";
    //html += " <select id='location'> ";
    //html += " <option>All Pakistan</option> ";
    //html += " <option>Punjab</option> ";
    //html += " <option>Sindh</option> ";
    //html += " <option>Balochistan</option> ";
    //html += " <option>Khyberpakhtunkhwa</option> ";
    //html += " </select> ";
    html += " <input type='text' id='Add' placeholder=' Ads Near You' name='search_ad' style='width:98%' />";
    //html += " <a href='Search.aspx'> ";
    html += " <img src='/images/search3.png' class='searchIcon' alt='Search Icon' style='width: 4%; height: 25px; margin-left: 16%;' />";
    //html += " </a> ";
    //html += " <a href='Search.aspx'> ";
    html += " <input type='submit' id='search' value='Search' /> ";
    //html += " </a> ";

    html += " </div>";

    html += " </div>";

    document.getElementById(id).innerHTML = html;

    

}

Search.prototype.getFieldId = function () {
    return this.id + "_textfield";
}

