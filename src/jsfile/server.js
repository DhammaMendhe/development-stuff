// eslint-disable-next-line
 export function asyncCall(){
    return new Promise((reject, resolve)=>{

    setTimeout(() => {
        console.log("resolving")
        resolve("resolve");
    }, 2000);
    })
}
 export async function func2(){

    console.log('resolving..')
    const result = await asyncCall();
    console.log(result)
}
func2();
