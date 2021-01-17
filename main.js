class EncodeMethods {
    constructor(message) { this.message = message }
    base64_encode() { return btoa(this.message); }
    base64_decode() { return atob(this.message); }
}

const selectBox = document.getElementById("types")

function detect_type() {
    var encrypt_method = selectBox.options[selectBox.selectedIndex];
    var optgroup = encrypt_method.parentNode;
    var selectbox_dictionary = {
        "Method": encrypt_method,
        "Group": optgroup
    };
    // console.log("Types: " + encrypt_method.label + " " + optgroup.label);
    return selectbox_dictionary;
}

const encrypt_message = document.getElementById("user_message_input");
const decrypt_message = document.getElementById("result_of_message");

selectBox.addEventListener("change", function() {
    selectbox_detection = detect_type();
    console.log(selectbox_detection.Group);
});


encrypt_message.addEventListener("keyup", function() {
    let encode_method = new EncodeMethods(encrypt_message.value);
    console.log(encrypt_message.value);
    decrypt_message.value = encode_method.base64_encode();
});