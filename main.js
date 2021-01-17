const actionTypeSelection = document.getElementById("types")
const inputBox = document.getElementById("user_message_input");
const outputBox = document.getElementById("result_of_message");

const EncodeMethods = {
    "Base64_encrypt": function (msg) {
        return btoa(msg);
    },
    "Base64_decrypt": function (msg) {
        return atob(msg);
    }
}

function get_action_function() {
    var encrypt_method = actionTypeSelection.options[actionTypeSelection.selectedIndex];
    return EncodeMethods[encrypt_method.label + "_" + encrypt_method.parentNode.id];
}

function update_output() {
    outputBox.value = get_action_function()(inputBox.value);
}

actionTypeSelection.addEventListener("change", function () {
    update_output();
});

inputBox.addEventListener("keyup", function () {
    update_output();
});