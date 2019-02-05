const mailer = "../../mailer"

$("#associateForm").submit(sendFormData)

$(function () {
    $('#aboutToggle').change(function () {
        if ($('#aboutToggle').is(':checked')) {
            $('#txtAbout').removeAttr('disabled');
            $('#txtAbout').attr('required', true);
            $('#txtAbout').css('background-color', 'rgb(255,255,255)');
        } else {
            $('#txtAbout').attr('disabled', true);
            $('#txtAbout').removeAttr('required');
            $('#txtAbout').css('background-color', 'rgb(150,150,150)');
        }
    })
})

$(function () {
    $('#presentationToggle').change(function () {
        if ($('#presentationToggle').is(':checked')) {
            $('#txtPresentationLink').removeAttr('disabled');
            $('#txtPresentationLink').attr('required', true);
            $('#txtPresentationLink').css('background-color', 'rgb(255,255,255)');
        } else {
            $('#txtPresentationLink').attr('disabled', true);
            $('#txtPresentationLink').removeAttr('required');
            $('#txtPresentationLink').css('background-color', 'rgb(150,150,150)');
        }
    })
})

$(function () {
    $('#imageToggle').change(function () {
        if ($('#imageToggle').is(':checked')) {
            $('#txtImageLink').removeAttr('disabled');
            $('#txtImageLink').attr('required', true);
            $('#txtImageLink').css('background-color', 'rgb(255,255,255)');
        } else {
            $('#txtImageLink').attr('disabled', true);
            $('#txtImageLink').removeAttr('required');
            $('#txtImageLink').css('background-color', 'rgb(150,150,150)');
        }
    })
})

$(function () {
    $('#logoToggle').change(function () {
        if ($('#logoToggle').is(':checked')) {
            $('#txtLogoLink').removeAttr('disabled');
            $('#txtLogoLink').attr('required', true);
            $('#txtLogoLink').css('background-color', 'rgb(255,255,255)');
        } else {
            $('#txtLogoLink').attr('disabled', true);
            $('#txtLogoLink').removeAttr('required');
            $('#txtLogoLink').css('background-color', 'rgb(150,150,150)');
        }
    })
})

$(function () {
    $('#iconToggle').change(function () {
        if ($('#iconToggle').is(':checked')) {
            $('#txtIconLink').removeAttr('disabled');
            $('#txtIconLink').attr('required', true);
            $('#txtIconLink').css('background-color', 'rgb(255,255,255)');
        } else {
            $('#txtIconLink').attr('disabled', true);
            $('#txticonLink').removeAttr('required');
            $('#txtIconLink').css('background-color', 'rgb(150,150,150)');
        }
    })
})

$(function () {
    $('#facebookToggle').change(function () {
        if ($('#facebookToggle').is(':checked')) {
            $('#txtFacebookLink').removeAttr('disabled');
            $('#txtFacebooklink').attr('required', true);
            $('#txtFacebookLink').css('background-color', 'rgb(255,255,255)');
        } else {
            $('#txtFacebookLink').attr('disabled', true);
            $('#txtFacebookLink').removeAttr('required');
            $('#txtFacebookLink').css('background-color', 'rgb(150,150,150)');
        }
    })
})

$(function () {
    $('#linkedInToggle').change(function () {
        if ($('#linkedInToggle').is(':checked')) {
            $('#txtLinkedInLink').removeAttr('disabled');
            $('#txtLinkedInLink').attr('required', true);
            $('#txtLinkedInLink').css('background-color', 'rgb(255,255,255)');
        } else {
            $('#txtLinkedInLink').attr('disabled', true);
            $('#txtLinkedInLink').removeAttr('required');
            $('#txtLinkedInLink').css('background-color', 'rgb(150,150,150)');
        }
    })
})

$(function () {
    $('#sendToToggle').change(function () {
        if ($('#sendToToggle').is(':checked')) {
            $('#txtSendTo').removeAttr('disabled');
            $('#txtSendTo').attr('required', true);
            $('#txtSendTo').css('background-color', 'rgb(255,255,255)');
        } else {
            $('#txtSendTo').attr('disabled', true);
            $('#txtSendTo').removeAttr('required');
            $('#txtSendTo').css('background-color', 'rgb(150,150,150)');
        }
    })
})


function sendFormData() {
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

    mailer(associate.email, associate.firstName, associate.companyName, associate.phone, window.location.href)

    $.post("/api/associate", associate, function (data, success) {
        if (success === "success") {
            console.log("success!")
        } else {
            alert("Unsuccessful! If error proceeds please contact christiandbrooks@gmail.com!")
        }
    })
}