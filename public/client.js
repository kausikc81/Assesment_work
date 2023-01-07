
console.log('Client-side code running');

const button = document.getElementById('applications');
const search = document.getElementById('search_app');
// Calling API on button click and loop through the data
button.addEventListener('click', function(e) {
 fetch("https://engineering-task.elancoapps.com/api/applications")
   .then((data) => {
    return data.json();  
}).then((objdata)=> {
   let tabledata = "";
   objdata.map((values)=>{
        tabledata+= `<tr>
        <td>${values}</td>
        </tr>
        `;
   });
   document.getElementById("app_data").style.display = "block";
   document.getElementById("search_data").style.display = "none";
   document.getElementById('table-body').innerHTML = tabledata;

});
});

search.addEventListener('click', function(e) {

const app_name = document.getElementById('app_name').value ;
if (app_name === ""){
 alert("Please search with a App name");
 return;
}
// Calling API on button click and loop through the data
fetch(`https://engineering-task.elancoapps.com/api/applications/${app_name}`)
 .then((data) => {
  return data.json();  
}).then((srchdata)=> {
 let search_tabledata = "";
 srchdata.map((values)=>{
  search_tabledata+= `<tr>
      <td>${values.ConsumedQuantity}</td>
      <td>${values.Cost}</td>
      <td>${values.Date}</td>
      <td>${values.InstanceId}</td>
      <td>${values.Location}</td>
      <td>${values.MeterCategory}</td>
      <td>${values.ResourceGroup}</td>
      <td>${values.ResourceLocation}</td>
      <td>${values.ServiceName}</td>
      <td>${values.UnitOfMeasure}</td>
      <td>${values.UnitOfMeasure}</td>
      </tr>
      `;
 });
 
 document.getElementById("app_data").style.display = "none";
 document.getElementById("search_data").style.display = "block";
 document.getElementById('search-table-body').innerHTML = search_tabledata;

});
console.log('Get all button was clicked');
});