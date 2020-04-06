export default class Narrative {
    content: any;
    uuid: any;

    constructor(narrative) {
      this.content = narrative.content;
      this.uuid = narrative.uuid;
    }
  }