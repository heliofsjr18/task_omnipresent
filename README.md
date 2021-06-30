# task_omnipresent
This repo is about to create a solution for the task applied by omnipresent

Here's the Solution:

So basically we have here an express server written in typescript using nodejs.

As we can see, we have 'src/index.ts' which is only responsible to instantiate the server passing an environment as an initializer (dev or prod for example).

Then the 'src/server.ts' is responsible to configure the express server, injecting everything we gonna use on the application. In my case, I'm just injecting the express.json() module to be able to handle JSON content on requests, and of course my route which is responsible to set each endpoint available on the service.
The way that I decided to organize the route was basically transforming into little packages each point of relevance on the service. So, for each bundle of operations (which could be a series of endpoints related to the same domain) it is exported a new package to be used for a bigger package and so on, as we can see on the 'src/context/V1 'package, or even 'src/context/v1/health package'.

Once the server is configured, for each endpoint it is possible to set middlewares that were used on this case to validate the request itself, and we can see the example on './src/context/employees.ts', which is injecting the middleware './src/middlewares/setCountryMiddleware'


From now, the organization goes with the Controller class, which is responsible to do whatever it is necessary to complete a given process and deliver the result, or not, to whoever hit the request.

The controller, in this case, can be related to a service, responsible to do business logic, and know who can make external requests to get data (clients, and repositories for example) that will be used further to complete the process.

And last but not least we have the Client layer, which here is used to hit an external public endpoint to get the data for the countries that will be used by the service to build the object and delivers that to the controller.

For unit tests, I decided to use jest to full cover the employeesController, using mocks and the real requests and validating the output.

P.S: We have on './src/controllers/restCountriesController' that calls directly the client, I don't think is a good approach, I just decided to put that here for example, and test the organization.



For the Proposal to become the service available into a cloud infrastucture.

Here follows the link with the proposal.
https://docs.google.com/document/d/1d_exyEdL2_wICPg5RAR3VDVWeF5vyK264ka-zOjHLrQ/edit?usp=sharing