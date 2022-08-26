import React from 'react'
import { friends } from './components/friends'
import ListFriends from './components/listFriends'
import './styles.css'

function App() {
  return (
    <main>
      <section className='container'>
        <h3>{friends.length} friends celebrating today! </h3>
        <ListFriends />
        {/* <button onClick={() => setProfile([])}>All Done!</button> */}
      </section>
    </main>
  )
}

export default App
