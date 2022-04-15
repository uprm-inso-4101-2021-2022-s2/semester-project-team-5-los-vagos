# Dine In
-------------------------------
### Notes
-------------------------------
In order to see changes locally, restart the server. Otherwise, install nodemon.
The credentials may change for the db connections.
`npm run dev`
`npm run script_name`

Yes, wierd signup to signin behavior. I just want to focus on gettinghtis this to work.
Then I'll make it pretty and organized.

For the purposes if I did not know what fields where going to be used to be
used for the signin and signup page I used email as the usr_name db field. Thus, for
the server code the email is used for user name.


### Videos
queries
15:51
https://www.youtube.com/watch?v=_Mun4eOOf2Q

#### psql session
56/42
https://www.youtube.com/watch?v=vxu1RrR0vbw
Lot of the funny stuff regarding sessions happened at about the 1hr mark of the video.

### Authentication
- We will use sessions and cookies.
- passport and passport-local are used to store logged in users details in a cookie.

a cookie is created when a session var is modified, this id is shared between browser and server

mongo session
https://www.youtube.com/watch?v=TDe7DRYK8vU

# TODO
I know i have flooded this repo with TODOs 
(I just want an easy way to look for what to do for the next steps).
Remember to use th errors list variable inside the ejs files!
