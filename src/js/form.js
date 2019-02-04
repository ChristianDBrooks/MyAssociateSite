$("#submitBtn").on("click", sendFormData);

$("txtAbout").val("something here")

// create option for description or default
// create option for opportunity presentation page or default
// create option for disabled facebook or linkedin link
// create option for default about us image
// create option for logo image
// create option for icon image

$(function () {
    $('#aboutToggle').change(function () {
        if ($('#aboutToggle').is(':checked')) {
            $('#txtAbout').removeAttr('disabled');
            $('#txtAbout').css('background-color', 'rgb(255,255,255)');
        } else {
            $('#txtAbout').attr('disabled', true);
            $('#txtAbout').attr('disabled', true);
            $('#txtAbout').css('background-color', 'rgb(150,150,150)');
        }
    })
})

$(function () {
    $('#presentationToggle').change(function () {
        if ($('#presentationToggle').is(':checked')) {
            $('#txtPresentationLink').removeAttr('disabled');
            $('#txtPresentationLink').css('background-color', 'rgb(255,255,255)');
        } else {
            $('#txtPresentationLink').attr('disabled', true);
            $('#txtPresentationLink').css('background-color', 'rgb(150,150,150)');
        }
    })
})

$(function () {
    $('#imageToggle').change(function () {
        if ($('#imageToggle').is(':checked')) {
            $('#txtImageLink').removeAttr('disabled');
            $('#txtImageLink').css('background-color', 'rgb(255,255,255)');
        } else {
            $('#txtImageLink').attr('disabled', true);
            $('#txtImageLink').css('background-color', 'rgb(150,150,150)');
        }
    })
})

$(function () {
    $('#logoToggle').change(function () {
        if ($('#logoToggle').is(':checked')) {
            $('#txtLogoLink').removeAttr('disabled');
            $('#txtLogoLink').css('background-color', 'rgb(255,255,255)');
        } else {
            $('#txtLogoLink').attr('disabled', true);
            $('#txtLogoLink').css('background-color', 'rgb(150,150,150)');
        }
    })
})

$(function () {
    $('#iconToggle').change(function () {
        if ($('#iconToggle').is(':checked')) {
            $('#txtIconLink').removeAttr('disabled');
            $('#txtIconLink').css('background-color', 'rgb(255,255,255)');
        } else {
            $('#txtIconLink').attr('disabled', true);
            $('#txtIconLink').css('background-color', 'rgb(150,150,150)');
        }
    })
})

$(function () {
    $('#facebookToggle').change(function () {
        if ($('#facebookToggle').is(':checked')) {
            $('#txtFacebookLink').removeAttr('disabled');
            $('#txtFacebookLink').css('background-color', 'rgb(255,255,255)');
        } else {
            $('#txtFacebookLink').attr('disabled', true);
            $('#txtFacebookLink').css('background-color', 'rgb(150,150,150)');
        }
    })
})

$(function () {
    $('#linkedInToggle').change(function () {
        if ($('#linkedInToggle').is(':checked')) {
            $('#txtLinkedInLink').removeAttr('disabled');
            $('#txtLinkedInLink').css('background-color', 'rgb(255,255,255)');
        } else {
            $('#txtLinkedInLink').attr('disabled', true);
            $('#txtLinkedInLink').css('background-color', 'rgb(150,150,150)');
        }
    })
})

$(function () {
    $('#sendToToggle').change(function () {
        if ($('#sendToToggle').is(':checked')) {
            $('#txtSendTo').removeAttr('disabled');
            $('#txtSendTo').css('background-color', 'rgb(255,255,255)');
        } else {
            $('#txtSendTo').attr('disabled', true);
            $('#txtSendTo').css('background-color', 'rgb(150,150,150)');
        }
    })
})


function sendFormData(e) {
    e.preventDefault();

    const checkoutLink = "https://checkout.wearelegalshield.com/" + $("#txtUsername").val();

    const associate = {
        firstName: $("#txtFirstName").val(),
        lastName: $("#txtLastName").val(),
        companyName: $("#txtCompanyName").val(),
        phone: $("#txtPhone").val(),
        email: $("#txtEmail").val(),
        checkoutLink: checkoutLink,
        startYear: $("#txtStartYear").val(),
        about: $('#aboutToggle').is(':checked') ? $("#txtAbout").val() : null,
        presentationLink: $('#presentationToggle').is(':checked') ? $("#txtPresentationLink").val() : null,
        fbLink: $('#facebookToggle').is(':checked') ? $("#txtFacebookLink").val() : null,
        liLink: $('#linkedInToggle').is(':checked') ? $("#txtLinkedInLink").val() : null,
        sendTo: $('#txtSendTo').val(),
        associateID: $("#txtAssociateID").val(),
        imageLink: $('#imageToggle').is(':checked') ? $("#txtImageLink").val() : null,
        logoLink: $('#logoToggle').is(':checked') ? $("#txtLogoLink").val() : null,
        iconLink: $('#iconToggle').is(':checked') ? $("#txtIconLink").val() : null,
    }
    $.post("/api/associate", associate, function (data, success) {
        if (success === "success") {
            window.location.href = "/success"
        } else {
            alert("Unsuccessful! If error proceeds please contact christiandbrooks@gmail.com!")
        }
    })
}