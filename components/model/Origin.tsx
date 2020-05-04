export default class Origin {
    uuid: any;
    content: any;
    children: any;
    origin: any;
    created_at: any;
    updated_at: any;
    fiction_uuid: any;
    lft: number;
    rgt: number;
    lvl: number;
    parent_uuid: any;
    root: any;
    display: any;

    constructor(data) {
        this.content = data.content;
        this.uuid = data.uuid;
        this.created_at = data.created_at;
        this.children = data.children;
        this.fiction_uuid = data.fiction_uuid;
        this.display = 'true';
    }

    findNarrative(uuid) {
        // if it is the narrative, we send back the parent origin narrative
        if (this.uuid === uuid) {
            return this;
        }

        if (this.children) {

        }
    }
  }