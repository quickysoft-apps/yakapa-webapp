import React from 'react'
import { List, Icon } from 'semantic-ui-react'
import Avatar from 'react-avatar'
import moment from 'moment'

export default (onClick) => (
  (item, index) => (
    <List.Item key={index}>
      <List.Content floated='right'>
        <Icon disabled color='grey' size='big' name='circle' style={{ paddingTop: '2px' }}></Icon>
      </List.Content>
      <Avatar name={item.nickname} size={32} />
      <List.Content style={{ display: 'inline-block', paddingLeft: '6px' }}>
        <List.Header as='a' onClick={() => onClick(item)}>{item.nickname}</List.Header>
        <List.Description>Mis à jour {moment(item.updatedAt).fromNow()}</List.Description>
      </List.Content>
    </List.Item>
  )
)
