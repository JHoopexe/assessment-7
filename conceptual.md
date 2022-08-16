### Conceptual Exercise

Answer the following questions below:

- What is a JWT?
# JSON Web Token

- What is the signature portion of the JWT?  What does it do?
# A secret key that stores a payload that can be used for validation later

- If a JWT is intercepted, can the attacker see what's inside the payload?
# Yes, they're not enciphered

- How can you implement authentication with a JWT?  Describe how it works at a high level.
# When a user is created or logs in, a token is created for them and sent with every future request to authenticate who the user is.

- Compare and contrast unit, integration and end-to-end tests.
# Unit testing test functionality of a part of a program. Integration testing test that all routes, middleware, etc. are working. End-to-end testing simulates user flow to test user experience of a website.

- What is a mock? What are some things you would mock?
# Something used to simulate the bahavior of an object that relies on other complex objects. 
# API responses, random returns and database responses.

- What is continuous integration?
# The practice of merging in small code changes frequently, rather than merging in a large change at the end of a development cycle

- What is an environment variable and what are they used for?
# A dynamic-named value that can affect the way running processes will behave on a computer, and are used for testing, working in development or production

- What is TDD? What are some benefits and drawbacks?
# Test Driven Testing. It can be faster, and makes your test pure, but sometimes requires a convoluted setup and isn't always necessary and can be an over-optimization

- What is the value of using JSONSchema for validation?
# So user data can fail fast, before bad data gets to your db, to reduce amount of code for processing and validating data, and to get a validation system that is easy to setup and maintain

- What are some ways to decide which code to test?
# Always test each route, the db, auth functionality and anything that's likely to get heavy user flow.

- What does `RETURNING` do in SQL? When would you use it?
# After data is sent to a db, RETURNING returns query results if the db was updated successfully. When the db updates, add or deletes.

- What are some differences between Web Sockets and HTTP?
# HTTP has to constantly request updates, but Web Sockets update immediately when they are available. Web socket is an open connection, but HTTP creates a HTTP connection after giving the desired web page it closes the connection. Web Sockets is bi-directional, but you can't give a response with a HTTP direction.

- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)?
# Flask is easier, but I prefer using express. I want to become a React dev and also learn React Native, and currently, most jobs aren't looking for React or mobile React devs using Flask
