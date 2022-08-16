- Bug #1: Doesn't test for or give enough information if incorrect data is sent for /auth/register
# Bug Fix: Added jsonschema & schema validation on line 22 in auth.js in routes folder and added a test, line 78

- Bug #2: Still returns token if incorrect username/password are submitted for /auth/login
# Bug Fix: Used await on the User.authenticate on line 41 in auth.js in routes folder and added 2 test, line 94-113 in routes.test.js

- Bug #3:/users route is showing email & phone
# Bug Fix: Removed email & phone from the db query in /model/user.js on line 82

- Bug #4: Doesnt throw error if user not found on /users/:username
# Bug Fix: Threw error on line 116 in /routes/user.js

- Bug #5: /auth/register does not allow for admin registration
# Bug Fix: Added admin to parameters of /auth/register route & in the user model on line 29, and added test on line 59

- Bug #6: authUser middleware didnt verify token
# Bug Fix: Added jwt.verify to authUser middleware

- Bug #7: only admin can use users patch route
# Bug Fix: added req.curr_username to requireAdmin and made delete route throw error if not admin and added test on line 221

- Bug #8: does not throw 404 when trying to patch not-allowed-fields
# Bug Fix: added throw error on line 80 of user.js in routes folder



- reg login
- rogerrabbit, carrot

- reg login
- johndoe, password

- admin login
- test_user, test_pass
