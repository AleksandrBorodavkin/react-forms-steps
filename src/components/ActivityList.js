import ActivityItem from './ActivityItem';

export default function ActivityList(props) {
    const {stateActivityList, deleteActivity} = props;
    return (
        <div className="ActivityList__wrapper">
            <header className="ActivityList__header">
                <div className="ActivityList__headerTitle">Дата (ДД.ММ.ГГ)</div>
                <div className="ActivityList__headerTitle">Пройдена км</div>
                <div className="ActivityList__headerTitle">Действия</div>
            </header>
            <ul className="ActivityList__list">
                {stateActivityList.map((state) => (
                    <ActivityItem
                        state={state}
                        key={state.id}
                        deleteActivity={deleteActivity}
                    />
                ))}

            </ul>

        </div>

    );
}
