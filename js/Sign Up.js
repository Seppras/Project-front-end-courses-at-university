function isNumber(e){
    e = e || window.event;
    var charCode = e.which ? e.which : e.keyCode;
    return /\d/.test(String.fromCharCode(charCode));
  }
  
  function submit(){
  alert("Thank You!\n\nYour Form Has Been Submitted!");
  location.href = location.href;
  }
  
  function reset(){
  var txt;
  var r = confirm("Reset?");
  if (r == true){
    location.reload(true);
  }
  else {
    alert('Your Form Will Not Be Reset.');
  }
  }
  function mypage(){
  var txt;
  var r = confirm("\nPlease Click That Follow Button By My Name");
  if (r == true){
    var myWindow = window.open("https://codepen.io/DumLyfe43/", "", "width=1000, height=1000");
  }
  else {
    alert('Okay');
  }
  }