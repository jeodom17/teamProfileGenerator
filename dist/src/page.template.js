//* functions to create cards

function handleManagerCard(employeeData){
    return `
    <div id="emp-card">
      <div id="card-header">
        <h1 id="mgr-name">${employeeData.name}</h1>
        <p id="mgr-role">Manager</p>
      </div>
      <div id="card-body">
        <p id="mgr-id">ID: ${employeeData.id}</p>
        <p>Email:<a href=" "></a></p>
        <p>Office number:</p>
    </div>
    </div>
    
  `
  }
  
  function handleEngineerCard(employeeData){
    return `
    <div id="emp-card">
        <div id="card-header">
          <h1 id="eng-name">${employeeData.name}</h1>
          <p id="eng-role">Engineer</p>
        </div>
        <div id="card-body">
          <p id="eng-id">ID:${employeeData.id}</p>
          <p>Email:${employeeData.email}<a href=" "></a></p>
          <p>Github:${employeeData.github}<a href=" "></a></p> 
      </div>
    </div>
  `
  }
  
  function handleInternCard(employeeData){
    return `
    <div id="emp-card">
        <div id="card-header">
          <h1 id="int-name">${employeeData.name}</h1>
          <p id="int-role">Intern</p>
        </div>
        <div id="card-body">
          <p id="int-id">ID:${employeeData.id} </p>
          <p>Email:${employeeData.email}<a href=" "></a></p>
          <p>School:${employeeData.school}</p>
        </div> 
    </div>  
  `
  }
  
 
  function populateCards(rosterData){
    const manager = rosterData.manager;
    const engineer = rosterData.engineer;
    const intern = rosterData.intern;
  
    let rosterPage = '';
  
    manager.forEach(manager => rosterPage += handleManagerCard(manager));
    engineer.forEach(engineer => rosterPage += handleEngineerCard(engineer));
    intern.forEach(intern => rosterPage += handleInternCard(intern));
  
    return rosterPage;
  
  }
  
  -
  function renderHTML(rosterData, employeeData) {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile</title>
</head>
<body>
    <header>
        <h1>Employee - Team Profile</h1>
    </header>
<main>
   ${populateCards(rosterData)} 
</main>    
</body>
</html>
    `
  }
  
  
  module.exports = renderHTML;
  