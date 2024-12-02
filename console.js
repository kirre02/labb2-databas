use moviedb

//Creating a  unqiue index
db.movies.createIndex(
    {title: 1},
    {unique: true}
)

// Inserting some movies for the database
db.movies.insertMany([
    {
      title: "Jurassic World: Fallen Kingdom",
      genres: [ "Action", "Sci-Fi" ],
      runtime: 130,
      rated: "PG-13",
      year: 2018,
      directors: [ "J. A. Bayona" ],
      cast: [ "Chris Pratt", "Bryce Dallas Howard", "Rafe Spall" ],
      type: "movie"
    },
    {
        title: "Star Wars: the empire strikes back",
        genres: [ "Action", "Sci-Fi" ],
         runtime: 124,
        rated: "PG-13",
        year: 1980,
        directors: [ "Irvin Kershner" ],
        cast: [ "Mark Hmaill", "Harrison Ford", "David Prowse" ],
        type: "movie"
    }
])

// inserting two more movies here
db.movies.insertOne({
      title: "Tag",
      genres: [ "Comedy", "Action" ],
      runtime: 105,
      rated: "R",
      year: 2018,
      directors: [ "Jeff Tomsic" ],
      cast: [ "Annabelle Wallis", "Jeremy Renner", "Jon Hamm" ],
      type: "movie"
})

db.movies.insertOne({
      title: "Titanic",
      genres: [ "Romance", "Thriller" ],
      runtime: 194,
      rated: "PG-13",
      year: 1998,
      directors: [ "James Cameron" ],
      cast: [ "Leonardo DiCaprio", "Kate Winslet" ],
      type: "movie"
})

//check if unique index works
db.movies.insertOne({
      title: "Titanic",
      genres: [ "Romance", "Thriller" ],
      runtime: 194,
      rated: "PG-13",
      year: 1998,
      directors: [ "James Cameron" ],
      cast: [ "Leonardo DiCaprio", "Kate Winslet" ],
      type: "movie"
})

//deleting movie where Chris Pratt is included
db.movies.deleteOne( { cast: "Chris Pratt" } )

//getting all the movies that have been added
db.movies.find()

//find the database by title
db.movies.find({title: "Tag"})

//adding a new field to every movie that have been add
db.movies.updateMany(
    {},
    { $set: { IMDB_score: 0 }}
)

//updating the newly created field so that the movies have scores
db.movies.bulkWrite([
    {
        updateOne: {
            filter: {title: "Jurassic World: Fallen Kingdom"},
            update: {$set: {IMDB_score: 65}}
        }
    },
      {
        updateOne: {
            filter: {title: "Titanic"},
            update: {$set: {IMDB_score: 70}}
        }
    },
      {
        updateOne: {
            filter: {title: "Tag"},
            update: {$set: {IMDB_score: 50}}
        }
    },
      {
        updateOne: {
            filter: {title: "Star Wars: the empire strikes back"},
            update: {$set: {IMDB_score: 80}}
        }
    },
])

// Updating the score field for the movie Titanic
db.movies.updateOne({title: "Titanic"}, {$set: {IMDB_score: 75}})

//search by number and sort them ascending
db.movies.find({IMDB_score: {$gt: 50}}, {},{sort: {IMDB_score: 1}})

// counting how many documents that contains the rating of PG and PG-13
db.movies.countDocuments({rated: {$in: ["PG", "PG-13"]}})

//find a movie and return the directors and cast field
db.movies.find({title: "Star Wars: the empire strikes back"}, {directors: 1, cast: 1})

//Returns all the titles and IMDB_scores for each movie.
db.movies.find({}, {title: 1, IMDB_score: 1})


db.movies.updateOne(
    {title: "Titanic"},
    {$push: {cast: "Billy Zane"}}
 )

db.movies.find({title:"Titanic"})


db.dropDatabase()
