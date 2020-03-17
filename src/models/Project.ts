import Deserializable from './Deserializable';

class Project implements Deserializable {
    public image?: string;
    public title?: string;
    public description?: string[];
    public github?: string;
    public skills?: string[];
    public dates?: string[];

    public deserialize(input: any): this {
        Object.assign(this, input);

        return this;
    }
}

export default Project;
