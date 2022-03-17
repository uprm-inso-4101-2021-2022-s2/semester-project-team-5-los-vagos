CREATE TABLE users(
    usr_id SERIAL PRIMARY KEY, 
    usr_name, -- text that is the user's username
    usr_password, -- text that is the user's password
    saved_recipes -- this will be a referrence to a 
                  --foreign key recipe id, maybe comma separated list?
);