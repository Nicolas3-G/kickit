const initialReducerState = {
    groups: new Map([
        [1, { id: 1, title: "Westlake Dance", type: "group", desc: "Expansive dance community, with shows and daily classes!", members: [1234, 1235, 1236], ownerId: 2, thumbnail: "/feedElementImages/image-9.png" }],
        [2, { id: 2, title: "Zari Meditation", type: "group", desc: "Meditation group with weekly open-air events", members: [1234, 1235, 1236], ownerId: 2, thumbnail: "/feedElementImages/image-1.png" }],
        [3, { id: 3, title: "Design Group", type: "group", desc: "Join a group of design-minded folks who love what they do!", members: [1234, 1235, 1236], ownerId: 2, thumbnail: "/feedElementImages/image-2.png" }],
      ]),
    events: new Map ([
        [1, { id: 1, title: "Game Night @ O'Mally's", type: "event", desc: "Broad games and drinks, come on down!", members: [], ownerId: 2, thumbnail: "/feedElementImages/image-3.png"}],
        [2, { id: 2, title: "Beer Run", type: "event", desc: "Bi-annual drink & run around lake merrit. Register now.", members: [], ownerId: 2, thumbnail: "/feedElementImages/image-4.png"}],
        [3, { id: 3, title: "Casual Speed Dating", type: "event", desc: "Come work on your rizzling with other singles", members: [], ownerId: 2, thumbnail: "/feedElementImages/image-5.png"}],
    ]),
    creations: new Map ([
        [1, { id: 1, title: "Abstract Drawing", type: "creation", desc: "Worked on this the other day at muddy's!", members: [], ownerId: 1, thumbnail: "/feedElementImages/image-6.png"}], 
        [2, { id: 2, title: "Handcrafted Pottery", type: "creation", desc: "Unleashed my creativity with handcrafted pottery at our meetup.", members: [], ownerId: 2, thumbnail: "/feedElementImages/image-8.png"}],
        [3, { id: 3, title: "Photography Showcase", type: "creation", desc: "Captured stunning moments during our photography meetup!", members: [], ownerId: 2, thumbnail: "/feedElementImages/image-7.png"}],
    ])
}

export default initialReducerState;