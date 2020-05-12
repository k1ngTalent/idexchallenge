import { GET_PROFILE } from "../store/constant";

const data = {
    userAccountInfo:{
        id:9999999997,
        email:"super@admin.com",
        fullName:"super admin",
        enabled:true,
        authorities:["ROLE_SUPER_ADMIN"],
        teams:[{id:1,name:"Sample team",description:"",type:"PRIVATE",members:null,submittedAt:null,addedAt:1586285107325},
        {"id":2,"name":"Sample team 2","description":"","type":"PRIVATE","members":null,"submittedAt":null,"addedAt":1586285212113},
        {"id":3,"name":"Sample team 3","description":"","type":"PRIVATE","members":null,"submittedAt":null,"addedAt":1586773744688},
        {"id":4,"name":"wqwqwqqwqw2121","description":"","type":"PRIVATE","members":null,"submittedAt":null,"addedAt":1586774028099},
        {"id":5,"name":"test team 1","description":"","type":"PRIVATE","members":null,"submittedAt":null,"addedAt":1586774140381},
        {"id":9999999997,"name":"General","description":null,"type":"PUBLIC","members":null,"submittedAt":null,"addedAt":1586281839672}],
        profilePictureURL:"https://secure.gravatar.com/avatar/7063e4e3d83ca275f016542320d08abc?s=400&d=identicon&r=g",
        notificationSettings:{"ideaUpdate":"IMMEDIATE","ideaLike":"IMMEDIATE","ideaComment":"IMMEDIATE","commentReply":"IMMEDIATE"}},
        recentlyLikedIdeas:[],
        notificationOptions:["IMMEDIATE","DAILY","WEEKLY","NEVER"],
        verified:true,

    }

    const initialState = {
        authenticated:true,
        language:"en" //'en','fr'
    }

    export default function profileReducer(state = initialState,action){
        switch(action.type){
            case GET_PROFILE.PENDING:
                return{
                    ...state,
                    isLoading:true,
                    profile:null
                }
            case GET_PROFILE.SUCCESS:
                return {
                    ...state,
                    isLoading:false,
                    profile:data,
                }
            case GET_PROFILE.FAILURE:
                return{
                    ...state,
                    isLoading:false,
                    profile:null
                }
            default:
                return state;

        }
    }
