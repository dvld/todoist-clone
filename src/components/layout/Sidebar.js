import React from "react";
import { 
  FaChevronDown,
  FaInbox,
  FaRegCalendarAlt,
  FaRegCalendar,
} from "react-icons/fa";

export const Sidebar = () => (
  <div className="sidebar" data-testId="sidebar">
    <ul className="sidebar__generic">
      <li><FaInbox /> Inbox</li>
      <li><FaRegCalendar /> Today</li>
      <li><FaRegCalendarAlt /> Next 7 days</li>
    </ul>

    <div className="sidebar__middle">
      <FaChevronDown />
      <h2>Projects</h2>
    </div>

    <ul className="sidebar__projects">
      Projects will be here
    </ul>

  </div>
);