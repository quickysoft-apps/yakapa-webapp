import React from 'react'
import Common from '../../../common'
import ListItemTemplate from './listItemTemplate'

//Stats en dur ici mais à récupérer plus tard de l'agent lui-même
const stats = [
  {
    icon: 'heart',
    color: 'green',
    header: 'Statut de la connexion',
    description: 'Prêt'
  },
  {
    icon: 'wait',
    header: 'Dernière connexion effective',
    description: 'il y a 3 jours'
  },
  {
    icon: 'dashboard',
    header: 'Réponse au ping',
    description: '163 ms'
  },
  {
    icon: 'info circle',
    header: 'Version',
    description: '1.7.6'
  }
]

class Stats extends React.Component {

  render() {

    const itemTemplate = ListItemTemplate((ownProps) => {
      this.props.itemAction()
    })

    return (
      <Common.Components.ItemList
          loading={false}
          items={stats}
          itemTemplate={itemTemplate} />
    )
  }

}


export default Stats
