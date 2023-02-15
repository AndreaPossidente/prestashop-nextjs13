import Model from "./Model";

export default class Attachment extends Model {
  static ENDPOINT = "attachments";
  static MODEL_NAME = "attachment";

  constructor(attachment) {
    super();
    this.id = attachment.id;
    this.file = attachment.file;
    this.file_name = attachment.file_name;
    this.file_size = attachment.file_size;
    this.mime = attachment.mime;
    this.name = attachment.name;
    this.description = attachment.description;
    this.associations = attachment.associations;
  }

  // add non static CRUD
}
