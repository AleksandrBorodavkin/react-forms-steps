import React, {useState} from 'react';
import ActivityList from './ActivityList';
import addActivityToList from '../utils/addActivityToList';

const isDate = (str) => /^[0-3]+[1-9]+\.[0-1]+[1-9]+\.[2-9]+[0-9]+[2-9]+[2-9]+$/.test(str);
const isWay = (str) => /^[0-9]?[0-9]?\.?$/.test(str);

export default function ActivityInputForm() {
    const [stateDate, setStateDate] = useState('');
    const [stateWay, setStateWay] = useState('');
    const [stateActivityList, setStateActivityList] = useState([]);

    const deleteActivity = (id) => {
        const newActivityList = stateActivityList.filter((activity) => !(id === activity.id));
        setStateActivityList(newActivityList);
    };

    const handlerChangeDate = ({target}) => {
        setStateDate(target.value);
    };

    const handlerChangeWay = ({target}) => {
        setStateWay(Number(target.value));
    };

    const createActivity = (e) => {
        e.preventDefault();
        if (!isDate(stateDate)) {
            alert('Формат даты ни верный');
            return;
        }
        if (!isWay(stateWay)) {
            alert('Диапозон от 1 до 99');
            return;
        }
        const newActivity = {
            date: stateDate,
            way: stateWay,
            id: Math.random(),
        };
        setStateActivityList(addActivityToList(stateActivityList, newActivity));
        setStateDate('');
        setStateWay('');
    };

    return (
        <main className="continer">
            <form className="ActivityInputForm__form" onSubmit={createActivity}>
                <div className="ActivityInputForm__wrapperInput">
                    <label className="ActivityInputForm__lable" htmlFor="date">Дата
                        (ДД.ММ.ГГГГ)</label><br/>
                    <input className="ActivityInputForm__input" type="text"
                           id="date" placeholder="01.02.2022" value={stateDate}
                           onChange={handlerChangeDate}/>
                </div>
                <div className="ActivityInputForm__wrapperInput">
                    <label className="ActivityInputForm__lable" htmlFor="way">Пройдено
                        км</label><br/>
                    <input className="ActivityInputForm__input" type="text"
                           placeholder="max 99 км" id="way" value={stateWay}
                           onChange={handlerChangeWay}/>
                </div>
                <div className="ActivityInputForm__wrapperInput">
                    <button className="ActivityInputForm__button"
                            type="submit">OK
                    </button>
                </div>
            </form>
            <ActivityList stateActivityList={stateActivityList}
                          deleteActivity={deleteActivity}/>
        </main>

    );
}
