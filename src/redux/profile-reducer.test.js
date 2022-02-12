import profileReducer, { addPostActionCreator, deletePost } from "./profile-reducer";

let state = {
   

    posts: [{ id: 1, message: 'Hi How are you?', lcount: '10' },
    { id: 2, message: 'Its my first post', lcount: '10' },
    { id: 3, message: 'Its my life', lcount: '1000' },
    { id: 4, message: 'faggot', lcount: '0' },
    ],
}

it('new Post length  shouldbe added', ()=> {
//1.test data 
let action = addPostActionCreator("It-Vadimutra.ry");
//2.action
let newState = profileReducer(state,action)
//3.expectation
expect( newState.posts.length).toBe(5);

});

it('new Post message  shouldbe added', ()=> {
//1.test data 
let action = addPostActionCreator("It-Vadimutra.ry");
//2.action
let newState = profileReducer(state,action)
//3.expectation
expect( newState.posts[4].message).toBe("It-Vadimutra.ry");
});

it('lengths after deleting should be decrement', ()=> {
    //1.test data 
    let action = deletePost(1);
    //2.action
    let newState = profileReducer(state,action)
    //3.expectation
    expect( newState.posts.length).toBe(3);
    });