import React from 'react'
import { Item, Radio } from 'semantic-ui-react'

class GeneralSettings extends React.Component {


  render() {
    return (
      <Item.Group>
        <Item>
          <Item.Content>
            <Item.Header>Activer cet agent pour la collecte de données</Item.Header>
            <Item.Description>
              Vous pouvez configurer l'agent à distance pour lui indiquer si les données qu'il peut collecter vous sont envoyées.
                Vous continuerez cependant à recevoir des indications sur son fonctionnement.
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


export default GeneralSettings
