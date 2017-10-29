import React from 'react'

import { List, Icon } from 'semantic-ui-react'
import Avatar from 'react-avatar'

export default (itemAction) => (
  (props) => (
    <List.Item>
      <List.Content floated='right'>
        <Icon disabled color='grey' size='big' name='circle' style={{ paddingTop: '6px' }}></Icon>
      </List.Content>
      <Avatar name={props.fullName} size={40} />
      <List.Content style={{ display: 'inline-block', paddingLeft: '6px' }}>
        <List.Header as='a' onClick={() => itemAction(props.email)}>{props.email}</List.Header>
        <List.Description>{props.fullName}</List.Description>
      </List.Content>
    </List.Item>
  )
)

