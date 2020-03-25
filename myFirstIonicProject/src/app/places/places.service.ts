import { Injectable } from "@angular/core";
import { Place } from "./place.model";

@Injectable({
  providedIn: "root"
})
export class PlacesService {
  private places: Place[] = [
    {
      id: "1",
      title: "Eiffel Tower",
      imageURL: "https://cdn.getyourguide.com/img/tour_img-2422815-146.jpg",
      comments: ["Awesome place", "wonderful experience"]
    },
    {
      id: "2",
      title: "Statue of liberty",
      imageURL:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Statue_of_Liberty_7.jpg/1200px-Statue_of_Liberty_7.jpg",
      comments: ["Awesome place", "wonderful experience"]
    }
  ];

  constructor() {}

  getPlace(placeId: string) {
    return {
      ...this.places.find(place => {
        return place.id === placeId;
      })
    };
  }

  getPlaces() {
    return [...this.places];
  }

  getAddPlace(title: string, imageURL: string) {
    this.places.push({
      title,
      imageURL,
      comments: [],
      id: this.places.length + 1 + ""
    });
  }

  deletePlace(placeId: string) {
    this.places = this.places.filter(place => {
      return place.id !== placeId;
    });
  }
}