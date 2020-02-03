document.addEventListener("DOMContentLoaded", event => {

    const app = firebase.app();
    console.log(app);

    

});

function googleLogin(){
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)

        .then(result => {
            const user = result.user;
            document.writeln(`Hello ${user.displayName}`);
            console.log(user);
            displayPost();
        }).catch(console.log);

}

function displayPost(){
    const db = firebase.firestore();

    const myPost = db.collection(`posts`).doc(`first`);

    myPost.onSnapshot(doc => {

        const data = doc.data();
        document.write(data.title + `<br>`);
        document.write(data.views);
    });
    
}

function updatePost(e){
    const db = firebase.firestore();

    const myPost = db.collection(`posts`).doc(`first`);

    myPost.update({title: e.target.value})
    document.getElementById("query").innerHTML = "your value has been altered to " + "\"" +e.target.value + "\""; 
    

}