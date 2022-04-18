class Storage {
    constructor(names, storageType = "local") {
        this.name = names
        this.storageType = storageType

    }
    get() {
        if (this.storageType === "local") {
            console.log(this.name)
            return JSON.parse(localStorage.getItem(this.name))
        }
        if (this.storageType === "session") {
            console.log(thisMaxim)
            return JSON.parse(sessionStorage.getItem(this.name))
        }
    }
    set() {
        if (this.storageType === "local") {
            return localStorage.setItem(this.name, JSON.stringify(this.name))
        }
        if (this.storageType === "session") {
            return sessionStorage.setItem(this.name, JSON.stringify(this.name))
        }
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
const Nastya = new Storage("Nastya");
Nastya.set();
Nastya.get()
names.set();
Maxim.set();
names.get();
names.clear();
Maxim.clear()
names.isEmpty()