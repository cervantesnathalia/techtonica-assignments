// import * as genresAPI from "./fakeGenreService";

const events = [
  {
    _id: "10",
    title: "BlockChain",
  },
  {
    _id: "08",
    title: "San Francisco for couples",
  },
  {
    _id: "06",
    title: "Organize your finance",
  },
  {
    _id: "12",
    title: "Learn how to cook ",
  },
  {
    _id: "14",
    title: "Super Womans SF",
  },
  {


export function getEvents() {
  return events;
}


export function getEvents(id) {
  return events.find(m => m._id === id);
}

export function saveEvent(events) {
  let eventsInDB = events.find(m => m._id === event._id) || {};
  eventsInDB.name = event.name;

  if (!eventsInDB._id) {
    eventsInDB._id = Date.now();
    events.push(eventsInDB);
  }

  return eventsInDB;
}

export function deleteevent(id) {
  let eventsInDB = events.find(m => m._id === id);
  events.splice(events.indexOf(eventsInDB), 1);
  return eventsInDB;
}