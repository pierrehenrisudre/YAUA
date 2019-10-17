export interface IUserId {
  name: string;
  value: string;
}
export interface IUserName {
  title: string;
  first: string;
  last: string;
}
export interface IUserCoordinates {
  latitude: string;
  longitude: string;
}
export interface IUserLocation {
  street: {
    number: string;
    name: string
  };
  city: string;
  state: string;
  country: string;
  postcode: number;
  coordinates: IUserCoordinates;
  timezone: {
    offset: string;
    description: string;
  }
}
export interface IUser {
  id: IUserId;
  gender: string;
  name: IUserName;
  location: IUserLocation;
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
}
