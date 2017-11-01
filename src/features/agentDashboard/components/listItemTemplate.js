import React from 'react'
import { List } from 'semantic-ui-react'

export default (onClick) => (
  (item, index) => (
    <List.Item key={index}>
      <List.Icon inverted circular name={item.icon} size="large" color={item.color ? item.color : 'blue'}/>
      <List.Content>
        <List.Header as={item.step ? "a" : "h4"}>{item.header}</List.Header>
        <List.Description>{item.description}</List.Description>
      </List.Content>
    </List.Item>
  )
)