class DocumentItem {
    public text: string;
    private state: DocumentItemState

    getState() {
        return this.state
    }

    setState(state: DocumentItemState) {
        this.state = state;
        this.state.setContext(this)
    }

    constructor() {
        this.setState(new DraftDocumentItemState())
    }

    publishDoc() {
        this.state.publish()
    }
    deleteDoc() {
        this.state.delete()
    }
}

abstract class DocumentItemState {
    public name: string;
    public item: DocumentItem;

    public setContext(item: DocumentItem) {
        this.item = item;
    }

    public abstract publish(): void;

    public abstract delete(): void;
}

class DraftDocumentItemState extends DocumentItemState {
    constructor() {
        super();
        this.name = 'DraftDocumentItemState'
    }

    public publish(): void {
        console.log(`На сайт отправлен текст ${this.item.text}`)
        this.item.setState(new PublishDocumentItemState())
    }
    public delete(): void {
        console.log(`Документ удалён`)
    }
}

class PublishDocumentItemState extends DocumentItemState {
    constructor() {
        super();
        this.name = 'PublishDocumentItemState'
    }

    public publish(): void {
        console.log(`Нельзя опубликовать опубликованый документ`)
    }

    public delete(): void {
        console.log(`Снято с публикации`)
        this.item.setState(new DraftDocumentItemState())
    }
}

const item = new DocumentItem();
item.text = 'Первый пост'
console.log(item.getState())
item.publishDoc()
console.log(item.getState())
item.deleteDoc()
console.log(item.getState())