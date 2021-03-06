/*
You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.

Your task is to return either:

true if all developers in the list code in the same language; or
false otherwise.
For example, given the following input array:

var list1 = [
  { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'JavaScript' },
  { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'JavaScript' },
  { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 65, language: 'JavaScript' },
];
your function should return true.

Notes:

The strings representing a given language will always be formatted in the same way (e.g. 'JavaScript' will always be formatted will upper-case 'J' and 'S'
The input array will always be valid and formatted as in the example above.
*/

/*
O: Boolean
I: Array of objects
C: Linear
E:

  INPUT                                               OUTPUT
  ------------------------------------------------------------
  []                                                  true
  [
    {language: 'Ruby'},
    {language: 'Ruby'}
  ]                                                    true
  [
    {language: 'Ruby'},
    {language: 'JavaScript'}
  ]                                                    false


  GENERAL PLAN/BRAINSTORM
  ------------------------
  Iterate through given lost
  Set language from first element as language
  Use every to make sure all have same language

  PSEUDOCODE
  ----------
  Set const language as list[0].language
  Return every with a callback
  The callback will return if element's language equals language
*/

function isSameLanguage(list) {
  const language = list[0].language;

  return list.every((person) => {
    return (person.language === language);
  });
}

// Test
console.log(isSameLanguage(
  [
    {language: 'Ruby'},
    {language: 'Ruby'}
  ]
)); // true

console.log(isSameLanguage(
  [
    {language: 'Ruby'},
    {language: 'JavaScript'}
  ]
)); // false

console.log(isSameLanguage(
  [
    { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'JavaScript' },
    { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'JavaScript' },
    { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 65, language: 'JavaScript' }
  ]
)); // true