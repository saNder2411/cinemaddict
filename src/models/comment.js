export default class Comment {
  constructor(data) {
    this.id = data[`id`];
    this.author = data[`author`];
    this.comment = data[`comment`];
    this.date = data[`date`];
    this.emotion = data[`emotion`];
  }

  static parseComment(result) {
    return new Comment(result);
  }

  static parseComments(result) {
    return result.map(Comment.parseComment);
  }
}
