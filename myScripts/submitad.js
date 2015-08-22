

function formSubmittingValidity() {

    var myhtml = "<div class='errorshowed'> </div>";
    document.getElementById("error").innerHTML = myhtml;

    var valueOfTitle = document.getElementById("adtitle").value;

    var valueOfDesc = document.getElementById("adDesc").value;

    var emailAddress = document.getElementById("email").value;

    var valueOfPhone = document.getElementById("phone").value;

    if (valueOfTitle == '' || valueOfDesc == '' || emailAddress == '' || valueOfPhone == '' || document.getElementById("myCategories").value == '' || document.getElementById("myCategories").value == 'Select Category' || document.getElementById("name").value == '' || document.getElementById("myProvinces").value == '' || document.getElementById("myProvinces").value == 'Select Province' || document.getElementById("city").value == '') {
        alert("Please fill in the necessary(*) empty fields!");
        var myhtml1 = "<div class='errorshowed'>Please fill in the necessary(*) empty fields!</div>";
        document.getElementById("error").innerHTML = myhtml1;

        return false;

    }

        /*
    else if (emailAddress != '') {

        var length = emailAddress.length;
        var bCheck1 = false;
        var bCheck2 = false;
        var counter1 = 1;
        while (counter1 <= length - 4) {
            if ((emailAddress.charAt(counter1) == '@')) {
                if (length - counter1 > 5) {
                    bCheck1 = true;
                }
            }
            if ((emailAddress.charAt(counter1) == '.' && emailAddress.charAt(counter1 + 1) == 'c' && emailAddress.charAt(counter1 + 2) == 'o' && emailAddress.charAt(counter1 + 3) == 'm')) {
                bCheck2 = true;
                break;
            }
            counter1++;
        }
        if ((bCheck1 == false) || (bCheck2 == false)) {
            alert("Please enter email address in proper format!");
            //document.getElementById("emailbox").value = '';
            //document.getElementById("error").value = 'Invalid Email ID! Please enter again.';
            var myhtml2 = "<div class='errorshow'>Invalid Email Format! Please enter again.</div>";
            document.getElementById("error").innerHTML = myhtml2;
            return false;
        }
    }
        */

    return true;
}

