class Storage {
    constructor(names, storageType) {
        this.name = names
        this.storageType = window[!storageType ? "localStorage" : "sessionStorage"]
    }
    get() {

        return JSON.parse(this.storageType.getItem(this.name))
    }
    set() {

        return this.storageType.setItem(this.name, JSON.stringify(this.name))

    }
    clear() {
        localStorage.setItem(this.name, JSON.stringify(null))
    }
    isEmpty() {
        const storajeItem = localStorage.getItem(this.name)

        if (storajeItem === "null" || storajeItem === "undefined") {

            return true
        }

    }

}
const names = new Storage("names");
const Maxim = new Storage("Maxim");
const Nastya = new Storage("Nastya", "sessionStorage");
Nastya.set();
Nastya.get()
names.set();
Maxim.set();
names.get();
names.clear();
Maxim.clear()
names.isEmpty()