const mergeObjects = (previousObject, newObject) => {
    let keys = Object.keys(newObject);
    keys.map(key => {
        if (previousObject.hasOwnProperty(key)) {
            const previousObjectValueForCurrentKey = previousObject[key]
            if (typeof(previousObjectValueForCurrentKey) === 'string') {
                previousObject[key] = newObject[key];
            } else if (typeof(previousObjectValueForCurrentKey) === 'object') {
                previousObject[key] = mergeObjects(previousObjectValueForCurrentKey, newObject[key])
            }
        } else {
            previousObject[key] = newObject[key];
        }
    })

    return previousObject;
}

module.exports = mergeObjects;
