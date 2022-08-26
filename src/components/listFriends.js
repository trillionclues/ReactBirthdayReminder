import React, { useState } from 'react'
import { friends } from './friends'
import '../styles.css'

const ListFriends = () => {
  const [profile, setProfile] = useState(friends)
  const [btn, setBtn] = useState('Remove All!')

  // remove individual profiles
  const removeFriend = (id) => {
    let newPerson = profile.filter((person) => person.id !== id)
    // let newProfile = profile.map((newList) => newList.length)

    setProfile(newPerson)
  }

  // const finalBirthday = () => {
  //   if (removeFriend !== friends) {
  //     setBtn('All Done 🎉')
  //   }
  // }

  // remove multiple profile
  const removeAll = () => {
    if (profile && btn) {
      setProfile([])
      setBtn('All Done 🎉')
    }
  }

  return (
    <>
      {profile.map((friend) => {
        const { id, name, age, image } = friend

        return (
          <article
            key={id}
            className='profile'
            onClick={() => removeFriend(id)}
          >
            <img src={image} alt={name} />
            <div className='details'>
              <h4>{name}</h4>
              <p>{age}yrs</p>
            </div>
          </article>
        )
      })}
      <button onClick={removeAll}>{btn}</button>
    </>
  )
}

export default ListFriends
