function addLocalStorageSixteen() {
    localStorage.setItem(
      "objLocal",
      JSON.stringify({
        city: "Лондон",
        country: "Великобритания",
        population: 8900000,
        language: "английский",
      })
    );
  }
  
  function renderString (){
    const obj = JSON.parse(localStorage.getItem('objLocal'))
    // cannot get heys with ''
    // const result = `Город ${obj['city']} имеет население ${obj['population']} человек`

    const result = `Город ${obj.city} имеет население ${obj.population} человек`;
    document.querySelector('.practicum16').textContent = result
  }
  addLocalStorageSixteen()
  renderString()


  function addLocalStorageSixteen() {
    localStorage.setItem(
      "objLocal",
      JSON.stringify({
        city: "Лондон",
        country: "Великобритания",
        population: 8900000,
        language: "английский",
      })
    );
  }
  function renderString (){
    const obj = JSON.parse(localStorage.getItem("objLocal"));
    document.querySelector(
      ".practicum16"
    ).textContent = `Город ${obj.city} имеет население ${obj.population} человек`;
  }
  addLocalStorageSixteen()
  renderString()





  // ???

  const valueId = document.querySelector('#task22').value///находим нужный селектор и получаем его значение
	if(!valueId || valueId === '') { ///проверяем выбрал ли пользователь индекс элемента.
      console.log('no value')
      return
    }
	const newArr = arr.filter((item,index)=> index  !== +valueId) //логика удаления элемента из массива.



// ??? FormData

{/* <div class="html">
      <form id="task23">
        <label>User name</label>
        <input type="text" name="user-name" />
        <label>Email</label>
        <input type="email" name="email" />
        <label>Password</label>
        <input type="password" name="password" />
        <label>id</label>
        <input type="number" name="userId" />
      </form>
    </div> */}

    // {
    //     "task23": [
    //       {
    //         "user-name": "Alex",
    //         "email": "alex3454@gmail.com",
    //         "password": "qwerty",
    //         "userId": 324234
    //       },
    //       {
    //         "user-name": "Josh",
    //         "email": "23josh17@gmail.com",
    //         "password": "qazzaq",
    //         "userId": 34732847
    //       },
    //       {
    //         "user-name": "1",
    //         "email": "1",
    //         "password": "1",
    //         "userId": "1"
    //       }
    //     ]
    //   }

function addNewUserLocalStorage(){
	const myForm = document.querySelector('#task23')////получаем форму по айди
	const arr = JSON.parse(localStorage.getItem('task23')) ///получаем данные из localStorage.
	const user = {} //объект, в который будем складывать данные из формы 
	const formData = new FormData(myForm) // получаем обьект формы
  console.log(formData)
	for(let [name,value] of formData){
		//создаем условие, при котором цикл и форма должны останавливаться и в случае выполнение условия выводим сообщение в консоль.
      if (value === '') {
        console.log('no required variables')
        return
      }
		//заполняем обьект данными из формы
      user[name] = value
	}
	//добавляем в полученный массив новый обьект
  arr.push(user)
	//записываем в localStorage
  localStorage.setItem('task23', JSON.stringify(arr))
}

addNewUserLocalStorage()


// ?? (_, i)
${Array.from({length: 5}, (_, i) => `
    <div class="heart" data-rating="${i + 1}">♥️</div>
`).join('')}
