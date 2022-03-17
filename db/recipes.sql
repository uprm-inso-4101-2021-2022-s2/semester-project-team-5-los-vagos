CREATE TABLE recipes(
    recipe_id SERIAL PRIMARY KEY,
    ingredients, -- comma separated list of ingredients?
    rating, -- 0-10 float rating from other users
    creator_id, -- the id referrence to the creator
    steps -- comma separated list of the steps?
     );