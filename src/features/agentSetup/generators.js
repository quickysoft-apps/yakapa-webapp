import faker from 'faker'
import uuid from 'uuid'

const capitalize = (s) => (s[0].toUpperCase() + s.slice(1))

const generateAgentNickname = () => {
  faker.locale = 'en'
  const first = faker.commerce.productAdjective()
  const second = faker.name.firstName()
  return `${capitalize(first)} ${second}`
}

const generateEndUserName = () => {
  faker.locale = 'fr'
  const first = faker.name.firstName()
  const second = faker.name.lastName()
  return `${capitalize(first)} ${second}`
}

const generateGuid = () => {
  return uuid.v4()
}

export default {
  generateAgentNickname,
  generateEndUserName,
  generateGuid
}