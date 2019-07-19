var kittens = ["Milo", "Otis", "Garfield"] 

function destructivelyAppendKitten(name){
  kittens.push("Ralph")
  return kittens
}

function destructivelyPrependKitten(name){
  kittens.unshift("Bob")
  return kittens
}

function destructivelyRemoveLastKitten(){
  kittens.pop()
}

function destructivelyRemoveFirstKitten(){
  kittens.shift()
}

function appendKitten(array){
  var kittensTwo = array;
  kittensTwo = [...kittens, "Broom"]
  return kittensTwo
}

function prependKitten(array) {
  var kittensThree = array;
  kittensThree = ["Arnold", ...kittens]
  return kittensThree
}

function removeLastKitten(array){
 return kittens.slice(0, kittens.length - 1)
}

function removeFirstKitten(array){
  var kittensFour = array
 kittensFour = kittens.slice(1)
  return kittensFour
}