import {addLocValues} from "./strings";
import {tem1,tem2} from "./jsonTem1";
import * as TJS from "typescript-json-schema";


const users=[
    {
        id:1,
        Name:"n1",
        Age:18,
        Description:"test",
        City:"cc",
        Address:{
            City:"wuxisd2",
            tt:{
                name:"ng1",
                value:"vsd1"
            },
            Street:"s1ds2"
        },
        Address2:{
            City:"wuxig22",
            tt:{
                name:"ns12",
                value:"gv12"
            },
            Street:"s1g22"
        }
    },
    {
        id:2,
        Name:"n3",
        Age:19,
        Description:"test2",
        City:"cc",
        Address:{
            City:"wuxi1",
            tt:{
                name:"n11",
                value:"v11"
            },
            Street:"s112"
        },
        Address2:{
            City:"wuxi122",
            tt:{
                name:"n112",
                value:"v112"
            },
            Street:"s1212"
        }
    },
    {
        id:3,
        Name:"n3",
        Age:20,
        Description:"test2",
        City:"cc",
        Address:{
            City:"wuxi2",
            tt:{
                name:"n1",
                value:"v1"
            },
            Street:"s12"
        },
        Address2:{
            City:"wuxi22",
            tt:{
                name:"n12",
                value:"v12"
            },
            Street:"s122"
        }

    },
]
const pro=[
    {
        "id": 2,
        "name": "An ice sculpture",
        "price": 12.50,
        "tags": ["cold", "ice"],
        "dimensions": {
            "length": 7.0,
            "width": 12.0,
            "height": 9.5
        },
        "warehouseLocation": {
            "latitude": -78.75,
            "longitude": 20.4
        }
    },
    {
        "id": 3,
        "name": "A blue mouse",
        "price": 25.50,
        "dimensions": {
            "length": 3.1,
            "width": 1.0,
            "height": 1.0
        },
        "warehouseLocation": {
            "latitude": 54.4,
            "longitude": -32.7
        }
    }
]
export function parseTest(){
    //const str=JSON.stringify(users,["Name","id","Address","City"]);
    //const str=JSON.stringify(users,replacer);
// const jsonSchemaGenerator = require('json-schema-generator');
//    console.log(jsonSchemaGenerator(users));
//    const toJsonSchema = require('to-json-schema');
//    console.log(toJsonSchema(users,{arrays: {mode: 'all'}}));
var GenerateSchema = require('generate-schema');
const s=GenerateSchema.json(users);
iterateJson("==",s.items.properties);
// for(const [key, value] of Object.entries<any>(s.items.properties)){

//     console.log(`${key}: ${value.type}`);

// }
function iterateJson(space:string,o:any){
    for(const [key, value] of Object.entries<any>(o)){
        console.log(`${space}${key}: ${value.type}`);
        if(value.type==="object"){

            iterateJson(space+"==",value.properties);
        }
    }
}

}
function replacer(key:any,value:any){
    console.log(`key: ${key}; value: ${value}`)
    return value;

}
export function getValue(){
    const str2= addLocValues(tem2,[users[0]])
    console.log(JSON.stringify(str2));
}
