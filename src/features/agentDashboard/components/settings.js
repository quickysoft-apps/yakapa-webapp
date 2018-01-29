import React from 'react'
import { Item, Radio, Form } from 'semantic-ui-react'
import PropTypes from 'prop-types'

class Settings extends React.Component {

  static propTypes = {
    nickName: PropTypes.string,
    tag: PropTypes.string
  }

  _handleSubmit = (e, p) => {
    e.preventDefault()
    const form = e.target
    this.props.changeSettings({
      settings: { nickname: form.identifier.value },
      to: this.props.tag
    })
  }

  render() {

    return (
      <Item.Group divided>
        <Item>
          <Item.Content>
            <Item.Header>Identification de l'agent</Item.Header>
            <Item.Description>Vous pouvez changer le nom avec lequel vous pouvez reconnaître cet agent parmi plusieurs autres
            agents installés sur un site. Vous ne pouvez en revanche modifier l'email de contact de l'utilisateur
            final qui possède cet agent.
          </Item.Description>
            <Item.Extra>
              <Form method='post' onSubmit={this._handleSubmit} >
                <Form.Field width="eight">
                  <input type="text" name="identifier" placeholder='Agent Secret 007' required defaultValue={this.props.nickName}></input>
                </Form.Field>
                <Form.Group>
                  <Form.Button primary type='submit'>Enregistrer</Form.Button>
                </Form.Group>
              </Form>
            </Item.Extra>
          </Item.Content>
        </Item>
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
