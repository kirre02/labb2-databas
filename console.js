use moviedb

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

db.movies.deleteOne( { cast: "Chris Pratt" } )

db.movies.updateMany(
    {},
    { $set: { IMDB_score: 0 }}
)

db.movies.updateOne({title: "Titanic"}, {$set: {IMDB_score: 75}})

db.movies.updateOne(
    {title: ""},
    {$push: {cast: [""]}
})

db.movies.find()

db.movies.find(
    {rated: {$in: ["PG", "PG-13"]}}
)

db.movies.find({title: "Titanic"})




