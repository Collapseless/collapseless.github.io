var rbt = 0;
function a() {
  window.location.href=window.location.origin;
}
function xaa() {
  if(document.getElementById('one').value!=''){
    if(document.getElementById('two').value!=''){
      if(document.getElementById('th').value!=''){
        if(document.getElementById('year').value>14){// /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/
          if(document.getElementById('em').value.search(/^(.+)@(.+)$/) != -1){
            if(rbt===2){
              window.location.href='https://j7855u7438.goho.co/join/xxay.html?email='+document.getElementById('em').value+'&ago='+document.getElementById('year').value+'&contry='+document.getElementById('one').value + "&why=" +       document.getElementById('whyy').value;
            }else{
            alert('Are you a robot? ');
          }
        }else{
            alert('Please enter email.');
          }
        }else{
          alert('Your age is smaller than 14.');
        }
      }else{
        alert('Please enter the postal code!');
      }
    }else{
      alert('Please enter your region.');
    }
  }else{
    alert('Please enter your country.');
  }
}
function robt(){
  if (rbt===0 && document.getElementById('robot').value=='I am not robot.'){
    rbt = 4;
  }
  else{
    rbt = 1;
  }

  if (rbt===1 && document.getElementById('robot').value=='I am not robot.'){
    rbt = 2;
  }
}
