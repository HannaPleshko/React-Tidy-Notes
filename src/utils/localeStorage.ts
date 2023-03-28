function addToLocaleStorage(data: any) {
    localStorage.setItem('storage', JSON.stringify(data));
}

function readFromLocaleStorage() {
    const data = JSON.parse(localStorage.getItem('storage') ?? '')
    return data
}

export { addToLocaleStorage, readFromLocaleStorage }