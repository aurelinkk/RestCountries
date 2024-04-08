class Language {
    constructor(iso639_2, name) {
        this.iso639_2 = iso639_2;
        this.name = name;
    }

    toString() {
        return `${this.name} (${this.iso639_2})`;
    }
    

}