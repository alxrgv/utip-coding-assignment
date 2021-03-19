import { makeAutoObservable } from "mobx";
import { nanoid } from "nanoid";

export interface CommentDTO {
  email: string;
  country: string;
  text: string;
}

class Comment {
  public id: string;

  public email: string = "";
  public country: string = "";
  public text: string = "";

  constructor({ email, country, text }: CommentDTO) {
    makeAutoObservable(this);

    this.id = nanoid();

    this.email = email;
    this.country = country;
    this.text = text;
  }
}

export { Comment };
