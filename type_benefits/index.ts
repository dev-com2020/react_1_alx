let unitPrice: number
let today: Date
today = new Date()

let nToday = new Date()

today.getDate()
nToday.getDate()

// unitPrice = "Stół"

let flaga

fetch("https://swapi.dev/api/people/1")
  .then((response) => response.json())
  .then((data: unknown) => {
    if (isChar(data))
    console.log('name', data.name)
  })

  function isChar(char: any): char is {name: string} {
    return "name" in char;
  }

  function logText(text: string) {
    console.log(text)
  }

  function foreverTask(taskName: string): never {
    while (true) {
        console.log(`Doing ${taskName} over and over again...`)

    }
  }