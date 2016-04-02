document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
  // Device is ready
}

function saveFile(fileName, fileData) {
  // Get access to the file system
  window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function (fileSystem) {
    // Create the file.
    fileSystem.root.getFile(fileName, { create: true, exclusive: false }, function (entry) {
      // After you save the file, you can access it with this URL
      myFileUrl = entry.toURL()
      entry.createWriter(function(writer) {
        writer.onwriteend = function(evt) {
          alert("Successfully saved file to " + myFileUrl)
        }
        // Write to the file
        writer.write(fileData)
      }, function(error) {
        alert("Error: Could not create file writer, " + error.code)
      })
    }, function(error) {
      alert("Error: Could not create file, " + error.code)
    })
  }, function(evt) {
    alert("Error: Could not access file system, " + evt.target.error.code)
  })
}

$('.download').click(function() {
  setTimeout($('#jszipdemo').val())
})
