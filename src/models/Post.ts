import Deserializable from './Deserializable';

export default class Post implements Deserializable {
    public title?: string;
    public date?: string;
    public content?: string;
    public link?: string;

    public deserialize(input: any): this {
        Object.assign(this, input);

        return this;
    }
}
