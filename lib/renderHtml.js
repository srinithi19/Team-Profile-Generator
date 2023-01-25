const fs = require('fs');

const createEmployeeCard = (team) => {
    let teamName = team.name.trim();
    let employeeCard = team.employees.map((employee) => {
      return `
   <section class="card m-4">
     <section class="has-background-grey-lighter has-text-dark mb-4 p-4">
       <h2 class="card-header-subtitle has-text-weight-bold	mb-2 is-size-5">${employee.getName()}</h2>
       <h3 class="card-header-subtitle has-text-weight-bold">${employee.getRole()}</h3>
     </section>
     <section class="px-4 pb-4">
       <ul class="mb-4">
         <li class="mb-2">Employee ID: ${employee.getId()}</li>
         <li class="mb-2">Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></li>
         <li class="mb-2">${getInfo(employee)}</li>
       </ul>
     </section>
  </section>
    `;
    });
    createHtml(employeeCard, teamName);
  };

  