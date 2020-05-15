export default ({store, redirect}) => {
    if (!store.getters.authToken) {
        redirect('/');
    }
}