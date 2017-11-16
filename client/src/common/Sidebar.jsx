import React from 'react'
import { NavLink } from 'react-router-dom'

import List, { ListItem, ListItemText } from 'material-ui/List'
import Divider from 'material-ui/Divider'

const SideBar = props => {
  const { viewPaths } = props
  return (
    <List>
      {viewPaths.map(_ => {
        return (
          <ListItem button component={NavLink} to={_.path}>
            <ListItemText disableTypography primary={_.name} />
          </ListItem>
        )
      })}
      <Divider />
    </List>

  )
}

export default SideBar
