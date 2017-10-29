import React from 'react'
import { List, Icon } from 'semantic-ui-react'
import Avatar from 'react-avatar'
import moment from 'moment'

export default (props) => {

  return (
    <List.Item>
      <List.Content floated='right'>
        <Icon disabled color='grey' size='big' name='circle' style={{ paddingTop: '6px' }}></Icon>
      </List.Content>
      <Avatar name={props.nickname} size={40} />
      <List.Content style={{ display: 'inline-block', paddingLeft: '6px' }}>
        <List.Header as='a' onClick={() => { console.log(props) }}>{props.nickname}</List.Header>
        <List.Description>Mis à jour {moment(props.updatedAt).fromNow()}</List.Description>
      </List.Content>
    </List.Item>
  )
}