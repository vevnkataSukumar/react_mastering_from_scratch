import { data } from "browserslist";
import { useState, useEffect } from "react";
import Picker from './select';
import UserData from './mocks/userData.json';

const Genders = ['male', 'female', 'both'];
const Nationals = ['Indian', 'Others'];

const SearchParams = () => {
    const [location, setLocation] = useState('Inamadugu, Nellore');
    const [gender, setGender] = useState('');
    const [nationality, setNationality] = useState('');
    const [data, setData] = useState(null);

    function changeLocation(e) {
        setLocation(e.target.value);
    }

    useEffect(() => {
        let timerOut = setTimeout(() => assignData(UserData), 3000);
        requestPets();
        return () => {
            clearTimeout(timerOut);
        }
    }, []);

    function assignData(users) {
        console.log('========> ', users);
        setData(users);
    }

    async function requestPets() {
        const res = await fetch(
          `http://pets-v2.dev-apis.com/pets?animal=dog&location=${location}&breed=${breed}`
        );
        const json = await res.json();
        console.log("json =======> ", json);
      }

    console.log("-=-=-==-=-=-=-=-=-=-=-=> ", data);

    return (
        <div className="search-params">
            <form>
                <label  htmlFor="location">
                    Location
                    <input id="location" value={location} onChange={changeLocation} placeholder="Location"/>
                </label>
                <label>
                    Gender
                    <Picker 
                        data={Genders}
                        onChangeOption={(e) => setGender(e.target.value)} 
                        id={'gender'}
                        value = {gender}
                    />
                </label>
                <label>
                    Nationality
                    <Picker 
                        data={Nationals}
                        onChangeOption={(e) => setNationality(e.target.value)} 
                        id={'New'}
                        value = {nationality}
                    />
                    {/* <select
                        id={"nationality"}
                        value={nationality}
                        onChange={e => setNationality(e.target.value)}
                    > 
                        <option />
                        {
                            Nationals.map(val => <option key={val} value={val}>{val}</option>)
                        }
                    </select> */}
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default SearchParams;