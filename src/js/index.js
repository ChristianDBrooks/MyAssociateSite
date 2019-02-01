$("#submitBtn").on("click", sendFormData);

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
        about: $("#txtAbout").val(),
        presentationLink: $("#txtPresentationLink").val(),
        fbLink: $("#txtfaceBookLink").val(),
        liLink: $("#txtlinkedInLink").val(),
        sendFrom: $("#txtSendFrom").val(),
        sendTo: $("#txtSendTo").val(),
        associateID: $("#txtAssociateID").val(),
        imageLink: $("#txtImageLink").val(),
        logoLink: $("#txtLogoLink").val(),
        iconLink: $("#txtIconLink").val(),
    }
    $.post("/api/associate", associate, function (data, success) {
        if (success === "success") {
            window.location.href = "/success"
        } else {
            alert("Unsuccessful! If error proceeds please contact christiandbrooks@gmail.com!")
        }
    })
}