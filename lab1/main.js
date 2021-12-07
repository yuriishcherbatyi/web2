const task1 = require('./task1')
const task2 = require('./task2')
const task3 = require('./task3')
const task4 = require('./task4')
const task5 = require('./task5')
const task6 = require('./task6')
const task7 = require('./task7')
const methods = require('./task7methods')

console.log(task1.GenerateHexadecimalNumber(3))
console.log('__________________________________________________________________')

console.log(task2.InsertStringInto("Yurii", 4, "Shcherbatyi"));
console.log('__________________________________________________________________')

{
  const array = [3, 8, 9, 2, 5, 8, -4, 6, -2]
  task3.InsertionSort(array)
  console.log(array)
}
console.log('__________________________________________________________________')

{
  const selection = [3, 5, 6, 'top', 1, 'top', 'bot', 1, 'top']
  console.log(task4.MostFrequentItemCount(selection))
}
console.log('__________________________________________________________________')

console.log(task5.DaysFromStart('1/1/2020', '2/2/2020'))
console.log('__________________________________________________________________')

console.log('DFS:')
task6.RecursiveTreeSearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 0)
console.log('__________________________________________________________________')

const stationsCollection = []
methods.AddStation(stationsCollection, new task7.SpaceStation(0, 'S1'))
methods.AddStation(stationsCollection, new task7.SpaceStation(1, 'S2'))
methods.AddStation(stationsCollection, new task7.SpaceStation(2, 'S3'))
methods.AddStation(stationsCollection, new task7.SpaceStation(10, 'S4'))

methods.EditingStation(stationsCollection, 2, new task7.SpaceStation(11, 'ES3'))

methods.DeleteStation(stationsCollection, 3)

console.log(stationsCollection)

methods.FindStation(stationsCollection, 1)
methods.FindStation(stationsCollection, 11)
methods.FindStation(stationsCollection, 777)

console.log('__________________________________________________________________')
const planetCollection = []
methods.AddStation(planetCollection, new task7.Planet(0, 'P1'))
methods.AddStation(planetCollection, new task7.Planet(1, 'P2', stationsCollection[2]))
methods.AddStation(planetCollection, new task7.Planet(2, 'P3'))
methods.AddStation(planetCollection, new task7.Planet(10, 'S4'))

methods.EditingStation(planetCollection, 0, new task7.Planet(11, 'EP1'))

methods.DeleteStation(planetCollection, 3)

console.log(planetCollection)

methods.FindStation(planetCollection, 1)
methods.FindStation(planetCollection, 777)

methods.PrintStations(planetCollection[2])
methods.PrintStations(planetCollection[1])

console.log('__________________________________________________________________')
const CargoCollection = []
methods.AddCargo(CargoCollection, new task7.Cargo(0, 'C1', 10000))
methods.AddCargo(CargoCollection, new task7.Cargo(1, 'C2', 15000))
methods.AddCargo(CargoCollection, new task7.DeliveredCargo(2, 'DC3', 20000, '20-10-2021'))
methods.AddCargo(CargoCollection, new task7.Cargo(10, 'L3'))

methods.EditingCargo(CargoCollection, 1, new task7.Cargo(11, 'EC2', 11111))

methods.DeleteCargo(CargoCollection, 3)

console.log(CargoCollection)