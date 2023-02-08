# eXreq Project
### Corporate Expense Form submission Application.  
* In this application a User can create form and that form will be assigned to his user ID only.  
* Each User will have his own user ID that can only be created by the Adminstrator with the designation admin or not.   
* The Admin user will be able to create more users and items in the database, and the non-admin person will only have access to those database.  
* Each user will be able to view the full form that he has submitted.  
* Each user will be able to update the form if required and the application will saved all the past versions that got updated.
* The user can log in either via database id or google authentication (both options are available)  
* The user will not be able to log in the application without having the database id, even if the user tries to log in via google authentication.  

### Screenshots  
##### Login Page  
![index main page](https://user-images.githubusercontent.com/83681358/216827614-22218a01-af00-4d46-b856-6b8d046d21af.png)
##### Google Auth Page  
![google auth](https://user-images.githubusercontent.com/83681358/216827628-0e7bb471-bad4-44ac-8d90-49de86fbb3fb.png)
##### Create Form Page  
![create form page](https://user-images.githubusercontent.com/83681358/216827643-d893cefa-c59a-4e7c-84aa-10f9fee84525.png)
##### Submitted Form Page
![Submitted page](https://user-images.githubusercontent.com/83681358/216827668-1a84b273-5b73-4bc3-b8e1-7b3508c51c9f.png)
##### Views with Version Page  
![view page with version control](https://user-images.githubusercontent.com/83681358/216827688-ecf51098-ad9c-4ff1-9d72-2fd19770b5d2.png)
##### Add User and All User Page  
![add user page](https://user-images.githubusercontent.com/83681358/216827712-8ad6e6ac-4022-42bf-a3a2-26b3896eaef8.png)
![all user page](https://user-images.githubusercontent.com/83681358/216827716-9c276549-abb4-4bf9-a013-68af1aef9109.png)
##### Add Item and All Item Page  
![Add item page](https://user-images.githubusercontent.com/83681358/216827732-6aa244ff-6478-4f96-888e-c5795d3224cd.png)
![all items page](https://user-images.githubusercontent.com/83681358/216827736-897bbc19-e66a-4546-be08-9978f8cb46b3.png)

### Technologies Used
* HTML  
* JavaScript  
* CSS  
* Bootstrap  
* Express  
* MongoDB 
* Mongoose  
* Passport/Google Auth   
* Heroku  

### Additional Resources
* Trello Link: https://trello.com/b/C1BILX5e/expense-requisition-form  
* App Link: https://exreq.herokuapp.com/  

### Further Enhancements in Future  
* User should be able to create their own form from scratch.  
* Admin will be able to assign approval limit based on the total dollar value of the expense form along with users who need to approve.   
* User will be able to assign form to another user that exists in the database.  
* User will be able to send form via app for approval to the existing user in the app database.  
* User will be able to send the form via email to the approval with the "Approve" or "Decline" Buttone at top, and based on what approval selects the app will update the user accordingly (will require creation of application API)  
* The app should be able to get live Currency exchange rate using Oanda App for any conversion where the item registered are of different currencies.  
