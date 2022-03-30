CREATE TABLE recipes(
    recipe_id SERIAL PRIMARY KEY,
    recipe_name UNIQUE NOT NULL,
    ingredients TEXT ARRAY, -- comma separated list of ingredients?
    rating DECIMAL, -- 0-10 float rating from other users
    creator_id INTEGER, -- the id referrence to the creator
    steps TEXT,-- comma separated list of the steps?
    FOREIGN KEY (creator_id) REFERRENCES users (usr_id)
     );