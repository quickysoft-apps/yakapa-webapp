import React from 'react'
import PropTypes from 'prop-types'
import Common from '../../../common'
import ListItemTemplate from './listItemTemplate'

class Stats extends React.Component {

  static propTypes = {
    lastPing: PropTypes.array,
    averagePing: PropTypes.number
  }

  render() {
    
    const lastPing = this.props.lastPing && this.props.lastPing.length > 0 
      ? `${this.props.lastPing[0].ping} ms`
      : '...'
    const averagePing = this.props.averagePing 
      ? `(x${String.fromCodePoint(0x304)} ${Number(this.props.averagePing).toFixed()} ms)` 
      : ''

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
