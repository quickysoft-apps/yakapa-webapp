import React from 'react'
import { Item, Radio } from 'semantic-ui-react'

class Settings extends React.Component {


  render() {
    return (
      <Item.Group>
        <Item>
          <Item.Content>
            <Item.Header>Activer la collecte de données</Item.Header>
            <Item.Description>
              Vous pouvez configurer l'agent à distance pour lui indiquer si les données qu'il peut collecter vous sont envoyées.
              Même si la collecte n'est pas activée, vous continuerez à recevoir des indications sur le fonctionnement de l'agent.
              </Item.Description>
            <Item.Extra>
              <Radio toggle checked disabled />
            </Item.Extra>
          </Item.Content>
        </Item>
      </Item.Group>
    )
  }

}


export default Settings
