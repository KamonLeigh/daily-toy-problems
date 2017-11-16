/* Traversing an array */

const forLoopFunc = () => {
  var names = ['Abby', 'Ben', 'Carl', 'Dan', 'Edmund'];

  for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
  }
};

// console.log(forLoopFunc());

const forEachFunc = () => {
  var names = ['Abby', 'Ben', 'Carl', 'Dan', 'Edmund'];

  names.forEach(name => {
    console.log(name);
  });
};

// console.log(forEachFunc());

/* Projecting Arrays */
function projectArrays () {
  var newReleases = [
      {
        "id": 70111470,
        "title": "Die Hard",
        "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": [4.0],
        "bookmark": []
      },
      {
        "id": 654356453,
        "title": "Bad Boys",
        "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": [5.0],
        "bookmark": [{ id: 432534, time: 65876586 }]
      },
      {
        "id": 65432445,
        "title": "The Chamber",
        "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": [4.0],
        "bookmark": []
      },
      {
        "id": 675465,
        "title": "Fracture",
        "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": [5.0],
        "bookmark": [{ id: 432534, time: 65876586 }]
      }
    ],
    videoAndTitlePairs = [];

  newReleases.forEach(movie => {
    videoAndTitlePairs.push({id: movie.id, title: movie.title});
  });

  return videoAndTitlePairs;
}

// console.log(projectArrays());

// Write the map function
var myMap = function(array, cb) {
  var newArray = [];

  array.forEach(item => {
    newArray.push(cb(item));
  });

  return newArray;
};

// console.log(myMap([1, 2, 3, 4], function (x) { return x + 1; }));

function mapNewReleases() {
  var newReleases = [
    {
      "id": 70111470,
      "title": "Die Hard",
      "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
      "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
      "rating": [4.0],
      "bookmark": []
    },
    {
      "id": 654356453,
      "title": "Bad Boys",
      "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
      "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
      "rating": [5.0],
      "bookmark": [{ id: 432534, time: 65876586 }]
    },
    {
      "id": 65432445,
      "title": "The Chamber",
      "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
      "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
      "rating": [4.0],
      "bookmark": []
    },
    {
      "id": 675465,
      "title": "Fracture",
      "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
      "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
      "rating": [5.0],
      "bookmark": [{ id: 432534, time: 65876586 }]
    }
  ];

  return newReleases.map(movie => {
    return { id: movie.id, title: movie.title };
  });
}

// console.log(mapNewReleases());

function forEachFilter() {
  var newReleases = [
    {
      "id": 70111470,
      "title": "Die Hard",
      "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
      "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
      "rating": 4.0,
      "bookmark": []
    },
    {
      "id": 654356453,
      "title": "Bad Boys",
      "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
      "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
      "rating": 5.0,
      "bookmark": [{ id: 432534, time: 65876586 }]
    },
    {
      "id": 65432445,
      "title": "The Chamber",
      "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
      "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
      "rating": 4.0,
      "bookmark": []
    },
    {
      "id": 675465,
      "title": "Fracture",
      "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
      "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
      "rating": 5.0,
      "bookmark": [{ id: 432534, time: 65876586 }]
    }
  ];
  var videos = [];

  newReleases.forEach(movie => {
    if (movie.rating >= 5) {
      videos.push(movie);
    }
  });

  return videos;
}

// console.log(forEachFilter());

var myFilter = function(array, predicate) {
  var newArray = [];

  array.forEach(item => {
    if (predicate(item)){
      newArray.push(item);
    }
  });

  return newArray;
}

// console.log(myFilter([1, 2, 3, 4], function(x) { return x % 2 === 0}));

function findHighRatingTitle () {
  var newReleases = [
    {
      "id": 70111470,
      "title": "Die Hard",
      "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
      "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
      "rating": 4.0,
      "bookmark": []
    },
    {
      "id": 654356453,
      "title": "Bad Boys",
      "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
      "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
      "rating": 5.0,
      "bookmark": [{ id: 432534, time: 65876586 }]
    },
    {
      "id": 65432445,
      "title": "The Chamber",
      "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
      "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
      "rating": 4.0,
      "bookmark": []
    },
    {
      "id": 675465,
      "title": "Fracture",
      "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
      "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
      "rating": 5.0,
      "bookmark": [{ id: 432534, time: 65876586 }]
    }
  ];

  return newReleases
    .filter(movie => {
      if (movie.rating >= 5) {
        return movie;
      }
    })
    .map(movie => {
      return movie.id;
    });
}

// console.log(findHighRatingTitle());

function twoForEach () {
  var movieLists = [
    {
      name: "New Releases",
      videos: [
        {
          "id": 70111470,
          "title": "Die Hard",
          "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
          "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
          "rating": 4.0,
          "bookmark": []
        },
        {
          "id": 654356453,
          "title": "Bad Boys",
          "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
          "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
          "rating": 5.0,
          "bookmark": [{ id: 432534, time: 65876586 }]
        }
      ]
    },
    {
      name: "Dramas",
      videos: [
        {
          "id": 65432445,
          "title": "The Chamber",
          "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
          "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
          "rating": 4.0,
          "bookmark": []
        },
        {
          "id": 675465,
          "title": "Fracture",
          "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
          "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
          "rating": 5.0,
          "bookmark": [{ id: 432534, time: 65876586 }]
        }
      ]
    }
  ],
  allVideoIdsInMovieLists = [];

  movieLists.forEach(category => {
    category.videos.forEach(video => {
      allVideoIdsInMovieLists.push(video.id);
    });
  });

  return allVideoIdsInMovieLists;

}

// console.log(twoForEach());

// concatAll flattens
function myConcatAll(array) {
  let newArray = [];
  array.forEach(element => {
    element.forEach(item => {
      newArray.push(item);
    });
  });

  return newArray;
}

Array.prototype.concatAll = function() {
  let results = [];

  this.forEach(subArray => {
    results.push.apply(results, subArray);
  });

  return results;
};

const myMovieTree = [
  [
      'Dashi',
      'Maya'
  ],
  [
      'Miko',
      'Cuddles'
  ]
];

// console.log(myConcatAll(myMovieTree));

function flattenArrays() {
  var movieLists = [
      {
        name: "New Releases",
        videos: [
          {
            "id": 70111470,
            "title": "Die Hard",
            "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
            "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": 4.0,
            "bookmark": []
          },
          {
            "id": 654356453,
            "title": "Bad Boys",
            "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
            "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": 5.0,
            "bookmark": [{ id: 432534, time: 65876586 }]
          }
        ]
      },
      {
        name: "Dramas",
        videos: [
          {
            "id": 65432445,
            "title": "The Chamber",
            "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
            "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": 4.0,
            "bookmark": []
          },
          {
            "id": 675465,
            "title": "Fracture",
            "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
            "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": 5.0,
            "bookmark": [{ id: 432534, time: 65876586 }]
          }
        ]
      }
    ];

  var twoDimArr = movieLists.map(category => {
    return category.videos.map(video => {
      return video.id;
    });
  });

  return myConcatAll(twoDimArr);
}

// console.log(flattenArrays());

function flatten3Deep() {
  var movieLists = [
      {
        name: "Instant Queue",
        videos : [
          {
            "id": 70111470,
            "title": "Die Hard",
            "boxarts": [
              { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" },
              { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/DieHard200.jpg" }
            ],
            "url": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": 4.0,
            "bookmark": []
          },
          {
            "id": 654356453,
            "title": "Bad Boys",
            "boxarts": [
              { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg" },
              { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg" }

            ],
            "url": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": 5.0,
            "bookmark": [{ id: 432534, time: 65876586 }]
          }
        ]
      },
      {
        name: "New Releases",
        videos: [
          {
            "id": 65432445,
            "title": "The Chamber",
            "boxarts": [
              { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg" },
              { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg" }
            ],
            "url": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": 4.0,
            "bookmark": []
          },
          {
            "id": 675465,
            "title": "Fracture",
            "boxarts": [
              { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
              { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
              { width: 300, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" }
            ],
            "url": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": 5.0,
            "bookmark": [{ id: 432534, time: 65876586 }]
          }
        ]
      }
    ];


  return movieLists.map(category => {
    return category.videos.map(film => {
      return film.boxarts.filter(art => {
        return art.width === 150
      }).map(art=> {
        return {id: film.id, title: film.title, boxart: art.url}
      });
    }).concatAll();
  }).concatAll();
}

// console.log(flatten3Deep());

Array.prototype.concatMap = function(projectionFunctionThatReturnsArray) {
  return this.map(item => {
    return projectionFunctionThatReturnsArray(item);
  }).concatAll();
};

var spanishFrenchEnglishWords = [ ["cero","rien","zero"], ["uno","un","one"], ["dos","deux","two"] ];
// collect all the words for each number, in every language, in a single, flat list
var allWords = [0,1,2].
  concatMap(function(index) {
    return spanishFrenchEnglishWords[index];
  });

// console.log(allWords);

function pracConcatMap() {
  var movieLists = [
      {
        name: "Instant Queue",
        videos : [
          {
            "id": 70111470,
            "title": "Die Hard",
            "boxarts": [
              { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" },
              { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/DieHard200.jpg" }
            ],
            "url": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": 4.0,
            "bookmark": []
          },
          {
            "id": 654356453,
            "title": "Bad Boys",
            "boxarts": [
              { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg" },
              { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg" }

            ],
            "url": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": 5.0,
            "bookmark": [{ id: 432534, time: 65876586 }]
          }
        ]
      },
      {
        name: "New Releases",
        videos: [
          {
            "id": 65432445,
            "title": "The Chamber",
            "boxarts": [
              { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg" },
              { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg" }
            ],
            "url": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": 4.0,
            "bookmark": []
          },
          {
            "id": 675465,
            "title": "Fracture",
            "boxarts": [
              { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
              { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
              { width: 300, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" }
            ],
            "url": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": 5.0,
            "bookmark": [{ id: 432534, time: 65876586 }]
          }
        ]
      }
    ];

    return movieLists.concatMap(category => {
      return category.videos.concatMap(video => {
        return video.boxarts.filter(art => {
          if (art.width === 150) return {id: video.id, title: video.title, boxart: art.url}
        });
      });
    })
  }

// console.log(pracConcatMap());

// Exercise 15: Use forEach to find the largest box art
function largestBoxart() {
  var boxarts = [
    { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
    { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
    { width: 300, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" },
    { width: 425, height: 150, url: "http://cdn-0.nflximg.com/images/2891/Fracture425.jpg" }
  ];

  let largestSize = 0;
  let largestArt = {};

  boxarts.forEach(art => {
    let size = art.width * art.height;
    if (size >= largestSize) {
      largestSize = size;
      largestArt = art;
    }
  });

  return largestArt;
}

// console.log(largestBoxart());

// Exercise 16: Implement reduce()
Array.prototype.reduce = function(combiner, initialValue) {
  var counter, accumulatedValue;

  // if the array is empty, return
  if (this.length === 0) {
    return this;
  } else {
    // if the user did not pass an initial value, use the first element
    if (arguments.length === 1) {
      counter = 1;
      accumulatedValue = this[0];
    } else if (arguments.length >= 2) {
      counter = 0;
      accumulatedValue = initialValue;
    } else {
      throw 'Invalid arguments';
    }

    // Loop through the array, feeding the current value and the result of
    // the previous computation back into the combiner function until
    // we've exhausted the entire array and are left with only one value.

    for (; counter < this.length; counter++) {
      accumulatedValue = combiner(accumulatedValue, this[counter]);
    }
  }
  return [accumulatedValue];
};

// console.log([1,2,3].reduce(function(accumulatedValue, currentValue) { return accumulatedValue + currentValue; })); // === [6];
// console.log([1,2,3].reduce(function(accumulatedValue, currentValue) { return accumulatedValue + currentValue; }, 10)); // === [16];

// Exercise 17: Retrieve the largest rating.
function retrieveHighRating () {
  var ratings = [2,3,1,4,5];

  return ratings.reduce((newVal, item) => {
    if (item > newVal) {
      newVal = item;
    }
    return newVal;
  }, 0);
}

// console.log(retrieveHighRating());

// Exercise 18: Retrieve url of the largest boxart

function getLargestBoxart() {
  var boxarts = [
    { width: 425, height: 150, url: "http://cdn-0.nflximg.com/images/2891/Fracture425.jpg" },
    { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
    { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
    { width: 300, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" }
  ];

  return boxarts.reduce((largest, item) => {
    let size = item.width * item.height;
    let largestSize = item.width * item.height;

    if (size > largestSize) {
      largest = item;
    }

    return largest;
  })
  .map(property => {
    return property.url;
  });
}

// console.log(getLargestBoxart());

// Exercise 19: Reducing with an initial value

function reduceToObject() {
  var videos = [
    {
      "id": 65432445,
      "title": "The Chamber"
    },
    {
      "id": 675465,
      "title": "Fracture"
    },
    {
      "id": 70111470,
      "title": "Die Hard"
    },
    {
      "id": 654356453,
      "title": "Bad Boys"
    }
  ];

  // Expecting this output...
  // [
  //   {
  //     "65432445": "The Chamber",
  //     "675465": "Fracture",
  //     "70111470": "Die Hard",
  //     "654356453": "Bad Boys"
  //   }
  // ]
  return videos.reduce((obj, curr) => {
    obj[curr.id] = curr.title;
    return obj;
  },{});
}

console.log(reduceToObject());