Enter 'npm install' or 'yarn install' to install node dependencies.

Enter 'node index.js' to start the application before inputting the link (localhost:3000) into Postmate.

Task 5: Building the API route should begin with:
http://localhost:3000/api/...

Task 6: Authorisation API route should begin with:
http://localhost:3000/auth/...

Login steps: 
- POST: http://localhost:3000/auth/login
- Add email (in lowercase) and password to Body request (raw - json)
- Will recieve a login message and a token
- Add x-access-token header
- Set value to the token
- Try any /api/... route.
