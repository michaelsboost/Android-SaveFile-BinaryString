document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
  // Device is ready
}

$("[data-action=download]").click(function() {
  setTimeout($("[data-action=runstring]").val())
})