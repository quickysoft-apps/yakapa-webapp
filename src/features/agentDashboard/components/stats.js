import React from 'react'
import PropTypes from 'prop-types'
import Common from '../../../common'
import ListItemTemplate from './listItemTemplate'

class Stats extends React.Component {

  static propTypes = {
    pingStats: PropTypes.object
  }

  render() {

    const lastPing = this.props.pingStats && this.props.pingStats.last ? this.props.pingStats.last[0].ping : '...'
    
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
        description: `${lastPing} ms`
      },
      {
        icon: 'info circle',
        header: 'Version',
        description: '1.7.6'
      }
    ]

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
