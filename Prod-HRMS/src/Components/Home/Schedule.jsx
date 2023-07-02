import * as React from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';

import { Eventcalendar, getJson, setOptions, CalendarNav, SegmentedGroup, SegmentedItem, CalendarPrev, CalendarNext } from '@mobiscroll/react';

setOptions({
    theme: 'material',
    themeVariant: 'light'
});

function Schedule() {

    const nav = useNavigate();

    const [view, setView] = React.useState('week');
    const [myEvents, setEvents] = React.useState([]);

    useEffect(() => {
        async function fetchEvents() {
            const res = await axios.get('/api/fetchEvents')
            if(res.data == 'nav'){
                nav('/login')
            }else{
                setEvents(res.data)
            }
          }
          fetchEvents();
    }, []);

    const [calView, setCalView] = React.useState(
        {
            calendar: { type: 'week' },
            agenda: { type: 'week' }
        }
    );

    const changeView = (event) => {
        let view;
        switch (event.target.value) {
            case 'week':
                view = {
                    calendar: { type: 'week' },
                    agenda: { type: 'week' }
                };
                break;
            case 'day':
                view = {
                    agenda: { type: 'day' }
                };
                break;
        }

        setView(event.target.value);
        setCalView(view);
    }
    
    const customWithNavButtons = () => {
        return <React.Fragment>
            <CalendarNav className="cal-header-nav" />
            <div className="cal-header-picker">
                <SegmentedGroup value={view} onChange={changeView}>
                    <SegmentedItem value="week" icon="material-date-range" />
                    <SegmentedItem value="day" icon="material-view-day" />
                </SegmentedGroup>
            </div>
            <CalendarPrev className="cal-header-prev" />
            <CalendarNext className="cal-header-next" />
        </React.Fragment>;
    }

    return (
        <div className="md-switching-view-cont">
            <Eventcalendar
                renderHeader={customWithNavButtons}
                view={calView}
                data={myEvents}
            />
        </div>
    ); 
}

export default Schedule;

