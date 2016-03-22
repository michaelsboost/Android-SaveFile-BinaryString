$(".download").click(function() {
  eval( $("#jszipdemo").val() )
})

$(".singlefile").click(function() {
  var blob = new Blob(["hello world"])
  saveAs(blob, "hi.txt")
})
