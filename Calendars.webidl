interface CalendarManager : EventTarget {
  Promise add(Calendar calendar);
  Promise getAll();
  Promise remove(Calendar calendar);
  Promise update(Calendar calendar);

  attribute EventHandler oncalendaradded;
  attribute EventHandler oncalendarchange;
  attribute EventHandler oncalendarremoved;
};

interface Calendar : EventTarget {
  Promise add(CalendarEvent event);
  Promise remove(CalendarEvent event);
  Promise update(CalendarEvent event);

  attribute DOMString id;
  attribute DOMString color;
  attribute DOMString name;
  attribute EventHandler oncalendareventchange;
  attribute boolean visible;  // Whether or not to display calendar's events.
};

interface CalendarEvent {
  Promise expandOccurrences(Date start, Date end);

  attribute sequence<CalendarEventAlarm> alarms;
  attribute boolean allday;
  attribute DOMString calendarId;
  attribute DOMString description;
  attribute Date end;  // utc ms
  attribute DOMString id;
  attribute DOMString location;
  attribute DOMString organizer;  // Email of event organizer.
  attribute DOMString recurrence;  // Event recurrence rule.
  attribute Date start;  // utc ms
  attribute DOMString title;
};

interface CalendarEventAlarm {
  attribute DOMString eventId;
  attribute DOMString id;
  attribute Date trigger;  // ms before
};

interface CalendarEventOccurrence {
  attribute Date end;  // utc ms
  attribute Date start;  // utc ms
};
