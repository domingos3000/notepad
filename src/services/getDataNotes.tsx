 


export default () => {

    const getList = window.localStorage.getItem('list-task-note')

    if(getList){

        const listFormatJSON = JSON.parse(getList)

        return listFormatJSON;

    } else {
        return null;
    }

}