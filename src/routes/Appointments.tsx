import HeaderTitle from "@/components/ui/header-title";
import {
    CalendarNav,
    CalendarNext,
    CalendarPrev,
    CalendarToday,
    Eventcalendar,
    getJson,
    MbscCalendarEvent,
    MbscEventcalendarView,
    MbscEventClickEvent,
    Segmented,
    SegmentedGroup,
} from "@mobiscroll/react";
import "@mobiscroll/react/dist/css/mobiscroll.min.css";
import { ChangeEvent, useCallback, useEffect, useMemo, useState } from "react";

const Appointments = () => {
    const [myEvents, setEvents] = useState<MbscCalendarEvent[]>([]);
    const [isToastOpen, setToastOpen] = useState<boolean>(false);
    const [toastText, setToastText] = useState<string>();
    const [calendarType, setCalendarType] = useState("months");

    const handleEventClick = useCallback((args: MbscEventClickEvent) => {
        setToastText(args.event.title);
        setToastOpen(true);
    }, []);

    const changeView = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        setCalendarType(event.target.value);
    }, []);

    useEffect(() => {
        getJson(
            "https://trial.mobiscroll.com/events/?vers=5",
            (events) => {
                setEvents(events);
            },
            "jsonp"
        );
    }, []);

    const calendarHeader = useCallback(
        () => (
            <>
                <CalendarNav />
                <div className="quarter-year-header-picker">
                    <SegmentedGroup value={calendarType} onChange={changeView}>
                        <Segmented value="day">Day</Segmented>
                        <Segmented value="week">Week</Segmented>
                        <Segmented value="month">Month</Segmented>
                        <Segmented value="quarter">Quarter</Segmented>
                        <Segmented value="year">Year</Segmented>
                    </SegmentedGroup>
                </div>
                <CalendarPrev />
                <CalendarToday />
                <CalendarNext />
            </>
        ),
        [calendarType, changeView]
    );

    const myView = useMemo<MbscEventcalendarView>(
        () =>
            calendarType === "day"
                ? {
                      timeline: {
                          type: "day",
                      },
                  }
                : calendarType === "week"
                  ? {
                        calendar: {
                            type: "week",
                            size: 1,
                        },
                    }
                  : calendarType === "month"
                    ? {
                          calendar: {
                              type: "month",
                              size: 1,
                          },
                      }
                    : calendarType === "quarter"
                      ? {
                            calendar: {
                                type: "month",
                                size: 3,
                            },
                        }
                      : {
                            calendar: {
                                type: "year",
                            },
                        },
        [calendarType]
    );

    const calHeight = useMemo<string>(() => (calendarType === "quarter" ? "auto" : "height:100%"), [calendarType]);

    return (
        <div className="h-[calc(100vh-10rem)] overflow-y-auto">
            <HeaderTitle title="Appointments" />
            <Eventcalendar
                clickToCreate={false}
                dragToCreate={false}
                dragToMove={false}
                dragToResize={false}
                eventDelete={false}
                data={myEvents}
                onEventClick={handleEventClick}
                renderHeader={calendarHeader}
                view={myView}
                height={calHeight}
            />
        </div>
    );
};

export default Appointments;
