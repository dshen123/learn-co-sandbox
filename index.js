
function add (x, y){
  return 'x + y'
}
add(1, 2)

function say(greeting, firstName) {
  return (`${greeting}, ${firstName}!`)
}
say("Hello", "Sofia")
function say(greeting, firstName) {
  (`${greeting}, ${firstName}!`)
}
say("Hello", "Sofia")
function say(greeting, firstName) {
  return `${greeting}, ${firstName}!`
  console.log('I was called!')
}
say("Howdy", "partner")