export const updateObjectInArray = (items: any[], itemId: number, objPropName: string, newObjProps: Object) => {
    return items.map(item => item[objPropName] === itemId
        ? {...item, ...newObjProps}
        : item)
}