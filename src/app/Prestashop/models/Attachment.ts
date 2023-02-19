import Model from "./Model";

export default class Attachment extends Model {
  static ENDPOINT = "attachments";

  id: number;
  file: string;
  file_name: string;
  file_size: number;
  mime: string;
  name: string;
  description: string;
  associations: AssociationSchema;

  constructor(attachment: AttachmentSchema) {
    super();
    this.id = Number(attachment.id);
    this.file = attachment.file;
    this.file_name = attachment.file_name;
    this.file_size = Number(attachment.file_size);
    this.mime = attachment.mime;
    this.name = attachment.name;
    this.description = attachment.description;
    this.associations = attachment.associations;
  }
}
