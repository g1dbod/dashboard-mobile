import { CalendarCheck2, Home, ListTodo, Settings, Settings2, StickyNote } from "lucide-react";
import { ISidebarUrl } from "./sidebar_urls.types";
import { urls } from "./urls.data";

export const sidebar_urls: ISidebarUrl[] = [
  {
    title: 'home',
    url: urls.HOME,
    icon: Home
  },
  {
    title: 'todo',
    url: urls.TODO,
    icon: ListTodo
  },
  {
    title: 'notes',
    url: urls.NOTES,
    icon: StickyNote
  },
  {
    title: 'calendar',
    url: urls.CALENDAR,
    icon: CalendarCheck2
  },
  {
    title: 'settings',
    url: urls.SETTINGS,
    icon: Settings2
  },
]