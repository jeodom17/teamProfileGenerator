function handleManagerCard(employeeData){
    return `
    
    
  `
  }
  
  function handleEngineerCard(employeeData){
    return `
   
  `
  }
  
  function handleInternCard(employeeData){
    return `
    
  `
  }
  
 
  function populateCards(employeeData){
    const manager = rosterData.manager;
    const engineer = rosterData.engineer;
    const intern = rosterData.intern;
  
    let rosterPage = '';
  
    manager.forEach(manager => rosterPage += handleManagerCard(manager));
    engineer.forEach(engineer => rosterPage += handleEngineerCard(engineer));
    intern.forEach(intern => rosterPage += handleInternCard(intern));
  
    return rosterPage;
  
  }
  
  
  
  
  
  function renderHTML(teamRoster) {
    return `
 
    
    `
  }
  
  
  module.exports = renderHTML;
  