import { ADD_FRIEND, UPDATE_FRIEND, DELETE_FRIEND, SET_FRIENDS } from './actionTypes.js'
import axios from 'axios'

// Not using this one, as it doesn't get friends' goals
// const _addFriend = newFriend => ({ type: ADD_FRIEND, newFriend })

// placeholder, not used
// const updateFriend = (friendId, changes) => ({ type: UPDATE_FRIEND, friendId, changes })

const deleteFriend = friendId => ({ type: DELETE_FRIEND, friendId })
export const setFriends = friends => ({ type: SET_FRIENDS, friends })

export const addFriend = friend => dispatch => {
  return axios.post(`/api/friends/${friend.id}`)
    .then(res => res.data)
    .then(() => dispatch(fetchFriends()))
}

export const fetchFriends = () => dispatch => {
  return axios.get('/api/friends')
    .then(res => res.data)
    .then(friends => dispatch(setFriends(friends)))
}

export const removeFriend = (id) => dispatch => {
  return axios.delete(`/api/friends/${id}`)
    .then(res => res.data)
    .then(() => dispatch(deleteFriend(id)))
}
