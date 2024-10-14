const str = `
010-1234-4545
thesecon@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=fromzen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`

console.log(
  str.match(/(?<=\@).{1,}/g)
)
