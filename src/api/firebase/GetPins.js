import { reject } from 'lodash'
import firebase from '../../firebase'

const db = firebase.database()

export const GetPins = () => {
  const promise = new Promise((resolve, reject) => {
    db.ref('/features_map').once('value')
      .then(snapshot => {
        snapshot.forEach(item => {
          resolve({
            id: item.key,
            data: item.val()
          })
        })
      }, err => {
        reject(err)
      })
  })

  return promise
}