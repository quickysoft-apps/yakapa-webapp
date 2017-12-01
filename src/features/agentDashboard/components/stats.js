import React from 'react'
import PropTypes from 'prop-types'
import Common from '../../../common'
import ListItemTemplate from './listItemTemplate'

class Stats extends React.Component {

  static propTypes = {
    status: PropTypes.array
  }

  render() {
    
    const status = this.props.status && this.props.status.length > 0 ? this.props.status[0] : undefined
    const lastPing = status ? `${status.lastPing} ms`  : '...'
    const averagePing = status ? `(x${String.fromCodePoint(0x304)} ${Number(status.averagePing).toFixed()} ms)` : ''

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
        description: `${lastPing} ${averagePing}`
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
