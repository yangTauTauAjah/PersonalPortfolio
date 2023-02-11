const myDB = indexedDB.open('myDB', 1)
const data = [
  {
    name: 'john',
    address: '123 das fasiaw',
    age: 25
  },
  {
    name: 'jane',
    address: '123 das fasiaw',
    age: 12
  },
  {
    name: 'annie',
    address: '123 das fasiaw',
    age: 53
  },
  {
    name: 'max',
    address: '123 das fasiaw',
    age: 15
  },
  {
    name: 'karl',
    address: '123 das fasiaw',
    age: 42
  },
  {
    name: 'niece',
    address: '123 das fasiaw',
    age: 32
  },
]
let store;

myDB.onerror = (err) => {

  console.error(err)

}

myDB.onsuccess = (e) => {

  const db = e.target.result
  console.log('success')
  /* db.transaction('member', 'readwrite').objectStore('member').getAll().onsuccess = (e) => {
    console.log(e.target.result)
  } */

}

myDB.addEventListener('upgradeneeded', e => {
  console.log(e)
  const db = e.target.result
  const objectStore = db.createObjectStore('member', {keyPath: 'id'})
  db.createIndex('age', 'age', {unique: false})
  console.log('not completed yet')

  objectStore.transaction.oncomplete = (event) => {
    console.log('open transaction completed')
  }
})

/* setTimeout(() => {

  console.log('test')

  const v2 = indexedDB.open('myDB', 2)

  v2.onerror = (err) => {
  
    console.error(err)
  
  }

  v2.addEventListener('upgradeneeded', e => {
    console.log(e)
    const db = e.target.result
    store.createIndex('age', 'age', {unique: false})
    console.log('not completed yet')
  
    db.transaction.oncomplete = (event) => {
      console.log('open transaction completed')
    }
  })

}, 3000) */