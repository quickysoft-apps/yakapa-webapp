import React from 'react'
import PropTypes from 'prop-types'

import { Image, List } from 'semantic-ui-react'

import ItemListSkeleton from '../images/itemListSkeleton.png'

class ItemList extends React.Component {

  static propTypes = {
    itemTemplate: PropTypes.func.isRequired,
    skeleton: PropTypes.string,
    loading: PropTypes.bool.isRequired,
    items: PropTypes.array.isRequired,
  }

  static defaultProps = {
    skeleton: ItemListSkeleton
  }

  _buildListItems(items) {
    const listItems = []
    items.map((item, index) => listItems.push(item))
    return (
      <List divided verticalAlign='middle'>
        {listItems}
      </List>
    )
  }

  _buildSkeleton(count) {
    const listItems = []
    for (var index = 0; index < count; index++) {      
      listItems.push(<Image key={index} src={this.props.skeleton} size='medium' centered spaced />)
    }
    return listItems
  }

  _buildItems(items) {
    const listItems = []
    items.map((item, index) => listItems.push(this.props.itemTemplate(item, index)))
    return listItems
  }

  render() {
    const listItems = this.props.loading ? this._buildSkeleton(5) : this._buildItems(this.props.items)
    return (
      <div>
        {this._buildListItems(listItems)}
      </div>
    )
  }

}

export default ItemList