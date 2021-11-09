
  var nameV,emailV,passV;

  function readfom()
      {
          nameV=document.getElementById("txt1").value;
          emailV=document.getElementById("txt2").value;
          passV=document.getElementById("password").value;
          console.log(nameV,emailV,passV);
      }
  document.getElementById("insert").onclick = function()
  {
      readfom();
      firebase
      .database()
      .ref("student/" + emailV)
      .set({
              txt1:nameV,
              txt2:emailV,
              password:passV,
          });
      alert("Login successfully");
      location.replace("../FullStack_Project.html");
      document.getElementById("txt1").value="";
      document.getElementById("txt2").value="";
      document.getElementById("password").value="";
  };
  