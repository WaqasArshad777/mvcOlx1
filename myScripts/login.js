function formResetting() {
    var value = '';
    document.getElementById("emailbox").value = value;
    document.getElementById("pswrd").value = value;

    return true;
}

function formSubmitting() {
    var myhtml = "<div class='errorshow'> </div>";
    document.getElementById("error").innerHTML = myhtml;

    var valueOfEmail = document.getElementById("emailbox").value;
    var valueOfFirstPswrd = document.getElementById("pswrd").value;
    var emailAddress = document.getElementById("emailbox").value;

    //var hardpswrd = "test";
    //var hardemail = "email@gmail.com"

    if (valueOfEmail == '' || valueOfFirstPswrd == '') {
        alert("Please fill in the necessary(*) empty fields!");
        var myhtml1 = "<div class='errorshow'>Please fill in the necessary(*) empty fields!</div>";
        document.getElementById("error").innerHTML = myhtml1;

        return false;
    }


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
            formResetting();

            return false;
        }
    }
    return true;

}
