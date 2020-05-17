const colorList = [
  { title: 'Orange', value: '#ff7400', class: 'one' },
  { title: 'Blue', value: '#086fa1', class: 'two' },
  { title: 'Red', value: '#ff3500', class: 'three' },
  { title: 'Green', value: '#00b64f', class: 'four' },
  { title: 'Grey', value: '#b2b2b2', class: 'five' },
]
const defaultColorClass = 'five'

export const getClassByColor = color => {
  const result = colorList.filter(c => c.value == color.toLowerCase())
  return result.length == 0 ? defaultColorClass : result[0].class
}

export default colorList
