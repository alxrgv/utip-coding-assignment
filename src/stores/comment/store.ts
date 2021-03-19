import { makeAutoObservable } from "mobx";

import { Comment, CommentDTO } from "./model";

export class CommentStore {
  public comments: Array<Comment> = [];

  constructor() {
    makeAutoObservable(this);
  }

  addComment = (dto: CommentDTO) => {
    const comment = new Comment(dto);

    this.comments.push(comment);

    return comment;
  };
}
