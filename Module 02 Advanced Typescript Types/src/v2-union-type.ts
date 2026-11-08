//Literal Type
type status = "Pending"
const myStatus: status = "Pending"

//Basic Union
type Identity = string | number
const myIdentity: Identity = 123
const myIdentity2: Identity = "123"

//Literal Union
type Role= "user" |"admin"
const userRole: Role= "admin"

//Object Union
type Admin = {id:number, role: "admin", privileges: string[]}
type Member = {id:number, role: "user", plant: string[]}

type User= Admin | Member
const user1: User={id: 123,role: "admin",privileges: ["create", "delete"]}
const user2: User={id: 456,role: "user",plant: ["plant1", "plant2"]}
