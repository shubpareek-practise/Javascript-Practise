/// <reference types="Cypress" />

import PagehomePage from '.../Pageobjectmodal/PagehomePage';

 describe('First test suite', () => {

    //   before(() => {

    //   }

    it('First test case',() => {
        const hm = new PagehomePage();
        cy.visit('https://rahulshettyacademy.com/angularpractice/');
        //cy.get('.form-control ng-pristine ng-invalid ng-touched').type('Mike hesson');
        cy.fixture('example').then((user) => {

        hm.getusername().type(user.name);
        hm.getemailname().type(user.Email);



        
        })            
    })
    
    
    
    
    })









