export interface Todo {
  id: number;
  content: string;
}

export interface Meta {
  totalCount: number;
}

export interface WeekDay {
  morning: boolean;
  evening: boolean;
  afternoon: boolean;
  howManyDaysMonth: number;
}

export interface Availability {
  Monday: WeekDay;
  Tuesday: WeekDay;
  Wednesday: WeekDay;
  Thursday: WeekDay;
  Friday: WeekDay;
  Saturday: WeekDay;
  Sunday: WeekDay;
}

export interface ApiResponse {
  data: any;
}

export interface Congregation {
  id: number;
  name: string;
  active: boolean;
}

export interface Publisher {
  id: number;
  name: string;
  phone: string;
  availability: Availability;
  congregation: Congregation;
  active: boolean;
}

export interface User {
  id: number;
  name: string;
  phone: string;
  email: string;
  active: boolean;
}
