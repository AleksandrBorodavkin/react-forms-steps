import React from 'react';


export default function AcnivityItem({state, deleteActivity}) {
    const {date, way} = state;
    return (
        <li className="AcnivityItem__item">
            <div className="AcnivityItem__date">{date}</div>
            <div className="AcnivityItem__way">{way}</div>
            <div className="AcnivityItem__control">
                <button className="AcnivityItem__deleteItem" type="button"
                        onClick={() => deleteActivity(state.id)}>
                    <span className="material-icons highlight_off">clear</span>
                </button>
            </div>

        </li>
    );
}



