var row = 1;
var entry=document.getElementById('entry');
entry.addEventListener('click', displayDetails);


function displayDetails() {
  var Judul=document.getElementById('judul').value;
  var Tahun=document.getElementById('tahun').value;
  if (!Judul || !Tahun) {
    alert("Masukkan Film yang ingin dicari");
    return ;
  }
  var display =document.getElementById('display');
  var newRow= display.insertRow(row);
  var cell1=newRow.insertCell(0);
  var cell2=newRow.insertCell(1);
  cell1.innerHTML= Judul;
  cell2.innerHTML= Tahun;
  row++;

  if ( Judul  && Tahun) {
  	alert("Data film telah di entry")
  	return;
  }

}

function welcome(){
  alert("Selamat datang di DelsaComs")
}
