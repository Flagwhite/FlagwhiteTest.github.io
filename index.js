function show() {
    const d = new Date();
  let hour = d.getHours();
    let minutes = d.getMinutes();
    if ((hour >= 9 && hour <= 19) || (hour == 20 && minutes <= 29)) {
      document.getElementById('img1').style.display = "block"
        document.getElementById('img2').style.display = "block"
        document.getElementById('img4').style.display = "block"
    } 
    else {
      document.getElementById('img3').style.display = "block"
      document.getElementById('img4').style.display = "block"
    }
}