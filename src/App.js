import React, {useState, useEffect} from 'react';
import './App.sass';
import axios from "axios";
import Loader from "./componets/Loader";
import Person from "./componets/Persons";

const App = () => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [age, setAge] = useState("");
  const [sex, setSex] = useState("");

  useEffect(() => {
    axios.get('https://venbest-test.herokuapp.com')
        .then(function (response) {
          setData(response.data);
          setLoading(false);
        })
        .catch(function (error) {
          console.log(error);
        });
  }, []);


  const Search = values => {
    return values.filter(value => value.lastname.toLowerCase().includes(lastname.toLowerCase())
        && value.name.toLowerCase().includes(name.toLowerCase())
        && String(value.age).includes(String(age.replace(/[^\d]/g, '')))
        && value.sex.includes(sex)
    )
  };

  console.log(sex);

  return (
      <>
        <div className="App">
          <div className="inputContainer">
            <label htmlFor="name">Имя</label>
            <input type="text"
                   id="name"
                   value={name}
                   onChange={e => {
                     setName(e.target.value)
                   }}
            />
          </div>
          <div className="inputContainer">
            <label htmlFor="serName">Фамилия</label>
            <input type="text"
                   id="serName"
                   value={lastname}
                   onChange={e => setLastname(e.target.value)}
            />
          </div>
          <div className="inputContainer">
            <label htmlFor="age">Возраст</label>
            <input type="text"
                   id="age"
                   value={age}
                   onChange={e => setAge(e.target.value)}
            />
          </div>
          <div className="checkboxContainer">
            <div>Пол:</div>
            <div className="radioButtonsContainer">
              <div className="radioButtonContainer">
                <label htmlFor="male">М</label>
                <input type="radio" name="gender" value="m" id="male"
                       onChange={e => setSex(e.target.value)}
                />
              </div>
              <div className="radioButtonContainer">
                <label htmlFor="feMale">Ж</label>
                <input type="radio" name="gender" value="f" id="feMale"
                       onChange={e => setSex(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
        {
          loading ? <Loader/> : <Person data={Search(data)}/>
        }
      </>
  );
}

export default App;
