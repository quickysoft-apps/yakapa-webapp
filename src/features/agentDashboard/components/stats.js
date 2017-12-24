import React from 'react'
import PropTypes from 'prop-types'
import Common from '../../../common'
import ListItemTemplate from './listItemTemplate'
import moment from 'moment'
moment.locale('fr')

class Stats extends React.Component {

  static propTypes = {
    status: PropTypes.array,
    connected: PropTypes.bool
  }

  render() {
    
    const status = this.props.status && this.props.status.length > 0 ? this.props.status[0] : undefined
    const lastPing = status ? `${status.lastPing} ms`  : '...'
    const averagePing = status ? `(x${String.fromCodePoint(0x304)} ${Number(status.averagePing).toFixed()} ms)` : ''
    const readyness = this.props.connected ? status ? status.trusted ? 'Prêt' : "En cours d'identification" : '...' : 'Déconnecté'
    const heartColor = this.props.connected ? status ? status.trusted ? 'green' : "orange" : 'grey' : 'grey'
    const version = status ? status.version : '...'
    const fromNow = status ?  moment(status.connectionDate).fromNow() : '...'

    const stats = [
      {
        icon: 'heart',
        color: heartColor,
        header: 'Statut de la connexion',
        description: readyness
      },
      {
        icon: 'wait',
        header: 'Dernière connexion effective',
        description: fromNow
      },
      {
        icon: 'dashboard',
        header: 'Réponse au ping',
        description: `${lastPing} ${averagePing}`
      },
      {
        icon: 'info circle',
        header: 'Version',
        description: version
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
