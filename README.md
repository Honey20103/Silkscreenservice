# Silkscreenservice
**Milestone project 4: Full Stack Frameworks with Django - Code Institute**

[![Build Status](https://travis-ci.org/D1ang/Silkscreenservice.svg?branch=master)](https://travis-ci.org/D1ang/Silkscreenservice)

For a silkscreen-press company a need for a services order system has been requested. 
The main goal of the system is to make the job of our studio employees easier and more efficient. 
For the customer we would like to provide an easy to understand and easy to use system so, 
they will be able to make their service requests easier.

In short:
- A system for employees to be more efficient.
- A easy to understand system for B2B customers to remove some workload from the studio employees.

## Demo
A live demo version can be found **[here](https://silkscreenservice.herokuapp.com/)**

![Design](https://github.com/D1ang/Silkscreenservice/blob/master/mockups/presentation.png)

## UX
To make the system as clear as possible to the end-user a basic but very clean design has been chosen.
Options are minimalistic and the end-user will not be overloaded with options to choose from.
The navigation bar, buttons, cart system and dashboard have been built with this in mind and have an easy to understand logic.

## User stories
With years of field experience, we have built a well-known form and work ethic in creating designs.
We asked our customers from day to day what they would like to see in a sample and came up with the following points:

 - As a user, I want to easily fill in the forms for a service request (**services**)
 - As a user, I want to upload my artwork fast and easy in the same system (**checkout form**)
 - As a user, I want a secured overview of my order history (**dashboard**)
 - As a user, I want to the system to remember my cart for if I want to make changes later on (**cart**)
 - As a user, I don't want to fill in my details everytime, but do want to change them if needed (**profile**)
 - As an employee, I want to know which service are required per order (**order**)
 - As an employee, I want to change the status of an order (**admin list actions**)
 - As an employee, I would like to download the artwork (**order details**)
 - As an employee, I would like to upload and overwrite the artwork (**order details**)
 - As an employee, I want to search and filter the orders (**search & filter**)

### Strategy
The goal of the tool is to make it as easy as possible to access, short and informative,
while striving for a minimalist and user-friendly design as possible.

### Scope
For customers, we wanted to provide them with an easy to understand (first-view-use) system.
This way, they would be able to request services: faster, easier and on their own,
so our studio employees have more free time for other job-related tasks and be able to do
their service tasks more efficient.

### Structure
The system is structured to get the right information as quickly as possible.
The order of the options provided are placed in a logic workflow while the design provided will use a messages bar
that should be easy to understand and gives the customer a straight away no-nonsense feedback.
The navbar is available when needed and a footer is provided with contact information below the page.

### Skeleton
By using Figma the following wireframes were created:

[Silkscreenservice wireframe](https://github.com/D1ang/Silkscreenservice/blob/master/mockups/wireframe.pdf)

[Responsive phone wireframe](https://github.com/D1ang/Silkscreenservice/blob/master/mockups/wireframe-sm.pdf)

With Lucidchart the following Entity Relationship Diagram has been made:
![ERD](https://github.com/D1ang/Silkscreenservice/blob/master/mockups/model_diagram.png)


### Surface
The colours chosen are: yellow, red, black and blue.
Blue is the most used colour most commonly associated with harmony, faithfulness, confidence, and imagination.
A very clean, abstract and an almost childish design has been chosen to force the attention to the provide design.
Users won't be afraid to use the system by this easy to understand design.
The font Poppins had been chosen because of its look that fits perfectly to the buttons and graphics on the homepage.
As for the dashboard a lighter version of Poppins has been used as it looks very clean and is easy to read.
The buttons are style in 2 versions full black or black outlined to fit the overall design.

## Technologies
1.  Figma - *To create a wireframe*
2.  Lucidchart - *To create the Entity Relationship Diagram (ERD)*
3.  HTML - *To create the basics*
4.  CSS - *To improve placements and design*
5.  JavaScript - *The engine to create user interaction*
6.  Python - *Programming language*
7.  Postgres - *Opensource database to save the transactions, profile and orders*
8.  Django - *Web framework in python*
9.  Bootstrap - *To make the design responsive*
10. Font Awesome - *Easy icon access for the icons*
11. Font Awesome animations - *additional animations for the Font Awesome icons*

### JavaScript Libraries
1. jQuery - *To improve input field feedback*
2. flatpickr - *lightweight, powerful JavaScript datetimepicker with no dependencies*
3. DataTables - *Adds advanced interaction controls to HTML tables*
4. Stripe - *For creditcard transactions*

### Python & Django Plugins
1. pillow - *Python Imaging Library*
2. Stripe - *Creditcard payments end transaction security*
3. boto3 - *To connect to AWS*
4. django-allauth - *Authentication, registration & account management*
5. django-countries - *Provides country choices for use with forms*
6. django-crispy-forms - *Controls the rendering behavior of Django forms*
7. django-filter - *Easy searching and filtering querysets*

## Features
This system is an e-commerse based website with a simplistic but easy to understand build-up.
Provideing the user with 2 call-to-action buttons and a "read more" button a choice can be made in seconds.
The navbar is sticky but reacts on the users scrolling behaviour. will scrolling down the bar dissapears to keep a clean screen astate.
But when scrolling up the bar we reappear.
The frequently used services are created by to most clicked products for the card in the backend.
The 3 services with the most clicks will be sorted on popularity and shown here.
The services page will show all the avaialbe services that can be ordered.
To order a service the user need to be logged in. To provide the user with some extra feedback a handy message bar will drop down from the navbar.
This bar will scroll up again after a few seconds.
As a user will create a account or login a dasboard will be available for a nice table-based overview of the placed services.
A admin account is available for employees to update service request and download the by customer uploaded artwork.
As the main function of the syustem is the order/cart system. users can add or delete services to their cart with will be save din the backend right away.
As a user logouts the cart will be remembered in the system to be finished later on.
When the customer checkout the cart a secured payment can be made with creditcard and artwork can be uploaded to be downloaded by the employees.

### Features Left to Implement
In later released I would like to add models for a comments/grade system, so customers can add comments or grade the provided services.
Visitors would be able to read those.
I would also like to add a function for admin to remove a customer. As of european law this should be posssible.
This can be done through the standard django admin, but it would be nicer and easier if this function is available trough the custom made dashboard.

## Testing
This site was tested across multiple screen sizes on Chrome, Safari, and Internet Explorer.
To ensure compatibility and responsiveness it is also tested on an android based mobile device (OnePlus5)
and an older tablet device (Samsung Galaxy Tab2).
The site has been bug field-tested by customers and employees.

The following tests have been used to ensure proper site functionality:

- [GTmetrix](https://gtmetrix.com/): To test on website loading times.
- [W3C HTML Validator](https://validator.w3.org/): This validator checks the mark-up validity of Web documents in HTML.
- [W3C CSS Validator](https://jigsaw.w3.org/css-validator/): This validator checks the mark-up validity of Web documents in CSS.
- [Unicorn Revealer](https://chrome.google.com/webstore/detail/unicorn-revealer/lmlkphhdlngaicolpmaakfmhplagoaln?hl=en-GB): Inspecting on overflow errors.
- [Autoprefixer CSS online](https://autoprefixer.github.io/): Autoprefixer is a PostCSS plugin which parses your CSS and adds vendor prefixes.
- [JSHint](https://jshint.com/): A static code analysis tool for JavaScript.
- [Visual Studio Code](https://code.visualstudio.com/): Using the built-in tools to test on proper code and the flake8 linter.
- [Travis](https://travis-ci.org/): Used halfway the project to test the code.

## Bugs

### CSS
CSS written code is tested with the W3C CSS Validator as it does not give any errors the deployed version of the site does gives a couple of warnings and error comming from Bootstrap and the Font Awesome animations Library.

### JavaScript
All 3 JavaScripts passed the test only a couple of warning came up trough JSHint for example: using "let", "const" but none of them are bug worthy.

### Admin login gave an 500 error
When a customer logged in the system worked perfectly but for the admin account an 50 error came up.
This bug was fixed after making migrations and changed the max filed characters to 50 chars.
Seems the fille din email was 28 characters and when in an earlier build was set to 25 this error came up.

## Deployment
The example of this code is hosted by using Heroku and Amazon S3, this code is deployed to GitHub directly from the master branch.
The deployed site will update automatically upon new commits to the master branch.
This code can be run locally or deployed to a live environment. Directions are based on deployment to Heroku.

### Deploy requirements
 - [VScode](https://code.visualstudio.com/) *A tool to develop software*
 - [python 3](https://www.python.org/) *A programming language*
 - [PIP](https://pip.pypa.io/en/stable/installing/) *To get python installation packages*
 - [Git](https://github.com/) *Version control for code source*
 - [AWS-S3](https://docs.aws.amazon.com/) *Webbased cloud storage service*
 - [S3 Bucket](https://docs.aws.amazon.com/) *A cloud storage resource*
 - [Stripe](https://stripe.com/) *To securely collect creditcard payments*

### Local deployment
Save a copy of the github repository by clicking the "Code" button at the right top of the GitHub page and select "Download ZIP" in the submenu.
Extract the zip file to a folder of choice on your system. If Git is installed on your system, you can clone the repository with the following command:
  ```bash
  git clone https://github.com/maliahavlicek/ms4_challenger.git
  ```

Open your preferred IDE (VScode) then open a terminal session in the unzip folder or browse to the correct location.
Set up a virtual environment with this command in the terminal session:
  ```bash
  python3 manage.py
  ```
   > NOTE: Your command may differ, such as ```python -m .venv venv ...``` or ```py manage.py ...``` or ```.\manage.py ...```

Activate the .venv with the command:
  ```bash 
  .venv\Scripts\activate
  ```
  > NOTE: This command may differ depending on your operating system, please check the Python documentation on creating an ENV.

Install all required modules with the command:
   ```bash
   pip install -r requirements.txt
   ```
 
Create a new file at the base directory level called env.py:
   ```python
   touch env.py
   ```

Copy the following into the env.py file:
    ```python
    import os
    

    os.environ.setdefault( 'DEVELOPMENT', 'True')
    os.environ.setdefault('SECRET_KEY', '<your_value>')
    os.environ.setdefault('STRIPE_PUBLIC_KEY', '<your_value>')
    os.environ.setdefault('STRIPE_SECRET_KEY', '<your_value>')
    ```

Replace <your_value> with the values from your own created accounts
    - STRIPE_PUBLIC_KEY *Required from the developer's API on* (stripe dashboard)[https://dashboard.stripe.com/test/apikeys]
    - STRIPE_SECRET_KEY *Required from the Developer's API on* (stripe dashboard)[https://dashboard.stripe.com/test/apikeys]
    - SECRET_KEY *Required from an online key generator* (Djecrety)[https://djecrety.ir/]

Set up the databases by running the following management command in your terminal:
  ```bash
  python manage.py migrate
  ```

Create a superuser so you can have access to the django admin by running the following command in your terminal:
  ```bash
  python manage.py createsuperuser
  ```

And finally start your server by running the following management command in your terminal:
  ```bash
  python manage.py runserver
  ```

When the server is running browse to the admin panel by using the url provided by your IDE;
Most of the time this is *127.0.0.1:8000/admin*
You can login by using the credentials used for creating the superuser.
When logged in some records need to be created:
```
XXXX
```

### Heroku deployment
To run this application in a cloud based environment, you can deploy the code to Heroku.
This section assumes you have succeeded at running the application in your local environment first, as described above.


1. Login to Heroku and set up a new app with a unique name (NOTE: silkscreenservice is already taken)
2. On the Resources tab, in the Add-ons field type ``` Heroku Postgres``` select the Hobby Dev then click the Provision button:
3. Go to the Settings tab, click Reveal Config Vars and copy the DATABASE_URL value into your local memory.
1. In heroku for your newly created app, go back to the Settings tab, and click Reveal Config Vars. This time you will be copying the values from your env.py file into heroku. Make sure you load following:
    
    |           Key           |      Value     |
    |:-----------------------:|:--------------:|
    | HOSTNAME                | < your value > |
    | STRIPE_PUBLISHABLE      | < your value > |
    | STRIPE_SECRET           | < your value > |
    | SECRET_KEY              | < your value > |
    | AWS_STORAGE_BUCKET_NAME | < your value > |
    | AWS_S3_REGION_NAME      | < your value > |
    | AWS_ACCESS_KEY_ID       | < your value > |
    | AWS_SECRET_ACCESS_KEY   | < your value > |
    | EMAIL_USER              | < your value > |
    | EMAIL_PASS              | < your value > |
    | DATABASE_URL            | < your value > |
    | DISABLE_COLLECTSTATIC   | 1              |

1. Because this is a new database, you will to set up the databases by running the following management command in your terminal:
    ```bash
    python manage.py migrate
    ```
   > If you restarted your machine to activate your environment variables, do not forget to reactivate your virtual environment with the command used at step 4.
1. Create the superuser for the postgres database so you can have access to the django admin, follow the steps necessary to set up the username, email and password by running the following management command in your terminal:
    ```bash
    python manage.py createsuperuser
    ```
1. Preload products and tags. To match starter projects and user profile tags to the original concept, run the following commands from your IDE's terminal:
    ```bash
    python manage.py loaddata servicelevel.json
    python manage.py loaddata tag.json
    ```

1. In the event packages have been updated, it's best to re-create the requirements.txt file using the terminal command prompt: 
    ```bash
    pip freeze > requirements.txt
    ```
1. Create a Procfile:
    ```bash
    echo web: gunicorn ms4_challenger.wsgi:application > Procfile
    ```
1. Add the files if they changed and push to git hub:
    ```bash
   git commit add Procfile
   git commit add requirements.txt
   git commit-m 'getting ready to deploy to heroku'
   git push -u origin
   ``` 
1. From the heroku dashboard of your newly created application, click on the "Deploy" tab, then scroll down to the "Deployment method" section and select GitHub.
1. Use the github linking and type in the name of the repository ex:) ms4_challenger and click the search button. Then connect the heroku app to the desired GitHub repository.
1. On the Deployment Tab, scroll a bit further down to the "Manual Deploy" section, select the master branch then click "Deploy Branch".
1. If you have errors, look at the logs for your application, most common errors are forgetting to add the hostname and  disabling collectstatic.
1. Once your application is running, you may want to update the Deployment method from Manual to Automatic.

## Credits

### Content
All text content for this system were written by me.
The following site has been used as an inspiration for the overall design: [Illustrations.co](https://illlustrations.co/)

### Media
Illustrations: https://illlustrations.co/

### Acknowledgements
- Django Framework 3.0 Crash Course Tutorials [link](https://www.youtube.com/watch?v=xv_bwpA_aEA&list=PL-51WBLyFTg2vW-_6XBoUpE7vpmoR3ztO)
- freeCodeCamp.org - How to Build an E-commerce Website [link](https://www.youtube.com/watch?v=YZvRrldjf1Y)
- W3schools.com [link](https://www.w3schools.com/)
- Django 3.0 documentation [link](https://docs.djangoproject.com/en/3.0/)
- Django Admin Cookbook [link](https://books.agiliq.com/projects/django-admin-cookbook/en/latest/introduction.html)
- SVG compressing [link](https://www.compresss.com/compress-svg.html)
